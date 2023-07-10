import React from "react";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Divider,
    Typography,
    Box,
} from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import { faGripVertical } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../lang/en.json"; // import des data du JSON anglais
import { useTranslation } from "react-i18next";
import Gallery from "components/portfolio/gallery.jsx";

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
                        maxWidth="sm2"
                        data-aos={AosEffect}
                        data-aos-delay={AosDelay}
                        sx={{
                            paddingY: 9,
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
                        {Object.entries(dataSection?.projets).map(
                            ([projetKey, projet], index) => {
                                const titleKey = `portfolio.projets.${projetKey}.title`;
                                const subtitleKey = `portfolio.projets.${projetKey}.subtitle`;
                                const descriptionKey = `portfolio.projets.${projetKey}.description`;

                                return (
                                    <Box
                                        component="article"
                                        key={projetKey}
                                        data-aos="fade-left"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1vh",
                                        }}
                                    >
                                        <Typography
                                            component="h2"
                                            sx={{
                                                fontSize:
                                                    "clamp(1.2rem, 4vw, 2rem)",
                                                marginBottom: "5px",
                                                color: theme.palette.text
                                                    .primary,
                                            }}
                                        >
                                            {t(titleKey)}
                                        </Typography>
                                        <Typography
                                            component="h3"
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                                marginBottom: "5px",
                                                color: theme.palette.text
                                                    .primary,
                                            }}
                                        >
                                            {t(subtitleKey)}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            sx={{
                                                fontSize: "16px",
                                                color: theme.palette.text
                                                    .secondary,
                                            }}
                                        >
                                            {t(descriptionKey)}
                                        </Typography>
                                        <Gallery
                                            projet={projet}
                                            dossier={projetKey}
                                        />
                                        <Divider
                                            variant="middle"
                                            sx={{
                                                marginY: "2rem",
                                                backgroundColor:
                                                    theme.palette.text
                                                        .secondary,
                                            }}
                                        />
                                    </Box>
                                );
                            }
                        )}
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
