import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #30A7D7;
    border-radius: 10px;
    padding: 1em;
    max-height: 250px;
    font-family: 'Flexo',arial,sans-serif;
`
export const Cell = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
    width: 50%;
`
export const Label = styled.h2`
    color: white;
    font-weight: 400;
`
export const Value = styled.span`
    font-weight: 500;
    color: #323232;
    font-size: 1.5em;
    text-transform: capitalize;
`
export const IconValue = styled.span`
    font-size: 2em;
    line-height: 1em;
    color: #323232;
`