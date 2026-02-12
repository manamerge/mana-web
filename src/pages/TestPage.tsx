import React from "react";
import {
    Button,
    Text,
    Link,
    Heading,
    Icon,
    Navigation,
    Header,
    Gradient,
    Divider
} from "@manamerge/mana-atomic-ui";

import { ReactComponent as iconBurger } from "../../icons/burger.svg";
import { ReactComponent as iconTop } from "../../icons/iconTop.svg";
import { ReactComponent as iconDot } from "../../icons/iconDot.svg";
import { ReactComponent as iconLeft } from "../../icons/iconLeft.svg";
import { ReactComponent as iconRight } from "../../icons/iconRight.svg";

import { ReactComponent as logo } from "../../logo.svg";

function LetsTalkPage() {
    return (
        <div>
            <div>DAVID CHUNK</div>

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
                <Text variant="primary-heavy">
                    Testing all Mana Atomic UI components
                </Text>
                <Gradient variant="primary">
                    <Text variant="primary-heavy">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Gradient variant="secondary">
                    <Text variant="primary-regular">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Gradient variant="tertiary">
                    <Text variant="primary-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Gradient variant="primary">
                    <Text variant="primary-bold">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Gradient variant="secondary">
                    <Text variant="primary-heavy">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Divider variant="primary" margin="10px auto" />
                <Divider variant="secondary" margin="10px auto" />
                <Divider variant="tertiary" margin="10px auto" />
                <Icon variant="small" svg={logo} />
                <Icon variant="medium" svg={logo} />
                <Icon variant="large" svg={logo} />
                <Heading as="h1">H1 in the ZONE!</Heading>
                <Heading as="h2">H2 in the ZONE!</Heading>
                <Heading as="h3">H3 in the ZONE!</Heading>
                <Heading as="h4">H4 in the ZONE!</Heading>
                <Heading as="h5">H5 in the ZONE!</Heading>
                <Heading as="h6">H6 in the ZONE!</Heading>

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

            <Text variant="primary-light">Gilmer font here!</Text>
            <Text variant="primary-regular">Gilmer font here!</Text>
            <Text variant="primary-medium">Gilmer font here!</Text>
            <Text variant="primary-bold">Gilmer font here!</Text>
            <Text variant="primary-heavy">Gilmer font here!</Text>
            <Header
                buttonLeftClick={() => {}}
                buttonLeftText="Let's talk"
                buttonRightClick={() => {}}
                buttonRightText="Contact us"
                headingTitle="Welcome to ManaMerge"
                iconDot={iconDot}
                buttonLeftIcon={iconLeft}
                buttonRightIcon={iconRight}
                iconTop={iconTop}
                textBanner="available to offer services"
                textTitle={[
                    "We are a team of Software Engineers",
                    "Our interest goes to all developing environments"
                ]}
            />
        </div>
    );
}

export default LetsTalkPage;
