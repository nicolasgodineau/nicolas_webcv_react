import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
    Container,
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import theme from "../src/components/theme/theme.js";
import SideBar from "../src/components/sideBar";
import Introduction from "../src/articles/Introduction";
import About from "../src/articles/About";
import Resume from "../src/articles/Resume.jsx";
import Skills from "../src/articles/Skills.jsx";

export default function App() {
    const { i18n } = useTranslation();

    // Pour la désactivation des annimations au format tablette
    const isMobileDevice = useMediaQuery(theme.breakpoints.down("tablet"));

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
                        backgroundColor: theme.palette.background.dark,
                        [theme.breakpoints.down("tablet")]: {
                            // Styles pour les écrans de largeur maximale "tablet" (1090px)
                            flexDirection: "column",
                        },
                    }}
                >
                    <SideBar
                        isMobileDevice={isMobileDevice}
                        selectedLanguage={selectedLanguage}
                        handleChangeLanguage={handleChangeLanguage}
                    />
                    <Container
                        component="section"
                        sx={{
                            flexGrow: "1",
                            overflow: "hidden",
                            [theme.breakpoints.down("tablet")]: {
                                // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                padding: 0,
                            },
                        }}
                    >
                        <Introduction />
                        <About />
                        <Resume />
                        <Skills />
                    </Container>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}
