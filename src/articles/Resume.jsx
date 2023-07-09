import React from "react";
import theme from "../components/theme/theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import Experience from "../components/resume/Experience.jsx"; // pour l'affichage d'une experience
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import { useTranslation } from "react-i18next";

export default function Resume({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("resume.header.subtitle"),
            texte: t("resume.header.text"),
        },
    };

    const experiences = t("resume.experiences", { returnObjects: true });

    // Récupère la dernière experience, pour supprimer du padding bottom
    const lastExperienceId = Object.keys(experiences).length;

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
                            icon={faBriefcase}
                            data={dataHeader}
                            variant={"h1"}
                            fontSize={"clamp(2rem, 6vw, 3rem)"}
                        />
                        {Object.values(experiences).map((experience, index) => (
                            <Experience
                                key={experience.id}
                                experience={{
                                    id: experience.id,
                                    year: t(
                                        `resume.experiences.${experience.id}.year`
                                    ),
                                    title: t(
                                        `resume.experiences.${experience.id}.title`
                                    ),
                                    location: t(
                                        `resume.experiences.${experience.id}.location`
                                    ),
                                    subtitle: t(
                                        `resume.experiences.${experience.id}.subtitle`
                                    ),
                                    description: t(
                                        `resume.experiences.${experience.id}.description`
                                    ),
                                }}
                                lastExperienceId={lastExperienceId}
                                delay={index * 150}
                            />
                        ))}
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
