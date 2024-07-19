import { FC } from 'react'
import * as SC from './MobileMenuButton.styled'

interface MobileMenuButtonProps {
  onClick: () => void
  mobileMenu: boolean
}

export const MobileMenuButton: FC<MobileMenuButtonProps> = ({
  onClick,
  mobileMenu,
}) => {
  return (
    <SC.MobileMenuButtonWrapper>
      <SC.MobileMenuButton $mobileMenu={mobileMenu} onClick={onClick}>
        <span></span>
      </SC.MobileMenuButton>
    </SC.MobileMenuButtonWrapper>
  )
}
