import styled, { ThemeProvider } from "styled-components"
import React from 'react'

import { Outlet } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa'

import { light, dark } from "./styles/themes/Theme.styled"
import { GlobalStyles } from './styles/globalstyles'
import useHandles from "./hooks/useHandles";

interface PokemonPageProp {
    page?: boolean
}

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.h1<PokemonPageProp>`
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

const ThemeSwitcher = styled.button`
    background-color: ${({ theme }) => theme.colors.backgroundCard};
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5em;
    transition: linear .2s;
`

const Wrapper = styled.div`
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

export default function App() {
    const [theme, setTheme] = React.useState(() => {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        return isDarkMode ? dark : light 
    })
    const { title } = useHandles()
    const toggleTheme = () => {
        (theme === light) ? setTheme(dark) : setTheme(light)
    }
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <GlobalStyles />
                <Header>
                    <Title page={(title=== 'Pokedex') ? false : true}>{title}</Title>
                    <ThemeSwitcher onClick={() => toggleTheme()}>
                        {theme.title === "dark" ? (
                            <FaSun color={theme.colors.primary} fontSize={30} />
                        ) : (
                            <FaMoon color={theme.colors.text} fontSize={30} />
                        )}
                    </ThemeSwitcher>
                </Header>
                <Outlet/>
            </Wrapper>
        </ThemeProvider>
    )
}
