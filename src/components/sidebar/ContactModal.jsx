import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme/theme";
import {
    Button,
    Box,
    FormControl,
    IconButton,
    TextField,
    ThemeProvider,
    CssBaseline,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloseIcon from "@mui/icons-material/Close";

const ContactModal = ({ toggleContent, isMobileDevice, dimensions }) => {
    console.log("dimensions:", dimensions);
    const { t } = useTranslation();
    const handleClick = () => {
        toggleContent();
    };

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        texte: "",
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    /* 
    const width = targetElementRef;
    console.log("width:", width); */

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoie le formulaire par email (sans backend)
        const emailContent = `Nom: ${formData.nom}\nPrénom: ${formData.prenom}\nEmail: ${formData.email}\nTexte: ${formData.texte}`;
        window.open(
            `mailto:nicolasgodineau@live.fr?subject=Formulaire%20de%20contact&body=${encodeURIComponent(
                emailContent
            )}`
        );
        // Réinitialise le formulaire
        setFormData({
            nom: "",
            prenom: "",
            email: "",
            texte: "",
        });
        // Ferme la modal
        setOpen(false);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Box
                        open={open}
                        onClose={() => setOpen(false)}
                        sx={{
                            width: dimensions.width,
                            height: dimensions.height,
                        }}
                    >
                        <FormControl
                            onSubmit={handleSubmit}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                            data-aos={isMobileDevice ? undefined : "fade-right"}
                            data-aos-once={isMobileDevice ? undefined : "true"}
                        >
                            <TextField
                                variant="standard"
                                label={t("personalInformations.fromName")}
                                name="name"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                                data-aos={
                                    isMobileDevice ? undefined : "fade-right"
                                }
                                data-aos-delay="200"
                                data-aos-once={
                                    isMobileDevice ? undefined : "true"
                                }
                            />
                            <TextField
                                variant="standard"
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                data-aos={
                                    isMobileDevice ? undefined : "fade-right"
                                }
                                data-aos-delay="400"
                                data-aos-once={
                                    isMobileDevice ? undefined : "true"
                                }
                            />
                            <TextField
                                variant="standard"
                                label="Texte"
                                name="texte"
                                multiline
                                rows={4}
                                value={formData.texte}
                                onChange={handleChange}
                                required
                                data-aos={
                                    isMobileDevice ? undefined : "fade-right"
                                }
                                data-aos-delay="600"
                                data-aos-once={
                                    isMobileDevice ? undefined : "true"
                                }
                            />
                            <Button
                                type="submit"
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
                                data-aos={
                                    isMobileDevice ? undefined : "fade-right"
                                }
                                data-aos-once={
                                    isMobileDevice ? undefined : "true"
                                }
                                variant="text"
                                startIcon={<MailOutlineIcon />}
                            >
                                {t("personalInformations.send")}
                            </Button>{" "}
                            <IconButton
                                sx={{
                                    width: "100%",
                                    padding: "12px 44px",
                                    borderRadius: 32,
                                    backgroundColor: theme.palette.danger,
                                    border: `2px solid ${theme.palette.danger}`,
                                    color: "black",
                                    ":hover": {
                                        cursor: "pointer",
                                        color: theme.palette.danger,
                                        backgroundColor:
                                            theme.palette.background.dark,
                                    },
                                }}
                                onClick={handleClick}
                                data-aos={
                                    isMobileDevice ? undefined : "fade-right"
                                }
                                data-aos-once={
                                    isMobileDevice ? undefined : "true"
                                }
                                variant="text"
                            >
                                <CloseIcon />
                            </IconButton>
                        </FormControl>
                    </Box>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
};

export default ContactModal;
