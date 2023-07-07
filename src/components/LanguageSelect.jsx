import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    CssBaseline,
    ThemeProvider,
    Box,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";
import theme from "../components/theme/theme";

import FR from "../images/icons/FR.png";
import EN from "../images/icons/EN.png";

export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const handleChangeLanguage = (event) => {
        const language = event.target.value;
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
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
                    sx={{
                        [theme.breakpoints.down("tablet")]: {
                            // Styles pour les écrans de largeur maximale "tablet" (1090px)
                            top: 0,
                            left: "32px",
                        },
                    }}
                >
                    <FormControl>
                        <Select
                            value={selectedLanguage}
                            onChange={handleChangeLanguage}
                            variant="standard"
                            renderValue={(selected) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {selected === "en" ? (
                                        <img
                                            src={EN}
                                            alt="English Flag"
                                            style={{
                                                marginRight: "8px",
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={FR}
                                            alt="French Flag"
                                            style={{
                                                marginRight: "8px",
                                                width: "20px",
                                                height: "20px",
                                            }}
                                        />
                                    )}
                                </Box>
                            )}
                            MenuProps={{
                                PaperProps: {
                                    elevation: 0, // Niveau d'élévation du Paper (0 pour pas d'ombre)
                                    sx: {
                                        borderRadius: "8px", // Bordure arrondie du Paper
                                        marginTop: "8px", // Marge supérieure
                                        backgroundColor:
                                            theme.palette.background.dark,
                                    },
                                },
                                MenuListProps: {
                                    sx: {
                                        "& .Mui-selected": {
                                            backgroundColor:
                                                theme.palette.text.accent, // Couleur de fond pour l'élément sélectionné
                                        },
                                    },
                                },
                            }}
                        >
                            <MenuItem value="en">
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
                            <MenuItem value="fr">
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
                        </Select>
                    </FormControl>
                </Box>
            </ThemeProvider>
        </>
    );
}
