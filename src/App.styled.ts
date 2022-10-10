import styled from 'styled-components'

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.text};
    font-family: "Flexo",arial,sans-serif;
    font-weight: 600;
    line-height: 125%;
    font-size: 3em;
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