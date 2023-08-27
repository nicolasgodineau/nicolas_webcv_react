import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme";
import { Typography } from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import HomeIcon from "@mui/icons-material/Home";

export default function Introduction({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("introduction.header.subtitle"),
            texte: t("introduction.header.text"),
        },
    };
    return (
        <CustomArticleContainer
            icon={HomeIcon}
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
                    color: theme.palette.text.secondary,
                }}
            >
                {t("introduction.description")}
            </Typography>
        </CustomArticleContainer>
    );
}
