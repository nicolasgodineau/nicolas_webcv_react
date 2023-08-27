import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme";
import { Typography } from "@mui/material";
import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import Experience from "../components/resume/Experience.jsx"; // pour l'affichage d'une experience
import WorkIcon from "@mui/icons-material/Work";

export default function Resume({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("resume.header.subtitle"),
            texte: t("resume.header.text"),
        },
    };

    return (
        <CustomArticleContainer
            icon={WorkIcon}
            data={dataHeader}
            AosEffect={AosEffect}
            AosDelay={AosDelay}
        >
            {/* Experiences */}
            <Typography
                component="h3"
                variant="h4"
                sx={{
                    paddingTop: "0",
                    paddingBottom: "1rem",
                    color: theme.palette.text.primary,
                    fontFamily: "Lato, sans-serif",
                }}
                data-aos="fade-up"
            >
                {t(`resume.experiences.title`)}
            </Typography>
            {t("resume.experiences.list", {
                returnObjects: true,
            }).map((experience, index) => (
                <Experience
                    key={index}
                    index={index}
                    experience={experience}
                    delay={index * 150}
                />
            ))}
            {/* Scolarité */}
            <Typography
                component="h3"
                variant="h4"
                sx={{
                    paddingTop: "2rem",
                    paddingBottom: "1rem",
                    color: theme.palette.text.primary,
                    fontFamily: "Lato, sans-serif",
                }}
                data-aos="fade-up"
                delay={100}
            >
                {t(`resume.schooling.title`)}
            </Typography>
            {t("resume.schooling.list", {
                returnObjects: true,
            }).map((experience, index) => (
                <Experience
                    key={index}
                    index={index}
                    experience={experience}
                    delay={index * 150}
                />
            ))}
        </CustomArticleContainer>
    );
}
