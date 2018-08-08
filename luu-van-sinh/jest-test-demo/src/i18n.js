import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

import { en, vi } from './configs/locale'
import { key } from './configs'

i18n.use(LanguageDetector).init({
  resources: {
    en,
    vi,
  },
  fallbackLng: 'vi',

  // have a common namespace used around the full app
  ns: [key.translations, key.messages],
  defaultNS: key.translations,

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ','
  },

  react: {
    wait: true
  }
});

export default i18n
