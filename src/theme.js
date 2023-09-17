import { createTheme, responsiveFontSizes } from "@mui/material";
import { grey } from "@mui/material/colors";

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
        body3: {
            fontSize: "1.1rem",
        },
    },
    spacing: 8,
    palette: {
        accent: "#28e98c",
        accentTransparent: "#28e98c0f",
        danger: "#c62828",
        dangerTransparent: "#c628280f",
        black: "#131516",
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
