/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`

const ListItem = styled.li``
