import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { lorem } from '../skills/Skills';
import { Container } from '../../../components/Container';

const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA'];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify='center' align='center' wrap='wrap'>
                    <Work title='Social Network' src={socialImg} text={lorem}></Work>
                    <Work title='Timer' src={timerImg} text={lorem}></Work>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`