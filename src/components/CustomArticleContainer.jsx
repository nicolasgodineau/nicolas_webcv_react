import React from "react";
import theme from "../theme";
import { Container } from "@mui/material";

import Header from "../components/header.jsx"; // pour le header de la section

export default function CustomArticleContainer({
    icon,
    data,
    AosEffect,
    AosDelay,
    children,
}) {
    return (
        <Container
            component="article"
            disableGutters={true}
            data-aos={AosEffect}
            data-aos-delay={AosDelay}
            sx={{
                overflow: "hidden",
                paddingY: 9,
                [theme.breakpoints.down("md")]: {
                    paddingTop: 5,
                    paddingBottom: 0,
                    paddingX: 0,
                    marginLeft: 0,
                },
            }}
        >
            <Header component="header" icon={icon} data={data} />
            {children}
        </Container>
    );
}
