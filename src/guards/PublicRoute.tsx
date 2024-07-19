import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsAuth } from 'store'

interface PublicRouteProps {
  children: React.ReactNode
}

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const isAuth = useSelector(selectIsAuth)
  const { state: prevLocation } = useLocation()

  return !isAuth ? children : <Navigate to={prevLocation ?? '/'} />
}
