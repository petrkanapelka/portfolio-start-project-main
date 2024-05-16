import styled, { css } from "styled-components";
import { myTheme } from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 10px;
    position: relative;
    z-index: 1;

    &:hover {
        &::before {
            transform: scale(1);
        }
    }
    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        background-color: ${myTheme.colors.accent};
        z-index: -1;
        height: 10px;
        transform: scale(0);
        transition: all 0.3s ease-in-out;

        ${props => props.active && css<{active?: boolean}>`
            height: 10px;
            transform: scale(1);
        `}
    }
`