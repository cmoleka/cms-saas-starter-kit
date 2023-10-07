import Settings from "@/components/dashboard/settings"

interface LayoutProps {
  children: React.ReactNode
}

export default async function SettingsLayout({ children }: LayoutProps) {
  return (
    <div className="relative mx-auto flex h-screen w-full flex-col overflow-y-auto">
      <main className="flex w-full flex-1 flex-col p-3">
        <div className="flex flex-col space-y-6 pb-36">
          <Settings>{children}</Settings>
        </div>
      </main>
    </div>
  )
}
