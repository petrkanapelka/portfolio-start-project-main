import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { S } from './Footer_Styles';

const SocialItemsData = [
    {
        iconID: 'instagram',
    },
    {
        iconID: 'vk',
    },
    {
        iconID: 'telegram',
    },
    {
        iconID: 'linkedin',
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction='column'>
                <S.Name>Petr</S.Name>
                <S.SocialList>

                    {SocialItemsData.map((item, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon iconID={item.iconID} height='21px' width='21px' viewBox='0 0 21 21'></Icon>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2024 Petr Kanapelka, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

