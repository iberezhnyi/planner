import styled from 'styled-components'

export const MobileMenuButtonWrapper = styled.div`
  display: flex;
  overflow: hidden;
  z-index: 2;
`

export const MobileMenuButton = styled.button<{ $mobileMenu: boolean }>`
  position: relative;
  left: 0;

  width: 2.1875rem;
  height: 1.625rem;
  padding: 0;

  background: none;
  border: none;

  &::before,
  &::after,
  & span,
  & span::before {
    content: '';
    position: absolute;
    display: block;

    width: 100%;
    height: 0.1875rem;

    background-color: ${({ theme }) => theme.global.text.color.white};
    border-radius: 0.3125rem;

    transition: all 200ms linear;
    will-change: opacity, top, bottom, transform;

    /* transition: opacity 1s linear, transform 1s linear;
    will-change: opacity, transform; */
  }

  &::before {
    top: ${(props) => (props.$mobileMenu ? '44%' : '1%')};
    transform: ${(props) => (props.$mobileMenu ? 'rotate(45deg)' : '')};
  }

  &::after {
    bottom: ${(props) => (props.$mobileMenu ? '44%' : '1%')};
    transform: ${(props) => (props.$mobileMenu ? 'rotate(-45deg)' : '')};
  }

  & span {
    top: 30%;
  }

  & span::before {
    top: 256%;
  }

  & span,
  & span::before {
    opacity: ${(props) => (props.$mobileMenu ? '0' : '1')};
    transform: ${(props) => (props.$mobileMenu ? 'translateX(100%)' : '')};
  }
`
