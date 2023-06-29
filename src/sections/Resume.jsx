import React from "react";
import theme from "../components/theme/theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import Experience from "../components/resume/Experience.jsx"; // pour l'affichage d'une experience
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../data.json"; // import des data

export default function Resume() {
    const resumeData = data.resume; // Extraire la data

    // Récupère les informations d'expérience depuis les données JSON
    const experiences = Object.values(resumeData.experiences);

    // Récupère la dernière experience, pour supprimer du padding bottom
    const lastExperienceId = experiences[experiences.length - 1]?.id;

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container
                        component="section"
                        disablegutters="true"
                        maxWidth="false"
                        sx={{ paddingY: 9, maxWidth: "720px" }}
                    >
                        <Header
                            component="header"
                            icon={faBriefcase}
                            data={resumeData.header}
                            variant={"h1"}
                            fontSize={"48px"}
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
