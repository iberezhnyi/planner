import { Sidebar, sidebarClasses } from 'react-pro-sidebar'
import styled from 'styled-components'

export const StyledSidebar = styled(Sidebar)`
  z-index: 0 !important;

  .${sidebarClasses.container} {
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  .${sidebarClasses.backdrop} {
    z-index: inherit;
  }
`
