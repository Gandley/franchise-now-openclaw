import { NextRequest, NextResponse } from 'next/server'

const GC_API_KEY = process.env.GC_API_KEY!
const GC_BASE_URL = 'https://api.globalcontrol.io/api/ai'
const STRATEGY_CALL_TAG_ID = '69f2d6ae71e469e536e75306'

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

async function createOrUpdateContact(
  email: string,
  firstName: string,
  lastName: string,
  phone: string,
  businessInfo: string
) {
  const search = await gcRequest(`/contacts?search=${encodeURIComponent(email)}`)
  const existing = search?.data?.contacts?.[0]

  if (existing) {
    return existing._id
  }

  const created = await gcRequest('/contacts', 'POST', {
    email,
    firstName,
    lastName,
    phone: phone || undefined,
    customFields: businessInfo ? [{ key: 'Business Info', value: businessInfo }] : [],
  })

  return created?.data?._id || created?._id
}

async function applyTag(email: string, tagId: string) {
  return gcRequest(`/tags/fire-tag/${tagId}`, 'POST', { email })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const email = (body.email || '').trim().toLowerCase()
    const firstName = body.firstName || ''
    const lastName = body.lastName || ''
    const phone = body.phone || ''
    const businessInfo = body.businessInfo || ''

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    await createOrUpdateContact(email, firstName, lastName, phone, businessInfo)
    await applyTag(email, STRATEGY_CALL_TAG_ID)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Book call webhook error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'book-call' })
}
