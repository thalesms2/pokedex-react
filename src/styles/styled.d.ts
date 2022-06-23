import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            primary: string
            primaryHover: string
            secundary: string

            background: string
            backgroundCard: string
            text: string
            subtext: string
        }
        fontSizes: {
            small: string
            medium: string
            large: string
        }
    }
    export interface CustomTheme {
        title: string
        colors: {
            primary: string
            primaryHover: string
            secundary: string

            background: string
            backgroundCard: string
            text: string
            subtext: string
        }
    }
}
