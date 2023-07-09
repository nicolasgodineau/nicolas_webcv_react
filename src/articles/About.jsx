import React from "react";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
} from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import { faUser } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import { useTranslation } from "react-i18next";

export default function About({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("about.header.subtitle"),
            texte: t("about.header.text"),
        },
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container
                        component="article"
                        disablegutters="true"
                        maxWidth="sm2"
                        data-aos={AosEffect}
                        data-aos-delay={AosDelay}
                        sx={{
                            paddingY: 9,
                            overflow: "hidden",
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
                            icon={faUser}
                            data={dataHeader}
                            variant={"h1"}
                            fontSize={"clamp(2rem, 6vw, 3rem)"}
                        />
                        <Typography
                            component="p"
                            sx={{
                                maxWidth: "480px",
                                marginBottom: "30px",
                                color: theme.palette.text.secondary,
                                fontFamily: "Lato, sans-serif",
                            }}
                        >
                            {t("about.description")}
                        </Typography>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
