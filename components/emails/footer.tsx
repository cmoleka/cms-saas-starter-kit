import * as React from "react"
import { Hr, Link, Section, Text } from "@react-email/components"

import { siteConfig } from "@/config/site"

const EmailFooter = () => {
  return (
    <Section>
      <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
      <Text className="text-[#666666] text-[12px] leading-[24px]">
        You received this email because you subscribed to updates from{" "}
        {siteConfig.name}. Want to take a break?{" "}
        <Link href="">Unsubscribe from our emails</Link>
        {siteConfig.name}, Montreal, Canada
      </Text>
    </Section>
  )
}

export default EmailFooter
