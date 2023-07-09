import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    CssBaseline,
    ThemeProvider,
    IconButton,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import theme from "../components/theme/theme";

import FR from "../images/icons/FR.png";
import EN from "../images/icons/EN.png";

export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChangeLanguage = (language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        handleClose();
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Box
                    position="absolute"
                    top="-30px"
                    left="0px"
                    display="inline-flex"
                    alignItems="center"
                >
                    <IconButton
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <img
                            src={selectedLanguage === "en" ? EN : FR}
                            alt={
                                selectedLanguage === "en"
                                    ? "English Flag"
                                    : "French Flag"
                            }
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                        />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                borderRadius: "10px",

                                backgroundColor: theme.palette.background.dark,
                                overflow: "visible",
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                        }}
                        anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                        }}
                        MenuListProps={{
                            style: {
                                "& .Mui-selected": {
                                    backgroundColor:
                                        theme.palette.background.dark,
                                },
                            },
                        }}
                    >
                        <MenuItem
                            value="en"
                            selected={selectedLanguage === "en"}
                            onClick={() => handleChangeLanguage("en")}
                        >
                            <img
                                src={EN}
                                alt="English Flag"
                                style={{
                                    marginRight: "8px",
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                            English
                        </MenuItem>
                        <MenuItem
                            value="fr"
                            selected={selectedLanguage === "fr"}
                            onClick={() => handleChangeLanguage("fr")}
                        >
                            <img
                                src={FR}
                                alt="French Flag"
                                style={{
                                    marginRight: "8px",
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                            Français
                        </MenuItem>
                    </Menu>
                </Box>
            </ThemeProvider>
        </>
    );
}
