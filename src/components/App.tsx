import { Suspense, lazy, useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { profileSelector } from "store"
import { useRefreshUserQuery } from "store/authSlice/authApi"

import { PublicRoute } from "guards/PublicRoute"
import { PrivateRoute } from "guards/PrivateRoute"

const MainLayout = lazy(() => import("layouts/MainLayout"))
const HomeView = lazy(() => import("views/HomeView"))
const RegisterView = lazy(() => import("views/RegisterView"))
const LoginView = lazy(() => import("views/LoginView"))
const AboutView = lazy(() => import("views/AboutView"))
const ContactsView = lazy(() => import("views/ContactsView"))
const ServicesView = lazy(() => import("views/ServicesView"))

export const App = () => {
  const profile = useSelector(profileSelector)
  const { data: refreshData } = useRefreshUserQuery()

  // console.log("refreshData :>> ", refreshData)

  useEffect(() => {
    !profile && refreshData
  }, [profile, refreshData])

  return (
    <Suspense fallback={<div>Loading....</div>}>
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
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginView />
              </PublicRoute>
            }
          />
        </Route>

        <Route path="*" element={<div>404 Not Found page</div>} />
      </Routes>
    </Suspense>
  )
}
