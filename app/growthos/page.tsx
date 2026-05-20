import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GrowthOS | Franchise-Grade Marketing Execution',
  description: 'Franchise-grade marketing discipline for your business. AI-generated 12-month marketing plans with full budget allocation, CAC targets, and ROI projections — executed by specialist teams and tracked monthly.',
}

const services = [
  {
    name: 'High-Conversion Web Design',
    description: 'Landing pages and site updates built to convert, not just look good.',
  },
  {
    name: 'Authority SEO & AEO',
    description: 'Rank in traditional search and AI-generated answers. Built for how people actually find businesses today.',
  },
  {
    name: 'Google Business Profile Optimization',
    description: 'Own your local presence. Show up first when intent is highest.',
  },
  {
    name: 'Google Pay-Per-Click (PPC)',
    description: 'Precision paid search campaigns managed against your CAC targets, not vanity metrics.',
  },
  {
    name: 'Google Local Service Ads (LSA)',
    description: 'Pay only for verified leads in your service area.',
  },
  {
    name: 'Precision Facebook & Meta Ads',
    description: 'Audience-first paid social with full-funnel tracking and monthly reporting.',
  },
  {
    name: 'Automated Review Generation',
    description: 'Build review velocity that compounds your reputation and local rankings over time.',
  },
  {
    name: 'Podcast & Authority Boosts',
    description: 'Position you or your brand as the trusted expert in your market and vertical.',
  },
  {
    name: 'Goal Tracking & Reporting',
    description: 'Every KPI, every month, mapped directly to the projections set at kickoff.',
  },
  {
    name: 'Net-New SEO Optimization',
    description: 'Ongoing content and technical SEO that builds compounding long-term authority.',
  },
]

const faqs = [
  {
    q: 'What kind of businesses does GrowthOS work with?',
    a: 'Business owners, solopreneurs, local businesses, agencies, consultants, franchisors, and franchisees — any lean operation that wants franchise-grade marketing execution without building an in-house team. If you are running a real business and want real results tracked against real numbers, GrowthOS is built for you.',
  },
  {
    q: 'How is this different from hiring a marketing agency?',
    a: 'A typical agency pitches you a strategy, executes inconsistently, and reports on metrics that do not map to your actual business goals. GrowthOS sets your CAC and ROI targets at kickoff, executes through vetted specialist teams, and reports actual vs. projected every month. The accountability is the difference.',
  },
  {
    q: 'What does the free Gap Analysis actually include?',
    a: 'A full AI-generated audit of your current marketing position — channel gaps, competitor benchmarks, budget inefficiency, and missed opportunities ranked by revenue impact. You will also receive a 12-month execution roadmap and budget allocation model. No obligation to engage beyond that.',
  },
  {
    q: 'How do you set CAC and ROI projections?',
    a: 'We use your business inputs — current spend, average order or contract value, close rate, and market data — combined with channel benchmarks from our existing engagements. Projections are specific to your situation, not industry averages copy-pasted from a blog post.',
  },
  {
    q: 'Can I choose which services from the plan to activate?',
    a: 'Yes. The plan will recommend a full channel mix, but execution is modular. You can activate all recommended channels or start with the highest-impact ones and expand as results compound.',
  },
  {
    q: 'What does execution actually look like month to month?',
    a: 'Each active channel has a dedicated specialist team operating under the GrowthOS system. You receive a monthly report showing deliverables completed, performance against projections, and the optimization moves being made. You have one point of contact — not ten agency relationships to manage.',
  },
  {
    q: 'How long before I see results?',
    a: 'Paid channels (PPC, Meta, LSA) typically show measurable results within 30–60 days. SEO and reputation channels compound over 90–180 days. Your plan will include a realistic timeline by channel — we do not overpromise to win business.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing is scoped to your plan — specifically which channels are activated and at what spend level. Book a call and we will give you a clear, itemized number upfront. No surprises, no hidden fees.',
  },
]

export default function GrowthOSPage() {
  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 border border-white/20">
            Franchise-Grade Marketing Execution
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Introducing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
              GrowthOS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-brand-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Franchise-grade marketing discipline for your business.
          </p>
          
          <p className="text-lg text-brand-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            The plan, the execution, and the proof — all in one system.
          </p>
          
          <div className="mb-8 w-full max-w-2xl mx-auto">
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src="https://player.vimeo.com/video/1192599301?badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Growbotik site video - start now"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://app.mplannerpro.com/7270f820ae/chat?pg=3c4800524a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-gray-100 text-brand-700 font-bold px-10 py-5 rounded-lg transition-all text-lg shadow-2xl hover:shadow-xl hover:scale-105"
            >
              Get Your Free GrowthOS Plan — It&apos;s Free
            </a>
          </div>
          
          <p className="text-sm text-brand-200 mt-8">No obligation. No generic templates. Built for your business.</p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* SECTION 2 — The Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Most marketing fails before it starts.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Business owners are drowning in tactics — agencies pitching strategies, tools promising automation, gurus selling templates. None of it connects to actual revenue.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            The real problem: No one sets clear targets upfront. No one reports actual vs. projected. No one is accountable for the numbers they promised.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            GrowthOS changes that. We set your CAC and ROI targets on Day 1. Then we execute and report against them every month. That accountability is the product.
          </p>
        </div>
      </section>

      {/* SECTION 3 — How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How GrowthOS Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three phases. One accountable system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Plan It</h3>
              <p className="text-gray-600 mb-4">
                AI builds your 12-month marketing plan — channel-specific, budget-allocated, with precise CAC and ROI projections.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Full competitive analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Channel gap identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Budget allocation model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>CAC & ROI targets by channel</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Execute It</h3>
              <p className="text-gray-600 mb-4">
                Human lead specialist teams execute every channel your plan recommends — all coordinated through one system.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Vetted specialist teams per channel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Single point of contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>No subcontracting to cheapest bidder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Quality controlled by GrowthOS</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-brand-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prove It</h3>
              <p className="text-gray-600 mb-4">
                Monthly reporting against the exact projections set on Day 1. No hiding, no excuses.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Actual vs. projected CAC</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Actual vs. projected ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Channel-by-channel performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500">•</span>
                  <span>Optimization recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Testimonial */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium italic leading-relaxed mb-8">
            "I have worked with agencies that handed me a 40-page strategy deck and disappeared. GrowthOS handed me a plan with actual CAC targets, then hit every number they committed to. That accountability is why I stayed."
          </blockquote>
          <cite className="text-brand-200 not-italic">
            — Daniel R., Local Business Owner
          </cite>
        </div>
      </section>

      {/* SECTION 5 — Mid-Page CTA Banner */}
      <section className="py-16 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free GrowthOS Gap Analysis and 12-Month Marketing Plan
          </h2>
          <p className="text-brand-200 text-lg mb-8">
            No obligation. No generic output. A real AI-generated plan built for your business — including budget allocation, CAC targets, and a clear picture of what execution looks like.
          </p>
          <Link 
            href="/book-call"
            className="inline-block bg-white hover:bg-gray-100 text-brand-700 font-bold px-10 py-5 rounded-lg transition-all text-lg shadow-2xl hover:shadow-xl hover:scale-105"
          >
            Build My GrowthOS Plan — It's Free →
          </Link>
        </div>
      </section>

      {/* SECTION 6 — Services Execution Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All the execution your plan requires — under one system
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every specialty team is vetted, managed, and held accountable to your GrowthOS dashboard. We don't subcontract to whoever's cheapest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions, Clear Answers
            </h2>
            <p className="text-gray-600">
              We don't do vague. If you have a question not listed here, ask it on the call.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.q}</span>
                  <span className="text-brand-600 text-2xl flex-shrink-0 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Final CTA */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Run Your Marketing Like a Franchise?
          </h2>
          <p className="text-brand-200 text-lg mb-10">
            Get your free AI-generated gap analysis, 12-month plan, and budget model. No obligation. No templates. Built for your business.
          </p>
          <Link 
            href="/book-call"
            className="inline-block bg-white hover:bg-gray-100 text-brand-700 font-bold px-10 py-5 rounded-lg transition-all text-lg shadow-2xl hover:shadow-xl hover:scale-105"
          >
            Get My Free GrowthOS Analysis →
          </Link>
        </div>
      </section>
    </>
  )
}
