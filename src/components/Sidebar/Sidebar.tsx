import * as SC from "./Sidebar.styled"
import Navigation from "components/Navigation"

import {
  sidebarClasses,
  // menuItemStyles,
  // MenuItemStyles,
} from "react-pro-sidebar"

interface SidebarProps {
  toggled: boolean
  setIsMobile: (isMobile: boolean) => void
  setToggled: (toggled: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  toggled,
  setIsMobile,

  setToggled,
}) => {
  console.log("sidebarClasses :>> ", sidebarClasses)
  // console.log("menuItemStyles :>> ", menuItemStyles)
  // console.log("MenuItemStyles :>> ", MenuItemStyles)

  return (
    <SC.SidebarWrapper>
      <SC.StyledSidebar
        toggled={toggled}
        customBreakPoint="767px"
        onBreakPoint={setIsMobile}
        onBackdropClick={() => setToggled(false)}
      >
        <Navigation />
      </SC.StyledSidebar>
    </SC.SidebarWrapper>
  )
}

export default Sidebar
