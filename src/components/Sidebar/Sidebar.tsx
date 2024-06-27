// import { useDispatch, useSelector } from "react-redux"
// import { selectTheme, setTheme } from "store"

import { ToggleThemeButton } from "components/Buttons/ToggleThemeButton/ToggleThemeButton"
import * as SC from "./Sidebar.styled"
import Navigation from "components/Navigation"
// import ToggleThemeButton from "components/Buttons"

interface SidebarProps {
  mobileMenu: boolean
  setIsMobile: (isMobile: boolean) => void
  setMobileMenu: (mobileMenu: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  mobileMenu,
  setIsMobile,
  setMobileMenu,
}) => {
  // const dispatch = useDispatch()
  // const theme = useSelector(selectTheme)

  // const handleClick = () => {
  //   dispatch(setTheme("light"))
  // }

  // console.log("theme :>> ", theme)

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

export default Sidebar
