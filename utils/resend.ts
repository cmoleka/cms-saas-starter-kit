import { resend } from '@/lib';
import * as React from 'react';
import WelcomeTemplate from '@/components/emails/welcome-template';
import type { ResendEmail } from '@/types';
import { siteConfig } from '@/config/site';
import ProfileUpdateTemplate from '@/components/emails/profile-update-template';
import BannedTemplate from '@/components/emails/banned-template';
import ProfileDeletedTemplate from '@/components/emails/profile-deleted-template';

const ResendSendEmail = async (data: ResendEmail) => {
    const email = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        ...data
    })
    return email
}

// Send a welcome email to the user
export const ResendSendWelcomeEmail = async (email: string, firstName: string, userImage: string) => {
    try {
        await ResendSendEmail({
            to: ['carlo@itraws.com'],
            subject: `Welcome to ${siteConfig.name}`,
            react: WelcomeTemplate({ firstName: firstName, userImage: userImage }) as React.ReactElement,
        })
    } catch (error) {
        console.log(error)
    }
}

// Send a profile update email to the user
export const ResendSendProfileUpdateEmail = async (email: string, firstName: string, userImage: string) => {
    try {
        await ResendSendEmail({
            to: ['carlo@itraws.com'],
            subject: `Your ${siteConfig.name} profile has been updated`,
            react: ProfileUpdateTemplate({ firstName: firstName, userImage: userImage }) as React.ReactElement,
        })
    } catch (error) {
        console.log(error)
    }
}

// Send a banned email to the user
export const ResendSendBannedEmail = async (email: string, firstName: string) => {
    try {
        await ResendSendEmail({
            to: ['carlo@itraws.com'],
            subject: `Your ${siteConfig.name} account has been banned`,
            react: BannedTemplate({ firstName: firstName }) as React.ReactElement,
        })
    } catch (error) {
        console.log(error)
    }
}

// Send a deleted email to the user
export const ResendSendDeletedEmail = async (email: string, firstName: string) => {
    try {
        await ResendSendEmail({
            to: ['carlo@itraws.com'],
            subject: `Your ${siteConfig.name} account has been deleted`,
            react: ProfileDeletedTemplate({ firstName: firstName }) as React.ReactElement,
        })
    } catch (error) {
        console.log(error)
    }
}
