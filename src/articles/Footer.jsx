import React from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme";
import { Box, Typography } from "@mui/material";

export default function Footer() {
    const { t } = useTranslation();

    const anneeEnCours = new Date().getFullYear();

    return (
        <Box component="footer" sx={{ padding: 1, textAlign: "center" }}>
            <Typography
                component="p"
                variant="body2"
                sx={{
                    padding: 1,
                    color: theme.palette.text.secondary,
                }}
            >
                {t("footer.line1")} - {anneeEnCours}
            </Typography>
            <Typography
                component="p"
                variant="body2"
                sx={{
                    fontSize: ".5rem",
                    padding: 0,
                    color: theme.palette.text.secondary,
                }}
            >
                {t("footer.line2")}
            </Typography>
        </Box>
    );
}
