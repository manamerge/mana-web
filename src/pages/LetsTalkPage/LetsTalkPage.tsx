import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import SimpleMapPin from "./SimpleMap/SimpleMapPin";
import ContactInfoCard from "./SimpleContactInfo/SimpleContactInfoCard";
import { Heading } from "@manamerge/mana-atomic-ui";
export default function LetsTalkPage() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "40px 0"
                }}
            >
                <Heading variant="primary" as="h1">
                    Contact Us
                </Heading>
            </div>
            <Contacts />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "40px 0"
                }}
            >
                <Heading variant="primary" as="h1">
                    Where are we located?
                </Heading>
            </div>
            <div
                style={{
                    justifySelf: "center",
                    marginBottom: "50px",
                    width: "100%"
                }}
            >
                <SimpleMapPin
                    lat={45.811}
                    lng={15.98}
                    zoom={15}
                    width="auto"
                    height="300px"
                />
            </div>
            <ContactInfoCard
                address="Škorpikova 34, 10000, Zagreb, Croatia"
                email="manamerge@gmail.com"
            />
        </div>
    );
}
