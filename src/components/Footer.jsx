import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LanguageToggle from './LanguageToggle.jsx';
import contact from '../content/contact.json';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="footer-col footer-brand">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="32" height="32">
                <rect width="32" height="32" rx="7" fill="var(--eicher-red)" />
                <text x="16" y="20" textAnchor="middle"
                      fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif"
                      fontSize="12" fontWeight="800" fill="#fff" letterSpacing="1">TP</text>
              </svg>
            </span>
            <span className="brand-name">{t('brand.name')}</span>
          </div>
          <p className="footer-tag">{t('footer.tagline')}</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-h">{t('nav.services')}</h4>
          <ul className="footer-list">
            <li><Link to="/services">{t('services.household.name')}</Link></li>
            <li><Link to="/services">{t('services.office.name')}</Link></li>
            <li><Link to="/services">{t('services.vehicle.name')}</Link></li>
            <li><Link to="/services">{t('services.packing.name')}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-h">{t('footer.company')}</h4>
          <ul className="footer-list">
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/reviews">{t('nav.reviews')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-h">{t('footer.call')}</h4>
          <ul className="footer-list footer-contact">
            <li>
              <Phone size={14} />
              <a href={`tel:${contact.phoneE164}`}>{contact.phone}</a>
            </li>
            <li>
              <Mail size={14} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <MapPin size={14} />
              <span>{t('contact.address')}</span>
            </li>
            <li>
              <Clock size={14} />
              <span>{t('contact.hours')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer-base">
        <small>© {year} {t('brand.name')}. {t('footer.rights')}</small>
        <LanguageToggle />
      </div>
    </footer>
  );
}
