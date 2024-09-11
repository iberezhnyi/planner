import { FC, useEffect, useRef } from 'react'
import { MobileMenuButton, ToggleThemeButton } from 'components/buttons'
import * as SC from './Header.styled'
import { AuthPanel } from 'components/AuthPanel'
import Logo from 'assets/logo/logo-placeholder4.png'
import { useIsMobile } from 'hooks'
import { IUserProfile } from 'types'

interface HeaderProps {
  handleClick: () => void
  mobileMenu: boolean
  setHeaderHeight: (height: number) => void
  profile: IUserProfile | null
}

export const Header: FC<HeaderProps> = ({
  handleClick,
  mobileMenu,
  setHeaderHeight,
  profile,
}) => {
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
        {isMobile && (
          <MobileMenuButton
            onClick={() => handleClick()}
            mobileMenu={mobileMenu}
          />
        )}

        {!isMobile && <SC.Logo src={Logo} alt="Logo" width="130" />}

        <SC.HeaderWrapper>
          <SC.HeaderWrapperItem className={!profile ? 'is-not-login' : ''}>
            <AuthPanel />
          </SC.HeaderWrapperItem>
          <SC.HeaderWrapperItem>
            <ToggleThemeButton />
          </SC.HeaderWrapperItem>
        </SC.HeaderWrapper>
      </SC.HeaderContainer>
    </SC.HeaderSection>
  )
}
