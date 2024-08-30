import { CalendarControlPanel } from 'components/CalendarControlPanel'
// import WeekList from 'components/WeekList'
// import { MonthList } from 'components/MonthList'
import { FC, Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Loader } from 'components/common'

const CalendarView: FC = () => {
  const [view, setView] = useState<'weeks' | 'months'>('weeks')

  return (
    <>
      <CalendarControlPanel setView={setView} />

      {/* {view === 'months' ? <MonthList /> : <WeekList />} */}

      <Suspense fallback={<Loader className="large centered" />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default CalendarView
