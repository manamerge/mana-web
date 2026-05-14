import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, ScrollRestoration } from "react-router-dom";
import { Footer, Navigation } from "@manamerge/mana-atomic-ui"; // adapta o path conforme necessário
import { ReactComponent as iconBurger } from "../icons/burger.svg";
import { ReactComponent as Sample } from "./assets/sample.svg";
import { ReactComponent as MM } from "./assets/mm.svg";
import { NavigationWrapper } from "./Layout.css";
const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <NavigationWrapper>
            <Navigation
                onLogoClick={() => navigate("/")}
                iconBurger={iconBurger}
                logo={MM}
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
                        label: "Let's Talk",
                        to: "/LetsTalk"
                    }
                ]}
            />
            <ScrollRestoration />
            <main>
                <Outlet />
            </main>
            <Footer
                svg={Sample}
                routes={[
                    {
                        order: 1,
                        type: "internal",
                        slug: "/",
                        label: "Home"
                    },
                    {
                        order: 2,
                        type: "internal",
                        slug: "/TheTeam",
                        label: "The Team",
                        blank: true
                    },
                    {
                        order: 3,
                        type: "internal",
                        slug: "/WhyUs",
                        label: "Why Us"
                    },
                    {
                        order: 4,
                        type: "internal",
                        slug: "/LetsTalk",
                        label: "Let's Talk"
                    }
                ]}
            >
                Copyright © 2026 | ManaMerge | All rights reserved
            </Footer>
        </NavigationWrapper>
    );
};

export default MainLayout;
