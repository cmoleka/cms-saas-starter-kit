"use client"

import { useUser } from "@clerk/nextjs"

import { Typography } from "../ui/typography"

const WelcomeMessage = () => {
  const { user } = useUser()

  return (
    <div>
      <Typography variant="h4" component="h4">
        Welcome back, {`${user?.firstName} ${user?.lastName || ""}`}
      </Typography>
      <Typography variant="body" component="p">
        Here is what is happening in your account.
      </Typography>
    </div>
  )
}

export default WelcomeMessage
