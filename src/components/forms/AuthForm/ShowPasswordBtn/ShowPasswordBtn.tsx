import { FC } from 'react'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './ShowPasswordBtn.styled'

interface ShowPasswordBtnProps {
  showPassword: boolean
  togglePassword: () => void
}

export const ShowPasswordBtn: FC<ShowPasswordBtnProps> = ({
  showPassword,
  togglePassword,
}) => {
  return (
    <button type="button" onClick={() => togglePassword()}>
      <SC.EyeIcon className={showPassword ? 'active' : ''}>
        <use href={`${sprite}#${showPassword ? 'eye-off' : 'eye-on'}`} />
      </SC.EyeIcon>
    </button>
  )
}
