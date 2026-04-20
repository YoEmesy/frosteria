"use client";
import { useEffect, useRef } from "react";
import { IconWaterDrop, IconFan, IconSnowflake } from "@/components/BrandIcons";

type IconComponent = React.ComponentType<{ size?: number; color?: string }>;

const steps: { num: string; Icon: IconComponent; title: string; desc: string }[] = [
  { num: "01", Icon: IconWaterDrop, title: "Fill the 4L tank",    desc: "Pour water — or add ice cubes for extra chill. The clear cylindrical tank sits right in the base." },
  { num: "02", Icon: IconFan,       title: "Set your breeze",     desc: "Choose speed, oscillation angle, and mist intensity from the digital panel or included remote." },
  { num: "03", Icon: IconSnowflake, title: "Feel the difference", desc: "In minutes, ultra-fine mist evaporates on contact — dropping your room by up to 15°C. Silent, refreshing." },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.12 });
    sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" style={{ padding: "100px 40px", background: "#F8F6F2" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#3D7A8A", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Simple as 1 – 2 – 3</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#1C2B3A" }}>How It Works</h2>
        </div>
        <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {steps.map(({ num, Icon, title, desc }, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div style={{ position: "relative", marginBottom: 28 }}>
                {/* Step number chip */}
                <div style={{
                  position: "absolute", top: -8, left: -8,
                  width: 24, height: 24, borderRadius: "50%",
                  background: "#1C2B3A",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700, color: "#A6D2DC",
                  zIndex: 1, letterSpacing: "0.05em",
                }}>{num}</div>
                {/* Icon circle */}
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(61,122,138,0.3)",
                }}>
                  <Icon size={30} color="#fff" />
                </div>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#1C2B3A", marginBottom: 12 }}>{title}</h3>
              <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
