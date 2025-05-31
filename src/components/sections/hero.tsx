"use client"

import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react"

export function Hero() {
    const scrollToForm = () => {
      document.getElementById('early-access-form')?.scrollIntoView({ 
        behavior: 'smooth' 
      })
    }

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-slate-100">
        <div className="container mx-auto text-center">
            <div className="text-2xl font-bold text-gray-600 mb-12 animate-in fade-in duration-1000">
            Quto
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-in fade-in duration-1000 delay-200">
            <div className="flex items-center justify-center gap-3 mb-2">
                <Brain className="h-12 w-12 text-blue-600" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                AI-Powered
                </span>
            </div>
            Asset Management for Construction
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-in fade-in duration-1000 delay-400">
            Finally, fault reports that actually help. Our AI assistant turns useless complaints into actionable details, plus proper maintenance tracking and compliance - all in one place your crew will actually use.
            </p>
            <div className="flex justify-center animate-in fade-in duration-1000 delay-600">
            <Button 
                size="lg" 
                onClick={scrollToForm}
                className="hover:scale-105 transition-transform duration-200"
            >
                Request Early Access
            </Button>
            </div>
        </div>
    </section>
  )
}