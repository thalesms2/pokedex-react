import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Type from '../Type'

interface WeaknessesProps {
    info: any
}
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
const Weaknesses: React.FC<WeaknessesProps> = (props) => {
    const [weak, setWeak] = useState<string[]>([])
    useEffect(() => {
        props.info.map((relation: any) => {
            relation.double_damage_from.map((type: any) => {
                setWeak((prev) => [...prev, type.name])
            })
        })
    }, [props.info])
    
    return (
        <Wrapper>
            {weak.map((type: string) => {
                return <Type key={`${type}Weak`} type={type}  big />
            })}
        </Wrapper>
    )
}

export default Weaknesses