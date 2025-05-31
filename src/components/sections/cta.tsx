"use client"

import { Button } from "@/components/ui/button"

export function CTA() {
  const scrollToForm = () => {
    document.getElementById('early-access-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join our early access program and get 3 months free when we launch. 
          Plus, help shape the features that matter most to your business.
        </p>
        <Button 
          size="lg" 
          onClick={scrollToForm}
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Request Early Access - Get 3 Months Free!
        </Button>
      </div>
    </section>
  )
}