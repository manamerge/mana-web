import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%   { transform: translate(0px, 0px); }
  50%  { transform: translate(40px, 30px); }
  100% { transform: translate(0px, 0px); }
`;

export const AnimatedBG = styled.div`
    position: relative;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    background: #01160e;

    &::before {
        content: "";
        position: absolute;
        pointer-events: none;
        right: -200px;
        z-index: -1;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, #4d694c, transparent 70%);
        animation: ${float} 40s ease-in-out infinite;
    }

    &::after {
        content: "";
        position: absolute;
        pointer-events: none;
        z-index: -1;
        left: -700px;
        top: 400px;
        width: 1900px;
        height: 900px;
        background: radial-gradient(circle, #c6fba65c, transparent 40%);
        animation: ${float} 10s ease-in-out infinite reverse;
    }
`;
