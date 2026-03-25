import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { STORAGE_KEYS } from '@shared/lib/constants';
import { resources } from './resources';

const fallbackLanguage = 'ru';

const storedLanguage =
  typeof window === 'undefined'
    ? fallbackLanguage
    : window.localStorage.getItem(STORAGE_KEYS.language)?.replace(/"/g, '') ?? fallbackLanguage;

void i18n.use(initReactI18next).init({
  lng: storedLanguage,
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
