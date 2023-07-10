import React from "react";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
} from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import { useTranslation } from "react-i18next";

import useTopValue from "../hooks/useTopValue.js";

export default function Introduction({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const topValue = useTopValue();

    const dataHeader = {
        header: {
            subtitle: t("introduction.header.subtitle"),
            texte: t("introduction.header.text"),
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
                            paddingTop: topValue,
                            paddingBottom: 9,
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
                            icon={faHouse}
                            data={dataHeader}
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
                            {t("introduction.description")}
                        </Typography>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
