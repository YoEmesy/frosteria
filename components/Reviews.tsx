"use client";
import { useRef, useEffect } from "react";

const reviews = [
  {
    stars: 5,
    text: "Honestly did not expect this to work so well. My flat gets to like 32°C in july and this thing actually brings it down. The mist is so fine, nothing gets wet at all. Really happy with it.",
    name: "Markus Hoffmann",
    location: "Munich, Germany",
    initial: "MH",
  },
  {
    stars: 5,
    text: "I bought it for the bedroom and now i use it everywhere. The tank is big enough for the whole night without refilling. My partner was skeptical but now she wants another one for the living room.",
    name: "Sophie Renard",
    location: "Lyon, France",
    initial: "SR",
  },
  {
    stars: 4,
    text: "Very good product for the price. Setup was easy, arrived well packed. The remote is a nice touch. I would say the oscillation range could be a bit wider but overall very satisfied.",
    name: "Andris Kalniņš",
    location: "Riga, Latvia",
    initial: "AK",
  },
  {
    stars: 5,
    text: "Our house has no aircon and summers here have been brutal lately. This fan + mist combo is a lifesaver. The kids love it too. We ordered a second one for upstairs.",
    name: "Femke van der Berg",
    location: "Amsterdam, Netherlands",
    initial: "FV",
  },
  {
    stars: 5,
    text: "Bardzo dobry produkt! Works much better than I expected for this price. I was worried the mist would make things wet but it just disappear into the air. Perfect for hot evenings.",
    name: "Jakub Wiśniewski",
    location: "Warsaw, Poland",
    initial: "JW",
  },
  {
    stars: 5,
    text: "I work from home and my office gets unbearable in summer. This changed everything. It's quiet enough that I can be on calls with it running. Delivery to Stockholm was quick too.",
    name: "Erik Lindström",
    location: "Stockholm, Sweden",
    initial: "EL",
  },
  {
    stars: 5,
    text: "Fantastico! L'estate scorsa era insopportabile. Con questo ventilatore la stanza è rimasta fresca tutta la notte. La nebbia è sottilissima, niente si bagna. Lo consiglio a tutti.",
    name: "Marco Bianchi",
    location: "Milan, Italy",
    initial: "MB",
  },
  {
    stars: 5,
    text: "Arrived in 4 days to Prague. The packaging was really nice, feels like a premium product. Very quiet at low speed and the cooling effect is noticeable immediately when you turn on the mist.",
    name: "Tomáš Novák",
    location: "Prague, Czech Republic",
    initial: "TN",
  },
  {
    stars: 4,
    text: "Good fan, does what it says. The 4 litre tank is great, I only fill it once in the morning. My only small complaint is that the light on the base is a bit bright in a dark room.",
    name: "Camille Moreau",
    location: "Bordeaux, France",
    initial: "CM",
  },
  {
    stars: 5,
    text: "Been using it for 3 weeks now in my apartment in Seville. Temperatures outside have been hitting 41°C. Inside with this running it stays actually liveable. Cannot imagine summer without it now.",
    name: "Carlos Fernández",
    location: "Seville, Spain",
    initial: "CF",
  },
  {
    stars: 5,
    text: "I gifted this to my mum and she calls me every week to thank me. She is not very technical but setup was simple enough for her to do alone. The mist is gentle and the noise is very low.",
    name: "Lena Bauer",
    location: "Vienna, Austria",
    initial: "LB",
  },
  {
    stars: 5,
    text: "Really impressed. I read the reviews before buying and they were right — the temperature drop is real, not just airflow. Our living room stays cool even when it's hot outside. Great product.",
    name: "Simon Dupont",
    location: "Brussels, Belgium",
    initial: "SD",
  },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#F5A623">
      <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
    </svg>
  );
}

function ReviewCard({ r }: { r: typeof reviews[0] }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 320,
        background: "#fff",
        borderRadius: 16,
        padding: "28px 24px",
        boxShadow: "0 4px 20px rgba(28,43,58,0.07)",
        border: "1px solid rgba(28,43,58,0.06)",
        margin: "0 12px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {/* Stars */}
      <div style={{ display: "flex", gap: 3 }}>
        {Array.from({ length: r.stars }).map((_, i) => <StarIcon key={i} />)}
      </div>

      {/* Text */}
      <p style={{ color: "#444", fontSize: 14, lineHeight: 1.75, fontStyle: "italic", flexGrow: 1 }}>
        &ldquo;{r.text}&rdquo;
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(28,43,58,0.06)", paddingTop: 16 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%",
          background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 12, fontWeight: 700, flexShrink: 0,
        }}>
          {r.initial}
        </div>
        <div>
          <div style={{ fontWeight: 700, color: "#1C2B3A", fontSize: 13 }}>{r.name}</div>
          <div style={{ color: "#999", fontSize: 11, marginTop: 1 }}>{r.location}</div>
        </div>
        <span style={{
          marginLeft: "auto",
          background: "rgba(61,122,138,0.1)", color: "#3D7A8A",
          fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 20, flexShrink: 0,
        }}>
          ✓ Verified
        </span>
      </div>
    </div>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // We render 2 copies; scroll until we've moved one full copy width, then snap back
    const halfWidth = track.scrollWidth / 2;
    const SPEED = 0.45; // px per frame — slow drift

    const step = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= halfWidth) posRef.current -= halfWidth;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  const doubled = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      style={{ padding: "100px 0", background: "#F8F6F2", overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 56, padding: "0 40px" }}>
        <div style={{ color: "#3D7A8A", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          Real Customers
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#1C2B3A" }}>
          What People Are Saying
        </h2>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginTop: 14 }}>
          {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
          <span style={{ color: "#666", fontSize: 14, marginLeft: 4 }}>4.9 / 5 from 200+ reviews</span>
        </div>
      </div>

      {/* Carousel */}
      <div
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right, #F8F6F2, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left, #F8F6F2, transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div
          ref={trackRef}
          style={{
            display: "flex",
            alignItems: "stretch",
            padding: "16px 0",
            willChange: "transform",
          }}
        >
          {doubled.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
