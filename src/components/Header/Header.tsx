import MobileMenuButton from "components/Buttons"

import * as SC from "./Header.styled"
import { Container, Section } from "components/Common"

interface HeaderProps {
  isMobile: boolean
  handleClick: () => void
  mobileMenu: boolean
}

const Header: React.FC<HeaderProps> = ({
  isMobile,
  handleClick,
  mobileMenu,
}) => {
  return (
    <SC.Header>
      <Section>
        <Container>
          <SC.HeaderInnerWrapper>
            {isMobile && (
              <MobileMenuButton
                onClick={() => handleClick()}
                mobileMenu={mobileMenu}
              />
            )}
          </SC.HeaderInnerWrapper>
        </Container>
      </Section>
    </SC.Header>
  )
}

export default Header
