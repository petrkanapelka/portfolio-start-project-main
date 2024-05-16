import React from 'react';
import photo from '../../../assets/images/photo.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify='space-around' wrap='wrap'>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Petr Kanapelka</span></S.Name>
                        <S.MainTitle>
                            <p>A Front-end Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A WEB Developer', 'A Front-end Developer', 'A WEB Designer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt='photo' />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
