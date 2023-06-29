import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/theme/theme";

import SideBar from "./components/SideBar.jsx";
import Introduction from "sections/Introduction.jsx";
import About from "sections/About.jsx";
import Resume from "sections/Resume.jsx";
import Skills from "sections/Skills.jsx";

import { icons } from "./IconsImports.js";

import WorkIcon from "@mui/icons-material/Work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <SideBar />
                <Container component="main">
                    <Introduction />
                    <About />
                    <Resume />
                    <Skills />
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}
