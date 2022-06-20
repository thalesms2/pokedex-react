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
    
    return (
        <Wrapper>
            {/* {weak.map((type: string) => {
                return <Type key={`${type}Weak`} type={type}  big />
            })} */}
        </Wrapper>
    )
}

export default Weaknesses