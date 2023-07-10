import React, { useState } from "react";
import theme from "../components/theme/theme";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebsiteIcon from "@mui/icons-material/Language";
import {
    CssBaseline,
    Box,
    Typography,
    ThemeProvider,
    List,
    ListItem,
    ListItemText,
    Avatar,
    Link,
    Container,
    useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";

import Nicolas from "../images/Nicolas.webp";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect.jsx";

import useTopValue from "../hooks/useTopValue.js";
import ContactModal from "./sidebar/ContactModal.jsx";

export default function SideBar({
    selectedLanguage,
    handleChangeLanguage,
    isMobileDevice,
    AosEffect,
    AosDelay,
}) {
    const { t } = useTranslation();
    const [showText, setShowText] = useState(true);

    const toggleContent = () => {
        setShowText(!showText);
    };
    const topValue = useTopValue();

    const isTablet = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
    const isMaxHeight670 = useMediaQuery(theme.breakpoints.down("670px"));

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container
                        disableGutters={isTablet} // Désactive les marges si c'est en mode tablette
                        sx={{
                            width: "max-content",
                            ...(isTablet && {
                                height: "100svh",
                            }),
                            [theme.breakpoints.down("tablet")]: {
                                // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                width: "100%",
                            },
                        }}
                    >
                        <Box
                            position="sticky"
                            component="aside"
                            disablegutters="true"
                            fixed="true"
                            sx={{
                                width: "max-content",
                                top: topValue,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                gap: 4,
                                padding: 4,
                                border: `2px solid ${theme.palette.text.secondary}`,
                                borderRadius: 5,
                                height: "fit-content",

                                backgroundColor: theme.palette.background.dark,
                                [theme.breakpoints.down("tablet")]: {
                                    // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                    position: "initial",
                                    width: "100%",
                                    marginTop: "2rem",
                                },
                                [theme.breakpoints.down("xs")]: {
                                    // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                    padding: 0,
                                    border: "none",
                                },
                                "@media (max-height: 680px)": {
                                    gap: "10px",
                                },
                                fontFamily: "Poiret One, cursive",
                                fontWeight: "bold",
                            }}
                            data-aos={isMobileDevice ? undefined : AosEffect}
                            data-aos-once={isMobileDevice ? "" : "true"}
                            data-aos-delay={isMobileDevice ? "" : { AosDelay }}
                        >
                            <LanguageSelect
                                selectedLanguage={selectedLanguage}
                                handleChangeLanguage={handleChangeLanguage}
                            />
                            <Box
                                component="div"
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "start",
                                    justifyContent: "space-between",
                                }}
                                data-aos={
                                    isMobileDevice ? undefined : "fade-right"
                                }
                                data-aos-once={
                                    isMobileDevice ? undefined : "true"
                                }
                            >
                                <Typography
                                    component="h2"
                                    variant="h4"
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontFamily: "Poiret One, cursive",
                                        fontWeight: "bold",
                                    }}
                                    data-aos={
                                        isMobileDevice
                                            ? undefined
                                            : "fade-right"
                                    }
                                    data-aos-once={
                                        isMobileDevice ? undefined : "true"
                                    }
                                    data-aos-delay="200"
                                >
                                    {t("personalInformations.name")}
                                </Typography>
                                <List
                                    component="ul"
                                    sx={{
                                        padding: "0px",
                                    }}
                                    data-aos={
                                        isMobileDevice
                                            ? undefined
                                            : "fade-right"
                                    }
                                    data-aos-once={
                                        isMobileDevice ? undefined : "true"
                                    }
                                    data-aos-delay="500"
                                >
                                    <ListItemText>
                                        {t("personalInformations.titleLine1")}
                                    </ListItemText>
                                    <ListItemText>
                                        & {t("personalInformations.titleLine2")}
                                    </ListItemText>
                                </List>
                            </Box>
                            {showText ? (
                                <>
                                    <Avatar
                                        component="div"
                                        variant="square"
                                        src={Nicolas}
                                        sx={{
                                            width: 240,
                                            height: 240,
                                            borderRadius: 7,
                                        }}
                                        data-aos={
                                            isMobileDevice
                                                ? undefined
                                                : "fade-right"
                                        }
                                        data-aos-once={
                                            isMobileDevice ? undefined : "true"
                                        }
                                    />
                                    <List
                                        dense={true}
                                        disablePadding={true}
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            margin: 0,
                                        }}
                                    >
                                        {/*                             <ListItem
                                component="a"
                                href={`mailto:${email}`}
                                disablePadding={true}
                                sx={{
                                    fontSize: 24,
                                    color: theme.palette.text.primary,
                                    textDecoration: "none",
                                    "&:hover": {
                                        textDecoration: "underline",
                                    },
                                }}
                            >
                                {email}
                            </ListItem> */}
                                        <ListItem
                                            component="li"
                                            disablePadding={true}
                                            sx={{
                                                fontSize: 24,
                                                color: theme.palette.text
                                                    .primary,
                                                fontFamily:
                                                    "Poiret One, cursive",
                                                fontWeight: "bold",
                                            }}
                                            data-aos={
                                                isMobileDevice
                                                    ? undefined
                                                    : "fade-right"
                                            }
                                            data-aos-once={
                                                isMobileDevice
                                                    ? undefined
                                                    : "true"
                                            }
                                        >
                                            {t("personalInformations.baseIn")}{" "}
                                            {t("personalInformations.city")},
                                            {t("personalInformations.country")}
                                        </ListItem>
                                    </List>
                                    <List
                                        dense={true}
                                        disablePadding={true}
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-evenly",
                                            marginBottom: 0,
                                        }}
                                    >
                                        <ListItem
                                            sx={{
                                                width: "50px",
                                                height: "50px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: 0,
                                                border: `2px solid ${theme.palette.text.secondary}`,
                                                borderRadius: "50%",
                                                ":hover": {
                                                    cursor: "pointer",
                                                    color: theme.palette.accent,
                                                    border: `1px solid ${theme.palette.accent}`,
                                                },
                                            }}
                                            data-aos={
                                                isMobileDevice
                                                    ? undefined
                                                    : "fade-right"
                                            }
                                            data-aos-once={
                                                isMobileDevice
                                                    ? undefined
                                                    : "true"
                                            }
                                            data-aos-delay="200"
                                        >
                                            <Link
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="Instagram"
                                                href="https://www.instagram.com/nicolasg_travel/"
                                                color="inherit"
                                            >
                                                {" "}
                                                {<InstagramIcon />}
                                            </Link>
                                        </ListItem>
                                        <ListItem
                                            sx={{
                                                width: "50px",
                                                height: "50px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: 0,
                                                border: `2px solid ${theme.palette.text.secondary}`,
                                                borderRadius: "50%",
                                                ":hover": {
                                                    cursor: "pointer",
                                                    color: theme.palette.accent,
                                                    border: `1px solid ${theme.palette.accent}`,
                                                },
                                            }}
                                            data-aos={
                                                isMobileDevice
                                                    ? undefined
                                                    : "fade-right"
                                            }
                                            data-aos-once={
                                                isMobileDevice
                                                    ? undefined
                                                    : "true"
                                            }
                                            data-aos-delay="400"
                                        >
                                            <Link
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="GitHub"
                                                href="https://github.com/nicolasgodineau"
                                                color="inherit"
                                            >
                                                <GitHubIcon />
                                            </Link>
                                        </ListItem>
                                        <ListItem
                                            sx={{
                                                width: "50px",
                                                height: "50px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: 0,
                                                border: `2px solid ${theme.palette.text.secondary}`,
                                                borderRadius: "50%",
                                                ":hover": {
                                                    cursor: "pointer",
                                                    color: theme.palette.accent,
                                                    border: `1px solid ${theme.palette.accent}`,
                                                },
                                            }}
                                            data-aos={
                                                isMobileDevice
                                                    ? undefined
                                                    : "fade-right"
                                            }
                                            data-aos-once={
                                                isMobileDevice
                                                    ? undefined
                                                    : "true"
                                            }
                                            data-aos-delay="600"
                                        >
                                            <Link
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="My website"
                                                href="https://www.nicolasgodineau.com"
                                                color="inherit"
                                            >
                                                <WebsiteIcon />
                                            </Link>
                                        </ListItem>
                                    </List>
                                    <Button
                                        sx={{
                                            width: "100%",
                                            padding: "12px 44px",
                                            borderRadius: 32,
                                            backgroundColor:
                                                theme.palette.accent,
                                            border: `2px solid ${theme.palette.accent}`,
                                            color: "black",
                                            ":hover": {
                                                cursor: "pointer",
                                                color: theme.palette.accent,
                                                backgroundColor:
                                                    theme.palette.background
                                                        .dark,
                                            },
                                        }}
                                        data-aos={
                                            isMobileDevice
                                                ? undefined
                                                : "fade-right"
                                        }
                                        data-aos-once={
                                            isMobileDevice ? undefined : "true"
                                        }
                                        variant="text"
                                        startIcon={<MailOutlineIcon />}
                                        onClick={toggleContent}
                                    >
                                        {t(
                                            "personalInformations.textCallToAction"
                                        )}
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <ContactModal
                                        toggleContent={toggleContent}
                                        isMobileDevice={isMobileDevice}
                                    />
                                </>
                            )}
                        </Box>
                        <Box
                            sx={{
                                margin: "0 auto",
                                color: theme.palette.accent,
                                display: "none",
                                [theme.breakpoints.down("tablet")]: {
                                    // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                    display: "block",
                                },
                            }}
                            className="arrow"
                        ></Box>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
