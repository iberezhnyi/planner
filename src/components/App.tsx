import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

// import { MainLayout } from "layouts/MainLayout"
// import { HomeView } from "views/HomeView"
// import { RegisterView } from "views/RegisterView"
// import { LoginView } from "views/LoginView"
// import { AboutView } from "views/AboutView"
// import { ContactsView } from "views/ContactsView"
// import { ServicesView } from "views/ServicesView"

const MainLayout = lazy(() => import("layouts/MainLayout"))
const HomeView = lazy(() => import("views/HomeView"))
const RegisterView = lazy(() => import("views/RegisterView"))
const LoginView = lazy(() => import("views/LoginView"))
const AboutView = lazy(() => import("views/AboutView"))
const ContactsView = lazy(() => import("views/ContactsView"))
const ServicesView = lazy(() => import("views/ServicesView"))

export const App = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="services" element={<ServicesView />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
