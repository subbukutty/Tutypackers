import { useTranslation } from 'react-i18next';
import { Phone, MessageCircle, Mail, MapPin, Clock, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import SectionReveal from '../components/SectionReveal.jsx';
import contact from '../content/contact.json';
import './Subpage.css';

export default function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(contact.phoneE164);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionReveal>
            <span className="eyebrow">{t('nav.contact')}</span>
            <h1 className="subpage-title">{t('contact.title')}</h1>
            <p className="subpage-sub">{t('contact.subtitle')}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionReveal>
            <div className="contact-call card">
              <span className="contact-label">{t('contact.primaryLabel')}</span>
              <a href={`tel:${contact.phoneE164}`} className="contact-number">
                <span className="contact-number-ring" aria-hidden="true" />
                <span className="contact-number-text">{contact.phone}</span>
              </a>
              <p className="contact-hint">{t('contact.primaryHint')}</p>
              <button type="button" className="btn btn-secondary btn-sm" onClick={copyNumber}>
                {copied ? <><Check size={14} strokeWidth={2.4} /> Copied</> : <><Copy size={14} strokeWidth={2.4} /> Copy number</>}
              </button>
            </div>
          </SectionReveal>

          <div className="contact-grid">
            <SectionReveal delay={0.05}>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="card contact-channel">
                <span className="contact-channel-icon"><MessageCircle size={22} /></span>
                <div>
                  <span className="contact-channel-label">{t('contact.whatsappLabel')}</span>
                  <strong>{t('contact.whatsapp')}</strong>
                </div>
              </a>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="card contact-channel">
                <span className="contact-channel-icon"><Phone size={22} /></span>
                <div>
                  <span className="contact-channel-label">{t('footer.call')}</span>
                  <strong>{contact.phone}</strong>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="card contact-channel">
                <span className="contact-channel-icon"><Clock size={22} /></span>
                <div>
                  <span className="contact-channel-label">{t('contact.hoursLabel')}</span>
                  <strong>{t('contact.hours')}</strong>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="card contact-channel">
                <span className="contact-channel-icon"><MapPin size={22} /></span>
                <div>
                  <span className="contact-channel-label">{t('contact.addressLabel')}</span>
                  <strong>{t('contact.address')}</strong>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <a href={`mailto:${contact.email}`} className="card contact-channel contact-channel-wide">
                <span className="contact-channel-icon"><Mail size={22} /></span>
                <div>
                  <span className="contact-channel-label">{t('contact.emailLabel')}</span>
                  <strong>{contact.email}</strong>
                </div>
              </a>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.03}>
            <div className="card contact-area card-pad">
              <span className="eyebrow">{t('about.founderRole')}</span>
              <p>{t('about.founderName')}</p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="card contact-area card-pad">
              <span className="eyebrow">{t('contact.areaLabel')}</span>
              <p>{t('contact.area')}</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="card map-card">
              <span className="eyebrow map-card-label">{t('contact.mapLabel')}</span>
              <iframe
                className="map-frame"
                title="Tuty Packers and Movers — headquarters map"
                src={`https://www.google.com/maps?q=${contact.hq.lat},${contact.hq.lng}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
