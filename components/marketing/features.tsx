"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Icons, type Icon, type IconProps } from "@/components/icons"

type Features = {
  Icon: Icon
  title: string
  description: string
}

type KeyFeaturesType = {
  leftContent: {
    title: string
    subTitle: string
    description: string
    ctaLabel?: string
    ctaLink?: string
  }
  rightContent?: {
    imageSrc: string
    imageAlt: string
  }
  rightVideo?: {
    videoSrc: string
  }
  reverse?: boolean
}

const keyFeatures: KeyFeaturesType[] = [
  {
    leftContent: {
      title: "Authentication Flows",
      subTitle: "Hassle-Free, Secure Authentication for Your SaaS Projects",
      description:
        "Streamline user authentication and access control using Clerk authentication, ensuring a hassle-free experience for your users.",
    },
    rightVideo: {
      videoSrc: "/assets/landing/authentication-flow.mp4",
    },
    reverse: false,
  },
  {
    leftContent: {
      title: "Stripe Payments and Subscriptions",
      subTitle: "Simplify Payment Processing",
      description:
        "Seamlessly integrate Stripe, a leading payment processor, to effortlessly accept online payments without the hassle of building a payment gateway from scratch.",
      ctaLabel: "Get Started",
      ctaLink: "/signup",
    },
    rightContent: {
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Dashboard",
    },
    reverse: true,
  },
]

export default function Features() {
  const features: Features[] = [
    {
      Icon: Icons.user,
      title: "Authentication",
      description:
        "Guard your app with Clerk authentication, ensuring robust security for user access and data protection.",
    },
    {
      Icon: Icons.theme,
      title: "UI Components",
      description:
        "Empower your creativity with Shadcn UI components, offering limitless customization possibilities for your app's design.",
    },
    {
      Icon: Icons.analytics,
      title: "Integrated Analytics",
      description:
        "Gain insights and track user activity effectively using Vercel Analytics, keeping you informed about your app's performance.",
    },
    {
      Icon: Icons.payment,
      title: "Stripe Subscriptions",
      description:
        "Simplify subscription management with Tier, leveraging the power of Stripe to handle your users' plans effortlessly.",
    },
    {
      Icon: Icons.mobile,
      title: "Mobile Friendly",
      description:
        "Delight users on any device with our mobile-friendly UI design, ensuring a seamless experience on smartphones and tablets.",
    },
    {
      Icon: Icons.email,
      title: "Custom Email",
      description:
        "Craft engaging, dynamic emails using JSX and React.Email, giving you full control over your email communication.",
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <Typography
                variant="display2"
                component="h2"
                className="bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-500"
              >
                Discover Our Amazing Features
              </Typography>
              <Typography
                variant="lead"
                component="p"
                className="max-w-[600px]"
              >
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </Typography>
            </div>
            <div className="mx-auto w-full max-w-full space-y-4">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {features.length &&
                  features.map((feature, index) => (
                    <FeaturedItem key={index} {...feature} />
                  ))}
              </div>
            </div>
            {keyFeatures.length &&
              keyFeatures.map((keyFeature, index) => (
                <KeyFeature key={index} {...keyFeature} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeaturedItemProps {
  Icon: React.ElementType
  title: string
  description: string
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2 rounded-lg border-slate-900 p-4">
      <div className="rounded-full p-2">
        {Icon && (
          <Icon className="h-8 w-8 text-slate-500 dark:text-slate-100" />
        )}
      </div>
      <Typography
        variant="h3"
        component="h3"
        className="text-slate-900 dark:text-slate-100"
      >
        {title}
      </Typography>
      <Typography variant="body" component="p">
        {description}
      </Typography>
    </div>
  )
}

const KeyFeature: React.FC<KeyFeaturesType> = ({
  leftContent,
  rightContent,
  rightVideo,
  reverse,
}) => {
  const layoutClasses = `flex flex-col lg:flex-row  py-6 md:py-12 ${
    reverse ? "lg:flex-row-reverse" : ""
  }`

  return (
    <div className={layoutClasses}>
      <div className="flex flex-col items-start p-4 lg:w-1/2">
        {leftContent && (
          <div className="mb-4">
            <Typography variant="h1" component="h2" className="text-left">
              {leftContent.title}
            </Typography>
            <Typography
              variant="lead"
              component="p"
              className="text-left font-semibold text-primary dark:text-primary"
            >
              {leftContent.subTitle}
            </Typography>
            <Typography variant="body" component="p" className="mt-6 text-left">
              {leftContent.description}
            </Typography>
          </div>
        )}
        {leftContent && leftContent.ctaLabel && (
          <Button asChild>
            <Link href="/dashboard">
              {leftContent.ctaLabel}
              <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
      <div className="p-4 lg:w-1/2">
        {rightContent && (
          <div className="relative h-[500px] w-full">
            <Image
              src={rightContent.imageSrc}
              alt={rightContent.imageAlt}
              fill
              className="absolute rounded-md object-cover"
            />
          </div>
        )}
        {rightVideo && (
          <div>
            <video
              className="my-6 rounded-xl"
              width="100%"
              height="auto"
              playsInline
              autoPlay
              loop
              muted
            >
              <source src={rightVideo.videoSrc} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  )
}
