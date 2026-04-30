import { NextRequest, NextResponse } from 'next/server'

const GC_API_KEY = process.env.GC_API_KEY!
const GC_BASE_URL = 'https://api.globalcontrol.io/api/ai'
const FREE_COURSE_TAG_ID = '69f28c0171e469e536cb146a'
const DISCORD_INVITE_URL = process.env.DISCORD_INVITE_URL || 'https://discord.gg/PZgBYwYX8'
const AGENTMAIL_API_KEY = process.env.AGENTMAIL_API_KEY!
const AGENTMAIL_INBOX = 'franchisenow@agentmail.to'

interface QuizSubmission {
  email?: string
  first_name?: string
  firstName?: string
  last_name?: string
  lastName?: string
  phone?: string
  name?: string
  aiUse?: string
  contact?: { email?: string; first_name?: string; last_name?: string; phone?: string }
  lead?: { email?: string; first_name?: string; last_name?: string; phone?: string }
}

function extractFields(body: QuizSubmission) {
  const source = body.contact || body.lead || body
  const email = (source.email || body.email || '').trim().toLowerCase()
  const rawFirst = source.first_name || body.first_name || body.firstName || ''
  const rawLast = source.last_name || body.last_name || body.lastName || ''
  const phone = source.phone || body.phone || ''
  let firstName = rawFirst
  let lastName = rawLast
  if (!firstName && body.name) {
    const parts = body.name.trim().split(' ')
    firstName = parts[0] || ''
    lastName = parts.slice(1).join(' ') || ''
  }
  return { email, firstName, lastName, phone }
}

async function gc(path: string, method = 'GET', payload?: unknown) {
  const headers: Record<string, string> = { 'X-API-KEY': GC_API_KEY }
  if (payload) headers['Content-Type'] = 'application/json'
  const res = await fetch(`${GC_BASE_URL}${path}`, {
    method,
    headers,
    body: payload ? JSON.stringify(payload) : undefined,
  })
  const text = await res.text()
  try { return JSON.parse(text) } catch { return null }
}

async function upsertContact(email: string, firstName: string, lastName: string, phone: string) {
  // Step 1: Try to create
  await gc('/contacts', 'POST', { email, firstName, lastName, phone: phone || undefined })

  // Step 2: Fire tag — returns contact object with _id
  const tagResult = await gc(`/tags/fire-tag/${FREE_COURSE_TAG_ID}`, 'POST', { email })
  const contactId = tagResult?.data?.data?._id || tagResult?.data?._id

  // Step 3: PUT update to ensure name/phone are saved
  if (contactId) {
    await gc(`/contacts/${contactId}`, 'PUT', { email, firstName, lastName, phone: phone || undefined })
  }

  return contactId
}

async function sendWelcomeEmail(email: string, firstName: string) {
  const name = firstName || 'there'
  const html = `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1a1a;">
  <p>Hey ${name}! 👋</p>
  <p>You're in. Here's your access to the AI Operator Course and community:</p>
  <p style="font-size:18px;font-weight:bold;">
    👉 <a href="${DISCORD_INVITE_URL}" style="color:#6570df;">Click here to join the Discord</a>
  </p>
  <ul>
    <li>✅ 3 video modules (26.5 min)</li>
    <li>✅ 5 PDF templates</li>
    <li>✅ The full AI Operator community</li>
  </ul>
  <p>If you have any questions just reply to this email.</p>
  <p>Talk soon,<br/>Noah<br/>Franchise Now</p>
  <hr style="border:none;border-top:1px solid #eee;margin:24px 0;"/>
  <p style="font-size:14px;color:#666;">
    P.S. Want us to install AI systems directly into your business?
    <a href="https://calendly.com/noah-franchisenow/30min" style="color:#6570df;">Book a free strategy call</a>
  </p>
</div>`.trim()

  const text = `Hey ${name}!\n\nYou're in. Join the Discord: ${DISCORD_INVITE_URL}\n\nTalk soon,\nNoah\nFranchise Now`

  return fetch(`https://api.agentmail.to/v0/inboxes/${AGENTMAIL_INBOX}/messages/send`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${AGENTMAIL_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ to: email, subject: `Here's your free access, ${name} 🎉`, html, text }),
  })
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''
    let body: QuizSubmission = {}

    if (contentType.includes('application/json')) {
      body = await req.json()
    } else {
      try { body = await req.json() } catch { body = {} }
    }

    const { email, firstName, lastName, phone } = extractFields(body)

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    await upsertContact(email, firstName, lastName, phone)
    // tag is already fired inside upsertContact
    await sendWelcomeEmail(email, firstName)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quiz webhook error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'quiz-webhook' })
}
