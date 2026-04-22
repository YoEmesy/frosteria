// ─────────────────────────────────────────────────────────────────────────────
// Stripe → CJ Dropshipping webhook
//
// Every time a customer completes checkout, Stripe fires checkout.session.completed
// here. We pull out the shipping address + customer info and auto-create a CJ order
// so the EU warehouse picks, packs, and ships automatically.
//
// Required env vars (add in Vercel → Settings → Environment Variables):
//   STRIPE_SECRET_KEY          (already set)
//   STRIPE_WEBHOOK_SECRET      ← get from Stripe Dashboard → Webhooks
//   CJ_API_KEY                 ← get from CJ Dashboard → API settings
//   CJ_PRODUCT_VID             ← your product's variant ID from CJ product page
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createCJOrder } from "@/lib/cj";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Stripe requires the raw body to verify the signature — Next.js App Router
// gives us a ReadableStream so we read it manually.
export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    console.error("Webhook: missing signature or secret");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // We only care about successful payments
  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Guard: must be a paid session
  if (session.payment_status !== "paid") {
    return NextResponse.json({ received: true });
  }

  const shipping = session.shipping_details;
  const customer = session.customer_details;

  if (!shipping?.address || !customer) {
    console.error("Webhook: missing shipping/customer details on session", session.id);
    return NextResponse.json({ error: "Missing address" }, { status: 400 });
  }

  const addr = shipping.address;
  const vid  = process.env.CJ_PRODUCT_VID;

  if (!vid) {
    console.error("Webhook: CJ_PRODUCT_VID env var not set");
    return NextResponse.json({ error: "CJ product not configured" }, { status: 500 });
  }

  try {
    const cjOrder = await createCJOrder({
      orderNumber:          session.id,                        // Stripe session ID as ref
      shippingCustomerName: shipping.name ?? customer.name ?? "Customer",
      shippingPhone:        customer.phone ?? "000000000",
      shippingEmail:        customer.email ?? "",
      shippingAddress:      addr.line1 ?? "",
      shippingAddress2:     addr.line2 ?? "",
      shippingCity:         addr.city ?? "",
      shippingProvince:     addr.state ?? "",
      shippingCountry:      countryName(addr.country ?? ""),
      shippingCountryCode:  addr.country ?? "",
      shippingZip:          addr.postal_code ?? "",
      products: [{ vid, quantity: 1 }],
      remark: `Frosteria Arc Pro · Stripe ${session.id}`,
    });

    console.log(`✅ CJ order created: ${cjOrder.orderId} for Stripe session ${session.id}`);
    return NextResponse.json({ success: true, cjOrderId: cjOrder.orderId });

  } catch (err) {
    // Log the error but return 200 so Stripe doesn't retry endlessly.
    // You'll see the failure in Vercel logs and can manually re-trigger.
    console.error(`❌ Failed to create CJ order for session ${session.id}:`, err);
    return NextResponse.json({ received: true, error: String(err) });
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Helper: convert ISO country code → full name CJ expects
// ─────────────────────────────────────────────────────────────────────────────
function countryName(code: string): string {
  const map: Record<string, string> = {
    AT: "Austria", BE: "Belgium", BG: "Bulgaria", HR: "Croatia",
    CY: "Cyprus", CZ: "Czech Republic", DK: "Denmark", EE: "Estonia",
    FI: "Finland", FR: "France", DE: "Germany", GR: "Greece",
    HU: "Hungary", IE: "Ireland", IT: "Italy", LV: "Latvia",
    LT: "Lithuania", LU: "Luxembourg", MT: "Malta", NL: "Netherlands",
    PL: "Poland", PT: "Portugal", RO: "Romania", SK: "Slovakia",
    SI: "Slovenia", ES: "Spain", SE: "Sweden",
  };
  return map[code] ?? code;
}
