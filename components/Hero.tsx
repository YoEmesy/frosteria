"use client";
import { useEffect, useRef } from "react";
import { IconWaterDrop, IconQuiet, IconOscillation, IconSnowflake, IconCool } from "@/components/BrandIcons";

export default function Hero() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const targets = [{ el: 0, val: 4, suffix: "L" }, { el: 1, val: 35, suffix: "dB" }, { el: 2, val: 70, suffix: "°" }, { el: 3, val: 15, suffix: "°C" }];
    targets.forEach(({ el, val, suffix }) => {
      const span = counterRefs.current[el];
      if (!span) return;
      let start = 0;
      const duration = 1800;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        span.textContent = Math.round(eased * val) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      setTimeout(() => requestAnimationFrame(tick), 600 + el * 150);
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d1b27 0%, #1C2B3A 40%, #243546 70%, #1a3040 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "120px 40px 80px",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Background orbs */}
      <div className="hero-orb" style={{ position: "absolute", top: "15%", right: "8%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,122,138,0.15) 0%, transparent 70%)", animation: "mistPulse 4s ease-in-out infinite" }} />
      <div className="hero-orb" style={{ position: "absolute", bottom: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(166,210,220,0.08) 0%, transparent 70%)", animation: "mistPulse 6s ease-in-out infinite 2s" }} />

      <div className="hero-grid" style={{ maxWidth: 1200, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2 }}>

        {/* LEFT: text */}
        <div style={{ animation: "fadeUp 0.9s ease forwards" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(61,122,138,0.2)", border: "1px solid rgba(61,122,138,0.4)", borderRadius: 20, padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ fontSize: 12 }}>✦</span>
            <span style={{ color: "#A6D2DC", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Beat the Heat · Summer 2026</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 6vw, 68px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
            The Fan Your
            <br />
            <em style={{ fontStyle: "italic", color: "#A6D2DC" }}>Home Has Been</em>
            <br />
            Waiting For.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
            Real mist. Real cool. The Frosteria Arc Pro drops your room temperature by up to 15°C — silently, beautifully.
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
            {[
              { Icon: IconWaterDrop,   label: "Tank",  idx: 0 },
              { Icon: IconQuiet,       label: "Noise", idx: 1 },
              { Icon: IconOscillation, label: "Swing", idx: 2 },
              { Icon: IconSnowflake,   label: "Cools", idx: 3 },
            ].map(({ Icon, label, idx }) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(166,210,220,0.15)", borderRadius: 12, padding: "12px 20px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
                  <Icon size={22} color="#A6D2DC" />
                </div>
                <div style={{ color: "#A6D2DC", fontSize: 22, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
                  <span ref={el => { counterRefs.current[idx] = el; }}>—</span>
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href="#buy" style={{
              background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
              color: "#fff", padding: "18px 40px", borderRadius: 12,
              textDecoration: "none", fontSize: 16, fontWeight: 700,
              letterSpacing: "0.04em", animation: "pulseRing 2s ease-in-out infinite",
              transition: "transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
              Order Now — €99
            </a>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>
              Free EU shipping · CE certified
            </div>
          </div>

          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ display: "flex" }}>
              {["🇩🇪","🇫🇷","🇵🇱","🇳🇱","🇱🇻"].map(flag => <span key={flag} style={{ fontSize: 18 }}>{flag}</span>)}
            </div>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Shipping across Europe</span>
          </div>
        </div>

        {/* RIGHT: fan visual */}
        <div className="hero-fan" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
          {/* Glow */}
          <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(61,122,138,0.25) 0%, transparent 70%)", animation: "mistPulse 3s ease-in-out infinite" }} />

          {/* Fan */}
          <div style={{ position: "relative", width: 280, height: 420, animation: "float 5s ease-in-out infinite" }}>
            {/* Head */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 180, height: 180, borderRadius: "50%", background: "linear-gradient(135deg, #243546, #1C2B3A)", border: "3px solid rgba(61,122,138,0.4)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 30% 30%, rgba(166,210,220,0.15), transparent 60%)" }} />
              {/* Blades */}
              <svg width="140" height="140" viewBox="0 0 140 140" style={{ animation: "spinSlow 12s linear infinite" }}>
                <circle cx="70" cy="70" r="8" fill="#3D7A8A" />
                {[0,60,120,180,240,300].map((deg, i) => (
                  <ellipse key={i} cx="70" cy="70" rx="10" ry="38"
                    fill={`rgba(61,122,138,${0.4 + i*0.05})`}
                    transform={`rotate(${deg} 70 70) translate(0 -20)`}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                ))}
              </svg>
            </div>
            {/* Pole */}
            <div style={{ position: "absolute", top: 178, left: "50%", transform: "translateX(-50%)", width: 14, height: 120, background: "linear-gradient(to bottom, #2a3f52, #1C2B3A)", borderRadius: 7 }} />
            {/* Control panel */}
            <div style={{ position: "absolute", top: 240, left: "50%", transform: "translateX(-50%)", width: 44, height: 28, background: "linear-gradient(135deg, #2a3f52, #1C2B3A)", border: "1px solid rgba(61,122,138,0.5)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
              {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i === 1 ? "#A6D2DC" : "rgba(255,255,255,0.2)" }} />)}
            </div>
            {/* Base */}
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 160, height: 90, borderRadius: 12, background: "linear-gradient(135deg, #243546, #1C2B3A)", border: "2px solid rgba(61,122,138,0.3)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 4, borderRadius: 10, background: "rgba(61,122,138,0.05)", border: "1px solid rgba(166,210,220,0.15)" }} />
              <div style={{ position: "relative", textAlign: "center" }}>
                <div style={{ color: "#A6D2DC", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em" }}>4L TANK</div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 8 }}>Integrated · Clear</div>
              </div>
            </div>

            {/* Mist particles */}
            {[
              { left: "20%", top: "15%", size: 8, delay: "0s", dur: "3s" },
              { left: "70%", top: "10%", size: 6, delay: "0.8s", dur: "2.5s" },
              { left: "50%", top: "5%",  size: 10, delay: "1.5s", dur: "3.5s" },
              { left: "30%", top: "20%", size: 5, delay: "2s",   dur: "2.8s" },
              { left: "80%", top: "25%", size: 7, delay: "0.3s", dur: "3.2s" },
            ].map((p, i) => (
              <div key={i} style={{
                position: "absolute",
                left: p.left, top: p.top,
                width: p.size, height: p.size,
                borderRadius: "50%",
                background: "rgba(166,210,220,0.5)",
                animation: `mistFloat ${p.dur} ${p.delay} linear infinite`,
              }} />
            ))}
          </div>

          {/* Floating info badges */}
          {[
            { style: { top: "10%", right: "-5%" },   Icon: IconQuiet,     val: "35dB",   sub: "Ultra-quiet" },
            { style: { bottom: "25%", left: "-8%" },  Icon: IconWaterDrop, val: "4L",     sub: "Large tank" },
            { style: { bottom: "10%", right: "0%" },  Icon: IconSnowflake, val: "−15°C",  sub: "Temperature drop" },
          ].map((badge, i) => (
            <div key={i} style={{
              position: "absolute", ...badge.style,
              background: "rgba(28,43,58,0.9)",
              border: "1px solid rgba(61,122,138,0.4)",
              backdropFilter: "blur(12px)",
              borderRadius: 12, padding: "10px 16px",
              display: "flex", alignItems: "center", gap: 10,
              animation: `float ${4 + i}s ease-in-out infinite ${i * 0.8}s`,
            }}>
              <badge.Icon size={22} color="#A6D2DC" />
              <div>
                <div style={{ color: "#A6D2DC", fontSize: 16, fontWeight: 700 }}>{badge.val}</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.1em" }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
      </div>
    </section>
  );
}
