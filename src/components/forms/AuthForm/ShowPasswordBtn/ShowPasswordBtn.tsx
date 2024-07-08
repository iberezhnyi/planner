import eyeOn from "assets/icons/eye-on.svg"
import eyeOff from "assets/icons/eye-off.svg"

import * as SC from "./ShowPasswordBtn.styled"

export default function ShowPasswordBtn({ showPassword, togglePassword }) {
  return (
    <button type="button" onClick={() => togglePassword()}>
      <SC.EyeIcon src={showPassword ? eyeOff : eyeOn} alt="Success Icon" />
    </button>
  )
}
