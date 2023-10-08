import { constructMetadata } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/icons"

export const metadata = constructMetadata({
  title: "User Subscription",
  description: "User subscription for the SaaS Starter Kit.",
})

export default async function SubscriptionPage() {
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
      <Skeleton className="h-96 w-full" />
      <hr />
      {/* Payment method */}
      <div className="flex items-start gap-16">
        <Typography variant="body" component="p">
          Payment method
        </Typography>
        <div className="flex gap-4">
          <Icons.payment className="dark:text-primary" />
          <div className="flex w-full flex-col gap-2">
            <Skeleton className="h-6 w-[200px]" />
            <Skeleton className="h-6 w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
