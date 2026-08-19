import { Truck } from 'lucide-react';

// Single source of the truck badge used in the header, footer and loading
// screen — keeps the mark identical everywhere instead of duplicating SVG.
export default function BrandMark({ size = 32, className = '' }) {
  return (
    <span
      className={`brand-mark ${className}`.trim()}
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.22),
        background: 'var(--eicher-red)',
      }}
    >
      <Truck size={Math.round(size * 0.58)} strokeWidth={2.3} color="#fff" />
    </span>
  );
}
