import { css } from 'styled-components'

export const btnCommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.global.spacing(2)};

  padding: ${({ theme }) => theme.global.spacing(2)};
`

export const section = css`
  padding-top: ${({ theme }) => theme.global.spacing(2)};
  padding-bottom: ${({ theme }) => theme.global.spacing(2)};
`

export const container = css`
  padding-left: ${({ theme }) => theme.global.spacing(3)};
  padding-right: ${({ theme }) => theme.global.spacing(3)};
  margin-left: auto;
  margin-right: auto;
`

export const siteLink = css`
  color: ${({ theme }) => theme.linkColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.linkActiveColor};
  }
`
