"use client";
import { useEffect, useRef } from "react";


const rows = [
  { label: "Price",           frosteria: "€99",      shark: "€349+",    generic: "€35–60" },
  { label: "Misting System",  frosteria: "✅ Real",   shark: "✅ Real",   generic: "❌ None" },
  { label: "Tank Size",       frosteria: "✅ 4L",     shark: "⚠️ 0.9L",  generic: "❌ None" },
  { label: "Noise Level",     frosteria: "✅ 35dB",   shark: "⚠️ 45dB",  generic: "❌ 60dB+" },
  { label: "CE Certified",    frosteria: "✅ Yes",    shark: "✅ Yes",    generic: "❌ No" },
  { label: "Remote Control",  frosteria: "✅ Yes",    shark: "✅ Yes",    generic: "⚠️ Some" },
  { label: "Design Quality",  frosteria: "✅ Premium",shark: "✅ Premium",generic: "❌ Cheap" },
  { label: "Value for Money", frosteria: "✅ Best",   shark: "❌ Poor",   generic: "⚠️ OK" },
];

export default function Comparison() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "100px 40px", background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: "#3D7A8A", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Side by Side</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1C2B3A" }}>How We Compare</h2>
        </div>
        <div className="reveal" style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(28,43,58,0.12)", border: "1px solid rgba(28,43,58,0.08)" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.4fr 1.4fr 1.4fr", background: "#1C2B3A" }}>
            <div style={{ padding: "20px 24px", color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 600 }}>Feature</div>
            {["Frosteria Arc Pro", "Shark FlexBreeze", "Generic Brands"].map((col, i) => (
              <div key={i} style={{
                padding: "20px 16px", textAlign: "center", fontSize: 13, fontWeight: 700,
                color: i === 0 ? "#A6D2DC" : "rgba(255,255,255,0.6)",
                background: i === 0 ? "rgba(61,122,138,0.2)" : undefined,
                borderLeft: "1px solid rgba(255,255,255,0.06)",
              }}>{col}</div>
            ))}
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1.4fr 1.4fr 1.4fr", background: i % 2 === 0 ? "#F8F6F2" : "#fff" }}>
              <div style={{ padding: "16px 24px", color: "#1C2B3A", fontSize: 14, fontWeight: 600 }}>{row.label}</div>
              {[row.frosteria, row.shark, row.generic].map((val, j) => (
                <div key={j} style={{
                  padding: "16px", textAlign: "center", fontSize: 13,
                  color: j === 0 ? "#1C2B3A" : "#666",
                  fontWeight: j === 0 ? 700 : 400,
                  background: j === 0 ? "rgba(61,122,138,0.06)" : undefined,
                  borderLeft: j === 0 ? "2px solid #3D7A8A" : "1px solid rgba(28,43,58,0.05)",
                }}>{val}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: "center", marginTop: 28, color: "#888", fontSize: 13 }}>
          Same premium cooling — at a third of the price.
        </div>
      </div>
    </section>
  );
}
