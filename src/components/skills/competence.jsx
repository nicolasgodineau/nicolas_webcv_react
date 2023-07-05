import React from "react";
import theme from "../theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
} from "@mui/material";
export default function competence({ langagesFrameworks }) {
    console.log("langagesFrameworks:", langagesFrameworks);
    console.log("Coucou");
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
            </ThemeProvider>
        </>
    );
}
