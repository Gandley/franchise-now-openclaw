import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Get Access | AI Operator Course & Community | Franchise Now',
  description: 'Get free access to the AI Operator Course and join our community of AI operators. Learn to build, deploy, and manage AI operators for your business.',
}

export default function GetAccessPage() {
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
            Join our community of AI operators and get instant access to the course.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 text-brand-200 text-sm mt-6">
            <li className="flex items-center gap-1">
              <span>✓</span> 3 Video Modules (26.5 min)
            </li>
            <li className="flex items-center gap-1">
              <span>✓</span> 5 PDF Templates
            </li>
            <li className="flex items-center gap-1">
              <span>✓</span> Discord Community Access
            </li>
            <li className="flex items-center gap-1">
              <span>✓</span> Learn to Make Your First $1K
            </li>
          </ul>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Fill Out the Form Below
            </h2>
            <p className="text-gray-600 text-center mb-8">
              We'll send you the Discord invite via email immediately.
            </p>

            {/* ActiveCampaign Form Embed */}
            <div id="_form_1_" className="_form _form_1 _inline-form _inline-style">
              <form
                method="POST"
                action="https://franchisenow.activehosted.com/proc.php"
                id="_form_1_"
                className="_form _form_1 _inline-form"
                noValidate
              >
                <input type="hidden" name="u" value="1" />
                <input type="hidden" name="f" value="1" />
                <input type="hidden" name="s" value="" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input type="hidden" name="or" value="" />

                <div className="space-y-6">
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number (optional)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
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
                      I agree to receive emails and SMS messages about the course, community updates, and related offers. <span className="text-red-500">*</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
                  >
                    Get My Free Access
                  </button>
                </div>
              </form>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📚 The AI Operator Course</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>3 video modules — 26.5 minutes total</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>5 PDF templates included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Learn to make your first $1,000 with AI Automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Introduction to operating and directing AI agents using OpenClaw</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💬 Discord Community</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Connect with other AI operators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Get your questions answered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>See real examples and case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Stay current on AI workforce trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-16 bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Learn the model. Then decide.
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Whether you want to build it yourself, do it with guidance, or have us help install it for you — this course gives you the foundation.
          </p>
          <a 
            href="#_form_1_"
            className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Get My Free Access
          </a>
        </div>
      </section>
    </>
  )
}
