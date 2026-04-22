// ─────────────────────────────────────────────────────────────────────────────
// CJ Dropshipping API v2 client
// Docs: https://developers.cjdropshipping.com
// ─────────────────────────────────────────────────────────────────────────────

const CJ_BASE = "https://developers.cjdropshipping.com/api2.0/v1";

// Token is cached in memory for the duration of the serverless function.
// CJ tokens are valid for ~12h — on Vercel this is fine as each cold-start
// will just fetch a fresh one.
let _cachedToken: { token: string; expiresAt: number } | null = null;

/** Get (or refresh) a CJ access token using the apiKey from env */
export async function getCJToken(): Promise<string> {
  const now = Date.now();
  if (_cachedToken && _cachedToken.expiresAt > now + 60_000) {
    return _cachedToken.token;
  }

  const apiKey = process.env.CJ_API_KEY;
  if (!apiKey) throw new Error("CJ_API_KEY env var is not set");

  const res = await fetch(`${CJ_BASE}/authentication/getAccessToken`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey }),
  });

  const json = await res.json();
  if (!json.data?.accessToken) {
    throw new Error(`CJ auth failed: ${JSON.stringify(json)}`);
  }

  // CJ returns tokenExpiryDate as a UTC string
  const expiresAt = new Date(json.data.tokenExpiryDate).getTime();
  _cachedToken = { token: json.data.accessToken, expiresAt };
  return _cachedToken.token;
}

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface CJOrderAddress {
  shippingCustomerName: string;
  shippingPhone: string;
  shippingEmail: string;
  shippingAddress: string;
  shippingAddress2?: string;
  shippingCity: string;
  shippingProvince: string; // state/region
  shippingCountry: string;  // full name e.g. "Germany"
  shippingCountryCode: string; // ISO 2-letter e.g. "DE"
  shippingZip: string;
}

export interface CJOrderProduct {
  vid: string;    // CJ variant ID — find this in your CJ product page
  quantity: number;
}

export interface CreateCJOrderParams extends CJOrderAddress {
  orderNumber: string;       // your internal order ref (Stripe session ID works)
  products: CJOrderProduct[];
  logisticName?: string;     // e.g. "PostNL" or leave blank for CJ to auto-select
  remark?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Create order
// ─────────────────────────────────────────────────────────────────────────────

export async function createCJOrder(params: CreateCJOrderParams) {
  const token = await getCJToken();

  const body = {
    orderNumber:          params.orderNumber,
    shippingCustomerName: params.shippingCustomerName,
    shippingPhone:        params.shippingPhone,
    email:                params.shippingEmail,
    shippingAddress:      params.shippingAddress,
    shippingAddress2:     params.shippingAddress2 ?? "",
    shippingCity:         params.shippingCity,
    shippingProvince:     params.shippingProvince,
    shippingCountry:      params.shippingCountry,
    shippingCountryCode:  params.shippingCountryCode,
    shippingZip:          params.shippingZip,
    logisticName:         params.logisticName ?? "",
    remark:               params.remark ?? "Frosteria Arc Pro order",
    products: params.products.map(p => ({
      vid:      p.vid,
      quantity: p.quantity,
    })),
  };

  const res = await fetch(`${CJ_BASE}/shopping/order/createOrderV2`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "CJ-Access-Token": token,
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();

  if (json.code !== 200) {
    throw new Error(`CJ order creation failed: ${JSON.stringify(json)}`);
  }

  return json.data as { orderId: string; orderNum: string };
}

// ─────────────────────────────────────────────────────────────────────────────
// Get order status (useful for a dashboard or order-check page)
// ─────────────────────────────────────────────────────────────────────────────

export async function getCJOrderStatus(cjOrderId: string) {
  const token = await getCJToken();

  const res = await fetch(
    `${CJ_BASE}/shopping/order/getOrderDetail?orderId=${cjOrderId}`,
    {
      headers: { "CJ-Access-Token": token },
    }
  );

  const json = await res.json();
  return json.data;
}
