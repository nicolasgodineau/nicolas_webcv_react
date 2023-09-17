import React, { useContext, useState, useRef } from "react";
import { WindowHeightContext } from "../App";
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
    const links = Data.personalInformations.links;

    // Pour mettre à jour la hauteur de la fenêtre
    const windowHeight = useContext(WindowHeightContext);

    const [showContact, setShowText] = useState(true);

    // Pour la désactivation des annimations au format tablette
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

    const toggleContent = () => {
        setShowText(!showContact);
        updateDimensions(); // Met à jour les dimensions de la modal de contact après le basculement du contenu
    };
    const targetElementRef = useRef(null); // Référence à mesurer

    const [elementDimensions, setElementDimensions] = useState({
        width: 281, // Valeur par défaut de la largeur
        height: 426, // Valeur par défaut de la hauteur
    });

    // Fonction pour mettre à jour les dimensions de la modal de contact
    const updateDimensions = () => {
        if (targetElementRef.current) {
            const { width, height } =
                targetElementRef.current.getBoundingClientRect();
            setElementDimensions({ width, height });
        }
    };

    const iconMappings = {
        github: GitHubIcon,
        website: WebSiteIcon,
        instagram: InstagramIcon,
        linkedin: LinkedInIcon,
    };

    return (
        <Container
            component="aside"
            disablegutters="true"
            maxWidth="false"
            sx={{
                maxWidth: "fit-content",
                paddingLeft: "0 !important",
                [theme.breakpoints.down("md")]: {
                    // Styles pour les écrans de largeur maximale "md" (1090px)
                    height: windowHeight >= 650 ? "100svh" : "auto",
                    maxWidth: "unset",
                    padding: "0 !important",
                    margin: "0 !important",
                },
                [theme.breakpoints.down("sm")]: {
                    // Styles pour les écrans de largeur maximale "sm" (600px)
                    padding: 0,
                },
            }}
        >
            <Box
                component="div"
                disablegutters="true"
                maxWidth="false"
                fixed="true"
                sx={{
                    position: windowHeight >= 660 ? "sticky" : "inset",
                    top: "72px",
                    left: "0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    gap: 4,
                    padding: 4,
                    marginTop: windowHeight >= 660 ? "0" : "72px",
                    border: `2px solid ${theme.palette.grey[500]}`,
                    borderRadius: 5,
                    height: "fit-content",
                    backgroundColor: theme.palette.grey[900],
                    [theme.breakpoints.down("md")]: {
                        // Styles pour les écrans de largeur maximale "md" (1090px)
                        height: "80%",
                        position: "relative",
                        justifyContent: "start",
                        gap: 1,
                        top: "0px",
                        marginTop: "2rem",
                    },
                    [theme.breakpoints.down("xs")]: {
                        // Styles pour les écrans de largeur maximale "xs" (450px)
                        height: windowHeight >= 550 ? "80svh" : "auto",
                        padding: 0,
                        paddingBottom: 1,
                        border: "none",
                        borderRadius: 0,
                        borderBottom: `2px solid ${theme.palette.grey[500]}`,
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
                            color: theme.palette.grey[50],
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
                        sx={{
                            color: theme.palette.grey[400],
                        }}
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
                            [theme.breakpoints.down("md")]: {
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
                                borderRadius: 5,
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
                                        /*                                         className="customOutline"
                                         */ sx={{
                                            width: "50px",
                                            height: "50px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: 10,
                                            ":hover": {
                                                backgroundColor:
                                                    theme.palette
                                                        .accentTransparent,
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
                                        {/* Icon */}
                                        {IconComponent && (
                                            <IconComponent
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: 10,
                                                    border: `2px solid ${theme.palette.grey[400]}`,
                                                    padding: "6px",
                                                    fill: theme.palette
                                                        .grey[400],
                                                    ":hover": {
                                                        border: `2px solid ${theme.palette.accent}`,

                                                        fill: theme.palette
                                                            .accent,
                                                        backgroundColor:
                                                            theme.palette
                                                                .accentTransparent,
                                                    },
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
                                backgroundColor:
                                    theme.palette.accentTransparent,
                                border: `2px solid ${theme.palette.accent}`,
                                color: "#bdbdbd",
                                "&:hover": {
                                    cursor: "pointer",
                                    color: theme.palette.accent,
                                    backgroundColor:
                                        theme.palette.accentTransparent,
                                },
                                [theme.breakpoints.down("md")]: {
                                    // Styles pour les écrans de largeur maximale "md" (1090px)
                                    width: "50%",
                                },
                                [theme.breakpoints.down("sm")]: {
                                    width: "100%",
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
                    position: "absolute",
                    right: "50%",
                    transform: "translateX(-50%)",
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
