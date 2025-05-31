import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quto - Terms of Service",
  description: "Terms of Service for Quto Early Access Program",
}

export default function TermsOfService() {
    return (
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Early Access Program</h2>
              <p>
                By joining the Quto early access program, you agree to test our software 
                and provide feedback. The service is provided "as is" during this testing phase.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p>
                During early access, Quto may be temporarily unavailable for maintenance, 
                updates, or improvements. We'll communicate any planned downtime in advance.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data and Feedback</h2>
              <p>
                Any feedback, suggestions, or ideas you provide may be used by OP Systems 
                to improve Quto. Your business data remains confidential and will not be 
                shared with third parties.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                As this is early access software, OP Systems Pty Ltd provides the service 
                without warranties. You use the software at your own risk during the testing phase.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These terms are governed by Australian law and the jurisdiction of Australian courts.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p>
                Questions about these terms? Contact us at 
                <a href="mailto:haiden@op.systems" className="text-blue-600 hover:text-blue-700 underline ml-1">
                  haiden@op.systems
                </a>
              </p>
            </section>
          </div>
  
          <div className="mt-12">
            <a 
              href="/" 
              className="text-blue-600 hover:text-blue-700 underline"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    )
  }