import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import "aos/dist/aos.css";
import App from "./App";

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: "/locales/{{lng}}.json",
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);