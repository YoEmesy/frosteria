export default function Ticker() {
  const items = [
    "✦ CE Certified for EU",
    "✦ Free Shipping Across Europe",
    "✦ 4L Integrated Water Tank",
    "✦ Ultra-Quiet 35dB Operation",
    "✦ 70° Auto-Oscillation",
    "✦ Cools Up To 15°C",
    "✦ 14-Day Returns",
    "✦ 1-Year Warranty",
    "✦ Ships in 5–10 Business Days",
  ];
  const repeated = [...items, ...items];

  return (
    <div style={{
      position: "relative",
      background: "linear-gradient(135deg, #1C2B3A, #243546)",
      borderTop: "1px solid rgba(61,122,138,0.3)",
      borderBottom: "1px solid rgba(61,122,138,0.3)",
      overflow: "hidden", padding: "14px 0",
    }}>
      {/* Moving ice-crystal pattern overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23A6D2DC' stroke-width='0.6'%3E%3Cline x1='40' y1='4' x2='40' y2='76'/%3E%3Cline x1='4' y1='40' x2='76' y2='40'/%3E%3Cline x1='11.5' y1='11.5' x2='68.5' y2='68.5'/%3E%3Cline x1='68.5' y1='11.5' x2='11.5' y2='68.5'/%3E%3Cline x1='40' y1='10' x2='34' y2='16'/%3E%3Cline x1='40' y1='10' x2='46' y2='16'/%3E%3Cline x1='40' y1='70' x2='34' y2='64'/%3E%3Cline x1='40' y1='70' x2='46' y2='64'/%3E%3Cline x1='10' y1='40' x2='16' y2='34'/%3E%3Cline x1='10' y1='40' x2='16' y2='46'/%3E%3Cline x1='70' y1='40' x2='64' y2='34'/%3E%3Cline x1='70' y1='40' x2='64' y2='46'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "80px 80px",
        opacity: 0.07,
        animation: "tickerPatternDrift 18s linear infinite",
        pointerEvents: "none",
      }} />

      <div className="ticker-track" style={{ display: "flex", whiteSpace: "nowrap", position: "relative", zIndex: 1 }}>
        {repeated.map((item, i) => (
          <span key={i} style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 13, fontWeight: 500, letterSpacing: "0.05em",
            padding: "0 40px",
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
