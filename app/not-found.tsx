import Link from "next/link"

import { constructMetadata } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export const metadata = constructMetadata({
  title: "Not Found",
  description: "The page you are looking for was not found.",
})

export default function NotFound() {
  return (
    <div className="mt-32 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 lg:divide-x items-center lg:items-start">
        <Typography variant="h2" component="h1">
          404
        </Typography>
        <div className="flex flex-col space-y-5 px-5">
          <Typography variant="h1" component="h1">
            Sorry, the following page was not found
          </Typography>
          <Typography variant="sm" component="p">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Typography>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4">
            <Button variant="secondary" asChild>
              <Link href="/">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link href="/">Back to Home Page</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
