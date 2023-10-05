import type { NextApiRequest, NextApiResponse } from 'next';
import type { WebhookRequiredHeaders } from 'svix';
import type { IncomingMessage } from 'http'
import { headers } from "next/headers"
import { buffer } from 'micro'
import { resendWebhook } from '@/lib';
import type { ResendWebhookEvent } from '@/types';

const handler = async (req: Request) => {
    if (req.method !== 'POST') {
        return new Response('Method not allowed', {
            status: 405
        })
    }
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
    const payload = await req.json() as ResendWebhookEvent
    console.log("payload from req: ", payload)
    const body = JSON.stringify(payload);
    console.log("Body stringify: ", body)

    let evt: ResendWebhookEvent

    // Verify the payload with the headers
    try {
        evt = resendWebhook.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as ResendWebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    // Get the ID and type
    const eventType = evt.type;

    if (eventType === "email.sent") {
        // Do something when email is sent
        console.log('email sent')
    }
    if (eventType === "email.delivered") {
        // Do something when email is delivered
        console.log('email delivered')
    }
    if (eventType === "email.bounced") {
        // Do something when email is bounced
        console.log('email bounced')
    }

    return new Response('', { status: 201 })
};


export { handler as GET, handler as POST, handler as PUT }
