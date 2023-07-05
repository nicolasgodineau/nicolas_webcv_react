import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/components/theme/theme.js";
import SideBar from "./components/SideBar.jsx";
import Introduction from "articles/Introduction.jsx";
import About from "articles/About.jsx";
import Resume from "articles/Resume.jsx";
import Skills from "articles/Skills.jsx";
import Portfolio from "articles/Portfolio.jsx";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Container
                    component="main"
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        backgroundColor: theme.palette.background.dark,
                        [theme.breakpoints.down("tablet")]: {
                            // Styles pour les écrans de largeur maximale "tablet" (1090px)
                            flexDirection: "column",
                        },
                    }}
                >
                    <SideBar />
                    <Container
                        component="section"
                        sx={{
                            [theme.breakpoints.down("tablet")]: {
                                // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                padding: 0,
                            },
                        }}
                    >
                        <Introduction />
                        <About />
                        <Resume />
                        <Skills />
                        <Portfolio />
                    </Container>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}
