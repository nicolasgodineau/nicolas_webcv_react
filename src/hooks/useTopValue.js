import React, { useEffect, useState } from "react";

function calculateTopValue(screenHeight) {
    return screenHeight < 800 ? "2rem" : "72px"; // Remplacez '72px' par la valeur de top souhaitée pour les écrans supérieurs à 800px
}

function useTopValue() {
    const [topValue, setTopValue] = useState("72px"); // Valeur de top par défaut

    useEffect(() => {
        const handleResize = () => {
            const screenHeight = window.innerHeight;
            const newTopValue = calculateTopValue(screenHeight);
            setTopValue(newTopValue);
        };

        handleResize(); // Appel initial pour définir la valeur de top en fonction de la hauteur de l'écran au chargement de la page

        window.addEventListener("resize", handleResize); // Écouteur d'événement pour gérer les changements de taille de l'écran

        return () => {
            window.removeEventListener("resize", handleResize); // Nettoyage de l'écouteur d'événement lors du démontage du composant
        };
    }, []);

    return topValue;
}

export default useTopValue;
