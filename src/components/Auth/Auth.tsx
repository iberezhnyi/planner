import { NavLink } from "react-router-dom"

export const Auth = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  )
}
