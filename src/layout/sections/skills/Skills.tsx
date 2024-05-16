import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles';
import React from 'react';

export const lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem veniam neque adipisci facilis id dolorum aperiam corporis culpa alias beatae esse quis libero saepe perspiciatis velit facere natus, non architecto!"

const SkillData = [
    {
        iconId: 'code',
        title: 'HTML5',
        description: lorem
    },
    {
        iconId: 'css',
        title: 'CSS3',
        description: lorem
    },
    {
        iconId: 'react',
        title: 'React',
        description: lorem
    },
    {
        iconId: 'ts',
        title: 'Typescript',
        description: lorem
    },
    {
        iconId: 'sc',
        title: 'Styled Components',
        description: lorem
    },
    {
        iconId: 'figma',
        title: 'Web Design',
        description: lorem
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id='skills'>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap='wrap'>
                    {SkillData.map((skill, index) => {
                        return <Skill key={index} iconID={skill.iconId} title={skill.title} text={skill.description}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
