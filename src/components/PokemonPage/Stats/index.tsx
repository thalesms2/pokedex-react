import React from 'react'
import useApi from '../../../hooks/useApi'

import StatsBar from '../StatsBar'
import {
    Wrapper,
    RowWrapper,
    StatsWrapper,
    StatLabel
} from './Stats.styled'
interface StatsProps {
    stats: any
    children: any
}


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