import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const src = (dir) => fileURLToPath(new URL(`./src/${dir}`, import.meta.url));

export default defineConfig({
    plugins: [react()],
    resolve: {
        // Imports courts depuis src/ (ex. "components/BackToTop.jsx"), comme le baseUrl de jsconfig.json
        alias: {
            articles: src("articles"),
            components: src("components"),
            images: src("images"),
        },
    },
    server: {
        port: 3000,
        open: true,
    },
    build: {
        // Même dossier qu'avec Create React App (utilisé par build-and-zip)
        outDir: "build",
    },
});
