import { SignUp } from "@clerk/nextjs"

import { constructMetadata } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "Sign Up",
  description: "Sign up for an account.",
})

export default function SignUpPage() {
  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      <SignUp />
    </div>
  )
}
