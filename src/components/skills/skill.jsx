import React from "react";
import theme from "../theme/theme.js";
import {
    CssBaseline,
    ThemeProvider,
    Typography,
    Box,
    Icon,
} from "@mui/material";
import ProgressIncrementer from "./ProgressIncrementer.jsx";

export default function Skill({ skill }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Box
                    component="div"
                    disablegutters="true"
                    key={skill.id}
                    sx={{
                        height: "auto",
                        width: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                    }}
                >
                    {/* Affiche l'icône de compétence */}
                    {skill.className && ( // Affiche uniquement l'icon si il y a une className
                        <Icon
                            className={skill.className}
                            sx={{
                                fontSize: "70px",
                                margin: "auto",
                            }}
                        />
                    )}
                    {/* Utilise le composant ProgressIncrementer pour afficher et incrémenter progressivement le pourcentage */}
                    {skill.pourcentage && (
                        <ProgressIncrementer
                            targetPercentage={skill.pourcentage}
                        />
                    )}
                    <Typography
                        component="p"
                        sx={{
                            fontSize: "1rem",
                            color: theme.palette.primary,
                        }}
                    >
                        {skill.nom}
                    </Typography>
                </Box>
            </CssBaseline>
        </ThemeProvider>
    );
}
