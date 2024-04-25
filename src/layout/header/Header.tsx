/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

const navItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contacts']
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={navItems}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`
