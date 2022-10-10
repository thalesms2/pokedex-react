import React from 'react'

import { StatBarWrapper, ProgressBar } from './StatsBar.styled'
interface StatsBarProps {
    baseStatus: any
}

const StatsBar: React.FC<StatsBarProps> = (props) => {
    const formatStatus = `${ parseInt(props.baseStatus) * 2}px`
    return (
        <StatBarWrapper>
            <ProgressBar baseStatus={formatStatus}/>
        </StatBarWrapper>
    )
}

export default StatsBar