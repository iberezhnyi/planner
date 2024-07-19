import { FC } from 'react'

import * as SC from './Sidebar.styled'
import { Navigation } from 'components/Navigation'
import { SidebarAuthPanel } from './SidebarAuthPanel/SidebarAuthPanel'

interface SidebarProps {
  mobileMenu: boolean
  setIsMobile: (isMobile: boolean) => void
  setMobileMenu: (mobileMenu: boolean) => void
}

export const Sidebar: FC<SidebarProps> = ({
  mobileMenu,
  setIsMobile,
  setMobileMenu,
}) => {
  return (
    <SC.SidebarWrapper>
      <SC.StyledSidebar
        toggled={mobileMenu}
        customBreakPoint="767px"
        onBreakPoint={setIsMobile}
        onBackdropClick={() => setMobileMenu(false)}
      >
        <SidebarAuthPanel />
        <Navigation setMobileMenu={setMobileMenu} />
      </SC.StyledSidebar>
    </SC.SidebarWrapper>
  )
}
