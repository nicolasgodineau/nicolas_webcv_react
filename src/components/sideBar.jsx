import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import theme from "./theme/theme";

import {
    Box,
    Typography,
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
import LanguageSelect from "./LanguageSelect.jsx";
import ContactModal from "./sidebar/ContactModal.jsx";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Data from "../lang/en.json";

export default function SideBar({
    selectedLanguage,
    handleChangeLanguage,
    isMobileDevice,
    AosEffect,
    AosDelay,
}) {
    const { t } = useTranslation();
    const [showContact, setShowText] = useState(true);
    const isTablet = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

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

    return (
        <Container
            component="aside"
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
                    data-aos={isMobileDevice ? undefined : "fade-right"}
                    data-aos-once={isMobileDevice ? undefined : "true"}
                >
                    <Typography
                        component="h2"
                        variant="h4"
                        sx={{
                            color: theme.palette.text.primary,
                            fontFamily: "Poiret One, cursive",
                            fontWeight: "bold",
                        }}
                        data-aos={isMobileDevice ? undefined : "fade-right"}
                        data-aos-once={isMobileDevice ? undefined : "true"}
                        data-aos-delay="200"
                    >
                        {t("personalInformations.name")}
                    </Typography>
                    <List
                        component="ul"
                        sx={{
                            padding: "0px",
                        }}
                        data-aos={isMobileDevice ? undefined : "fade-right"}
                        data-aos-once={isMobileDevice ? undefined : "true"}
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
                            gap: 2,
                        }}
                    >
                        <Avatar
                            component="div"
                            variant="square"
                            src={Nicolas}
                            sx={{
                                width: 240,
                                height: 240,
                                borderRadius: 7,
                            }}
                            data-aos={isMobileDevice ? undefined : "fade-right"}
                            data-aos-once={isMobileDevice ? undefined : "true"}
                        />
                        <Typography
                            component="p"
                            disablePadding={true}
                            sx={{
                                fontSize: 24,
                                color: theme.palette.text.primary,
                                fontFamily: "Poiret One, cursive",
                                fontWeight: "bold",
                            }}
                            data-aos={isMobileDevice ? undefined : "fade-right"}
                            data-aos-once={isMobileDevice ? undefined : "true"}
                        >
                            {t("personalInformations.baseIn")}{" "}
                            {t("personalInformations.city")},
                            {t("personalInformations.country")}
                        </Typography>
                        <List
                            component="ul"
                            dense={true}
                            disablePadding={true}
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginBottom: 0,
                            }}
                        >
                            {links.map((link) => (
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
                                            border: `2px solid ${theme.palette.accent}`,
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
                                    data-aos-delay="600"
                                >
                                    <Link
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={link.name}
                                        href={link.url}
                                        color="inherit"
                                    >
                                        <Avatar
                                            color="inherit"
                                            sx={{
                                                width: 30,
                                                height: 30,
                                            }}
                                            src={require(`../images/icons/Svg/${link.icon}.svg`)}
                                        />
                                    </Link>
                                </ListItem>
                            ))}
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
                            data-aos={isMobileDevice ? undefined : "fade-right"}
                            data-aos-once={isMobileDevice ? undefined : "true"}
                            variant="text"
                            startIcon={<MailOutlineIcon />}
                            onClick={toggleContent}
                        >
                            {t("personalInformations.textCallToAction")}
                        </Button>
                    </Box>
                ) : (
                    <Box>
                        <ContactModal
                            toggleContent={toggleContent}
                            isMobileDevice={isMobileDevice}
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
                    [theme.breakpoints.down("tablet")]: {
                        // Styles pour les écrans de largeur maximale "tablet" (1090px)
                        display: "block",
                    },
                }}
                className="arrow"
            ></Box>
        </Container>
    );
}
