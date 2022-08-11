import styled from 'styled-components'

import useHandles from '../../hooks/useHandles'

interface DescriptionProps {
    info: any
}

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    font-family: "Flexo",arial,sans-serif;
    `
const DescriptionText = styled.span`
    font-weight: 500;
    font-size: 1.1em;
    margin-bottom: 1em;
    color: ${({theme}) => theme.colors.text};
    `
const LabelSelect = styled.label`
    font-family: "Flexo",arial,sans-serif;
    margin-bottom: .2em;
    font-size: 1.3em;
    color: ${({theme}) => theme.colors.text};
`
const Select = styled.select`
    font-family: "Flexo",arial,sans-serif;
    text-transform: capitalize;
    margin-bottom: .5em;
    background-color: #616161;
    color: white;
    font-size: 1.2em;
    max-width: 150px;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: #616161;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #313131;
        border-radius: 20px;
    }
`

const Description = ({ info }: DescriptionProps) => {
    const {
        gameDescription,
        handleGameDescriptionChange
    } = useHandles()

    return (
        <DescriptionWrapper>
            <DescriptionText>
                { info[gameDescription].text }
            </DescriptionText>
            <LabelSelect>Version: </LabelSelect>
            <Select name="version" defaultValue={gameDescription} onChange={(e) => handleGameDescriptionChange(e.target.value)}>
                {info.map((ver: any) => {
                    return <option key={ver.versionFixed} value={ver.version}>{ver.versionFixed}</option>
                })}
            </Select>
        </DescriptionWrapper>
    )
}

export default Description