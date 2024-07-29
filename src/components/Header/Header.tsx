import { FC, useEffect, useRef } from 'react'
import { MobileMenuButton } from 'components/buttons'
import * as SC from './Header.styled'
import { AuthPanel } from 'components/AuthPanel'
import Logo from 'assets/logo/logo-placeholder4.png'
import { useIsMobile } from 'hooks'

interface HeaderProps {
  handleClick: () => void
  mobileMenu: boolean
  setHeaderHeight: (height: number) => void
}

export const Header: FC<HeaderProps> = ({ handleClick, mobileMenu, setHeaderHeight }) => {
  const isMobile = useIsMobile()
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight)
    }
  }, [setHeaderHeight])

  return (
    <SC.HeaderSection ref={headerRef}>
      <SC.HeaderContainer>
        {isMobile && <MobileMenuButton onClick={() => handleClick()} mobileMenu={mobileMenu} />}

        {!isMobile && <SC.Logo src={Logo} alt="Logo" width="130" />}

        <AuthPanel />
      </SC.HeaderContainer>
    </SC.HeaderSection>
  )
}
