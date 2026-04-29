import { NextRequest, NextResponse } from 'next/server'

const GC_API_KEY = process.env.GC_API_KEY!
const GC_BASE_URL = 'https://api.globalcontrol.io/api/ai'
const FREE_COURSE_TAG_ID = '69f28c0171e469e536cb146a'
const DISCORD_INVITE_URL = process.env.DISCORD_INVITE_URL || 'https://discord.gg/your-invite-here'

interface QuizSubmission {
  // Quizforma webhook payload fields
  email?: string
  first_name?: string
  firstName?: string
  last_name?: string
  lastName?: string
  phone?: string
  name?: string
  // May also be nested under contact or lead
  contact?: {
    email?: string
    first_name?: string
    last_name?: string
    phone?: string
  }
  lead?: {
    email?: string
    first_name?: string
    last_name?: string
    phone?: string
  }
  // Direct form submission fields
  answers?: Record<string, string>
}

function extractFields(body: QuizSubmission) {
  // Handle various Quizforma payload shapes
  const source = body.contact || body.lead || body

  const email = source.email || body.email || ''
  const rawFirst = source.first_name || body.first_name || body.firstName || ''
  const rawLast = source.last_name || body.last_name || body.lastName || ''
  const phone = source.phone || body.phone || ''

  // If no separate first/last, try splitting the name field
  let firstName = rawFirst
  let lastName = rawLast
  if (!firstName && body.name) {
    const parts = body.name.trim().split(' ')
    firstName = parts[0] || ''
    lastName = parts.slice(1).join(' ') || ''
  }

  return { email: email.trim().toLowerCase(), firstName, lastName, phone }
}

async function gcRequest(path: string, method = 'GET', payload?: unknown) {
  const res = await fetch(`${GC_BASE_URL}${path}`, {
    method,
    headers: {
      'X-API-KEY': GC_API_KEY,
      'Content-Type': 'application/json',
    },
    body: payload ? JSON.stringify(payload) : undefined,
  })
  return res.json()
}

async function createOrUpdateContact(email: string, firstName: string, lastName: string, phone: string) {
  // Check if contact already exists
  const search = await gcRequest(`/contacts?search=${encodeURIComponent(email)}`)
  const existing = search?.data?.contacts?.[0]

  if (existing) {
    return existing._id
  }

  // Create new contact
  const created = await gcRequest('/contacts', 'POST', {
    email,
    firstName,
    lastName,
    phone: phone || undefined,
    customFields: {},
  })

  return created?.data?._id || created?._id
}

async function applyTag(contactId: string, tagId: string) {
  return gcRequest(`/tags/fire-tag/${tagId}`, 'POST', {
    contactId,
  })
}

async function sendWelcomeEmail(email: string, firstName: string) {
  const name = firstName || 'there'
  const emailBody = `
<p>Hey ${name}! 👋</p>

<p>You're in. Here's your access to the AI Operator Course and community:</p>

<p><strong>👉 Click here to join the Discord → <a href="${DISCORD_INVITE_URL}">${DISCORD_INVITE_URL}</a></strong></p>

<p>Inside you'll find:</p>
<ul>
  <li>✅ 3 video modules (26.5 min)</li>
  <li>✅ 5 PDF templates</li>
  <li>✅ The full AI Operator community</li>
</ul>

<p>If you have any questions just reply to this email.</p>

<p>Talk soon,<br/>Noah<br/>Franchise Now</p>

<p>P.S. If you want us to install AI systems directly into your business — <a href="https://calendly.com/noah-franchisenow/30min">Click here to book a free strategy call</a></p>
  `.trim()

  return gcRequest('/broadcast-emails/send-email', 'POST', {
    recipients: [
      {
        tagId: FREE_COURSE_TAG_ID,
        source: 'TAG',
        excludeTags: [],
        addExtraOptions: true,
        postTagging: false,
        onOpen: null,
        onClick: null,
        sendingSchedule: 'IMMEDIATELY',
        mailProvider: 'smtp',
        mailSenderAccount: null,
        dailyLimit: null,
      },
    ],
    subject: `Here's your free access, ${name} 🎉`,
    previewText: 'Your AI Operator Course + Discord invite is inside',
    emailBody,
    replyTo: null,
    fromName: 'Noah @ Franchise Now',
    fromEmail: null,
    trackOpens: true,
    trackClicks: true,
  })
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''
    let body: QuizSubmission = {}

    if (contentType.includes('application/json')) {
      body = await req.json()
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const text = await req.text()
      const params = new URLSearchParams(text)
      body = Object.fromEntries(params.entries()) as QuizSubmission
    } else {
      // Try JSON anyway
      try {
        body = await req.json()
      } catch {
        body = {}
      }
    }

    const { email, firstName, lastName, phone } = extractFields(body)

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    // 1. Create or find contact in Global Control
    const contactId = await createOrUpdateContact(email, firstName, lastName, phone)

    if (!contactId) {
      console.error('Failed to create contact for', email)
      return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 })
    }

    // 2. Apply Free-Course-Access tag
    await applyTag(contactId, FREE_COURSE_TAG_ID)

    // 3. Send welcome email with Discord link
    await sendWelcomeEmail(email, firstName)

    return NextResponse.json({ success: true, contactId })
  } catch (err) {
    console.error('Quiz webhook error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'quiz-webhook' })
}
