'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BookCallPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    const firstName = formData.get('firstname') as string
    const lastName = formData.get('lastname') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const businessInfo = formData.get('business') as string
    
    const calendlyUrl = `https://calendly.com/noah-franchisenow/30min?email=${encodeURIComponent(email)}&name=${encodeURIComponent(firstName + ' ' + lastName)}`

    try {
      await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, lastName, phone, businessInfo }),
      })
    } catch (error) {
      console.error('Form submission error:', error)
      // Still redirect even if GC fails
    }

    setIsSubmitted(true)
    setTimeout(() => {
      window.location.href = calendlyUrl
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <>
        {/* SUCCESS / REDIRECTING PAGE */}
        <section className="bg-gradient-to-b from-brand-600 to-brand-700 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">📅</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Great! Taking you to the calendar...
            </h1>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              You're being redirected to Calendly to pick a time that works for you.
            </p>
            
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
            
            <p className="text-brand-200 mt-6 text-sm">
              If you're not redirected,{' '}
              <a 
                href="https://calendly.com/noah-franchisenow/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                click here
              </a>
            </p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-brand-600 to-brand-700 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Free Strategy Session
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Book Your AI Workforce Strategy Call
          </h1>
          <p className="text-xl text-brand-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            Let's talk about how AI automation can reduce your workload and grow your business.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-brand-200 text-sm mt-6">
            <li className="flex items-center gap-1">
              <span>✓</span> 30 Minutes
            </li>
            <li className="flex items-center gap-1">
              <span>✓</span> No Obligation
            </li>
            <li className="flex items-center gap-1">
              <span>✓</span> Custom Roadmap
            </li>
          </ul>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Tell Us About Yourself
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form below, then pick a time on the next page.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your first name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your last name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                />
              </div>

              {/* Business Info */}
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                  Tell us about your business <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="business"
                  name="business"
                  rows={4}
                  placeholder="What do you do? What challenges are you facing? What are your goals?"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                />
              </div>

              {/* Opt-in Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="optin"
                  name="optin"
                  required
                  className="mt-1 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                />
                <label htmlFor="optin" className="text-sm text-gray-600">
                  I agree to receive emails and SMS messages about my booking and related offers. <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-600 hover:bg-brand-700 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Continue to Calendar'}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">
                We'll learn about your business, your current processes, and where you're feeling stuck.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roadmap</h3>
              <p className="text-gray-600 text-sm">
                You'll get a custom AI automation roadmap tailored to your specific business needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Next Steps</h3>
              <p className="text-gray-600 text-sm">
                We'll outline exactly how to implement — whether DIY, with guidance, or done-for-you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/"
            className="inline-block text-brand-600 hover:text-brand-700 font-medium"
          >
            ← Back to Homepage
          </Link>
        </div>
      </section>
    </>
  )
}
