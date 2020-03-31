import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en-ca';
import fr from './locales/fr-ca';

const options = {
  // order from where user language should be detected
  order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: false,
    resources: {
      en: en,
      fr: fr,
    },
    lng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
      format: (value, format, lng) => {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      },
    },
  });

export default i18n;
