import type { NextApiRequest, NextApiResponse } from 'next';
import { WebhookRequiredHeaders } from 'svix';
import { IncomingMessage } from 'http'
import { webhook } from '@/lib';
import type { ResendEventTypes, ResendWebhookEvent } from '@/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
        case 'POST': {
            try {
                const payload = await req.body
                console.log("email webhook payload", payload)
                const headers = req.headers as IncomingMessage['headers'] & WebhookRequiredHeaders

                const event = webhook.verify(payload, headers) as ResendWebhookEvent

                switch (event.type) {
                    case 'email.delivered': {
                        console.log('email delivered')
                        break
                    }
                    case 'email.bounced': {
                        console.log('email bounced')
                        break
                    }
                }

                return res.status(200).end()
            } catch (error) {
                return res.status(400).send(error)
            }
        }
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
};
