import { Menu, MenuItem, menuClasses } from 'react-pro-sidebar'
import styled from 'styled-components'

export const Navigation = styled(Menu)`
  /* flex-grow: 1;

  background-color: ${({ theme }) => theme.primaryBgColor}; */
`

export const NavigationItem = styled(MenuItem)`
  a.${menuClasses.button} {
    padding: ${({ theme }) => theme.global.spacing(3, 0, 3, 3)};

    &:hover,
    &:focus,
    &:active,
    &.active {
      background-color: ${({ theme }) => theme.linkActiveBgColor};
      color: ${({ theme }) => theme.linkActiveColor};
    }
  }
`
