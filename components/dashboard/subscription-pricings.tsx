import type { CurrentPlan, PricingTableData } from "@/types"
import { clsx } from "clsx"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { CheckoutButton } from "@/components/dashboard/checkout-button"
import { Icons } from "@/components/icons"

interface PricingsProps {
  pricings: PricingTableData[]
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
                    ? "border-[3px] border-primary"
                    : ""
                )}
              >
                <div className="flex flex-col gap-2">
                  <Typography
                    variant="h6"
                    component="h6"
                    className="font-semibold"
                  >
                    {plan?.name}
                  </Typography>
                  <div className="flex items-center gap-3">
                    <Typography
                      variant="h4"
                      component="h4"
                      className="font-bold leading-9"
                    >
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
                {plan?.planId === currantPlan.planId ? (
                  <Button
                    variant="secondary"
                    disabled={true}
                    className="hover:bg-crimson-3 w-[256px]"
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
                      <Typography variant="body" component="p">
                        {feature}
                      </Typography>
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
