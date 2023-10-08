# CMS SaaS starter kit

![CMS - SaaS starter kit](/app/opengraph-image.png)

Get started with a CMS SaaS starter kit built with Next.js, Prisma, and Tailwind CSS.

This starter kit is a great starting point for building a SaaS application.

## Demo

- [Live demo](https://cms-saas-starter-kit.vercel.app/)

## Features

- NextJS 13 `/app` folder structure
- ORM Prisma
- Tailwind CSS
- TypeScript
- Resend
- Shadcn UI
- tRPC
- Clerk (Auth)
- Pricing using Tier and Stripe
  - Pricing model using Tier Model Builder
  - Subscriptions and Checkout
  - Pricing table
- Database on **Vercel Postgress**

## Why CMS SaaS starter kit?

This kit removes the pain of setting up a SaaS application. It provides a solid foundation to build your next SaaS application.

## Getting Started

1. Install dependencies

```bash
npm i
```

2. Copy `env.example` to `.env` and fill in the environment variables.

```bash
cp env.example .env
```

3. Run the development server

```bash
npm run dev
```

## Tier Pricing Model

- Model Builder - <https://model.tier.run/clkkv3fv93bbko972m4w3x9o8>

You can clone the pricing model from the above links and make it your own. You can sync it with your Stripe "Test Mode" for both your dev and staging environments. You can also push this model to prod as shown below, by making use of the Tier CLI using this command where you use the model builder link and set a environment variable called `STRIPE_API_KEY` which should be a restricted key generated will all permissions in your Stripe live mode. You can find restricted keys at `Developers > API Keys > Restricted Keys`

```bash
tier --live push <https://models.tier.run/XXXXXXXX>
```

## Powered by

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tier](https://tier.run/)
- [Stripe](https://stripe.com/)
- [Vercel](https://vercel.com/)
- [Clerk](https://clerk.dev/)
- [Shadcn UI](https://shadcn-ui.vercel.app/)
- [tRPC](https://trpc.io/)
- [Resend](https://resend.io/)

## License

License under the MIT License (MIT)
