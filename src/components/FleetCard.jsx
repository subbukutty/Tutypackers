import { motion } from 'framer-motion';
import { TruckOpen, TruckClosed, TruckContainer } from './TruckSVG.jsx';
import { Check } from 'lucide-react';
import './FleetCard.css';

const VARIANTS = {
  open: TruckOpen,
  closed: TruckClosed,
  container: TruckContainer,
};

export default function FleetCard({ kind, titleKey, body, icon: Icon, badgeKey }) {
  const Illustration = VARIANTS[kind];
  return (
    <motion.div
      className="fleet-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="fleet-art" aria-hidden="true">
        <Illustration />
      </div>
      <div className="fleet-meta">
        <div className="fleet-title-row">
          {Icon ? (
            <span className="fleet-icon-badge">
              <Icon size={14} strokeWidth={2.4} />
            </span>
          ) : null}
          <h3 className="fleet-title">{titleKey}</h3>
        </div>
        {badgeKey ? <div className="fleet-badge">{badgeKey}</div> : null}
        <ul className="fleet-points">
          {body.map((line, i) => (
            <li key={i}>
              <Check size={14} strokeWidth={2.6} />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
