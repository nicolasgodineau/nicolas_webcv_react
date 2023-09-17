import React, { createContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.js";
import SideBar from "./articles/sideBar.jsx";
import About from "articles/About.jsx";
import Resume from "articles/Resume.jsx";
import Skills from "articles/Skills.jsx";
import Portfolio from "articles/Portfolio.jsx";
import Footer from "articles/Footer.jsx";
import BackToTop from "components/BackToTop.jsx";

export const WindowHeightContext = createContext();

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

    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const updateWindowHeight = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener("resize", updateWindowHeight);

        return () => {
            window.removeEventListener("resize", updateWindowHeight);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <WindowHeightContext.Provider value={windowHeight}>
                    <Container
                        component="main"
                        maxWidth="lg"
                        sx={{
                            display: "flex",
                            disableScrolling: "true",
                            backgroundColor: theme.palette.grey[900],
                            [theme.breakpoints.down("md")]: {
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
                            disablegutters="true"
                            maxWidth="false"
                            sx={{
                                overflow: "hidden",
                                backgroundColor: theme.palette.grey[900],
                                paddingRight: "0 !important",
                                [theme.breakpoints.down("md")]: {
                                    padding: 0,
                                    marginTop:
                                        windowHeight >= 650 ? "0px" : "60px",
                                },
                            }}
                        >
                            <About AosEffect="fade-up" AosDelay="0" />
                            <Resume AosEffect="fade-up" AosDelay="0" />
                            <Skills AosEffect="fade-up" AosDelay="0" />
                            <Portfolio AosEffect="fade-up" AosDelay="0" />
                            <BackToTop />
                        </Container>
                    </Container>
                    <Footer />
                </WindowHeightContext.Provider>
            </CssBaseline>
        </ThemeProvider>
    );
}
