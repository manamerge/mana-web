import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import SimpleMapPin from "./SimpleMap/SimpleMapPin";
import ContactInfoCard from "./SimpleContactInfo/SimpleContactInfoCard";
export default function LetsTalkPage() {
    return (
        <div style={{ background: "#000" }}>
            <Contacts />
            <div
                style={{
                    justifySelf: "center",
                    marginBottom: "50px"
                }}
            ></div>
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
                    height="400px"
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
