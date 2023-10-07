import Image from "next/image"
import Link from "next/link"

import { constructMetadata } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/icons"
import Features from "@/components/marketing/features"
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
            The leading SaaS starter Kit for ambitious developers
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
          Here you can write a short description of your SaaS This subheading is
          usually laid out on multiple lines Impress your customers, straight to
          the point.
        </Typography>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <Button size="lg" variant="default" asChild>
            <Link href="/signup">
              Get Started
              <Icons.chevronRight className="ml-2 h-4 w-4 " />
            </Link>
          </Button>
        </div>
        <Typography variant="xs" component="p">
          Free plan. No credit card required.
        </Typography>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative h-[500px] w-full rounded-lg bg-cyan-500 shadow-2xl shadow-cyan-500/50 md:w-3/4">
          <Image
            src="https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Preview"
            fill
            className="absolute rounded-md object-cover"
          />
        </div>
      </div>
      <Features />
      <Pricings />
    </>
  )
}
