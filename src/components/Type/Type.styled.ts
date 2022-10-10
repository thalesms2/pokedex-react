import styled from "styled-components"

interface TypeCellProps {
    backgroundColor?: string
    textColor?: string
    big?: boolean
}

export const TypeCell = styled.span<TypeCellProps>`
    background: ${props => props.backgroundColor || 'white' };
    color: ${props => props.textColor || 'black'};
    margin: ${props => props.big ? '1% 0 0 1%' : '0 1.5625% 0 0'};
    line-height: ${props => props.big ? '32px' : '18px'};
    border-radius: 3px;
    width: 38.4375%;
    max-width: ${props => props.big ? '140px' : '110px'};
    font-size: ${props => props.big ? '' : '12px'};
    text-align: center;
    font-family: "Flexo",arial,sans-serif;
    font-weight: ${props => props.big ? '' : '600'};
    text-transform: capitalize;
    @media (min-width: 1200px) {
        max-width: ${props => props.big ? '130px' : '110px'};
    }
    @media (max-width: 1200px) {
        max-width: ${props => props.big ? '135px' : '110px'};
    }
`