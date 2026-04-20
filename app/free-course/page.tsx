import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free AI Operator Course | Franchise Now',
  description: 'Your first hands-on introduction to becoming an AI Operator using OpenClaw. 3 video modules, 5 templates, learn to make your first $1,000 with AI automation.',
}

export default function FreeCoursePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-b from-brand-600 to-brand-700 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Free Training
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The AI Operator Course
          </h1>
          <p className="text-xl text-brand-100 mb-6 max-w-3xl mx-auto leading-relaxed">
            Your first hands-on introduction to becoming an AI Operator using OpenClaw.
          </p>
          <p className="text-brand-200 mb-10 max-w-2xl mx-auto">
            Learn how to build AI-powered offers, install internal business agents, and direct AI operators in a real business context.
          </p>
          <a 
            href="https://checkout.thrivecart.com/franchise-now-ai-operator-course/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            Start Free With the Course
          </a>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What You Get</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Everything you need to understand, build, and deploy your first AI operator.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">3 Video Modules</h3>
              <p className="text-gray-600 text-sm">26.5 minutes of focused, actionable training</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">5 PDF Templates</h3>
              <p className="text-gray-600 text-sm">Ready-to-use frameworks and worksheets</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">First $1,000 Framework</h3>
              <p className="text-gray-600 text-sm">Learn how to make your first $1K with AI automation</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">OpenClaw Introduction</h3>
              <p className="text-gray-600 text-sm">Learn to operate and direct AI agents</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS OPENCLAW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-8">What is OpenClaw?</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <strong>OpenClaw</strong> is the AI platform we use to build, train, and deploy AI operators inside your business.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Think of it as the engine under the hood — the tool that makes AI operators actually work inside the software you already use. Instead of switching between dozens of AI tools, OpenClaw lets you create trained agents that take action across your entire tech stack.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In this course, you'll get hands-on experience with OpenClaw and learn how to direct AI operators to do real work in a business context.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-8">Who This Course Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "You want to build AI-powered offers or digital products",
              "You want to install internal business agents",
              "You want to improve customer success, growth, and follow-up",
              "You want to learn how to direct AI operators in a real business context",
              "You're a consultant, coach, or agency owner looking to add AI services",
              "You're a founder who wants leverage without adding headcount",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                <span className="text-brand-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE MODULES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Course Modules</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">The AI Operator Mindset</h3>
              </div>
              <p className="text-gray-600 ml-14">
                Understanding the shift from AI tools that advise to AI operators that take action. The framework for thinking about AI as a workforce, not just software.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Building Your First Operator</h3>
              </div>
              <p className="text-gray-600 ml-14">
                Hands-on walkthrough of creating a simple AI operator using OpenClaw. From concept to deployment in under 30 minutes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center">
                  <span className="text-brand-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Making Your First $1,000</h3>
              </div>
              <p className="text-gray-600 ml-14">
                The business model: how to package and sell AI operator services. Real examples, pricing frameworks, and the path from learning to earning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING MESSAGE */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn the model. Then decide.
          </h2>
          <p className="text-brand-100 text-lg mb-8 leading-relaxed">
            Whether you want to build it yourself, do it with guidance, or have us help install it for you — this course gives you the foundation to make that decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://checkout.thrivecart.com/franchise-now-ai-operator-course/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Get the Free Course
            </a>
            <Link 
              href="/community" 
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Want Us to Build It For You?</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            If you'd rather skip the learning curve and have us install your AI workforce directly, book a consultation. We'll map out exactly what operators would work best for your business.
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
          </div>
        </div>
      </section>
    </>
  )
}
