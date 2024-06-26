import { Menu, MenuItem } from "react-pro-sidebar"
import styled from "styled-components"

export const Navigation = styled(Menu)``

export const NavigationItem = styled(MenuItem)`
  &.active {
    color: tomato;
  }

  &:hover .active {
    color: tomato;
    background-color: inherit !important;
  }
`
