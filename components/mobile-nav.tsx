"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathname, isOpen])

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen()
    }
  }

  return (
    <div className="sm:hidden ">
      <Menu
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 text-slate-700 dark:text-slate-200"
      />

      {isOpen ? (
        <div className="fixed inset-0 z-0 w-full animate-in fade-in-20 slide-in-from-top-5">
          <ul className="absolute grid w-full gap-3 border-b border-zinc-200 bg-white px-10 pb-8 pt-20 shadow-xl dark:bg-slate-900">
            <li>
              <Link
                onClick={() => closeOnCurrent("/sign-up")}
                className="flex w-full items-center font-semibold text-green-600"
                href="/sign-up"
              >
                Get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </li>
            <li className="my-3 h-px w-full bg-gray-300" />
            <li>
              <Link
                onClick={() => closeOnCurrent("/sign-in")}
                className="flex w-full items-center font-semibold"
                href="/sign-in"
              >
                Sign in
              </Link>
            </li>
            <li className="my-3 h-px w-full bg-gray-300" />
            <li>
              <Link
                onClick={() => closeOnCurrent("/pricing")}
                className="flex w-full items-center font-semibold"
                href="/pricing"
              >
                Pricing
              </Link>
            </li>
            <ThemeToggle />
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav
