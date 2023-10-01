import Link from "next/link"
import { auth, currentUser, SignInButton, SignUpButton } from "@clerk/nextjs"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import MaxWidthWrapper from "./max-width-wrapper"
import { Button } from "./ui/button"
import UserAccountNav from "./user-account-nav"

// import MobileNav from "./mobile-nav"
// import UserAccountNav from "./user-account-nav"

const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>{siteConfig.name}</span>
          </Link>

          {/* <MobileNav isAuth={!!user} /> */}

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link href="/pricing">
                  <Button size="default" variant="link">
                    Pricing
                  </Button>
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
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>

                <UserAccountNav
                  name={
                    !user.firstName || !user.lastName
                      ? "Your Account"
                      : `${user.firstName} ${user.lastName}`
                  }
                  imageUrl={user.imageUrl ?? ""}
                />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
