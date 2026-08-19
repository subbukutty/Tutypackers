import { useTranslation } from 'react-i18next';
import logo from '../assets/Logo.png';

const NATURAL_RATIO = 524 / 656;

// Shown at full size on the loading screen — includes its own baked-in
// "Thoothukudi Packers" wordmark, so no separate text overlay is needed.
export default function LoadingArt({ size = 220 }) {
  const { t } = useTranslation();
  return (
    <img
      src={logo}
      alt={t('loader.name')}
      width={size}
      height={Math.round(size * NATURAL_RATIO)}
      style={{ display: 'block', width: size, height: 'auto' }}
    />
  );
}
