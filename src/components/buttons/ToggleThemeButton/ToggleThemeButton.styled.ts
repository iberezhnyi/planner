import styled from 'styled-components'
import { global } from 'styles'
import { btnCommonStyles } from 'styles'

export const ToggleThemeButton = styled.button`
  ${btnCommonStyles}

  color: ${({ theme }) => theme.global.text.color.white};

  transition: color ${({ theme }) => theme.transitionDuration};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({ theme }) => theme.linkActiveColor};
  }
`

export const ToggleThemeIcon = styled.svg`
  width: 1rem;
  height: 1rem;

  /* fill: ${({ theme }) => theme.global.text.color.white}; */
  fill: currentColor;

  @media (min-width: ${global.breakpoint.mobile}) {
    /* fill: ${({ theme }) => theme.textColor}; */

    width: 1.5rem;
    height: 1.5rem;
  }
`
