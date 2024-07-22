import { FC, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import * as SC from './MainLayout.styled'
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Footer } from 'components/Footer'
import { useSelector } from 'react-redux'
import { selectProfile } from 'store'

const MainLayout: FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 767px)').matches
  )
  const profile = useSelector(selectProfile)

  const handleClick = () => setMobileMenu((prev) => !prev)

  useEffect(() => {
    !isMobile && setMobileMenu(false)
  }, [isMobile])

  return (
    <>
      <Header
        isMobile={isMobile}
        handleClick={handleClick}
        mobileMenu={mobileMenu}
      />

      <Sidebar
        setMobileMenu={setMobileMenu}
        setIsMobile={setIsMobile}
        mobileMenu={mobileMenu}
      />

      <SC.Main>
        <Outlet />
      </SC.Main>

      {!profile && <Footer isMainLayout />}
    </>
  )
}

export default MainLayout
