import React from 'react'
import styled from 'styled-components'
import { MdOutlineMale, MdOutlineFemale } from 'react-icons/md'

interface InfoProps {
    height: number
    weight: number
    abilities: any
    gender: any
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #30A7D7;
    border-radius: 10px;
    padding: 1em;
    font-family: 'Flexo',arial,sans-serif;
`
const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.h2`
    color: white;
`
const Value = styled.span`
    font-weight: 600;
    color: #323232;
    text-transform: capitalize;
`
const IconValue = styled.span`
    font-size: 2em;
    color: #323232;
`

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
    console.log(abilities)
    return (
        <Wrapper>
            <RowWrapper>
                <Label>Height</Label>
                <Value>{ `${height} m` }</Value>
                <Label>Weight</Label>
                <Value>{ `${weight} kg` }</Value>
            </RowWrapper>
            <RowWrapper>
                <Label>Gender</Label>
                <Value>{ renderGender() }</Value>
                <Label>Abilities</Label>
                { abilities.map((index: any) => {
                    if(!index.is_hidden)
                        return <Value>{index.ability.name}</Value>
                }) }
            </RowWrapper>
        </Wrapper>
    )
}
export default Info