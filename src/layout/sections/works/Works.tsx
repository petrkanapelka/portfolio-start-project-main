import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { lorem } from '../skills/Skills';
import { Container } from '../../../components/Container';
import React from 'react';
import { S } from './Works_Styles';

const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA'];

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: lorem,
    },
    {
        title: 'Timer',
        src: timerImg,
        text: lorem,
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify='center' align='center' wrap='wrap'>
                    {workData.map((work, index) => {
                        return <Work key={index} title={work.title} src={work.src} text={work.text}></Work>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
