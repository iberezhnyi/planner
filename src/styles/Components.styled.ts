import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const btnCommonStyles = css`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.global.spacing(2)};

  padding: ${({ theme }) => theme.global.spacing(2)};

  color: ${({ theme }) => theme.linkColor};

  fill: transparent;
  stroke: ${({ theme }) => theme.linkColor};
`

export const Section = styled.div`
  padding: ${({ theme }) => theme.global.spacing(2, 0)};
`

export const Container = styled.div`
  padding: ${({ theme }) => theme.global.spacing(0, 3)};
  margin-left: auto;
  margin-right: auto;
`

export const ButtonAuth = styled.button`
  ${btnCommonStyles}
`

export const LinkAuth = styled(Link)`
  ${btnCommonStyles}
`
