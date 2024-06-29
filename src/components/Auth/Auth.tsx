import { NavLink } from "react-router-dom"

export const Auth = () => {
  return (
    <div>
      <NavLink to="/registration">Registration</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  )
}
