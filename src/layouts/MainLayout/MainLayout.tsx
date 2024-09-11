import { FC, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as SC from './MainLayout.styled'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Footer } from 'components/Footer'
import { useSelector } from 'react-redux'
import { selectProfile } from 'store/selectors'
import { useIsMobile } from 'hooks'

const MainLayout: FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const isMobile = useIsMobile()

  const profile = useSelector(selectProfile)

  const handleClick = () => setMobileMenu((prev) => !prev)

  useEffect(() => {
    !isMobile && setMobileMenu(false)
  }, [isMobile])

  return (
    <>
      <Header
        handleClick={handleClick}
        mobileMenu={mobileMenu}
        setHeaderHeight={setHeaderHeight}
        profile={profile}
      />

      <SC.LayoutWrapper>
        <Sidebar
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
          headerHeight={headerHeight}
        />

        <SC.Main>
          <Outlet />
        </SC.Main>
      </SC.LayoutWrapper>

      {!profile && <Footer $isMainLayout />}
    </>
  )
}

export default MainLayout
