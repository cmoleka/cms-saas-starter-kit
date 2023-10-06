// import { getUserSubscriptionPlan } from '@/lib/stripe'
import Image from "next/image"
import Link from "next/link"
import { TierIsSubscribed } from "@/utils/tier"
import { SignOutButton } from "@clerk/nextjs"

import { Icons } from "./icons"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

interface UserAccountNavProps {
  name: string
  imageUrl: string
  userId: string
}

const UserAccountNav = async ({
  imageUrl,
  name,
  userId,
}: UserAccountNavProps) => {
  const subscriptionPlan = await TierIsSubscribed(userId)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button className="rounded-full h-8 w-8 aspect-square bg-slate-400">
          <Avatar className="relative w-8 h-8">
            {imageUrl ? (
              <div className="relative aspect-square h-full w-full">
                <Image
                  fill
                  src={imageUrl}
                  alt="profile picture"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <AvatarFallback>
                <span className="sr-only">{name}</span>
                <Icons.user className="h-4 w-4 text-zinc-900" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/${userId}`}>
              <Icons.dashboard className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/${userId}/settings/profile`}>
              <Icons.user className="h-4 w-4 mr-2" />
              Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            {subscriptionPlan ? (
              <Link href={`/dashboard/${userId}/settings/subscription`}>
                <Icons.upgrade className="h-4 w-4 mr-2" />
                Manage Subscription
              </Link>
            ) : (
              <Link href={`/dashboard/${userId}/settings/subscription`}>
                <Icons.upgrade className="h-4 w-4 mr-2" />
                Upgrade
              </Link>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton>
            <Button className="w-full">
              <Icons.logout className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
