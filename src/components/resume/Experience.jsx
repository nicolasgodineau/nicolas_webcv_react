import React from "react";
import theme from "../theme/theme.js";
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Box,
} from "@mui/material";
import { faCircle } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Experience({ experience, delay, index }) {
    return (
        <Container
            component="div"
            disablegutters="true"
            key={index}
            sx={{
                marginBottom: 2,
                paddingRight: 0,
                paddingRight: "0px!important",
                [theme.breakpoints.down("sm")]: {
                    // Styles pour les écrans de largeur maximale 600px
                    padding: 0,
                },
                overflow: "hidden",
            }}
            data-aos="fade-up"
            data-aos-delay={`${delay}`}
        >
            {/* Conteneur pour chaque expérience */}
            <Container
                component="div"
                disablegutters="true"
                sx={{
                    position: "relative",
                    paddingLeft: 6,
                    paddingRight: "0px!important",
                    paddingBottom: 0,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 7,
                        left: 0,
                        width: "12px",
                        height: "12px",
                        borderRadius: "50px",
                        /*                         background:
                            index === 0
                                ? theme.palette.accent
                                : theme.palette.text.secondary, */
                        background: theme.palette.text.secondary,
                        zIndex: 10,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        backgroundColor: "black",
                        top: 10,
                        left: 5,
                        width: "2px",
                        height: "99%",
                        borderRadius: "50px",
                        background: theme.palette.text.secondary,
                    },
                    [theme.breakpoints.down("sm")]: {
                        // Styles pour les écrans de largeur maximale 600px
                        paddingBottom: 0,
                        paddingLeft: 3,
                    },
                }}
            >
                {/* Affiche l'année de l'expérience */}
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 2,
                        paddingRight: 0,
                        [theme.breakpoints.down("sm")]: {
                            // Styles pour les écrans de largeur maximale 600px
                            flexDirection: "column",
                            alignItems: "start",
                            marginBottom: 1,
                        },
                    }}
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <Typography
                        component="p"
                        sx={{
                            display: "block",
                            /*                             color:
                                index === 0
                                    ? theme.palette.accent
                                    : theme.palette.text.primary, */
                            color: theme.palette.text.primary,
                        }}
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        {experience.year}
                    </Typography>
                    <Typography
                        component="p"
                        sx={{
                            display: "block",
                            fontSize: "12px",
                            color: theme.palette.text.secondary,
                        }}
                        data-aos="fade-left"
                        data-aos-delay="700"
                    >
                        {experience.location}
                    </Typography>
                </Box>

                {/* Affiche le titre de l'expérience */}
                <Typography
                    component="h2"
                    sx={{
                        fontSize: "clamp(1.2rem, 4vw, 2rem)",
                        marginBottom: "5px",
                        color: theme.palette.accent,
                    }}
                    data-aos="fade-up"
                    data-aos-delay={`${delay}`}
                >
                    {experience.title.charAt(0).toUpperCase() +
                        experience.title.substring(1)}
                    {/* Récupère la première lettre de la phrase avec `charAt(0)` et la met en majuscule avec `toUpperCase()`. */}
                    {/* Concatène la première lettre en majuscule avec le reste du texte en utilisant `substring(1)`. */}
                </Typography>
                {experience.subtitle && (
                    <Typography
                        component="h3"
                        sx={{
                            fontSize: "16px",
                            fontWeight: "regular",
                            marginBottom: "5px",
                            color: theme.palette.text.primary,
                        }}
                        data-aos="fade-up"
                        data-aos-delay={`${delay}`}
                    >
                        {experience.subtitle.charAt(0).toUpperCase() +
                            experience.subtitle.substring(1)}
                    </Typography>
                )}

                {/* Affiche la description de l'expérience */}
                <List
                    component="ul"
                    className="listExperience"
                    dense={false}
                    data-aos="fade-up"
                    data-aos-delay={`${delay}`}
                    sx={{
                        padding: 0,
                    }}
                >
                    {experience.descriptions.map((description, index) => (
                        <ListItem
                            component="li"
                            alignItems="flex-start"
                            dense={true}
                            key={index}
                            sx={{
                                fontSize: "16px",
                                color: theme.palette.text.secondary,
                                paddingRight: 0,
                                [theme.breakpoints.down("xs")]: {
                                    // Styles pour les écrans de largeur maximale 600px
                                    padding: 0,
                                },
                            }}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <ListItemIcon
                                sx={{
                                    fontSize: 9,
                                    marginTop: 0,
                                    paddingTop: 1,
                                    [theme.breakpoints.down("sm")]: {
                                        // Styles pour les écrans de largeur maximale 600px
                                        minWidth: "24px",
                                    },
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    color={theme.palette.text.secondary}
                                    sx={{
                                        [theme.breakpoints.down("sm")]: {
                                            // Styles pour les écrans de largeur maximale 600px
                                            minWith: "24px",
                                        },
                                    }}
                                />
                            </ListItemIcon>
                            {description.line}
                        </ListItem>
                    ))}
                </List>
            </Container>
        </Container>
    );
}
