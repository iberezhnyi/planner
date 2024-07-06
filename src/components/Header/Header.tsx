import { MobileMenuButton } from "components/buttons"
import * as SC from "./Header.styled"
import { Auth } from "components/Auth"

interface HeaderProps {
  isMobile: boolean
  handleClick: () => void
  mobileMenu: boolean
}

export const Header: React.FC<HeaderProps> = ({
  isMobile,
  handleClick,
  mobileMenu,
}) => {
  console.log("isMobile :>> ", isMobile)

  return (
    <SC.Header>
      <div className="section">
        <div className="container">
          <SC.HeaderInnerWrapper>
            {isMobile && (
              <MobileMenuButton
                onClick={() => handleClick()}
                mobileMenu={mobileMenu}
              />
            )}

            <Auth />
          </SC.HeaderInnerWrapper>
        </div>
      </div>
    </SC.Header>
  )
}
