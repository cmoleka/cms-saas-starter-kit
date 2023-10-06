import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import type { PlanName } from "tier";
import { z } from "zod";

import { tier } from "@/lib/tier";

export async function GET(req: Request) {
    try {
        const user = await currentUser();

        if (!user) {
            return new Response("Unauthorized", { status: 403 });
        }
        console.log("subscribe route")

        const { searchParams } = new URL(req.url);
        const plan = searchParams.get("plan") as PlanName;

        console.log("lookup payment methods")
        const paymentMethodResponse = await tier.lookupPaymentMethods(`org:${user?.id}`);

        try {
            const paymentMethod = paymentMethodResponse.methods[0] as unknown as Stripe.PaymentMethod;
            console.log("subscribing to plan")
            await tier.subscribe(`org:${user?.id}`, plan, {
                paymentMethodID: paymentMethod.id,
            });
            console.log("redirecting to dashboard")
            return NextResponse.redirect(new URL("/dashboard", req.url));
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 });
        }

        return new Response("Something really bad happened when trying to subscribe", { status: 500 });
    }
}
