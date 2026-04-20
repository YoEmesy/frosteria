"use client";
import { useEffect, useRef, useState } from "react";

const faqs = [
  { q: "Does it actually cool the room or just feel cold briefly?", a: "Real cooling. The Arc Pro uses evaporative mist technology — ultra-fine water particles absorb heat from the air as they evaporate, dropping ambient temperature by up to 15°C. It's the same physics as why sweating cools you down." },
  { q: "Will the mist make my floor or furniture wet?", a: "No. The mist particles are fine enough that they fully evaporate before reaching surfaces more than 1–2 metres away. We've designed the output to produce a dry, refreshing cool breeze — not a spray." },
  { q: "How long does the 4L tank last on a full fill?", a: "At medium mist intensity, expect 6–10 hours of operation. At maximum mist, around 4–6 hours. The tank is transparent so you can see the level at a glance, and it refills in under 30 seconds." },
  { q: "Is it CE certified for EU use?", a: "Yes. The Frosteria Arc Pro holds full CE certification, confirming it meets all relevant EU safety directives for electrical products. You can request the certificate document by emailing us at support@frosteria.com." },
  { q: "What is your return policy?", a: "Under EU consumer law you have 14 days from delivery to return your order for any reason, no questions asked. Items must be returned in original condition. Return shipping costs are your responsibility unless the product arrived faulty — in which case we cover everything and send a replacement or full refund." },
  { q: "What warranty does the Arc Pro come with?", a: "12 months from the date of delivery, covering manufacturing defects. If something is wrong with your unit, contact us at support@frosteria.com and we'll arrange a replacement or repair. This is on top of your statutory rights under EU consumer law." },
  { q: "How long does delivery take?", a: "Estimated delivery is 5–10 business days to all 27 EU member states. Shipping is free on every order. Once dispatched you'll receive a tracking number by email so you can follow your parcel the whole way." },
  { q: "Is my payment and personal data secure?", a: "Yes. Payments are processed by Stripe — we never see or store your card details. Your personal data (name, address, email) is used only to fulfil your order and is never sold to third parties. Full details are in our Privacy Policy." },
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
