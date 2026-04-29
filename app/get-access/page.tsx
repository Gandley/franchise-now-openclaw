'use client'

import Link from 'next/link'
import { useState } from 'react'

const AI_USE_OPTIONS = [
  'Save time on repetitive tasks',
  'Generate leads and grow my business',
  'Build and sell AI automation systems',
  'Create content faster',
  'Automate my customer follow-up',
  'Something else',
]

type Step = 1 | 2 | 3

export default function GetAccessPage() {
  const [step, setStep] = useState<Step>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const [aiUse, setAiUse] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)

  const handleStep1Next = () => {
    if (!aiUse) {
      setError('Please select an option to continue.')
      return
    }
    setError('')
    setStep(2)
  }

  const handleStep2Next = () => {
    if (!firstName.trim() || !email.trim()) {
      setError('First name and email are required.')
      return
    }
    setError('')
    setStep(3)
  }

  const handleSubmit = async () => {
    if (!consent) {
      setError('Please check the consent box to continue.')
      return
    }
    setError('')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/quiz-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          aiUse,
        }),
      })

      if (!res.ok) throw new Error('Submission failed')
      setIsSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const progressWidth = step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'

  if (isSubmitted) {
    return (
      <>
        <section className="bg-gradient-to-b from-brand-600 to-brand-700 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Welcome to the Community!
            </h1>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Check your email for your Discord invite. If you don&apos;t see it in a few minutes, check your spam folder.
            </p>

            <div className="bg-brand-700 rounded-xl p-6 max-w-lg mx-auto mb-8">
              <h2 className="text-xl font-bold mb-4">What&apos;s Next?</h2>
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
              <Link
                href="/book-call"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Didn&apos;t get the email?</h2>
            <div className="text-gray-600 space-y-4">
              <p>Sometimes emails end up in spam or promotions folders. Here&apos;s what to check:</p>
              <ul className="text-left inline-block space-y-2">
                <li className="flex items-center gap-2"><span className="text-brand-500">•</span><span>Check your spam/junk folder</span></li>
                <li className="flex items-center gap-2"><span className="text-brand-500">•</span><span>Look in Gmail&apos;s Promotions tab</span></li>
                <li className="flex items-center gap-2"><span className="text-brand-500">•</span><span>Search for &quot;Franchise Now&quot; in your email</span></li>
                <li className="flex items-center gap-2"><span className="text-brand-500">•</span><span>Wait 5–10 minutes (sometimes there&apos;s a delay)</span></li>
              </ul>
              <p className="mt-6">
                Still can&apos;t find it?{' '}
                <Link href="/book-call" className="text-brand-600 hover:underline">Book a call</Link>
                {' '}and we&apos;ll help you out.
              </p>
            </div>
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
            Free Access
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Get Access to the AI Operator Course & Community
          </h1>
          <p className="text-xl text-brand-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            Answer a quick question and we&apos;ll send your free access instantly.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-brand-200 text-sm mt-6">
            <li className="flex items-center gap-1"><span>✓</span> 3 Video Modules (26.5 min)</li>
            <li className="flex items-center gap-1"><span>✓</span> 5 PDF Templates</li>
            <li className="flex items-center gap-1"><span>✓</span> Discord Community Access</li>
            <li className="flex items-center gap-1"><span>✓</span> Learn to Make Your First $1K</li>
          </ul>
        </div>
      </section>

      {/* QUIZ FORM */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Step {step} of 3</span>
                <span>{step === 1 ? '33%' : step === 2 ? '66%' : '100%'} complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className={`bg-brand-600 h-1.5 rounded-full transition-all duration-500 ${progressWidth}`} />
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  What are you mainly trying to use AI for?
                </h2>
                <p className="text-gray-500 text-sm mb-6">Select the option that best describes you.</p>
                <div className="space-y-3">
                  {AI_USE_OPTIONS.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => { setAiUse(option); setError('') }}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all font-medium text-sm ${
                        aiUse === option
                          ? 'border-brand-600 bg-brand-50 text-brand-700'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-brand-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                <button
                  type="button"
                  onClick={handleStep1Next}
                  className="mt-6 w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
                >
                  Continue →
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What is your name?</h2>
                <p className="text-gray-500 text-sm mb-6">We&apos;ll use this to personalize your welcome email.</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="Optional"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                </div>
                {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-4 rounded-lg border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleStep2Next}
                    className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">One last thing</h2>
                <p className="text-gray-500 text-sm mb-6">
                  We&apos;re about to send your free access to <strong>{email}</strong>.
                </p>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={e => { setConsent(e.target.checked); setError('') }}
                      className="mt-1 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      I consent to receive emails and SMS messages about the course, community updates, and related offers from Franchise Now. I can unsubscribe at any time.
                    </span>
                  </label>
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-4 rounded-lg border-2 border-gray-200 text-gray-600 font-medium hover:border-gray-300 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 bg-brand-600 hover:bg-brand-700 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
                  >
                    {isSubmitting ? 'Sending access...' : 'Get My Free Access 🎉'}
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">What You&apos;ll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📚 The AI Operator Course</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-brand-500">•</span><span>3 video modules — 26.5 minutes total</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-500">•</span><span>5 PDF templates included</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-500">•</span><span>Learn to make your first $1,000 with AI Automation</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-500">•</span><span>Introduction to operating and directing AI agents using OpenClaw</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💬 Discord Community</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-brand-500">•</span><span>Connect with other AI operators</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-500">•</span><span>Get your questions answered</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-500">•</span><span>See real examples and case studies</span></li>
                <li className="flex items-start gap-2"><span className="text-brand-500">•</span><span>Stay current on AI workforce trends</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn the model. Then decide.</h2>
          <p className="text-brand-100 text-lg mb-8">
            Whether you want to build it yourself or have us install it for you — this course gives you the foundation.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Get My Free Access
          </button>
        </div>
      </section>
    </>
  )
}
