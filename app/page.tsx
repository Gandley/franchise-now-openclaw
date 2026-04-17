import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Now | AI Automation for Digital Business Owners',
  description: 'We build and manage custom AI automations that capture leads, follow up automatically, and book appointments on your calendar. No tech headaches. Just results.',
}

const testimonials = [
  {
    quote: "Before this, we had leads coming in but no real system to handle them. We were losing opportunities every day. After getting the automation set up, follow-up happens instantly and we're consistently booking calls without manually chasing people.",
    name: "Jake M.",
    role: "Marketing Agency Owner",
  },
  {
    quote: "I knew I needed automation but had no idea where to start. The system they built for me took over lead handling completely. Now people are getting responses, reminders, and booking links automatically—it's saved me hours every week.",
    name: "Sarah L.",
    role: "Online Coach",
  },
  {
    quote: "We went from inconsistent outreach and missed messages to a streamlined system that actually converts. The biggest difference is speed—leads get hit immediately, and that alone has increased our booked calls.",
    name: "Daniel R.",
    role: "Course Creator",
  },
]

const outcomes = [
  { icon: '🎯', title: 'More Booked Appointments', desc: 'Automated follow-up turns inquiries into calls on your calendar.' },
  { icon: '⚡', title: 'Faster Lead Response', desc: 'Every lead gets a response in minutes, not hours.' },
  { icon: '🔄', title: 'Consistent Follow-Up', desc: 'No more manually chasing prospects who went cold.' },
  { icon: '📈', title: 'Better Conversion', desc: 'The right message at the right time, every time.' },
  { icon: '🕐', title: 'Hours Back Per Week', desc: 'Stop doing work that a system can do better.' },
  { icon: '💼', title: 'Professional Client Experience', desc: 'Automated but personal communication at every touchpoint.' },
]

const faqs = [
  {
    q: 'Do I need any technical experience?',
    a: 'None. We handle everything — setup, configuration, testing, and ongoing management. You approve the strategy and we execute.',
  },
  {
    q: 'How long does it take to get set up?',
    a: 'Most systems are live within 2–3 weeks of our strategy session, depending on complexity.',
  },
  {
    q: 'What if I already have some tools set up?',
    a: "Even better. We work with what you have, identify gaps, and fill them. We're not here to replace everything — we're here to make your tech stack actually work together.",
  },
  {
    q: 'How is this different from just using AI tools myself?',
    a: "Tools are only as good as their configuration. Most people buy tools and never set them up properly. We don't just sell you access — we build, install, and manage the system for you.",
  },
  {
    q: 'What kind of businesses do you work with?',
    a: 'Coaches, consultants, agency owners, creators, and digital service providers. If you have leads coming in and you want to convert more of them into booked calls — we can help.',
  },
  {
    q: 'What does it cost?',
    a: 'Starting at $1,500 setup + $1,500/month management. Book a call and we\'ll give you a clear number based on your situation.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-brand-50 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            AI Automation for Digital Business Owners
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            You&apos;re losing leads, missing follow-ups, and leaving money on the table — not because you&apos;re bad at business, but because{' '}
            <span className="text-brand-600">no one set up the systems.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We build and manage custom AI automations that capture your leads, follow up automatically, and book appointments on your calendar — so you can focus on closing, not chasing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-primary text-lg">
              Book a Free Strategy Call
            </Link>
            <Link href="/free-guide" className="btn-secondary text-lg">
              Get the Free AI Guide →
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">Helping digital business owners install AI systems that work while they sleep.</p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">This is built for you if...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              "You're a coach, consultant, creator, or agency owner",
              "You're getting interest but losing leads before they book",
              "You want to use AI in your business but don't want to touch the tech",
              "Your follow-up is inconsistent — or nonexistent",
              "You're manually doing work that should be automated",
              "You know you need better systems but don't have time to build them",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Most digital business owners have a systems problem, not a sales problem.</h2>
          <div className="text-gray-300 space-y-4 text-lg leading-relaxed text-left">
            <p>You&apos;re spending hours on tasks that should take minutes. Leads come in and fall through the cracks because there&apos;s no follow-up system. Appointment bookings are inconsistent because the process depends on you showing up manually every time.</p>
            <p>The real problem isn&apos;t that AI is complicated — it&apos;s that no one has set it up properly for your business.</p>
            <p className="font-semibold text-white text-xl">That&apos;s exactly what we do.</p>
          </div>
        </div>
      </section>

      {/* KEY OUTCOMES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Here&apos;s what changes when your systems actually work.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((o, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{o.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{o.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Three steps from chaos to a running system.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy Call',
                desc: "We map out your current lead flow, identify where you're losing people, and design a custom automation plan for your business.",
              },
              {
                step: '02',
                title: 'We Build It',
                desc: 'Our team installs and configures your OpenClaw automation system — lead capture, follow-up sequences, booking optimization, and client communication flows.',
              },
              {
                step: '03',
                title: 'It Runs. You Close.',
                desc: 'Your automation handles the repetitive work. You get notified when someone\'s ready to book. We manage and optimize the system so it keeps improving.',
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-brand-600 text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/book" className="btn-primary text-lg">Book a Free Strategy Call</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Results from real systems, not theory.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">We&apos;re operators, not theorists.</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Franchise Now was built by a team who got tired of watching business owners pay for tools that never got turned on. Our approach is simple: figure out what&apos;s costing you time and money, build a system that fixes it, and make sure it actually runs.
          </p>
          <Link href="/about" className="text-brand-600 font-semibold hover:underline">Learn more about us →</Link>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not ready to book a call yet? Start here.</h2>
          <p className="text-brand-100 text-lg mb-8">
            Get our free guide: <em className="font-semibold text-white">The AI Automation Playbook</em> — how to build and sell AI-powered products without the technical headache.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
            <span className="text-brand-200 text-sm">✓ 5 most profitable automation opportunities</span>
            <span className="text-brand-200 text-sm">✓ What to automate first</span>
            <span className="text-brand-200 text-sm">✓ Real examples</span>
          </div>
          <Link href="/free-guide" className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors text-lg">
            Download the Free Guide →
          </Link>
          <p className="text-brand-200 text-sm mt-4">No spam. Just practical information.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your business shouldn&apos;t depend on you being available 24/7.</h2>
          <p className="text-gray-300 text-lg mb-8">Let&apos;s build the system that works when you don&apos;t.</p>
          <Link href="/book" className="btn-primary text-lg">Book a Free Strategy Call</Link>
          <p className="text-gray-500 text-sm mt-4">We take on a limited number of new clients per month to maintain quality.</p>
        </div>
      </section>
    </>
  )
}
