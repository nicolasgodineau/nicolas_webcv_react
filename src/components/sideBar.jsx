import React from "react";
import theme from "../components/theme/theme";

import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebsiteIcon from "@mui/icons-material/Language";
import {
    CssBaseline,
    Container,
    Box,
    Typography,
    ThemeProvider,
    List,
    ListItem,
    ListItemText,
    Avatar,
    Link,
    IconButton,
    Icon,
} from "@mui/material";
import Button from "@mui/material/Button";

import Nicolas from "../images/Nicolas.webp";
import data from "../data.json"; // import des data

export default function () {
    const personalInformations = data.personalInformations; // Extraire la data
    const currentYear = new Date().getFullYear();

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
                            top: "72px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            padding: 4,
                            height: 700,
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
                                {personalInformations.name}
                            </Typography>
                            <List sx={{ padding: "0px" }}>
                                <ListItemText>
                                    {personalInformations.titleLine1}
                                </ListItemText>
                                <ListItemText>
                                    & {personalInformations.titleLine2}
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
                                component="h2"
                                disablePadding={true}
                                sx={{
                                    fontSize: 24,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                {personalInformations.email}
                            </ListItem>
                            <ListItem
                                component="h2"
                                disablePadding={true}
                                sx={{
                                    fontSize: 24,
                                    marginBottom: 3,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Base in {personalInformations.city},
                                {personalInformations.country}
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
                                    href="#"
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
                                    href="#"
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
                                    href="#"
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
                            HIT ME !
                        </Button>
                    </Box>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
