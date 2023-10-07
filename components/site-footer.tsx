import { siteConfig } from "@/config/site"
import { Typography } from "@/components/ui/typography"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <Typography
          variant="sm"
          component="p"
          className="text-center leading-loose text-muted-foreground md:text-left"
        >
          Built by{" "}
          <a
            href={`https://twitter.com/${siteConfig.creatorTwitter}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {siteConfig.creatorTwitter}
          </a>
          . The source code is available on{" "}
          <a
            href={`https://github.com/${siteConfig.creatorGithub}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </Typography>
      </div>
    </footer>
  )
}
