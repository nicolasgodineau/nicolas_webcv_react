import React from "react";
import theme from "../theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
} from "@mui/material";
import Gallery from "./gallery.jsx";

export default function Projet({ projet }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: "clamp(1.2rem, 4vw, 2rem)",
                            marginBottom: "5px",
                            color: theme.palette.text.primary,
                        }}
                    >
                        {projet.titre}
                    </Typography>
                    <Typography
                        component="h3"
                        sx={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            marginBottom: "5px",
                            color: theme.palette.text.primary,
                        }}
                    >
                        {projet.sousTitre}
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: "16px",
                            color: theme.palette.text.secondary,
                        }}
                    >
                        {projet.description}
                    </Typography>
                    <Gallery images={projet?.img} titre={projet?.titre} />
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
