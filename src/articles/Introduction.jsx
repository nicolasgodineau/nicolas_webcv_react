import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../components/theme/theme";
import { Typography } from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle

export default function Introduction() {
    const { t } = useTranslation();

    const dataHeader = {
        header: {
            subtitle: t("introduction.header.subtitle"),
            texte: t("introduction.header.text"),
        },
    };
    return (
        <CustomArticleContainer icon={faHouse} data={dataHeader}>
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
        </CustomArticleContainer>
    );
}
