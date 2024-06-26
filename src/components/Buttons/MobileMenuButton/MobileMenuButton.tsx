import * as SC from "./MobileMenuButton.styled"

const MobileMenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <SC.MobileMenuButton onClick={onClick}>
      <span></span>
    </SC.MobileMenuButton>
  )
}

export default MobileMenuButton
