import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import theme from "../theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    ImageList,
    ImageListItem,
    Modal,
    Button,
    Typography,
    Container,
    useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Composant de la galerie
export default function Gallery({ projet, dossier }) {
    const { t } = useTranslation();

    const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const handleCloseModal = (event, reason) => {
        if (reason === "backdropClick" || reason === "modalContentClick") {
            setSelectedImage(null);
            setModalOpen(false);
        }
    };
    const handleCloseModalContent = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <ImageList
                        component="ul"
                        cols={isSmallScreen ? 2 : 2}
                        sx={{ overflow: "hidden" }}
                    >
                        {Array.from({ length: projet.img }, (_, index) => {
                            const delay = (index + 1) * 200;

                            return (
                                <ImageListItem
                                    component="li"
                                    key={index}
                                    sx={{
                                        cursor: "pointer",
                                        margin: 0,
                                        objectFit: "contain",
                                    }}
                                    onClick={() =>
                                        handleImageClick({
                                            img: require(`../../images/portfolio/${dossier}/img_${
                                                index + 1
                                            }.webp`),
                                            alt: `${t(
                                                `portfolio.projets.${dossier}.title`
                                            )}${index + 1}`,
                                        })
                                    }
                                    data-aos="fade-left"
                                    data-aos-delay={delay}
                                >
                                    <img
                                        src={require(`../../images/portfolio/${dossier}/thumbnails_${
                                            index + 1
                                        }.webp`)}
                                        alt={`${t(
                                            `portfolio.projets.${dossier}.title`
                                        )}${index + 1}`}
                                        loading="lazy"
                                        sx={{
                                            height: "100%",
                                            cursor: "pointer",
                                            objectFit: "contain",
                                        }}
                                    />
                                </ImageListItem>
                            );
                        })}
                    </ImageList>
                    <Modal
                        open={!!selectedImage}
                        onClose={handleCloseModal}
                        slotProps={{
                            backdrop: {
                                style: {
                                    backdropFilter: "blur(20px)",
                                },
                            },
                        }}
                    >
                        <Container
                            sx={{
                                height: "100vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "1vh",
                                backdropFilter: "blur(20px)",
                                /*  background: "#1f1f1f", */
                                overflow: "hidden",
                            }}
                            onClick={handleCloseModalContent}
                        >
                            <Button
                                sx={{
                                    width: "10%",
                                    padding: isSmallScreen
                                        ? "12px 44px"
                                        : "0px",
                                    borderRadius: 32,
                                    backgroundColor: theme.palette.danger,
                                    border: `2px solid ${theme.palette.danger}`,
                                    color: "black",
                                    ":hover": {
                                        cursor: "pointer",
                                        color: theme.palette.danger,
                                        backgroundColor: "transparent",
                                    },
                                }}
                                variant="text"
                                onClick={handleCloseModal}
                            >
                                <CloseIcon />
                            </Button>
                            <img
                                src={selectedImage?.img}
                                alt={t(`portfolio.projets.${dossier}.title`)}
                                style={{
                                    maxHeight: "70vh",
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
                                {t(`portfolio.projets.${dossier}.title`)}
                            </Typography>
                        </Container>
                    </Modal>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
}
