import Header from "components/Header"
import Sidebar from "components/Sidebar"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import * as SC from "./MainLayout.styled"

const MainLayout = () => {
  const [toggled, setToggled] = useState(false)
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  )

  const handleClick = () => setToggled(!toggled)

  return (
    <>
      <Header isMobile={isMobile} handleClick={handleClick} />

      <SC.MainLayoutInnerWrapper>
        <Sidebar
          setToggled={setToggled}
          setIsMobile={setIsMobile}
          toggled={toggled}
        />

        <main>
          <Outlet />
        </main>
      </SC.MainLayoutInnerWrapper>
    </>
  )
}

export default MainLayout
