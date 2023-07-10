import React from "react";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
} from "@mui/material";

import Header from "components/Header.jsx"; // pour le header de la section
import { faUser } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import data from "../data.json"; // import des data

export default function About() {
    const aboutData = data.about; // Extraire la data
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline></CssBaseline>
            </ThemeProvider>
        </>
    );
}
