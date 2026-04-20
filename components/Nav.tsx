"use client";
import { useEffect, useRef } from "react";

function SnowflakeSVG() {
  return (
    <svg
      width="22" height="22" viewBox="0 0 24 24"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Main cross */}
      <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      {/* Diagonals */}
      <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      {/* Top arm branches */}
      <line x1="12" y1="5" x2="9.5" y2="7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="5" x2="14.5" y2="7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Bottom arm branches */}
      <line x1="12" y1="19" x2="9.5" y2="16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="19" x2="14.5" y2="16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Left arm branches */}
      <line x1="5" y1="12" x2="7.5" y2="9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="12" x2="7.5" y2="14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Right arm branches */}
      <line x1="19" y1="12" x2="16.5" y2="9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="12" x2="16.5" y2="14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <button
        onClick={scrollToTop}
        style={{
          display: "flex", alignItems: "center", gap: 12,
          background: "none", border: "none", cursor: "pointer", padding: 0,
        }}
      >
        <div className="nav-logo logo-orbit">
          <span className="logo-snowflake">
            <SnowflakeSVG />
          </span>
        </div>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700, fontSize: 20, color: "#fff", letterSpacing: "0.02em",
        }}>Frosteria</span>
      </button>

      <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
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
