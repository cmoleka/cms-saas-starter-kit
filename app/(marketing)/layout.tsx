import { Footer } from "@/components/footer"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default async function AppLayout({ children }: AuthLayoutProps) {
  //   const res = await fetch("https://api.github.com/repos/tierrun/tier-vercel-openai", {
  //     method: "GET",
  //     next: { revalidate: 60 },
  //   });
  //   const data = await res.json();

  //   const stargazers_count: number = data.stargazers_count;
  return (
    <>
      <main className="mx-auto max-w-7xl px-12">
        <div className="px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </>
  )
}
