import{p as t,f as r,g as e,q as n,N as l}from"./index-BDaZ9jbU.js";const i=t.div`
  display: flex;
  overflow: hidden;
  z-index: 2;
`,b=t.button`
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

    background-color: ${({theme:o})=>o.global.text.color.white};
    border-radius: 0.3125rem;

    transition: all 200ms linear;
    will-change: opacity, top, bottom, transform;

    /* transition: opacity 1s linear, transform 1s linear;
    will-change: opacity, transform; */
  }

  &::before {
    top: ${o=>o.$mobileMenu?"44%":"1%"};
    transform: ${o=>o.$mobileMenu?"rotate(45deg)":""};
  }

  &::after {
    bottom: ${o=>o.$mobileMenu?"44%":"1%"};
    transform: ${o=>o.$mobileMenu?"rotate(-45deg)":""};
  }

  & span {
    top: 30%;
  }

  & span::before {
    top: 256%;
  }

  & span,
  & span::before {
    opacity: ${o=>o.$mobileMenu?"0":"1"};
    transform: ${o=>o.$mobileMenu?"translateX(100%)":""};
  }
`,s="/mv/assets/sprite-By30VI1c.svg",c=t.button`
  ${r}

  @media (max-width: ${e.breakpoint.maxTablet}) {
    position: absolute;
    top: 2.5%;
    right: 5%;
  }
`,g=t.svg`
  width: 1.5rem;
  height: 1.5rem;

  fill: ${({theme:o})=>o.global.text.color.white};

  @media (min-width: ${e.breakpoint.tablet}) {
    fill: ${({theme:o})=>o.textColor};
  }
`,$=t.button`
  ${r}

  padding: ${({theme:o})=>o.global.spacing(4)};

  color: ${({theme:o})=>o.btnTextColor};
  font-weight: ${({theme:o})=>o.global.text.fontWeight.sb};

  border-radius: 0.5rem;
  background-color: ${({theme:o})=>o.btnBgColor};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({theme:o})=>o.btnHoverBgColor};
    color: ${({theme:o})=>o.btnHoverTextColor};
  }

  &:disabled {
    background-color: ${({theme:o})=>o.btnHoverBgColor};
    color: ${({theme:o})=>o.btnDisabledTextColor};
  }
`,d=t(n)`
  /* ${r}

  color: ${({theme:o})=>o.btnTextColor};

  background-color: ${({theme:o})=>o.btnBgColor};

  &:hover {
    background-color: ${({theme:o})=>o.btnHoverBgColor};
    color: ${({theme:o})=>o.btnHoverTextColor};
  }

  &:active {
    background-color: ${({theme:o})=>o.btnHoverBgColor};
    color: ${({theme:o})=>o.btnHoverTextColor};
  } */
`,m=t(l)`
  /* ${r}

  color: ${({theme:o})=>o.btnTextColor};

  background-color: ${({theme:o})=>o.btnBgColor};

  &:hover {
    background-color: ${({theme:o})=>o.btnHoverBgColor};
    color: ${({theme:o})=>o.btnHoverTextColor};
  }

  &:active {
    background-color: ${({theme:o})=>o.btnHoverBgColor};
    color: ${({theme:o})=>o.btnHoverTextColor};
  } */
`;export{$ as B,i as M,c as T,b as a,g as b,d as c,m as d,s};
//# sourceMappingURL=Button.styled-_CX5umou.js.map
