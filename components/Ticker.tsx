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
    "✦ Ships in 3–5 Business Days",
  ];
  const repeated = [...items, ...items];

  return (
    <div style={{
      background: "linear-gradient(135deg, #1C2B3A, #243546)",
      borderTop: "1px solid rgba(61,122,138,0.3)",
      borderBottom: "1px solid rgba(61,122,138,0.3)",
      overflow: "hidden", padding: "14px 0",
    }}>
      <div className="ticker-track" style={{ display: "flex", whiteSpace: "nowrap" }}>
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
