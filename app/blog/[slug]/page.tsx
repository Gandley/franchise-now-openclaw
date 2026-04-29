import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BLOG_REVALIDATE_SECONDS, getPostBySlug, getAllPosts } from '../lib/posts'

export const revalidate = BLOG_REVALIDATE_SECONDS

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Franchise Now',
    }
  }

  return {
    title: `${post.title} | Franchise Now Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = (await getAllPosts())
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      {/* ARTICLE HEADER */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link 
              href="/blog"
              className="text-brand-600 hover:text-brand-700 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>{post.publishedAt}</span>
            {post.pillar && (
              <>
                <span>•</span>
                <span className="text-brand-600 font-medium">{post.pillar}</span>
              </>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
          
          {post.image && (
            <div className="mt-8 aspect-video bg-gray-200 rounded-xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="prose prose-lg prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* TAGS */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {post.primaryCtaCopy || "Ready to implement this in your business?"}
            </h2>
            <p className="text-brand-100 mb-8">
              {post.secondaryCtaCopy || "Book a free strategy session and we'll map out exactly how AI operators could work for you."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/book-call"
                className="inline-block bg-white text-brand-700 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Book a Free Strategy Session
              </Link>
              <a
                href="https://franchisenow.media"
                target="_blank"
                rel="noreferrer"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Read the Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{relatedPost.publishedAt}</span>
                    {relatedPost.pillar && (
                      <>
                        <span>•</span>
                        <span className="text-brand-600 font-medium">{relatedPost.pillar}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${relatedPost.slug}`} className="hover:text-brand-600 transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
