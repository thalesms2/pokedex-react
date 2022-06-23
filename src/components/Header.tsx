import styled, { DefaultTheme, ThemeProvider } from "styled-components"

import { FaSun, FaMoon } from 'react-icons/fa'

import { combineTheme, light, dark } from "../styles/themes"
import { GlobalStyles } from '../styles/globalstyles'
import usePersistedState from '../hooks/usePersistedState'

interface HeaderProps {
    title: string
    pokemonPage? : boolean
    children: any
}

interface PokemonPageProp {
    page?: boolean
}

const Wrapper = styled.div<PokemonPageProp>`
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
`

const ThemeSwitcher = styled.button`
    background-color: ${({theme}) => theme.colors.backgroundCard};
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5em;
`

export default function Header(props: HeaderProps) {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', combineTheme(light))

    const toggleTheme = () => {
        setTheme(theme.title=== 'light' ? combineTheme(dark) : combineTheme(light))
    }

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper page={props.pokemonPage}>
                    <Title page={props.pokemonPage}>{props.title}</Title>
                    <ThemeSwitcher onClick={() => toggleTheme()}>
                        {(theme.title === 'dark') ? 
                            <FaSun color={theme.colors.primary} fontSize={30} /> : 
                            <FaMoon color={theme.colors.text} fontSize={30} /> } 
                    </ThemeSwitcher>
            </Wrapper>
            {props.children}
        </ThemeProvider>
    )
}