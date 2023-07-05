import { createTheme } from "@mui/material";

const theme = createTheme({
    spacing: 8,
    palette: {
        background: {
            dark: "#1f1f1f",
            light: "#f9f9f9",
        },

        text: {
            primary: "#fff",
            secondary: "#999999",
            accent: "#28e98c",
        },
        accent: "#28e98c",
    },
    breakpoints: {
        values: {
            xs: 450,
            sm: 600,
            sm2: 720,
            md: 900,
            tablet: 1090,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
