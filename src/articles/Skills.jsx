import React from "react";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
    Box,
    Divider,
} from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import Skill from "../components/skills/skill.jsx"; // pour l'affichage d'un skill
import { faShapes } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../data.json"; // import des data

export default function Skills() {
    const dataSection = data.skills; // Extraire la data

    // Récupère les informations d'expérience depuis les données JSON
    const connaissance = dataSection.skills.connaissance;
    const langagesFrameworks = dataSection.skills.langagesFrameworks;
    const logicielsOutils = dataSection.skills.logicielsOutils;

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
                            icon={faShapes}
                            data={dataSection.header}
                            variant={"h1"}
                            fontSize={"clamp(2rem, 6vw, 3rem)"}
                        />
                        <Box
                            component="div"
                            disablegutters="true"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                                justifyContent: "space-between",
                                gap: "1rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                    paddingTop: "2rem",
                                }}
                            >
                                {connaissance.titre}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "start",
                                    justifyContent: "space-between",
                                    gap: "1rem",
                                }}
                            >
                                {connaissance.liste.map((skill) => (
                                    <Skill key={skill.nom} skill={skill} />
                                ))}
                            </Box>
                        </Box>
                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        />
                        <Box
                            component="div"
                            disablegutters="true"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                                justifyContent: "space-between",
                                gap: "1rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                }}
                            >
                                {langagesFrameworks.titre}
                            </Typography>
                            <Box
                                component="div"
                                disablegutters="true"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "2rem",
                                }}
                            >
                                {langagesFrameworks.liste.map((skill) => (
                                    <Skill key={skill.nom} skill={skill} />
                                ))}
                            </Box>
                        </Box>
                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        />
                        <Box
                            component="div"
                            disablegutters="true"
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                gap: "2rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                }}
                            >
                                {logicielsOutils.titre}
                            </Typography>
                            <Box
                                component="div"
                                disablegutters="true"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    alignItems: "start",
                                    justifyContent: "space-between",
                                    gap: "2rem",
                                }}
                            >
                                {logicielsOutils.liste.map((skill) => (
                                    <Skill key={skill.nom} skill={skill} />
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
