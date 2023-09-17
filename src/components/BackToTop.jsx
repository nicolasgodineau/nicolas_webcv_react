import React from "react";
import { Box, Fab, Zoom, useTheme, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
    const theme = useTheme();
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="BackToTop"
                sx={{
                    position: "fixed",
                    bottom: "4vh",
                    right: "2vw",
                    borderRadius: "9999px",
                    zIndex: "99999",
                    backgroundColor: theme.palette.accentTransparent,
                    backdropFilter: "blur(100px)",
                    color: "#bdbdbd",
                }}
            >
                <Fab
                    size="large"
                    aria-label="scroll back to top"
                    sx={{
                        fontSize: "11px",
                        padding: "0",
                        border: `2px solid ${theme.palette.accent}`,
                        backgroundColor: theme.palette.accentTransparent,
                        color: "#bdbdbd",

                        ":hover": {
                            color: theme.palette.accent,
                            border: `2px solid ${theme.palette.accent}`,
                            backgroundColor: theme.palette.accentTransparent,
                        },
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Zoom>
    );
}
