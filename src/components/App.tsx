import { Suspense, lazy, useEffect } from "react"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { profileSelector } from "store"
import { useRefreshUserQuery } from "store/authSlice/authApi"

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

  console.log("refreshData :>> ", refreshData)

  useEffect(() => {
    !profile && refreshData
  }, [profile, refreshData])

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="services" element={<ServicesView />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
        </Route>

        <Route path="*" element={<div>404 Not Found page</div>} />
      </Routes>
    </Suspense>
  )
}
