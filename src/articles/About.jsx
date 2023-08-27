import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme";
import { Typography } from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import PersonIcon from "@mui/icons-material/Person";

export default function About({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("about.header.subtitle"),
            texte: t("about.header.text"),
        },
    };
    return (
        <CustomArticleContainer
            icon={PersonIcon}
            data={dataHeader}
            AosEffect={AosEffect}
            AosDelay={AosDelay}
        >
            <Typography
                component="p"
                variant="subtitle1"
                sx={{
                    maxWidth: "480px",
                    marginBottom: "30px",
                    color: theme.palette.grey[400],
                }}
            >
                {t("about.description")}
            </Typography>
        </CustomArticleContainer>
    );
}
