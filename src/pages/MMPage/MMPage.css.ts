import styled, { keyframes } from "styled-components";
import { Accordion, CardTeaser } from "@manamerge/mana-atomic-ui";

export const NoisePatternComponent = styled.svg`
    width: 100%;
    height: 100%;
    position: absolute;
`;
export const SolidObjectComponent = styled.svg`
    width: 100%;
    height: 100%;
    /* position: absolute; */
`;

export const WrapperHeader = styled.div`
    position: relative;
    width: 100%;
    height: 550px;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        background: linear-gradient(180deg, transparent 0%, #01160e 100%);
        bottom: 0px;
        height: 575px;
        width: 100%;
    }
    background: linear-gradient(180deg, #a9e694 0%, #14160180 100%);
    /* padding: 120px 0 0 0; */
    .Header-primary {
        top: -430px;
        z-index: 1;
        h1 {
            margin: 0 20px;
            font-size: 40px;
            line-height: 45px;
            @media (max-width: 720px) {
                font-size: 21px;
                line-height: 20px;
            }
        }
        p {
            margin: 0 20px;
            font-size: 120px;
            line-height: 129px;
            font-weight: 900;
            @media (max-width: 750px) {
                font-size: 50px;
                line-height: 50px;
            }
        }
        /* position: absolute;
        top: 0;
        background: transparent; */
    }
`;

export const StyledCardTeaser = styled(CardTeaser)`
    width: stretch;
    margin: 0 20px;
`;

export const StyledAccordion = styled(Accordion)`
    width: stretch;
    margin: 40px 20px 60px 20px;
    @media (min-width: 767px) {
        width: 60%;
    }
`;

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
    border-bottom: 2px solid #ffffff22;
    bottom: -70px;
    z-index: -1;
    width: 2500px;
    border-radius: 50%;
    height: 2490px;
    background: linear-gradient(180deg, transparent 10%, #a9e69411 100%);
`;
