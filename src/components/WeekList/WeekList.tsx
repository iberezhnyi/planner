import { FC } from 'react'
import * as SC from './WeekList.styled'
import { DayPerWeekList } from 'components/DayPerWeekList'
import { useGetWeekInfoQuery } from 'store/weeksApi'
import { useSearchParams } from 'react-router-dom'

const WeekList: FC = () => {
  const [searchParams] = useSearchParams()
  const date = searchParams.get('date')
  const { data } = useGetWeekInfoQuery({ date })

  return (
    <SC.WeekList>
      {data?.weekDays?.map((day) => (
        <SC.DayItem key={day.id}>
          <DayPerWeekList {...day} />
        </SC.DayItem>
      ))}
    </SC.WeekList>
  )
}

export default WeekList
