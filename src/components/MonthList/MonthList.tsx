import { FC } from 'react'
import * as SC from './MonthList.styed'
import { DayPerMonthList } from 'components/DayPerMonthList'
import { useGetMonthsInfoQuery } from 'store/monthsApi'

import { useSearchParams } from 'react-router-dom'
import { MainLoader } from 'components/common'

const MonthList: FC = () => {
  const [searchParams] = useSearchParams()
  const month = parseInt(searchParams.get('month') as string)
  const year = parseInt(searchParams.get('year') as string)
  const { data, isFetching } = useGetMonthsInfoQuery({ month, year })

  return (
    <SC.MonthList>
      {isFetching && <MainLoader />}

      {data?.monthsDays.map((day) => (
        <SC.DayItem key={day.id}>
          <DayPerMonthList {...day} />
        </SC.DayItem>
      ))}
    </SC.MonthList>
  )
}

export default MonthList
