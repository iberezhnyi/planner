import { Button } from 'components/buttons'
import styled, { css } from 'styled-components'
import { global } from 'styles'

const calendarBtnCommonStyles = css`
  background-color: transparent;
  border: ${({ theme }) => theme.border};

  padding: ${({ theme }) => theme.global.spacing(3)};
`

const arrowIconCommonStyles = css`
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.textColor};
  stroke: ${({ theme }) => theme.textColor};
`

export const CalendarControlPanel = styled.div`
  margin-bottom: ${({ theme }) => theme.global.spacing(4)};
`

export const CurrentDayButton = styled(Button)`
  ${calendarBtnCommonStyles}

  text-transform: uppercase;
`

export const ArrowButton = styled(Button)`
  ${calendarBtnCommonStyles}

  &.prev {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.next {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

export const ArrowIcon = styled.svg`
  ${arrowIconCommonStyles}

  &.left {
    transform: rotate(90deg);
  }

  &.right {
    transform: rotate(-90deg);
  }
`

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ArrowWrapper = styled.div`
  display: flex;
`

export const ControlOutWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.global.spacing(4)};

  @media (min-width: ${global.breakpoint.mobile}) {
    margin-bottom: 0;
  }
`

export const ControlButton = styled(Button)`
  ${calendarBtnCommonStyles}

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.global.spacing(6)};
  }
`
