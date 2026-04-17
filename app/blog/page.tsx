import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | AI Automation for Digital Business Owners | Franchise Now',
  description: 'Practical guides on AI automation, lead generation, appointment booking, and building systems that grow your digital business.',
}

const categories = ['All', 'AI Automation', 'Lead Generation', 'Appointment Booking', 'Digital Business Systems', 'AI Offers']

const posts = [
  {
    category: 'Lead Generation',
    title: "Why Your Leads Are Going Cold (And How Automation Fixes It)",
    excerpt: "Discover why most digital business owners lose leads after initial contact — and how AI automation creates a follow-up system that converts more inquiries into booked calls.",
    date: 'April 15, 2026',
    readTime: '6 min read',
    slug: 'why-leads-go-cold',
  },
  {
    category: 'AI Automation',
    title: "What Is AI Automation and Why Every Digital Business Owner Needs It Now",
    excerpt: "AI automation isn't a buzzword anymore — it's the difference between a business that scales and one that stalls. Here's what it actually means in practice.",
    date: 'April 12, 2026',
    readTime: '8 min read',
    slug: 'what-is-ai-automation',
  },
  {
    category: 'Appointment Booking',
    title: "Why Your Booking Rate Is Low (It's Not Your Offer)",
    excerpt: "If people are showing interest but not booking — the problem usually isn't your price or your pitch. It's your system. Here's what to fix.",
    date: 'April 10, 2026',
    readTime: '5 min read',
    slug: 'booking-rate-low',
  },
  {
    category: 'AI Automation',
    title: "5 Things You Can Automate in Your Business This Week (Without Touching Code)",
    excerpt: "No coding, no complicated setup. These 5 automation wins are available to any digital business owner right now.",
    date: 'April 8, 2026',
    readTime: '7 min read',
    slug: 'five-things-to-automate',
  },
  {
    category: 'AI Offers',
    title: "How to Build an AI-Powered Offer (Even If You're Not Technical)",
    excerpt: "AI isn't just a productivity tool — it's a product opportunity. Here's a framework for turning AI into something you can sell.",
    date: 'April 5, 2026',
    readTime: '9 min read',
    slug: 'build-ai-powered-offer',
  },
  {
    category: 'Digital Business Systems',
    title: "How to Scale Your Service Business Without Hiring More People",
    excerpt: "Headcount isn't the only path to scale. Here's how smart operators use systems and automation to grow without growing their team.",
    date: 'April 2, 2026',
    readTime: '7 min read',
    slug: 'scale-without-hiring',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI Automation for Digital Business Owners</h1>
          <p className="text-xl text-gray-600 mb-8">Practical guides on automation, lead generation, and building systems that actually work.</p>
          <Link href="/free-guide" className="btn-primary">Get the Free AI Automation Playbook →</Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white border-b border-gray-200 py-4 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <button key={i} className={`whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full transition-colors ${i === 0 ? 'bg-brand-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">{posts[0].category} · Featured</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              <Link href={`/blog/${posts[0].slug}`} className="hover:text-brand-600 transition-colors">{posts[0].title}</Link>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">{posts[0].excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{posts[0].date}</span>
              <span>·</span>
              <span>{posts[0].readTime}</span>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">{post.category}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand-600 transition-colors">{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-brand-600 text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-3">Want the full playbook?</h2>
          <p className="text-brand-100 mb-6">Get the free AI Automation Playbook and put all of this into action.</p>
          <Link href="/free-guide" className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors">
            Download Free →
          </Link>
        </div>
      </section>
    </>
  )
}
