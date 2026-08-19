import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import ta from './ta.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ta: { translation: ta },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ta'],
    detection: {
      // Persist user's pick in localStorage so the toggle survives reloads
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'tuty_lang',
    },
    interpolation: { escapeValue: false },
    returnObjects: true,
  });

// Keep <html lang> in sync so screen readers and :lang() CSS track the active language.
const syncHtmlLang = (lng) => { document.documentElement.lang = lng; };
syncHtmlLang(i18n.resolvedLanguage || i18n.language);
i18n.on('languageChanged', syncHtmlLang);

export default i18n;
