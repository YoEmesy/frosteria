export default function SuccessPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1C2B3A, #243546)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 540, width: "100%", textAlign: "center",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(61,122,138,0.3)",
          borderRadius: 24, padding: "60px 48px",
          animation: "fadeUp 0.8s ease forwards",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 24 }}>❄️</div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 40, fontWeight: 700, color: "#fff", marginBottom: 16,
          }}
        >
          Order Confirmed!
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
          Thank you for your order. Your Frosteria Arc Pro is being prepared for
          shipping. You'll receive a confirmation email shortly.
        </p>
        <div
          style={{
            background: "rgba(61,122,138,0.15)",
            border: "1px solid rgba(61,122,138,0.3)",
            borderRadius: 12, padding: "20px 24px", marginBottom: 36,
          }}
        >
          <div style={{ color: "#A6D2DC", fontSize: 14, fontWeight: 600, marginBottom: 8 }}>
            📦 Estimated Delivery
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>
            3–5 business days · Free EU shipping
          </div>
        </div>
        <a
          href="/"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
            color: "#fff", padding: "14px 32px", borderRadius: 10,
            textDecoration: "none", fontSize: 15, fontWeight: 700,
          }}
        >
          Back to Frosteria →
        </a>
      </div>
    </div>
  );
}
