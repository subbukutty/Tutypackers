import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle, ArrowUpRight, ShieldCheck, BadgeCheck, Clock4, MapPin, Truck } from 'lucide-react';
import SectionReveal from '../components/SectionReveal.jsx';
import FleetCard from '../components/FleetCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { HeroTruck } from '../components/TruckSVG.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import contact from '../content/contact.json';
import servicesList from '../content/services.json';
import './Home.css';

const FLEET_FIELDS = ['open', 'closed'];
const STATE_KEYS = [
  { key: 'tn', primary: true },
  { key: 'kl' },
  { key: 'ka' },
  { key: 'ap' },
  { key: 'ts' },
  { key: 'all', primary: true },
];
const LOCAL_TOWN_KEYS = [
  'tiruchendur',
  'vilathikulam',
  'ettayapuram',
  'eral',
  'kurumbur',
  'nazareth',
  'kayalpattinam',
  'sawyerpuram',
];
const VEHICLE_SIZE_KEYS = [
  'tataAce',
  'dost',
  'badaDost',
  'tata407',
  'ft14',
  'ft17',
  'ft19',
  'ft21container',
];
const COVERAGE_MAP_SRC =
  `https://www.google.com/maps?q=${contact.hq.lat},${contact.hq.lng}&z=10&output=embed`;

export default function Home() {
  const { t } = useTranslation();
  usePageMeta(t('meta.home.title'), t('meta.home.description'), '/');
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroOp = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <motion.div className="hero-bg" style={{ y: heroY, opacity: heroOp }} aria-hidden="true">
          <HeroTruck className="hero-illu" />
        </motion.div>

        <div className="container hero-inner">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('hero.eyebrow')}
          </motion.span>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="hero-cta-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href={`tel:${contact.phoneE164}`} className="btn btn-primary">
              <Phone size={16} strokeWidth={2.4} />
              {t('hero.primaryCta')}
            </a>
            <Link to="/services" className="btn btn-secondary">
              {t('hero.secondaryCta')}
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className="hero-meta-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <span><ShieldCheck size={14} /> {t('common.headquarters')}</span>
            <span><Clock4 size={14} /> {t('common.open24x7')}</span>
            <span><Truck size={14} /> {t('common.anyVehicle')}</span>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FLEET ---------------- */}
      <section className="section section-cream">
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow">{t('home.fleetEyebrow')}</span>
              <h2 className="section-title">{t('home.fleetTitle')}</h2>
              <p className="section-subtitle">{t('home.fleetSubtitle')}</p>
            </div>
          </SectionReveal>

          <div className="grid grid-3 fleet-grid">
            {FLEET_FIELDS.map((kind) => (
              <FleetCard
                key={kind}
                kind={kind}
                titleKey={t(`home.fleetCards.${kind}.title`)}
                body={t(`home.fleetCards.${kind}.points`, { returnObjects: true })}
              />
            ))}
            {/* Empty third grid cell keeps the two cards visually centred (single card on each side) */}
            <div aria-hidden="true" className="fleet-empty" />
          </div>
        </div>
      </section>

      {/* ---------------- VEHICLE SIZES ---------------- */}
      <section className="section section-cream-2">
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow"><Truck size={12} /> {t('home.vehicleEyebrow')}</span>
              <h2 className="section-title">{t('home.vehicleTitle')}</h2>
              <p className="section-subtitle">{t('home.vehicleSubtitle')}</p>
            </div>
          </SectionReveal>

          <div className="area-grid vehicle-grid">
            {VEHICLE_SIZE_KEYS.map((v, idx) => (
              <SectionReveal key={v} delay={0.04 * idx}>
                <div className="area-tile">{t(`home.vehicleSizes.${v}`)}</div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES PREVIEW ---------------- */}
      <section className="section section-paper">
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow">{t('nav.services')}</span>
              <h2 className="section-title">{t('home.servicesTitle')}</h2>
              <p className="section-subtitle">{t('home.servicesSubtitle')}</p>
            </div>
          </SectionReveal>

          <div className="grid grid-3 services-grid">
            {servicesList.map((s) => (
              <ServiceCard
                key={s.id}
                id={s.id}
                icon={s.icon}
                name={t(`services.${s.id}.name`)}
                desc={t(`services.${s.id}.desc`)}
                ctaLabel={t('common.learnMore')}
              />
            ))}
          </div>

          <div className="services-foot">
            <Link to="/services" className="btn btn-secondary">
              {t('common.viewAll')} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICE AREA ---------------- */}
      <section className="section section-cream-2">
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow"><MapPin size={12} /> {t('home.areaEyebrow')}</span>
              <h2 className="section-title">{t('home.areaTitle')}</h2>
              <p className="section-subtitle">{t('home.areaSubtitle')}</p>
            </div>
          </SectionReveal>

          <div className="area-grid">
            {STATE_KEYS.map((s, idx) => (
              <SectionReveal key={s.key} delay={0.04 * idx}>
                <div className={`area-tile ${s.primary ? 'is-primary' : ''}`}>{t(`home.states.${s.key}`)}</div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- LOCAL SHIFTING + MAP ---------------- */}
      <section className="section section-paper">
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow"><MapPin size={12} /> {t('home.mapLabel')}</span>
              <h2 className="section-title">{t('home.localTitle')}</h2>
              <p className="section-subtitle">{t('home.localSubtitle')}</p>
            </div>
          </SectionReveal>

          <div className="area-grid local-area-grid">
            {LOCAL_TOWN_KEYS.map((town, idx) => (
              <SectionReveal key={town} delay={0.04 * idx}>
                <div className="area-tile">{t(`home.localTowns.${town}`)}</div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.1}>
            <div className="card map-card">
              <iframe
                className="map-frame"
                title="Tuty Packers and Movers — service coverage map"
                src={COVERAGE_MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section className="section section-paper">
        <div className="container">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow">{t('home.whyEyebrow')}</span>
              <h2 className="section-title">{t('home.whyTitle')}</h2>
              <p className="section-subtitle">{t('home.whySubtitle')}</p>
            </div>
          </SectionReveal>

          <div className="grid grid-3">
            {[1, 2, 3].map((i, idx) => (
              <SectionReveal key={i} delay={0.05 * idx}>
                <div className="why-card">
                  <span className="why-icon">
                    {i === 1 && <Truck size={20} strokeWidth={2.2} />}
                    {i === 2 && <BadgeCheck size={20} strokeWidth={2.2} />}
                    {i === 3 && <Clock4 size={20} strokeWidth={2.2} />}
                  </span>
                  <h3 className="why-title">{t(`home.why${i}Title`)}</h3>
                  <p className="why-body">{t(`home.why${i}Body`)}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA STRIP ---------------- */}
      <section className="cta-strip section">
        <div className="container cta-inner">
          <SectionReveal>
            <div className="cta-copy">
              <h2 className="cta-title">{t('home.ctaTitle')}</h2>
              <p className="cta-sub">{t('home.ctaSubtitle')}</p>
            </div>
            <div className="cta-action">
              <a href={`tel:${contact.phoneE164}`} className="btn btn-primary btn-cta-phone">
                <Phone size={18} strokeWidth={2.4} />
                {t('home.ctaButton')}
              </a>
              <a href={`${contact.whatsapp}?text=${encodeURIComponent(t('common.whatsappMessage'))}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-cta-phone">
                <MessageCircle size={18} strokeWidth={2.4} />
                {t('common.whatsapp')}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
