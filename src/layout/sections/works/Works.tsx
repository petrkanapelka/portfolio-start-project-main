import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Menu } from '../../../components/menu/Menu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { lorem } from '../skills/Skills';

const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA'];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify='space-around'>
                <Work title='social Network' src={socialImg} text={lorem}></Work>
                <Work title='Timer' src={timerImg} text={lorem}></Work>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
`