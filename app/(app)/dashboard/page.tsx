import { permanentRedirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs"

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    return permanentRedirect("/sign-in")
  }

  return permanentRedirect(`/dashboard/${user.id}`)
}
