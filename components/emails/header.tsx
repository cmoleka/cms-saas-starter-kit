import * as React from "react"
import { Img, Link, Section, Text } from "@react-email/components"

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""

const EmailHeader = () => {
  return (
    <Section className="mt-[32px]">
      <Link href={`${baseUrl}`}>
        <Img
          src={`${baseUrl}/static/vercel-logo.png`}
          width="40"
          height="37"
          alt="Vercel"
          className="my-0 mx-auto"
        />
      </Link>
    </Section>
  )
}

export default EmailHeader
