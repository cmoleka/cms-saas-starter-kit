import { router } from '@/trpc/trpc';
import { testRouter } from './router/test';

export const appRouter = router({
    test: testRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
