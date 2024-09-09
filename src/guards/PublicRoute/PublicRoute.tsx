import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuth } from 'store/selectors'

export const PublicRoute: FC = () => {
  const isAuth = useSelector(selectIsAuth)
  const { state: prevLocation } = useLocation()

  return !isAuth ? <Outlet /> : <Navigate to={prevLocation ?? '/'} />
}
