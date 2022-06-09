import React from 'react'
import styled from 'styled-components'
import { Status } from '../../types/pokemonTypes'

interface StatsProps {
    stats: Array<Status>
    children: any
}

const StatsWrapper = styled.div`
    background-color: #A4A4A4;
    border-radius: 10px;
    padding: 1em;
    margin-top: 1em;
    min-height: 300px;
    width: 430px;
`

const Stats: React.FC<StatsProps> = (props) => {
    return (
        <StatsWrapper>
            {props.children}
        </StatsWrapper>
    )
}

export default Stats