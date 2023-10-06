interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({ children }: AuthLayoutProps) {
  return (
    <main className="mx-auto max-w-7xl px-12">
      <div className="px-6 lg:px-8">{children}</div>
    </main>
  )
}
