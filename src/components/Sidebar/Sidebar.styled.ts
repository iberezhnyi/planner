import { Sidebar, sidebarClasses } from "react-pro-sidebar"
import styled from "styled-components"

export const SidebarWrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 400px;

  & aside {
    border: none;
  }
`
// sdfgsdgdfgdfhdf

export const StyledSidebar = styled(Sidebar)`
  .${sidebarClasses.container} {
    background-color: grey;
    padding: 60px 10px 10px 10px;

    box-shadow: -20px 0px 10px -20px rgba(0, 0, 0, 0.45) inset;

    /* @media (min-width: 768px) {
      top: 0;
    } */
  }
`
