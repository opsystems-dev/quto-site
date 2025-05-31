"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function EarlyAccessForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("https://formspree.io/f/mjkrbarz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          company: company
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    }
  }

  if (submitted) {
    return (
      <section id="early-access-form" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">You're In! 🎉</h2>
          <p className="text-gray-600 mb-8">
            Thanks for joining the early access program. We'll be in touch soon with updates and your exclusive 3-month discount!
          </p>
          
          {/* Invisible spacer to match form height */}
          <div className="space-y-4 opacity-0 pointer-events-none">
            <div className="w-full h-12 border border-gray-300 rounded-lg bg-white"></div>
            <div className="w-full h-12 border border-gray-300 rounded-lg bg-white"></div>
            <div className="w-full h-12 border border-gray-300 rounded-lg bg-white"></div>
            <div className="w-full h-12 border border-gray-300 rounded-lg bg-white"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="early-access-form" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Early Access</h2>
        <p className="text-gray-600 mb-8">
          Get 3 months free when we launch, plus help shape the features that matter most to your business.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                required
            />
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Work Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                required
            />
            <input
                id="company"
                type="text"
                name="company"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                required
            />
            <Button type="submit" size="lg" className="w-full">
                Request Early Access - Get 3 Months Free!
            </Button>
        </form>
      </div>
    </section>
  )
}