import { Sidebar, sidebarClasses } from 'react-pro-sidebar'
import styled from 'styled-components'
import { global } from 'styles'

// prettier-ignore
export const StyledSidebar = styled(Sidebar)<{ $profile: boolean }>`
  &&& {
    z-index: 1;

    border: none;

    @media (min-width: ${global.breakpoint.tablet}) and (max-width: ${global.breakpoint.largeDesktop}) {
      width: 200px;
      min-width: 200px;
    }
  }

  .${sidebarClasses.container} {
    display: flex;
    flex-direction: column;
    z-index: 2;

    background-color: ${({ theme }) => theme.primaryBgColor};
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

export const SidebarThumb = styled.div<{ $headerHeight: number }>`
  background-color: ${({ theme }) => theme.secondaryBgColor};
  height: ${({ $headerHeight }) => `${$headerHeight}px`};

  @media (min-width: ${global.breakpoint.tablet}) {
    display: none;
  }
`
