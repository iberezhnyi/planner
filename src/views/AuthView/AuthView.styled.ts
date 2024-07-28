import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { global } from 'styles'
import { section, siteLink } from 'styles/common.styled'

export const AuthSection = styled.div`
  /* ${section} */

  display: flex;
  justify-content: center;

  padding-top: ${({ theme }) => theme.global.spacing(8)};
  padding-bottom: ${({ theme }) => theme.global.spacing(8)};

  @media (min-width: ${global.breakpoint.tablet}) {
    padding-top: ${({ theme }) => theme.global.spacing(12)};
  }
`

export const ContentWrapper = styled.div`
  position: relative;

  width: 90%;
  padding: ${({ theme }) => theme.global.spacing(10, 6)};

  background-color: ${({ theme }) => theme.primaryBgColor};
  border-radius: 0.5rem;

  @media (min-width: ${global.breakpoint.tablet}) {
    width: 70%;
  }

  @media (min-width: ${global.breakpoint.desktop}) {
    width: 50%;
  }
`

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.global.spacing(2)};
`

export const Text = styled.p`
  margin-bottom: 0;

  text-align: center;
`
export const AuthLink = styled(Link)`
  ${siteLink}
`

export const ErrorMessage = styled.p`
  position: absolute;
  top: 3%;
  left: 6%;

  color: ${({ theme }) => theme.global.form.warningColor};
  font-size: ${({ theme }) => theme.global.text.fontSize.xs};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.sb};
`
