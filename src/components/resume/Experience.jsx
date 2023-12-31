import React from "react";
import theme from "../../theme";
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Box,
} from "@mui/material";

export default function Experience({ experience, delay, index }) {
    return (
        <Container
            component="div"
            disablegutters="true"
            maxWidth="false"
            key={index}
            sx={{
                marginBottom: 2,
                paddingRight: "0px!important",
                [theme.breakpoints.down("sm")]: {
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
                        width: 12,
                        height: 12,
                        borderRadius: "50px",
                        background: theme.palette.grey[500],
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
                        background: theme.palette.grey[500],
                    },
                    [theme.breakpoints.down("sm")]: {
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
                        marginBottom: "1rem",
                        paddingRight: 0,
                        [theme.breakpoints.down("sm")]: {
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
                        variant="body3"
                        sx={{
                            display: "block",
                            color: theme.palette.grey[50],
                        }}
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        {experience.year}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{
                            display: "block",
                            color: theme.palette.grey[400],
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
                    variant="h4"
                    sx={{
                        marginBottom: "1rem",
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
                        variant="subtitle1"
                        sx={{
                            marginBottom: "1rem",
                            color: theme.palette.grey[50],
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
                        display: "flex",
                        flexDirection: "column",
                        gap: ".3rem",
                        padding: 0,
                    }}
                >
                    {experience.descriptions.map((description, index) => (
                        <ListItem
                            component="li"
                            dense={true}
                            key={index}
                            sx={{
                                display: "flex",
                                alignItems: "baseline",
                                color: theme.palette.grey[400],
                                padding: "0 0 0 1rem",
                                [theme.breakpoints.down("sm")]: {
                                    padding: 0,
                                },
                            }}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <ListItemIcon
                                sx={{
                                    height: 10,
                                    minWidth: 10,
                                    bgcolor: theme.palette.grey[400],
                                    borderRadius: 5,
                                    marginRight: "2rem",
                                    [theme.breakpoints.down("sm")]: {
                                        height: 8,
                                        minWidth: 8,
                                        marginRight: ".5rem",
                                    },
                                }}
                            />

                            <Typography
                                component="p"
                                variant="body1"
                                sx={{
                                    color: theme.palette.grey[400],
                                }}
                            >
                                {description.line}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Container>
        </Container>
    );
}
