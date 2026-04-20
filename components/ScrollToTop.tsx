"use client";
import { useEffect, useState } from "react";

function SnowflakeSVG({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
      <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="5" x2="9.5" y2="7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="5" x2="14.5" y2="7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="19" x2="9.5" y2="16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="19" x2="14.5" y2="16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="12" x2="7.5" y2="9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5" y1="12" x2="7.5" y2="14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="12" x2="16.5" y2="9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="19" y1="12" x2="16.5" y2="14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      style={{
        position: "fixed",
        bottom: 90,
        right: 24,
        zIndex: 997,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s ease",
        animation: "scrollBtnFloat 3s ease-in-out infinite",
      }}
    >
      <button
        onClick={scrollToTop}
        className="scroll-top-btn"
        aria-label="Back to top"
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "rgba(13,27,39,0.38)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1.5px solid rgba(166,210,220,0.35)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxShadow: "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(61,122,138,0.35)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(166,210,220,0.75)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 22px rgba(166,210,220,0.35), 0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.12)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(13,27,39,0.38)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(166,210,220,0.35)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)";
        }}
      >
        {/* Orbiting snowflake */}
        <div className="scroll-top-orbit">
          <SnowflakeSVG size={10} />
        </div>

        {/* Up arrow */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
          <path d="M12 19V5" stroke="#A6D2DC" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M5 12l7-7 7 7" stroke="#A6D2DC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
