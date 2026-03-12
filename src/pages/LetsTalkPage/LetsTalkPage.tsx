import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import SimpleMapPin from "./SimpleMap/SimpleMapPin";
import ContactInfoCard from "./SimpleContactInfo/SimpleContactInfoCard";
import { Heading, Header, Gradient } from "@manamerge/mana-atomic-ui";
import { AnimatedBG } from "./LetsTalkPage.css";
import office from "./assets/office.png";
export default function LetsTalkPage() {
    return (
        <AnimatedBG>
            <Header
                moleculeVariant="secondary"
                textTitle={[
                    "We’re ready when you are.",
                    "Tell us about your project, your idea, or your challenge."
                ]}
                headingTitle="Let’s Start a Conversation."
                withOverlay
                imageURLBackground={office}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    margin: "40px 20px"
                }}
            >
                <Gradient variant="primary">
                    <Heading variant="secondary" asTag="h3">
                        Let's connect and create something amazing!
                    </Heading>
                </Gradient>
                <Heading variant="primary" asTag="h1">
                    CONTACT US
                </Heading>
            </div>
            <Contacts />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "40px 0 20px 0",
                    gap: "5px"
                }}
            >
                <Heading variant="primary" asTag="h1">
                    Where are we located?
                </Heading>
                <Heading variant="primary" asTag="h5">
                    AT THE HEART OF CROATIAN'S CAPITAL
                </Heading>
            </div>
            <div
                style={{
                    margin: "0 35px 50px"
                }}
            >
                <SimpleMapPin
                    lat={45.811}
                    lng={15.98}
                    zoom={12}
                    width="auto"
                    height="300px"
                />
            </div>
            <ContactInfoCard
                address="Škorpikova 34, 10000, Zagreb, Croatia"
                email="manamerge@hotmail.com"
            />
        </AnimatedBG>
    );
}
