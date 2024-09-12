import { FC } from 'react'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './CalendarControlPanel.styled'
import { useIsMobile } from 'hooks'
import { global } from 'styles'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getCurrentDate, getCurrentMonth, getCurrentYear } from 'helpers'
import { monthsNamesList } from 'constants'
import * as path from 'routsConfig'
import { IWeeksResponse } from 'types'

interface CalendarControlPanelProps {
  weekData: IWeeksResponse
}

export const CalendarControlPanel: FC<CalendarControlPanelProps> = ({
  weekData,
}) => {
  const isMobile = useIsMobile(global.breakpoint.maxMobile)
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const month = parseInt(
    searchParams.get('month') || getCurrentMonth().toString()
  )
  const year = parseInt(searchParams.get('year') || getCurrentYear().toString())
  const isMonthsPage = location.pathname === path.months
  const date = searchParams.get('date') || new Date().toISOString().slice(0, 10)

  // const date = useMemo(() => {
  //   return searchParams.get('date') || new Date().toISOString().slice(0, 10)
  // }, [searchParams])

  const handlePrevWeek = () => {
    const prevDate = new Date(date)
    prevDate.setDate(prevDate.getDate() - 7)
    setSearchParams({
      date: prevDate.toISOString().slice(0, 10),
    })
  }

  const handleNextWeek = () => {
    const nextDate = new Date(date)
    nextDate.setDate(nextDate.getDate() + 7)
    setSearchParams({
      date: nextDate.toISOString().slice(0, 10),
    })
  }

  const handlePrevMonth = () => {
    const prevMonth = month === 1 ? 12 : month - 1
    const prevYear = month === 1 ? year - 1 : year
    setSearchParams({
      month: prevMonth.toString(),
      year: prevYear.toString(),
    })
  }

  const handleNextMonth = () => {
    const nextMonth = month === 12 ? 1 : month + 1
    const nextYear = month === 12 ? year + 1 : year
    setSearchParams({
      month: nextMonth.toString(),
      year: nextYear.toString(),
    })
  }

  const isPrevWeekActive = new Date(date) < new Date(getCurrentDate())
  const isNextWeekActive = new Date(date) > new Date(getCurrentDate())
  const isPrevMonthActive =
    year < getCurrentYear() ||
    (year === getCurrentYear() && month < getCurrentMonth())
  const isNextMonthActive =
    year > getCurrentYear() ||
    (year === getCurrentYear() && month > getCurrentMonth())

  return (
    <SC.CalendarControlPanel>
      <SC.ControlOutWrapper>
        <SC.CurrentPeriod className={isMonthsPage ? 'month-page' : ''}>
          {isMonthsPage ? (
            <p>
              {monthsNamesList[month - 1]} {year}
            </p>
          ) : (
            <>
              <p>Week {weekData?.weekPerYear}</p>
              <p>{new Date(date).getFullYear()}</p>
            </>
          )}
        </SC.CurrentPeriod>

        {!isMobile && (
          <SC.ControlWrapper>
            <SC.ControlLink to={'months'}>Month</SC.ControlLink>

            <SC.ControlLink to={'weeks'}>Week</SC.ControlLink>
          </SC.ControlWrapper>
        )}

        <SC.ArrowWrapper>
          <SC.ArrowButton
            className={`prev ${
              isMonthsPage && isPrevMonthActive ? 'active' : ''
            } ${!isMonthsPage && isPrevWeekActive ? 'active' : ''}`}
            type="button"
            onClick={isMonthsPage ? handlePrevMonth : handlePrevWeek}
          >
            <SC.ArrowIcon className="left">
              <use href={`${sprite}#arrow`} />
            </SC.ArrowIcon>
          </SC.ArrowButton>

          <SC.ArrowButton
            className={`next ${
              isMonthsPage && isNextMonthActive ? 'active' : ''
            } ${!isMonthsPage && isNextWeekActive ? 'active' : ''}`}
            type="button"
            onClick={isMonthsPage ? handleNextMonth : handleNextWeek}
          >
            <SC.ArrowIcon className="right">
              <use href={`${sprite}#arrow`} />
            </SC.ArrowIcon>
          </SC.ArrowButton>
        </SC.ArrowWrapper>
      </SC.ControlOutWrapper>

      {isMobile && (
        <SC.ControlWrapper>
          <SC.ControlLink to={'months'}>Month</SC.ControlLink>

          <SC.ControlLink to={'weeks'}>Week</SC.ControlLink>
        </SC.ControlWrapper>
      )}
    </SC.CalendarControlPanel>
  )
}
