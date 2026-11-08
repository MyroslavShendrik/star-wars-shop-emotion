import styled from "@emotion/styled"

export const Title = styled.h2`
    margin-bottom:${props => props.theme.spacing(6)};
    font-size: 48px;
    text-align: center;
    color: ${props => props.theme.fontColor.mainTitle};
`