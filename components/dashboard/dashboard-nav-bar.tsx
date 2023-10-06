"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { Icons } from "@/components/icons"

export default function NavBar({ userId }: { userId: string }) {
  const segment = useSelectedLayoutSegment()

  const links = [
    {
      href: `/dashboard/${userId}`,
      label: "dashboard",
      icon: <Icons.dashboard className="mr-2 h-4 w-4" />,
    },
    {
      href: `/dashboard/${userId}/settings`,
      label: "settings",
      icon: <Icons.settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <div className="flex flex-col gap-2">
      {links.map(({ href, label, icon }, index) => (
        <NavBarItem
          key={index}
          href={href}
          label={label}
          isActive={segment === label}
        >
          {icon}
        </NavBarItem>
      ))}
    </div>
  )
}

interface NavBarItemProps {
  href: string
  label: string
  children: React.ReactNode
  isActive?: boolean
}

function NavBarItem({ href, label, children, isActive }: NavBarItemProps) {
  return (
    <Link
      href={href}
      className={`flex w-full items-center rounded-md border-transparent text-sm font-semibold transition-colors duration-200 py-2 px-3 pr-12 space-x-2.5 ${
        !isActive
          ? "dark:hover:bg-primary/5 hover:bg-primary/5"
          : "dark:bg-primary/10 bg-primary/5"
      }  dark:text-white text-primary dark:text-primary-foreground `}
    >
      {children}
      <span className="capitalize">{label}</span>
    </Link>
  )
}
