import{p as t,f as r,o as e,N as n}from"./index-JSuw0a9j.js";const a=t.div`
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
`,i="/mv/assets/sprite-By30VI1c.svg",s=t.button`
  ${r}

  position: absolute;
  top: 2%;
  right: 5%;
`,c=t.svg`
  width: 1.5rem;
  height: 1.5rem;

  fill: ${({theme:o})=>o.global.text.color.white};
`,g=t.button`
  ${r}

  padding: ${({theme:o})=>o.global.spacing(4)};

  color: ${({theme:o})=>o.btnTextColor};
  font-weight: ${({theme:o})=>o.global.text.fontWeight.sb};

  border-radius: 1rem;
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
`,$=t(e)`
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
`;export{g as B,a as M,s as T,b as a,c as b,$ as c,d,i as s};
//# sourceMappingURL=Button.styled-BvWdbDqo.js.map
