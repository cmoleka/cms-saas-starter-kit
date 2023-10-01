import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson'
import type { Context } from './context';
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape
    }
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;


/**
 * Reusable middleware that checks if the user is authenticated
 */
const isAuthenticated = t.middleware(({ ctx, next }) => {
    if (!ctx.auth?.userId) {
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'You must be authenticated to perform this action',
            cause: 'AuthenticationError',
        })
    }

    return next({
        ctx: {
            // infers the session as non-nullable
            auth: ctx.auth
        },
    })
})

/**
 * Export of protected router and procedure helpers
 */
export const protectedProcedure = t.procedure.use(isAuthenticated);
