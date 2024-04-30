import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { myTheme } from '../../../../styles/Theme';

type SkillPropsType = {
    iconID: string
    title: string
    text: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction='column' align='center'>
                <IconWrapper>
                    <Icon iconID={props.iconID} width='50' height='50' viewBox='0 0 50 50'></Icon>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`
const SkillTitle = styled.div`
    text-transform: uppercase;
    margin: 70px 0 15px;
`
const SkillText = styled.div`
    text-align: center;
`

export const IconWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(-45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
        z-index: -1;
    }
`;