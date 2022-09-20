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
    }
}