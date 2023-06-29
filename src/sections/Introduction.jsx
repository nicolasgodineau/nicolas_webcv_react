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
    const introductionData = data.introduction; //Extraire la data

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
                            icon={faHouse}
                            data={introductionData.header}
                            variant={"h1"}
                            fontSize={"72px"}
                        />
                        <Typography
                            component="p"
                            sx={{
                                maxWidth: "480px",
                                marginBottom: "30px",
                                color: theme.palette.text.secondary,
                            }}
                        >
                            I design and code beautifully simple things and i
                            love what i do. Just simple like that!
                        </Typography>
                        <Link
                            underline="none"
                            aria-label="My projects"
                            sx={{ displal: "block", height: "175px" }}
                        >
                            {" My projects "}
                        </Link>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
