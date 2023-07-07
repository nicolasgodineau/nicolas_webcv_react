import React from "react";
import theme from "../components/theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
    Box,
    Divider,
} from "@mui/material";

import Header from "components/header.jsx"; // pour le header de la section
import Skill from "../components/skills/skill.jsx"; // pour l'affichage d'un skill
import { faShapes } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import { useTranslation } from "react-i18next";

export default function Skills() {
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
                    <Container
                        component="article"
                        disablegutters="true"
                        maxWidth="false"
                        data-aos="fade-up"
                        sx={{
                            paddingY: 9,
                            maxWidth: "720px",
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
                            icon={faShapes}
                            data={dataHeader}
                            variant={"h1"}
                            fontSize={"clamp(2rem, 6vw, 3rem)"}
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
                                    paddingTop: "2rem",
                                }}
                            >
                                {t("skills.category.connaissance.title")}
                            </Typography>
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "start",
                                    justifyContent: "space-between",
                                    gap: "1rem",
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
                                    alignItems: "start",
                                    justifyContent: "space-between",
                                    gap: "2rem",
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
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
