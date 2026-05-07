import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You for Your Purchase | Franchise Now',
  description: 'Welcome to Franchise Now! Your AI operator setup is confirmed. Here is what happens next.',
}

export default function ThankYouPurchasePage() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome to Franchise Now!
          </h1>
          
          <p className="text-xl text-gray-600 mb-2">
            Your purchase is confirmed.
          </p>
          
          <p className="text-lg text-brand-600 font-semibold">
            Here is what happens next.
          </p>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Next Steps</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-600 text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Check Your Email</h3>
                <p className="text-gray-600">We have sent your receipt and onboarding details to your email. Look for an email from Franchise Now.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-600 text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Join the Free Course & Community</h3>
                <p className="text-gray-600 mb-3">Get instant access to the AI Operator Course and connect with our Discord community for real-time support.</p>
                <a 
                  href="https://discord.gg/TUtSBRpBC"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Join Discord Community →
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-600 text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Schedule Your Onboarding Call</h3>
                <p className="text-gray-600 mb-3">Book your AI operator setup call. We will walk you through the entire process and get you started.</p>
                <a 
                  href="https://calendly.com/noah-franchisenow/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Book Onboarding Call →
                </a>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-brand-600 text-white font-bold rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Get Your Free Marketing Assessment</h3>
                <p className="text-gray-600 mb-3">Run a complete gap and opportunity analysis for your business. See exactly where you can improve your marketing.</p>
                <a 
                  href="https://app.mplannerpro.com/7270f820ae/chat?pg=3c4800524a"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
                >
                  Get Free Marketing Assessment →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You Get</h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <ul className="space-y-3">
              {[
                'AI Agent Setup with 14 Core Skills',
                'ClawLauncher Hosting & Security',
                'Monthly Resources & Updates (if applicable)',
                'Email Support (if applicable)',
                'Weekly Group Calls (if applicable)',
                'Private 1-on-1 Calls (if applicable)',
                'Advanced Agent Training (if applicable)',
                'Franchise Now Community Access',
                'AI Operator Free Course',
                'Discord Server Access'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
          <p className="text-gray-600 mb-6">
            Reply to your confirmation email or message us in Discord. We are here to help.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/"
              className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
