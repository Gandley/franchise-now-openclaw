import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Franchise Now | AI Automation Agency',
  description: 'Franchise Now is an AI automation agency that builds and manages custom systems for digital business owners. Here\'s who we are and why we built this.',
}

export default function AboutPage() {
  return (
    <>
      {/* HERO - Full Bleed */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            Our Story
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            We Got Tired of Watching Business Owners Pay for Tools That Never Got Turned On.
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 leading-relaxed max-w-2xl mx-auto">
            So we built an agency that does it for them.
          </p>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52.5C840 55 960 60 1080 62.5C1200 65 1320 65 1380 65L1440 65V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* STORY - Compact Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">Most digital business owners we talk to have the same story.</p>
            
            <p>They&apos;ve tried the tools. They&apos;ve signed up for the platforms. They&apos;ve watched the YouTube tutorials and maybe hired someone to &ldquo;set it up.&rdquo; And three months later, nothing&apos;s working — or worse, it&apos;s working just enough to be confusing.</p>
            
            <p>Meanwhile, AI is moving fast. The business owners who figure out how to use automation effectively are pulling ahead of everyone who hasn&apos;t.</p>
            
            <p>We started Franchise Now because we saw a gap: there are plenty of people selling AI tools and plenty of people teaching AI concepts — but almost no one actually building and running the systems for business owners who don&apos;t have time to do it themselves.</p>
            
            <div className="bg-brand-50 border-l-4 border-brand-500 p-6 my-8 rounded-r-lg">
              <p className="font-bold text-brand-900 text-lg mb-2">That&apos;s our lane.</p>
              <p className="text-brand-700">We&apos;re not theorists. We&apos;re not course sellers. We&apos;re operators. We build systems, we install them, and we run them.</p>
            </div>
            
            <p>The measure of our success is simple: are our clients getting more booked calls, converting more leads, and spending less time on manual work?</p>
            
            <p className="font-bold text-gray-900 text-xl">If yes — we&apos;re doing our job.</p>
          </div>
        </div>
      </section>

      {/* MISSION - Compact */}
      <section className="py-12 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-brand-200 text-sm font-semibold uppercase tracking-wide mb-3">Our Mission</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Make AI automation practical and profitable for digital business owners.</h2>
          <p className="text-brand-100 text-lg">Not hype. Not theory. Real systems that produce measurable outcomes in real businesses.</p>
        </div>
      </section>

      {/* HOW WE OPERATE - Cards with Icons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Operate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Four principles that guide everything we build.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                icon: '🎯',
                title: 'We start with strategy, not tools.', 
                desc: 'Before we touch a single platform, we map your lead flow, find the gaps, and design a system that actually fits your business.' 
              },
              { 
                icon: '⚡',
                title: 'We build for results, not complexity.', 
                desc: "The best automation system is the one that works reliably and produces measurable outcomes. We don't build impressive-looking tech for its own sake." 
              },
              { 
                icon: '🤝',
                title: "We manage it so you don't have to.", 
                desc: "Our job isn't to hand you a system and leave. We run it, monitor it, and optimize it over time." 
              },
              { 
                icon: '💬',
                title: 'We tell you the truth.', 
                desc: "If automation isn't the right next step for your business right now, we'll say that. We only take on clients where we're confident we can deliver." 
              },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full Bleed */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to see what we&apos;d build for your business?</h2>
          <p className="text-brand-200 mb-8">No obligation. Just a clear picture of what&apos;s possible and what it would take.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-call" className="inline-block bg-white hover:bg-gray-100 text-brand-700 font-bold px-8 py-4 rounded-lg transition-all hover:scale-105">
              Book a Free Strategy Session
            </Link>
            <Link href="/get-access" className="inline-block bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all border-2 border-white/30 hover:border-white/50">
              Start With Free Course
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
