import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Confetti from "react-dom-confetti";
import { useTranslation } from "react-i18next";
import theme from "../theme/theme";
import {
    Button,
    Box,
    FormControl,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CloseIcon from "@mui/icons-material/Close";

const ContactModal = ({ toggleContent, isMobileDevice, dimensions }) => {
    const [isConfettiActive, setConfettiActive] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [open, setOpen] = useState(false);

    const { t } = useTranslation();

    const handleClick = () => {
        toggleContent();
    };

    const validate = (values) => {
        const errors = {};
        const requiredFields = ["name", "email", "message"];
        requiredFields.forEach((field) => {
            if (!values[field]) {
                errors[field] = "Required";
            }
        });
        if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }
        return errors;
    };

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({ validate });

    const onSubmit = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        fetch(
            "https://public.herotofu.com/v1/9afc0bf0-2061-11ee-8025-97a9fb2f29da",
            {
                method: "POST",
                body: formData,
            }
        ).catch((error) => {
            console.log("error:", error);
        });
        setIsFormSubmitted(true); // Met à jour l'état pour indiquer que le formulaire a été soumis
        reset(); // Réinitialise les valeurs du formulaire à leurs valeurs par défaut
        setConfettiActive(true);

        // Réinitialiser l'animation après une courte durée
        setTimeout(() => {
            setConfettiActive(false);
        }, 2000); // Durée en millisecondes de l'animation de confettis
        setOpen(false); // Fermer la modal ou effectuer toute autre action nécessaire après la soumission du formulaire
    };

    return (
        <Box
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                width: dimensions.width,
                height: dimensions.height,
            }}
        >
            <FormControl
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                {isFormSubmitted ? (
                    <Typography
                        variant="body1"
                        color={theme.palette.accent}
                        sx={{ margin: "auto 0" }}
                    >
                        {t("personalInformations.sendSucces")}
                    </Typography>
                ) : (
                    <Box>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Ce champ est requis" }}
                            render={({ field }) => (
                                <TextField
                                    label={t("personalInformations.fromName")}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={Boolean(errors.name)}
                                    helperText={
                                        errors.name && errors.name.message
                                    }
                                    sx={{ borderRadius: "12px" }}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Ce champ est requis",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Adresse e-mail invalide",
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={Boolean(errors.email)}
                                    helperText={
                                        errors.email && errors.email.message
                                    }
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            rules={{ required: "Ce champ est requis" }}
                            render={({ field }) => (
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    error={Boolean(errors.message)}
                                    helperText={
                                        errors.message && errors.message.message
                                    }
                                    sx={{ borderRadius: "12px" }}
                                    {...field}
                                />
                            )}
                        />
                    </Box>
                )}
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: 1,
                    }}
                >
                    <Button
                        type="submit"
                        sx={{
                            padding: "12px 44px",
                            borderRadius: 32,
                            backgroundColor: theme.palette.accent,
                            border: `2px solid ${theme.palette.accent}`,
                            color: "black",
                            ":hover": {
                                cursor: "pointer",
                                color: theme.palette.accent,
                                backgroundColor: theme.palette.background.dark,
                            },
                        }}
                        variant="text"
                        startIcon={<MailOutlineIcon />}
                    >
                        {t("personalInformations.send")}
                    </Button>{" "}
                    <Confetti active={isConfettiActive} />
                    <IconButton
                        sx={{
                            padding: "12px 44px",
                            borderRadius: 32,
                            backgroundColor: theme.palette.danger,
                            border: `2px solid ${theme.palette.danger}`,
                            color: "black",
                            ":hover": {
                                cursor: "pointer",
                                color: theme.palette.danger,
                                backgroundColor: theme.palette.background.dark,
                            },
                        }}
                        onClick={handleClick}
                        variant="text"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
            </FormControl>
        </Box>
    );
};

export default ContactModal;
