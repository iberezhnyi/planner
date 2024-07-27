import { Sidebar, sidebarClasses } from 'react-pro-sidebar'
import styled from 'styled-components'

export const StyledSidebar = styled(Sidebar)<{ $profile: boolean }>`
  &&& {
    z-index: 1;
    border: none;
  }

  .${sidebarClasses.container} {
    display: flex;
    flex-direction: column;
    z-index: 2;

    background-color: ${({ theme }) => theme.primaryBgColor};

    /* @media (max-width: 767px) {
      padding-top: ${({ theme, $profile }) =>
      $profile ? 0 : theme.global.spacing(12)};
    } */
  }

  .${sidebarClasses.backdrop} {
    z-index: inherit;

    background-color: ${({ theme }) => theme.global.backdrop.backgroundColor};
    backdrop-filter: ${({ theme }) => theme.global.backdrop.backdropFilter};
  }
`

export const SidebarWrapper = styled.div`
  flex-grow: 1;
`

export const SidebarThumb = styled.div`
  background-color: ${({ theme }) => theme.secondaryBgColor};
  height: ${({ theme }) => theme.global.spacing(14)};
`
