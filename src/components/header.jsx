import React from "react";
import theme from "../theme";
import { Box, Typography } from "@mui/material";

export default function Header({ icon, data }) {
    const IconComponent = icon;

    // Fonction pour parser le texte et extraire les différents formats (**, ~~)
    const parseText = (inputText) => {
        const parts = [];
        let lastIndex = 0;

        // Regex pour trouver ** et ~~
        const boldRegex = /\*\*(.*?)\*\*/g;
        const smallRegex = /~~(.*?)~~/g;

        // Créer un tableau de toutes les correspondances avec leurs positions
        const allMatches = [];

        let boldMatch;
        while ((boldMatch = boldRegex.exec(inputText)) !== null) {
            allMatches.push({
                start: boldMatch.index,
                end: boldMatch.index + boldMatch[0].length,
                type: "bold",
                text: boldMatch[1],
            });
        }

        let smallMatch;
        while ((smallMatch = smallRegex.exec(inputText)) !== null) {
            allMatches.push({
                start: smallMatch.index,
                end: smallMatch.index + smallMatch[0].length,
                type: "small",
                text: smallMatch[1],
            });
        }

        // Trier par position
        allMatches.sort((a, b) => a.start - b.start);

        // Créer les parts
        allMatches.forEach((match) => {
            if (match.start > lastIndex) {
                parts.push({
                    type: "text",
                    text: inputText.substring(lastIndex, match.start),
                });
            }
            parts.push({
                type: match.type,
                text: match.text,
            });
            lastIndex = match.end;
        });

        if (lastIndex < inputText.length) {
            parts.push({
                type: "text",
                text: inputText.substring(lastIndex),
            });
        }

        return parts;
    };

    const textParts = parseText(data.header.texte);

    return (
        <Box
            component="header"
            disablegutters="true"
            sx={{ marginBottom: "2rem" }}
        >
            {/* For subtitle */}
            <Box
                sx={{
                    height: "min-content",
                    display: "inline-flex",
                    gap: 1,
                    padding: "9px 20px",
                    border: `2px solid ${theme.palette.grey[500]}`,
                    borderRadius: 5,
                    marginBottom: 5,
                    [theme.breakpoints.down("sm")]: {
                        width: "100%",
                        justifyContent: "center",
                    },
                    [theme.breakpoints.down("md")]: {
                        marginBottom: 2.5,
                    },
                }}
            >
                {IconComponent && (
                    <IconComponent
                        sx={{
                            width: ".9em",
                            height: ".9em",
                            color: theme.palette.grey[200],
                        }}
                    />
                )}
                <Typography
                    component="h1"
                    variant="body2"
                    sx={{
                        color: theme.palette.grey[100],
                        textTransform: "uppercase",
                        fontFamily: "Lato, sans-serif",
                    }}
                >
                    {data.header.subtitle}
                </Typography>
            </Box>
            {/* Zone text header */}
            <Typography
                component="h2"
                variant="h3"
                sx={{
                    color: theme.palette.grey[100],
                    fontFamily: theme.typography.fontFamilyPoiretOne,
                    fontWeight: "bold",
                }}
                data-aos="zoom-in"
                data-aos-delay="200"
            >
                {textParts.map((part, index) => {
                    if (part.type === "bold") {
                        return (
                            <Typography
                                key={index}
                                component="span"
                                variant="h3"
                                sx={{
                                    color: theme.palette.accent,
                                    fontFamily:
                                        theme.typography.fontFamilyPoiretOne,
                                    fontWeight: "bold",
                                }}
                            >
                                {part.text}
                            </Typography>
                        );
                    } else if (part.type === "small") {
                        return (
                            <Typography
                                key={index}
                                component="span"
                                sx={{
                                    fontSize: "0.5em !important",
                                    fontFamily:
                                        theme.typography.fontFamilyPoiretOne,
                                    fontWeight: "bold",
                                }}
                            >
                                {part.text}
                            </Typography>
                        );
                    }
                    return part.text;
                })}
            </Typography>
        </Box>
    );
}
