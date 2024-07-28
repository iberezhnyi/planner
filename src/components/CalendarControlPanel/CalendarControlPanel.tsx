import { FC } from 'react'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './CalendarControlPanel.styled'

export const CalendarControlPanel: FC = () => {
  return (
    <SC.CalendarControlPanel>
      <SC.CurrentWeekButton type="button">28 липня 2024</SC.CurrentWeekButton>

      <SC.ArrowButton type="button" $prev>
        <SC.ArrowIcon $left>
          <use href={`${sprite}#arrow-down`} />
        </SC.ArrowIcon>
      </SC.ArrowButton>

      <SC.ArrowButton type="button" $next>
        <SC.ArrowIcon $right>
          <use href={`${sprite}#arrow-down`} />
        </SC.ArrowIcon>
      </SC.ArrowButton>

      <SC.ControlButton type="button">Місяць</SC.ControlButton>
      <SC.ControlButton type="button">Тиждень</SC.ControlButton>
    </SC.CalendarControlPanel>
  )
}
