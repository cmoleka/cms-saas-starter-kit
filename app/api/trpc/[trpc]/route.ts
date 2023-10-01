// import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
// import { CreateNextContextOptions, createNextApiHandler } from '@trpc/server/adapters/next'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { appRouter } from '@/trpc'
import { env } from '@/env.mjs'
import type { Context } from '@/trpc/context'



const handler = (req: Request) => fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}) as Context,
    onError:
        env.NODE_ENV === "development"
            ? ({ path, error }) => {
                console.error(`❌ tRPC failed on ${path}: ${error}`);
            }
            : undefined,
})

export { handler as GET, handler as POST }
