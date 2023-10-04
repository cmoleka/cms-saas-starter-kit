import { authMiddleware } from "@clerk/nextjs/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: [
        // public pages
        '/',
        '/pricing',
        '/api/trpc/test.getHelloWorld'
    ],
    ignoredRoutes: [
        '/api/webhooks/user',
    ]
});

export const config = {
    matcher: [
        "/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)",
    ],

};
