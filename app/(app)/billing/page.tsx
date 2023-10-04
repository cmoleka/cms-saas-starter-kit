import Link from "next/link"

import { Button } from "@/components/ui/button"

export default async function IndexPage() {
  return (
    <>
      {/* Hero Copy */}
      <div className="mt-16 flex flex-col items-center gap-4">
        <h1 className="md:display h2 w-full px-4 text-center md:w-[802px] md:px-0">
          Billing PAge
        </h1>
        <p className="body-xl px-4 text-center text-slate-11 md:w-[572px] md:px-0">
          Put an end to your creative block, get help from your AI creative
          writer
        </p>
      </div>
    </>
  )
}
