import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectProfile } from 'store'
import { SidebarAuthPanel } from './SidebarAuthPanel/SidebarAuthPanel'
import { Navigation } from 'components/Navigation'
import { ToggleThemeButton } from 'components/buttons'
import { Footer } from 'components/Footer'
import * as SC from './Sidebar.styled'

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
      $profile={!!profile}
    >
      {!profile && <SC.SidebarThumb />}

      <SC.SidebarWrapper>
        {profile && <SidebarAuthPanel />}

        <Navigation setMobileMenu={setMobileMenu} />

        <ToggleThemeButton />
      </SC.SidebarWrapper>

      {profile && <Footer />}
    </SC.StyledSidebar>
  )
}
