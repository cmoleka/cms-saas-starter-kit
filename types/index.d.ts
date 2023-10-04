import { User } from "@prisma/client";
import type { FeatureName, Model, Plan, PlanName } from "tier";

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links?: {
        twitter?: string;
        github?: string;
    };
    keywords?: string[];
    authors?: {
        name: string;
        url: string;
    }[];
    creator?: string;
};

export type TierPlanConstant = {
    planId: PlanName;
    promoted: boolean;
};

export type TierPricingData = {
    plans: {
        [key: string]: TierPlanModel;
    }
}

export type TierPlanModel = {
    title: string;
    interval?: string;
    features: {
        [key: string]: {
            title: string;
            base: number;
            tiers?: {
                price: number;
                limit: number;
            }[];
        };
    };
}

export type PricingTableData = {
    planId: string;
    currency: string; // usd
    interval?: string; // monthly
    promoted: boolean;
    name: string;
    base: number;
    features: string[];
};

export type CurrentPlan = {
    planId: PlanName;
    currency: string; // usd
    interval?: string; // monthly
    name: string;
    base: number;
};

// Resend Email Types

export type ResendEventTypes =
    | 'email.sent'
    | 'email.delivered'
    | 'email.delivery_delayed'
    | 'email.complained'
    | 'email.bounced'
    | 'email.opened'
    | 'email.clicked';

export interface ResendWebhookEvent {
    created_at: string;
    data: {
        created_at: string;
        email_id: string;
        from: string;
        subject: string;
        to: string[];
    };
    type: ResendEventTypes;
}

export interface ResendEmail {
    to: string[];
    subject: string;
    react: React.ReactElement;
}
