import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <FlexWrapper justify='space-around'>
            <div>
                <span>Hi There</span>
                <StyledSubTitle>I am Petr Kanapelka</StyledSubTitle>
                <StyledTitle>A Front-end Developer</StyledTitle>
            </div>
            <StyledImg src={photo} alt='photo'/>
        </FlexWrapper>
    );
};

const StyledImg = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const StyledTitle = styled.h1`
    font-size: medium;
`
const StyledSubTitle = styled.h1`
    font-size: large;
`