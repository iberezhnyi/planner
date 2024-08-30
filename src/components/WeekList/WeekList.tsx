import { FC } from 'react'
import * as SC from './WeekList.styled'
import { DayPerWeekList } from 'components/DayPerWeekList'
import { useGetWeekInfoQuery } from 'store'
// import { Loader } from 'components/common'

const WeekList: FC = () => {
  const { data, isFetching } = useGetWeekInfoQuery()
  console.log('data :>> ', data?.weekDays)

  console.log('isFetching :>> ', isFetching)

  return (
    <SC.WeekList>
      {data?.weekDays?.map((day) => (
        <SC.DayItem key={day.id}>
          <DayPerWeekList {...day} />
        </SC.DayItem>
      ))}
    </SC.WeekList>

    // <>
    //   {isFetching ? (
    //     <Loader className="large centered" />
    //   ) : (
    //     <SC.WeekList>
    //       {data?.weekDays?.map((day) => (
    //         <SC.DayItem key={day.id}>
    //           <DayPerWeekList {...day} />
    //         </SC.DayItem>
    //       ))}
    //     </SC.WeekList>
    //   )}
    // </>
  )
}

export default WeekList
