import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { logout, profileSelector } from "store"

export const Auth = () => {
  const profile = useSelector(profileSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Переписати, якщо бек зберігає токен в БД
  const handleLogOut = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      {profile ? (
        <button onClick={handleLogOut}>Log out</button>
      ) : (
        <NavLink to="/login">Log In</NavLink>
      )}
      {profile && <p>{profile.firstName}</p>}
    </div>
  )
}
