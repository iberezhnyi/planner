import { FC } from 'react'
import * as SC from './MonthList.styed'
import { DayPerMonthList } from 'components/DayPerMonthList'

// const days = Array.from({ length: 31 }, (_, i) => i + 1)
const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
]

const MonthList: FC = () => {
  return (
    <SC.MonthList>
      {days.map((day) => (
        <SC.DayItem key={day}>
          <DayPerMonthList day={day} />
        </SC.DayItem>
      ))}
    </SC.MonthList>
  )
}

export default MonthList
