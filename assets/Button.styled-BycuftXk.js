import{p as t,m as e,L as n,N as a}from"./index-Dh3gHKeU.js";const i=t.div`
  display: flex;
  overflow: hidden;
`,s=t.button`
  position: relative;
  left: 0;
  z-index: 2;

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
`,c="/mv/assets/sprite-By30VI1c.svg",r=e`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({theme:o})=>o.global.spacing(2)};

  padding: ${({theme:o})=>o.global.spacing(2)};
`,b=t.div`
  padding: ${({theme:o})=>o.global.spacing(2,0)};
`,g=t.div`
  padding: ${({theme:o})=>o.global.spacing(0,3)};
  margin-left: auto;
  margin-right: auto;
`,$=t.button`
  ${r}

  position: absolute;
  top: 2%;
  right: 5%;
`,d=t.svg`
  width: 1.5rem;
  height: 1.5rem;

  fill: ${({theme:o})=>o.global.text.color.white};
`,p=t.button`
  ${r}

  padding: ${({theme:o})=>o.global.spacing(4)};

  color: ${({theme:o})=>o.btnTextColor};
  font-weight: ${({theme:o})=>o.global.text.fontWeight.sb};

  border-radius: 1rem;
  background-color: ${({theme:o})=>o.btnBgColor};

  &:hover {
    background-color: ${({theme:o})=>o.btnHoverBgColor};
    color: ${({theme:o})=>o.btnHoverTextColor};
  }

  &:active {
    background-color: ${({theme:o})=>o.btnHoverBgColor};
    color: ${({theme:o})=>o.btnHoverTextColor};
  }
`,u=t(n)`
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
`,m=t(a)`
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
`;export{p as B,g as C,i as M,b as S,$ as T,s as a,d as b,r as c,u as d,m as e,c as s};
//# sourceMappingURL=Button.styled-BycuftXk.js.map
