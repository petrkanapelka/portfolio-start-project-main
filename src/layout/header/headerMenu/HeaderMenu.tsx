/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { myTheme } from '../../../styles/Theme';

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
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
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    @media ${myTheme.media.tablet} {
        display: none;
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