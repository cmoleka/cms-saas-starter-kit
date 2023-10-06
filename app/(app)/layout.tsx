import { permanentRedirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs"

import NavBar from "@/components/dashboard/dashboard-nav-bar"

interface LayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({ children }: LayoutProps) {
  const user = await currentUser()

  if (!user) {
    return permanentRedirect("/sign-in")
  }

  return (
    <div className="flex overflow-hidden">
      <aside className="hidden lg:block">
        <div className="relative hidden h-screen flex-row justify-center border-r border-slate-100 py-4 dark:border-slate-700 lg:flex w-2/12 max-w-xs sm:min-w-[12rem] lg:min-w-[17rem]">
          <div className="flex w-full flex-col space-y-7 px-4">
            <NavBar userId={user.id} />
          </div>
        </div>
      </aside>
      <div className="relative mx-auto flex flex-col h-screen w-full overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
