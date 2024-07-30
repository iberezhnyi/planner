import { FC } from 'react'
import * as SC from './DayPerMonthList.styled'
import { useIsMobile } from 'hooks'
import { global } from 'styles'

interface DayPerMonthListProps {
  day: number
}

export const DayPerMonthList: FC<DayPerMonthListProps> = ({ day }) => {
  const isDesktop = useIsMobile(global.breakpoint.desktop)
  return (
    <SC.DayContent>
      <SC.Date>{day}</SC.Date>
      {!isDesktop && <div>Info about day</div>}
    </SC.DayContent>
  )
}
