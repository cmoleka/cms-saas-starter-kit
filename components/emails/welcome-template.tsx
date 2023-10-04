import * as React from "react"
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
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

interface WelcomeEmailProps {
  firstName?: string
  userImage?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""

export const WelcomeTemplate = ({
  firstName,
  userImage,
}: WelcomeEmailProps) => {
  const previewText = `Join ${firstName} on Vercel`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <EmailHeader />
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome to <strong>{siteConfig.name}</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {firstName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thanks for joining {siteConfig.name}! We're excited to have you on
              board.
            </Text>
            <Section>
              <Row>
                <Column align="center">
                  <Img
                    className="rounded-full"
                    src={userImage}
                    width="64"
                    height="64"
                  />
                </Column>
              </Row>
            </Section>
            <EmailFooter />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
