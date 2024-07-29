import styled from 'styled-components'
import { global } from 'styles'

export const DaysList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.global.spacing(6)};
`

export const DayItem = styled.li`
  /* display: flex;
  flex-direction: column; */

  width: 100%;
  padding: ${({ theme }) => theme.global.spacing(4)};

  border: ${({ theme }) => theme.border};
  border-radius: 0.5rem;

  @media (min-width: 960px) {
    width: calc((100% - 1.5rem) / 2);
  }

  @media (min-width: ${global.breakpoint.desktop}) {
    width: calc((100% - 3rem) / 3);
  }
`
