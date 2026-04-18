"use client";
import { useEffect, useRef } from "react";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle("scrolled", window.scrollY > 60);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        padding: "18px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(28,43,58,0.3)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16,
        }}>❄</div>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700, fontSize: 20, color: "#fff", letterSpacing: "0.02em",
        }}>Frosteria</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {["Features", "Reviews", "FAQ"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "rgba(255,255,255,0.8)", textDecoration: "none",
              fontSize: 14, fontWeight: 500, letterSpacing: "0.03em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#A6D2DC")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
          >
            {item}
          </a>
        ))}
        <a
          href="#buy"
          style={{
            background: "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
            color: "#fff", padding: "10px 22px", borderRadius: 8,
            textDecoration: "none", fontSize: 14, fontWeight: 600,
            letterSpacing: "0.03em", transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
