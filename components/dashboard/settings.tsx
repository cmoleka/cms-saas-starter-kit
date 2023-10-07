"use client"

import { useParams, useRouter, useSelectedLayoutSegment } from "next/navigation"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SettingsProps {
  children: React.ReactNode
}

export default function Settings({ children }: SettingsProps) {
  const segment = useSelectedLayoutSegment()

  const { userId } = useParams()
  const router = useRouter()

  const handleTabChange = (value: string) => {
    router.push(`/dashboard/${userId}/settings/${value}`)
  }

  if (!segment) return null

  return (
    <Tabs
      defaultValue={segment}
      onValueChange={handleTabChange}
      className="space-y-4"
    >
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
      </TabsList>
      <TabsContent value={segment} className="space-y-4">
        {children}
      </TabsContent>
    </Tabs>
  )
}
