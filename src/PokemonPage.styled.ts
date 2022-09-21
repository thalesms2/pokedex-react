import styled from "styled-components"

export const PokemonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5vw;
`

export const TypesDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1em;
`

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 430px;
    img {
        background-color: ${({theme}) => theme.colors.backgroundCard};
        padding-bottom: 30px;
        transition: linear .2s;
    }
    @media (min-width: 500px) {
        &:nth-child(1) {
            margin-right: 1em;
        }
    }
`

export const RowWrapper = styled.div`
    display: flex;
    @media (min-width: 1200px) {
        flex-direction: row;
    }
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
export const SubTitle = styled.h3`
    font-family: "Flexo",arial,sans-serif;
    font-weight: 400;
    font-size: 1.4em;
    width: 100%;
    margin-bottom: .5em;
    color: ${({theme}) => theme.colors.text};
    transition: linear .2s;
`

export const BackButton = styled.button`
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px;
    color: white;
    padding: .8em 1.5em;
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    font-size: 1em;
    margin: 1em;
    transition: linear .2s;
    &:hover {
        background-color: ${({theme}) => theme.colors.primaryHover};
    }
`

export const Select = styled.select`
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