import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free AI Automation Playbook | Franchise Now',
  description: 'Get the free guide that shows digital business owners how to identify, build, and sell AI-powered automation offers — without the technical complexity.',
}

export default function FreeGuidePage() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            FREE GUIDE — Instant Access
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Stop watching other people profit from AI while you try to figure out where to start.
          </h1>
          <p className="text-gray-300 text-xl mb-10 leading-relaxed">
            Get the free playbook that shows you how to find your best automation opportunities, build them without getting technical, and turn AI into a real business asset.
          </p>

          {/* OPT-IN FORM */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 mb-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">The AI Automation Playbook</h2>
            <p className="text-gray-500 text-sm mb-6">How to Build and Sell AI-Powered Products Without the Technical Headache</p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <Link href="/thank-you" className="btn-primary w-full block text-center text-lg">
                → Get Instant Free Access
              </Link>
            </form>
            <p className="text-gray-400 text-xs mt-4">🔒 No spam. Unsubscribe anytime. We treat your information with respect.</p>
          </div>

          {/* WHAT'S INSIDE */}
          <div className="text-left space-y-4">
            <h3 className="text-xl font-bold text-center mb-6">What&apos;s inside the playbook:</h3>
            {[
              'The 5 highest-ROI automation opportunities for digital businesses right now — so you focus on what actually moves money',
              'How to identify your #1 bottleneck — the single place where leads, time, or revenue is leaking that automation can fix',
              'A simple framework for building AI-powered offers — even if you\'re not technical and don\'t write code',
              'What a fully automated lead system looks like in practice — real examples you can steal and adapt',
              'How to sell AI automation as a service or use it as leverage in your existing offer',
              'The tools that actually matter — and the ones that are just noise',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">✅</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who this is for</h2>
          <div className="space-y-3">
            {[
              'Entrepreneurs and creators who want to understand how to use AI beyond ChatGPT',
              'Coaches and consultants who want to scale without hiring more people',
              'Agency owners looking for a competitive edge through automation',
              'Digital business owners who keep hearing about AI but haven\'t implemented anything real yet',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <span className="text-brand-600 font-bold mt-0.5">→</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPEAT CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to see what&apos;s possible?</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <Link href="/thank-you" className="btn-primary w-full block text-center">
              Send Me the Playbook
            </Link>
          </form>
        </div>
      </section>
    </>
  )
}
