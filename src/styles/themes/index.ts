import { DefaultTheme, CustomTheme } from 'styled-components'
import dark from './dark'
import light from './light'

const defaultTheme = {
    fontSizes: {
        small: '.5em',
        medium: '1em',
        large: '1.5em',
    }
}

function combineTheme(theme: CustomTheme): DefaultTheme {
    return { ...defaultTheme, ...theme }
}

export { 
    combineTheme,
    dark,
    light
}