import React, { useState, useEffect } from "react";
import { IntersectionObserver } from "react-intersection-observer";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import {
    Container,
    CssBaseline,
    Select,
    ThemeProvider,
    MenuItem,
} from "@mui/material";
import theme from "../src/components/theme/theme.js";
import SideBar from "./components/SideBar.jsx";
import Introduction from "articles/Introduction.jsx";
import About from "articles/About.jsx";
import Resume from "articles/Resume.jsx";
import Skills from "articles/Skills.jsx";
import Portfolio from "articles/Portfolio.jsx";

import { useTranslation } from "react-i18next";

export default function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialise AOS avec des options spécifiques si nécessaire
    }, []);
    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                AOS.refresh(); // Rafraîchit les animations AOS
                AOS.animate(entry.target); // Déclenche l'animation pour l'élément visible
            }
        });
    };

    const [ref, inView] = useInView({
        triggerOnce: true, // Déclencher l'animation une seule fois
        threshold: 0.2, // Pourcentage de visibilité de l'élément
    });

    useEffect(() => {
        if (inView) {
            AOS.refresh(); // Rafraîchit les animations AOS
            AOS.init({
                container: document.querySelector(".skills-container"),
            }); // Initialise AOS sur le conteneur de Skills
        }
    }, [inView]);

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
                        selectedLanguage={selectedLanguage}
                        handleChangeLanguage={handleChangeLanguage}
                    />
                    <Container
                        component="section"
                        sx={{
                            [theme.breakpoints.down("tablet")]: {
                                // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                padding: 0,
                            },
                        }}
                    >
                        <Introduction />
                        <About />
                        <Resume />
                        <Skills ref={ref} />
                        <Portfolio />
                    </Container>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}
