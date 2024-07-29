import { CalendarControlPanel } from 'components/CalendarControlPanel'
import { DaysList } from 'components/DaysList'
import { FC } from 'react'

const CalendarView: FC = () => {
  return (
    <>
      <CalendarControlPanel />

      <DaysList />
    </>
  )
}

export default CalendarView
