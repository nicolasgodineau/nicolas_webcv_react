import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../components/theme/theme";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";

import CustomArticleContainer from "components/CustomArticleContainer.jsx";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle

export default function Introduction({ AosEffect, AosDelay }) {
    const { t } = useTranslation();

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
                    <CustomArticleContainer
                        icon={faHouse}
                        data={dataHeader}
                        AosEffect={AosEffect}
                        AosDelay={AosDelay}
                    >
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
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
