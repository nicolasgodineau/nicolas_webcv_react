import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme";
import { Divider, Typography, Box } from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
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
            icon={DragIndicatorIcon}
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
                                variant="h4"
                                sx={{
                                    marginBottom: "5px",
                                    color: theme.palette.grey[100],
                                }}
                            >
                                {t(titleKey)}
                            </Typography>
                            <Typography
                                component="h3"
                                variant="subtitle1"
                                sx={{
                                    fontWeight: "bolder",
                                    marginBottom: "5px",
                                    color: theme.palette.grey[100],
                                }}
                            >
                                {t(subtitleKey)}
                            </Typography>
                            <Typography
                                component="p"
                                variant="body1"
                                sx={{
                                    color: theme.palette.grey[400],
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
                                            theme.palette.grey[400],
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
