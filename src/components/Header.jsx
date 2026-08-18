import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle.jsx';
import { Phone } from 'lucide-react';
import contact from '../content/contact.json';
import './Header.css';

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close any mobile menu by ensuring body scroll resets when route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header-inner">
        <Link to="/" className="brand" aria-label="Tuty Packers — Home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <rect width="32" height="32" rx="7" fill="var(--eicher-red)" />
              <text x="16" y="20" textAnchor="middle"
                    fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif"
                    fontSize="12" fontWeight="800" fill="#fff" letterSpacing="1">TP</text>
            </svg>
          </span>
          <span className="brand-name">{t('brand.name')}</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>
            {t('nav.services')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>
            {t('nav.about')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>
            {t('nav.contact')}
          </NavLink>
        </nav>

        <div className="site-actions">
          <LanguageToggle />
          <a href={`tel:${contact.phoneE164}`} className="btn btn-primary btn-sm header-cta">
            <Phone size={16} strokeWidth={2.4} />
            <span className="header-cta-label">{t('common.callNow')}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
