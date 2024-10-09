import { css } from 'styled-components'

export const btnCommonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.global.spacing(2)};

  padding: ${({ theme }) => theme.global.spacing(2)};
`

export const primaryBtn = css`
  ${btnCommonStyles}

  padding: ${({ theme }) => theme.global.spacing(4)};

  color: ${({ theme }) => theme.btnTextColor};
  font-weight: ${({ theme }) => theme.global.text.fontWeight.sb};

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.btnBgColor};

  transition: background-color ${({ theme }) => theme.transitionDuration},
    color ${({ theme }) => theme.transitionDuration};

  &:hover,
  &:focus,
  &:active,
  &.active {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
    color: ${({ theme }) => theme.btnHoverTextColor};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.btnHoverBgColor};
    color: ${({ theme }) => theme.btnDisabledTextColor};
  }
`

export const secondaryBtn = css`
  ${primaryBtn}

  padding: ${({ theme }) => theme.global.spacing(3)};

  background-color: transparent;
  border: ${({ theme }) => theme.border};
`
