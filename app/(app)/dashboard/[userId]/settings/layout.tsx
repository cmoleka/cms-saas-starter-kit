import Settings from "@/components/dashboard/settings"

interface LayoutProps {
  children: React.ReactNode
}

export default async function SettingsLayout({ children }: LayoutProps) {
  return (
    <div className="relative mx-auto flex flex-col h-screen w-full overflow-y-auto">
      <Settings>{children}</Settings>
    </div>
  )
}
