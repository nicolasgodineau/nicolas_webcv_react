import React, { useState, useEffect, useRef } from "react";
import theme from "../theme/theme";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProgressIncrementer({ targetPercentage }) {
    const [percentage, setPercentage] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        // Options de l'Intersection Observer
        const options = {
            root: null, // Utilise la fenêtre principale comme racine
            rootMargin: "0px",
            threshold: 0.5, // Seuil de déclenchement (à moitié visible)
        };

        // Gestionnaire d'intersection pour l'Intersection Observer
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounting(); // Démarre le décompte lorsque l'élément devient visible
                } else {
                    stopCounting(); // Arrête le décompte lorsque l'élément devient invisible
                }
            });
        };

        // Fonction pour démarrer le décompte
        const startCounting = () => {
            const interval = setInterval(() => {
                setPercentage((prevPercentage) => {
                    if (prevPercentage === targetPercentage) {
                        clearInterval(interval);
                        return prevPercentage;
                    }
                    return prevPercentage + 1;
                });
            }, 30);
        };

        // Fonction pour réinitialiser le décompte
        const stopCounting = () => {
            setPercentage(0);
        };

        // Création de l'Intersection Observer avec le gestionnaire d'intersection et les options
        let observer;
        if (elementRef.current) {
            observer = new IntersectionObserver(handleIntersection, options);
            observer.observe(elementRef.current); // Attache l'observer à l'élément référencé
        }
        const currentElement = elementRef.current;
        // Nettoyage de l'Intersection Observer lorsque le composant est démonté
        return () => {
            if (observer && currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [targetPercentage]);

    useEffect(() => {
        AOS.init(); // Initialise AOS pour les animations
    }, []);

    return (
        <div ref={elementRef} data-aos="fade-up">
            {" "}
            {/* Élément référencé pour l'Intersection Observer et animation AOS */}
            <Typography
                component="p"
                sx={{
                    fontSize: "clamp(1.2rem, 3vw, 2.3rem)",
                    fontWeight: "bolder",
                    color: theme.palette.accent,
                }}
            >
                {percentage}%
            </Typography>
        </div>
    );
}
