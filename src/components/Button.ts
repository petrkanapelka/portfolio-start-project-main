import styled from "styled-components";
import { myTheme } from "../styles/Theme";

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    position: relative;
    z-index: 1;

    &:hover {
        &::before {
            height: 100%;
            width: 100%;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${myTheme.colors.accent};
        z-index: -1;

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`