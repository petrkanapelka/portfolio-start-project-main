import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import  './../../styles/slider.css';
import { S } from './Slider_Styles';
import { lorem } from '../../layout/sections/skills/Skills';

type SlidePropsType = {
    text: string
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
   <Slide text={lorem} userName={"Ivan Ivanov"}/>,
   <Slide text={lorem} userName={"Petr Petrov"}/>,
   <Slide text={lorem} userName={"Pavel Pavlov"}/>
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);