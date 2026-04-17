import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You're In! | Franchise Now",
  description: 'Your AI Automation Playbook is on its way. Check your inbox.',
}

export default function ThankYouPage() {
  return (
    <>
      <section className="py-24 bg-gradient-to-b from-brand-50 to-white text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">You&apos;re in. Here&apos;s your access.</h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Check your inbox — your copy of <strong>The AI Automation Playbook</strong> is on its way.
            <br />
            <span className="text-sm text-gray-400">(Check spam if you don&apos;t see it in 5 minutes.)</span>
          </p>
          <Link href="#" className="btn-primary text-lg mb-12 inline-block">
            → Download the Playbook Directly
          </Link>
        </div>
      </section>

      {/* UPSELL */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            One More Thing...
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want us to build this for you?</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            The playbook gives you the map. But if you&apos;d rather have someone build the system while you run your business — that&apos;s exactly what we do.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We build, install, and manage custom AI automations for digital business owners. Lead capture. Follow-up. Appointment booking. All of it.
          </p>
          <p className="text-white font-semibold text-lg mb-6">If that sounds like what you need:</p>
          <Link href="/book" className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-bold px-10 py-5 rounded-lg transition-colors text-xl">
            Book a Free 30-Minute Strategy Call →
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            No pitch. We&apos;ll look at your business, identify your best automation opportunity, and tell you exactly what we&apos;d build. Whether or not you work with us after that is entirely up to you.
          </p>
        </div>
      </section>
    </>
  )
}
