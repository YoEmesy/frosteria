"use client";
import { useEffect, useRef } from "react";

const features = [
  { icon: "💧", title: "4L Integrated Tank", desc: "Built-in cylindrical reservoir holds enough water for 8+ hours of continuous misting. No refill interruptions." },
  { icon: "🔇", title: "Whisper-Quiet 35dB", desc: "Library-level silence. Run it all night without disturbing your sleep or your work-from-home focus." },
  { icon: "↔", title: "70° Auto-Oscillation", desc: "Sweeps a wide arc automatically, distributing cooling mist evenly across the entire room." },
  { icon: "📱", title: "Remote Control Included", desc: "Change speed, mist, timer, and oscillation from your sofa. No getting up required." },
  { icon: "🌡", title: "Cools Up to 15°C", desc: "Evaporative mist technology drops ambient temperature dramatically — not just blowing warm air around." },
  { icon: "✅", title: "CE Certified", desc: "Fully certified for EU markets. Safe, legal, and ready to ship across Europe including Latvia, Germany, and France." },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="features" style={{ padding: "100px 40px", background: "linear-gradient(135deg, #1C2B3A 0%, #243546 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#A6D2DC", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Built Different</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#fff" }}>Why Arc Pro</h2>
        </div>
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: "32px 28px",
                transitionDelay: `${i * 0.1}s`,
                transition: "transform 0.3s ease, background 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(61,122,138,0.12)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
