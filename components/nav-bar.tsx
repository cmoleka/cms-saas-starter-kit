import Link from "next/link"
import { CmsSKLogo } from "@/res/logos/CmsSKLogo"
import { currentUser, SignInButton, SignUpButton } from "@clerk/nextjs"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/icons"
import MobileNav from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import UserAccountMobileNav from "@/components/user-account-mobile-nav"
import UserAccountNav from "@/components/user-account-nav"

const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-slate-100 dark:border-slate-700 bg-white/75 dark:bg-slate-900 backdrop-blur-lg transition-all">
      <div className="px-5">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40">
            <CmsSKLogo />
          </Link>

          {!user ? <MobileNav /> : <UserAccountMobileNav user={user} />}

          <div className="hidden items-center space-x-4 sm:flex">
            {!user?.id ? (
              <>
                <Link href="/pricing">
                  <Typography variant="link" component="span">
                    Pricing
                  </Typography>
                </Link>
                <SignInButton>
                  <Button size="default">Sign in</Button>
                </SignInButton>
                <SignUpButton>
                  <Button variant="secondary">
                    <Icons.sun className="mr-2 h-4 w-4" />
                    Sign up
                  </Button>
                </SignUpButton>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href={`/dashboard/${user.id}`}>Dashboard</Link>
                </Button>

                <UserAccountNav
                  name={
                    !user.firstName
                      ? "Your Account"
                      : `${user.firstName} ${user.lastName || ""}`
                  }
                  imageUrl={user.imageUrl ?? ""}
                  userId={user.id}
                />
              </>
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
