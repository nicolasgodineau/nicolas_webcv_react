import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/theme/theme";

import SideBar from "./components/SideBar.jsx";
import Introduction from "components/Introduction.jsx";
import ContainerMain from "components/ContainerMain.jsx";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <SideBar />
                <ContainerMain>
                    <Introduction />
                </ContainerMain>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
