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
  line-height: ${({ theme }) => theme.global.text.lineHeight.xl};
  
  background-image: ${({ theme }) => theme.pageBackground};
}

body.no-scroll {
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
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
  display: flex;

  padding: 0;

  font-family: inherit;

  background: none;

  border: none;
  cursor: pointer;
}

img {
  display: block;

  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}

#root {
  display: flex;
  flex-direction: column;
  min-height: inherit;
}
`
