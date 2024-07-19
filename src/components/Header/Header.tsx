import { FC } from 'react'
import { MobileMenuButton } from 'components/buttons'
import * as SC from './Header.styled'
import * as SCG from 'styles/Components.styled'
import { AuthPanel } from 'components/AuthPanel'

interface HeaderProps {
  isMobile: boolean
  handleClick: () => void
  mobileMenu: boolean
}

export const Header: FC<HeaderProps> = ({
  isMobile,
  handleClick,
  mobileMenu,
}) => {
  console.log('isMobile :>> ', isMobile)

  return (
    <SC.Header>
      <SCG.Section>
        <SC.HeaderContainer>
          {isMobile && (
            <MobileMenuButton
              onClick={() => handleClick()}
              mobileMenu={mobileMenu}
            />
          )}

          <AuthPanel />
        </SC.HeaderContainer>
      </SCG.Section>
    </SC.Header>
  )
}
