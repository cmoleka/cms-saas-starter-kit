"use client"

import Link from "next/link"

import { constructMetadata } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export const metadata = constructMetadata({
  title: "Something went wrong!",
  description: "Something went wrong!",
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="mt-32 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 lg:divide-x items-center lg:items-start">
            <Typography variant="h2" component="h1">
              {error.name}
            </Typography>
            <div className="flex flex-col space-y-5 px-5">
              <Typography variant="h1" component="h1">
                Something went wrong!
              </Typography>
              <Typography variant="sm" component="p">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </Typography>
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4">
                <Button variant="secondary" asChild>
                  <Link href="/">Contact Us</Link>
                </Button>
                <Button onClick={() => reset()}>Try again</Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
