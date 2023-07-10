import React from "react";
import theme from "../components/theme/theme";
import { CssBaseline, ThemeProvider, Divider } from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
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
                    <CustomArticleContainer
                        icon={faGripVertical}
                        data={dataHeader}
                        AosEffect={AosEffect}
                        AosDelay={AosDelay}
                    >
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
                    </CustomArticleContainer>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
