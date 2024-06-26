import styled from "styled-components"

export const Backdrop = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 5;
  width: 100%;
  height: 100%;
  /* background-color: rgba(227, 243, 255, 0.8); */
  background-color: palegoldenrod;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition-property: opacity, visibility;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`
