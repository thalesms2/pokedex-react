import { createGlobalStyle } from "styled-components"

import FlexoBold from '../assets/fonts/Flexo-Bold.ttf'
import FlexoLight from '../assets/fonts/Flexo-Light.ttf'
import FlexoMedium from '../assets/fonts/Flexo-Medium.ttf'
import FlexoRegular from '../assets/fonts/Flexo-Regular.ttf'
import FlexoThin from '../assets/fonts/Flexo-Thin.ttf'

export const GlobalStyles = createGlobalStyle`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        vertical-align: baseline;
        list-style: none;
        border: 0;
    }
    a {
        text-decoration: none;
    }
    body {
        background-color: white;
    }
    @font-face {
        font-family: 'Flexo';
        src: url(${FlexoBold}) format('truetype');
        src: url(${FlexoLight}) format('truetype');
        src: url(${FlexoMedium}) format('truetype');
        src: url(${FlexoRegular}) format('truetype');
        src: url(${FlexoThin}) format('truetype');
    }
`

// Flexo-Medium | Flexo | Flexo Light | Flexo Bold