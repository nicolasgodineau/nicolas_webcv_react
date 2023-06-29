import React from "react";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
    Box,
} from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import Skill from "../components/skills/skill.jsx"; // pour l'affichage d'un skill
import { faShapes } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../data.json"; // import des data

export default function Skills() {
    const skillsData = data.skills; // Extraire la data

    // Récupère les informations d'expérience depuis les données JSON
    const skills = Object.values(skillsData.skills);

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
                            icon={faShapes}
                            data={skillsData.header}
                            variant={"h1"}
                            fontSize={"48px"}
                        />
                        <Box
                            component="div"
                            disablegutters={true}
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "start",
                                justifyContent: "space-between",
                                gap: "2rem",
                            }}
                        >
                            {skills.map((skill) => (
                                <Skill key={skill.id} skill={skill} />
                            ))}
                        </Box>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
