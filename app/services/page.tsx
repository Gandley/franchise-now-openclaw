import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Build | AI Workforce Installation | Franchise Now',
  description: 'We install AI operators that grow revenue, support customers, and run operations — trained agents that work 24/7 inside the tools you already use.',
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
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-brand-100 text-brand-900 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Implementation Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We Install AI Operators That Do Real Work
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Trained AI operators that grow revenue, support customers, and run operations — customized to work inside the software your business already uses.
          </p>
          <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
            Built and deployed using <strong>OpenClaw</strong>, the AI platform that makes AI operators actually work inside your existing tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/noah-franchisenow/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Book a Consultation
            </a>
            <Link 
              href="/get-access"
              className="btn-secondary text-lg"
            >
              Start With the Free Course
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">You're doing work that should be handled by operators.</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>Most businesses are still running on manual processes — following up with leads, answering the same questions, routing tasks between team members, updating records.</p>
            <p>AI tools have promised to help, but most of them just give advice. They don't actually <em>do</em> the work.</p>
            <p>Meanwhile:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Leads come in and don't get followed up with fast enough",
                "Customer questions pile up while you're focused elsewhere",
                "Internal coordination takes hours that should take minutes",
                "You're hiring people to do work that software could handle",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-gray-900 text-xl pt-2">You don't need more headcount. You need AI operators.</p>
          </div>
        </div>
      </section>

      {/* WHAT IS OPENCLAW */}
      <section className="py-16 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is OpenClaw?</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p><strong>OpenClaw</strong> is the AI platform we use to build, train, and deploy AI operators inside your business.</p>
            <p>Think of it as the engine under the hood — the tool that makes AI operators actually work inside the software you already use. Instead of adding another tool to your stack, OpenClaw connects to your existing systems and creates trained agents that take action.</p>
            <p>We don't just set up software. We configure, train, and manage AI operators that understand your business context and can be directed to improve over time.</p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS - WHAT WE BUILD */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Build</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              AI operators across three core business functions — each customized to your specific workflows and tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GROW */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth Operators</h3>
              <p className="text-gray-600 mb-4">AI operators that find, qualify, and convert opportunities into revenue.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Lead response & qualification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Follow-up sequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Reactivation campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Appointment booking</span>
                </li>
              </ul>
            </div>

            {/* SERVE */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Success Operators</h3>
              <p className="text-gray-600 mb-4">AI operators that onboard, support, and retain your customers.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Client onboarding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Customer success check-ins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>FAQs & support triage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Retention communication</span>
                </li>
              </ul>
            </div>

            {/* OPERATE */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operations Operators</h3>
              <p className="text-gray-600 mb-4">AI operators that run internal workflows and coordinate your back office.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Internal task routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Status updates & reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Back-office coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Execution assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">How We Work Together</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Blueprint',
                desc: "We map your current workflows, identify where AI operators can take over, and design a custom deployment plan for your business.",
              },
              {
                step: '02',
                title: 'Build & Train',
                desc: 'We build your AI operators using OpenClaw, train them on your specific processes, and integrate them with your existing tools.',
              },
              {
                step: '03',
                title: 'Deploy & Optimize',
                desc: 'Your operators go live and start working. We monitor performance, make adjustments, and add new capabilities over time.',
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
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Results from real operators.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-gray-900 text-2xl mb-6">This is the right fit if...</h3>
              <ul className="space-y-3">
                {[
                  "You're an agency, consultant, coach, or service business owner",
                  "You run a lean team and need output without adding headcount",
                  "You want AI operators that take action, not just give advice",
                  "You're comfortable with technology but don't want to build it yourself",
                  "You want leverage, not complexity",
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
                  "You have no existing business or workflows to automate",
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Investment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Setup</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Operator Installation</h3>
              <div className="text-3xl font-bold text-brand-600 mb-4">Starting at $1,500</div>
              <p className="text-gray-600 mb-6 text-sm">Complete build and deployment of your first AI operator. Perfect if you want to manage ongoing optimization yourself.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-8">
                {['Discovery and workflow mapping', 'Custom operator build', 'Integration with your tools', 'Training and deployment', '30-day post-launch support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a 
                href="https://calendly.com/noah-franchisenow/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary w-full block text-center"
              >
                Book a Call
              </a>
            </div>
            <div className="bg-brand-600 text-white rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
              <div className="text-sm font-semibold text-brand-200 uppercase tracking-wide mb-2">Setup + Management</div>
              <h3 className="text-2xl font-bold mb-1">Full Service</h3>
              <div className="text-3xl font-bold mb-1">$1,500 setup</div>
              <div className="text-xl font-semibold text-brand-200 mb-4">+ $1,500/month</div>
              <p className="text-brand-100 mb-6 text-sm">Your AI workforce, built and managed. We handle training, optimization, and expansion so you can stay focused on your business.</p>
              <ul className="space-y-2 text-sm text-brand-100 mb-8">
                {['Everything in Setup', 'Monthly performance reviews', 'Ongoing operator training', 'New operators as you grow', 'Priority support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-yellow-300">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a 
                href="https://calendly.com/noah-franchisenow/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-white text-brand-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Not sure which is right? Book a consultation and we'll tell you exactly what your business needs.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What exactly is an AI operator?", a: "An AI operator is a trained AI system that takes action inside your business — not just giving advice, but actually doing work. It can send messages, update records, route tasks, and follow workflows you define. Think of it as a digital team member that works 24/7." },
              { q: "How is this different from chatbots or automation tools?", a: "Most tools give you building blocks. We give you trained operators that are ready to work. We don't just set up software — we configure, train, and manage AI agents that understand your business context and can be directed to improve over time." },
              { q: "Do I need technical experience?", a: "None. We handle the build, training, and deployment. You describe what you need done, and we create the operator to do it. You direct it, we maintain it." },
              { q: "How long does it take to get an operator running?", a: "Most operators are live within 2–3 weeks of our strategy session. Complex multi-step workflows may take longer, but we'll give you a clear timeline upfront." },
              { q: "What tools do you integrate with?", a: "We use OpenClaw to connect with your existing tech stack — CRMs, email platforms, calendars, project management tools, and more. We work inside the tools you already use." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to install your first AI operator?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Book a 15-minute consultation. We'll map out exactly what an AI workforce could look like in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/noah-franchisenow/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Book a 15-Minute Consultation
            </a>
            <Link 
              href="/get-access"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Not Ready? Start With the Free Course
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">We take on a limited number of new clients per month to maintain quality.</p>
        </div>
      </section>
    </>
  )
}
