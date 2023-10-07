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
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <EmailHeader />
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Account Update Notification
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello {firstName},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
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
