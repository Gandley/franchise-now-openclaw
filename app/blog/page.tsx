import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from './lib/posts'

export const metadata: Metadata = {
  title: 'Blog | Franchise Now',
  description: 'Insights on AI workforce, automation, and building lean businesses with AI operators.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-brand-100 text-brand-900 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Insights & Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Franchise Now Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Practical insights on AI workforce, automation, and building lean businesses with AI operators.
          </p>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
              <p className="text-gray-600">Our first articles are in the pipeline. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {post.image && (
                    <div className="aspect-video bg-gray-200 relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{post.publishedAt}</span>
                      {post.pillar && (
                        <>
                          <span>•</span>
                          <span className="text-brand-600 font-medium">{post.pillar}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-brand-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to implement what you&apos;re reading about?
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            Book a free strategy session and we&apos;ll map out exactly how AI operators could work in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book-call"
              className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Book a Free Strategy Session
            </Link>
            <Link 
              href="/get-access"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Start With the Free Course
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
