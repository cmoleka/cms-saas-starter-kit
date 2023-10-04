import { Prisma } from "@prisma/client"
import { z } from "zod"

import { publicProcedure, router, protectedProcedure } from "../trpc"

export const testRouter = router({
    getHelloWorld: publicProcedure.query(() => {
        return { message: "Hello world!" }
    }),
    getSecretMessage: protectedProcedure.query(() => {
        return { message: "You are authenticated!" }
    })
})
