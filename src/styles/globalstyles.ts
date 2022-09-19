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
    :root {
        --background: '#fff';
        --background-card: '#F2F2F2';
        --primary-color: '#EE6B2F';
        --primary-hover: '#DA471B';
        --text-color: '#313131';
        --sub-text-color: '#919191';
    }
    [data-theme='dark'] {
        --background: '#121212';
        --background-card: '#373737';
        --primary-color: '#EE6B2F';
        --primary-hover: '#DA471B';
        --text-color: '#DFDFDF';
        --sub-text-color: '#9E9E9E';
    }
    a {
        text-decoration: none;
    }
    body {
        background-color: var(--background);
        transition: linear .2s;
    }
    @font-face {
        font-family: 'Flexo';
        src: local('Flexo'),
             url(${FlexoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Flexo';
        src: local('Flexo'),
             url(${FlexoLight}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
    @font-face {
        font-family: 'Flexo';
        src: local('Flexo'),
             url(${FlexoMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Flexo';
        src: local('Flexo'),
             url(${FlexoBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Flexo';
        src: local('Flexo'),
             url(${FlexoThin}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    `

// Flexo-Medium | Flexo | Flexo Light | Flexo Bold