// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Switch Language": "Switch Language",
      "Welcome": "Welcome to the site!",
    },
  },
  pt: {
    translation: {
      "Switch Language": "Trocar Idioma",
      "Welcome": "Bem-vindo ao site!",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    ns: ["home", "settings", "tasks", "notifications"],
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
