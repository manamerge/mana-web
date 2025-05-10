import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "@manamerge/mana-atomic-ui"; // adapta o path conforme necessário

import { ReactComponent as iconBurger } from "../icons/burger.svg";
import { ReactComponent as Sample } from "./assets/sample.svg";

const MainLayout = () => {
    return (
        <>
            <Navigation
                iconBurger={iconBurger}
                onTabClick={() => {}}
                tabs={[
                    {
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "About",
                        to: "/About"
                    },
                    {
                        label: "solutions",
                        to: "/Solutions"
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
