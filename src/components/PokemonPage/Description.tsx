import React, { useState } from 'react'
import styled from 'styled-components'
import handles from '../../hooks/useHandles'

interface DescriptionProps {
    info: any
}

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    `
const DescriptionText = styled.span`
    font-weight: 500;
    font-family: "Flexo",arial,sans-serif;
    font-size: 1.1em;
    `
const DescriptionVersion = styled.span`
    select {
    }
    `
const Select = styled.select`
    font-family: "Flexo",arial,sans-serif;
    text-transform: capitalize;
`

const Description = ({ info }: DescriptionProps) => {
    const {
        index,
        handleSelectChange
    } = handles()

    return (
        <DescriptionWrapper>
             <DescriptionText>
                { info[index].text }
            </DescriptionText>
            <DescriptionVersion>
                <Select name="version" defaultValue={index} onChange={(e) => handleSelectChange(e.target.value)}>
                    {info.map((ver: any) => {
                        return <option value={ver.version}>{ver.versionFixed}</option>
                    })}
                </Select>
            </DescriptionVersion>
        </DescriptionWrapper>
    )
}

export default Description