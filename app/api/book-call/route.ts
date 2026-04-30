import { NextRequest, NextResponse } from 'next/server'

const GC_API_KEY = process.env.GC_API_KEY!
const GC_BASE_URL = 'https://api.globalcontrol.io/api/ai'
const STRATEGY_CALL_TAG_ID = '69f2d6ae71e469e536e75306'

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const email = (body.email || '').trim().toLowerCase()
    const firstName = (body.firstName || '').trim()
    const lastName = (body.lastName || '').trim()
    const phone = (body.phone || '').trim()
    const businessInfo = (body.businessInfo || '').trim()

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    // Step 1: Create or find contact via POST (creates if new, errors if duplicate)
    await gc('/contacts', 'POST', { email, firstName, lastName, phone: phone || undefined })

    // Step 2: Fire tag — returns the contact object with its _id
    const tagResult = await gc(`/tags/fire-tag/${STRATEGY_CALL_TAG_ID}`, 'POST', { email })
    const contactId = tagResult?.data?.data?._id || tagResult?.data?._id

    // Step 3: If we got the contact ID, PUT update with name/phone to ensure they're saved
    if (contactId) {
      await gc(`/contacts/${contactId}`, 'PUT', {
        email,
        firstName,
        lastName,
        phone: phone || undefined,
        customFields: businessInfo ? [{ key: 'Business Info', value: businessInfo }] : [],
      })
    }

    return NextResponse.json({ success: true, contactId })
  } catch (err) {
    console.error('Book call error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'book-call' })
}
