import { Hero } from "@/components/sections/hero"
import { AnimatedDemo } from "@/components/sections/animated-demo"
import { Features } from "@/components/sections/features"
import { CTA } from "@/components/sections/cta"
import { FounderStory } from "@/components/sections/founder-story"
import { VisionTeaser } from "@/components/sections/vision-teaser"
import { EarlyAccessForm } from "@/components/sections/early-access-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AnimatedDemo />
      <Features />
      <CTA />
      <FounderStory />
      <VisionTeaser />
      <EarlyAccessForm />
      <Footer />
    </main>
  )
}