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
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-6">
              <Badge className="px-2 py-1">
                <Typography variant="xs" component="span">
                  Get started for free. No credit card required. Cancel anytime.
                </Typography>
              </Badge>
              <Typography
                variant="display2"
                component="h2"
                className="mx-auto max-w-[600px] text-center"
              >
                Ready to take your SaaS{" "}
                <Typography
                  variant="display2"
                  component="span"
                  className="bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-500"
                >
                  business to the next level?
                </Typography>
              </Typography>
              <Typography
                variant="lead"
                component="p"
                className="max-w-[600px]"
              >
                Get started on our free plan and upgrade when you are ready.
              </Typography>
            </div>
            <div className="mx-auto w-full max-w-[600px] space-y-4">
              <PricingPlans pricings={pricings} />
              <div className="mx-auto w-full max-w-[600px]">
                <ul className="my-6 flex flex-col gap-4">
                  {features.length &&
                    features.map((feature, index) => (
                      <li className="flex items-center gap-2" key={index}>
                        <Icons.checkBox className="h-4 w-4 stroke-green-700" />
                        <Typography
                          variant="sm"
                          component="p"
                          className="text-left"
                        >
                          {feature}
                        </Typography>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
