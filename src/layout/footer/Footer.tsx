import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { myTheme } from '../../styles/Theme';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column'>
                <Name>Petr</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconID='instagram' height='21px' width='21px' viewBox='0 0 21 21'></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconID='vk' height='21px' width='21px' viewBox='0 0 21 21'></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconID='telegram' height='21px' width='21px' viewBox='0 0 21 21'></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconID='linkedin' height='21px' width='21px' viewBox='0 0 21 21'></Icon>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Petr Kanapelka, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${myTheme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.h4`
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
    margin: 30px 0 30px;
`

const SocialLink = styled.li`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${myTheme.colors.accent};

    &:hover {
        color: ${myTheme.colors.primaryBg};
        transform: translateY(-4px);
        background: #7572d5;
        cursor: pointer;
    }
`

const SocialItem = styled.div``

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
`