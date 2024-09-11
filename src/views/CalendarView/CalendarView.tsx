import { CalendarControlPanel } from 'components/CalendarControlPanel'
import { FC, Suspense } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { MainLoader } from 'components/common'
import { useGetWeekInfoQuery } from 'store/weeksApi'
import { IWeeksResponse } from 'types'

const CalendarView: FC = () => {
  const [searchParams] = useSearchParams()
  const date = searchParams.get('date')
  const { data } = useGetWeekInfoQuery({ date })

  return (
    <>
      <CalendarControlPanel weekData={data as IWeeksResponse} />

      <Suspense fallback={<MainLoader isFetching={true} />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default CalendarView
