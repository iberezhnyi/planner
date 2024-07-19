import { global } from 'styles'
import styled from 'styled-components'

export const ToggleThemeButton = styled.button`
  position: absolute;
  top: 2%;
  right: 5%;
`

export const ToggleThemeIcon = styled.svg`
  width: 2rem;
  height: 2rem;

  fill: ${({ theme }) => theme.global.text.color.white};
`
