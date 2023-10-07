import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "text-slate-600 dark:text-slate-100 antialiased",
  {
    variants: {
      variant: {
        display1:
          "font-heading mt-2 scroll-m-20 text-6xl font-bold leading-tight tracking-tighter",
        display2:
          "font-heading mt-2 scroll-m-20 text-5xl font-bold leading-tight tracking-tighter",
        h1: "font-heading mt-2 scroll-m-20 text-4xl font-bold",
        h2: "font-heading mt-12 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        h3: "font-heading [&:not(:first-child)]:mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        h4: "font-heading [&:not(:first-child)]:mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        h5: "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        h6: "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        large:
          "text-xl mx-auto tracking-tight leading-tight [&:not(:first-child)]:mt-5",
        lead: "text-lg mx-auto tracking-tight leading-tight [&:not(:first-child)]:mt-5",
        body: "leading-7 [&:not(:first-child)]:mt-5",
        sm: "text-sm tracking-tight leading-tight text-inherit",
        xs: "text-xs tracking-tight leading-tight text-inherit",
        link: "font-medium transition-colors text-foreground hover:text-foreground/60 inline-flex items-center justify-center h-10 px-4 py-2",
        none: "",
      },
      component: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        p: "p",
        span: "span",
        small: "small",
      },
    },
    defaultVariants: {
      variant: "body",
      component: "p",
    },
  }
)

// Create an interface for typographyVariants that can accept headings, paragraphs, spans, and smalls
export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  children: React.ReactNode
}

// Create a Typography component that accepts the TypographyProps interface
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, component, ...props }, ref) => {
    const Comp = component as React.ElementType
    return (
      <Comp
        className={cn(typographyVariants({ variant, component, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

export { Typography, typographyVariants }
