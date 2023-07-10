import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Typography,
    Box,
    Divider,
    Grid,
} from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import Skill from "../components/skills/Skill.jsx"; // pour l'affichage d'un skill
import { faShapes } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle

export default function Skills({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("skills.header.subtitle"),
            texte: t("skills.header.text"),
        },
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <CustomArticleContainer
                        icon={faShapes}
                        data={dataHeader}
                        AosEffect={AosEffect}
                        AosDelay={AosDelay}
                    >
                        <Box
                            component="div"
                            disablegutters="true"
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                                justifyContent: "space-between",
                                gap: "1rem",
                            }}
                            data-aos="fade-left"
                        >
                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                    paddingTop: "2rem",
                                    color: theme.palette.text.primary,
                                    fontFamily: "Lato, sans-serif",
                                    fontWeight: "light",
                                }}
                            >
                                {t("skills.category.connaissance.title")}
                            </Typography>
                            <Grid
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "start",
                                    justifyContent: "space-between",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                    [theme.breakpoints.down("sm")]: {
                                        // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                        flexDirection: "column",
                                    },
                                }}
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                {t("skills.category.connaissance.list", {
                                    returnObjects: true,
                                }).map((skill, index) => (
                                    <Skill
                                        key={skill.name}
                                        skill={skill}
                                        delay={index * 150}
                                    />
                                ))}
                            </Grid>
                        </Box>
                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        />
                        <Box
                            component="div"
                            disablegutters="true"
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                                justifyContent: "space-between",
                                gap: "1rem",
                            }}
                            data-aos="fade-left"
                        >
                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                    color: theme.palette.text.primary,
                                    fontFamily: "Lato, sans-serif",
                                    fontWeight: "light",
                                }}
                            >
                                {t("skills.category.langagesFrameworks.title")}
                            </Typography>
                            <Box
                                component="div"
                                disablegutters="true"
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "2rem",
                                    flexWrap: "wrap",
                                    overflow: "hidden",
                                    [theme.breakpoints.down("sm")]: {
                                        // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                        justifyContent: "center",
                                    },
                                }}
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                {t("skills.category.langagesFrameworks.list", {
                                    returnObjects: true,
                                }).map((skill, index) => (
                                    <Skill
                                        key={skill.name}
                                        skill={skill}
                                        delay={index * 150}
                                    />
                                ))}
                            </Box>
                        </Box>
                        <Divider
                            variant="middle"
                            sx={{
                                marginY: "2rem",
                                backgroundColor: theme.palette.text.secondary,
                            }}
                        />
                        <Box
                            component="div"
                            disablegutters="true"
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                gap: "2rem",
                            }}
                            data-aos="fade-left"
                        >
                            <Typography
                                sx={{
                                    fontSize: "2rem",
                                    color: theme.palette.text.primary,
                                    fontFamily: "Lato, sans-serif",
                                    fontWeight: "light",
                                }}
                            >
                                {t("skills.category.logicielsOutils.title")}
                            </Typography>
                            <Box
                                component="div"
                                disablegutters="true"
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "space-between",

                                    gap: "2rem",
                                    flexWrap: "wrap",
                                    overflow: "hidden",
                                    [theme.breakpoints.down("sm")]: {
                                        // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                        justifyContent: "center",
                                    },
                                }}
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                {t("skills.category.logicielsOutils.list", {
                                    returnObjects: true,
                                }).map((skill, index) => (
                                    <Skill
                                        key={skill.name}
                                        skill={skill}
                                        delay={index * 150}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </CustomArticleContainer>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
