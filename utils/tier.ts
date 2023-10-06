import { OrgInfo } from "tier";
import { tier } from '@/lib'
import { TIER_FREE_PLAN_ID } from "@/config/tierConstants";
import type { UserJSON } from '@clerk/nextjs/server'
import { ClerkGetFirstEmail } from '@/utils';


export const TierLookup = async (session: UserJSON) => {
    try {
        const c = await tier.lookupOrg(`org:${session?.id}`);
        console.log("Checking if user/org already exists in Tier");
        console.log(c);
    } catch (error) {
        // Auto subscribe user to the free plan if they do not have any subscription already.
        // Add OrgInfo to create/update the customer profile while subscribing
        await tier.subscribe(`org:${session?.id}`, TIER_FREE_PLAN_ID, {
            info: {
                name: `${session?.first_name} ${session?.last_name}` as string,
                email: ClerkGetFirstEmail(session),
            } as OrgInfo,
        });
    }
}

// Check if user/org is subscribed to any plan
export const TierIsSubscribed = async (userId: string) => {
    const isSubscribed = await tier.lookupOrg(`org:${userId}`);
    if (!isSubscribed) {
        return false
    }
    return true
}
