import { tier } from "@/lib"
import { currentUser } from "@clerk/nextjs"
import clsx from "clsx"
import type Stripe from "stripe"

import { pullCurrentPlan } from "@/lib/services/currentPlan"
import { pullPricingTableData } from "@/lib/services/pricingTableData"
import { constructMetadata } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import SubscriptionPlans from "@/components/dashboard/subscription-pricings"
import { Icons } from "@/components/icons"

export const dynamic = "force-dynamic"

export const metadata = constructMetadata({
  title: "Subscription",
  description: "User subscription for the SaaS Starter Kit.",
})

export default async function SubscriptionPage() {
  const user = await currentUser()
  const pricings = await pullPricingTableData()

  let [pricing, phase, org, paymentMethodResponse] = await Promise.all([
    pullPricingTableData(),
    // Fetch the phase data of the current subscription
    tier.lookupPhase(`org:${user?.id}`),
    // Fetch organization/user details
    tier.lookupOrg(`org:${user?.id}`),
    // Fetch the saved payment methods
    tier.lookupPaymentMethods(`org:${user?.id}`),
  ])

  // Fetch the current plan from the pricing table data
  const currentPlan = await pullCurrentPlan(phase, pricing)

  const paymentMethod = paymentMethodResponse
    .methods[0] as unknown as Stripe.PaymentMethod

  return (
    <div className="flex flex-col space-y-6 pb-36">
      <div>
        <Typography variant="h3" component="h3">
          Subscription
        </Typography>
        <Typography variant="lead" component="p">
          Manage your Subscription and Billing
        </Typography>
      </div>
      <SubscriptionPlans pricings={pricings} currantPlan={currentPlan} />
      <hr />
      {/* Billing information */}
      {org.email && (
        <div
          className={clsx(
            "flex items-start gap-16 ",
            paymentMethod ? "border-r border-slate-6 pr-16" : ""
          )}
        >
          <Typography variant="body" component="p">
            Billing information
          </Typography>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              {org.name ? (
                <Typography
                  variant="body"
                  component="p"
                  className="font-semibold"
                >
                  {org.name}
                </Typography>
              ) : (
                ""
              )}
              <Typography variant="body" component="p">
                {org.email}
              </Typography>
            </div>
          </div>
        </div>
      )}
      <hr />
      {/* Payment method */}
      {paymentMethod && paymentMethod.card && (
        <div className="flex items-start gap-16">
          <Typography variant="body" component="p">
            Payment method
          </Typography>
          <div className="flex gap-4">
            <Icons.payment className="dark:text-primary" />
            <div className="flex flex-col gap-2">
              <Typography
                variant="body"
                component="p"
                className="font-semibold"
              >
                Card ending in {paymentMethod.card.last4}
              </Typography>
              <Typography variant="body" component="p">
                Expires {paymentMethod.card.exp_month}/
                {paymentMethod.card.exp_year}
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
