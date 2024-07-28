import { CalendarControlPanel } from 'components/CalendarControlPanel'
import { WeeksPanel } from 'components/WeeksPanel'
import { FC } from 'react'

const CalendarView: FC = () => {
  return (
    <>
      <CalendarControlPanel />
      <WeeksPanel />
      <div>Days Panel</div>
    </>
  )
}

export default CalendarView
