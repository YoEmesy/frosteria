"use client";
import { useEffect, useRef } from "react";
import { FiveStars } from "@/components/BrandIcons";

const reviews = [
  {
    stars: 5,
    text: "I was skeptical about a €99 misting fan but this thing genuinely drops my living room from 34°C to around 21°C. The 4L tank lasts all day. My Dyson fan is gathering dust.",
    name: "Markus H.",
    location: "Berlin, Germany",
    tag: "Verified Purchase",
  },
  {
    stars: 5,
    text: "Setup took 2 minutes, the remote is great, and it's shockingly quiet. My baby sleeps through it. The mist is fine enough that nothing gets wet — it just cools the air.",
    name: "Sophie L.",
    location: "Lyon, France",
    tag: "Verified Purchase",
  },
  {
    stars: 5,
    text: "I bought this for my home office and it's been a game changer for summer. Much better than AC which dries the air — this actually feels refreshing. Would order again.",
    name: "Andris K.",
    location: "Riga, Latvia",
    tag: "Verified Purchase",
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="reviews" style={{ padding: "100px 40px", background: "#F8F6F2" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ color: "#3D7A8A", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Real Customers</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1C2B3A" }}>
            What People Are Saying
          </h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 16 }}>
            <FiveStars size={20} />
            <span style={{ color: "#666", fontSize: 14 }}>4.9 / 5 from 200+ reviews</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: "#fff", borderRadius: 16, padding: "32px 28px",
                boxShadow: "0 4px 24px rgba(28,43,58,0.07)",
                border: "1px solid rgba(28,43,58,0.06)",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <FiveStars size={18} style={{ marginBottom: 16 }} />
              <p style={{ color: "#444", fontSize: 15, lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>"{r.text}"</p>
              <div style={{ borderTop: "1px solid rgba(28,43,58,0.06)", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#1C2B3A", fontSize: 14 }}>{r.name}</div>
                  <div style={{ color: "#888", fontSize: 12 }}>{r.location}</div>
                </div>
                <span style={{ background: "rgba(61,122,138,0.1)", color: "#3D7A8A", fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 20 }}>{r.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
