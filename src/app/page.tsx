import { Hero } from "@/components/sections/hero"
import { AnimatedDemo } from "@/components/sections/animated-demo"  
import { Context } from "@/components/sections/context"
import { Features } from "@/components/sections/features"
import { FounderStory } from "@/components/sections/founder-story"
import { RoadmapTeaser } from "@/components/sections/roadmap-teaser"
import { CTA } from "@/components/sections/cta"
import { EarlyAccessForm } from "@/components/sections/early-access-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AnimatedDemo />
      <Features />
      <CTA />
      <EarlyAccessForm />
      <Footer />
    </main>
  )
}