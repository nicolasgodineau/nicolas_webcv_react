import React from "react";
import theme from "../theme/theme.js";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
    Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressIncrementer from "./ProgressIncrementer.jsx";
import { icons } from "../../IconsImports.js";

export default function Skill({ skill }) {
    const { icon } = icons[skill.icone];
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
                        margin: 0,
                    }}
                >
                    {/* Affiche l'icône de compétence */}
                    <FontAwesomeIcon
                        icon={icon}
                        size="5x"
                        sx={{
                            margin: "auto auto auto auto",
                        }}
                    />
                    {/* Utilise le composant ProgressIncrementer pour afficher et incrémenter progressivement le pourcentage */}
                    <ProgressIncrementer targetPercentage={skill.pourcentage} />
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
