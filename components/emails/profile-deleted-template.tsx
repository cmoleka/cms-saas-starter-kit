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
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <EmailHeader />
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Account Deletion Notification
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello {firstName},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
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
