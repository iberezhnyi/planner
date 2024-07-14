import sprite from 'assets/icons/sprite.svg'

import * as SC from './ShowPasswordBtn.styled'

export default function ShowPasswordBtn({ showPassword, togglePassword }) {
  return (
    <button type="button" onClick={() => togglePassword()}>
      <SC.EyeIcon1 className={showPassword ? 'active' : ''}>
        <use href={`${sprite}#${showPassword ? 'eye-off' : 'eye-on'}`} />
      </SC.EyeIcon1>
    </button>
  )
}
