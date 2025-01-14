import { GetStarted } from '@/components/sections/GetStarted'
import { ModelInference } from '@/components/sections/ModelInference'
import { NetworkConnectivity } from '@/components/sections/NetworkConnectivity'
import { Overview } from '@/components/sections/Overview'
import { RagRecipes } from '@/components/sections/RagRecipes'

export default function DevelopersPage() {
  return (
    <main className="min-h-screen pt-24">
      <GetStarted />
      <ModelInference />
      <NetworkConnectivity />
      <Overview />
      <RagRecipes />
    </main>
  )
}
