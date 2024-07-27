import { Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { selectProfile } from 'store'
import { useRefreshUserQuery } from 'store/authSlice/authApi'
import { PrivateRoute, PublicRoute } from 'guards'
import { Loader } from 'components/common'

const MainLayout = lazy(() => import('layouts/MainLayout'))
const HomeView = lazy(() => import('views/HomeView'))
const AuthView = lazy(() => import('views/AuthView'))
const AboutView = lazy(() => import('views/AboutView'))
const ContactsView = lazy(() => import('views/ContactsView'))
const ServicesView = lazy(() => import('views/ServicesView'))

export const App = () => {
  const profile = useSelector(selectProfile)
  const { data: refreshData } = useRefreshUserQuery()

  useEffect(() => {
    !profile && refreshData
  }, [profile, refreshData])

  return (
    <Suspense fallback={<Loader className="large centered" />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="about" element={<AboutView />} />

          <Route path="" element={<PrivateRoute />}>
            <Route path="services" element={<ServicesView />} />
            <Route path="contacts" element={<ContactsView />} />
          </Route>

          <Route path="" element={<PublicRoute />}>
            <Route path="/register" element={<AuthView />} />
            <Route path="/login" element={<AuthView />} />
          </Route>
        </Route>

        <Route path="*" element={<div>404 Not Found page</div>} />
      </Routes>
    </Suspense>
  )
}
