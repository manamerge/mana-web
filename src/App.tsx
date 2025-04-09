import "./App.css";
import React from "react";
import {
    Button,
    Text,
    Link,
    Heading,
    Icon,
    Navigation,
    Header
} from "@manamerge/mana-atomic-ui";

import { ReactComponent as iconBurger } from "./icons/burger.svg";
import { ReactComponent as iconTop } from "./icons/iconTop.svg";
import { ReactComponent as iconDot } from "./icons/iconDot.svg";
import { ReactComponent as iconLeft } from "./icons/iconLeft.svg";
import { ReactComponent as iconRight } from "./icons/iconRight.svg";

import { ReactComponent as logo } from "./logo.svg";

function App() {
    return (
        <div className="App">
            <Navigation
                iconBurger={iconBurger}
                onTabClick={() => {}}
                tabs={[
                    {
                        label: "Home",
                        to: "/Home"
                    },
                    {
                        label: "About",
                        to: "/About"
                    },
                    {
                        label: "Contact",
                        to: "/Contact"
                    }
                ]}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    width: "full"
                }}
            >
                <Header
                    buttonLeftClick={() => {}}
                    buttonLeftText="Let's talk"
                    buttonRightClick={() => {}}
                    buttonRightText="Contact us"
                    headingTitle="Welcome to ManaMerge"
                    iconDot={iconDot}
                    iconLeft={iconLeft}
                    iconRight={iconRight}
                    iconTop={iconTop}
                    textBanner="available to offer services"
                    textTitle={[
                        "We are a team of Software Engineers",
                        "Our interest goes to all developing environments"
                    ]}
                />

                <Icon variant="small" svg={logo} />
                <Icon variant="medium" svg={logo} />
                <Icon variant="large" svg={logo} />
                <Heading variant="h1">H1 in the ZONE!</Heading>
                <Heading variant="h2">H2 in the ZONE!</Heading>
                <Heading variant="h3">H3 in the ZONE!</Heading>
                <Heading variant="h4">H4 in the ZONE!</Heading>
                <Heading variant="h5">H5 in the ZONE!</Heading>
                <Heading variant="h6">H6 in the ZONE!</Heading>

                <Link href="https://www.google.com" variant="light">
                    Link here!
                </Link>
                <Link href={"https://www.google.com"} variant="regular">
                    Link here!
                </Link>
                <Link href={"https://www.google.com"} variant="medium">
                    Link here!
                </Link>
                <Link href={"https://www.google.com"} variant="bold">
                    Link here!
                </Link>
                <Link href={"https://www.google.com"} variant="heavy">
                    Link here!
                </Link>
            </div>

            <Button variant="primary">Button secondary primary</Button>
            <Button variant="secondary">Button secondary</Button>

            <Text variant="light">Gilmer font here!</Text>
            <Text variant="regular">Gilmer font here!</Text>
            <Text variant="medium">Gilmer font here!</Text>
            <Text variant="bold">Gilmer font here!</Text>
            <Text variant="heavy">Gilmer font here!</Text>
        </div>
    );
}

export default App;
