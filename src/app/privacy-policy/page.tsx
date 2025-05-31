import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quto - Privacy Policy",
  description: "Privacy Policy for Quto - AI-Powered Asset Management for Construction",
}

export default function PrivacyPolicy() {
    return (
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p>
                OP Systems Pty Ltd ("we," "our," or "us") operates the Quto application. 
                This Privacy Policy explains how we collect, use, and protect your personal information 
                when you use our early access program and services.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p>When you sign up for early access, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name and work email address</li>
                <li>Company name and business information</li>
                <li>Communication preferences</li>
                <li>Usage data when you interact with our application</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide early access to Quto</li>
                <li>Send product updates and launch notifications</li>
                <li>Improve our services based on your feedback</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information 
                against unauthorised access, alteration, disclosure, or destruction.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at 
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