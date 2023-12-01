import Link from "next/link"

import { constructMetadata } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/icons"
import Features from "@/components/marketing/features"
import { HeroImage } from "@/components/marketing/hero-image"
import Pricings from "@/components/marketing/pricing"

export const metadata = constructMetadata({
  title: "NextJs SaaS Starter Kit",
  description:
    "A Next.js starter kit for building SaaS applications by Carlo Moleka Sambea.",
})

export default async function IndexPage() {
  return (
    <>
      {/* Hero Copy */}
      <div className="mt-16 flex flex-col items-center gap-y-6">
        <Badge className="px-2 py-1">
          <Typography variant="xs" component="span">
            🚀 Turbocharge Your SaaS Development
          </Typography>
        </Badge>
        <Typography
          variant="display1"
          component="h1"
          className="w-full text-center md:max-w-[700px]"
        >
          The SaaS Solution for{" "}
          <Typography
            variant="display1"
            component="span"
            className="bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent"
          >
            developers and founders
          </Typography>
        </Typography>
      </div>
      {/* Hero CTA */}
      <div className="mb-20 mt-10 flex flex-col items-center gap-4">
        <Typography
          variant="lead"
          component="p"
          className="w-full text-center md:max-w-[500px]"
        >
          Simplify Your Development Journey with Our Feature-Packed SaaS Starter
          Pack. Get Straight to Building Amazing Products.
        </Typography>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Button size="lg" variant="default" asChild>
            <Link href="/signup">
              Get Started
              <Icons.chevronRight className="ml-2 h-4 w-4 " />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link
              href="https://github.com/cmoleka/cms-saas-starter-kit"
              target="_blank"
            >
              View on Github
              <Icons.gitHub className="ml-2 h-4 w-4 " />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative h-[500px] w-full rounded-lg bg-cyan-500 shadow-2xl shadow-cyan-500/50 md:w-3/4">
          <HeroImage />
        </div>
      </div>
      <Features />
      {/* <Pricings /> */}
    </>
  )
}
