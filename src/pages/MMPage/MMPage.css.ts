import styled from "styled-components";
import { CardTeaser } from "@manamerge/mana-atomic-ui";

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
