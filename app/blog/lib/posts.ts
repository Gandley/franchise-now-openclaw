const LETTERMAN_BASE_URL = 'https://api.letterman.ai/api/ai'
export const BLOG_REVALIDATE_SECONDS = 60 * 60

interface LettermanArticle {
  _id: string
  title?: string
  description?: string
  summary?: {
    title?: string
    description?: string
    imageUrl?: string
    content?: string
  }
  urlPath?: string
  previewImageUrl?: string
  archiveThumbnailImageUrl?: string
  imageUrl?: string
  keywords?: string[]
  createdAt?: string
  updatedAt?: string
}

interface LettermanSection {
  _id: string
  type?: string
  index?: number
  title?: string
  promptOutPut?: string
  imageUrl?: string
  includeImage?: boolean
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  publishedAtIso: string
  pillar?: string
  tags?: string[]
  image?: string
  primaryCtaCopy?: string
  secondaryCtaCopy?: string
}

function getLettermanApiKey(): string | null {
  return process.env.LETTERMAN_API_KEY || null
}

function getLettermanStorageId(): string | null {
  return process.env.LETTERMAN_STORAGE_ID || null
}

async function fetchLetterman<T>(pathname: string): Promise<T> {
  const apiKey = getLettermanApiKey()

  if (!apiKey) {
    throw new Error('Missing LETTERMAN_API_KEY')
  }

  const response = await fetch(`${LETTERMAN_BASE_URL}${pathname}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    next: {
      revalidate: BLOG_REVALIDATE_SECONDS,
    },
  })

  if (!response.ok) {
    throw new Error(`Letterman request failed: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

function formatDate(dateString?: string): string {
  if (!dateString) return 'Recently'

  const date = new Date(dateString)

  if (Number.isNaN(date.getTime())) {
    return 'Recently'
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function normalizeSlug(article: LettermanArticle): string {
  const source = article.urlPath || article.title || article._id
  const normalized = slugify(source)
  return normalized || article._id
}

function stripHtml(value?: string): string {
  if (!value) return ''

  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim()
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function mapArticleToPost(article: LettermanArticle, content = ''): BlogPost {
  const excerpt =
    article.summary?.description ||
    article.description ||
    stripHtml(article.summary?.content) ||
    'Fresh insight from the Franchise Now newsletter.'

  return {
    id: article._id,
    slug: normalizeSlug(article),
    title: article.title || article.summary?.title || 'Untitled Article',
    excerpt,
    content,
    publishedAt: formatDate(article.createdAt || article.updatedAt),
    publishedAtIso: article.createdAt || article.updatedAt || '',
    pillar: 'AI Workforce',
    tags: article.keywords || [],
    image:
      article.previewImageUrl ||
      article.summary?.imageUrl ||
      article.archiveThumbnailImageUrl ||
      article.imageUrl,
  }
}

function renderSectionsContent(sections: LettermanSection[]): string {
  const sortedSections = [...sections].sort((a, b) => (a.index || 0) - (b.index || 0))

  const htmlParts = sortedSections
    .map((section) => {
      const type = (section.type || '').toUpperCase()
      const parts: string[] = []

      if (type === 'HEADLINE_COMBO' || type === 'NEWSLETTER_HEADLINE_COMBO') {
        return ''
      }

      if (type === 'TITLE' && section.title) {
        parts.push(`<h2>${escapeHtml(section.title)}</h2>`)
      }

      if (section.promptOutPut) {
        parts.push(section.promptOutPut)
      }

      if (section.imageUrl && (type === 'IMAGE' || section.includeImage)) {
        const alt = escapeHtml(section.title || 'Article image')
        parts.push(`<p><img src="${section.imageUrl}" alt="${alt}" /></p>`)
      }

      return parts.join('\n')
    })
    .filter(Boolean)

  return htmlParts.join('\n\n')
}

async function getPublishedArticles(): Promise<LettermanArticle[]> {
  const storageId = getLettermanStorageId()

  if (!storageId || !getLettermanApiKey()) {
    return []
  }

  try {
    return await fetchLetterman<LettermanArticle[]>(
      `/newsletters-storage/${storageId}/newsletters?state=PUBLISHED&type=ARTICLE`
    )
  } catch (error) {
    console.error('Failed to load Letterman articles', error)
    return []
  }
}

async function getSectionsForArticle(articleId: string): Promise<LettermanSection[]> {
  try {
    return await fetchLetterman<LettermanSection[]>(`/newsletters/${articleId}/sections`)
  } catch (error) {
    console.error(`Failed to load Letterman sections for article ${articleId}`, error)
    return []
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const articles = await getPublishedArticles()

  return articles
    .map((article) => mapArticleToPost(article))
    .sort((a, b) => {
      const aDate = new Date(a.publishedAtIso).getTime()
      const bDate = new Date(b.publishedAtIso).getTime()
      return bDate - aDate
    })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const articles = await getPublishedArticles()
  const article = articles.find((item) => normalizeSlug(item) === slug)

  if (!article) {
    return null
  }

  const sections = await getSectionsForArticle(article._id)
  const content = renderSectionsContent(sections) || article.summary?.content || ''

  return mapArticleToPost(article, content)
}
