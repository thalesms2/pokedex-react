import React from 'react'
import { MdOutlineMale, MdOutlineFemale } from 'react-icons/md'

import {
    IconValue,
    Value,
    Wrapper,
    Cell,
    Label
} from './Info.styled'
interface InfoProps {
    height: number
    weight: number
    abilities: any
    gender: any
}

const Info: React.FC<InfoProps> = ({height, weight, abilities, gender}) => {
    function renderGender() {
        switch (gender) {
            case 1:
            case 2:
            case 4:
            case 6:
                return (
                    <IconValue>
                        <MdOutlineMale />
                        <MdOutlineFemale />
                    </IconValue>
                )
            case 0:
                return (
                    <IconValue>
                        <MdOutlineMale />
                    </IconValue>
                )
            case 8:
                return (
                    <IconValue>
                        <MdOutlineFemale />
                    </IconValue>
                )
            case -1:
                return <Value>Unknown</Value>
        }
    }
    function fixNumber(num: number) {
        let res = String(num)
        if(res.length === 1) {
            res = res.padStart(2, '0')
        }
        const response = res.slice(0, res.length-1) + ',' + res.slice(res.length-1, res.length)
        return response
    }
    const heightFixed = fixNumber(height)
    const weightFixed = fixNumber(weight)
    return (
        <Wrapper>
                <Cell>
                    <Label>Height</Label>
                    <Value>{ `${heightFixed} m` }</Value>
                </Cell>
                <Cell>
                    <Label>Weight</Label>
                    <Value>{ `${weightFixed} kg` }</Value>
                </Cell>
            
                <Cell>
                    <Label>Gender</Label>
                    { renderGender() }
                </Cell>
                <Cell>
                    <Label>Abilities</Label>
                    { abilities.map((index: any) => {
                        if(!index.is_hidden)
                            return <Value key={index.ability.name}>{index.ability.name}</Value>
                    }) }
                </Cell>
        </Wrapper>
    )
}
export default Info