import { SignIn } from "@clerk/nextjs"

import { constructMetadata } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "Sign In",
  description: "Sign in to your account.",
})

export default function SignInPage() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-4">
      <SignIn />
    </div>
  )
}
