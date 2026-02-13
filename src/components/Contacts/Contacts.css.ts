import styled from "styled-components";
import { Button, Text } from "@manamerge/mana-atomic-ui/dist";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border-radius: 16px;
    max-width: 450px;
    margin: 0px auto;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
`;

export const StyledInput = styled.input`
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #151515;
    background-color: #00000040;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
        border-color: rgb(128, 195, 186, 0.5);
        box-shadow: 0 0 0 2px rgb(198, 251, 166, 0.5);
    }

    &::placeholder {
        color: #777;
    }
`;

export const StyledTextarea = styled.textarea`
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #151515;
    background-color: #00000040;
    color: #fff;
    font-size: 14px;
    resize: none;
    height: 100px;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
        border-color: rgb(128, 195, 186, 0.5);
        box-shadow: 0 0 0 2px rgb(198, 251, 166, 0.5);
    }

    &::placeholder {
        color: #777;
    }
`;

export const StyledButton = styled(Button)`
    width: 100%;
    max-width: none;
`;
