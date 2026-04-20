import Link from 'next/link'
import TestimonialCard from '@/components/TestimonialCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Now | AI Workforce for Lean Businesses',
  description: 'Install your first AI workforce — trained AI operators that grow revenue, support customers, and run work 24/7 without adding headcount.',
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

const operatorExamples = [
  {
    name: 'Growth Operator',
    description: 'Captures leads from any source, qualifies them through conversation, and books qualified prospects directly on your calendar. Works 24/7 across forms, ads, and inbound channels.',
  },
  {
    name: 'Customer Success Operator',
    description: 'Onboards new clients, answers common questions, sends reminders, and escalates complex issues to you. Keeps customers engaged without your constant involvement.',
  },
  {
    name: 'Operations Operator',
    description: 'Routes tasks between team members, updates project statuses, generates reports, and coordinates back-office workflows. Your internal coordination layer.',
  },
  {
    name: 'Content & Audience Operator',
    description: 'Repurposes content across platforms, schedules posts, engages with comments, and tracks performance metrics. Maintains your presence while you focus on creation.',
  },
]

const faqs = [
  {
    q: 'What exactly is an AI operator?',
    a: 'An AI operator is a trained AI system that takes action inside your business — not just giving advice, but actually doing work. It can send messages, update records, route tasks, and follow workflows you define. Think of it as a digital team member that works 24/7.',
  },
  {
    q: 'Do I need technical experience?',
    a: 'None. We handle the build, training, and deployment. You describe what you need done, and we create the operator to do it. You direct it, we maintain it.',
  },
  {
    q: 'How is this different from chatbots or automation tools?',
    a: 'Most tools give you building blocks. We give you trained operators that are ready to work. We don\'t just set up software — we configure, train, and manage AI agents that understand your business context and can be directed to improve over time.',
  },
  {
    q: 'What kind of businesses do you work with?',
    a: 'Agencies, consultants, coaches, advisors, service businesses, and lean teams of all types. If you run a small team and need output without adding headcount, AI operators can help.',
  },
  {
    q: 'How long does it take to get an operator running?',
    a: 'Most operators are live within 2–3 weeks of our strategy session. Complex multi-step workflows may take longer, but we\'ll give you a clear timeline upfront.',
  },
  {
    q: 'What does it cost?',
    a: 'Starting at $1,500 setup + $1,500/month management per operator. Book a consultation and we\'ll give you a clear number based on your specific needs.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO - Dual Path */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-brand-100 text-brand-900 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            AI Workforce for Lean Businesses
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Install Your First AI Workforce
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Franchise Now helps lean businesses deploy trained AI operators that grow revenue, support customers, and run work 24/7 without adding headcount.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://checkout.thrivecart.com/franchise-now-ai-operator-course/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Start Free With the AI Operator Course
            </a>
            <a 
              href="https://calendly.com/noah-franchisenow/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg"
            >
              Book a 15-Minute Consultation
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-6">We teach it. We build it. We use it ourselves.</p>
        </div>
      </section>

      {/* CATEGORY INTRO - The Shift */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            AI is no longer just a tool that gives you advice.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            A new class of AI — <strong>operators</strong> — can now take action, follow instructions, and do real work inside the software your business already runs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We build and deploy these operators using <strong>OpenClaw</strong>, the AI platform that makes AI operators actually work inside the tools you already use.
          </p>
        </div>
      </section>

      {/* THREE PILLARS - Grow / Serve / Operate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">AI operators for every part of your business</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Trained agents that work across growth, service, and operations — customized to run inside the tools you already use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GROW */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Grow</h3>
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
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Serve</h3>
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
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operate</h3>
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

      {/* COURSE & COMMUNITY SECTION */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Learning to Think Like an AI Operator
              </h2>
              <p className="text-brand-100 text-lg mb-6">
                Your first hands-on introduction to becoming an AI Operator using OpenClaw.
              </p>
              <ul className="space-y-3 text-brand-100 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>3 video modules — 26.5 minutes total</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>5 PDF templates included</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>Learn to make your first $1,000 with AI Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>Introduction to operating and directing AI agents</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://checkout.thrivecart.com/franchise-now-ai-operator-course/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Get the Free Course
                </a>
                <Link 
                  href="/community" 
                  className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Join the Community
                </Link>
              </div>
            </div>
            <div className="bg-brand-700 rounded-xl p-6">
              <p className="text-lg italic text-brand-100 leading-relaxed">
                "Learn the model. Then decide whether you want to build it yourself, do it with guidance, or have us help install it for you."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / IMPLEMENTATION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Want Us to Help You Install It?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            If you already know what you want, skip the learning curve. Book a 15-minute consultation and we'll walk you through what an AI workforce could look like in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/noah-franchisenow/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Book a 15-Minute Consultation
            </a>
            <a 
              href="https://checkout.thrivecart.com/franchise-now-ai-operator-course/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg"
            >
              Not Ready? Start With the Free Course
            </a>
          </div>
        </div>
      </section>

      {/* OPERATOR EXAMPLES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Meet Your Potential AI Operators</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              These are not theoretical. These are real operator types we build and deploy for businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operatorExamples.map((op, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{op.name}</h3>
                <p className="text-gray-600 leading-relaxed">{op.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FRANCHISE NOW */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Why Franchise Now?</h2>
          <div className="text-left mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We teach this</h3>
                <p className="text-gray-600">We created the AI Operator Course because we believe in education first. Understand what you're building before you build it.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We build this</h3>
                <p className="text-gray-600">We're not just consultants — we're implementers. We install, configure, and manage the operators we deploy.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We use these ideas ourselves</h3>
                <p className="text-gray-600">Everything we recommend, we do ourselves. We run our business on the same operators we build for clients.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-brand-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We help businesses evolve</h3>
                <p className="text-gray-600">Our goal isn't to sell you software. It's to help you become an AI-enabled organization with operators that compound over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Results from real operators, not theory.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
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

      {/* FINAL CTA - Dual Path */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your business shouldn't depend on you being available 24/7.
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Install AI operators that work while you focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://checkout.thrivecart.com/franchise-now-ai-operator-course/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Start Free With the Course
            </a>
            <a 
              href="https://calendly.com/noah-franchisenow/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Talk to Us About Implementation
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">We take on a limited number of new clients per month to maintain quality.</p>
        </div>
      </section>
    </>
  )
}
