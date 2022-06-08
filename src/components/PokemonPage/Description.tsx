import React, { useState } from 'react'
import styled from 'styled-components'

interface DescriptionProps {
    info: any
}
type DescriptionType = {
    text: string
    language: string
    version: string
}

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const DescriptionText = styled.span`

`
const DescriptionVersion = styled.span`

`
const ButtonToChangeDescription = styled.button`

`

const Description = ({ info }: DescriptionProps) => {
    const [index, setIndex] = useState(0)

    return (
        <DescriptionWrapper>
             <DescriptionText>
                { info[index].text }
            </DescriptionText>
            <DescriptionVersion>
                { info[index].version }
            </DescriptionVersion>
            <ButtonToChangeDescription></ButtonToChangeDescription>
        </DescriptionWrapper>
    )
}

export default Description