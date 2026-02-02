import styled from "styled-components";
import { Text } from "@manamerge/mana-atomic-ui/dist";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background: linear-gradient(145deg, #000000ff, #000000ff);
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    max-width: 450px;
    margin: 0px auto;
`;

export const Title = styled(Text)`
    color: #fff;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 0.5px;
    justify-self: center;
    padding: 30px 0;
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
    border: 1px solid #333;
    background-color: #111;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
        border-color: #b5bf00ff;
        box-shadow: 0 0 0 2px rgba(99, 191, 0, 0.3);
    }

    &::placeholder {
        color: #777;
    }
`;

export const StyledTextarea = styled.textarea`
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #333;
    background-color: #111;
    color: #fff;
    font-size: 14px;
    resize: none;
    height: 100px;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
        border-color: #9cbf00ff;
        box-shadow: 0 0 0 2px rgba(188, 191, 0, 0.3);
    }

    &::placeholder {
        color: #777;
    }
`;

export const StyledButton = styled.button`
    background-color: #bfa200ff;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #d8bf00ff;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px);
    }
`;
