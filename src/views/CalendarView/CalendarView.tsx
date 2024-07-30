import { CalendarControlPanel } from 'components/CalendarControlPanel'
import { WeekList } from 'components/WeekList'
import { MonthList } from 'components/MonthList'
import { FC, useState } from 'react'

const CalendarView: FC = () => {
  const [view, setView] = useState<'week' | 'month'>('week')

  return (
    <>
      <CalendarControlPanel setView={setView} />

      {view === 'month' ? <MonthList /> : <WeekList />}
    </>
  )
}

export default CalendarView
