"use client";
import { useEffect, useRef } from "react";

type Status = "good" | "warn" | "bad" | "price";

interface Cell {
  status: Status;
  text: string;
}

const rows: { label: string; sub?: string; frosteria: Cell; shark: Cell; generic: Cell }[] = [
  {
    label: "Price",
    frosteria: { status: "price", text: "€119" },
    shark:     { status: "price", text: "€349+" },
    generic:   { status: "price", text: "€35–60" },
  },
  {
    label: "Misting System",
    sub: "Real water mist cooling",
    frosteria: { status: "good", text: "Real Mist" },
    shark:     { status: "good", text: "Real Mist" },
    generic:   { status: "bad",  text: "None" },
  },
  {
    label: "Tank Capacity",
    sub: "Hours without refill",
    frosteria: { status: "good", text: "4L Tank" },
    shark:     { status: "warn", text: "0.9L" },
    generic:   { status: "bad",  text: "None" },
  },
  {
    label: "Noise Level",
    sub: "Lower is better",
    frosteria: { status: "good", text: "35 dB" },
    shark:     { status: "warn", text: "45 dB" },
    generic:   { status: "bad",  text: "60 dB+" },
  },
  {
    label: "CE Certified",
    sub: "EU safety standard",
    frosteria: { status: "good", text: "Certified" },
    shark:     { status: "good", text: "Certified" },
    generic:   { status: "bad",  text: "Unknown" },
  },
  {
    label: "Remote Control",
    sub: "Full wireless control",
    frosteria: { status: "good", text: "Included" },
    shark:     { status: "good", text: "Included" },
    generic:   { status: "warn", text: "Some Only" },
  },
  {
    label: "Build Quality",
    sub: "Materials & finish",
    frosteria: { status: "good", text: "Premium" },
    shark:     { status: "good", text: "Premium" },
    generic:   { status: "bad",  text: "Cheap" },
  },
  {
    label: "Value for Money",
    sub: "Best bang for buck",
    frosteria: { status: "good", text: "Excellent" },
    shark:     { status: "bad",  text: "Poor" },
    generic:   { status: "warn", text: "Average" },
  },
];

function BadgeIcon({ status }: { status: Status }) {
  if (status === "price") return null;

  if (status === "good") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="10" cy="10" r="9" fill="rgba(61,138,95,0.12)" stroke="rgba(61,138,95,0.3)" strokeWidth="1.2" />
        <path d="M6 10.5l2.8 2.8 5.2-5.6" stroke="#2e8a57" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (status === "warn") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="10" cy="10" r="9" fill="rgba(200,140,40,0.1)" stroke="rgba(200,140,40,0.3)" strokeWidth="1.2" />
        <path d="M10 6.5v4.5" stroke="#b87a00" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="14" r="1" fill="#b87a00" />
      </svg>
    );
  }

  // bad
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" fill="rgba(180,50,50,0.08)" stroke="rgba(180,50,50,0.25)" strokeWidth="1.2" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#b83232" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const statusColors: Record<Status, { text: string }> = {
  good:  { text: "#1C2B3A" },
  warn:  { text: "#7a5500" },
  bad:   { text: "#9e2e2e" },
  price: { text: "#1C2B3A" },
};

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
    <section ref={sectionRef} style={{ padding: "100px 40px", background: "#F8F6F2" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Heading */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: "#3D7A8A", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
            Side by Side
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1C2B3A", marginBottom: 16 }}>
            How We Compare
          </h2>
          <p style={{ color: "#666", fontSize: 15, maxWidth: 480, margin: "0 auto" }}>
            Premium cooling performance — without the premium price tag.
          </p>
        </div>

        {/* Table */}
        <div className="comparison-scroll">
          <div className="reveal" style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(28,43,58,0.13)", border: "1px solid rgba(28,43,58,0.08)", background: "#fff" }}>

            {/* Column header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.5fr 1.5fr" }}>
              {/* Feature label */}
              <div style={{ padding: "22px 28px", background: "#1C2B3A", borderRadius: "24px 0 0 0" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Feature</span>
              </div>

              {/* Frosteria — winner column */}
              <div style={{ padding: "22px 16px", background: "linear-gradient(135deg, #2a4f5e, #1C3A4A)", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #3D7A8A, #A6D2DC)" }} />
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A6D2DC", marginBottom: 4 }}>Our Pick</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "#fff" }}>Frosteria Arc Pro</div>
              </div>

              {/* Shark */}
              <div style={{ padding: "22px 16px", background: "#1C2B3A", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Competitor</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Shark FlexBreeze</div>
              </div>

              {/* Generic */}
              <div style={{ padding: "22px 16px", background: "#1C2B3A", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.06)", borderRadius: "0 24px 0 0" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Budget</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Generic Brands</div>
              </div>
            </div>

            {/* Data rows */}
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1.5fr 1.5fr 1.5fr",
                    background: isEven ? "#fff" : "#FAFAF8",
                    borderTop: "1px solid rgba(28,43,58,0.055)",
                    ...(isLast ? { borderRadius: "0 0 24px 24px" } : {}),
                  }}
                >
                  {/* Label */}
                  <div style={{ padding: "18px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <span style={{ color: "#1C2B3A", fontSize: 14, fontWeight: 700 }}>{row.label}</span>
                    {row.sub && <span style={{ color: "#aaa", fontSize: 11, marginTop: 2 }}>{row.sub}</span>}
                  </div>

                  {/* Frosteria — winner */}
                  {[row.frosteria, row.shark, row.generic].map((cell, j) => {
                    const isFrosteria = j === 0;
                    const color = statusColors[cell.status].text;
                    const isPrice = cell.status === "price";
                    return (
                      <div
                        key={j}
                        style={{
                          padding: "18px 16px",
                          textAlign: "center",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 7,
                          borderLeft: isFrosteria
                            ? "2px solid rgba(61,122,138,0.35)"
                            : "1px solid rgba(28,43,58,0.05)",
                          background: isFrosteria ? "rgba(61,122,138,0.05)" : undefined,
                          ...(isLast && j === 0 ? { borderRadius: "0 0 0 0" } : {}),
                          ...(isLast && j === 2 ? { borderRadius: "0 0 24px 0" } : {}),
                        }}
                      >
                        {!isPrice && <BadgeIcon status={cell.status} />}
                        <span style={{
                          fontSize: isPrice ? 17 : 13,
                          fontWeight: isFrosteria ? 700 : (isPrice ? 600 : 500),
                          color: isFrosteria
                            ? (isPrice ? "#3D7A8A" : color)
                            : (isPrice ? "#666" : color),
                          fontFamily: isPrice ? "'Playfair Display', serif" : undefined,
                        }}>
                          {cell.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* Win badge */}
        <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(61,122,138,0.1)", border: "1px solid rgba(61,122,138,0.25)",
            borderRadius: 40, padding: "10px 24px",
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.9 3.8 4.2.6-3 2.9.7 4.2L8 10.4l-3.8 2 .7-4.2-3-2.9 4.2-.6L8 1z" fill="#3D7A8A" />
            </svg>
            <span style={{ color: "#3D7A8A", fontSize: 13, fontWeight: 600 }}>
              Same premium cooling — at a third of the price
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
