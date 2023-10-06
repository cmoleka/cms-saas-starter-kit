import { UserProfile } from "@clerk/nextjs"

import { constructMetadata } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "User Profile",
  description: "User profile for the SaaS Starter Kit.",
})

const UserProfilePage = () => {
  return (
    <UserProfile
      appearance={{
        variables: {
          colorPrimary: "#4ecdc4",
          colorText: "#2a2a2a",
          colorTextOnPrimaryBackground: "white",
        },
      }}
    />
  )
}

export default UserProfilePage
