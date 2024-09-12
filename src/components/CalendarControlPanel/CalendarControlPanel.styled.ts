import { NavLink } from 'react-router-dom'
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
  /* ${secondaryBtn} */

  min-width: 3.875rem;

  &.month-page {
    min-width: 7.25rem;
  }

  /* min-width: 11rem; */
  /* min-width: 7.25rem; */

  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.global.spacing(1)};

  margin-left: ${({ theme }) => theme.global.spacing(4)};

  color: ${({ theme }) => theme.textColor};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.sb};

  /* text-transform: uppercase; */
  /* border: none; */
  /* background-color: ${({ theme }) => theme.primaryBgColor}; */

  /* &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.primaryBgColor};
    background-color: inherit;
    color: ${({ theme }) => theme.textColor};
  } */
`

export const ArrowButton = styled.button`
  ${secondaryBtn}

  background-color: ${({ theme }) => theme.primaryBgColor};

  &.prev {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.next {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    border-left: 0.03125rem;
  }

  &:hover svg,
  &:focus svg,
  &:active svg,
  &.active svg {
    fill: ${({ theme }) => theme.btnHoverTextColor};
    stroke: ${({ theme }) => theme.btnHoverTextColor};
  }
`

export const ArrowIcon = styled.svg`
  ${arrowIconCommonStyles}

  /* fill: ${({ theme }) => theme.btnTextColor};
  stroke: ${({ theme }) => theme.btnTextColor}; */

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

  /* position: absolute;
  top: 0;
  left: 312px; */
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
    /* position: relative; */
  }
`

export const ControlLink = styled(NavLink)`
  ${secondaryBtn}

  color: ${({ theme }) => theme.btnSecondaryTextColor};

  background-color: ${({ theme }) => theme.primaryBgColor};

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.global.spacing(6)};
  }

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({ theme }) => theme.btnHoverTextColor};
  }
`
