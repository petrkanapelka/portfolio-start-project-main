/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu  />
        </S.DesktopMenu>
    );
};
