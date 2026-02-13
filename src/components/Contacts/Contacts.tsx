import React, { useState } from "react";
import {
    Container,
    StyledForm,
    StyledInput,
    StyledTextarea,
    StyledButton
} from "./Contacts.css";
import { Text } from "@manamerge/mana-atomic-ui";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        formData.append(
            "access_key",
            process.env.REACT_APP_DEV_EMAIL_ACCESS_TOKEN || ""
        );
        // Emails are being sent to emailcafecafe@gmail.com
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <Container>
            <StyledForm onSubmit={onSubmit}>
                <StyledInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />
                <StyledInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <StyledTextarea name="message" placeholder="Message" required />
                {!result && (
                    <StyledButton type="submit">Send Message</StyledButton>
                )}
                {result === "Success!" ? (
                    <>
                        <StyledButton disabled>
                            Message sent with {result}
                        </StyledButton>

                        <Text variant="primary-light" vFontSize="xs">
                            Thank you for your message! We will get back to you
                            soon!
                        </Text>
                    </>
                ) : (
                    result === "Error" && (
                        <Text
                            variant="primary-light"
                            vColor="red"
                            vFontSize="xs"
                        >
                            Error sending message! Will fix soon, please try
                            again later.
                        </Text>
                    )
                )}
            </StyledForm>
        </Container>
    );
}
