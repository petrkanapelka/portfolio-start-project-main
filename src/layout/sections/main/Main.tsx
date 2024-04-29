import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { myTheme } from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-between'>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Petr Kanapelka</span></Name>
                        <MainTitle>A Front-end Developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <StyledImg src={photo} alt='photo' />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
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
    }
`

const StyledMain = styled.section`
    display: flex;
    height: 100vh;
`;

const StyledImg = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-family: ${myTheme.fonts.primaryFamily};
    font-weight: 400;
    font-size: 27px;
`
const Name = styled.h1`
    font-family: ${myTheme.fonts.secondaryFamily};
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
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
`

const SmallText = styled.span`
    font-family: ${myTheme.fonts.primaryFamily};
    font-weight: 400;
    font-size: 14px;
`;