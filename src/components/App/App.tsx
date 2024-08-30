import { Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { selectProfile, useGetProfileQuery } from 'store'
import { PrivateRoute, PublicRoute } from 'guards'
import { Loader } from 'components/common'
// import { MonthList } from 'components/MonthList'
// import { WeekList } from 'components/WeekList'

const MainLayout = lazy(() => import('layouts/MainLayout'))
const HomeView = lazy(() => import('views/HomeView'))
const AuthView = lazy(() => import('views/AuthView'))
const CalendarView = lazy(() => import('views/CalendarView'))
const ContactsView = lazy(() => import('views/ContactsView'))
const ServicesView = lazy(() => import('views/ServicesView'))
const WeekList = lazy(() => import('components/WeekList'))
const MonthList = lazy(() => import('components/MonthList'))

export const App = () => {
  const profile = useSelector(selectProfile)
  const { data: profileData } = useGetProfileQuery(undefined, {
    skip: Boolean(profile), // пропускаем запрос, если профиль уже загружен
  })

  useEffect(() => {
    if (profileData) {
      // Обновите профиль в стейте, если он успешно получен
      // Например, вызовите dispatch с нужным действием для обновления профиля
    }
  }, [profileData])

  return (
    <Suspense fallback={<Loader className="large centered" />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="calendar" element={<CalendarView />}>
            <Route path="weeks" element={<WeekList />} />
            <Route path="months" element={<MonthList />} />
          </Route>

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
