"use client";
import { useState, useEffect } from "react";

function SnowflakeSVG({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
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

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Use localStorage with 7-day expiry so it resets for returning visitors
    const POPUP_KEY = "frosteria_popup_v2";
    const dismissedAt = localStorage.getItem(POPUP_KEY);
    if (dismissedAt) {
      const daysSince = (Date.now() - parseInt(dismissedAt)) / (1000 * 60 * 60 * 24);
      if (daysSince < 7) return;
    }

    // Show after 8 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 8000);

    // Also show on exit intent (mouse leaves top of page)
    const handleMouseOut = (e: MouseEvent) => {
      const key = "frosteria_popup_v2";
      const d = localStorage.getItem(key);
      if (e.clientY <= 5 && !d) {
        setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseOut);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    localStorage.setItem("frosteria_popup_v2", Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => dismiss(), 2800);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!visible || dismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)",
          zIndex: 9000, backdropFilter: "blur(4px)",
          animation: "fadeIn 0.3s ease",
        }}
      />

      {/* Modal */}
      <div style={{
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 9001, width: "min(520px, 92vw)",
        background: "linear-gradient(145deg, #0d1b27 0%, #102030 100%)",
        border: "1px solid rgba(166,210,220,0.18)",
        borderRadius: 20, overflow: "hidden",
        boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(166,210,220,0.08)",
        animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {/* Top ice gradient bar */}
        <div style={{ height: 4, background: "linear-gradient(90deg, #3D7A8A, #A6D2DC, #3D7A8A)" }} />

        {/* Close button */}
        <button
          onClick={dismiss}
          style={{
            position: "absolute", top: 16, right: 16,
            background: "rgba(255,255,255,0.06)", border: "none",
            color: "rgba(255,255,255,0.5)", width: 32, height: 32,
            borderRadius: "50%", cursor: "pointer", fontSize: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)"; }}
        >×</button>

        <div style={{ padding: "40px 44px 44px" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#fff", marginBottom: 12 }}>
                You&apos;re in!
              </div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.6 }}>
                Check your inbox — your exclusive discount code is on its way.
              </p>
            </div>
          ) : (
            <>
              {/* Snowflake icon */}
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <div className="logo-orbit" style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "linear-gradient(135deg, #3D7A8A22, #A6D2DC22)",
                  border: "1px solid rgba(166,210,220,0.2)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 30,
                }}>
                  <span className="logo-snowflake"><SnowflakeSVG size={30} /></span>
                </div>
              </div>

              <div style={{ textAlign: "center", marginBottom: 28 }}>
                <div style={{
                  display: "inline-block", background: "rgba(166,210,220,0.1)",
                  border: "1px solid rgba(166,210,220,0.2)", borderRadius: 100,
                  padding: "5px 16px", fontSize: 12, color: "#A6D2DC",
                  letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
                  marginBottom: 16,
                }}>Limited time offer</div>

                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 30, fontWeight: 700, color: "#fff",
                  margin: "0 0 12px", lineHeight: 1.2,
                }}>
                  Get <span style={{ color: "#A6D2DC" }}>10% off</span> your<br />first order
                </h2>

                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                  Join 2,400+ homes already staying cool with Frosteria.<br />
                  Unsubscribe any time.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                      width: "100%", padding: "14px 18px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(166,210,220,0.2)",
                      borderRadius: 12, color: "#fff", fontSize: 15,
                      outline: "none", boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={e => (e.target.style.borderColor = "rgba(166,210,220,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(166,210,220,0.2)")}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      width: "100%", padding: "14px 18px",
                      background: status === "loading"
                        ? "rgba(166,210,220,0.4)"
                        : "linear-gradient(135deg, #3D7A8A, #A6D2DC)",
                      border: "none", borderRadius: 12,
                      color: "#0d1b27", fontWeight: 700, fontSize: 15,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      transition: "opacity 0.2s", letterSpacing: "0.02em",
                    }}
                  >
                    {status === "loading" ? "Sending..." : "Claim My 10% Discount →"}
                  </button>
                </div>
                {status === "error" && (
                  <p style={{ color: "#ff6b6b", fontSize: 13, textAlign: "center", marginTop: 10 }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>

              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, textAlign: "center", marginTop: 16 }}>
                🔒 No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.92) }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1) }
        }
      `}</style>
    </>
  );
}
