import Image from "next/image"
import Link from "next/link"

import { Icons, type Icon, type IconProps } from "../icons"
import { Button } from "../ui/button"
import { Typography } from "../ui/typography"

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
    ctaLabel: string
    ctaLink: string
  }
  rightContent: {
    imageSrc: string
    imageAlt: string
  }
  reverse?: boolean
}

const keyFeatures: KeyFeaturesType[] = [
  {
    leftContent: {
      title: "Authentication",
      subTitle:
        "Secure and Easy-to-Use Authentication for Your SaaS Website and API",
      description:
        "Our authentication system is built on top of the industry-leading PaaS such as Supabase and Firebase. It is secure, easy-to-use, and fully customizable. It supports email/password, social logins, and more.",
      ctaLabel: "Get Started",
      ctaLink: "/signup",
    },
    rightContent: {
      imageSrc:
        "https://images.unsplash.com/photo-1651235732694-0d057ace2f30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imageAlt: "Authentication",
    },
    reverse: false,
  },
  {
    leftContent: {
      title: "Dashboard",
      subTitle: "A fantastic dashboard to manage your SaaS business",
      description:
        "Our dashboard offers an overview of your SaaS business. It shows at a glance all you need to know about your business. It is fully customizable and extendable.",
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
        "Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails.",
    },
    {
      Icon: Icons.theme,
      title: "UI Themes",
      description:
        "Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails.",
    },
    {
      Icon: Icons.analytics,
      title: "Integrated Analytics",
      description:
        "Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails.",
    },
    {
      Icon: Icons.integrations,
      title: "UI Components",
      description:
        "Our Smart Inbox feature helps you manage your emails efficiently by prioritizing important emails.",
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <Typography
                variant="display2"
                component="h2"
                className="bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-900 dark:from-slate-100 dark:to-slate-500"
              >
                Discover Our Unique Features
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
            <div className="w-full max-w-full space-y-4 mx-auto">
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
    <div className="flex flex-col items-center space-y-2 border-slate-900 p-4 rounded-lg">
      <div className="p-2 rounded-full">
        {Icon && (
          <Icon className="h-8 w-8 text-slate-500 dark:text-slate-100" />
        )}
      </div>
      <Typography
        variant="h3"
        component="h3"
        className="dark:text-slate-100 text-slate-900"
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
  reverse,
}) => {
  const layoutClasses = `flex flex-col lg:flex-row  py-6 md:py-12 ${
    reverse ? "lg:flex-row-reverse" : ""
  }`

  return (
    <div className={layoutClasses}>
      <div className="lg:w-1/2 p-4 flex flex-col items-start">
        {leftContent && (
          <div className="mb-4">
            <Typography variant="h2" component="h2" className="text-left">
              {leftContent.title}
            </Typography>
            <Typography
              variant="lead"
              component="p"
              className="text-left text-primary/70"
            >
              {leftContent.subTitle}
            </Typography>
            <Typography
              variant="sm"
              component="p"
              className="text-left text-primary mt-6"
            >
              {leftContent.description}
            </Typography>
          </div>
        )}
        {leftContent && leftContent.ctaLabel && (
          <Button variant="outline" asChild>
            <Link href="/dashboard">
              {leftContent.ctaLabel}
              <Icons.chevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
      <div className="lg:w-1/2 p-4">
        {rightContent && (
          <div className="w-full h-[500px] relative">
            <Image
              src={rightContent.imageSrc}
              alt={rightContent.imageAlt}
              fill
              className="rounded-md object-cover absolute"
            />
          </div>
        )}
      </div>
    </div>
  )
}
