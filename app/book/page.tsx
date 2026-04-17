import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Session | Franchise Now',
  description: "Book a free 30-minute strategy session. We'll review your lead flow, identify your top automation opportunity, and show you exactly what a custom system would look like for your business.",
}

export default function BookPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Free — No Obligation
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Free AI Automation Strategy Session</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                In 30 minutes, we&apos;ll map your current lead flow, find where you&apos;re losing conversions, and show you exactly what a custom automation system would look like for your business.
              </p>

              <h2 className="font-bold text-gray-900 text-lg mb-4">On this call, we will:</h2>
              <ul className="space-y-3 mb-8">
                {[
                  'Review your current lead capture and follow-up process',
                  'Identify your top 1–2 automation opportunities',
                  'Show you what a custom OpenClaw system would look like for your business',
                  'Give you a clear picture of investment and timeline',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-600">
                <em>There&apos;s no obligation to move forward. This is a working session, not a sales pitch.</em>
              </div>

              <div className="mt-8">
                <h2 className="font-bold text-gray-900 text-lg mb-4">Who this call is for:</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    "You're a coach, consultant, agency owner, or digital service provider",
                    "You have leads coming in but want to convert more automatically",
                    "You're serious about using AI and ready to invest in a real system",
                    "You want to move in the next 30–60 days",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-500 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CALENDAR EMBED */}
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-brand-600 text-white p-4 text-center">
                  <div className="font-bold text-lg">Schedule Your Session</div>
                  <div className="text-brand-200 text-sm">30 minutes · Free · No commitment</div>
                </div>
                <div className="p-4">
                  {/* Calendly embed */}
                  <div
                    className="calendly-inline-widget w-full"
                    data-url="https://calendly.com/noah-franchisenow/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                    style={{ minWidth: '320px', height: '630px' }}
                  />
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is this really free?', a: "Yes. No hidden agenda. If we're a fit after the call, we'll talk about next steps. If not, you'll still walk away with clarity on what your automation priority should be." },
              { q: 'How long is the call?', a: "30 minutes. We keep it tight and focused." },
              { q: 'Do I need to prepare anything?', a: "Just know your current lead flow — where leads come from, how you follow up, and how they book. That's it." },
              { q: "What if I'm not ready to invest yet?", a: "That's fine. We'll still give you real information. And you'll at least know what the path looks like when you are ready." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FALLBACK FORM */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Prefer to reach out by message first?</h2>
          <p className="text-gray-500 text-center mb-8">We typically respond within 1 business day.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              <input type="text" placeholder="Last Name" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            <input type="text" placeholder="What do you do / business type?" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500" />
            <textarea placeholder="What's your biggest bottleneck right now?" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none" />
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}
