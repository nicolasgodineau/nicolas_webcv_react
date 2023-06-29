import React, { useState, useEffect } from "react";
import theme from "../theme/theme";
import { Typography } from "@mui/material";

// Composant qui incrémente progressivement un pourcentage jusqu'à une valeur cible
export default function ProgressIncrementer({ targetPercentage }) {
    // État local pour stocker le pourcentage actuel
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        // Vérifie si le pourcentage actuel est déjà égal au pourcentage cible
        if (percentage === targetPercentage) return;

        // Démarre un intervalle pour incrémenter progressivement le pourcentage
        const interval = setInterval(() => {
            setPercentage((prevPercentage) => {
                // Si le pourcentage atteint le pourcentage cible, arrête l'intervalle
                if (prevPercentage === targetPercentage) {
                    clearInterval(interval);
                    return prevPercentage;
                }
                // Incrémente le pourcentage de 1
                return prevPercentage + 1;
            });
        }, 30); // rapidité de l'execution

        // Nettoie l'intervalle lorsque le composant est démonté
        return () => {
            clearInterval(interval);
        };
    }, [targetPercentage]);

    return (
        <>
            <Typography
                component="p"
                sx={{
                    fontSize: "2.5rem",
                    color: theme.palette.accent,
                }}
            >
                {percentage}%
            </Typography>
        </>
    );
}
