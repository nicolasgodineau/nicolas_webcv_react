import React, { useContext } from "react";
import { WindowHeightContext } from "../App";
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
    const windowHeight = useContext(WindowHeightContext);
    return (
        <Container
            component="article"
            disablegutters="true"
            maxWidth="false"
            data-aos={AosEffect}
            data-aos-delay={AosDelay}
            sx={{
                overflow: "hidden",
                paddingY: 9,
                paddingX: "0 !important",
                [theme.breakpoints.down("md")]: {
                    paddingTop: windowHeight >= 650 ? "0px" : 5,
                    paddingBottom: 5,
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
