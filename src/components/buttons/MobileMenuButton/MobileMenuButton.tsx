import * as SC from "./MobileMenuButton.styled"

export const MobileMenuButton: React.FC<{
  onClick: () => void
  mobileMenu: boolean
}> = ({ onClick, mobileMenu }) => {
  console.log("mobileMenu :>> ", mobileMenu)
  return (
    <SC.MobileMenuButtonWrapper>
      <SC.MobileMenuButton $mobileMenu={mobileMenu} onClick={onClick}>
        <span></span>
      </SC.MobileMenuButton>
    </SC.MobileMenuButtonWrapper>
  )
}
