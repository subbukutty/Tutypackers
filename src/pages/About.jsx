import { useTranslation } from 'react-i18next';
import { Phone, ShieldCheck, Truck, Wrench } from 'lucide-react';
import SectionReveal from '../components/SectionReveal.jsx';
import contact from '../content/contact.json';
import './Subpage.css';

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionReveal>
            <span className="eyebrow">About</span>
            <h1 className="subpage-title">{t('about.title')}</h1>
            <p className="subpage-sub">{t('about.subtitle')}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="about-grid">
            <SectionReveal>
              <article className="card about-card">
                <span className="about-icon"><ShieldCheck size={20} /></span>
                <h3>{t('about.storyTitle')}</h3>
                <p>{t('about.story')}</p>
              </article>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <article className="card about-card">
                <span className="about-icon"><Truck size={20} /></span>
                <h3>{t('about.fleetTitle')}</h3>
                <p>{t('about.fleetBody')}</p>
              </article>
            </SectionReveal>

            <SectionReveal delay={0.16}>
              <article className="card about-card">
                <span className="about-icon"><Wrench size={20} /></span>
                <h3>{t('about.valuesTitle')}</h3>
                <p>{t('about.valuesBody')}</p>
              </article>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container cta-inner" style={{ marginTop: 0 }}>
          <SectionReveal>
            <div className="cta-copy">
              <h2 className="cta-title">{t('home.ctaTitle')}</h2>
              <p className="cta-sub">{t('home.ctaSubtitle')}</p>
            </div>
            <div className="cta-action">
              <a href={`tel:${contact.phoneE164}`} className="btn btn-primary">
                <Phone size={16} strokeWidth={2.4} />
                {t('home.ctaButton')}
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
                 className="btn btn-secondary">
                {t('common.whatsapp')}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
