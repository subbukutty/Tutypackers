import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import LanguageToggle from './LanguageToggle.jsx';
import { Phone, Menu, X } from 'lucide-react';
import contact from '../content/contact.json';
import './Header.css';

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuToggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close any mobile menu by ensuring body scroll resets when route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Move focus into the panel on open, and handle Escape-to-close + a basic
  // Tab trap so keyboard users can't tab out into hidden page content.
  useEffect(() => {
    if (!menuOpen) return;

    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(panel.querySelectorAll('a[href], button:not([disabled])'))
      : [];
    focusables[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMenuOpen(false);
        menuToggleRef.current?.focus();
        return;
      }
      if (e.key === 'Tab' && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const navItems = [
    { to: '/', key: 'nav.home', end: true },
    { to: '/services', key: 'nav.services' },
    { to: '/about', key: 'nav.about' },
    { to: '/reviews', key: 'nav.reviews' },
    { to: '/contact', key: 'nav.contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
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
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="site-actions">
          <span className="site-actions-desktop">
            <LanguageToggle />
          </span>
          <a href={`tel:${contact.phoneE164}`} className="btn btn-primary btn-sm header-cta">
            <Phone size={16} strokeWidth={2.4} />
            <span className="header-cta-label">{t('common.callNow')}</span>
          </a>
          <button
            ref={menuToggleRef}
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-panel"
            ref={panelRef}
            className="mobile-nav-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-nav-links" aria-label="Mobile">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => isActive ? 'mobile-nav-link is-active' : 'mobile-nav-link'}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.key)}
                </NavLink>
              ))}
            </nav>
            <div className="mobile-nav-foot">
              <LanguageToggle />
              <a href={`tel:${contact.phoneE164}`} className="btn btn-primary">
                <Phone size={16} strokeWidth={2.4} />
                {t('common.callNow')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
