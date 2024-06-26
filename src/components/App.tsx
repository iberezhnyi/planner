import { Route, Routes } from "react-router-dom"

import MainLayout from "layouts/MainLayout"
import HomeView from "views/HomeView"
import AboutView from "views/AboutView"
import ServicesView from "views/ServicesView"
import ContactsView from "views/ContactsView"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="services" element={<ServicesView />} />
        <Route path="contacts" element={<ContactsView />} />
      </Route>
    </Routes>
  )
}

export default App
