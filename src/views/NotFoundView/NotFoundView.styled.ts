import styled from 'styled-components'
import { container, section } from 'styles'

export const Section = styled.div`
  ${section}

  margin-left: auto;
  margin-right: auto;

  padding-top: 30%;
`
export const Container = styled.div`
  ${container}

  text-align: center;
  font-size: ${({ theme }) => theme.global.text.fontSize.xl};
`
