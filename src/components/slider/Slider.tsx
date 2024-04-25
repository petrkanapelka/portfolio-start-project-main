import styled from 'styled-components';
import { lorem } from '../../layout/sections/skills/Skills';
import { FlexWrapper } from '../FlexWrapper';

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>{lorem}</Text>
                    <Name>@Ivan Ivanov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    max-width: 500px;
    text-align: center;
`

const Slide = styled.div``

const Text = styled.p``

const Name = styled.span``

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 20px;
        height: 10px;
        margin: 5px;
        border: 1px solid wheat;
        background-color: wheat;
    }
`