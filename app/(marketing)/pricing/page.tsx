import { Metadata } from "next"
import { clsx } from "clsx"

import { pullPricingTableData } from "@/lib/services/pricingTableData"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Pricing",
}

export default async function PricingPage() {
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
    <>
      {/* Hero Copy */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <Typography
          variant="display1"
          component="h1"
          className="w-full px-4 text-center md:w-[805px] md:px-0"
        >
          Easy & flexible pricing
        </Typography>
        <Typography
          variant="large"
          component="p"
          className="w-full px-4 text-center font-semibold md:w-[572px] md:px-0"
        >
          Whatever plan you choose, know that our AI will generate the best
          marketing copy.
        </Typography>
      </div>

      {/* Pricing */}
      <div className="my-16 flex flex-col items-center">
        <div className="mx-auto flex flex-col items-start gap-6 md:flex-row">
          {pricing.map((plan, planIndex) => (
            <div
              key={planIndex}
              className={clsx(
                "flex h-fit flex-col gap-8 rounded-lg bg-slate-2 px-6 py-12",
                plan?.promoted === true ? "border-[3px] border-crimson-6" : ""
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
                <div className="flex items-center gap-3">
                  <Typography variant="h1" component="h5">
                    ${(plan?.base as number) / 100}
                  </Typography>
                  <div className="flex flex-col items-start">
                    <Typography
                      variant="body"
                      component="span"
                      className="font-semibold"
                    >
                      {plan?.currency.toUpperCase()}
                    </Typography>
                    <Typography variant="sm" component="span">
                      Billed {plan?.interval}
                    </Typography>
                  </div>
                </div>
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
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Icons.checkBox className="h-4 w-4 stroke-green-700" />
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
    </>
  )
}
