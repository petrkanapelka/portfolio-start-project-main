import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { myTheme } from '../../../styles/Theme';

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder='Name' />
                    <Field placeholder='Lastname' />
                    <Field placeholder='Write Message' as={'textarea'} />
                    <Button type='submit'>Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${myTheme.colors.borderColor};
    background-color: ${myTheme.colors.secondaryBg};
    padding: 7px 15px;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${myTheme.colors.font};
    font-family: ${myTheme.fonts.primaryFamily};
    &::placeholder {
        color:  ${myTheme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${myTheme.colors.borderColor};
    }
`
