import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Footer, Navigation } from "@manamerge/mana-atomic-ui"; // adapta o path conforme necessário
import { ReactComponent as iconBurger } from "../icons/burger.svg";
import { ReactComponent as Sample } from "./assets/sample.svg";
import { ReactComponent as logo } from "../icons/iconTop.svg";

const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navigation
                logo={logo}
                onLogoClick={() => navigate("/")}
                iconBurger={iconBurger}
                logo={Sample}
                tabs={[
                    {
                        label: "MM",
                        to: "/"
                    },
                    {
                        label: "The Team",
                        to: "/TheTeam"
                    },
                    {
                        label: "Why Us",
                        to: "/WhyUs"
                    },
                    {
                        label: "Lets Talk",
                        to: "/LetsTalk"
                    }
                ]}
            />
            <main>
                <Outlet />
            </main>
            <Footer
                svg={Sample}
                routes={[
                    {
                        order: 1,
                        type: "external",
                        url: "https://google.com",
                        label: "Home"
                    },
                    {
                        order: 2,
                        type: "external",
                        url: "https://google.com",
                        label: "About",
                        blank: true
                    },
                    {
                        order: 3,
                        type: "internal",
                        slug: "/service",
                        label: "Service"
                    },
                    {
                        order: 4,
                        type: "internal",
                        slug: "/contact",
                        label: "Contact us"
                    }
                ]}
            >
                Copyright © 2025. ManaMerge. All rights reserved
            </Footer>
        </>
    );
};

export default MainLayout;
