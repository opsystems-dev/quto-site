import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { EarlyAccessForm } from "@/components/sections/early-access-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      <CTA />
      <EarlyAccessForm />
      <Footer />
    </main>
  )
}