import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import Button from "@mui/material/Button";

import Nicolas from "../images/Nicolas.webp";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelect.jsx";

import useTopValue from "../hooks/useTopValue.js";

export default function SideBar({ selectedLanguage, handleChangeLanguage }) {
    const { t } = useTranslation();

    const topValue = useTopValue();

    const email = t("personalInformations.email");

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Box
                        position="sticky"
                        component="aside"
                        disablegutters="true"
                        fixed="true"
                        sx={{
                            width: "400px",
                            top: topValue,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            gap: 4,
                            padding: 4,
                            height: "fit-content",
                            border: `2px solid ${theme.palette.text.secondary}`,
                            borderRadius: 5,
                            backgroundColor: theme.palette.background.dark,
                            [theme.breakpoints.down("tablet")]: {
                                // Styles pour les écrans de largeur maximale "tablet" (1090px)
                                position: "initial",
                                width: "auto",
                                marginTop: "2rem",
                            },
                        }}
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
                        >
                            <Typography
                                component="h2"
                                variant="h4"
                                sx={{
                                    color: theme.palette.text.primary,
                                }}
                            >
                                {t("personalInformations.name")}
                            </Typography>
                            <List sx={{ padding: "0px" }}>
                                <ListItemText>
                                    {t("personalInformations.titleLine1")}
                                </ListItemText>
                                <ListItemText>
                                    & {t("personalInformations.titleLine2")}
                                </ListItemText>
                            </List>
                        </Box>
                        <Avatar
                            component="div"
                            variant="square"
                            src={Nicolas}
                            sx={{
                                width: 240,
                                height: 240,
                                borderRadius: 7,
                            }}
                        />
                        <List
                            dense={true}
                            disablePadding={true}
                            sx={{
                                color: theme.palette.text.secondary,
                                margin: 0,
                            }}
                        >
                            <ListItem
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
                            </ListItem>
                            <ListItem
                                component="h2"
                                disablePadding={true}
                                sx={{
                                    fontSize: 24,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                {t("personalInformations.baseIn")}{" "}
                                {t("personalInformations.city")},
                                {t("personalInformations.country")}
                            </ListItem>
                        </List>
                        {/* <List
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
                            {personalInformations.links.map((link) => (
                                <ListItem
                                    key={link.id}
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
                                >
                                    <Link
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Instagram"
                                        href="#"
                                        color="inherit"
                                    >
                                        {" "}
                                        <Icon
                                            className={link.className}
                                            sx={{
                                                ":hover": {
                                                    cursor: "pointer",
                                                    color: theme.palette.accent,
                                                    border: `1px solid ${theme.palette.accent}`,
                                                },
                                            }}
                                        />
                                    </Link>
                                </ListItem>
                            ))}
                        </List> */}
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
                            >
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                    href="https://www.instagram.com/nicolasg_travel/"
                                    color="inherit"
                                >
                                    {" "}
                                    <InstagramIcon />
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
                                backgroundColor: theme.palette.accent,
                                border: `2px solid ${theme.palette.accent}`,
                                color: "black",
                                ":hover": {
                                    cursor: "pointer",
                                    color: theme.palette.accent,
                                    backgroundColor:
                                        theme.palette.background.dark,
                                },
                            }}
                            variant="text"
                            startIcon={<MailOutlineIcon />}
                        >
                            {t("personalInformations.textCallToAction")}
                        </Button>
                    </Box>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
