import { ClipboardCheck, Brain, Calendar, Users } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: ClipboardCheck,
      title: "Smart Pre-Starts That Actually Help",
      description: "Digital checklists that learn from your history. Alert users of known issues, reference previous faults, and guide operators through meaningful checks... not mindless tick-and-flick."
    },
    {
      icon: Brain,
      title: "Turn Problems Into Solutions",
      description: "Transform vague fault reports into detailed diagnostic information. AI guides operators through smart questions, giving mechanics everything they need to fix issues fast."
    },
    {
      icon: Calendar,
      title: "Never Miss Another Service",
      description: "Usage-based scheduling for services, regos, preventative maintenance and more including multi-engine capabilities. Smart conflict detection ensures nothing falls through the cracks while keeping your fleet running."
    },
    {
      icon: Users,
      title: "Fleet Information For Everyone, Everywhere",
      description: "Service history, specs and current issues accessible to both office and field staff. No more hunting through server folders or playing phone tag to find equipment details."
    }
  ]

  return (
    <section id="features" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Stop Fighting Fires, Start Preventing Them
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Built by someone who got sick of the same headaches you deal with every day
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center group cursor-pointer p-8 rounded-xl shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <IconComponent className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                </p>
                </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}