import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { createTamagui } from 'tamagui';
import config from './tamagui.config';

createTamagui(config);

i18n.use(initReactI18next).init({
  resources: {}, // add your translation resources here
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
