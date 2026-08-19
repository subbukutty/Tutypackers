import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LanguageToggle from './LanguageToggle.jsx';
import BrandMark from './BrandMark.jsx';
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
            <BrandMark size={32} />
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
        <small>
          © {year} {t('brand.name')}. {t('footer.rights')}
          {' '}· Designed &amp; Developed by{' '}
          <a href="https://www.linkedin.com/in/subbukutty" target="_blank" rel="noopener noreferrer" className="footer-credit-link">
            Subbu Kutty
          </a>
        </small>
        <LanguageToggle />
      </div>
    </footer>
  );
}
