import styled from "styled-components"

export const MobileMenuButton = styled.button`
  position: relative;
  left: 0;
  width: 35px;
  height: 26px;
  background: none;
  border: none;
  z-index: 1000;

  /* &:hover {
    
  } */

  &::before,
  &::after,
  & span,
  & span::before {
    content: "";

    position: absolute;

    display: block;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  & span {
    top: 8px;
    /* top: 50%; */
    /* transform: translateY(-50%); */
  }

  & span::before {
    top: 8px;
  }

  &:hover::before {
    top: 14px;
    transform: translateY(-50%) rotate(45deg);
  }

  &:hover::after {
    transform: rotate(-45deg);
    bottom: 10px;
  }

  &:hover span {
    opacity: 0;
  }

  &:hover span::before {
    opacity: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
