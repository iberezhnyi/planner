import { Button } from 'components/buttons'
import styled, { css } from 'styled-components'

const calendarBtnCommonStyles = css`
  background-color: transparent;
  border: 1px solid rgba(220, 227, 229, 0.5);
`

const arrowIconCommonStyles = css`
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.textColor};
  stroke: ${({ theme }) => theme.textColor};
`

export const CalendarControlPanel = styled.div`
  display: flex;
`

export const CurrentWeekButton = styled(Button)`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.global.text.fontSize.m};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.b};
`

export const ArrowButton = styled(Button)<{ $prev?: boolean; $next?: boolean }>`
  ${calendarBtnCommonStyles}

  border-top-right-radius: ${({ $prev }) => ($prev ? '0' : '')};
  border-bottom-right-radius: ${({ $prev }) => ($prev ? '0' : '')};

  border-top-left-radius: ${({ $next }) => ($next ? '0' : '')};
  border-bottom-left-radius: ${({ $next }) => ($next ? '0' : '')};
`

export const ArrowIcon = styled.svg<{ $left?: boolean; $right?: boolean }>`
  ${arrowIconCommonStyles}

  transform: ${({ $left, $right }) =>
    $left ? 'rotate(90deg)' : $right ? 'rotate(-90deg)' : 'none'};
`

export const ControlButton = styled(Button)`
  ${calendarBtnCommonStyles}
`
