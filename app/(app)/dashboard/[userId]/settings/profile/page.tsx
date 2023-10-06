import { UserProfile } from "@clerk/nextjs"

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
