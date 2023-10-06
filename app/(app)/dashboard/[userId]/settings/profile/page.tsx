import { UserProfile } from "@clerk/nextjs"

import { constructMetadata } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"

export const metadata = constructMetadata({
  title: "User Profile",
  description: "User profile for the SaaS Starter Kit.",
})

const UserProfilePage = () => {
  return (
    <div className="flex flex-col space-y-6 pb-36">
      <div>
        <Typography variant="h3" component="h3">
          User Profile
        </Typography>
        <Typography variant="lead" component="p">
          Manage your User Profile
        </Typography>
      </div>
      <UserProfile
        appearance={{
          variables: {
            colorPrimary: "#4ecdc4",
            colorText: "#2a2a2a",
            colorTextOnPrimaryBackground: "white",
          },
        }}
      />
    </div>
  )
}

export default UserProfilePage
