import React from 'react'
import styled from 'styled-components'

interface EvolutionsProps {
    children: any
}

const Wrapper = styled.div`
    margin-top: 1em;
`

const Evolutions: React.FC<EvolutionsProps> = (props) => {

    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Evolutions