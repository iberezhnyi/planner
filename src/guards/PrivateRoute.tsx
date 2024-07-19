import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsAuth } from 'store'

interface PrivateRouteProps {
  children: React.ReactNode
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const isAuth = useSelector(selectIsAuth)
  const location = useLocation()

  return isAuth ? children : <Navigate to={'/login'} state={location} />
}
