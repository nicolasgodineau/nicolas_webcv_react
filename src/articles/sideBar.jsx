import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme";
import {
    Box,
    Typography,
    List,
    Avatar,
    Link,
    Container,
    useMediaQuery,
    Icon,
} from "@mui/material";

import Button from "@mui/material/Button";
import Nicolas from "../images/Nicolas.webp";
import LanguageSelect from "../components/LanguageSelect.jsx";
import ContactModal from "../components/sidebar/ContactModal.jsx";

import MailIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import WebSiteIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Data from "../lang/en.json";

export default function SideBar({
    selectedLanguage,
    handleChangeLanguage,
    AosEffect,
    AosDelay,
}) {
    const { t } = useTranslation();
    const [showContact, setShowText] = useState(true);

    // Pour la désactivation des annimations au format tablette
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    const links = Data.personalInformations.links;

    const toggleContent = () => {
        setShowText(!showContact);
        updateDimensions(); // Met à jour les dimensions de l'élément après le basculement du contenu
    };

    const targetElementRef = useRef(null); // Référence à l'élément à mesurer (div)

    const [elementDimensions, setElementDimensions] = useState({
        width: 281, // Valeur par défaut de la largeur
        height: 426, // Valeur par défaut de la hauteur
    });

    // Fonction pour mettre à jour les dimensions de l'élément
    const updateDimensions = () => {
        if (targetElementRef.current) {
            const { width, height } =
                targetElementRef.current.getBoundingClientRect();
            setElementDimensions({ width, height });
        }
    };

    useEffect(() => {
        // Mettre à jour les dimensions de l'élément lors du chargement initial de la page
        updateDimensions();
    }, []);

    const iconMappings = {
        github: GitHubIcon,
        website: WebSiteIcon,
        instagram: InstagramIcon,
        linkedin: LinkedInIcon,
    };

    return (
        <Container
            component="aside"
            sx={{
                width: "max-content",
                [theme.breakpoints.down("md")]: {
                    // Styles pour les écrans de largeur maximale "md" (1090px)
                    width: "100%",
                    height: "100svh",
                },
                [theme.breakpoints.down("sm")]: {
                    // Styles pour les écrans de largeur maximale "sm" (600px)
                    padding: 0,
                },
            }}
        >
            <Box
                component="div"
                position="sticky"
                disablegutters="true"
                fixed="true"
                sx={{
                    width: "max-content",
                    top: "72px",
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
                    [theme.breakpoints.down("md")]: {
                        // Styles pour les écrans de largeur maximale "md" (1090px)
                        position: "initial",
                        width: "100%",
                        height: "80svh",
                        marginTop: "2rem",
                    },
                    [theme.breakpoints.down("xs")]: {
                        // Styles pour les écrans de largeur maximale "xs" (450px)
                        height: "auto",
                        padding: 0,
                        paddingBottom: 4,
                        border: "none",
                        borderBottom: `2px solid ${theme.palette.text.secondary}`,
                        borderRadius: 0,
                    },
                    "@media (max-height: 680px)": {
                        gap: "10px",
                    },
                    fontFamily: "Poiret One, cursive",
                    fontWeight: "bold",
                }}
                data-aos={isMediumScreen ? undefined : AosEffect}
                data-aos-once={isMediumScreen ? "" : "true"}
                data-aos-delay={isMediumScreen ? "" : { AosDelay }}
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
                        alignItems: "baseline",
                        justifyContent: "space-between",
                    }}
                    data-aos={isMediumScreen ? undefined : "fade-right"}
                    data-aos-once={isMediumScreen ? undefined : "true"}
                >
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={{
                            color: theme.palette.text.primary,
                            fontFamily: "Poiret One, cursive",
                            fontWeight: "bold",
                        }}
                        data-aos={isMediumScreen ? undefined : "fade-right"}
                        data-aos-once={isMediumScreen ? undefined : "true"}
                        data-aos-delay="200"
                    >
                        {t("personalInformations.name")}
                    </Typography>
                    <Typography
                        component="h3"
                        variant="body2"
                        data-aos={isMediumScreen ? undefined : "fade-right"}
                        data-aos-once={isMediumScreen ? undefined : "true"}
                        data-aos-delay="500"
                    >
                        {t("personalInformations.city")},
                        {t("personalInformations.country")}
                    </Typography>
                </Box>
                {showContact ? (
                    <Box
                        component="div"
                        ref={targetElementRef}
                        sx={{
                            minHeight: "358px",
                            minWidth: "100%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            gap: 2,
                            [theme.breakpoints.down("sm")]: {
                                // Styles pour les écrans de largeur maximale "md" (1090px)
                                height: "100%",
                            },
                        }}
                    >
                        <Avatar
                            component="div"
                            variant="square"
                            src={Nicolas}
                            alt="Nicolas"
                            aria-label="Nicolas"
                            sx={{
                                minHeight: "240px",
                                minWidth: "240px",
                                borderRadius: 7,
                                objectFit: "cover",
                                [theme.breakpoints.down("sm")]: {
                                    // Styles pour les écrans de largeur maximale "md" (1090px)
                                    minHeight: "200px",
                                    minWidth: "200px",
                                },
                            }}
                            data-aos={isMediumScreen ? undefined : "fade-right"}
                            data-aos-once={isMediumScreen ? undefined : "true"}
                        />

                        <Typography
                            component="h1"
                            variant="h5"
                            disablepadding="true"
                            sx={{
                                fontSize: "clamp(1rem, 6vw, 1.5rem)",
                                color: theme.palette.accent,
                                fontFamily: "Poiret One, cursive",
                                fontWeight: "bold",
                            }}
                            data-aos={isMediumScreen ? undefined : "fade-right"}
                            data-aos-once={isMediumScreen ? undefined : "true"}
                        >
                            {t("personalInformations.subtitle")}
                        </Typography>
                        <List
                            component="ul"
                            dense={true}
                            disablepadding="true"
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                marginBottom: 0,
                            }}
                        >
                            {links.map((link, index) => {
                                // Assurez-vous que link.icon est en minuscules pour la correspondance
                                const iconName = link.icon.toLowerCase();
                                const IconComponent = iconMappings[iconName];

                                return (
                                    <Link
                                        key={index}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={link.name}
                                        href={link.url}
                                        sx={{
                                            width: "50px",
                                            height: "50px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: `2px solid ${theme.palette.text.secondary}`,
                                            borderRadius: 6,
                                            padding: 0.7,
                                            fill: theme.palette.text.secondary,
                                            ":hover": {
                                                cursor: "pointer",
                                                color: theme.palette.accent,
                                                border: `2px solid ${theme.palette.accent}`,
                                                fill: theme.palette.accent,
                                            },
                                        }}
                                        data-aos={
                                            isMediumScreen
                                                ? undefined
                                                : "fade-right"
                                        }
                                        data-aos-once={
                                            isMediumScreen ? undefined : "true"
                                        }
                                        data-aos-delay="600"
                                    >
                                        {/* Affichez l'icône correspondante si elle existe dans l'objet de correspondance */}
                                        {IconComponent && (
                                            <IconComponent
                                                sx={{
                                                    width: "1.3em",
                                                    height: "1.3em",
                                                }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </List>
                        <Button
                            sx={{
                                width: "100%",
                                padding: "12px 44px",
                                borderRadius: 5,
                                backgroundColor: theme.palette.accent,
                                border: `2px solid ${theme.palette.accent}`,
                                color: "black",
                                "&:hover": {
                                    cursor: "pointer",
                                    color: theme.palette.accent,
                                    backgroundColor:
                                        theme.palette.background.dark,
                                },
                            }}
                            data-aos={isMediumScreen ? undefined : "fade-right"}
                            data-aos-once={isMediumScreen ? undefined : "true"}
                            variant="text"
                            startIcon={
                                <MailIcon
                                    sx={{
                                        width: "1.2em",
                                        height: "auto",
                                    }}
                                />
                            }
                            onClick={toggleContent}
                        >
                            {t("personalInformations.textCallToAction")}
                        </Button>
                    </Box>
                ) : (
                    <Box>
                        <ContactModal
                            toggleContent={toggleContent}
                            isMediumScreen={isMediumScreen}
                            dimensions={elementDimensions}
                        />
                    </Box>
                )}
            </Box>
            <Box
                sx={{
                    margin: "0 auto",
                    color: theme.palette.accent,
                    display: "none",
                    [theme.breakpoints.down("md")]: {
                        // Styles pour les écrans de largeur maximale "md" (1090px)
                        display: "block",
                    },
                }}
                className="arrow"
            ></Box>
        </Container>
    );
}
