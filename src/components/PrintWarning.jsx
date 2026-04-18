import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import PrintDisabledIcon from "@mui/icons-material/PrintDisabled";
import { useTranslation } from "react-i18next";
import theme from "../theme";

export default function PrintWarning() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleBeforePrint = (e) => {
            setOpen(true);
        };

        window.addEventListener("beforeprint", handleBeforePrint);
        return () =>
            window.removeEventListener("beforeprint", handleBeforePrint);
    }, []);

    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            slotProps={{
                backdrop: {
                    sx: {
                        backdropFilter: "blur(5px)",
                    },
                },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    border: `2px solid ${theme.palette.grey[500]}`,
                    borderRadius: 5,
                    height: "fit-content",
                    backgroundColor: theme.palette.grey[900],
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    padding: 4,
                    color: theme.palette.grey[50],
                    backdropFilter: "blur(4px)",
                    maxWidth: "400px",
                    textAlign: "center",
                    fontFamily: "Poiret One, cursive",
                    fontWeight: "bold",
                }}
            >
                <Typography variant="h6">
                    {t("personalInformations.noPrint")}
                </Typography>
                <PrintDisabledIcon
                    sx={{
                        width: "1em",
                        height: "1em",
                        color: theme.palette.danger,
                    }}
                />
                {/*                 <Typography variant="body1">
                    Pour une meilleure expérience, téléchargez plutôt la version
                    PDF du CV !
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
                    <Button
                        variant="contained"
                        href="/cv.pdf"
                        download
                        sx={{
                            padding: "12px 44px",
                            borderRadius: 5,
                            backgroundColor: theme.palette.accentTransparent,
                            border: `2px solid ${theme.palette.accent}`,

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
                    >
                        Télécharger le PDF
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        sx={{
                            padding: "12px 44px",
                            borderRadius: 5,
                            border: `2px solid ${theme.palette.grey[400]}`,
                            color: "#bdbdbd",
                            "&:hover": {
                                border: `2px solid ${theme.palette.danger}`,

                                fill: theme.palette.danger,
                                backgroundColor:
                                    theme.palette.dangerTransparent,
                            },
                            [theme.breakpoints.down("md")]: {
                                // Styles pour les écrans de largeur maximale "md" (1090px)
                                width: "50%",
                            },
                            [theme.breakpoints.down("sm")]: {
                                width: "100%",
                            },
                        }}
                    >
                        Imprimer quand même
                    </Button>
                </Box> */}
            </Box>
        </Modal>
    );
}
