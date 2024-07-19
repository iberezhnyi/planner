import { FC } from 'react'
import { ToggleThemeButton } from 'components/buttons'
import * as SC from './Sidebar.styled'
import { Navigation } from 'components/Navigation'

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
        <Navigation setMobileMenu={setMobileMenu} />

        <ToggleThemeButton />
      </SC.StyledSidebar>
    </SC.SidebarWrapper>
  )
}
