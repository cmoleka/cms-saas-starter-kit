import { PrismaClient } from "@prisma/client";
import { env } from "@/env.mjs";

declare global {
    // eslint-disable-next-line no-var
    var cachedPrisma: PrismaClient | undefined;
}

export const prisma = global.cachedPrisma || new PrismaClient({
    log: env.NODE_ENV === "development" ? ['query', 'error', 'warn'] : ['error'],
});

if (env.NODE_ENV !== "production") {
    global.cachedPrisma = prisma;
}
