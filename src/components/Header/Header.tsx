import { FC } from 'react'
import { MobileMenuButton } from 'components/buttons'
import * as SC from './Header.styled'
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
      <SC.HeaderContainer>
        {isMobile && (
          <MobileMenuButton
            onClick={() => handleClick()}
            mobileMenu={mobileMenu}
          />
        )}

        <AuthPanel />
      </SC.HeaderContainer>
    </SC.Header>
  )
}
