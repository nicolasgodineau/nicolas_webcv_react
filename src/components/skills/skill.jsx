import React from "react";
import theme from "../../theme";
import { Typography, Box, Icon } from "@mui/material";
import ProgressIncrementer from "./ProgressIncrementer.jsx";

export default function Skill({ skill, delay }) {
    return (
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
                gap: ".3rem",
                minWidth: "80px",
            }}
            data-aos="fade-left"
            data-aos-delay={`${delay}`}
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
            {skill.percentage && (
                <ProgressIncrementer targetPercentage={skill.percentage} />
            )}
            <Typography
                component="p"
                variant="body1"
                sx={{
                    color: theme.palette.text.primary,
                }}
            >
                {skill.name}
            </Typography>
        </Box>
    );
}
