import { Button } from "components/buttons"
import { CustomModal } from "components/Modal"

import { useState } from "react"

import { useDispatch, useSelector } from "react-redux"
// import { Link, NavLink, useNavigate } from "react-router-dom"
import { logout, profileSelector } from "store"

export const Auth = () => {
  const profile = useSelector(profileSelector)
  // const navigate = useNavigate()
  const dispatch = useDispatch()

  // Переписати, якщо бек зберігає токен в БД
  const handleLogOut = () => {
    dispatch(logout())
    // navigate("/login")
  }

  // для модалки
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {profile ? (
        <div>
          <Button onClick={handleLogOut} to={"/login"}>
            Log out
          </Button>
          <p>{profile.firstName}</p>
        </div>
      ) : (
        <div>
          <Button to="/register" nav>
            Register
          </Button>
          <Button to="/login" nav>
            Log In
          </Button>
        </div>
      )}

      {/* // для модалки */}
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        vjlfkrf
      </button>
      {isOpen && <CustomModal />}
    </>
  )
}
