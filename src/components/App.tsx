import { MainLayout } from "layouts/MainLayout"
import { Route, Routes } from "react-router-dom"
import { AboutView } from "views/AboutView"
import { ContactsView } from "views/ContactsView"
import { HomeView } from "views/HomeView"
import { LoginView } from "views/LoginView"
import { RegisterView } from "views/RegisterView"
import { ServicesView } from "views/ServicesView"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="services" element={<ServicesView />} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="registration" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
      </Route>
    </Routes>
  )
}
