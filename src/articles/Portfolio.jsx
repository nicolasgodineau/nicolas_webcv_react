import React from "react";
import theme from "../components/theme/theme";
import { CssBaseline, ThemeProvider, Container, Divider } from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import { faGripVertical } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../lang/en.json"; // import des data du JSON anglais
import Projet from "components/portfolio/projet.jsx";
import { useTranslation } from "react-i18next";

export default function Portfolio({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("portfolio.header.subtitle"),
            texte: t("portfolio.header.text"),
        },
    };

    const dataSection = data.portfolio; // Extraire la data

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container
                        component="article"
                        disablegutters="true"
                        maxWidth="false"
                        data-aos={AosEffect}
                        data-aos-delay={AosDelay}
                        sx={{
                            paddingY: 9,
                            maxWidth: "720px",
                            overflow: "hidden",
                            [theme.breakpoints.down("tablet")]: {
                                // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                paddingTop: 5,
                                paddingBottom: 0,
                                paddingX: 0,
                                marginLeft: 0,
                            },
                        }}
                    >
                        <Header
                            component="header"
                            icon={faGripVertical}
                            data={dataHeader}
                            variant={"h1"}
                            fontSize={"clamp(2rem, 6vw, 3rem)"}
                        />
                        <Projet
                            projet={{
                                title: t("portfolio.projet.mars.title"),
                                subtitle: t("portfolio.projet.mars.subtitle"),
                                description: t(
                                    "portfolio.projet.mars.description"
                                ),
                            }}
                            image={dataSection?.projet.mars.img}
                        />

                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        />
                        {/*  
                        <Projet projet={dataSection?.projet.faceMaisonneuve} />
                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        />
                        <Projet projet={dataSection?.projet.mars} />
                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        />
                        <Projet projet={dataSection?.projet.noemie} />
                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        /> */}
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
