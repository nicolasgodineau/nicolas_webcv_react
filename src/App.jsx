import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import {
    Container,
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import theme from "./theme.js";
import SideBar from "./articles/sideBar.jsx";
import About from "articles/About.jsx";
import Resume from "articles/Resume.jsx";
import Skills from "articles/Skills.jsx";
import Portfolio from "articles/Portfolio.jsx";
import Footer from "articles/Footer.jsx";

export default function App() {
    const { i18n } = useTranslation();

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
                        disableScrolling: "true",
                        backgroundColor: theme.palette.grey[900],
                        [theme.breakpoints.down("md")]: {
                            // Styles pour les écrans de largeur maximale "md" (1090px)
                            flexDirection: "column",
                        },
                    }}
                >
                    <SideBar
                        AosEffect="fade-up"
                        AosDelay="0"
                        selectedLanguage={selectedLanguage}
                        handleChangeLanguage={handleChangeLanguage}
                    />
                    <Container
                        component="section"
                        sx={{
                            flexGrow: "1",
                            overflow: "hidden",
                            [theme.breakpoints.down("md")]: {
                                // Styles pour les écrans de largeur maximale "md" (1090px)
                                padding: 0,
                            },
                        }}
                    >
                        {/* <Introduction AosEffect="fade-up" AosDelay="0" /> */}
                        <About AosEffect="fade-up" AosDelay="0" />
                        <Resume AosEffect="fade-up" AosDelay="0" />
                        <Skills AosEffect="fade-up" AosDelay="0" />
                        <Portfolio AosEffect="fade-up" AosDelay="0" />
                    </Container>
                </Container>
                <Footer />
            </CssBaseline>
        </ThemeProvider>
    );
}
