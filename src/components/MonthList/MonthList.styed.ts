import styled from 'styled-components'
import { global } from 'styles'

export const MonthList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  border: ${({ theme }) => theme.border};
  border-radius: 0.5rem;

  padding: 1rem;
`

export const DayItem = styled.li`
  display: flex;
  justify-content: center;

  /* background-color: tomato; */

  width: calc((100% - 4rem) / 5);

  @media (min-width: ${global.breakpoint.mobile}) {
    width: calc((100% - 6rem) / 7);
  }
`
