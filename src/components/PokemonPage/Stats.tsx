import React from 'react'
import styled from 'styled-components'
import useApi from '../../hooks/useApi'

import StatsBar from './StatsBar'

interface StatsProps {
    stats: any
    children: any
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.backgroundCard};
    border-radius: 10px;
    padding: .5em .8em;
    margin-top: 1em;
    height: 400px;
    width: 430px;
`

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const StatsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const StatLabel = styled.div`
    font-family: "Flexo",arial,sans-serif;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1em;
    text-align: center;
    max-width: 60px;
    color: ${({theme}) => theme.colors.text}
`

const Stats: React.FC<StatsProps> = (props) => {
    const { formatVersion } = useApi()

    return (
        <Wrapper>
            {props.children}
            <RowWrapper>
                {props.stats.map((stat: any) => {
                    return (
                        <StatsWrapper>
                            <StatsBar key={`${stat.stat.name}-key`} baseStatus={stat.base_stat} />
                            <StatLabel>{formatVersion(stat.stat.name)}</StatLabel>
                        </StatsWrapper>
                    )
                })}
            </RowWrapper>
        </Wrapper>
    )
}

export default Stats