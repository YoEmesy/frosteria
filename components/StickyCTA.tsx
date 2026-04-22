"use client";
import { useEffect, useRef, useState } from "react";
import { FiveStars } from "@/components/BrandIcons";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      const buy = document.getElementById("buy");
      if (!hero || !buy) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const buyTop = buy.getBoundingClientRect().top;
      setVisible(heroBottom < 0 && buyTop > window.innerHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    <div
      className={`sticky-cta ${visible ? "visible" : ""}`}
      style={{
        background: "rgba(28,43,58,0.97)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(61,122,138,0.3)",
        padding: "16px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff", fontSize: 18 }}>Frosteria Arc Pro</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ color: "rgba(255,255,255,0.3)", textDecoration: "line-through", fontSize: 14 }}>€249</span>
          <span style={{ color: "#A6D2DC", fontWeight: 700, fontSize: 22 }}>€119</span>
        </div>
        <FiveStars size={14} />
      </div>
      <button
        onClick={handleCheckout}
        disabled={loading}
        style={{
          background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
          color: "#fff", padding: "12px 32px", borderRadius: 10,
          border: "none", cursor: loading ? "not-allowed" : "pointer",
          fontSize: 15, fontWeight: 700, letterSpacing: "0.04em",
          transition: "transform 0.2s, opacity 0.2s",
          opacity: loading ? 0.6 : 1,
        }}
        onMouseEnter={e => { if (!loading) (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
      >
        {loading ? "Loading…" : "Order Now →"}
      </button>
    </div>
  );
}
