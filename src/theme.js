import { createTheme, responsiveFontSizes } from "@mui/material";

const loadLCPImage = async () => {
    const image = new Image();
    image.src = "../images/Nicolas.webp";

    await new Promise((resolve) => {
        image.onload = resolve;
        image.onerror = resolve;
    });

    return image;
};

let theme = createTheme({
    //Préchargement de l'image LCP
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @keyframes mui-preload-keyframes {
        from {
            visibility: hidden;
        }
        }
        .mui-preload-image {
        animation: mui-preload-keyframes 0s steps(1) forwards;
        visibility: hidden;
        position: absolute;
        top: -9999px;
        left: -9999px;
        }`,
            "@global": {
                ".mui-preload-image": {
                    backgroundImage: `url('../images/Nicolas.webp')`,
                },
            },
        },
    },
    typography: {
        fontFamily: "Lato, sans-serif", // Police par défaut
        fontWeightRegular: 300,
    },
    spacing: 8,
    palette: {
        primary: {
            main: "#999999",
        },
        background: {
            dark: "#1f1f1f",
            light: "#f9f9f9",
        },

        text: {
            primary: "#fff",
            secondary: "#999999",
        },

        accent: "#28e98c",
        danger: "#e92828c4",
    },
    breakpoints: {
        values: {
            xs: 450,
            sm: 600,
            md: 1090,
            lg: 1200,
        },
    },
});

theme = responsiveFontSizes(theme);

/* Mémo des variants typo */
/* 

    h1
    h2
    h3
    h4
    h5
    h6
    subtitle1
    subtitle2
    body1
    body2
    button
    caption
    overline

*/

// Préchargement de l'image LCP
loadLCPImage();
export default theme;
