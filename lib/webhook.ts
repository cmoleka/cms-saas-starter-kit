import { Webhook } from 'svix'
import { env } from "@/env.mjs";


// You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
const SVIX_WEBHOOK_SECRET = env.SVIX_WEBHOOK_SECRET

if (!SVIX_WEBHOOK_SECRET) {
    throw new Error('Please add SVIX_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
}

export const webhook = new Webhook(SVIX_WEBHOOK_SECRET)
