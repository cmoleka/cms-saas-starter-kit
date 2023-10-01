"use client"

import { useUser } from "@clerk/nextjs"

import { trpc } from "@/app/_trpc/client"

const TestMessage = () => {
  const { isSignedIn } = useUser()
  const { data: TestMessage } = trpc.test.getHelloWorld.useQuery()
  const { data: SecretMessage } = trpc.test.getSecretMessage.useQuery(
    undefined,
    {
      enabled: isSignedIn,
    }
  )

  return (
    <div>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by:&nbsp;
        <code className="font-mono font-bold">{TestMessage?.message}</code>{" "}
        &nbsp;
        <code className="font-mono font-bold">
          {SecretMessage?.message || "Not logged in"}
        </code>
      </p>
    </div>
  )
}

export default TestMessage
