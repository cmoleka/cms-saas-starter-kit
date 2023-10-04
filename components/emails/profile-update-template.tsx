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

interface ProfileUpdateEmailProps {
  firstName?: string
  userImage?: string
}

export const ProfileUpdateTemplate = ({
  firstName,
  userImage,
}: ProfileUpdateEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <EmailHeader />
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Account Update Notification
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {firstName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We wanted to let you know that changes have been made to your{" "}
              {siteConfig.name} account.
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

export default ProfileUpdateTemplate
