import React from "react";
import theme from "./theme/theme";

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
} from "@mui/material";
import Button from "@mui/material/Button";

import Nicolas from "../images/Nicolas.webp";

export default function () {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Box
                        component="aside"
                        disablegutters="true"
                        fixed="true"
                        sx={{
                            width: "400px",
                            /* position: "fixed",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)", */
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            /* margin: "0 0 0 30px", */
                            padding: 4,
                            height: 700,
                            border: `2px solid ${theme.palette.text.secondary}`,
                            borderRadius: 5,
                            backgroundColor: theme.palette.background.dark,
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
                                Nicolas
                            </Typography>
                            <List sx={{ padding: "0px" }}>
                                <ListItemText>Web Developper</ListItemText>
                                <ListItemText>& Photographer</ListItemText>
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
                                hello@nicolasgodineau.com
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
                                Base in Montreal, Canada
                            </ListItem>
                            <ListItem
                                component="h3"
                                disablePadding={true}
                                sx={{ fontSize: 16, marginBottom: 4 }}
                            >
                                ©{currentYear} Nicolas.All right reserved
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
