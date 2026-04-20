"use client";
import { useEffect, useRef } from "react";
import { IconWaterDrop, IconQuiet, IconOscillation, IconRemote, IconCool, IconCertified } from "@/components/BrandIcons";

type IconComponent = React.ComponentType<{ size?: number; color?: string }>;

const features: { Icon: IconComponent; title: string; desc: string }[] = [
  { Icon: IconWaterDrop,   title: "4L Integrated Tank",      desc: "Built-in cylindrical reservoir holds enough water for 8+ hours of continuous misting. No refill interruptions." },
  { Icon: IconQuiet,       title: "Whisper-Quiet 35dB",      desc: "Library-level silence. Run it all night without disturbing your sleep or your work-from-home focus." },
  { Icon: IconOscillation, title: "70° Auto-Oscillation",    desc: "Sweeps a wide arc automatically, distributing cooling mist evenly across the entire room." },
  { Icon: IconRemote,      title: "Remote Control Included", desc: "Change speed, mist, timer, and oscillation from your sofa. No getting up required." },
  { Icon: IconCool,        title: "Cools Up to 15°C",        desc: "Evaporative mist technology drops ambient temperature dramatically — not just blowing warm air around." },
  { Icon: IconCertified,   title: "CE Certified",            desc: "Fully certified for EU markets. Safe, legal, and ready to ship across Europe including Latvia, Germany, and France." },
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
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: "32px 28px",
                transitionDelay: `${i * 0.1}s`,
                transition: "transform 0.3s ease, background 0.3s ease, border-color 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(61,122,138,0.12)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(166,210,220,0.25)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Brand icon container with glow */}
              <div style={{
                width: 56, height: 56, borderRadius: 14, marginBottom: 18,
                background: "linear-gradient(135deg, rgba(61,122,138,0.25), rgba(166,210,220,0.1))",
                border: "1px solid rgba(166,210,220,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 16px rgba(61,122,138,0.15)",
              }}>
                <Icon size={28} color="#A6D2DC" />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
