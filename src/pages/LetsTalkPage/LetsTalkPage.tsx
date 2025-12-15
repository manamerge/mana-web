import React from "react";
import Contacts from "../../components/Contacts/Contacts";
import SimpleMapPin from "./SimpleMap/SimpleMapPin";
import ContactInfoCard from "./SimpleContactInfo/SimpleContactInfoCard";
export default function LetsTalkPage() {
    return (
        <div>
            <Contacts />
            <div
                style={{
                    justifySelf: "center",
                    marginBottom: "50px"
                }}
            >
                <ContactInfoCard
                    address="Rua dos perdidinhos"
                    phone="+351 912 345 678"
                    email="contacto@blabla.com"
                />
            </div>
            <div
                style={{
                    justifySelf: "center",
                    marginBottom: "50px"
                }}
            >
                <SimpleMapPin
                    lat={45.81}
                    lng={15.97}
                    zoom={13}
                    width="600px"
                    height="400px"
                />
            </div>
        </div>
    );
}
