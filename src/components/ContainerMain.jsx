import React from "react";
import theme from "./theme/theme";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";
export default function ContainerMain({ children }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container
                        component="section"
                        disableGutters="true"
                        maxWidth="false"
                        sx={{
                            paddingY: "0px",
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
                                {children}
                            </Container>
                        </Container>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
