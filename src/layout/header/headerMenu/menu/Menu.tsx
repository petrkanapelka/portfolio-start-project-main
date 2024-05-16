import React from 'react';
import { S } from '../HeaderMenu_Styles';

const navItems = [
    {
        title: 'Home',
        link: 'main'
    },
    {
        title: 'Skills',
        link: 'skills'
    },
    {
        title: 'Works',
        link: 'works'
    },
    {
        title: 'Testimony',
        link: 'testimony'
    },
    {
        title: 'Contacts',
        link: 'contacts'
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {navItems.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink to={item.link}
                                smooth={true}
                                activeClass='active'
                                spy={true}>
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

