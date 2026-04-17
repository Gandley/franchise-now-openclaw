import Link from 'next/link'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-3">AI Automation</div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Blog Post Title Goes Here — {params.slug}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span>Franchise Now Team</span>
              <span>·</span>
              <span>April 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
            {/* Featured image placeholder */}
            <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mb-8">
              [Featured Image Placeholder]
            </div>
          </div>

          {/* Body */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            <p>This is the blog post content area. Each post follows a structured template optimized for SEO and conversion. Posts are designed to educate, build trust, and guide readers toward booking a call or downloading the free guide.</p>

            <h2 className="text-2xl font-bold text-gray-900">Section Heading (H2)</h2>
            <p>Content goes here. Posts should be 1,000–2,500 words for authority. Use clear H2 and H3 subheadings, short paragraphs, and bullet points where appropriate.</p>

            {/* MID-POST CTA BANNER */}
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 my-8">
              <div className="font-bold text-brand-700 text-lg mb-2">📘 Free Download: The AI Automation Playbook</div>
              <p className="text-brand-600 text-sm mb-4">Learn the 5 highest-ROI automation opportunities for digital business owners.</p>
              <Link href="/free-guide" className="btn-primary py-2 px-5 text-sm inline-block">Get Instant Free Access →</Link>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">Another Section (H2)</h2>
            <p>Continue with post content. Every post should end with a clear next step — either download the guide or book a call.</p>
          </div>

          {/* AUTHOR BOX */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-gray-400 text-xs">Photo</div>
              <div>
                <div className="font-bold text-gray-900">Franchise Now Team</div>
                <div className="text-sm text-gray-500 mt-1">AI automation specialists helping digital business owners build systems that generate leads, handle follow-up, and fill their calendars automatically.</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* END CTA */}
      <section className="py-16 bg-brand-900 text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-3">Want us to build this for you?</h2>
          <p className="text-gray-400 mb-6">Book a free strategy session and we&apos;ll design a custom automation system for your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="btn-primary">Book Your Free Call →</Link>
            <Link href="/free-guide" className="btn-secondary border-gray-600 text-gray-300 hover:bg-gray-800">Get the Free Guide</Link>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Why Your Leads Are Going Cold', slug: 'why-leads-go-cold', cat: 'Lead Generation' },
              { title: 'What Is AI Automation', slug: 'what-is-ai-automation', cat: 'AI Automation' },
              { title: '5 Things You Can Automate This Week', slug: 'five-things-to-automate', cat: 'AI Automation' },
            ].map((p, i) => (
              <Link key={i} href={`/blog/${p.slug}`} className="block border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">{p.cat}</div>
                <div className="font-bold text-gray-900">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
