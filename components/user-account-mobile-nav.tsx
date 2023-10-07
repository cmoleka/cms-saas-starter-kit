import Image from "next/image"
import Link from "next/link"
import { ClerkGetFirstEmailUser } from "@/utils"
import { SignOutButton } from "@clerk/nextjs"
import type { User } from "@clerk/nextjs/server"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

type UserAccountMobileNavProps = {
  user: User
}

export default function UserAccountMobileNav({
  user,
}: UserAccountMobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden" asChild>
        <Button className="aspect-square h-8 w-8 rounded-full bg-slate-400">
          <Avatar className="relative h-8 w-8">
            {user.imageUrl ? (
              <div className="relative aspect-square h-full w-full">
                <Image
                  fill
                  src={user.imageUrl}
                  alt="profile picture"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <AvatarFallback>
                <span className="sr-only">{user.firstName}</span>
                <Icons.user className="h-4 w-4 text-zinc-900" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="text-left">
          <div className="flex flex-col space-y-1.5">
            <Avatar className="relative h-12 w-12">
              {user.imageUrl ? (
                <div className="relative aspect-square h-full w-full">
                  <Image
                    fill
                    src={user.imageUrl}
                    alt="profile picture"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <AvatarFallback>
                  <span className="sr-only">{user.firstName}</span>
                  <Icons.user className="h-4 w-4 text-zinc-900" />
                </AvatarFallback>
              )}
            </Avatar>
            <Typography variant="h2" component="span">
              {user.firstName}
            </Typography>
            <Typography variant="sm" component="span">
              {ClerkGetFirstEmailUser(user.emailAddresses)}
            </Typography>
          </div>
          <Separator />
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Button asChild>
            <Link href={`/dashboard/${user.id}`}>
              <Icons.dashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/dashboard/${user.id}/settings/profile`}>
              <Icons.user className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </Button>
          <Button asChild>
            <Link href={`/dashboard/${user.id}/settings/subscription`}>
              <Icons.upgrade className="mr-2 h-4 w-4" />
              Manage Subscription
            </Link>
          </Button>
          <Separator />
        </div>
        <SheetFooter>
          <div className="flex flex-col items-end space-y-8">
            <SignOutButton>
              <Button className="w-full">
                <Icons.logout className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </SignOutButton>
            <ThemeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
