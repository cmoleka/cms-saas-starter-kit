import Settings from "@/components/dashboard/settings"

interface LayoutProps {
  children: React.ReactNode
}

export default async function SettingsLayout({ children }: LayoutProps) {
  return (
    <div className="relative mx-auto flex flex-col h-screen w-full overflow-y-auto">
      <main className="w-full p-3 flex flex-col flex-1">
        <div className="flex flex-col space-y-6 pb-36">
          <Settings>{children}</Settings>
        </div>
      </main>
    </div>
  )
}
