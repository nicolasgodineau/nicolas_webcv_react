import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import "aos/dist/aos.css";

import App from "./App";
import translationEN from "./lang/en.json";
import translationFR from "./lang/fr.json";

// Configurer i18next
i18n.use(LanguageDetector) // Utilise le détecteur de langue du navigateur
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN,
            },
            fr: {
                translation: translationFR,
            },
        },
        fallbackLng: "en", // Langue de secours si la langue détectée n'est pas prise en charge
        interpolation: {
            escapeValue: false,
        },
    });

// Rendre l'application en utilisant createRoot de ReactDOM
const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);
