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
import data from "../data.json"; // import des data
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle

export default function Introduction() {
    const dataSection = data.introduction; //Extraire la data

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
                            icon={faHouse}
                            data={dataSection.header}
                            variant={"h1"}
                            fontSize={"clamp(2.3rem, 6vw, 4rem)"}
                        />
                        <Typography
                            component="p"
                            sx={{
                                maxWidth: "480px",
                                marginBottom: "30px",
                                color: theme.palette.text.secondary,
                            }}
                        >
                            {dataSection.description}
                        </Typography>
                        {/*                         <Link
                            underline="none"
                            aria-label="My projects"
                            sx={{ displal: "block", height: "175px" }}
                        >
                            {" My projects "}
                        </Link> */}
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
