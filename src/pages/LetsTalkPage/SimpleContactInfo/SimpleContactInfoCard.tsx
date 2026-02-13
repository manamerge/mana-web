import React from "react";
import { Card } from "./SimpleContactInfoCard.css";
import { Text } from "@manamerge/mana-atomic-ui";

interface ContactInfoProps {
    address: string;
    email?: string;
}

export default function SimpleContactInfoCard({
    address,
    email
}: ContactInfoProps) {
    return (
        <Card>
            <Text variant="primary-regular">{address}</Text>
            {email && <Text variant="primary-regular">{email}</Text>}
        </Card>
    );
}
