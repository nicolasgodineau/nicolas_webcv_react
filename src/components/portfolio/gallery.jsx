import React, { useState, useEffect } from "react";
import {
    CssBaseline,
    ThemeProvider,
    Grid,
    Modal,
    IconButton,
    Button,
    Typography,
    Box,
    Container,
} from "@mui/material";
import jsonData from "../../data.json";
import CloseIcon from "@mui/icons-material/Close";
import theme from "components/theme/theme";

// Composant de la galerie
export default function Gallery({ images, titre }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Grid container spacing={1} sx={{ paddingTop: 1 }}>
                        {images.map((image, index) => (
                            <Grid item xs={4} key={index}>
                                <img
                                    src={image.thumbnail}
                                    alt={titre}
                                    onClick={() => handleImageClick(image)}
                                    style={{ cursor: "pointer" }}
                                />
                            </Grid>
                        ))}
                        <Modal
                            maxWidth="lg"
                            open={!!selectedImage}
                            onClose={handleCloseModal}
                        >
                            <Container
                                style={{
                                    height: "100svh",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backdropFilter: "blur(10px)",
                                    background: "#ffffff0d",
                                    overflow: "hidden",
                                }}
                            >
                                <IconButton
                                    onClick={handleCloseModal}
                                    style={{
                                        /*                             position: "absolute",
                            top: "1rem",
                            right: "1rem", */
                                        color: "red",
                                    }}
                                ></IconButton>
                                <Button
                                    sx={{
                                        width: "10%",
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
                                    variant="text"
                                    onClick={handleCloseModal}
                                >
                                    <CloseIcon />
                                </Button>
                                <img
                                    src={selectedImage?.img}
                                    alt={titre}
                                    style={{
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                    }}
                                />
                                <Typography
                                    component="h4"
                                    sx={{
                                        fontSize: "clamp(2rem, 6vw, 3rem)",
                                        color: theme.palette.primary,
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {titre}
                                </Typography>
                            </Container>
                        </Modal>
                    </Grid>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
