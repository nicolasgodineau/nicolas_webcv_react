import React from "react";
import theme from "../components/theme/theme";
import { CssBaseline, ThemeProvider, Container, Divider } from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import { faGripVertical } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../data.json"; // import des data
import Projet from "components/portfolio/projet.jsx";

export default function Portfolio() {
    const dataSection = data.portfolio; // Extraire la data

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
                            icon={faGripVertical}
                            data={dataSection.header}
                            variant={"h1"}
                            fontSize={"clamp(2rem, 6vw, 3rem)"}
                        />
                        <Projet projet={dataSection?.projet.photographie} />
                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        />
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
                        />
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
