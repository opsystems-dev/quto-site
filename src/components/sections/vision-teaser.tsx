export function VisionTeaser() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Beyond Plant Management
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Quto might be starting out with intelligent asset management, but this is far from the end goal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-2">Starting Point</h3>
            <p className="text-gray-600">AI-Enhanced Plant Management</p>
            <p className="text-sm text-blue-600 mt-2 font-medium">Available Soon</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Growing Into</h3>
            <p className="text-gray-600">Integrated Project, Resource & Compliance Management</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">The Vision</h3>
            <p className="text-gray-600">Unified Company Operations Platform with AI Superpowers</p>
          </div>
        </div>
        <a href="/vision" className="text-blue-600 hover:text-blue-700 underline text-lg font-medium">
          Find out a little more →
        </a>
      </div>
    </section>
  )
}