import Link from "next/link"
import { clsx } from "clsx"

import { pullPricingTableData } from "@/lib/services/pricingTableData"
import { Badge } from "@/components/ui/badge"

import { Icons, type Icon, type IconProps } from "../icons"
import { Button } from "../ui/button"
import { Typography } from "../ui/typography"

export default async function Pricings() {
  const pricing = await pullPricingTableData()

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
              <div className="my-16 flex flex-col items-center">
                <div className="mx-auto flex flex-col items-center gap-6 md:flex-row">
                  {pricing.map((plan, planIndex) => (
                    <div
                      key={planIndex}
                      className={clsx(
                        "flex h-fit flex-col gap-8 rounded-lg dark:bg-slate-900 bg-slate-200 px-6 py-12",
                        plan?.promoted === true
                          ? "border-[3px] border-slate-500"
                          : ""
                      )}
                    >
                      <div className="flex flex-col gap-2">
                        <Typography
                          variant="sm"
                          component="span"
                          className="uppercase font-bold"
                        >
                          {plan?.name}
                        </Typography>
                        <Typography variant="h1" component="h5">
                          ${(plan?.base as number) / 100}
                        </Typography>
                      </div>
                      {plan?.promoted ? (
                        <Button>
                          <Icons.upgrade className="h-4 w-4 mr-2" />
                          Buy {plan?.name} license
                        </Button>
                      ) : (
                        <Button>Get {plan?.name} license</Button>
                      )}

                      <div className="flex flex-col gap-4">
                        {plan?.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <Icons.checkBox className="h-6 w-6" />
                            <p className="body text-slate-11">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
