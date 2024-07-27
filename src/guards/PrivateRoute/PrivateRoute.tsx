import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuth } from 'store'

export const PrivateRoute: FC = () => {
  const isAuth = useSelector(selectIsAuth)
  const location = useLocation()

  return isAuth ? <Outlet /> : <Navigate to={'/login'} state={location} />
}
