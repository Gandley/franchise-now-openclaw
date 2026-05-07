import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investment | Franchise Now',
  description: 'Franchise-grade AI operator systems for your business. Three tiers designed for different stages of AI deployment.',
}

const services = [
  {
    name: 'High-Conversion Web Design',
    description: 'Landing pages and site updates built to convert, not just look good.',
  },
  {
    name: 'Authority SEO & AEO',
    description: 'Rank in traditional search and AI-generated answers.',
  },
  {
    name: 'Google Business Profile Optimization',
    description: 'Own your local presence. Show up first when intent is highest.',
  },
  {
    name: 'Google Pay-Per-Click (PPC)',
    description: 'Precision paid search campaigns managed against your CAC targets.',
  },
  {
    name: 'Google Local Service Ads (LSA)',
    description: 'Pay only for verified leads in your service area.',
  },
  {
    name: 'Precision Facebook & Meta Ads',
    description: 'Audience-first paid social with full-funnel tracking.',
  },
  {
    name: 'Automated Review Generation',
    description: 'Build review velocity that compounds your reputation.',
  },
  {
    name: 'Podcast & Authority Boosts',
    description: 'Position you as the trusted expert in your market.',
  },
  {
    name: 'Goal Tracking & Reporting',
    description: 'Every KPI mapped directly to projections.',
  },
  {
    name: 'Net-New SEO Optimization',
    description: 'Compounding long-term authority.',
  },
]

export default function InvestmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Investment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three tiers designed for different stages of AI operator deployment. 
            All include our core 14 skills.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CLAW LAUNCH */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Entry</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Claw Launch</h2>
              <div className="text-3xl font-bold text-brand-600 mb-1">$497</div>
              <div className="text-sm text-gray-500 mb-4">One-time setup • $0/month</div>
              <p className="text-gray-600 mb-4 text-sm">Get started with your first AI operator. Perfect for testing the waters.</p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> AI Agent Setup (14 Skills)</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> ClawLauncher Hosting & Security</li>
                <li className="flex items-center gap-2 text-gray-400"><span className="text-gray-300">✗</span> Monthly Resources</li>
                <li className="flex items-center gap-2 text-gray-400"><span className="text-gray-300">✗</span> Email Support</li>
                <li className="flex items-center gap-2 text-gray-400"><span className="text-gray-300">✗</span> Weekly Group Call</li>
                <li className="flex items-center gap-2 text-gray-400"><span className="text-gray-300">✗</span> Private 1-on-1 Call</li>
                <li className="flex items-center gap-2 text-gray-400"><span className="text-gray-300">✗</span> Advanced Training</li>
              </ul>
              <a 
                href="https://buy.stripe.com/7sYaEY18ygqU8y10h54gg01"
                className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold px-6 py-3 rounded-lg transition-colors text-center w-full"
              >
                Get Started
              </a>
            </div>

            {/* CLAW SCALE */}
            <div className="bg-brand-600 text-white rounded-xl p-6 shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
              <div className="text-sm font-semibold text-brand-200 uppercase tracking-wide mb-2">Growth</div>
              <h2 className="text-2xl font-bold mb-1">Claw Scale</h2>
              <div className="text-3xl font-bold mb-1">$497</div>
              <div className="text-sm text-brand-200 mb-4">Setup + $297/month</div>
              <p className="text-brand-100 mb-4 text-sm">Scale your AI workforce with ongoing support and resources.</p>
              <ul className="space-y-2 text-sm text-brand-100 mb-6">
                <li className="flex items-center gap-2"><span className="text-yellow-300">✓</span> AI Agent Setup (14 Skills)</li>
                <li className="flex items-center gap-2"><span className="text-yellow-300">✓</span> ClawLauncher Hosting & Security</li>
                <li className="flex items-center gap-2"><span className="text-yellow-300">✓</span> Monthly Resources</li>
                <li className="flex items-center gap-2"><span className="text-yellow-300">✓</span> Email Support</li>
                <li className="flex items-center gap-2"><span className="text-yellow-300">✓</span> Weekly Group Call</li>
                <li className="flex items-center gap-2 text-brand-300"><span className="text-brand-400">✗</span> Private 1-on-1 Call</li>
                <li className="flex items-center gap-2 text-brand-300"><span className="text-brand-400">✗</span> Advanced Training</li>
              </ul>
              <a 
                href="/book-call"
                className="inline-block bg-white hover:bg-gray-100 text-brand-700 font-bold px-6 py-3 rounded-lg transition-colors text-center w-full"
              >
                Book a Call
              </a>
            </div>

            {/* CLAW DOMINANCE */}
            <div className="bg-gray-900 text-white rounded-xl p-6 shadow-lg">
              <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Enterprise</div>
              <h2 className="text-2xl font-bold mb-1">Claw Dominance</h2>
              <div className="text-3xl font-bold text-yellow-400 mb-1">$997</div>
              <div className="text-sm text-gray-400 mb-4">Setup + $797/month</div>
              <p className="text-gray-300 mb-4 text-sm">Full AI workforce deployment with private coaching.</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> AI Agent Setup (14 Skills)</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> ClawLauncher Hosting & Security</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Monthly Resources</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Email Support</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Weekly Group Call</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Private 1-on-1 Call</li>
                <li className="flex items-center gap-2"><span className="text-yellow-400">✓</span> Advanced Training</li>
              </ul>
              <a 
                href="/book-call"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors text-center w-full"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 14 CORE SKILLS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">All Tiers Include 14 Core Skills</h2>
          <p className="text-center text-gray-600 mb-8">Built on proven business builder framework</p>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Inbox Copywriter',
                'Sales Page Skill',
                'Video Sales Letter',
                'Hero Section Generator',
                'Master Copywriter',
                'ZipSkills v2.0',
                'Skills Creator v2.0',
                'Cron Scheduler',
                'Dream Life Goal',
                'Memory Bank',
                'Create Business v2.0.1',
                'Github Vercel Deployment',
                'Project Setup',
                'Stripe Setup'
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-brand-500">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Choose your tier above or book a call to discuss which option is right for your business.</p>
          <Link 
            href="/"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </section>
    </>
  )
}
