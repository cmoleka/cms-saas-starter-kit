import { Tier } from 'tier/client'
import { env } from '@/env.mjs'

export const tier = new Tier({
    baseURL: env.TIER_BASE_URL,
    apiKey: env.TIER_API_KEY,
    debug: true,
})
