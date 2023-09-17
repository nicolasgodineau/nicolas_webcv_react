import React from "react";

import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

export default function WheelProject() {
    const { t } = useTranslation();
    const theme = useTheme();
    const translatedText = t("personalInformations.projects");

    const isMdScreen = useMediaQuery(theme.breakpoints.down("sm"));

    // Définissez des valeurs conditionnelles en fonction de la taille de l'écran
    const svgWidth = isMdScreen ? "150px" : "200px";
    const viewBox = isMdScreen ? "19 19 62 60" : "20 20 60 60";

    const scrollToPortfolio = () => {
        const portfolioElement = document.getElementById("#portfolio");
        if (portfolioElement) {
            portfolioElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <Button
            onClick={scrollToPortfolio}
            sx={{
                position: "relative",
                borderRadius: "9999px",
                textTransform: "none",
                color: "inherit",
                fontSize: "11px",
                padding: "0",
                border: `2px solid ${theme.palette.grey[400]}`,
                ":hover": {
                    border: `2px solid ${theme.palette.accent}`,
                    backgroundColor: theme.palette.accentTransparent,
                },
                [theme.breakpoints.down("sm")]: {
                    display: "block",
                    margin: "0 auto",
                },
            }}
        >
            <svg
                className="rotating-svg"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: svgWidth,
                }}
                viewBox={viewBox}
            >
                <path
                    id="circlePath"
                    fill="none"
                    d="
                    M 30, 50 a 20,20 0 1,1 40,0 20,20 0 1,1 -40,0    
        "
                />
                <text
                    id="text"
                    fontSize="11"
                    fill={theme.palette.grey[100]}
                    fontFamily="Poiret One, cursive"
                >
                    <textPath id="textPath" href="#circlePath">
                        {translatedText}
                    </textPath>
                </text>
            </svg>
            <Box
                className="arrowNotAnimed"
                sx={{
                    position: "absolute",
                    top: "100px",
                    left: "100px",
                    transform: "translate(-50%, -50%)",
                    [theme.breakpoints.down("sm")]: {
                        top: "68px",
                        left: "75px",
                    },
                }}
            ></Box>
        </Button>
    );
}
