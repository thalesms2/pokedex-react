import styled from 'styled-components'

export const PokedexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    color: white;
    max-width: 200px;
    margin: .5em;
    padding: .5em;
`

export const DescribeDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #808080;
    padding: .5em;
`

export const TitleCard = styled.span`
    font-size: 1.2em;
    font-weight: bold;
`

export const TypesDiv = styled.div`
    display: flex;
    flex-direction: row;
`

export const Type = styled.span`
    background-color: #9BCC50;
    color: black;
    padding: .2em 1em;
    margin-right: .5em;
`