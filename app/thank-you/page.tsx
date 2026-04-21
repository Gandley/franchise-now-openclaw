import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Welcome! | Franchise Now',
  description: 'Thank you for signing up! Check your email for your Discord invite.',
}

export default function ThankYouPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-brand-600 to-brand-700 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Welcome to the Community!
          </h1>
          <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Check your email for your Discord invite. If you don't see it in a few minutes, check your spam folder.
          </p>
          
          <div className="bg-brand-700 rounded-xl p-6 max-w-lg mx-auto mb-8">
            <h2 className="text-xl font-bold mb-4">What's Next?</h2>
            <ul className="text-left text-brand-100 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">1.</span>
                <span>Check your email for the Discord invite</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">2.</span>
                <span>Join the Discord server</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">3.</span>
                <span>Access the AI Operator Course materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold">4.</span>
                <span>Introduce yourself in the community</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Back to Homepage
            </Link>
            <a 
              href="https://calendly.com/noah-franchisenow/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* EMAIL TROUBLESHOOTING */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Didn't get the email?
          </h2>
          <div className="text-gray-600 space-y-4">
            <p>
              Sometimes emails end up in spam or promotions folders. Here's what to check:
            </p>
            <ul className="text-left inline-block space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-brand-500">•</span>
                <span>Check your spam/junk folder</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-500">•</span>
                <span>Look in Gmail's Promotions tab</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-500">•</span>
                <span>Search for "Franchise Now" in your email</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-500">•</span>
                <span>Wait 5-10 minutes (sometimes there's a delay)</span>
              </li>
            </ul>
            <p className="mt-6">
              Still can't find it? Try signing up again or{' '}
              <a 
                href="https://calendly.com/noah-franchisenow/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                book a call
              </a>{' '}
              and we'll help you out.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
