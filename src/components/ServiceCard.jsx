import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Briefcase, Truck, Package, Warehouse, ArrowUpRight } from 'lucide-react';
import './ServiceCard.css';

const ICONS = { home: Home, briefcase: Briefcase, truck: Truck, package: Package, warehouse: Warehouse };

export default function ServiceCard({ id, icon, name, desc, ctaLabel, link = '/services' }) {
  const Icon = ICONS[icon] || Home;
  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      <span className="service-icon"><Icon size={20} strokeWidth={2.2} /></span>
      <h3 className="service-name">{name}</h3>
      <p className="service-desc">{desc}</p>
      <Link to={link} className="service-link" aria-label={name}>
        {ctaLabel || 'Learn more'}
        <ArrowUpRight size={16} />
      </Link>
    </motion.div>
  );
}
