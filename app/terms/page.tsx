import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Frosteria",
  description: "Terms and conditions for purchasing from Frosteria.",
};

export default function TermsOfService() {
  return (
    <div style={{ background: "#080f17", minHeight: "100vh", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "18px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>❄</div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>Frosteria</span>
        </Link>
        <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 14 }}>← Back to store</Link>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 40px 100px" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "inline-block", background: "rgba(166,210,220,0.1)", border: "1px solid rgba(166,210,220,0.2)", borderRadius: 100, padding: "5px 16px", fontSize: 12, color: "#A6D2DC", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 20 }}>Legal</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: "#fff", margin: "0 0 16px", lineHeight: 1.15 }}>Terms of Service</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15 }}>Last updated: April 2026</p>
        </div>

        <div style={{ lineHeight: 1.8, color: "rgba(255,255,255,0.7)", fontSize: 15 }}>

          <Section title="1. General">
            <p>These Terms of Service (&quot;Terms&quot;) govern your use of frosteria.com and any purchase made through our online store. By placing an order, you agree to these Terms.</p>
            <p style={{ marginTop: 12 }}>Frosteria is operated by Edvins Liepins, Latvia. For enquiries: <a href="mailto:support@frosteria.com" style={{ color: "#A6D2DC" }}>support@frosteria.com</a></p>
          </Section>

          <Section title="2. Products">
            <p>We sell the Frosteria Arc Pro — a 16-inch standing misting fan with integrated 4-litre water tank. Product images are for illustrative purposes. Actual product may differ slightly in shade or finish due to manufacturing variations.</p>
            <p style={{ marginTop: 12 }}>All products sold through frosteria.com carry CE certification confirming compliance with relevant EU safety directives.</p>
          </Section>

          <Section title="3. Pricing and Payment">
            <p>All prices are displayed in Euros (€) and include VAT where applicable under EU IOSS rules. We reserve the right to change prices at any time. The price you see at checkout is the price you pay — no hidden fees.</p>
            <p style={{ marginTop: 12 }}>Payments are processed securely by Stripe, Inc. We accept all major credit and debit cards. We do not store your payment card details.</p>
          </Section>

          <Section title="4. Order Confirmation">
            <p>After placing your order, you will receive an email confirmation. This constitutes acceptance of your order. We reserve the right to cancel orders in cases of payment failure, stock unavailability, or suspected fraud — in which case a full refund will be issued.</p>
          </Section>

          <Section title="5. Shipping and Delivery">
            <p>We ship to all 27 EU member states. Estimated delivery times:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}>Standard delivery: 5–10 business days</li>
              <li style={{ marginBottom: 8 }}>Delivery times are estimates and may vary during peak seasons or due to customs delays</li>
              <li style={{ marginBottom: 8 }}>Shipping is free on all orders</li>
            </ul>
            <p style={{ marginTop: 12 }}>Once your order is dispatched, you will receive a tracking number by email. Frosteria is not liable for delays caused by customs, postal services, or events outside our control.</p>
          </Section>

          <Section title="6. Returns and Refunds">
            <p>Under EU consumer law, you have the right to withdraw from your purchase within <strong style={{ color: "#fff" }}>14 days</strong> of receiving the product, without giving any reason.</p>
            <p style={{ marginTop: 12 }}>To exercise this right:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}>Email us at <a href="mailto:support@frosteria.com" style={{ color: "#A6D2DC" }}>support@frosteria.com</a> within 14 days of delivery</li>
              <li style={{ marginBottom: 8 }}>Items must be returned in original condition and packaging</li>
              <li style={{ marginBottom: 8 }}>Return shipping costs are your responsibility unless the item is faulty</li>
              <li style={{ marginBottom: 8 }}>Refunds will be issued within 14 days of receiving the returned item</li>
            </ul>
            <p style={{ marginTop: 12 }}>If your product arrives damaged or faulty, contact us immediately with photos. We will arrange a replacement or full refund at no cost to you.</p>
          </Section>

          <Section title="7. Warranty">
            <p>The Frosteria Arc Pro comes with a <strong style={{ color: "#fff" }}>12-month warranty</strong> against manufacturing defects. This warranty does not cover:</p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li style={{ marginBottom: 8 }}>Damage caused by misuse, accidents, or modifications</li>
              <li style={{ marginBottom: 8 }}>Normal wear and tear</li>
              <li style={{ marginBottom: 8 }}>Damage caused by using the product outside of its intended purpose</li>
            </ul>
            <p style={{ marginTop: 12 }}>This warranty is in addition to your statutory rights under EU consumer law.</p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>All content on frosteria.com — including text, images, logos, and brand name — is the property of Frosteria and may not be copied, reproduced, or distributed without prior written permission.</p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>Frosteria&apos;s total liability to you for any claim arising from your purchase shall not exceed the amount you paid for the product. We are not liable for indirect, consequential, or special damages. Nothing in these Terms limits our liability for death or personal injury caused by our negligence, fraud, or any liability that cannot be excluded by law.</p>
          </Section>

          <Section title="10. Governing Law">
            <p>These Terms are governed by the laws of the Republic of Latvia and the European Union. Any disputes will be subject to the jurisdiction of Latvian courts. EU customers also have access to the EU Online Dispute Resolution platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: "#A6D2DC" }}>ec.europa.eu/consumers/odr</a>.</p>
          </Section>

          <Section title="11. Changes to These Terms">
            <p>We may update these Terms at any time. The current version is always available at frosteria.com/terms. Continued use of our store after changes constitutes acceptance of the updated Terms.</p>
          </Section>

          <Section title="12. Contact">
            <p>For any questions regarding these Terms:</p>
            <p style={{ marginTop: 12 }}>📧 <a href="mailto:support@frosteria.com" style={{ color: "#A6D2DC" }}>support@frosteria.com</a></p>
            <p>🌐 frosteria.com</p>
          </Section>

        </div>

        {/* Back link */}
        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/" style={{ color: "#A6D2DC", textDecoration: "none", fontSize: 14 }}>← Back to Frosteria store</Link>
          <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 16px" }}>|</span>
          <Link href="/privacy" style={{ color: "#A6D2DC", textDecoration: "none", fontSize: 14 }}>Privacy Policy →</Link>
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
