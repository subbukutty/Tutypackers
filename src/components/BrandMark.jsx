import logo from '../assets/Logo.png';

// Single source of the badge used in the header and footer — a cropped-in
// view of the same Logo.png shown full-size on the loading screen, tight on
// the ring + mascot since the wordmark inside the source image is too small
// to read at badge size.
export default function BrandMark({ size = 32, className = '' }) {
  return (
    <span
      className={`brand-mark ${className}`.trim()}
      aria-hidden="true"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.22),
        overflow: 'hidden',
        background: 'var(--eicher-red)',
      }}
    >
      <img
        src={logo}
        alt=""
        style={{
          position: 'absolute',
          width: '193%',
          height: '154%',
          left: '-46%',
          top: '-4%',
          maxWidth: 'none',
        }}
      />
    </span>
  );
}
