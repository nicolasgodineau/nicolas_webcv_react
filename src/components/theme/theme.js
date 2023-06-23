import { createTheme } from "@mui/material";

const theme = createTheme({
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
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
