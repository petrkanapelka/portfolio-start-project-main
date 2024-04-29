import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction='column'>
                <Name>Petr</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconID='instagram' height='21px' width='21px' viewBox='0 0 21px 21px'></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconID='vk' height='21px' width='21px' viewBox='0 0 21px 21px'></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconID='telegram' height='21px' width='21px' viewBox='0 0 21px 21px'></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconID='linkedin' height='21px' width='21px' viewBox='0 0 21px 21px'></Icon>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Petr Kanapelka, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: aliceblue;
    min-height: 30vh;
`
const Name = styled.h4`
    text-align: center;
`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
    list-style-type: none;
`

const SocialLink = styled.li``

const SocialItem = styled.div``

const Copyright = styled.small``