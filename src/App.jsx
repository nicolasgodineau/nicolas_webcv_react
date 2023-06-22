import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./components/theme/theme";

import MainOne from "./components/mainOne.jsx";
import SideBar from "./components/sideBar.jsx";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <div className="h-[100svh] text-text bg-blackTheme">
                    <SideBar />
                    {/*  <MainOne /> */}
                </div>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default App;
