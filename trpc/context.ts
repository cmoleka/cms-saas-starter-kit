import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { getAuth, type SignedInAuthObject, type SignedOutAuthObject } from '@clerk/nextjs/server';
import { prisma } from '@/lib';
import type { GetServerSidePropsContext } from "next";
import type { NextRequest } from "next/server";



interface AuthContext {
    auth: SignedInAuthObject | SignedOutAuthObject | null;
    req: NextRequest | GetServerSidePropsContext['req'] | null
}

export const createContextInner = async (opts: AuthContext) => {
    return {
        auth: opts.auth,
        req: opts.req,
        prisma
    }
}

export const createContext = async (
    opts: trpcNext.CreateNextContextOptions
) => {
    const auth = getAuth(opts.req)
    return await createContextInner({ auth, req: opts.req })
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
