import React from "react";
import theme from "./theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
    Link,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
export default function Introduction() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container
                        component="section"
                        disableGutters="true"
                        maxWidth="false"
                        sx={{
                            paddingY: "70px",
                            margin: "0px",
                        }}
                    >
                        <Container
                            component="div"
                            disableGutters="true"
                            maxWidth="false"
                            sx={{
                                maxWidth: "1130px",
                                margin: "auto",
                            }}
                        >
                            <Container
                                component="div"
                                disableGutters="true"
                                maxWidth="false"
                                sx={{
                                    maxWidth: "720px",
                                    marginRight: "0",
                                    marginLeft: "auto",
                                }}
                            >
                                <Container
                                    component="header"
                                    disableGutters="true"
                                >
                                    <Typography
                                        component="h4"
                                        sx={{
                                            display: "inline-flex",
                                            fontSize: "14px",
                                            color: "white",
                                            textTransform: "uppercase",
                                            marginBottom: "53px",
                                            padding: "9px 20px",
                                            border: "1px solid white",
                                            borderRadius: "30px",
                                            alignItems: "center",
                                        }}
                                    >
                                        <HomeIcon
                                            sx={{
                                                fill: "white",
                                                marginRight: "10px",
                                            }}
                                        />
                                        Introduction
                                    </Typography>
                                    <Typography
                                        component="h1"
                                        variant="h1"
                                        sx={{ fontSize: "78px" }}
                                    >
                                        {"Say Hi from "}
                                        <Typography
                                            component="span"
                                            variant="h1"
                                            sx={{
                                                fontSize: "78px",
                                                color: theme.palette.accent,
                                            }}
                                        >
                                            Nicolas
                                        </Typography>
                                        {", Web Developer and Photographer. "}
                                    </Typography>
                                </Container>
                                <Typography
                                    component="p"
                                    sx={{
                                        maxWidth: "480px",
                                        marginBottom: "30px",
                                        color: theme.palette.text.secondary,
                                    }}
                                >
                                    I design and code beautifully simple things
                                    and i love what i do. Just simple like that!
                                </Typography>
                                <Link
                                    underline="none"
                                    aria-label="My projects"
                                    sx={{ displal: "block", height: "175px" }}
                                >
                                    {" My projects "}
                                </Link>
                            </Container>
                        </Container>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
