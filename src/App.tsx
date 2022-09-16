import styled, { DefaultTheme, ThemeProvider } from "styled-components"

import { Outlet } from "react-router-dom";
import { FaSun, FaMoon } from 'react-icons/fa'

import { combineTheme, light, dark } from "./styles/themes"
import { GlobalStyles } from './styles/globalstyles'
import usePersistedState from './hooks/usePersistedState'

interface PokemonPageProp {
    page?: boolean
}

const Header = styled.div<PokemonPageProp>`
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
    background-color: ${({theme}) => theme.colors.backgroundCard};
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
`;

export default function App() {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', combineTheme(light))

    const toggleTheme = () => {
    }
        setTheme(theme.title=== 'light' ? combineTheme(dark) : combineTheme(light))
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header>
                <Title page={props.pokemonPage}>{props.title}</Title>
                <ThemeSwitcher onClick={() => toggleTheme()}>
                    {theme.title === "dark" ? (
                        <FaSun color={theme.colors.primary} fontSize={30} />
                    ) : (
                        <FaMoon color={theme.colors.text} fontSize={30} />
                    )}
                </ThemeSwitcher>
            </Header>
            <Outlet />
        </ThemeProvider>
    );
}
