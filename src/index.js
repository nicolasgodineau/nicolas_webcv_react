import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App";
import translationEN from "./lang/en.json";
import translationFR from "./lang/fr.json";

// Configurer i18next
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        fr: {
            translation: translationFR,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

AOS.init({
    useClassNames: true, // Utilise des noms de classe pour les animations (optionnel)
    initClassName: false, // Désactive l'ajout de la classe d'initialisation automatique (optionnel)
    easing: "ease", // Type d'interpolation de l'animation
    duration: 1000, // Durée de l'animation en millisecondes
    delay: 0, // Délai avant que l'animation ne commence en millisecondes
    anchorPlacement: "top-bottom", // Placement de l'ancre pour déclencher les animations lors du défilement
    offset: 0, // Décalage personnalisé pour déclencher les animations avant ou après le point de déclenchement
    once: false, // Indique si l'animation ne se répète qu'une seule fois
    mirror: false, // Indique si les animations se répètent en sens inverse lorsqu'elles sont déclenchées dans l'autre sens
    zoom: 0, // Réduire le niveau de zoom pour les animations avec l'effet "zoom-in"
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
