import * as React from "react"
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

import { siteConfig } from "@/config/site"
import EmailFooter from "@/components/emails/footer"
import EmailHeader from "@/components/emails/header"

interface BannedEmailProps {
  firstName?: string
}

export const BannedTemplate = ({ firstName }: BannedEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <EmailHeader />
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              You've Been Banned from <strong>{siteConfig.name}</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {firstName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We're sorry to inform you that your access to {siteConfig.name}{" "}
              has been restricted.
            </Text>
            <EmailFooter />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default BannedTemplate
