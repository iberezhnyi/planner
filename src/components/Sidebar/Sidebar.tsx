import * as SC from "./Sidebar.styled"
import Navigation from "components/Navigation"
import { sidebarClasses } from "react-pro-sidebar"

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
  console.log("sidebarClasses :>> ", sidebarClasses)

  return (
    <SC.SidebarWrapper>
      <SC.StyledSidebar
        toggled={mobileMenu}
        customBreakPoint="767px"
        onBreakPoint={setIsMobile}
        onBackdropClick={() => setMobileMenu(false)}
      >
        <Navigation setMobileMenu={setMobileMenu} />
      </SC.StyledSidebar>
    </SC.SidebarWrapper>
  )
}

export default Sidebar
