import React, { useState } from "react";
import {
    Container,
    StyledForm,
    StyledInput,
    StyledTextarea
} from "./Contacts.css";
import { Button } from "@manamerge/mana-atomic-ui";

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
                {!result && <Button type="submit">Send Message</Button>}
                {result && (
                    <>
                        <Button disabled>Message sent!</Button>
                        <p>{result}</p>
                        <p>Thank you for your message!</p>
                        <p>We will get back to you soon!</p>
                    </>
                )}
            </StyledForm>
        </Container>
    );
}
