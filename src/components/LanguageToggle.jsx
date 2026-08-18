import { useTranslation } from 'react-i18next';
import './LanguageToggle.css';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const next = i18n.language === 'en' ? 'ta' : 'en';
  const label = next === 'ta' ? 'EN' : 'தமிழ்';

  const toggle = () => {
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggle}
      className="lang-toggle"
      aria-label={`Switch language to ${label}`}
      type="button"
    >
      <span className={`lang-pill ${i18n.language === 'en' ? 'is-active-en' : ''}`}>
        EN
      </span>
      <span className="lang-divider" />
      <span className={`lang-pill ${i18n.language === 'ta' ? 'is-active-ta' : ''}`}>
        தமிழ்
      </span>
    </button>
  );
}
