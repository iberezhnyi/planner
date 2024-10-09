import styled from 'styled-components'
import { global } from 'styles'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${global.breakpoint.desktop}) {
    margin-top: ${({ theme }) => theme.global.spacing(30)};
  }
`

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.global.spacing(6)};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.b};

  font-size: ${({ theme }) => theme.global.text.fontSize.b4xl};
`
