import styled from 'styled-components'
import { Section } from 'styles/Components.styled'

export const AuthSection = styled(Section)`
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  width: 90%;
  padding: ${({ theme }) => theme.global.spacing(10, 6)};

  background-color: ${({ theme }) => theme.primaryBgColor};
  border-radius: 0.5rem;
`

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.global.spacing(2)};
`

export const Text = styled.p`
  margin-bottom: 0;

  text-align: center;
`
