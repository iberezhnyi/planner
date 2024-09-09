import styled from 'styled-components'
import { global } from 'styles'
import { btnCommonStyles } from 'styles'

export const ToggleThemeButton = styled.button`
  ${btnCommonStyles}/* @media (max-width: ${global.breakpoint.maxTablet}) {
    position: absolute;
    top: 2.5%;
    right: 5%;
  } */
`

export const ToggleThemeIcon = styled.svg`
  width: 1rem;
  height: 1rem;

  fill: ${({ theme }) => theme.global.text.color.white};

  @media (min-width: ${global.breakpoint.tablet}) {
    /* fill: ${({ theme }) => theme.textColor}; */

    width: 1.5rem;
    height: 1.5rem;
  }
`
