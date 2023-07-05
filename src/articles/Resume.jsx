import React from "react";
import theme from "../components/theme/theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import Experience from "../components/resume/Experience.jsx"; // pour l'affichage d'une experience
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../data.json"; // import des data

export default function Resume() {
    const dataSection = data.resume; // Extraire la data

    // Récupère les informations d'expérience depuis les données JSON
    const experiences = Object.values(dataSection.experiences);

    // Récupère la dernière experience, pour supprimer du padding bottom
    const lastExperienceId = experiences[experiences.length - 1]?.id;

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container
                        component="article"
                        disablegutters="true"
                        maxWidth="false"
                        sx={{
                            paddingY: 9,
                            maxWidth: "720px",
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
                            data={dataSection.header}
                            variant={"h1"}
                            fontSize={"clamp(2rem, 6vw, 3rem)"}
                        />
                        {experiences.map((experience) => (
                            <Experience
                                key={experience.id}
                                experience={experience}
                                lastExperienceId={lastExperienceId}
                            />
                        ))}
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
