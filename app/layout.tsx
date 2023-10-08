import "@/styles/globals.css"

import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@vercel/analytics/react"

import { dm_sans, inter } from "@/lib/fonts"
import { constructMetadata } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/nav-bar"
import Providers from "@/components/Providers"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = constructMetadata()

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${inter.variable} ${dm_sans.variable}`}
      >
        <head />
        <Providers>
          <body className="min-h-screen bg-background font-sans antialiased">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="relative flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-1">{children}</div>
                <SiteFooter />
              </div>
              <Analytics />
              <Toaster />
            </ThemeProvider>
          </body>
        </Providers>
      </html>
    </ClerkProvider>
  )
}
