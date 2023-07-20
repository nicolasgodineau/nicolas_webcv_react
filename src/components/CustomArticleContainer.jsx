import React from "react";
import theme from "../components/theme/theme";
import { Container } from "@mui/material";

import Header from "../components/header"; // pour le header de la section

export default function CustomArticleContainer({
    icon,
    data,
    children,
}) {
    return (
        <Container
            component="article"
            disableGutters={true}
            /* maxWidth="sm2" */
            sx={{
                overflow: "hidden",
                paddingY: 9,
                [theme.breakpoints.down("tablet")]: {
                    paddingTop: 5,
                    paddingBottom: 0,
                    paddingX: 0,
                    marginLeft: 0,
                },
            }}
        >
            <Header
                component="header"
                icon={icon}
                data={data}
                variant="h1"
                fontSize="clamp(2rem, 6vw, 3rem)"
            />
            {children}
        </Container>
    );
}
