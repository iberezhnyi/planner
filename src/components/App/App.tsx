import { Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { selectProfile } from 'store'
import { useRefreshUserQuery } from 'store/authSlice/authApi'

import { PublicRoute } from 'guards/PublicRoute'
import { PrivateRoute } from 'guards/PrivateRoute'
import * as SC from './App.styled'

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
    <Suspense fallback={<SC.LoaderStyled />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="about" element={<AboutView />} />
          <Route
            path="services"
            element={
              <PrivateRoute>
                <ServicesView />
              </PrivateRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <AuthView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <AuthView />
              </PublicRoute>
            }
          />
        </Route>

        <Route path="*" element={<div>404 Not Found page</div>} />
      </Routes>
    </Suspense>
  )
}
