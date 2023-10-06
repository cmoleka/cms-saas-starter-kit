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
      <div className="mt-16 flex flex-col items-center gap-4">
        <Badge className="bg-slate-600 px-2 py-1">
          <Typography variant="xs" component="span">
            The leading SaaS starter Kit for ambitious developers
          </Typography>
        </Badge>
        <Typography
          variant="display1"
          component="h1"
          className="max-w-[700px] text-center"
        >
          The SaaS Solution for{" "}
          <Typography
            variant="display1"
            component="span"
            className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-700"
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
          className="max-w-[500px] text-center"
        >
          Here you can write a short description of your SaaS This subheading is
          usually laid out on multiple lines Impress your customers, straight to
          the point.
        </Typography>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <Button size="lg" variant="default">
            <Link href="/signup">
              <Typography
                variant="body"
                component="span"
                className="text-slate-100 dark:text-slate-900 font-semibold"
              >
                Get Started
              </Typography>
            </Link>
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Typography variant="xs" component="p">
          Free plan. No credit card required.
        </Typography>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full md:w-3/4 h-[500px] relative bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Preview"
            fill
            className="rounded-md object-cover absolute"
          />
        </div>
      </div>
      <Features />
      <Pricings />
    </>
  )
}
