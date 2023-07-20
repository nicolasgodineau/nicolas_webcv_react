import React from "react";
import theme from "./theme/theme.js";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ icon, data, variant, fontSize }) {
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
        <Box component="header" disablegutters="true" sx={{ marginBottom: 1 }}>
            {/* For subtitle */}
            <Box
                sx={{
                    height: "min-content",
                    display: "inline-flex",
                    gap: 1,
                    padding: "9px 20px",
                    border: `2px solid ${theme.palette.text.secondary}`,
                    borderRadius: 5,
                    marginBottom: 5,
                    [theme.breakpoints.down("tablet")]: {
                        // Styles pour les écrans de largeur maximale "tablet" (1090px)
                        marginBottom: 2.5,
                    },
                }}

            >
                <FontAwesomeIcon icon={icon} />
                <Typography
                    component="h4"
                    sx={{
                        fontSize: "14px",
                        color: theme.palette.primary,
                        textTransform: "uppercase",
                        fontFamily: "Lato, sans-serif",
                    }}
                >
                    {data.header.subtitle}
                </Typography>
            </Box>
            {/* Zone text header */}
            <Typography
                component="h1"
                variant={variant}
                sx={{
                    fontSize: { fontSize },
                    fontFamily: "Poiret One, cursive",
                    fontWeight: "bold",
                }}
            >
                {extractedTexts.beforeText}
                <Typography
                    component="span"
                    variant={variant}
                    sx={{
                        fontSize: { fontSize },
                        color: theme.palette.accent,
                    }}
                >
                    {extractedTexts.extractedText}
                </Typography>
                {extractedTexts.afterText}
            </Typography>
        </Box>
    );
}
