import MobileMenuButton from "components/Buttons"

import * as SC from "./Header.styled"
import { Container, Section } from "components/Common"

interface HeaderProps {
  isMobile: boolean
  handleClick: () => void
}

const Header: React.FC<HeaderProps> = ({ isMobile, handleClick }) => {
  return (
    <SC.Header>
      <Section>
        <Container>
          {isMobile && <MobileMenuButton onClick={() => handleClick()} />}
        </Container>
      </Section>
    </SC.Header>
  )
}

export default Header
