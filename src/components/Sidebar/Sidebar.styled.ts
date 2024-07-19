import { Sidebar, sidebarClasses } from 'react-pro-sidebar'
import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  /* display: flex;
  height: 100%;
  min-height: 400px; */
  /* z-index: 2; */

  height: qwerty;

  & aside.ps-broken {
    border: none;
    z-index: 1;
  }

  .ps-sidebar-backdrop {
    /* z-index: 0; */
  }
`

export const StyledSidebar = styled(Sidebar)`
  .${sidebarClasses.container} {
    position: relative;
    background-color: ${({ theme }) => theme.primaryBgColor};

    /* padding: 60px 10px 10px 10px; */

    z-index: 2;

    /* box-shadow: -20px 0px 10px -20px rgba(0, 0, 0, 0.45) inset; */

    /* @media (min-width: 768px) {
      top: 0;
    } */
  }
`
