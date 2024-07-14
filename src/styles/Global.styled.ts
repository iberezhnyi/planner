import 'modern-normalize'
import { createGlobalStyle } from 'styled-components'
import Coolvetica from 'styles/fonts/Coolvetica/CoolveticaRg-Regular.ttf'
import Inter from 'styles/fonts/Inter/Inter-VariableFont_slnt,wght.ttf'

export const Global = createGlobalStyle`

@font-face {
  font-family: 'Inter';
  src: url(${Inter});
}

@font-face {
  font-family: 'Coolvetica';
  src: url(${Coolvetica});
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  max-width: 100vw;

  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.global.text.fontSize.s};
  line-height: ${({ theme }) => theme.global.text.lineHeight};
  
  background: ${({ theme }) => theme.pageBackground};
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

h1 {
  color: ${({ theme }) => theme.titleColor};
  font-size: ${({ theme }) => theme.global.text.fontSize.l};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.sb};
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  padding: 0;

  font-family: inherit;

  background-color: transparent;

  border: none;
  cursor: pointer;
}

img {
  display: block;

  max-width: 100%;
  height: auto;
}

a {
  color: ${({ theme }) => theme.linkColor};
  text-decoration: none;

  &.active{
    color: ${({ theme }) => theme.linkActiveColor};
  }
}

.section {
  padding-top: 10px;
  padding-bottom: 10px;
}

.container {
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
}
`

// +++++++++++++++++++++++++++

/* @font-face {
  font-family: 'Inter';
  src: url('styles/fonts/Inter-Regular.woff2') format('woff2'),
    url('styles/fonts/Inter-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('styles/fonts/Inter-Medium.woff2') format('woff2'),
    url('styles/fonts/Inter-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('styles/fonts/Inter-SemiBold.woff2') format('woff2'),
    url('styles/fonts/Inter-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('styles/fonts/Inter-Bold.woff2') format('woff2'),
    url('styles/fonts/Inter-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Coolvetica';
  src: url('styles/fonts/Coolvetica-Regular.woff2') format('woff2'),
    url('styles/fonts/Coolvetica-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Coolvetica';
  src: url('styles/fonts/Coolvetica-Italic.woff2') format('woff2'),
    url('styles/fonts/Coolvetica-Italic.woff') format('woff');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
} */
