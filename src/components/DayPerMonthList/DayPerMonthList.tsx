import { FC } from 'react'
import * as SC from './DayPerMonthList.styled'
import { useIsMobile } from 'hooks'
import { global } from 'styles'
import { IMonthsDay } from 'types'

export const DayPerMonthList: FC<IMonthsDay> = ({ day }) => {
  const isDesktop = useIsMobile(global.breakpoint.desktop)
  return (
    <SC.DayContent>
      <SC.Date>{day}</SC.Date>
      {/* <p>{`${month}.${year}`}</p> */}
      {!isDesktop && <div>Info about day</div>}
    </SC.DayContent>
  )
}
