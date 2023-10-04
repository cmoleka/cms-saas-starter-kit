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

interface ProfileDeletedEmailProps {
  firstName?: string
}

export const ProfileDeletedTemplate = ({
  firstName,
}: ProfileDeletedEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <EmailHeader />
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Account Deletion Notification
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {firstName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              We regret to inform you that your {siteConfig.name} account has
              been deleted.
            </Text>
            <EmailFooter />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default ProfileDeletedTemplate
