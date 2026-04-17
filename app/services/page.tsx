import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OpenClaw Growth System | Done-For-You AI Automation | Franchise Now',
  description: 'We build and manage custom AI automation systems that capture leads, automate follow-up, and fill your calendar — without you touching the tech. Starting at $1,500.',
}

const testimonials = [
  {
    quote: "Before this, we had leads coming in but no real system to handle them. We were losing opportunities every day. After getting the automation set up, follow-up happens instantly and we're consistently booking calls without manually chasing people.",
    name: "Jake M.",
    role: "Marketing Agency Owner",
  },
  {
    quote: "I was skeptical at first because I've tried tools before that didn't really work together. This was different. Everything is connected, and it actually runs without me thinking about it. It feels like having an extra team member.",
    name: "Chris T.",
    role: "Consultant",
  },
  {
    quote: "The biggest win for me was not having to follow up manually anymore. The automation handles it better than I did, and I'm seeing more qualified calls come through without extra effort.",
    name: "Amanda K.",
    role: "Digital Business Owner",
  },
  {
    quote: "We went from inconsistent outreach and missed messages to a streamlined system that actually converts. The biggest difference is speed—leads get hit immediately, and that alone has increased our booked calls.",
    name: "Daniel R.",
    role: "Course Creator",
  },
  {
    quote: "I knew I needed automation but had no idea where to start. The system they built for me took over lead handling completely. Now people are getting responses, reminders, and booking links automatically—it's saved me hours every week.",
    name: "Sarah L.",
    role: "Online Coach",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* PRE-HEADLINE */}
      <div className="bg-gray-900 text-gray-300 py-3 text-center text-sm">
        If you&apos;re a digital business owner who&apos;s tired of losing leads and doing follow-up manually — read this carefully.
      </div>

      {/* HERO */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What If Every Lead That Came Into Your Business Got Followed Up With Instantly —{' '}
            <span className="text-brand-600">Without You Lifting a Finger?</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We design, build, and manage custom AI automation systems that capture leads, respond automatically, and book appointments on your calendar — so you can focus on what you&apos;re actually good at.
          </p>
          <Link href="/book" className="btn-primary text-lg">Apply to Work With Us</Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">You&apos;re working harder than you should be. And your leads are paying for it.</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>A lead comes in through your website, social media, or referral. You&apos;re busy. You don&apos;t respond immediately. By the time you follow up — hours or even a day later — they&apos;ve already moved on.</p>
            <p>You lose the client. Not because your offer was bad. Because your system failed them. And it happens over and over again.</p>
            <p>Meanwhile:</p>
            <ul className="space-y-2 pl-4">
              {[
                "You're still manually sending follow-up messages",
                "You're still chasing people who showed interest two weeks ago",
                "You're still spending time on admin that should be automated",
                "Your competitors who figured this out are booking calls you should be getting",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-gray-900 text-xl pt-2">You don&apos;t have a sales problem. You have a systems problem.</p>
          </div>
        </div>
      </section>

      {/* MECHANISM */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">There&apos;s a better way — and it doesn&apos;t require you to become a tech expert.</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>AI automation, when properly configured for your specific business, removes the human bottleneck from the parts of your business that don&apos;t require a human.</p>
            <div className="bg-white border border-brand-200 rounded-xl p-6 text-center font-medium text-brand-700">
              Lead comes in → System responds instantly → Follow-up sent automatically → Appointment booked → You get notified when it&apos;s time to show up.
            </div>
            <p>That&apos;s not a fantasy. That&apos;s what a working automation system looks like.</p>
            <p>We use <strong>OpenClaw</strong> — a powerful AI agent platform — to build custom automation systems tailored to your business. We map your actual lead flow, identify where people fall out, and build a system that plugs those gaps.</p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Here&apos;s exactly what we build for you.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Strategy & Mapping',
                color: 'bg-blue-50 border-blue-200',
                items: [
                  'Discovery call to map your current lead flow',
                  'Identify top 3 automation opportunities',
                  'Custom automation blueprint for your business',
                ],
              },
              {
                phase: 'Phase 2',
                title: 'Build & Install',
                color: 'bg-green-50 border-green-200',
                items: [
                  'Full OpenClaw automation setup',
                  'Lead capture integration',
                  'Automated follow-up sequences',
                  'Appointment booking optimization',
                  'Client communication automation',
                  'Tech stack integration + QA testing',
                ],
              },
              {
                phase: 'Phase 3',
                title: 'Management & Optimization',
                color: 'bg-purple-50 border-purple-200',
                items: [
                  'Monthly performance reviews',
                  'System optimization based on results',
                  'New automations as your business grows',
                  'Priority support and direct team access',
                ],
              },
            ].map((p, i) => (
              <div key={i} className={`border rounded-xl p-6 ${p.color}`}>
                <div className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1">{p.phase}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/book" className="btn-primary text-lg">Apply to Work With Us</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">This is what clients say after the system is running.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-gray-900 text-2xl mb-6">This is the right fit if...</h3>
              <ul className="space-y-3">
                {[
                  "You're a coach, consultant, agency owner, or digital service provider",
                  "You have leads coming in but aren't converting them consistently",
                  "You want AI working in your business — without doing the setup yourself",
                  "You're serious about growth and ready to invest in a system that compounds",
                  "You want a strategic partner, not just a tech vendor",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-2xl mb-6">This is NOT for you if...</h3>
              <ul className="space-y-3">
                {[
                  "You're looking for a quick fix with no investment",
                  "You have no existing offer or audience",
                  "You want to manage the tech yourself",
                  "You're not ready to move within the next 30 days",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-lg mt-0.5">✕</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Here&apos;s how we work together.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Option A</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Setup Package</h3>
              <div className="text-3xl font-bold text-brand-600 mb-4">Starting at $1,500</div>
              <p className="text-gray-600 mb-6 text-sm">Get your automation system built and running. Perfect if you want to manage ongoing optimization yourself.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-8">
                {['Full strategy and blueprint', 'Complete build and installation', 'Testing and launch support', '30-day post-launch support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/book" className="btn-secondary w-full block text-center">Book a Call to Start</Link>
            </div>
            <div className="bg-brand-600 text-white rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
              <div className="text-sm font-semibold text-brand-200 uppercase tracking-wide mb-2">Option B</div>
              <h3 className="text-2xl font-bold mb-1">Setup + Management</h3>
              <div className="text-3xl font-bold mb-1">$1,500 setup</div>
              <div className="text-xl font-semibold text-brand-200 mb-4">+ $1,500/month</div>
              <p className="text-brand-100 mb-6 text-sm">Your system, built and managed every month. We handle it all so you can stay focused on your business.</p>
              <ul className="space-y-2 text-sm text-brand-100 mb-8">
                {['Everything in Setup Package', 'Monthly performance reviews', 'Ongoing optimization and improvements', 'New automations as you grow', 'Priority support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-yellow-300">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/book" className="block text-center bg-white text-brand-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors">Apply Now</Link>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Not sure which is right? Book a call and we&apos;ll tell you exactly what your business needs.</p>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Questions we hear often.</h2>
          <div className="space-y-6">
            {[
              { q: "I've tried automation tools before and they didn't work.", a: "Most tools fail because they're not set up correctly. Off-the-shelf tools with no customization rarely work. We don't hand you a tool — we build a system configured specifically for your business and make sure it actually runs." },
              { q: "I don't know if I have enough leads to make this worth it.", a: "If you have even a trickle of inbound interest — inquiries, DMs, form submissions — automation will convert more of them into calls. You don't need massive volume to see results. You need the right system." },
              { q: "I'm not technical. Will I be able to use this?", a: "Yes. That's the whole point. You don't touch the tech. We build it, we run it, we manage it. You just see the leads come through and the calls appear on your calendar." },
              { q: "How long before I see results?", a: "Most clients see the system working within the first 2–3 weeks after launch. The system improves over time as we optimize based on real data." },
              { q: "Is there a contract?", a: "Setup work is project-based. Management retainers are month-to-month after an initial commitment period. We're not interested in trapping clients who aren't getting results." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE VISUALIZATION */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Imagine 90 days from now...</h2>
          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>You open your calendar Monday morning and there are 4 strategy calls booked — all from leads that came in over the weekend, got followed up with automatically, and scheduled themselves.</p>
            <p>You didn&apos;t touch any of it.</p>
            <p>Your follow-up sequence is running. Your lead capture is working. Your appointment booking is converting.</p>
            <p>You&apos;re spending your time on client calls and delivering results — not chasing leads, writing follow-up emails at midnight, or wondering why someone went cold.</p>
            <p className="text-white font-semibold text-xl">This is what&apos;s available to you. The only question is how soon you want to get there.</p>
          </div>
        </div>
      </section>

      {/* URGENCY + FINAL CTA */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We take on a limited number of new clients per month.</h2>
          <p className="text-brand-100 text-lg mb-8">Our process requires deep work on each client&apos;s system. We don&apos;t run an assembly line. If you&apos;re ready to move — book your session now.</p>
          <Link href="/book" className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-10 py-5 rounded-lg transition-colors text-xl">
            Apply to Work With Us →
          </Link>
          <p className="text-brand-200 text-sm mt-4">
            What happens next: You book a call. We review your setup, identify your top automation opportunity, and tell you exactly what we&apos;d build. No obligation.
          </p>
        </div>
      </section>
    </>
  )
}
