import { pullPricingTableData } from "@/lib/services/pricingTableData"
import { Badge } from "@/components/ui/badge"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/icons"
import PricingPlans from "@/components/marketing/pricingPlans"

export default async function Pricing() {
  const pricings = await pullPricingTableData()

  const features = [
    "Lifetime access to the SaaS Starter Kits",
    "Use any of the kits you want to use (Pro and Teams licenses only)",
    "Build unlimited applications, with any starter kit",
    "Continuous and frequent updates (packages, features, etc.)",
    "Access to the Discord community",
    "Community and Chat support",
    "Feature requests",
    "Access to new SaaS Starters and resources before anyone else",
    "One-time payment, no subscriptions",
    "Access to pre-built codebases (such as makerpal.io)",
  ]

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <Badge className="bg-slate-600 px-2 py-1">
                <Typography variant="xs" component="span">
                  Get started for free. No credit card required. Cancel anytime.
                </Typography>
              </Badge>
              <Typography
                variant="display2"
                component="h2"
                className="bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900 dark:from-slate-100 dark:to-slate-500 max-w-[600px] mx-auto"
              >
                Ready to take your SaaS business to the next level?
              </Typography>
              <Typography
                variant="lead"
                component="p"
                className="max-w-[600px]"
              >
                Get started on our free plan and upgrade when you are ready.
              </Typography>
            </div>
            <div className="w-full max-w-[600px] space-y-4 mx-auto">
              <PricingPlans pricings={pricings} />
              <div className="w-full max-w-[600px] mx-auto">
                <ul className="my-6 flex flex-col gap-4">
                  {features.length &&
                    features.map((feature, index) => (
                      <li className="flex gap-2 items-center" key={index}>
                        <Icons.checkBox className="h-4 w-4 stroke-green-700" />
                        <Typography variant="sm" component="p">
                          {feature}
                        </Typography>
                      </li>
                    ))}
                </ul>
                P
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
