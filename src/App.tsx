import "./App.css";
import React from "react";
import { Button } from "@manamerge/mana-atomic-ui";
import { Text } from "@manamerge/mana-atomic-ui";
import { Link } from "@manamerge/mana-atomic-ui";
import { Heading } from "@manamerge/mana-atomic-ui";
import { Icon } from "@manamerge/mana-atomic-ui";
import { Gradient } from "@manamerge/mana-atomic-ui";
import { ReactComponent as logo } from "./logo.svg";

function App() {
    return (
        <div className="App">
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
                <Gradient variant="primary">
                    <Text variant="light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Gradient variant="secondary">
                    <Text variant="regular">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Gradient variant="tertiary">
                    <Text variant="medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Gradient variant="primary">
                    <Text variant="bold">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>
                <Gradient variant="secondary">
                    <Text variant="heavy">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Culpa minima aspernatur officiis, saepe aliquid
                        possimus expedita ad ut sint fugiat?
                    </Text>
                </Gradient>

                <Icon variant="small" svg={logo} />
                <Icon variant="medium" svg={logo} />
                <Icon variant="large" svg={logo} />
                <Heading variant="h1">H1 in the ZONE!</Heading>
                <Heading variant="h2">H2 in the ZONE!</Heading>
                <Heading variant="h3">H3 in the ZONE!</Heading>
                <Heading variant="h4">H4 in the ZONE!</Heading>
                <Heading variant="h5">H5 in the ZONE!</Heading>
                <Heading variant="h6">H6 in the ZONE!</Heading>

                <Link href="https://www.google.com" className="light">
                    Link here!
                </Link>
                <Link href={"https://www.google.com"} className="regular">
                    Link here!
                </Link>
                <Link href={"https://www.google.com"} className="medium">
                    Link here!
                </Link>
                <Link href={"https://www.google.com"} className="bold">
                    Link here!
                </Link>
                <Link href={"https://www.google.com"} className="heavy">
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
