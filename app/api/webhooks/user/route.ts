import { prisma } from "@/lib";
import { headers } from "next/headers"
import { webhook } from '@/lib'
import type { WebhookEvent } from '@clerk/nextjs/server'
import { ResendSendBannedEmail, ResendSendDeletedEmail, ResendSendProfileUpdateEmail, ResendSendWelcomeEmail, TierLookup } from "@/utils";
import { ClerkGetFirstEmail } from "@/utils";




const handler = async (req: Request) => {

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload);

    let evt: WebhookEvent

    // Verify the payload with the headers
    try {
        evt = webhook.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    // Get the ID and type
    const eventType = evt.type;

    if (eventType === "user.created" || eventType === "user.updated") {
        const { id, ...attributes } = evt.data;
        // Get the user's email from Clerk
        const userEmail = ClerkGetFirstEmail(evt.data)

        // Updates the user on our end
        await prisma.user.upsert({
            where: { emailAddress: userEmail, isBanned: false },
            create: {
                externalId: id,
                firstName: attributes.first_name,
                lastName: attributes.last_name,
                gender: attributes.gender,
                birthday: attributes.birthday,
                image: attributes.image_url,
                twitterId: attributes.username ? attributes.username : '',
                emailAddress: userEmail,
            },
            update: {
                externalId: id,
                firstName: attributes.first_name,
                lastName: attributes.last_name,
                gender: attributes.gender,
                birthday: attributes.birthday,
                image: attributes.image_url,
                twitterId: attributes.username ? attributes.username : '',
                emailAddress: userEmail,
                isClerkDeleted: false,
            },
        });
        switch (eventType) {
            case "user.created": {
                // Send the user a welcome email
                await ResendSendWelcomeEmail(userEmail, attributes.first_name, attributes.image_url)
                // Subscribe the user to the free plan
                TierLookup(evt.data)
                break
            }
            case "user.updated": {
                // Send the user a profile update email
                await ResendSendProfileUpdateEmail(userEmail, attributes.first_name, attributes.image_url)
                break
            }
        }
    }
    if (eventType === "user.deleted") {
        // Updates the user to deleted on our end
        const { id } = evt.data;
        const user = await prisma.user.update({
            where: { externalId: id },
            data: {
                isClerkDeleted: true,
            }
        });
        // Send the user a deleted email
        await ResendSendDeletedEmail(user.emailAddress, user.firstName as string)
    }
    return new Response('', { status: 201 })
}

type EventType = "user.created" | "user.updated" | "*";

type Event = {
    data: Record<string, string | number>;
    object: "event";
    type: EventType;
};


export { handler as GET, handler as POST, handler as PUT }
