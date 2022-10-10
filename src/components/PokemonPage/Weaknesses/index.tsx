import React, { useEffect, useState } from 'react'

import Type from '../../Type'

import { Wrapper } from './Weaknesses.styled'

interface WeaknessesProps {
    info: any
}

const Weaknesses: React.FC<WeaknessesProps> = (props) => {
    return (
        <Wrapper>
            {props.info.map((type: string) => {
                return <Type key={`${type}Weak`} type={type}  big />
            })}
        </Wrapper>
    )
}

export default Weaknesses