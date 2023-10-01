import { PrismaAdapter } from '@next-auth/prisma-adapter'
import type { NextAuthOptions } from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import { OrgInfo } from "tier";


import { env } from '@/env.mjs'
import { TIER_FREE_PLAN_ID } from "@/config/tierConstants";
import { prisma } from '@/lib/db'
import { tier } from '@/lib/tier'


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
        maxAge: 2 * 24 * 60 * 60, // 2 days
    },
    providers: [
        TwitterProvider({
            clientId: env.TWITTER_CLIENT_ID,
            clientSecret: env.TWITTER_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        session: async ({ token, session }) => {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.image = token.picture;

                // Check if org/user already exists in ?Stripe, else create and subscribe to free tier.
                try {
                    const c = await tier.lookupOrg(`org:${session?.user?.id}`);
                    console.log("Checking if user/org already exists in Tier");
                    console.log(c);
                } catch (error) {
                    // Auto subscribe user to the free plan if they do not have any subscription already.
                    // Add OrgInfo to create/update the customer profile while subscribing
                    await tier.subscribe(`org:${session?.user?.id}`, TIER_FREE_PLAN_ID, {
                        info: {
                            name: session?.user?.name as string,
                            email: session?.user?.email as string,
                        } as OrgInfo,
                    });
                } finally {
                    return session
                }
            }
        },
        jwt: async ({ token, user }) => {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                },
            });

            if (!dbUser) {
                if (user) {
                    token.id = user?.id;
                }
                return token;
            }

            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
            };
        },
    }

}
