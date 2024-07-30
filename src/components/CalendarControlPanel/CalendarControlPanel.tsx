import { FC } from 'react'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './CalendarControlPanel.styled'
import { useIsMobile } from 'hooks'
import { global } from 'styles'

interface CalendarControlPanelProps {
  setView: (view: 'week' | 'month') => void
}

export const CalendarControlPanel: FC<CalendarControlPanelProps> = ({
  setView,
}) => {
  const isMobile = useIsMobile(global.breakpoint.maxMobile)

  return (
    <SC.CalendarControlPanel>
      <SC.ControlOutWrapper>
        <SC.CurrentDayButton type="button">29 липня</SC.CurrentDayButton>

        {!isMobile && (
          <SC.ControlWrapper>
            <SC.ControlButton type="button" onClick={() => setView('month')}>
              Місяць
            </SC.ControlButton>
            <SC.ControlButton type="button" onClick={() => setView('week')}>
              Тиждень
            </SC.ControlButton>
          </SC.ControlWrapper>
        )}

        <SC.ArrowWrapper>
          <SC.ArrowButton className="prev" type="button">
            <SC.ArrowIcon className="left">
              <use href={`${sprite}#arrow`} />
            </SC.ArrowIcon>
          </SC.ArrowButton>

          <SC.ArrowButton className="next" type="button">
            <SC.ArrowIcon className="right">
              <use href={`${sprite}#arrow`} />
            </SC.ArrowIcon>
          </SC.ArrowButton>
        </SC.ArrowWrapper>
      </SC.ControlOutWrapper>

      {isMobile && (
        <SC.ControlWrapper>
          <SC.ControlButton type="button" onClick={() => setView('month')}>
            Місяць
          </SC.ControlButton>
          <SC.ControlButton type="button" onClick={() => setView('week')}>
            Тиждень
          </SC.ControlButton>
        </SC.ControlWrapper>
      )}
    </SC.CalendarControlPanel>
  )
}
