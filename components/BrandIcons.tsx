// Custom SVG brand icon set — Frosteria palette, no emojis

type IconProps = { size?: number; color?: string; className?: string; style?: React.CSSProperties };

const C  = "#A6D2DC";  // mist (default)
const C2 = "#3D7A8A";  // teal accent

/** ❄ Snowflake — brand-signature hexagonal */
export function IconSnowflake({ size = 28, color = C, style }: IconProps) {
  const s = size, cx = s / 2, r = s * 0.44, br = r * 0.23, bOff = [0.4, 0.72];
  const arms = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i;
    const ax = cx + Math.cos(a) * r, ay = cx + Math.sin(a) * r;
    const barbs = bOff.flatMap(d => {
      const bx = cx + Math.cos(a) * r * d, by = cx + Math.sin(a) * r * d;
      return [50, -50].map(deg => {
        const ba = a + (deg * Math.PI) / 180;
        return `M${bx},${by}L${bx + Math.cos(ba) * br},${by + Math.sin(ba) * br}`;
      });
    });
    return { main: `M${cx},${cx}L${ax},${ay}`, barbs };
  });
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" style={style}>
      {arms.map((arm, i) => (
        <g key={i}>
          <path d={arm.main} stroke={color} strokeWidth={s * 0.065} strokeLinecap="round" />
          {arm.barbs.map((b, j) => (
            <path key={j} d={b} stroke={color} strokeWidth={s * 0.048} strokeLinecap="round" />
          ))}
        </g>
      ))}
      <circle cx={cx} cy={cx} r={s * 0.07} fill={color} />
    </svg>
  );
}

/** 💧 Water drop / tank */
export function IconWaterDrop({ size = 28, color = C, style }: IconProps) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none" style={style}>
      {/* Drop shape */}
      <path
        d="M14 3 C14 3 5 13 5 18 a9 9 0 0 0 18 0 C23 13 14 3 14 3Z"
        stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none"
      />
      {/* Water fill line */}
      <path d="M7.5 20 Q14 17.5 20.5 20" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Highlight */}
      <path d="M10 15 Q11.5 11 13 10" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      {/* Level tick */}
      <line x1="5" y1="18" x2="7" y2="18" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/** 🔇 Sound muted / quiet */
export function IconQuiet({ size = 28, color = C, style }: IconProps) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none" style={style}>
      {/* Speaker body */}
      <path d="M4 10.5 L4 17.5 L8 17.5 L14 22 L14 6 L8 10.5 Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      {/* First wave */}
      <path d="M17.5 10.5 Q20 14 17.5 17.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Small second wave */}
      <path d="M20.5 8 Q24.5 14 20.5 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Quiet indicator — horizontal dash */}
      <line x1="16" y1="24" x2="25" y2="24" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <text x="18" y="24.5" fontSize="5" fill={color} opacity="0.7" fontFamily="sans-serif">35dB</text>
    </svg>
  );
}

/** ↔ Oscillation sweep arc */
export function IconOscillation({ size = 28, color = C, style }: IconProps) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none" style={style}>
      {/* Left arc sweep */}
      <path d="M5 22 Q3 14 8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Right arc sweep */}
      <path d="M23 22 Q25 14 20 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Fan head */}
      <circle cx="14" cy="19" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      {/* Fan blades (simplified) */}
      <line x1="14" y1="19" x2="14" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="19" x2="8"  y2="13" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      <line x1="14" y1="19" x2="20" y2="13" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Arrow tips */}
      <path d="M4 9 L8 8 L7 12" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <path d="M24 9 L20 8 L21 12" stroke={color} strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/** 📱 Remote control */
export function IconRemote({ size = 28, color = C, style }: IconProps) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none" style={style}>
      {/* Remote body */}
      <rect x="8" y="3" width="12" height="22" rx="4" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Display */}
      <rect x="10.5" y="5.5" width="7" height="4" rx="1.5" stroke={color} strokeWidth="1.1" fill="none" opacity="0.6" />
      {/* Buttons row 1 */}
      <circle cx="12" cy="14" r="1.5" fill={color} opacity="0.7" />
      <circle cx="16" cy="14" r="1.5" fill={color} opacity="0.7" />
      {/* Buttons row 2 */}
      <circle cx="12" cy="18.5" r="1.5" fill={color} opacity="0.5" />
      <circle cx="16" cy="18.5" r="1.5" fill={color} opacity="0.5" />
      {/* Signal dots */}
      <circle cx="14" cy="2.5" r="0.7" fill={color} opacity="0.4" />
    </svg>
  );
}

/** 🌡 Temperature / cooling */
export function IconCool({ size = 28, color = C, style }: IconProps) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none" style={style}>
      {/* Thermometer tube */}
      <rect x="12" y="3" width="4" height="16" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Bulb */}
      <circle cx="14" cy="21" r="4" stroke={color} strokeWidth="1.5" fill="none" />
      {/* Fill (low = cold = teal) */}
      <rect x="12.8" y="14" width="2.4" height="7" fill={color} opacity="0.5" />
      <circle cx="14" cy="21" r="2.5" fill={color} opacity="0.5" />
      {/* Snowflake accent right */}
      <text x="19" y="10" fontSize="7" fill={color} opacity="0.6">❄</text>
      {/* Tick marks */}
      <line x1="16" y1="6"  x2="18" y2="6"  stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.5" />
      <line x1="16" y1="9"  x2="17.5" y2="9"  stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
      <line x1="16" y1="12" x2="17.5" y2="12" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/** ✅ CE Shield certified */
export function IconCertified({ size = 28, color = C, style }: IconProps) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none" style={style}>
      {/* Shield */}
      <path d="M14 3 L24 7 L24 14 C24 20 14 25 14 25 C14 25 4 20 4 14 L4 7 Z"
        stroke={color} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      {/* Inner glow shield */}
      <path d="M14 6 L21 9 L21 14 C21 18.5 14 22.5 14 22.5 C14 22.5 7 18.5 7 14 L7 9 Z"
        stroke={color} strokeWidth="0.8" strokeLinejoin="round" fill="none" opacity="0.35" />
      {/* CE text */}
      <text x="8.5" y="16.5" fontSize="7" fontWeight="bold" fill={color} fontFamily="sans-serif" letterSpacing="-0.5">CE</text>
    </svg>
  );
}

/** 🌊 Mist / breeze waves */
export function IconMist({ size = 28, color = C, style }: IconProps) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none" style={style}>
      <path d="M4 9 Q7 6 10 9 Q13 12 16 9 Q19 6 22 9 Q24 11 24 9"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M4 14 Q7 11 10 14 Q13 17 16 14 Q19 11 22 14 Q24 16 24 14"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M4 19 Q7 16 10 19 Q13 22 16 19 Q19 16 22 19 Q24 21 24 19"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.45" />
    </svg>
  );
}

/** Fan blade / settings dial */
export function IconFan({ size = 28, color = C, style }: IconProps) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 28 28" fill="none" style={style}>
      {/* Outer ring */}
      <circle cx="14" cy="14" r="11" stroke={color} strokeWidth="1.4" fill="none" opacity="0.3" />
      {/* 4 blades */}
      {[0, 90, 180, 270].map(deg => {
        const rad = (deg * Math.PI) / 180;
        const cx1 = 14 + Math.cos(rad) * 3, cy1 = 14 + Math.sin(rad) * 3;
        const cx2 = 14 + Math.cos(rad + Math.PI / 4) * 9;
        const cy2 = 14 + Math.sin(rad + Math.PI / 4) * 9;
        const ex  = 14 + Math.cos(rad) * 10, ey = 14 + Math.sin(rad) * 10;
        return (
          <path key={deg}
            d={`M${cx1},${cy1} Q${cx2},${cy2} ${ex},${ey}`}
            stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"
          />
        );
      })}
      {/* Center hub */}
      <circle cx="14" cy="14" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      <circle cx="14" cy="14" r="0.8" fill={color} />
    </svg>
  );
}

/** ★ Single brand star */
export function IconStar({ size = 18, color = "#f5c842", style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" style={style}>
      <path
        d="M9 2 L10.8 7H16L11.6 10.2 13.4 15 9 11.8 4.6 15 6.4 10.2 2 7H7.2Z"
        fill={color}
        stroke={color}
        strokeWidth="0.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Five star row */
export function FiveStars({ size = 18, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <div style={{ display: "flex", gap: 2, alignItems: "center", ...style }}>
      {[0,1,2,3,4].map(i => <IconStar key={i} size={size} />)}
    </div>
  );
}
