import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsAuth } from 'store'

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth)
  const location = useLocation()

  return isAuth ? children : <Navigate to={'/login'} state={location} />
}
