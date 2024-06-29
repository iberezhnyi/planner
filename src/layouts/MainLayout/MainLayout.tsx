import { useState } from "react"
import { Outlet } from "react-router-dom"
import * as SC from "./MainLayout.styled"
import { Header } from "components/Header"
import { Sidebar } from "components/Sidebar"

export const MainLayout = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  )

  const handleClick = () => setMobileMenu(!mobileMenu)

  return (
    <>
      <Header
        isMobile={isMobile}
        handleClick={handleClick}
        mobileMenu={mobileMenu}
      />

      <SC.MainLayoutInnerWrapper>
        <Sidebar
          setMobileMenu={setMobileMenu}
          setIsMobile={setIsMobile}
          mobileMenu={mobileMenu}
        />

        <main>
          <Outlet />
        </main>
      </SC.MainLayoutInnerWrapper>
    </>
  )
}
