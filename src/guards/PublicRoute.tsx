import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsAuth } from 'store'

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth)
  const { state: prevLocation } = useLocation()

  return !isAuth ? children : <Navigate to={prevLocation ?? '/'} />
}
