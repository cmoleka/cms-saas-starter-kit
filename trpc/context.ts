import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { getAuth, SignedInAuthObject, SignedOutAuthObject } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';

interface AuthContext {
    auth: SignedInAuthObject | SignedOutAuthObject;
}

export const createContextInner = async ({ auth }: AuthContext) => {
    return {
        auth,
        prisma
    }
}

export const createContext = async (
    opts: trpcNext.CreateNextContextOptions
) => {
    return await createContextInner({ auth: getAuth(opts.req) })
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
