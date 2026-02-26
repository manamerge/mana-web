import React from "react";
import { Link, Icon, Heading } from "@manamerge/mana-atomic-ui";
import { StyledHeading } from "./NotFoundPage.css";
import Green from "./assets/BigGreen.png";
import { ReactComponent as ImageNotFound } from "./assets/ImageNotFound.svg";

export default function NotFoundPage() {
    return (
        <div
            style={{
                marginBottom: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px"
            }}
        >
            <StyledHeading variant="secondary" asTag="h1">
                ... page not found ...
            </StyledHeading>
            <Link
                variant="primary-heavy"
                to="/"
                style={{ margin: "10px 0 10px 0" }}
            >
                take me to the home page
            </Link>
            <Icon svg={ImageNotFound} variant="xxxxl" size="500px" />;
        </div>
    );
}
