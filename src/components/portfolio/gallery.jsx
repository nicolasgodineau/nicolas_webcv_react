import React, { useState } from "react";
import theme from "../theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    ImageList,
    ImageListItem,
} from "@mui/material";
import CustomModal from "./CustomModal.jsx";

// Composant de la galerie
export default function Gallery({ images, titre }) {
    console.log("images:", images);
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
                    <ImageList>
                        {images.map((image, index) => (
                            <ImageListItem
                                key={index}
                                sx={{
                                    cursor: "pointer",
                                    margin: 0,
                                    objectFit: "contain",
                                }}
                            >
                                <img
                                    src={image.thumbnail}
                                    alt={titre}
                                    loading="lazy"
                                    sx={{
                                        height: "100%",
                                        cursor: "pointer",
                                        objectFit: "contain",
                                    }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <CustomModal
                        selectedImage={selectedImage}
                        handleCloseModal={handleCloseModal}
                        titre={titre}
                    />
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
