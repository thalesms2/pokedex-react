import React from 'react'
import styled from 'styled-components'
import { Status } from '../../types/pokemonTypes'

interface StatsProps {
    stats: Array<Status>
}

const StatsWrapper = styled.div`
    background-color: #A4A4A4;
    border-radius: 10px;
    padding: 1em;
    margin-top: 1em;
    height: 280px;
    width: 430px;
    li {
        margin-bottom: 4px;
        height: 8px;
        width: 55px;
        background-color: black;
        position: relative;
        z-index: 0;
        vertical-align: baseline;
    }
    ul:nth-child(2) {
        position: relative;
    }
    li:nth-child(1) {
        background-color: #30a7d7;
        border: none;
        z-index: 1;
        position: absolute;
    }
`

const Stats: React.FC<StatsProps> = (props) => {
    return (
        <StatsWrapper>
            <h2>Stats</h2>
            <ul>
                <li> 
                    <ul>
                        <li></li> 
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <span>HP</span>
                </li>
            </ul>
        </StatsWrapper>
    )
}

export default Stats