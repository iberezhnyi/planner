import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { global, secondaryBtn } from 'styles'

const arrowIconCommonStyles = css`
  width: 1rem;
  height: 1rem;
  fill: ${({ theme }) => theme.textColor};
  stroke: ${({ theme }) => theme.textColor};
`

export const CalendarControlPanel = styled.div`
  margin-bottom: ${({ theme }) => theme.global.spacing(4)};
`

export const CurrentPeriod = styled.div`
  ${secondaryBtn}

  min-width: 11rem;

  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    background-color: inherit;
    color: ${({ theme }) => theme.btnTextColor};
  }
`

export const ArrowButton = styled.button`
  ${secondaryBtn}

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

  fill: ${({ theme }) => theme.btnTextColor};
  stroke: ${({ theme }) => theme.btnTextColor};

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

export const ControlLink = styled(NavLink)`
  ${secondaryBtn}

  /* &:active {
  } */

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.global.spacing(6)};
  }
`
