"use client";
import { useEffect, useRef, useState } from "react";

export default function BuySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [viewers, setViewers] = useState(47);

  useEffect(() => {
    setViewers(Math.floor(Math.random() * 15) + 40);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="buy" style={{ padding: "100px 40px", background: "linear-gradient(135deg, #1C2B3A, #243546)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div className="reveal">
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,166,35,0.15)", border: "1px solid rgba(245,166,35,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f5a623", display: "inline-block", animation: "pulseRing 1.5s infinite" }} />
            <span style={{ color: "#f5a623", fontSize: 13, fontWeight: 600 }}>{viewers} people viewing this right now</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Order Your Arc Pro Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40 }}>
            Free EU shipping. CE certified. 30-day returns.
          </p>
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(61,122,138,0.3)", borderRadius: 20, padding: "40px", marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 22, textDecoration: "line-through" }}>€249</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 700, color: "#fff", lineHeight: 1 }}>€99</span>
            </div>
            <div style={{ color: "#A6D2DC", fontSize: 14, marginBottom: 32 }}>Launch price — limited stock available</div>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 36 }}>
              {["🚚 Free EU Shipping", "↩ 30-Day Returns", "✅ CE Certified", "📦 Ships in 3–5 Days"].map((perk, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontSize: 14 }}>{perk}</div>
              ))}
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              style={{
                width: "100%", padding: "20px 40px", borderRadius: 12,
                background: loading ? "rgba(61,122,138,0.5)" : "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
                color: "#fff", fontSize: 18, fontWeight: 700, letterSpacing: "0.04em",
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                transition: "transform 0.2s, opacity 0.2s",
                animation: loading ? "none" : "pulseRing 2s ease-in-out infinite",
              }}
              onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
            >
              {loading ? "Redirecting to checkout…" : "Order Now — Secure Checkout →"}
            </button>
            <div style={{ marginTop: 16, color: "rgba(255,255,255,0.4)", fontSize: 12 }}>
              🔒 Secured by Stripe · 256-bit SSL encryption
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {[{ icon: "🏆", label: "Premium Quality" }, { icon: "🌍", label: "Ships EU-Wide" }, { icon: "💬", label: "24h Support" }].map((b, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 4 }}>{b.icon}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
