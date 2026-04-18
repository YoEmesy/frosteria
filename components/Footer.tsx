"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#0d1b27", padding: "60px 40px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 60, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>❄</div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: "#fff" }}>Frosteria</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Stay Cool. Live Beautifully. Premium misting fans for European homes.
            </p>
            <div style={{ marginTop: 20, color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
              📧 support@frosteria.com
            </div>
          </div>
          {/* Links */}
          <div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Product</div>
            {["Features", "Comparison", "Reviews", "FAQ"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ display: "block", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 14, marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#A6D2DC")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >{link}</a>
            ))}
          </div>
          <div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Legal</div>
            {["Privacy Policy", "Terms of Service", "Returns Policy", "Cookie Policy"].map(link => (
              <a key={link} href="#" style={{ display: "block", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 14, marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#A6D2DC")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >{link}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>© 2025 Frosteria. All rights reserved.</div>
          <div style={{ display: "flex", gap: 16 }}>
            {["🔒 Secure Checkout", "✅ CE Certified", "🚚 Free EU Shipping"].map((badge, i) => (
              <span key={i} style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
