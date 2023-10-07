import { clsx } from "clsx"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/icons"

type PricingPlan =
  | {
      planId: `plan:${string}@${string}`
      currency: string
      interval: string
      promoted: boolean
      name: string
      base: number
      features: string[]
    }
  | undefined

interface PricingsProps {
  pricings: PricingPlan[]
}

export default function PricingPlans({ pricings }: PricingsProps) {
  if (!pricings) {
    return (
      <div className="my-16 flex flex-col items-center">
        <div className="mx-auto flex flex-col items-center gap-6 md:flex-row">
          <Typography variant="h3" component="h3">
            No Subscription Plans Available
          </Typography>
          <Typography variant="lead" component="p">
            Please contact support for more information.
          </Typography>
        </div>
      </div>
    )
  }

  return (
    <div className="my-16 flex flex-col items-center">
      <div className="mx-auto flex flex-col items-center gap-6 md:flex-row">
        {pricings.map((plan, planIndex) => (
          <div
            key={planIndex}
            className={clsx(
              "flex h-fit flex-col gap-8 rounded-lg dark:bg-slate-900 bg-slate-200 px-6 py-12",
              plan?.promoted === true ? "border-[3px] border-slate-500" : ""
            )}
          >
            <div className="flex flex-col gap-2">
              <Typography
                variant="sm"
                component="span"
                className="font-bold uppercase"
              >
                {plan?.name}
              </Typography>
              <Typography variant="h1" component="h5">
                ${(plan?.base as number) / 100}
              </Typography>
            </div>
            {plan?.promoted ? (
              <Button>
                <Icons.upgrade className="mr-2 h-4 w-4" />
                Buy {plan?.name} license
              </Button>
            ) : (
              <Button>Get {plan?.name} license</Button>
            )}

            <div className="flex flex-col gap-4">
              {plan?.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <Icons.checkBox className="h-6 w-6" />
                  <p className="body text-slate-11">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
