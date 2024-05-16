/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Icon } from '../icon/Icon';
import { animateScroll } from 'react-scroll';

export const Logo: React.FC = () => {
    return (
        <a onClick={()=> {animateScroll.scrollToTop()}}>
            <Icon iconID='code' width='40' height='40'/>
        </a>
    );
};