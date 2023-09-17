import React from "react";
import theme from "../theme";
import { Box, Typography } from "@mui/material";

export default function Header({ icon, data }) {
    const IconComponent = icon;

    // Fonction pour extraire le texte entouré de ** et les parties avant et après
    const extractTextAndSurroundings = (inputText) => {
        const regex = /\*\*(.*?)\*\*/g; // regex pour extraire un mot entrouré de 2 **
        const matches = inputText.match(regex); // Recherche de toutes les correspondances

        if (matches && matches.length > 0) {
            // S'il y a des correspondances
            const match = matches[0]; // Prendre la première correspondance
            const startIndex = inputText.indexOf(match); // Indice de début de la correspondance
            const endIndex = startIndex + match.length; // Indice de fin de la correspondance
            const beforeText = inputText.substring(0, startIndex); // Partie de texte avant la correspondance
            const afterText = inputText.substring(endIndex); // Partie de texte après la correspondance
            const extractedText = match.replace(/\*\*/g, ""); // Texte extrait sans les **

            return {
                extractedText, // Propriété contenant le texte extrait
                beforeText, // Propriété contenant la partie de texte avant la correspondance
                afterText, // Propriété contenant la partie de texte après la correspondance
            };
        }

        return null; // Si aucune correspondance n'est trouvée, renvoyer null
    };

    const extractedTexts = extractTextAndSurroundings(data.header.texte); // Appel de la fonction d'extraction

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
                    fontFamily: "Poiret One, cursive",
                    fontWeight: "bold",
                }}
                data-aos="zoom-in"
                data-aos-delay="200"
            >
                {extractedTexts.beforeText}
                <Typography
                    component="span"
                    variant="h3"
                    sx={{
                        color: theme.palette.accent,
                        fontFamily: "Poiret One, cursive",
                        fontWeight: "bold",
                    }}
                >
                    {extractedTexts.extractedText}
                </Typography>
                {extractedTexts.afterText}
            </Typography>
        </Box>
    );
}
