import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import SimpleMapPin from "./SimpleMap/SimpleMapPin";
import ContactInfoCard from "./SimpleContactInfo/SimpleContactInfoCard";
import { Title } from "../../components/Contacts/Contacts.css";
export default function LetsTalkPage() {
    return (
        <div style={{ background: "#000" }}>
            <Title color="#ddd" fontWeight="600">
                Contact Us
            </Title>
            <Contacts />
            <div
                style={{
                    justifySelf: "center",
                    marginBottom: "50px"
                }}
            ></div>

            <Title color="#ddd" fontWeight="600">
                Where are we located?
            </Title>
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
                address="Rua dos perdidinhos"
                phone="+351 912 345 678"
                email="contacto@blabla.com"
            />
        </div>
    );
}
