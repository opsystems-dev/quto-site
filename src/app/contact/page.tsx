import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quto - Contact Us",
  description: "Get in touch with the Quto team about our AI-powered asset management platform",
}

export default function Contact() {
    return (
      <main className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Get in Touch</h2>
                <p className="text-gray-600 mb-4">
                  Have questions about Quto or want to learn more about our early access program? 
                  We&apos;d love to hear from you.
                </p>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">OP Systems Pty Ltd</h3>
              <div className="text-gray-600 space-y-1">
                <p>Email: haiden@op.systems</p>
                <p>ABN: 90 668 139 286</p>
                <p>Australia</p>
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Access Inquiries</h3>
              <p className="text-gray-600">
                For questions about joining our early access program, please use the 
                  <Link href="/#early-access-form" className="text-blue-600 hover:text-blue-700 underline ml-1">
                    early access form
                  </Link> on our homepage.
              </p>
            </div>
          </div>
  
          <div className="mt-12">
            <Link href="/" className="text-blue-600 hover:text-blue-700 underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }