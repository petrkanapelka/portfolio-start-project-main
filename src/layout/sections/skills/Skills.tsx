import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';

export const lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem veniam neque adipisci facilis id dolorum aperiam corporis culpa alias beatae esse quis libero saepe perspiciatis velit facere natus, non architecto!"

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap='wrap'>
                    <Skill iconID='code' title='HTML5' text={lorem}/>
                    <Skill iconID='css' title='CSS' text={lorem}/>
                    <Skill iconID='react' title='React' text={lorem}/>
                    <Skill iconID='ts' title='Typescript' text={lorem}/>
                    <Skill iconID='sc' title='Styled Components' text={lorem}/>
                    <Skill iconID='figma' title='Web Development' text={lorem}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`