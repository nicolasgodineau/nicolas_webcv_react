import React from "react";
import theme from "../theme/theme";
import {
    CssBaseline,
    ThemeProvider,
    Modal,
    IconButton,
    Button,
    Typography,
    Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomModal({
    selectedImage,
    handleCloseModal,
    titre,
}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Modal
                    maxWidth="lg"
                    open={!!selectedImage}
                    onClose={handleCloseModal}
                >
                    <Container
                        style={{
                            height: "100vh",
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
            </CssBaseline>
        </ThemeProvider>
    );
}
