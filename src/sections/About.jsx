import React from "react";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
    Link,
} from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import { faUser } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../data.json"; // import des data

export default function About() {
    const aboutData = data.about; //Extraire la data
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
                            icon={faUser}
                            data={aboutData.header}
                            variant={"h1"}
                            fontSize={"48px"}
                        />
                        <Typography
                            component="p"
                            sx={{
                                maxWidth: "480px",
                                marginBottom: "30px",
                                color: theme.palette.text.secondary,
                            }}
                        >
                            {
                                "I am passionate about this new stage of my career and look forward to working with you to bring your ideas and goals to life online. Feel free to browse my portfolio to discover some of my past projects. "
                            }
                        </Typography>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
