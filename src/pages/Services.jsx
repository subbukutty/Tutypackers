import { useTranslation } from 'react-i18next';
import { Phone, Home, Briefcase, Truck, Package, Warehouse } from 'lucide-react';
import SectionReveal from '../components/SectionReveal.jsx';
import contact from '../content/contact.json';
import servicesList from '../content/services.json';
import './Subpage.css';

const ICONS = { home: Home, briefcase: Briefcase, truck: Truck, package: Package, warehouse: Warehouse };

export default function Services() {
  const { t } = useTranslation();
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionReveal>
            <span className="eyebrow">Services</span>
            <h1 className="subpage-title">{t('services.title')}</h1>
            <p className="subpage-sub">{t('services.subtitle')}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="service-detail-list">
            {servicesList.map((s, idx) => {
              const Icon = ICONS[s.icon] || Home;
              return (
                <SectionReveal key={s.id} delay={0.04 * idx}>
                  <article className="service-detail card">
                    <div className="service-detail-icon">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <div className="service-detail-body">
                      <h3>{t(`services.${s.id}.name`)}</h3>
                      <p>{t(`services.${s.id}.desc`)}</p>
                      <a href={`tel:${contact.phoneE164}`} className="btn btn-primary btn-sm">
                        <Phone size={14} strokeWidth={2.4} />
                        {t('services.cta')}
                      </a>
                    </div>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
