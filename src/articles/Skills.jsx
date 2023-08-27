import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme";
import { Typography, Box, Divider, Grid } from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import Skill from "../components/skills/skill.jsx"; // pour l'affichage d'un skill
import InterestsIcon from "@mui/icons-material/Interests";

export default function Skills({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("skills.header.subtitle"),
            texte: t("skills.header.text"),
        },
    };

    return (
        <CustomArticleContainer
            icon={InterestsIcon}
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
                <Grid
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        justifyContent: "flex-start",
                        gap: "1rem",
                        flexWrap: "wrap",
                        [theme.breakpoints.down("sm")]: {
                            // Styles pour les écrans de largeur maximale "md" (1090px)
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
                    justifyContent: "space-evenly",
                    gap: "1rem",
                }}
                data-aos="fade-left"
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: theme.palette.text.primary,
                        fontFamily: "Lato, sans-serif",
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
                        overflow: "hidden",
                        [theme.breakpoints.down("md")]: {
                            // Styles pour les écrans de largeur maximale "md" (1090px)
                            justifyContent: "start",
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
                    variant="h4"
                    sx={{
                        color: theme.palette.text.primary,
                        fontFamily: "Lato, sans-serif",
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
                        justifyContent: "space-evenly",
                        gap: "2rem",
                        overflow: "hidden",
                        [theme.breakpoints.down("md")]: {
                            // Styles pour les écrans de largeur maximale "md" (1090px)
                            justifyContent: "start",
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
    );
}
