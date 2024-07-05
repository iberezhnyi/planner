import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { isAuthSelector } from "store"

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(isAuthSelector)
  const location = useLocation()

  return isAuth ? children : <Navigate to={"/login"} state={location} />
}
