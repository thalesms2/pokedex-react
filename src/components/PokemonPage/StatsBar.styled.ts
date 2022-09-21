import styled from 'styled-components'

interface ProgressBarProps {
    baseStatus: string
}

export const StatBarWrapper = styled.div`
    height: 310px;
    width: 60px;
    background-color: #fff;
    margin-right: .3em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const ProgressBar = styled.div<ProgressBarProps>`
    height: ${ props => props.baseStatus };
    background-color: #30A7D7;
    bottom: 0px;
`