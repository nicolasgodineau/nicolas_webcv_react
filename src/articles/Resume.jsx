import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../components/theme/theme";
import { Typography } from "@mui/material";
import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import Experience from "../components/resume/Experience.jsx"; // pour l'affichage d'une experience
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle

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
            icon={faBriefcase}
            data={dataHeader}
            AosEffect={AosEffect}
            AosDelay={AosDelay}
        >
            {/* Experiences */}
            <Typography
                sx={{
                    fontSize: "2rem",
                    paddingTop: "2rem",
                    color: theme.palette.text.primary,
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "light",
                }}
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
                sx={{
                    fontSize: "2rem",
                    paddingTop: "2rem",
                    color: theme.palette.text.primary,
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "light",
                }}
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
                    delay={index * 100}
                />
            ))}
        </CustomArticleContainer>
    );
}
