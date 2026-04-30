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

async function upsertContact(
  email: string, firstName: string, lastName: string, phone: string, businessInfo: string
): Promise<string | null> {
  const contactPayload = {
    email,
    firstName,
    lastName,
    phone: phone || undefined,
    customFields: businessInfo ? [{ key: 'Business Info', value: businessInfo }] : [],
  }

  // Step 1: Try to create
  const created = await gc('/contacts', 'POST', contactPayload)
  const createdId = created?.data?._id || created?._id

  if (createdId) {
    // New contact created with all fields
    return createdId
  }

  // Step 2: Creation failed (likely duplicate) — search for existing contact
  await new Promise(r => setTimeout(r, 300)) // small delay for GC consistency
  const search = await gc(`/contacts?search=${encodeURIComponent(email)}`)
  const existing = search?.data?.contacts?.[0]

  if (!existing?._id) return null

  // Step 3: Update existing contact with name/phone
  await gc(`/contacts/${existing._id}`, 'PUT', contactPayload)
  return existing._id
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

    const contactId = await upsertContact(email, firstName, lastName, phone, businessInfo)

    // Fire tag using email (works regardless of contactId)
    await gc(`/tags/fire-tag/${STRATEGY_CALL_TAG_ID}`, 'POST', { email })

    return NextResponse.json({ success: true, contactId })
  } catch (err) {
    console.error('Book call error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'book-call' })
}
