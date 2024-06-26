import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu, TabsStatusType } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/images/proj-1.webp';
import timerImg from '../../../assets/images/proj-2.webp';
import { lorem } from '../skills/Skills';
import { Container } from '../../../components/Container';
import React, { useState } from 'react';
import { S } from './Works_Styles';
import { AnimatePresence, motion } from "framer-motion"


const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'LANDING PAGE',
        status: 'landing'
    },
    {
        title: 'REACT',
        status: 'react'
    },
    {
        title: 'SPA',
        status: 'spa'
    },
]

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: lorem,
        type: 'spa',
        id: 1
    },
    {
        title: 'Timer',
        src: timerImg,
        text: lorem,
        type: 'react',
        id: 2
    },
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
    let filteredWorks = workData;

    if (currentFilterStatus === 'landing') {
        filteredWorks = workData.filter((work) => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = workData.filter((work) => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = workData.filter((work) => work.type === 'spa')
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <S.Works id='works'>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus} />
                <FlexWrapper justify='center' align='center' wrap='wrap'>
                    <AnimatePresence>
                        {filteredWorks.map((work, index) => {
                            return (
                                <motion.div
                                    key={work.id}
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                                    <Work
                                        key={index}
                                        title={work.title}
                                        src={work.src}
                                        text={work.text}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
