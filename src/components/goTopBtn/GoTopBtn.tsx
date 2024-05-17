import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll } from 'react-scroll';

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false);
            }
        })
    })

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => { animateScroll.scrollToTop() }}>
                    <Icon iconID='arrowTop' width='16px' height='15px' viewBox='0 0 16 15' />
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    right: 30px;
    bottom: 30px;
`