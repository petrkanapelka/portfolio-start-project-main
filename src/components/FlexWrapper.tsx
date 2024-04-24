import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: string
    align?: string
    wrap?: string
    direction?: string

}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    flex-direction: ${props => props.wrap || 'row'};
`