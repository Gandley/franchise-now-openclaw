import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const GC_API_KEY = process.env.GC_API_KEY!;
const GC_BASE_URL = 'https://control.clawlauncher.io/api';

// Product ID to tag mapping
const PRODUCT_TAGS: Record<string, string> = {
  'prod_UTCEWxdQHF717J': 'Claw-Launch',
  'prod_UTCE61K3WF6Uva': 'Claw-Scale',
  'prod_UTCEZ7Gu84FHWd': 'Claw-Dominance',
};

async function createOrUpdateContact(email: string, firstName: string, lastName: string, tags: string[]) {
  try {
    // Try to find existing contact
    const searchRes = await fetch(`${GC_BASE_URL}/contacts?search=${encodeURIComponent(email)}`, {
      headers: {
        'Authorization': `Bearer ${GC_API_KEY}`,
      },
    });
    
    const searchData = await searchRes.json();
    let contactId = searchData.contacts?.[0]?._id;
    
    if (!contactId) {
      // Create new contact
      const createRes = await fetch(`${GC_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GC_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
        }),
      });
      
      const createData = await createRes.json();
      contactId = createData.contact?._id || createData._id;
    }
    
    // Fire tags
    for (const tag of tags) {
      await fetch(`${GC_BASE_URL}/tags/fire`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GC_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactId,
          tag,
        }),
      });
    }
    
    return { success: true, contactId };
  } catch (error) {
    console.error('Global Control error:', error);
    return { success: false, error };
  }
}

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const signature = req.headers.get('stripe-signature')!;
  
  let event: Stripe.Event;
  
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook signature verification failed: ${err.message}` }, { status: 400 });
  }
  
  // Handle checkout completion
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Get customer details
    const customer = await stripe.customers.retrieve(session.customer as string);
    
    if (!customer || customer.deleted) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 400 });
    }
    
    const email = customer.email!;
    const name = customer.name || '';
    const [firstName, ...lastNameParts] = name.split(' ');
    const lastName = lastNameParts.join(' ');
    
    // Get line items to determine product
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
    const productId = lineItems.data[0]?.price?.product as string;
    
    // Build tags
    const tags = ['Claw-Customer', 'Paid-Customer'];
    if (productId && PRODUCT_TAGS[productId]) {
      tags.push(PRODUCT_TAGS[productId]);
    }
    
    // Create/update in Global Control
    const result = await createOrUpdateContact(email, firstName, lastName, tags);
    
    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        contactId: result.contactId,
        email,
        tags 
      });
    } else {
      return NextResponse.json({ error: 'Failed to create contact' }, { status: 500 });
    }
  }
  
  return NextResponse.json({ received: true });
}
