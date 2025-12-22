import React from "react";
import {
    Container,
    Title,
    StyledForm,
    StyledInput,
    StyledTextarea,
    StyledButton
} from "./Contacts.css.ts";

function Contacts() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <Container>
            <Title color="#ddd" fontWeight="600" fontSize="27px">
                Contact Us
            </Title>

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
                <StyledButton type="submit">Send Message</StyledButton>
            </StyledForm>
        </Container>
    );
}

export default Contacts;
