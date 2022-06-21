import React from 'react'
import styled from 'styled-components'

interface StatsBarProps {
    baseStatus: any
}

interface ProgressBarProps {
    baseStatus: string
}

const StatBarWrapper = styled.div`
    height: 310px;
    width: 60px;
    background-color: #fff;
    margin-right: .3em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ProgressBar = styled.div<ProgressBarProps>`
    height: ${ props => props.baseStatus };
    background-color: #30A7D7;
    bottom: 0px;
`

const StatsBar: React.FC<StatsBarProps> = (props) => {
    const formatStatus = `${ parseInt(props.baseStatus) * 2}px`
    return (
        <StatBarWrapper>
            <ProgressBar baseStatus={formatStatus}/>
        </StatBarWrapper>
    )
}

export default StatsBar