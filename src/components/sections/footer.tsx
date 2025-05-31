export function Footer() {
    return (
      <footer className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Quto</h3>
            <p className="text-gray-400">
              Smart asset management for construction businesses
            </p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2025 OP Systems Pty Ltd. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }