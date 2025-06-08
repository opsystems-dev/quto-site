export function FounderStory() {
    return (
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built by Someone Who's Lived the Chaos
            </h2>
            <p className="text-xl text-gray-600">
              15+ years in construction has shown me exactly what teams want and need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Story */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">From the Trenches to the Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                I've progressed from site engineer to project manager to operations manager.
                With each step up, I was determined to fix the problems and frustrations I'd faced before.
                Fifteen years of solving operational chaos from the inside, unlocking teams' potential only to watch it get stolen by the next administrative burden.
                </p>
                <p className="text-gray-600 leading-relaxed">
                Every construction company I've worked with struggles with the same operational chaos.
                Skilled tradies spending hours on paperwork they don't understand.
                Enthusiastic engineers turned into burnt-out administrators.
                Brilliant businesses drowning in admin overhead instead of focusing on what they do best.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Now, Why AI</h3>
                <p className="text-gray-600 leading-relaxed">
                I've built solutions in Excel, Airtable, and nearly every platform imaginable - always hitting limitations, never fully satisfied. 
                AI finally makes it possible to build the tools we always needed. 
                These tools can transform businesses and improve people's work lives more than I ever could through consulting alone.
                </p>
              </div>
            </div>
  
            {/* Right Column: Visual/Stats */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">The Journey</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Site Engineer</p>
                    <p className="text-sm text-gray-600">
                        Years in the field, seeing teammates struggle with frustrating paperwork.
                        Gradually losing motivation myself, getting bogged down in admin, spending most weekends trying to get ahead.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Project Manager</p>
                    <p className="text-sm text-gray-600">
                        Connected the dots and started seeing the bigger picture.
                        Suddenly understanding why all those "pointless" systems existed.
                        Finally able to push back a little, but constantly hit with excuses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Operations Manager</p>
                    <p className="text-sm text-gray-600">
                        Realised delivering great work is only half the battle - admin overhead was growing out of control.
                        Making it better for one role often made it twice as hard for another.
                        Today's tools always falling short of what we really needed and often adding more work.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">Solo Founder</p>
                    <p className="text-sm text-gray-600">Building the solutions we always needed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-2xl font-bold text-blue-600 mb-1">15+ Years</p>
                <p className="text-sm text-gray-600">Living the Operational Chaos</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 italic">
              "I don't just theorise about construction problems, I've lived them.<br />
              Now I'm building the tools that actually solve them."
            </p>
            <p className="text-gray-600 mt-2">— Haiden Baker, Founder</p>
          </div>
        </div>
      </section>
    )
  }