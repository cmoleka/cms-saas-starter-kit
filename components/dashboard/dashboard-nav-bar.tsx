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
      className={`flex w-full items-center space-x-2.5 rounded-md border-transparent px-3 py-2 pr-12 text-sm font-semibold transition-colors duration-200 ${
        !isActive
          ? "hover:bg-primary/5 dark:hover:bg-primary/5"
          : "bg-primary/5 dark:bg-primary/10"
      }  text-primary dark:text-secondary-foreground`}
    >
      {children}
      <span className="capitalize">{label}</span>
    </Link>
  )
}
