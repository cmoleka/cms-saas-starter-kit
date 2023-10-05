import { Webhook } from 'svix'
import { env } from "@/env.mjs";


// You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
const CLERK_WEBHOOK_SECRET = env.CLERK_WEBHOOK_SECRET
// You can find this in the Resend Dashboard -> Webhooks -> choose the webhook
const RESEND_WEBHOOK_SECRET = env.RESEND_WEBHOOK_SECRET

if (!CLERK_WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
}
if (!RESEND_WEBHOOK_SECRET) {
    throw new Error('Please add RESEND_WEBHOOK_SECRET from Resend Dashboard to .env or .env.local')
}

export const clearkWebhook = new Webhook(CLERK_WEBHOOK_SECRET)
export const resendWebhook = new Webhook(RESEND_WEBHOOK_SECRET)
