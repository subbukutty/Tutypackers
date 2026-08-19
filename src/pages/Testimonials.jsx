import { useTranslation } from 'react-i18next';
import { Star, Quote, ExternalLink } from 'lucide-react';
import SectionReveal from '../components/SectionReveal.jsx';
import contact from '../content/contact.json';
import testimonials from '../content/testimonials.json';
import './Subpage.css';

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <>
      <section className="subpage-hero">
        <div className="container">
          <SectionReveal>
            <span className="eyebrow">{t('nav.reviews')}</span>
            <h1 className="subpage-title">{t('testimonials.title')}</h1>
            <p className="subpage-sub">{t('testimonials.subtitle')}</p>
            <a
              href={contact.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rating-badge"
            >
              <Star size={16} strokeWidth={2.4} fill="currentColor" />
              <strong>{contact.googleRating}</strong>
              <span>{t('testimonials.ratingLabel')}</span>
            </a>
          </SectionReveal>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="testimonial-grid">
            {testimonials.map((r, idx) => (
              <SectionReveal key={r.name} delay={0.06 * idx}>
                <article className="card testimonial-card">
                  <Quote className="testimonial-quote-icon" size={22} aria-hidden="true" />
                  <p className="testimonial-quote">{r.quote}</p>
                  <div className="testimonial-foot">
                    <div>
                      <strong className="testimonial-name">{r.name}</strong>
                      <span className="testimonial-meta">{r.meta}</span>
                    </div>
                    <span className="testimonial-badge">{t('testimonials.sourceLabel')}</span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <div className="testimonials-foot">
              <a
                href={contact.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {t('testimonials.viewAll')} <ExternalLink size={16} />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container cta-inner" style={{ marginTop: 0 }}>
          <SectionReveal>
            <div className="cta-copy">
              <h2 className="cta-title">{t('testimonials.ctaTitle')}</h2>
              <p className="cta-sub">{t('testimonials.ctaSubtitle')}</p>
            </div>
            <div className="cta-action">
              <a
                href={contact.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t('testimonials.ctaButton')}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
