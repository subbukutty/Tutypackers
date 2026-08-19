import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LoadingArt from './LoadingArt.jsx';
import './Loader.css';

export default function Loader({ visible }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader-screen"
          role="status"
          aria-live="polite"
          aria-label={t('loader.name')}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="loader-mark"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="loader-art">
              <LoadingArt size={220} />
            </span>
          </motion.div>
          <span className="loader-bar" aria-hidden="true">
            <span className="loader-bar-fill" />
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
