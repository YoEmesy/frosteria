# CJ Dropshipping → Frosteria Integration
## Step-by-step setup — press buttons in this order

---

## STEP 1 — Create your CJ Dropshipping account
1. Go to **https://cjdropshipping.com**
2. Click **Sign Up** → register with your business email
3. Verify email → log in

---

## STEP 2 — Find your product on CJ + get the Variant ID (VID)
1. In CJ dashboard, click **Find Products** (top nav)
2. Search: `misting fan standing 16 inch` or paste the Alibaba product title
3. Filter: **Warehouse → Europe** (selects DE/NL stock) + **Ship from: EU**
4. Open the product → scroll to **Variants** table
5. Find your specific variant (e.g. Black, EU plug) → copy the **VID** (looks like `CB7291DFEBCA4F8F8CF38F0F3C5D9D05`)
6. Save this — it goes in `CJ_PRODUCT_VID` env var

> **Tip:** If no EU warehouse stock exists for that exact product, contact your CJ agent
> (assigned automatically after signup) and request they source it to the DE warehouse.

---

## STEP 3 — Get your CJ API key
1. In CJ dashboard → click your avatar (top right) → **My CJ**
2. Go to **API Integration** or **Developer Settings**
3. Click **Generate API Key**
4. Copy the key — format: `CJUserNum@api@xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
5. Save this — it goes in `CJ_API_KEY` env var

---

## STEP 4 — Add env vars to Vercel
1. Go to **https://vercel.com** → your Frosteria project → **Settings → Environment Variables**
2. Add these two new variables (keep existing ones):

| Name | Value |
|------|-------|
| `CJ_API_KEY` | paste your CJ API key from Step 3 |
| `CJ_PRODUCT_VID` | paste your variant ID from Step 2 |

3. Click **Save** for each
4. **Important:** Set them for **Production**, **Preview**, and **Development**

---

## STEP 5 — Create the Stripe webhook
1. Go to **https://dashboard.stripe.com/webhooks**
2. Click **Add endpoint**
3. Endpoint URL: `https://frosteria.com/api/webhook`
4. Click **Select events** → search and select: `checkout.session.completed`
5. Click **Add endpoint**
6. On the webhook detail page, click **Reveal** under **Signing secret**
7. Copy the secret (starts with `whsec_...`)

---

## STEP 6 — Add the webhook secret to Vercel
1. Back in Vercel → **Settings → Environment Variables**
2. Add:

| Name | Value |
|------|-------|
| `STRIPE_WEBHOOK_SECRET` | paste the `whsec_...` secret from Step 5 |

---

## STEP 7 — Deploy
1. In Vercel → your project → click **Redeploy** (or push any small commit)
2. Wait ~60 seconds for build to complete

---

## STEP 8 — Test it end to end
1. Go to **frosteria.com** → click **Order Now**
2. Use Stripe test card: `4242 4242 4242 4242` · any future date · any CVC
3. Complete checkout with a real EU address (e.g. Unter den Linden 1, 10117 Berlin, DE)
4. Check **Vercel → your deployment → Functions → Logs**
   - You should see: `✅ CJ order created: [orderId] for Stripe session [id]`
5. Check **CJ Dashboard → Orders** — your test order should appear

> To test with real Stripe webhooks locally: install Stripe CLI and run
> `stripe listen --forward-to localhost:3000/api/webhook`

---

## What happens on every real order (automated flow)
```
Customer pays on frosteria.com
    ↓
Stripe fires checkout.session.completed to /api/webhook
    ↓
Webhook verifies Stripe signature (security)
    ↓
Pulls shipping address + customer details from Stripe
    ↓
Authenticates with CJ API (auto token refresh)
    ↓
Creates CJ order → DE/EU warehouse picks & packs
    ↓
CJ ships to customer · 3–7 business days EU delivery
```

---

## If an order fails
- Check **Vercel logs** for `❌ Failed to create CJ order`
- Common causes: VID changed, CJ token expired, address format issue
- You can manually place the order in CJ dashboard using the Stripe session ID as reference
- Stripe will NOT retry if webhook returns 200 — this is intentional to avoid duplicates

---

## Monthly cost summary
| Item | Cost |
|------|------|
| CJ Dropshipping account | Free |
| CJ order fulfillment fee | €0 (built into product price) |
| Vercel (current plan) | Already paying |
| Stripe (1.5% + €0.25 per EU card) | ~€1.74 per €99 order |
| **Total new monthly overhead** | **€0** |
