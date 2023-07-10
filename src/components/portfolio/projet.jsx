import React from "react";
import theme from "../theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
} from "@mui/material";
import Gallery from "./gallery.jsx";
import { useTranslation } from "react-i18next";

export default function Projet({ projet, images }) {
    console.log("projet:", projet);

    const { title, subtitle, description } = projet;
    console.log("projet:", projet);
    const { t } = useTranslation();
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
                        {title}
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
                        {subtitle}
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: "16px",
                            color: theme.palette.text.secondary,
                        }}
                    >
                        {description}
                    </Typography>
                    <Gallery
                        images={images}
                        titre={title}
                        dossier={projet.dossier}
                    />
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
