import { ClerkLogo } from "@/res/logos/ClerkLogo"
import { NextJSLogo } from "@/res/logos/NextJSLogo"
import { PrismaLogo } from "@/res/logos/PrismaLogo"
import { ResendLogo } from "@/res/logos/ResendLogo"
import { ShadcnUILogo } from "@/res/logos/ShadcnUILogo"
import { StripeLogo } from "@/res/logos/StripeLogo"
import { TierLogo } from "@/res/logos/TierLogo"
import { TrpcLogo } from "@/res/logos/TrpcLogo"
import { VercelLogo } from "@/res/logos/VercelLogo"

import { Typography } from "@/components/ui/typography"

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 pb-24">
      <Typography variant="h5" component="span">
        Powered By
      </Typography>
      {/* Logos */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <NextJSLogo />
        <ShadcnUILogo className="font-bold text-[#9BA2A7]" />
        <PrismaLogo />
        <TrpcLogo />
        <ClerkLogo />
        <ResendLogo />
        <TierLogo />
        <VercelLogo />
        <StripeLogo />
      </div>
    </footer>
  )
}
