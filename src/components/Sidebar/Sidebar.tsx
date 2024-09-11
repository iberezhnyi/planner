import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectProfile } from 'store/selectors'
import { SidebarAuthPanel } from './SidebarAuthPanel/SidebarAuthPanel'
import { Navigation } from 'components/Navigation'

import { Footer } from 'components/Footer'
import { global } from 'styles'
import * as SC from './Sidebar.styled'

interface SidebarProps {
  mobileMenu: boolean
  setMobileMenu: (mobileMenu: boolean) => void
  headerHeight: number
}

export const Sidebar: FC<SidebarProps> = ({
  mobileMenu,
  setMobileMenu,
  headerHeight,
}) => {
  const profile = useSelector(selectProfile)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', mobileMenu)

    return () => document.body.classList.remove('no-scroll')
  }, [mobileMenu])

  return (
    <SC.StyledSidebar
      toggled={mobileMenu}
      customBreakPoint={`${global.breakpoint.maxTablet}`}
      onBackdropClick={() => setMobileMenu(false)}
      $profile={!!profile}
    >
      {!profile && <SC.SidebarThumb $headerHeight={headerHeight} />}

      <SC.SidebarWrapper>
        {profile && <SidebarAuthPanel />}

        <Navigation setMobileMenu={setMobileMenu} />

        {/* <ToggleThemeButton /> */}
      </SC.SidebarWrapper>

      {profile && <Footer />}
    </SC.StyledSidebar>
  )
}
