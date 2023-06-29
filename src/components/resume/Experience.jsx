import React from "react";
import theme from "../theme/theme.js";
import {
    CssBaseline,
    ThemeProvider,
    Container,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Box,
} from "@mui/material";
import { faCircle } from "@fortawesome/free-solid-svg-icons"; // icon de la section subtitle
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Experience({ experience, lastExperienceId }) {
    const separateTextByLineBreaks = (inputText) => {
        const lines = inputText.split("\n"); // Sépare le texte en lignes en utilisant le saut de ligne comme séparateur
        return lines;
    };

    const textWithLineBreaks = separateTextByLineBreaks(experience.description); // Appel de la fonction pour séparer le texte par sauts de ligne

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Container
                    component="div"
                    disablegutters="true"
                    key={experience.id}
                >
                    {/* Conteneur pour chaque expérience */}
                    <Container
                        component="div"
                        disablegutters="true"
                        sx={{
                            position: "relative",
                            paddingLeft: 6,
                            paddingBottom:
                                experience.id === lastExperienceId ? "0px" : 6,
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 7,
                                left: 0,
                                width: "12px",
                                height: "12px",
                                borderRadius: "50px",
                                background:
                                    experience.id === 1
                                        ? theme.palette.accent
                                        : theme.palette.text.secondary,
                                zIndex: 10,
                            },
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                backgroundColor: "black",
                                top: 10,
                                left: 6,
                                width: "1px",
                                height: "100%",
                                borderRadius: "50px",
                                background: theme.palette.text.secondary,
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
                            }}
                        >
                            <Typography
                                component="p"
                                sx={{
                                    display: "block",
                                    marginBottom: 2,
                                    color:
                                        experience.id === 1
                                            ? theme.palette.accent
                                            : theme.palette.text.secondary,
                                }}
                            >
                                {experience.annee}
                            </Typography>
                            <Typography
                                component="p"
                                sx={{
                                    display: "block",
                                    marginBottom: 2,
                                    fontSize: "12px",
                                    color: theme.palette.text.secondary,
                                }}
                            >
                                {experience.lieux}
                            </Typography>
                        </Box>

                        {/* Affiche le titre de l'expérience */}
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: "24px",
                                marginBottom: "5px",
                                color: theme.palette.text.primary,
                            }}
                        >
                            {experience.titre.charAt(0).toUpperCase() +
                                experience.titre.substring(1)}
                            {/* Récupère la première lettre de la phrase avec `charAt(0)` et la met en majuscule avec `toUpperCase()`. */}
                            {/* Concatène la première lettre en majuscule avec le reste du texte en utilisant `substring(1)`. */}
                        </Typography>
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: "16px",
                                fontWeight: "bold",
                                marginBottom: "5px",
                                color: theme.palette.text.primary,
                            }}
                        >
                            {experience.sousTitre.charAt(0).toUpperCase() +
                                experience.sousTitre.substring(1)}
                            {/* Récupère la première lettre de la phrase avec `charAt(0)` et la met en majuscule avec `toUpperCase()`. */}
                            {/* Concatène la première lettre en majuscule avec le reste du texte en utilisant `substring(1)`. */}
                        </Typography>

                        {/* Affiche la description de l'expérience */}
                        <List
                            component="ul"
                            dense={true}
                            sx={{ listStyle: "inside", listStyleType: "disc" }}
                        >
                            {textWithLineBreaks.map((line, index) => (
                                <ListItem
                                    component="li"
                                    alignItems="flex-start"
                                    dense={true}
                                    key={index}
                                    sx={{
                                        fontSize: "16px",
                                        color: theme.palette.text.secondary,
                                        paddingLeft: 3,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            fontSize: 9,
                                            marginTop: 0,
                                            paddingTop: 1,
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faCircle}
                                            color={theme.palette.text.secondary}
                                        />
                                    </ListItemIcon>
                                    {line}
                                </ListItem>
                            ))}
                        </List>
                    </Container>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}
