import React from "react";
import { useTranslation } from "react-i18next";

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

    const experiences = t("resume.experiences", { returnObjects: true });

    // Récupère la dernière experience, pour supprimer du padding bottom
    const lastExperienceId = Object.keys(experiences).length;

    return (
        <CustomArticleContainer
            icon={faBriefcase}
            data={dataHeader}
            AosEffect={AosEffect}
            AosDelay={AosDelay}
        >
            {Object.values(experiences).map((experience, index) => (
                <Experience
                    key={experience.id}
                    experience={{
                        id: experience.id,
                        year: t(`resume.experiences.${experience.id}.year`),
                        title: t(`resume.experiences.${experience.id}.title`),
                        location: t(
                            `resume.experiences.${experience.id}.location`
                        ),
                        subtitle: t(
                            `resume.experiences.${experience.id}.subtitle`
                        ),
                        description: t(
                            `resume.experiences.${experience.id}.description`
                        ),
                    }}
                    lastExperienceId={lastExperienceId}
                    delay={index * 150}
                />
            ))}
        </CustomArticleContainer>
    );
}
