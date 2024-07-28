import { css } from 'styled-components'
import { global } from './global'

export const btnCommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.global.spacing(2)};

  padding: ${({ theme }) => theme.global.spacing(2)};
`

// export const globalContainer = css`
//   // @media (min-width: ${global.breakpoint.desktop}) {
//   //   width: ${({ theme }) => theme.global.breakpoint.desktop};

//   //   margin-left: auto;
//   //   margin-right: auto;
//   // }
// `

export const section = css`
  padding-top: ${({ theme }) => theme.global.spacing(6)};
  padding-bottom: ${({ theme }) => theme.global.spacing(6)};

  @media (min-width: ${global.breakpoint.tablet}) {
    padding-top: ${({ theme }) => theme.global.spacing(8)};
    padding-bottom: ${({ theme }) => theme.global.spacing(8)};
  }

  @media (min-width: ${global.breakpoint.desktop}) {
    padding-top: ${({ theme }) => theme.global.spacing(12)};
    padding-bottom: ${({ theme }) => theme.global.spacing(12)};
  }
`

export const container = css`
  padding-left: ${({ theme }) => theme.global.spacing(4)};
  padding-right: ${({ theme }) => theme.global.spacing(4)};

  @media (min-width: ${global.breakpoint.tablet}) {
    padding-left: ${({ theme }) => theme.global.spacing(8)};
    padding-right: ${({ theme }) => theme.global.spacing(8)};
  }

  @media (min-width: ${global.breakpoint.desktop}) {
    padding-left: ${({ theme }) => theme.global.spacing(12)};
    padding-right: ${({ theme }) => theme.global.spacing(12)};
  }
`

export const siteLink = css`
  color: ${({ theme }) => theme.linkColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.linkActiveColor};
  }
`
