import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0b1847",
        },

        secondary: {
            main: "#4c66dc",
        },

        light: {
            main: "#ffffff",
        },

        background: {
            dark: "#1f1f1f",
            light: "#f9f9f9",
        },

        text: {
            primary: "#fffff",
            secondary: "#999999",
            links: "#185ce3",
        },
        accent: {
            main: "#28e98c",
        },
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

    typography: {
        //https://mui.com/material-ui/customization/typography/
        fontFamily: "Roboto, sans-serif", // Default font family

        h1: {
            fontFamily: "Roboto Flex, sans-serif", // Font family for h1 variant
        },
        h2: {
            fontFamily: "Inter, sans-serif", // Font family for h2 variant
        },
        h4: {
            fontFamily: "Inter, sans-serif", // Font family for h2 variant
        },
        heading: {
            fontFamily: "Times, serif", // Font family for heading variant
        },
        subtitle1: {
            fontFamily: "Helvetica", // Font family for subtitle1 variant
        },
        body: {
            fontFamily: "Inter, sans-serif", // Font family for body variant
        },
        button: {
            // fontStyle: 'italic',
            fontFamily: "Roboto Flex, sans-serif", // Font family for body variant
        },
    },
});

export default theme;
