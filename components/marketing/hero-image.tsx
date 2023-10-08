"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

export const HeroImage = () => {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case "light":
      src = "/assets/landing/dashboard-light.png"
      break
    case "dark":
      src = "/assets/landing/dashboard-dark.png"
      break
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      break
  }

  return (
    <Image
      src={src}
      fill
      alt="Dashboard Preview"
      className="absolute rounded-md object-cover object-left-top"
    />
  )
}
