// import { getUserSubscriptionPlan } from '@/lib/stripe'
import Image from "next/image"
import Link from "next/link"
import { TierIsSubscribed } from "@/utils/tier"
import { SignOutButton } from "@clerk/nextjs"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

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
        <Button className="aspect-square h-8 w-8 rounded-full bg-slate-400">
          <Avatar className="relative h-8 w-8">
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
              <Icons.dashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/${userId}/settings/profile`}>
              <Icons.user className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            {subscriptionPlan ? (
              <Link href={`/dashboard/${userId}/settings/subscription`}>
                <Icons.upgrade className="mr-2 h-4 w-4" />
                Manage Subscription
              </Link>
            ) : (
              <Link href={`/dashboard/${userId}/settings/subscription`}>
                <Icons.upgrade className="mr-2 h-4 w-4" />
                Upgrade
              </Link>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton>
            <Button className="w-full">
              <Icons.logout className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
