import React from 'react';
import { lorem } from '../../layout/sections/skills/Skills';
import { FlexWrapper } from '../FlexWrapper';
import { S } from './Slider_Styles';

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>{lorem}</S.Text>
                    <S.Name>@Ivan Ivanov</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className='active'></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};

