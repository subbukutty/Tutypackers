// Inline SVG illustrations of common truck body configurations.
// Stroke-driven, no raster assets — keeps the bundle tiny and the lines crisp.

const baseProps = {
  width: '100%',
  viewBox: '0 0 240 120',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
};

export function TruckOpen({ accent = 'var(--eicher-red)' }) {
  return (
    <svg {...baseProps}>
      {/* Cab */}
      <rect x="14" y="40" width="56" height="46" rx="3" fill="#fff" stroke="var(--ink)" strokeWidth="2"/>
      <rect x="22" y="48" width="22" height="18" rx="2" fill="var(--ink-soft)"/>
      <line x1="48" y1="48" x2="48" y2="66" stroke="#fff" strokeWidth="1.5"/>
      {/* Open flatbed rails */}
      <rect x="70" y="46" width="120" height="40" stroke={accent} strokeWidth="2" fill="#fdfaf3"/>
      {/* Tarpaulin sheet draped over the load, cinched down at the sides */}
      <path
        d="M76,46 C80,24 92,14 100,14 C104,14 106,18 108,24 C110,16 118,8 128,8 C140,8 146,16 146,24 C150,16 160,14 166,14 C176,14 182,24 184,46 Z"
        fill="#EAE0C8" stroke={accent} strokeWidth="2" strokeLinejoin="round"
      />
      {/* Fold lines for fabric texture */}
      <path d="M92,40 C96,28 104,20 110,18" fill="none" stroke={accent} strokeWidth="1" opacity=".3"/>
      <path d="M130,38 C134,26 142,18 150,16" fill="none" stroke={accent} strokeWidth="1" opacity=".3"/>
      {/* Rope lacing cinching the sheet to the flatbed */}
      <path
        d="M76,86 L88,46 L100,86 L112,46 L124,86 L136,46 L148,86 L160,46 L172,86 L184,46"
        fill="none" stroke="var(--ink)" strokeWidth="1.2" opacity=".35"
      />
      {/* Wheels */}
      <circle cx="32" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="32" cy="92" r="4" fill="#fff"/>
      <circle cx="90" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="90" cy="92" r="4" fill="#fff"/>
      <circle cx="170" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="170" cy="92" r="4" fill="#fff"/>
      {/* Brand strip */}
      <rect x="14" y="80" width="56" height="3" fill={accent}/>
    </svg>
  );
}

export function TruckClosed({ accent = 'var(--eicher-red)' }) {
  return (
    <svg {...baseProps}>
      {/* Cab */}
      <rect x="14" y="40" width="56" height="46" rx="3" fill="#fff" stroke="var(--ink)" strokeWidth="2"/>
      <rect x="22" y="48" width="22" height="18" rx="2" fill="var(--ink-soft)"/>
      <line x1="48" y1="48" x2="48" y2="66" stroke="#fff" strokeWidth="1.5"/>
      {/* Closed container */}
      <rect x="70" y="22" width="120" height="64" rx="2" fill="#fff" stroke={accent} strokeWidth="2"/>
      <line x1="70" y1="36" x2="190" y2="36" stroke={accent} strokeWidth="1" opacity=".4"/>
      <line x1="70" y1="54" x2="190" y2="54" stroke={accent} strokeWidth="1" opacity=".4"/>
      <line x1="70" y1="72" x2="190" y2="72" stroke={accent} strokeWidth="1" opacity=".4"/>
      {/* Rear door */}
      <rect x="184" y="22" width="6" height="64" fill={accent} opacity=".15"/>
      {/* Wheels */}
      <circle cx="32" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="32" cy="92" r="4" fill="#fff"/>
      <circle cx="90" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="90" cy="92" r="4" fill="#fff"/>
      <circle cx="170" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="170" cy="92" r="4" fill="#fff"/>
      <rect x="14" y="80" width="56" height="3" fill={accent}/>
    </svg>
  );
}

export function TruckContainer({ accent = 'var(--eicher-red)' }) {
  return (
    <svg {...baseProps}>
      {/* Cab */}
      <rect x="14" y="40" width="56" height="46" rx="3" fill="#fff" stroke="var(--ink)" strokeWidth="2"/>
      <rect x="22" y="48" width="22" height="18" rx="2" fill="var(--ink-soft)"/>
      <line x1="48" y1="48" x2="48" y2="66" stroke="#fff" strokeWidth="1.5"/>
      {/* Container body */}
      <rect x="70" y="22" width="120" height="64" rx="2" fill="#fff" stroke={accent} strokeWidth="2"/>
      {/* Corrugation lines */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={i} x1={80 + i * 14} y1="22" x2={80 + i * 14} y2="86"
              stroke={accent} strokeWidth="1" opacity=".35"/>
      ))}
      {/* Top tarpaulin peak */}
      <path d="M70 22 L130 8 L190 22 Z" fill={accent} opacity=".85"/>
      <line x1="70" y1="22" x2="190" y2="22" stroke={accent} strokeWidth="2"/>
      {/* Wheels */}
      <circle cx="32" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="32" cy="92" r="4" fill="#fff"/>
      <circle cx="90" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="90" cy="92" r="4" fill="#fff"/>
      <circle cx="170" cy="92" r="10" fill="#1a1a1a"/>
      <circle cx="170" cy="92" r="4" fill="#fff"/>
      <rect x="14" y="80" width="56" height="3" fill={accent}/>
    </svg>
  );
}

export function HeroTruck({ className }) {
  // A larger, more composed illustration for the hero.
  return (
    <svg viewBox="0 0 600 320" className={className}
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F7F4EE" />
          <stop offset="100%" stopColor="#EFEAE0" />
        </linearGradient>
        <linearGradient id="redGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#C8102E"/>
          <stop offset="100%" stopColor="#8B0A1F"/>
        </linearGradient>
      </defs>
      {/* sky / ground */}
      <rect width="600" height="320" fill="url(#bg)"/>
      <rect y="240" width="600" height="80" fill="#E5DFD3"/>
      <line x1="0" y1="240" x2="600" y2="240" stroke="#D7D0C2"/>

      {/* far truck */}
      <g opacity="0.35" transform="translate(80 130)">
        <rect x="0" y="0" width="80" height="60" rx="3" fill="#fff" stroke="#1a1a1a" strokeWidth="2"/>
        <rect x="86" y="-40" width="200" height="100" rx="3" fill="#fff" stroke="#C8102E" strokeWidth="3"/>
        <circle cx="20" cy="74" r="14" fill="#1a1a1a"/>
        <circle cx="20" cy="74" r="6" fill="#fff"/>
        <circle cx="240" cy="74" r="14" fill="#1a1a1a"/>
        <circle cx="240" cy="74" r="6" fill="#fff"/>
      </g>

      {/* main truck */}
      <g transform="translate(220 110)">
        {/* cab */}
        <rect x="0" y="30" width="90" height="80" rx="4" fill="#fff" stroke="#1a1a1a" strokeWidth="3"/>
        <rect x="12" y="44" width="34" height="32" rx="3" fill="#1a1a1a"/>
        <line x1="46" y1="44" x2="46" y2="76" stroke="#fff" strokeWidth="2"/>
        <rect x="0" y="98" width="90" height="6" fill="url(#redGrad)"/>

        {/* container */}
        <rect x="90" y="0" width="280" height="110" rx="3" fill="#fff" stroke="#C8102E" strokeWidth="3"/>
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(i => (
          <line key={i} x1={104 + i * 14} y1="0" x2={104 + i * 14} y2="110"
                stroke="#C8102E" strokeWidth="1.5" opacity=".35"/>
        ))}
        {/* top peak */}
        <path d="M90 0 L230 -18 L370 0 Z" fill="url(#redGrad)"/>
        <line x1="90" y1="0" x2="370" y2="0" stroke="#8B0A1F" strokeWidth="3"/>

        {/* brand */}
        <text x="230" y="64" textAnchor="middle" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif"
              fontSize="22" fontWeight="800" fill="#C8102E" letterSpacing="1">TUTY PACKERS</text>

        {/* wheels */}
        <circle cx="22" cy="124" r="16" fill="#1a1a1a"/>
        <circle cx="22" cy="124" r="6" fill="#fff"/>
        <circle cx="64" cy="124" r="16" fill="#1a1a1a"/>
        <circle cx="64" cy="124" r="6" fill="#fff"/>
        <circle cx="240" cy="124" r="16" fill="#1a1a1a"/>
        <circle cx="240" cy="124" r="6" fill="#fff"/>
        <circle cx="320" cy="124" r="16" fill="#1a1a1a"/>
        <circle cx="320" cy="124" r="6" fill="#fff"/>
      </g>
    </svg>
  );
}
