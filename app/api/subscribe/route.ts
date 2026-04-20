import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

  const KLAVIYO_API_KEY = process.env.KLAVIYO_PRIVATE_KEY;
  const LIST_ID = process.env.KLAVIYO_LIST_ID;

  if (!KLAVIYO_API_KEY || !LIST_ID) {
    // If Klaviyo isn't configured yet, just return success silently
    // so the popup still works visually
    console.log("Klaviyo not configured — email captured:", email);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch("https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        "revision": "2024-02-15",
      },
      body: JSON.stringify({
        data: {
          type: "profile-subscription-bulk-create-job",
          attributes: {
            profiles: {
              data: [
                {
                  type: "profile",
                  attributes: {
                    email,
                    subscriptions: {
                      email: {
                        marketing: { consent: "SUBSCRIBED" },
                      },
                    },
                  },
                },
              ],
            },
          },
          relationships: {
            list: {
              data: { type: "list", id: LIST_ID },
            },
          },
        },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Klaviyo error:", err);
      return NextResponse.json({ error: "Klaviyo error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Subscribe error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
