import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Franchise Now',
  description: 'Meet the team behind Franchise Now. Rob and Noah Gandley help business owners install AI systems that generate leads and automate operations.',
}

export default function AboutPage() {
  return (
    <>
      {/* HERO - Full Bleed */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-6 border border-white/20">
            Meet The Team
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            The Team Behind Your AI Workforce
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 leading-relaxed max-w-2xl mx-auto">
            We build and manage the AI systems that generate leads, book calls, and run operations—so you don't have to.
          </p>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52.5C840 55 960 60 1080 62.5C1200 65 1320 65 1380 65L1440 65V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Rob Gandley */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-2">Founder & AI Consultant</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Rob Gandley</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At the forefront of franchise marketing, Rob Gandley has blazed a trail for brands looking to 
                    grow and innovate in an ever-evolving landscape. With over three decades of business 
                    development, marketing and technology experience, he combines a deep understanding of 
                    marketing with cutting-edge AI insights, providing franchise clients with a unique advantage in 
                    the market.
                  </p>
                  <p>
                    Since the early days of the internet revolution, Rob has been a pioneer in digital 
                    marketing, creating one of the first Google-centric automated franchise lead generation 
                    agencies. His focus on AI-powered solutions allows franchisors to reach new audiences, drive 
                    organic growth, and stay ahead of the competition by leveraging automation and data-driven 
                    strategies.
                  </p>
                  <p>
                    Rob&apos;s passion for franchise success is clear in every aspect of his work. Whether he&apos;s 
                    consulting for a leading franchise brand or interviewing industry leaders on his podcast, 
                    <em> Franchise Marketing Radio</em>, his commitment to sharing insights is unwavering. Rob&apos;s thought 
                    leadership extends to publications like <em>Entrepreneur Magazine</em>, where his expertise is 
                    featured in the latest edition of the <em>Franchise Bible</em>.
                  </p>
                  <p>
                    An avid outdoorsman, Rob&apos;s approach to franchise growth mirrors the lessons he&apos;s learned 
                    from nature: innovate, adapt, and push beyond limits. Much like summiting a mountain, his 
                    strategic mindset helps clients navigate challenges, seize opportunities, and reach new 
                    heights in their business ventures.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/rob-gandley.jpg" 
                    alt="Rob Gandley - Founder & AI Consultant"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-16"></div>

          {/* Noah Gandley */}
          <div>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/noah-gandley.jpg" 
                    alt="Noah Gandley - Growth & AI Strategy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-2">AI Operations & Implementation</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Noah Gandley</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At Franchise Now, Noah Gandley works at the intersection of AI strategy, media, and 
                    franchise development — helping emerging franchise brands build smarter systems and 
                    create more qualified growth opportunities. His work spans the company&apos;s podcast, 
                    newsletter, webinars, AI opportunity assessments, and client engagement, with a hands-on 
                    role in connecting franchise leaders to the automation and messaging strategies that actually 
                    move the needle.
                  </p>
                  <p>
                    Noah brings a practical, results-oriented approach to AI. After completing immersive AI 
                    training in 2022 and 2023, he began applying automation platforms and AI tools to real 
                    business challenges: simplifying operations, improving lead response, and helping franchise 
                    teams think differently about scale. His strength is translating technology into clear, actionable 
                    strategies that business owners can implement without a technical background.
                  </p>
                  <p>
                    As the son of founder Rob Gandley, Noah grew up around franchise marketing and 
                    entrepreneurship. Today he helps carry that mission forward — supporting the systems, 
                    content, and relationships that connect Franchise Now with brands looking for smarter ways 
                    to grow. His background building AI-powered marketing and automation workflows gives him 
                    a unique ability to bridge strategy and execution in ways that create tangible results for clients.
                  </p>
                  <p>
                    Outside of work, Noah is a former NCAA Division II athlete. That background shaped his 
                    approach to business: disciplined, consistent, and focused on long-term improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION - Compact */}
      <section className="py-16 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-brand-200 text-sm font-semibold uppercase tracking-wide mb-3">Our Mission</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Make AI automation practical and profitable for business owners.</h2>
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
