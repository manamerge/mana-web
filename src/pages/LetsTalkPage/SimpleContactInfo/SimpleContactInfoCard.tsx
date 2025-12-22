import React from "react";
import { Card, InfoItem } from "./SimpleContactInfoCard.css";

interface ContactInfoProps {
    address: string;
    phone?: string;
    email?: string;
}

export default function SimpleContactInfoCard({
    address,
    phone,
    email
}: ContactInfoProps) {
    return (
        <Card>
            <InfoItem>
                <strong>Adress:</strong> {address}
            </InfoItem>
            {phone && (
                <InfoItem>
                    <strong>Phone:</strong> {phone}
                </InfoItem>
            )}
            {email && (
                <InfoItem>
                    <strong>Email:</strong> {email}
                </InfoItem>
            )}
        </Card>
    );
}
