import { SiteConfig } from "@/types";
import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
    name: "CMS SaaS Starter",
    description:
        "An AI marketing content generation tool, made with Tier, NextJS 13, OpenAI and Vercel Postgres.",
    url: env.NEXT_PUBLIC_APP_URL,
    ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
    links: {
        twitter: "https://twitter.com/carlomoleka",
        github: "https://github.com/cmoleka/cms-saas-starter",
    },
    keywords: ["cms-saas-starter", "nextjs", "vercel", "postgres"],
    authors: [
        {
            name: "Carlo Moleka Sambea",
            url: "https://carlomoleka.com",
        },
    ],
    creator: "Carlo Moleka Sambea",
    creatorTwitter: "@cmsistech"
};
