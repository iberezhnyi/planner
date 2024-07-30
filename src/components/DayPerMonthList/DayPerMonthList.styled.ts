import styled from 'styled-components'
import { global } from 'styles'

export const DayContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.global.spacing(2)};

  text-align: center;

  border: ${({ theme }) => theme.border};
  border-radius: 50%;

  @media (max-width: ${global.breakpoint.desktop}) {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: ${global.breakpoint.desktop}) {
    border-radius: 0.5rem;
  }
`

export const Date = styled.span``
