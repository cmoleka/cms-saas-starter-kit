import * as React from "react"
import { Hr, Link, Section, Text } from "@react-email/components"

import { siteConfig } from "@/config/site"

const EmailFooter = () => {
  return (
    <Section>
      <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
      <Text className="text-[12px] leading-[24px] text-[#666666]">
        You received this email because you subscribed to updates from{" "}
        {siteConfig.name}. Want to take a break?{" "}
        <Link href="">Unsubscribe from our emails</Link>
        {siteConfig.name}, Montreal, Canada
      </Text>
    </Section>
  )
}

export default EmailFooter
