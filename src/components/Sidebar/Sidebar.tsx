import { FC } from 'react'

import * as SC from './Sidebar.styled'
import { Navigation } from 'components/Navigation'
import { SidebarAuthPanel } from './SidebarAuthPanel/SidebarAuthPanel'
import { ToggleThemeButton } from 'components/buttons'
import { useSelector } from 'react-redux'
import { selectProfile } from 'store'
import { Footer } from 'components/Footer'

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
  const profile = useSelector(selectProfile)

  return (
    <SC.StyledSidebar
      toggled={mobileMenu}
      customBreakPoint="767px"
      onBreakPoint={setIsMobile}
      onBackdropClick={() => setMobileMenu(false)}
    >
      <ToggleThemeButton />

      <SidebarAuthPanel />

      <Navigation setMobileMenu={setMobileMenu} />

      {profile && <Footer />}
    </SC.StyledSidebar>
  )
}
