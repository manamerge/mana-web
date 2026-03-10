import styled from "styled-components";
import { CardTeaser, CardSimpleRender } from "@manamerge/mana-atomic-ui";

export const StyledCardTeaser = styled(CardTeaser)`
    max-width: 400px;
    min-width: 330px;
    min-height: 290px;
`;

export const StyledCardSimpleRender = styled(CardSimpleRender)`
    margin: 0 20px 0 20px;
    width: stretch;
`;

export const NoisePatternComponent = styled.svg`
    width: 100%;
    height: 100%;
    position: absolute;
`;
export const SolidObjectComponent = styled.svg`
    height: 100%;
    padding-left: 25%;
    filter: opacity(0.5);
`;
export const WrapperHeader = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    background: linear-gradient(180deg, #257e07 0%, #14160180 100%);

    &::after {
        content: "";
        position: absolute;
        background: linear-gradient(180deg, transparent 0%, #01160e 100%);
        bottom: 0px;
        height: 575px;
        width: 100%;
    }

    .Header-secondary {
        top: -405px;
        z-index: 1;
    }
`;
