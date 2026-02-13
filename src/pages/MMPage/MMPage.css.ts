//@ts-nocheck
import styled from "styled-components";

import { Text } from "@manamerge/mana-atomic-ui";

export const AtomText = styled(Text).attrs<{
    variant?: string;
}>(({ theme }) => ({
    vColor: theme?.colors?.three?.a,
    vFontSize: "xxxxl"
}))``;
