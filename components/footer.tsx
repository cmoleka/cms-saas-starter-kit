import { NextJSLogo } from "@/res/logos/NextJSLogo"
import { ResendLogo } from "@/res/logos/ResendLogo"
import { StripeLogo } from "@/res/logos/StripeLogo"
import { TierLogo } from "@/res/logos/TierLogo"
import { VercelLogo } from "@/res/logos/VercelLogo"

import { Typography } from "./ui/typography"

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 pb-24">
      <Typography variant="h5" component="span">
        Powered By
      </Typography>
      {/* Logos */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <TierLogo />
        <ResendLogo />
        <NextJSLogo />
        <VercelLogo />
        <StripeLogo />
      </div>
    </footer>
  )
}