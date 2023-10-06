// import { getUserSubscriptionPlan } from '@/lib/stripe'
import Image from "next/image"
import Link from "next/link"
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
}

const UserAccountNav = async ({ imageUrl, name }: UserAccountNavProps) => {
  //   const subscriptionPlan = await getUserSubscriptionPlan()

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

      <DropdownMenuContent className="w-fit" align="end">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Icons.dashboard className="h-4 w-4 mr-2" />
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icons.user className="h-4 w-4 mr-2" />
            <Link href="/user-profile">Profile</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            {/* {subscriptionPlan?.isSubscribed ? (
              <Link href='/dashboard/billing'>
              Manage Subscription
              </Link>
            ) : ( */}
            <Icons.upgrade className="h-4 w-4 mr-2" />
            <Link href="/pricing">Upgrade</Link>
            {/* )} */}
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
