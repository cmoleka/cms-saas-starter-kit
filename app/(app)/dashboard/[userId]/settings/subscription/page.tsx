import { tier } from "@/lib"
import { currentUser } from "@clerk/nextjs"
import type Stripe from "stripe"

import { pullCurrentPlan } from "@/lib/services/currentPlan"
import { pullPricingTableData } from "@/lib/services/pricingTableData"
import { constructMetadata } from "@/lib/utils"
import { Typography } from "@/components/ui/typography"
import SubscriptionPlans from "@/components/dashboard/subscription-pricings"

export const metadata = constructMetadata({
  title: "User Subscription",
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
    </div>
  )
}
