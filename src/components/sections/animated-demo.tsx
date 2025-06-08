"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Bot, Target, User, Wrench, Brain, ArrowRight, Zap } from "lucide-react"

interface Step {
  type: 'initial' | 'ai_question' | 'user_answer' | 'final'
  speaker: 'user' | 'ai' | 'system'
  content: string
  delay: number
}

export function AnimatedDemo() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [isVisible, setIsVisible] = useState(false)

  const steps: Step[] = useMemo(() => [
    { type: 'initial', speaker: 'user', content: '"Flat battery again"', delay: 1000 },
    { type: 'ai_question', speaker: 'ai', content: 'I can see this was also reported a month ago and the battery was replaced in Sep 2024, so it is still relatively new. How long has it been sitting unused?', delay: 1500 },
    { type: 'user_answer', speaker: 'user', content: 'all weekend', delay: 1200 },
    { type: 'ai_question', speaker: 'ai', content: 'Does it jump start easily, or does it struggle even with jumper cables?', delay: 1500 },
    { type: 'user_answer', speaker: 'user', content: 'nah jumps fine and runs all day after', delay: 1200 },
    { type: 'ai_question', speaker: 'ai', content: 'Are there any warning lights on the dashboard when you try to start it?', delay: 1500 },
    { type: 'user_answer', speaker: 'user', content: 'nope just clicks when i turn the key', delay: 1200 },
    { type: 'final', speaker: 'system', content: 'Potential parasitic drain issue. 2nd occurrence this month. Battery replaced Sep 2024. Happened after sitting over weekend, jump starts easily and operates normally during use. No warning lights, starter clicks indicate sufficient power for electronics but not starter motor. Likely aftermarket equipment or faulty relay drawing power while parked. Check radio, GPS, work lights, and relay box for components staying active.', delay: 2000 }
  ], [])

  const startAnimation = useCallback(() => {
    let stepIndex = 0
    
    const showNextStep = () => {
      if (stepIndex < steps.length) {
        setCurrentStep(stepIndex)
        stepIndex++
        setTimeout(showNextStep, steps[stepIndex - 1]?.delay || 1000)
      }
    }
    
    setTimeout(showNextStep, 800) // Initial delay
  }, [steps])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          startAnimation()
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('animated-demo')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible, startAnimation])

  const resetAnimation = () => {
    setCurrentStep(-1)
    setIsVisible(false)
    setTimeout(() => startAnimation(), 500)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            From Useless Reports to Actionable Intelligence
          </h2>
          <p className="text-xl text-gray-600">
            Watch how Quto&apos;s AI assistant transforms vague complaints into detailed information your mechanics can actually use.
          </p>
        </div>

        {/* Side by Side: Prestart Form vs AI Demo */}
        <div 
          id="animated-demo" 
          className="grid lg:grid-cols-2 gap-6 items-start"
        >
          {/* Left Column: Realistic Prestart Form */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-lg font-medium">
                ❌ BEFORE: Frustrated Mechanic
              </span>
            </div>
            
            {/* Mock Phone Interface - Wider */}
            <div className="bg-gray-100 rounded-2xl p-4 max-w-md mx-auto shadow-lg">
              {/* Phone Header */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Daily Prestart Checklist</span>
                    <span className="text-xs text-gray-400">no-code app</span>
                  </div>
                </div>
                
                {/* Battery Section */}
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Battery <span className="text-red-500">*</span>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Ensure the battery is secure and in good condition
                    </p>
                    
                    {/* Radio Button Options */}
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="battery" className="mr-2" readOnly />
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">OK</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="battery" className="mr-2" checked readOnly />
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">Issue</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="battery" className="mr-2" readOnly />
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">Not Checked</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Issue Description */}
                  <div className="border-2 border-red-200 rounded-lg p-3 bg-red-50">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe the issue:
                    </label>
                    <div className="bg-white border border-gray-300 rounded p-2">
                      <p className="text-red-700 italic">Flat battery again</p>
                    </div>
                  </div>
                  
                  {/* Frustrated Mechanic Note */}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500 italic">
                      😤 Frustrated Mechanic
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Flow Arrow + Process Steps - Only visible on large screens */}
            <div className="hidden lg:block mt-40">
                <div className="text-center">
                    {/* Simple Text Flow - Match form width */}
                    <div className="text-center mb-6 max-w-sm mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        AI Enhancement Process
                    </h3>
                    <div className="space-y-2 text-xl text-gray-600">
                        <p><span className="font-medium">1.</span> Field worker flags and reports issue</p>
                        <p><span className="font-medium">2.</span> AI asks smart questions based on issue, plant item, and fault history</p>
                        <p><span className="font-medium">3.</span> Mechanic gets high quality details to better address the issue</p>
                    </div>
                    
                    {/* Intelligence Process Icons */}
                    <div className="flex items-center justify-center gap-4 mt-6 text-blue-600">
                        <Brain className="h-8 w-8" />
                        <ArrowRight className="h-6 w-6 text-gray-400" />
                        <Zap className="h-8 w-8" />
                        <ArrowRight className="h-6 w-6 text-gray-400" />
                        <Target className="h-8 w-8" />
                    </div>
                    
                    {/* Icon Labels */}
                    <div className="flex items-center justify-center gap-8 mt-2 text-lg text-gray-500">
                        <span>Think</span>
                        <span>Process</span>
                        <span>Deliver</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>

          {/* Right Column: SAME Form + AI Superpowers */}
          <div>
            <div className="flex items-center justify-center mb-6">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-lg font-medium">
                ✅ AFTER: Happy Team with AI Auperpowers
              </span>
            </div>
            
            {/* Mock Phone Interface - ENHANCED - Wider */}
            <div className="bg-gray-100 rounded-2xl p-4 max-w-md mx-auto shadow-lg">
              {/* Phone Header */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Daily Prestart Checklist</span>
                    <span className="text-sm text-blue-600 font-medium">✨ Quto AI</span>
                  </div>
                </div>
                
                {/* Battery Section */}
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Battery <span className="text-red-500">*</span>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Ensure the battery is secure and in good condition
                    </p>
                    
                    {/* Radio Button Options */}
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="battery" className="mr-2" readOnly />
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">OK</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="battery" className="mr-2" checked readOnly />
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">Issue</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="battery" className="mr-2" readOnly />
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">Not Checked</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Issue Description */}
                  <div className="border-2 border-red-200 rounded-lg p-3 mb-4 bg-red-50">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Describe the issue:
                    </label>
                    <div className="bg-white border border-gray-300 rounded p-2">
                      <p className="text-red-700 italic">Flat battery again</p>
                    </div>
                  </div>

                  {/* AI MAGIC STARTS HERE */}
                  <div className={`transition-all duration-500 ${currentStep >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Bot className="h-5 w-5 text-blue-600" />
                        <span className="text-base font-medium text-blue-700">AI Assistant Active</span>
                      </div>
                      <p className="text-sm text-blue-600 italic">Getting more details to help your mechanic...</p>
                    </div>
                  </div>

                  {/* AI Conversation */}
                  <div className="space-y-4">
                    {steps.slice(1, -1).map((step, index) => (
                      <div 
                        key={index}
                        className={`transition-all duration-500 ${
                          currentStep >= index + 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      >
                        <div className={`flex items-start gap-3 ${
                          step.speaker === 'ai' ? 'justify-start' : 'justify-end'
                        }`}>
                          {step.speaker === 'ai' && <Bot className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />}
                          <div className={`max-w-[85%] rounded-lg p-3 ${
                            step.speaker === 'ai' 
                              ? 'bg-blue-100 text-blue-900' 
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <p className="text-sm leading-relaxed">{step.content}</p>
                          </div>
                          {step.speaker === 'user' && <User className="h-5 w-5 text-gray-600 mt-1 flex-shrink-0" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mechanic Summary - Generated by AI - COMPLETELY HIDDEN UNTIL END */}
                  <div className={`transition-all duration-1000 mt-5 ${
                    currentStep >= steps.length - 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-'
                  }`}>
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Wrench className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-green-700 font-semibold text-sm mb-2">Auto-Generated Diagnostic Summary:</p>
                          <p className="text-green-700 text-sm leading-relaxed">
                            {steps[steps.length - 1]?.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Happy Mechanic Note */}
                  <div className={`mt-4 text-center transition-all duration-1000 ${
                    currentStep >= steps.length - 1 ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-sm text-green-600 italic">
                      😊 Mechanic gets detailed info<br />
                      and can fix it immediately!
                    </p>
                  </div>
                </div>
              </div>

              {/* Replay Button - Always Visible */}
              <div className="mt-4 text-center">
                <button 
                  onClick={resetAnimation}
                  className="text-blue-600 hover:text-blue-700 underline text-xs"
                >
                  {currentStep >= steps.length - 1 ? '↻ Watch Again' : '↻ Restart'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}