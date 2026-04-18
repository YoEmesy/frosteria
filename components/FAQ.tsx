"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  { q: "Does it actually cool the room or just feel cold briefly?", a: "Real cooling. The Arc Pro uses evaporative mist technology — ultra-fine water particles absorb heat from the air as they evaporate, dropping ambient temperature by up to 15°C. It's the same physics as why sweating cools you down." },
  { q: "Will the mist make my floor or furniture wet?", a: "No. The mist particles are fine enough that they fully evaporate before reaching surfaces more than 1–2 metres away. We've designed the output to produce a dry, refreshing cool breeze — not a spray." },
  { q: "How long does the 4L tank last on a full fill?", a: "At medium mist intensity, expect 6–10 hours of operation. At maximum mist, around 4–6 hours. The tank is transparent so you can see the level at a glance, and it refills in under 30 seconds." },
  { q: "Is it CE certified for EU use?", a: "Yes. The Frosteria Arc Pro holds full CE certification, which is required for all electrical products sold in the EU. You can request the certificate document by contacting our support." },
  { q: "What's your return policy?", a: "30-day no-questions-asked returns. If you're not satisfied for any reason, contact us within 30 days of delivery for a full refund or replacement. Return shipping is covered on our end." },
  { q: "How quickly will it arrive?", a: "Orders ship within 1–2 business days from our EU warehouse. Delivery to most European countries takes 3–5 business days. Latvia, Germany, France, Netherlands — all standard delivery zones." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="faq" style={{ padding: "100px 40px", background: "#fff" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ color: "#3D7A8A", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Got Questions?</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1C2B3A" }}>Frequently Asked</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                border: "1px solid rgba(28,43,58,0.1)", borderRadius: 12, overflow: "hidden",
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", padding: "20px 24px", background: open === i ? "#F8F6F2" : "#fff",
                  border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                  textAlign: "left", transition: "background 0.2s",
                }}
              >
                <span style={{ fontWeight: 600, color: "#1C2B3A", fontSize: 15, paddingRight: 16 }}>{faq.q}</span>
                <span style={{
                  fontSize: 22, color: "#3D7A8A", flexShrink: 0,
                  transition: "transform 0.3s ease",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}>+</span>
              </button>
              <div
                className={`faq-answer ${open === i ? "open" : ""}`}
                style={{ padding: open === i ? "0 24px 20px" : "0 24px" }}
              >
                <p style={{ color: "#555", fontSize: 14, lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
