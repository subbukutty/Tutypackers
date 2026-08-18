import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import contact from '../content/contact.json';
import './CallFloating.css';

export default function CallFloating() {
  const { t } = useTranslation();
  const location = useLocation();

  // Hide on /contact where the phone is the main CTA, to avoid duplication.
  if (location.pathname === '/contact') return null;

  return (
    <a
      href={`tel:${contact.phoneE164}`}
      className="call-fab"
      aria-label={t('common.callPrimary')}
    >
      <span className="call-fab-ring" aria-hidden="true" />
      <Phone size={22} strokeWidth={2.2} />
    </a>
  );
}
