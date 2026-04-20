import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Frosteria",
  description: "How Frosteria collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#080f17", minHeight: "100vh", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>❄</div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>Frosteria</span>
        </Link>
        <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}>← Back to store</Link>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 40px 100px" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "inline-block", background: "rgba(166,210,220,0.1)", border: "1px solid rgba(166,210,220,0.2)", borderRadius: 100, padding: "5px 16px", fontSize: 12, color: "#A6D2DC", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>Legal</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: "#fff", margin: "0 0 16px", lineHeight: 1.15 }}>Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>Last updated: April 2026</p>
        </div>

        <div style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.7)", fontSize: 15 }}>

          <Section title="1. Who We Are">
            <p>Frosteria (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the online store at frosteria.com. We sell the Frosteria Arc Pro misting fan and related products to customers across the European Union.</p>
            <p style={{ marginTop: 12 }}>For privacy-related matters, you can contact us at: <a href="mailto:support@frosteria.com" style={{ color: "#A6D2DC" }}>support@frosteria.com</a></p>
          </Section>

          <Section title="2. What Personal Data We Collect">
            <p>We collect the following types of personal data:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Order information:</strong> Name, delivery address, email address — collected when you place an order via Stripe Checkout.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Payment data:</strong> We do not store your card details. All payments are processed securely by Stripe, Inc. See stripe.com/privacy.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Email address:</strong> If you voluntarily subscribe to our newsletter or discount offers.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Usage data:</strong> Anonymous analytics data (page views, device type, country) via Vercel Analytics. No personal identifiers are stored.</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>IP address and browser information:</strong> Collected automatically by our hosting provider (Vercel) for security and performance purposes.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Data">
            <p>We use your personal data for the following purposes:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}>To process and fulfil your order (legal basis: contract performance)</li>
              <li style={{ marginBottom: 8 }}>To send order confirmations and shipping updates (legal basis: contract performance)</li>
              <li style={{ marginBottom: 8 }}>To send marketing emails, if you have opted in (legal basis: consent — you may withdraw at any time)</li>
              <li style={{ marginBottom: 8 }}>To comply with EU tax and customs obligations including IOSS VAT remittance (legal basis: legal obligation)</li>
              <li style={{ marginBottom: 8 }}>To improve our website and store (legal basis: legitimate interests)</li>
            </ul>
          </Section>

          <Section title="4. Who We Share Your Data With">
            <p>We share your data only with the following trusted third parties, solely for order fulfilment purposes:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Stripe, Inc.</strong> — payment processing (USA, with EU Standard Contractual Clauses)</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Our logistics partner / fulfilment centre</strong> — for packing and shipping your order (China-based, your address is shared for delivery)</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Klaviyo, Inc.</strong> — email marketing, only if you subscribed (USA, with EU Standard Contractual Clauses)</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Vercel, Inc.</strong> — website hosting and analytics (USA, with EU Standard Contractual Clauses)</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>EAS Project</strong> — IOSS VAT registration intermediary (EU-based)</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not sell your personal data to any third party.</p>
          </Section>

          <Section title="5. International Transfers">
            <p>Some of our service providers (Stripe, Klaviyo, Vercel) are based in the United States. When transferring your data outside the EU, we ensure appropriate safeguards are in place, such as EU Standard Contractual Clauses (SCCs) approved by the European Commission.</p>
          </Section>

          <Section title="6. How Long We Keep Your Data">
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}>Order records: 7 years (required by EU tax law)</li>
              <li style={{ marginBottom: 8 }}>Email marketing lists: Until you unsubscribe or request deletion</li>
              <li style={{ marginBottom: 8 }}>Analytics data: Aggregated and anonymised — retained indefinitely</li>
            </ul>
          </Section>

          <Section title="7. Your Rights Under GDPR">
            <p>If you are located in the EU/EEA, you have the following rights regarding your personal data:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Right of access</strong> — request a copy of data we hold about you</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Right to rectification</strong> — ask us to correct inaccurate data</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Right to erasure</strong> — request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Right to restrict processing</strong> — ask us to pause use of your data</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Right to data portability</strong> — receive your data in a machine-readable format</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Right to object</strong> — object to processing based on legitimate interests or direct marketing</li>
              <li style={{ marginBottom: 8 }}><strong style={{ color: "#fff" }}>Right to withdraw consent</strong> — for any processing based on consent (e.g. newsletter)</li>
            </ul>
            <p style={{ marginTop: 12 }}>To exercise any of these rights, email us at <a href="mailto:support@frosteria.com" style={{ color: "#A6D2DC" }}>support@frosteria.com</a>. We will respond within 30 days. You also have the right to lodge a complaint with your national data protection authority.</p>
          </Section>

          <Section title="8. Cookies">
            <p>We use only essential cookies required for the website to function (e.g. session management during checkout). We do not use third-party advertising cookies or tracking pixels. For more information, see our Cookie Policy.</p>
          </Section>

          <Section title="9. Security">
            <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All data transmitted to and from our website is encrypted using HTTPS/TLS.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. The date at the top of this page reflects when it was last revised. Continued use of frosteria.com after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="11. Contact">
            <p>For any privacy-related questions or requests:</p>
            <p style={{ marginTop: 12 }}>📧 <a href="mailto:support@frosteria.com" style={{ color: "#A6D2DC" }}>support@frosteria.com</a></p>
            <p>🌐 frosteria.com</p>
          </Section>

        </div>

        {/* Back link */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/" style={{ color: "#A6D2DC", textDecoration: "none", fontSize: 14 }}>← Back to Frosteria store</Link>
          <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 16px" }}>|</span>
          <Link href="/terms" style={{ color: "#A6D2DC", textDecoration: "none", fontSize: 14 }}>Terms of Service →</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#fff", margin: "0 0 16px", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>{title}</h2>
      {children}
    </div>
  );
}
