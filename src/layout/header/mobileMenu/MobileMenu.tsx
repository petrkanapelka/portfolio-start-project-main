/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled, { css } from 'styled-components';
import { myTheme } from '../../../styles/Theme';

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="">
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${myTheme.media.tablet} {
        display: block;
    }
`
const MobileMenuPopup = styled.div<{isOpen: Boolean}>`
    position: fixed;
    background-color: rgba(31,31,32, 0.9);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
    display: none;

    ${props => props.isOpen && css<{isOpen: Boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const BurgerButton = styled.button<{isOpen: Boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${myTheme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: Boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${myTheme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            ${props => props.isOpen && css<{isOpen: Boolean}>`
                transform: translateY(0) rotate(-45deg);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${myTheme.colors.font};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{isOpen: Boolean}>`
                transform: translateY(0) rotate(45deg);
                width: 36px;
            `}
        }
    }
`


const Link = styled.a`
    font-family: ${myTheme.fonts.secondaryFamily};
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color:transparent;
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    // outline: 1px solid ;
    color: ${myTheme.colors.accent};
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;
const ListItem = styled.li`
        position: relative;

        &::before{
            content: '';
            display: inline-block;
            height: 3px;
            background-color: ${myTheme.colors.accent};
            position: absolute;
            top: 50%;
            left: -10px;
            right: -10px;
            z-index: 1;
            transform: scale(0);
        }

        &:hover {
            &::before {
                transform: scale(1);
            }

            ${Mask} {
                transform: skew(12deg) translateX(5px);
                color: ${myTheme.colors.font};
                & + ${Mask} {
                    transform: skew(12deg) translateX(-5px);
                }
            }
        }

    `;