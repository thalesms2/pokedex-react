import { ThemeProvider } from "styled-components"
import React from 'react'

import { Outlet, Link } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa'

import { light, dark } from "./styles/themes/Theme.styled"
import { GlobalStyles } from './styles/globalstyles'
import {
    Header,
    Title,
    ThemeSwitcher,
    Wrapper
} from './App.styled'

export default function App() {
    const [theme, setTheme] = React.useState(() => {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        return isDarkMode ? dark : light 
    })
    const toggleTheme = () => {
        document.body.style.transition = "linear .2s";
        (theme === light) ? setTheme(dark) : setTheme(light)
    }
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <GlobalStyles />
                <Header>
                    <Link to="/"><Title>Pokedex</Title></Link>
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
