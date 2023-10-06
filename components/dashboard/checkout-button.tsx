"use client"

import { useState } from "react"
import type { CurrentPlan, PricingTableData } from "@/types"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

export function CheckoutButton({
  plan,
  currentPlan,
}: {
  plan: PricingTableData
  currentPlan: CurrentPlan
}) {
  const [changePlan, setChangePlan] = useState(false)
  const subscribe = async (planId: string) => {
    try {
      setChangePlan(true)
      const response = await fetch(`/api/change-plan?plan=${planId}`, {
        method: "GET",
      })
      if (!response?.ok) {
        return toast({
          title: "Something went wrong.",
          description: "Please refresh the page and try again.",
          variant: "destructive",
        })
      }
      toast({
        title: "Plan upgrade initiated.",
        description: "Please wait while we redirect you to the payment page.",
        variant: "default",
      })
      const session = await response.json()
      if (session) {
        window.location.href = session.url
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button
        variant="outline"
        className="w-[256px]"
        type="submit"
        name="planId"
        value={plan?.planId}
        onClick={() => subscribe(plan?.planId as string)}
      >
        {changePlan && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        {(plan?.base as number) < currentPlan.base ? "Downgrade" : "Upgrade"}
      </Button>
    </>
  )
}
