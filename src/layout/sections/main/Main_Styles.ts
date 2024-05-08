import styled from "styled-components";
import { font } from "../../../styles/Common";
import { myTheme } from "../../../styles/Theme";

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${myTheme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${myTheme.media.mobile} {
            width: 314px;
            height: 414px;
        }
    }

    @media ${myTheme.media.mobile} {
     margin-top: 65px;
    }
`

const Main = styled.section`
    display: flex;
    height: 100vh;
`;

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${myTheme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`

const MainTitle = styled.h1`
    ${font({family: myTheme.fonts.primaryFamily, weight: 400, Fmax: 27, Fmin: 20})};
`
const Name = styled.h1`
    ${font({family: myTheme.fonts.secondaryFamily, weight: 700, Fmax: 50, Fmin: 36})};
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        white-space: nowrap;
        position: relative;
        z-index: 1;
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${myTheme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

    @media ${myTheme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const SmallText = styled.span`
    ${font({family: myTheme.fonts.primaryFamily, weight: 400, Fmax: 14, Fmin: 10})};
`;

export const S = {
    Main, Photo, PhotoWrapper, MainTitle, Name, SmallText
}