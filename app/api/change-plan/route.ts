import { currentUser } from "@clerk/nextjs";
import type Stripe from "stripe";
import type { PlanName } from "tier";
import { z } from "zod";

import { env } from "@/env.mjs";
import { tier } from "@/lib/tier";

export async function GET(req: Request) {
    try {
        const user = await currentUser();

        if (!user) {
            return new Response("Unauthorized", { status: 403 });
        }

        const { searchParams } = new URL(req.url);
        const plan = searchParams.get("plan") as PlanName;

        const paymentMethodResponse = await tier.lookupPaymentMethods(`org:${user?.id}`);

        if (paymentMethodResponse.methods[0] === undefined) {
            console.log("set up mode checkout");
            const successUrl = new URL(`/api/subscribe?plan=${plan}`, env.NEXT_PUBLIC_APP_URL).toString();
            const cancelUrl = new URL(`/dashboard/${user.id}/settings/subscription`, env.NEXT_PUBLIC_APP_URL).toString();

            const checkout = await tier.checkout(`org:${user?.id}`, successUrl, {
                cancelUrl,
            });

            return new Response(JSON.stringify({ url: checkout.url }));
        } else {
            console.log("subscribe");
            try {
                const paymentMethod = paymentMethodResponse.methods[0] as unknown as Stripe.PaymentMethod;
                await tier.subscribe(`org:${user?.id}`, plan, {
                    paymentMethodID: paymentMethod.id,
                });
            } catch (error) {
                console.log(error);
            }
            return new Response(
                JSON.stringify({
                    url: new URL("/dashboard", env.NEXT_PUBLIC_APP_URL),
                })
            );
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 });
        }

        return new Response("Something really bad happened when trying to subscribe", { status: 500 });
    }
}
