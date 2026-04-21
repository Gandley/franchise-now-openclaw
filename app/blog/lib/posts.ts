import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'app/blog/posts')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  pillar?: string
  tags?: string[]
  image?: string
  primaryCtaCopy?: string
  secondaryCtaCopy?: string
}

export function getAllPosts(): BlogPost[] {
  // Check if posts directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title,
        excerpt: matterResult.data.excerpt,
        content: matterResult.content,
        publishedAt: matterResult.data.publishedAt,
        pillar: matterResult.data.pillar,
        tags: matterResult.data.tags,
        image: matterResult.data.image,
        primaryCtaCopy: matterResult.data.primaryCtaCopy,
        secondaryCtaCopy: matterResult.data.secondaryCtaCopy,
      } as BlogPost
    })

  // Sort by date, newest first
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    slug,
    title: matterResult.data.title,
    excerpt: matterResult.data.excerpt,
    content: matterResult.content,
    publishedAt: matterResult.data.publishedAt,
    pillar: matterResult.data.pillar,
    tags: matterResult.data.tags,
    image: matterResult.data.image,
    primaryCtaCopy: matterResult.data.primaryCtaCopy,
    secondaryCtaCopy: matterResult.data.secondaryCtaCopy,
  } as BlogPost
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
