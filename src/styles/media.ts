import { css, Interpolation } from 'styled-components'

export const media = {
  mobile: (
    strings: TemplateStringsArray,
    ...args: Interpolation<object>[]
  ) => css`
    @media (min-width: ${({ theme }) => theme.global.breakpoint.mobile}) {
      ${css(strings, ...args)};
    }
  `,

  tablet: (
    strings: TemplateStringsArray,
    ...args: Interpolation<object>[]
  ) => css`
    @media (min-width: ${({ theme }) => theme.global.breakpoint.tablet}) {
      ${css(strings, ...args)};
    }
  `,

  desktop: (
    strings: TemplateStringsArray,
    ...args: Interpolation<object>[]
  ) => css`
    @media (min-width: ${({ theme }) => theme.global.breakpoint.desktop}) {
      ${css(strings, ...args)};
    }
  `,

  maxTablet: (
    strings: TemplateStringsArray,
    ...args: Interpolation<object>[]
  ) => css`
    @media (max-width: 767px) {
      ${css(strings, ...args)};
    }
  `,
}
