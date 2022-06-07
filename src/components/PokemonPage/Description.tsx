import React, { useState } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import useApi from '../../hooks/useApi'
import Loading from '../Loading'

interface DescriptionProps {
    pokemonName: string
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

const Description = ({ pokemonName }: DescriptionProps) => {
    const { getSpecies } = useApi()
    const { data, isLoading } = useQuery('species', () => getSpecies(pokemonName))
    const [index, setIndex] = useState(0)
    const [description, setDescription] = useState<DescriptionType[]>([])
    function formatDescription(description: string) {
        description = description.toLowerCase()
        description = description.replace(/(\n)/gm, " ")
        description = description.replace(/(\f)/gm, "")
        const index = description.search(/([.])/gm)
        if(description[index+1] === ' ') {
            description = description.charAt(0).toUpperCase() + description.slice(1, index) + '. ' + description.charAt(index+2).toUpperCase() + description.slice(index+3)

        } else {
            description = description.charAt(0).toUpperCase() + description.slice(1, index) + '. ' + description.charAt(index+1).toUpperCase() + description.slice(index+2)
        }
        return description
    }
    data?.flavor_text_entries.forEach((text: any) => {
        if(text.language.name === 'en') {
            const response = {
                text: formatDescription(text.flavor_text),
                language: text.language.name,
                version: text.version.name
            }
            setDescription(description => [...description, response])
        }
    })
    console.log(description)
    function renderDescription() {
        if(isLoading) {
            <Loading />
        } else {
            return(
                <>
                    <DescriptionText>
                        {/* { description[index].text } */}
                    </DescriptionText>
                    <DescriptionVersion>
                        {/* { description[index].version } */}
                    </DescriptionVersion>
                    <ButtonToChangeDescription></ButtonToChangeDescription>
                </>
            )
        }
    }

    return (
        <DescriptionWrapper>
            {renderDescription()}
        </DescriptionWrapper>
    )
}

export default Description