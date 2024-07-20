import { Menu, MenuItem } from 'react-pro-sidebar'
import styled from 'styled-components'

export const Navigation = styled(Menu)`
  background-color: ${(props) => props.theme.primaryBgColor};
`

export const NavigationItem = styled(MenuItem)`
  a.active {
    color: ${({ theme }) => theme.linkActiveColor};
  }

  .ps-menu-button:hover {
    color: ${({ theme }) => theme.linkActiveColor};
    background-color: inherit !important;
  }
`
