import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Franchise Now | AI Automation Agency',
  description: 'Franchise Now is an AI automation agency that builds and manages custom systems for digital business owners. Here\'s who we are and why we built this.',
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We Got Tired of Watching Business Owners Pay for Tools That Never Got Turned On.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">So we built an agency that does it for them.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            <p>Most digital business owners we talk to have the same story.</p>
            <p>They&apos;ve tried the tools. They&apos;ve signed up for the platforms. They&apos;ve watched the YouTube tutorials and maybe hired someone to &ldquo;set it up.&rdquo; And three months later, nothing&apos;s working — or worse, it&apos;s working just enough to be confusing.</p>
            <p>Meanwhile, AI is moving fast. The business owners who figure out how to use automation effectively are pulling ahead of everyone who hasn&apos;t.</p>
            <p>We started Franchise Now because we saw a gap: there are plenty of people selling AI tools and plenty of people teaching AI concepts — but almost no one actually building and running the systems for business owners who don&apos;t have time to do it themselves.</p>
            <p>That&apos;s our lane.</p>
            <p>We&apos;re not theorists. We&apos;re not course sellers. We&apos;re operators. We build systems, we install them, and we run them. The measure of our success is simple: are our clients getting more booked calls, converting more leads, and spending less time on manual work?</p>
            <p className="font-semibold text-gray-900 text-xl">If yes — we&apos;re doing our job.</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 bg-brand-600 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-brand-200 text-sm font-semibold uppercase tracking-wide mb-3">Our Mission</div>
          <h2 className="text-3xl font-bold">Make AI automation practical and profitable for digital business owners.</h2>
          <p className="text-brand-100 text-lg mt-4">Not hype. Not theory. Real systems that produce measurable outcomes in real businesses.</p>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">How We Operate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'We start with strategy, not tools.', desc: 'Before we touch a single platform, we map your lead flow, find the gaps, and design a system that actually fits your business.' },
              { title: 'We build for results, not complexity.', desc: "The best automation system is the one that works reliably and produces measurable outcomes. We don't build impressive-looking tech for its own sake." },
              { title: "We manage it so you don't have to.", desc: "Our job isn't to hand you a system and leave. We run it, monitor it, and optimize it over time." },
              { title: 'We tell you the truth.', desc: "If automation isn't the right next step for your business right now, we'll say that. We only take on clients where we're confident we can deliver." },
            ].map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to see what we&apos;d build for your business?</h2>
          <p className="text-gray-400 mb-8">No obligation. Just a clear picture of what&apos;s possible and what it would take.</p>
          <Link href="/book" className="btn-primary text-lg">Book a Free Strategy Session</Link>
        </div>
      </section>
    </>
  )
}
