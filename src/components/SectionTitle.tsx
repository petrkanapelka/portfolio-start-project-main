import styled from "styled-components";
import { myTheme } from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: ${myTheme.fonts.secondaryFamily};
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.14em;
    position: relative;
    margin-bottom: 90px;

    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        width: 55px;
        background-color: ${myTheme.colors.accent};

        position: absolute;
        left: 50% ;
        bottom: -30px;
        transform: translateX(-50%);

    }
`