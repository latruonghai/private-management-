import { createI18n } from 'vue-i18n';
import vi from './locales/vi';
import en from './locales/en';

const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages: { vi, en }
});

export default i18n;
