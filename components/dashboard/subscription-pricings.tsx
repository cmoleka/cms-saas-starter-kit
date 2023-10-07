import type { CurrentPlan } from "@/types"
import { clsx } from "clsx"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { CheckoutButton } from "@/components/dashboard/checkout-button"
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
  currantPlan: CurrentPlan
}

export default function SubscriptionPlans({
  pricings,
  currantPlan,
}: PricingsProps) {
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
        <div className="mt-16 flex flex-col gap-12 pb-24 ">
          <div className="mx-auto flex flex-col items-start gap-6 md:flex-row">
            {pricings.map((plan, planIndex) => (
              <div
                key={planIndex}
                className={clsx(
                  "flex h-[353px] flex-col gap-8 rounded-lg bg-slate-2 px-6 py-12",
                  plan?.planId === currantPlan.planId
                    ? "border-[3px] border-crimson-6"
                    : ""
                )}
              >
                <div className="flex flex-col gap-2">
                  <h6 className="body-semibold text-slate-12">{plan?.name}</h6>
                  <div className="flex items-center gap-3">
                    <h5 className="text-[32px] font-bold leading-9">
                      ${(plan?.base as number) / 100}
                    </h5>
                    <div className="flex flex-col items-start">
                      <span className="caption">
                        {plan?.currency.toUpperCase()}
                      </span>
                      <span className="caption-s text-slate-11">
                        Billed {plan?.interval}
                      </span>
                    </div>
                  </div>
                </div>
                {plan?.planId === currantPlan.planId ? (
                  <Button
                    variant="secondary"
                    disabled={true}
                    className="w-[256px] hover:bg-crimson-3"
                  >
                    Current plan
                  </Button>
                ) : (
                  <CheckoutButton plan={plan} currentPlan={currantPlan} />
                )}

                <div className="flex flex-col gap-4">
                  {plan?.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Icons.checkBox
                        className={clsx(
                          "h-6 w-6 ",
                          plan?.planId === currantPlan.planId
                            ? "stroke-crimson-9"
                            : "stroke-slate-11"
                        )}
                      />
                      <p className="body text-slate-11">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
