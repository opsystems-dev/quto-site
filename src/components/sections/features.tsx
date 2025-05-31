import { Brain, Wrench, Shield, Truck } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Fault Diagnosis",
      description: "Turn vague 'it's f**ked' reports into detailed, actionable information. Our AI asks the operator the right questions to help mechanics diagnose problems fast."
    },
    {
      icon: Wrench,
      title: "Smart Maintenance Tracking", 
      description: "Never miss scheduled services again. Automated alerts based on actual usage keeps your assets running and reduces costly downtime."
    },
    {
      icon: Shield,
      title: "Effortless Compliance",
      description: "Stay audit-ready with detailed history of prestart checks, maintenance logs, and compliance, all through tools that your crew will actually use."
    },
    {
      icon: Truck,
      title: "Full Asset Visibility",
      description: "Assignments allow you to know where your plant is, who's using it, and what condition it's in. No more guessing - just clear visibility across your entire fleet."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
                <div key={index} className="text-center group cursor-pointer p-8 rounded-xl hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <IconComponent className="h-14 w-14 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
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