import React, { useState, useEffect } from "react";
import AOS from "aos";
import {
    Container,
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import theme from "../src/components/theme/theme.js";
import SideBar from "./components/sideBar.jsx";
import Introduction from "articles/Introduction.jsx";
import About from "articles/About.jsx";
import Resume from "articles/Resume.jsx";
import Skills from "articles/Skills.jsx";
import Portfolio from "articles/Portfolio.jsx";

import { useTranslation } from "react-i18next";

export default function App() {
    const { i18n } = useTranslation();

    // Pour la désactivation des annimations au format tablette
    const isMobileDevice = useMediaQuery(theme.breakpoints.down("tablet"));

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, []);

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const handleChangeLanguage = (event) => {
        const language = event.target.value;
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Container
                    component="main"
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        backgroundColor: theme.palette.background.dark,
                        [theme.breakpoints.down("tablet")]: {
                            // Styles pour les écrans de largeur maximale "tablet" (1090px)
                            flexDirection: "column",
                        },
                    }}
                >
                    <SideBar
                        AosEffect="fade-up"
                        AosDelay="0"
                        isMobileDevice={isMobileDevice}
                        selectedLanguage={selectedLanguage}
                        handleChangeLanguage={handleChangeLanguage}
                    />
                    <Container
                        component="section"
                        sx={{
                            overflow: "hidden",
                            [theme.breakpoints.down("tablet")]: {
                                // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                padding: 0,
                            },
                        }}
                    >
                        <Introduction AosEffect="fade-up" AosDelay="0" />
                        <About AosEffect="fade-up" AosDelay="700" />
                        <Resume AosEffect="fade-up" AosDelay="0" />
                        <Skills AosEffect="fade-up" AosDelay="0" />
                        <Portfolio AosEffect="fade-up" AosDelay="0" />
                    </Container>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}
