export function RoadmapTeaser() {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Built for Today, Designed for Tomorrow
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Quto starts with plant management, but we're building the complete operational platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 1</h3>
              <p className="text-gray-600">Smart Plant Management</p>
              <p className="text-sm text-blue-600 mt-2">Early 2025</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 2</h3>
              <p className="text-gray-600">Project & Resource Management</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Phase 3</h3>
              <p className="text-gray-600">Complete Operational Suite</p>
            </div>
          </div>
          <a href="/vision" className="text-blue-600 hover:text-blue-700 underline">
            See Our Full Vision →
          </a>
        </div>
      </section>
    )
  }