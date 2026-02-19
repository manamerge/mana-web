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
        bottom: 13%;
        right: -700px;
        z-index: 0;
        width: 900px;
        height: 900px;
        background: radial-gradient(circle, #ffffff23, transparent 70%);
        animation: ${float} 20s ease-in-out infinite;
    }

    &::after {
        content: "";
        position: absolute;
        pointer-events: none;
        z-index: -1;
        left: -3500px;
        top: 100px;
        width: 3950px;
        height: 3545px;
        background: radial-gradient(circle, #ffffff73, transparent 75%);
        animation: ${float} 50s ease-in-out infinite reverse;
    }
`;

export const BottomCurve = styled.div`
    position: absolute;
    border-top: 2px solid #ffffff22;
    z-index: -1;
    width: 2500px;
    border-radius: 50%;
    height: 2250px;
    background-color: #000b07;
`;
