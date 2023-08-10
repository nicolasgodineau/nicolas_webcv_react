import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../components/theme/theme";

import { Divider, Typography, Box } from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../lang/en.json"; // import des data du JSON anglais
import Gallery from "../components/portfolio/gallery.jsx";

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
        <CustomArticleContainer
            icon={faGripVertical}
            data={dataHeader}
            AosEffect={AosEffect}
            AosDelay={AosDelay}
        >
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
                                    fontSize: "clamp(1.2rem, 4vw, 2rem)",
                                    marginBottom: "5px",
                                    color: theme.palette.text.primary,
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
                                    color: theme.palette.text.primary,
                                }}
                            >
                                {t(subtitleKey)}
                            </Typography>
                            <Typography
                                component="p"
                                sx={{
                                    fontSize: "16px",
                                    color: theme.palette.text.secondary,
                                }}
                            >
                                {t(descriptionKey)}
                            </Typography>
                            <Gallery projet={projet} dossier={projetKey} />
                            {/* Condition pour afficher le Divider sauf pour le dernier élément */}
                            {index !==
                            Object.keys(dataSection?.projets).length - 1 ? (
                                <Divider
                                    variant="middle"
                                    sx={{
                                        marginY: "2rem",
                                        backgroundColor:
                                            theme.palette.text.secondary,
                                    }}
                                />
                            ) : null}
                        </Box>
                    );
                }
            )}
        </CustomArticleContainer>
    );
}
