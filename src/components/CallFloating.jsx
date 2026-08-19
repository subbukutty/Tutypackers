import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import contact from '../content/contact.json';
import './CallFloating.css';

const NEAR_BOTTOM_PX = 140;

export default function CallFloating() {
  const { t } = useTranslation();
  const location = useLocation();
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - NEAR_BOTTOM_PX;
      setNearBottom(scrolledToBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [location.pathname]);

  // Hide on /contact where the phone is the main CTA, to avoid duplication.
  if (location.pathname === '/contact') return null;

  return (
    <a
      href={`tel:${contact.phoneE164}`}
      className={`call-fab ${nearBottom ? 'is-hidden' : ''}`}
      aria-label={t('common.callPrimary')}
      tabIndex={nearBottom ? -1 : 0}
    >
      <span className="call-fab-ring" aria-hidden="true" />
      <Phone size={22} strokeWidth={2.2} />
    </a>
  );
}
