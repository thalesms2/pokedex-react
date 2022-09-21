import styled from 'styled-components'

interface PokemonPageProp {
    page?: boolean
}

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h1<PokemonPageProp>`
    color: ${({ theme }) => theme.colors.text};
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    line-height: 125%;
    font-size: ${props => props.page ? 'font-size: 145%;' : '3em'};
    ${props => props.page ? 'text-transform: capitalize;': ''}
    ${props => props.page ? 'margin-bottom: 5px;': ''}
    margin-right: .5em;
    transition: linear .2s;
`

export const ThemeSwitcher = styled.button`
    background-color: ${({ theme }) => theme.colors.backgroundCard};
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5em;
    transition: linear .2s;
`

export const Wrapper = styled.div`
    @media (min-width: 1200px) {
        margin: 0 20vw;
    }
    @media (max-width: 1200px) {
        margin: 0 10vw;
    }
    @media (max-width: 1000px) {
        margin: 0 5vw;
    }
`