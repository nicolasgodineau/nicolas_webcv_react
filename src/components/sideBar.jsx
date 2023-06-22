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
} from "@mui/material";
import Button from "@mui/material/Button";

import Nicolas from "../images/Nicolas.webp";

export default function () {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Container
                        component="aside"
                        fixed
                        maxWidth="xs"
                        sx={{
                            position: "fixed",
                            left: 0,
                            top: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            margin: 0,
                            padding: 7,
                            border: "1px solid white",
                            borderRadius: 7,
                        }}
                    >
                        <Container
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "start",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h2"
                                color={theme.palette.light.main}
                            >
                                Nicolas
                            </Typography>
                            <List sx={{ padding: "0px" }}>
                                <ListItemText>Web Developper</ListItemText>
                                <ListItemText>& Photographer</ListItemText>
                            </List>
                        </Container>
                        <Avatar
                            src={Nicolas}
                            sx={{ width: 240, height: 240 }}
                        />
                        <List
                            sx={{ color: theme.palette.light.main, margin: 4 }}
                        >
                            <ListItem
                                disablePadding="true"
                                component="h2"
                                sx={{ fontSize: 24 }}
                            >
                                hello@nicolasgodineau.com
                            </ListItem>
                            <ListItem
                                disablePadding="true"
                                component="h2"
                                sx={{ fontSize: 24, marginBottom: 3 }}
                            >
                                Base in Montreal, Canada
                            </ListItem>
                            <ListItem
                                disablePadding="true"
                                component="h3"
                                sx={{ fontSize: 16, marginBottom: 4 }}
                            >
                                ©{currentYear} Nicolas.All right reserved
                            </ListItem>
                        </List>
                        <List
                            dense="true"
                            disablePadding="true"
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                marginBottom: 3,
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
                                    border: "1px solid white",
                                    borderRadius: "50%",
                                    ":hover": {
                                        cursor: "pointer",
                                        color: theme.palette.accent.main,
                                        border: `1px solid ${theme.palette.accent.main}`,
                                    },
                                }}
                            >
                                <Link href="#" color="inherit">
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
                                    border: "1px solid white",
                                    borderRadius: "50%",
                                    ":hover": {
                                        cursor: "pointer",
                                        color: theme.palette.accent.main,
                                        border: `1px solid ${theme.palette.accent.main}`,
                                    },
                                }}
                            >
                                <Link href="#" color="inherit">
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
                                    border: "1px solid white",
                                    borderRadius: "50%",
                                    ":hover": {
                                        cursor: "pointer",
                                        color: theme.palette.accent.main,
                                        border: `1px solid ${theme.palette.accent.main}`,
                                    },
                                }}
                            >
                                <Link href="#" color="inherit">
                                    <WebsiteIcon />
                                </Link>
                            </ListItem>
                        </List>
                        <Button
                            sx={{
                                width: "100%",
                                padding: "12px 44px",
                                borderRadius: 32,
                                backgroundColor: theme.palette.accent.main,
                                border: `2px solid ${theme.palette.accent.main}`,
                                color: "black",
                                ":hover": {
                                    cursor: "pointer",
                                    color: theme.palette.accent.main,
                                    backgroundColor:
                                        theme.palette.background.dark,
                                },
                            }}
                            variant="text"
                            startIcon={<MailOutlineIcon />}
                        >
                            HIT ME !
                        </Button>
                    </Container>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
