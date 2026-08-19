import { useTranslation } from 'react-i18next';
import { Phone, Mail, ShieldCheck, Truck, Wrench } from 'lucide-react';
import SectionReveal from '../components/SectionReveal.jsx';
import contact from '../content/contact.json';
import ceoPortrait from '../assets/ceo-portrait.jpeg';
import truckClosedSide from '../assets/truck-closed-side.jpeg';
import truckCabFront from '../assets/truck-cab-front.jpeg';
import truckOpenFront from '../assets/truck-open-front.jpeg';
import truckOpenStakeSide from '../assets/truck-open-stake-side.jpeg';
import truckTarpLoadedNight from '../assets/truck-tarp-loaded-night.jpeg';
import packedBoxesDoorway from '../assets/packed-boxes-doorway.jpeg';
import containerLoadedInterior from '../assets/container-loaded-interior.jpeg';
import './Subpage.css';

const GALLERY = [
  { src: truckClosedSide, key: 'truckClosedSide' },
  { src: truckOpenFront, key: 'truckOpenFront' },
  { src: truckTarpLoadedNight, key: 'truckTarpLoadedNight' },
  { src: containerLoadedInterior, key: 'containerLoadedInterior' },
  { src: packedBoxesDoorway, key: 'packedBoxesDoorway' },
  { src: truckCabFront, key: 'truckCabFront' },
  { src: truckOpenStakeSide, key: 'truckOpenStakeSide' },
];

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionReveal>
            <span className="eyebrow">{t('nav.about')}</span>
            <h1 className="subpage-title">{t('about.title')}</h1>
            <p className="subpage-sub">{t('about.subtitle')}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow">{t('about.founderEyebrow')}</span>
              <h2 className="section-title">{t('about.founderTitle')}</h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="card founder-card">
              <img src={ceoPortrait} alt={t('about.founderName')} className="founder-photo" />
              <div className="founder-body">
                <strong className="founder-name">{t('about.founderName')}</strong>
                <span className="founder-title">{t('about.founderRole')}</span>
                <a href={`mailto:${contact.email}`} className="founder-email">
                  <Mail size={14} strokeWidth={2.4} />
                  {contact.email}
                </a>
                <p className="founder-quote">{t('about.founderBio')}</p>
              </div>
            </div>
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
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow">{t('about.galleryEyebrow')}</span>
              <h2 className="section-title">{t('about.galleryTitle')}</h2>
              <p className="section-subtitle">{t('about.gallerySubtitle')}</p>
            </div>
          </SectionReveal>

          <div className="about-gallery-grid">
            {GALLERY.map((g, idx) => (
              <SectionReveal key={g.key} delay={0.05 * idx}>
                <figure className="gallery-tile">
                  <img src={g.src} alt={t(`about.gallery.${g.key}`)} loading="lazy" />
                  <figcaption>{t(`about.gallery.${g.key}`)}</figcaption>
                </figure>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
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
