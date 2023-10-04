// import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
// import { CreateNextContextOptions, createNextApiHandler } from '@trpc/server/adapters/next'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { getAuth } from '@clerk/nextjs/server';
import { appRouter } from '@/trpc'
import { env } from '@/env.mjs'
import { createContextInner } from '@/trpc/context'
import { NextRequest } from 'next/server';



const handler = (req: NextRequest) => fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => {
        const auth = getAuth(req)
        return createContextInner({ req, auth })
    },
    onError:
        env.NODE_ENV === "development"
            ? ({ path, error }) => {
                console.error(`❌ tRPC failed on ${path}: ${error}`);
            }
            : undefined,
})

export { handler as GET, handler as POST }
