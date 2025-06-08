"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Brain, Target, Users, Shield, DollarSign, Users2, Zap } from "lucide-react"

export default function Vision() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const scrollToFeedback = () => {
    document.getElementById('feedback-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("https://formspree.io/f/mjkrbarz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          _subject: "Vision Page Feedback",
          name: name,
          email: email,
          feedback: feedback
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <main className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Vision</h1>
          <p className="text-xl text-gray-600">
            Where we're heading with AI-powered construction operations
          </p>
        </div>

        {/* Main Content - Letter Style */}
        <div className="prose prose-lg max-w-none space-y-8 text-gray-700 leading-relaxed">
          
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <p className="text-lg font-medium text-blue-900 mb-0">
              If you're reading this, you probably clicked through because you're curious about where this is all heading. 
              Good - because I want to share the bigger picture with you.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">The Problem We're Really Solving</h2>
            <p>
              Every construction company I've worked with faces the same fundamental challenge: <strong>operational overhead is growing faster than revenue</strong>. 
              Great businesses are drowning in admin, compliance, and reporting requirements that pull resources away from what actually makes money.
            </p>
            <p>
              You know the feeling - you started your business to build great things, but somehow you're spending more time managing systems than managing projects. 
              Your best people are getting burned out on paperwork instead of using their skills where they matter most.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Why AI Changes Everything</h2>
            <p>
              Here's what I've learned after 15+ years trying to solve these problems: <strong>the issue isn't that we need more systems - it's that we need less and that our systems don't work together.</strong> They are creating more work instead of eliminating it.
            </p>
            <p>
              AI finally makes it possible to build software that actually helps people do their jobs better. Not just digitising paperwork, but genuinely enhancing human capability. 
              Imagine your field workers having an AI assistant that helps them document issues clearly, professionally, and at 10x the speed, with
              your office staff now having real-time visibility without chasing people for updates.
            </p>
          </section>

          <section className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold text-gray-900">The Early Vision</h2>
            <p className="mb-8">
              Quto starts with plant management because that's a simple frustration I've thought through maticulously.
              It's something my existing clients use everyday.
              It's something that if not done right, can bury you in paperwork and depreciate your machines faster than you can say Kwazy Cupcakes.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
                        <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 text-lg">Intelligent Asset & Resource Management</h3>
                        <p className="text-slate-700 leading-relaxed">Complete visibility and control over all your resources - plant, equipment, vehicles, tools, and people. AI-powered scheduling that optimises utilisation, predicts maintenance needs, and ensures nothing falls through the cracks.</p>
                    </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
                        <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 text-lg">Unified Project & Job Management</h3>
                        <p className="text-slate-700 leading-relaxed">From quote to completion, track every aspect of your projects in one place. Real-time progress updates, resource allocation, change orders, and profitability analysis. Know exactly where you stand on every job, every day.</p>
                    </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
                        <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 text-lg">AI-Enhanced Team Productivity</h3>
                        <p className="text-slate-700 leading-relaxed">Transform every team member into a documentation expert. Automatic report generation, intelligent data capture, and seamless communication flows. Your people focus on skilled work while AI handles the administrative burden.</p>
                    </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
                        <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 text-lg">Integrated Safety & Compliance</h3>
                        <p className="text-slate-700 leading-relaxed">Complete compliance management across all operations. Automated SWMS generation, certification tracking, incident reporting, and audit trails. Stay compliant without drowning your team in paperwork.</p>
                    </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
                        <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 text-lg">Financial & Business Intelligence</h3>
                        <p className="text-slate-700 leading-relaxed">Real-time financial visibility across your entire operation. True job costing, cash flow tracking, supplier management, and profitability analysis. Make data-driven decisions with confidence.</p>
                    </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
                        <Users2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 text-lg">Customer & Supplier Relationship Management</h3>
                        <p className="text-slate-700 leading-relaxed">Centralised contact management, quote tracking, supplier performance monitoring, and client communication history. Build stronger relationships while staying organised.</p>
                    </div>
                    </div>
                </div>

                <div className="md:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-md">
                        <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 text-lg">Unified Operations Platform</h3>
                        <p className="text-slate-700 leading-relaxed">One system where everything connects seamlessly. Sales flows into project management, resource allocation triggers procurement, job progress updates financial tracking. End the chaos of multiple disconnected systems.</p>
                    </div>
                    </div>
                </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">The End Goal</h2>
            <p>
              <strong>More boots on the ground, less admin in chairs</strong>. Redeploy your overhead back to revenue-generating activities. 
              Give every team member AI assistance that makes them more capable and professional in their role.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Why This Approach Works</h2>
            <p>
              Unlike enterprise software that forces you to change how you work, or generic tools that don't understand construction, 
              Quto is built by someone who's lived these problems. I know why you can't just "implement a new system", because it has to work for everyone, 
              from the apprentice doing their first prestart check to the director reviewing monthly financials.
            </p>
            <p>
              By starting with one module and proving it works, then expanding based on your actual needs, 
              we build something that genuinely fits how construction businesses operate - not how software companies think they should operate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">What I Need From You</h2>
            <p>
              If this vision resonates with you, I'd love your input. Whether you join the early access program or just share your thoughts, 
              your feedback shapes what gets built next.
            </p>
            <p>
              I'm particularly interested in:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>What operational headaches are costing you the most time and money?</li>
              <li>Which current software/systems work well for you, and which ones drive you crazy?</li>
              <li>If you had an AI assistant for your operations, what would you want it to help with first?</li>
            </ul>
          </section>

        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Ready to Be Part of This?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#early-access-form">
              <Button size="lg" className="w-full sm:w-auto">
                Join Our Early Access Program
              </Button>
            </Link>
          </div>
          <p className="text-gray-600 italic">or share your thoughts below</p>
        </div>

        {/* Simple Feedback Form */}
        <div id="feedback-form" className="mt-16 bg-gray-50 p-8 rounded-lg">
            {submitted ? (
                <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Thanks for Your Feedback! 🙏</h3>
                <p className="text-gray-600">
                    Your insights are invaluable for shaping what gets built next. I'll be in touch soon.
                </p>
                </div>
            ) : (
                <>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Can't wait to hear from you!</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                        required
                    />
                    </div>
                    <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                    placeholder="What's your biggest operational headache? What software do you love/hate? What would you want AI to help with first?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                    required
                    />
                    <Button type="submit" className="w-full">
                    Share My Thoughts
                    </Button>
                </form>
            </>
            )}
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}