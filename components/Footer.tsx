"use client";
import { IconSnowflake, IconCertified, IconWaterDrop } from "@/components/BrandIcons";

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 16" fill="none" style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }}>
      <rect x="2" y="7" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M4.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="14" height="13" viewBox="0 0 20 14" fill="none" style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }}>
      <path d="M1 1h12v9H1zM13 4h4l2 4v4h-6V4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <circle cx="4.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="15.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#0d1b27", padding: "60px 40px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 60, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconSnowflake size={20} color="#fff" />
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: "#fff" }}>Frosteria</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>
              Stay Cool. Live Beautifully. Premium misting fans for European homes.
            </p>
            <div style={{ marginTop: 20, color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
              support@frosteria.com
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
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Returns Policy", href: "/terms#6" },
              { label: "Cookie Policy", href: "/privacy#8" },
            ].map(link => (
              <a key={link.label} href={link.href} style={{ display: "block", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 14, marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#A6D2DC")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >{link.label}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>© 2026 Frosteria. All rights reserved.</div>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, display: "flex", alignItems: "center" }}>
              <LockIcon /> Secure Checkout
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
              <IconCertified size={13} color="rgba(255,255,255,0.3)" /> CE Certified
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, display: "flex", alignItems: "center" }}>
              <TruckIcon /> Free EU Shipping
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
