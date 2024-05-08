import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Skills_Styles';
import React from 'react';

type SkillPropsType = {
    iconID: string
    title: string
    text: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction='column' align='center'>
                <S.IconWrapper>
                    <Icon iconID={props.iconID} width='50' height='50' viewBox='0 0 50 50'></Icon>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.text}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

