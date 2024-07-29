import{y as q,p as s,g as r,j as e,f as j,r as y}from"./index-B97v3SYb.js";import{s as n}from"./Button.styled-D9nJSM1N.js";import{B as l}from"./Button-Le8ZB0j_.js";import{u as $}from"./useIsMobile-D8DOO9bD.js";const m=q`
  background-color: transparent;
  border: ${({theme:i})=>i.border};

  padding: ${({theme:i})=>i.global.spacing(3)};
`,C=q`
  width: 1rem;
  height: 1rem;
  fill: ${({theme:i})=>i.textColor};
  stroke: ${({theme:i})=>i.textColor};
`,w=s.div`
  margin-bottom: ${({theme:i})=>i.global.spacing(4)};
`,k=s(l)`
  ${m}

  text-transform: uppercase;
`,d=s(l)`
  ${m}

  &.prev {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.next {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`,c=s.svg`
  ${C}

  &.left {
    transform: rotate(90deg);
  }

  &.right {
    transform: rotate(-90deg);
  }
`,p=s.div`
  display: flex;
  justify-content: center;
`,I=s.div`
  display: flex;
`,T=s.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: ${({theme:i})=>i.global.spacing(4)};

  @media (min-width: ${r.breakpoint.mobile}) {
    margin-bottom: 0;
  }
`,u=s(l)`
  ${m}

  &:not(:last-child) {
    margin-right: ${({theme:i})=>i.global.spacing(6)};
  }
`,N=()=>{const i=$(r.breakpoint.maxMobile);return e.jsxs(w,{children:[e.jsxs(T,{children:[e.jsx(k,{type:"button",children:"29 липня"}),!i&&e.jsxs(p,{children:[e.jsx(u,{type:"button",children:"Місяць"}),e.jsx(u,{type:"button",children:"Тиждень"})]}),e.jsxs(I,{children:[e.jsx(d,{className:"prev",type:"button",children:e.jsx(c,{className:"left",children:e.jsx("use",{href:`${n}#arrow`})})}),e.jsx(d,{className:"next",type:"button",children:e.jsx(c,{className:"right",children:e.jsx("use",{href:`${n}#arrow`})})})]})]}),i&&e.jsxs(p,{children:[e.jsx(u,{type:"button",children:"Місяць"}),e.jsx(u,{type:"button",children:"Тиждень"})]})]})},A=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:i})=>i.global.spacing(6)};
`,t=s.li`
  /* display: flex;
  flex-direction: column; */

  width: 100%;
  padding: ${({theme:i})=>i.global.spacing(4)};

  border: ${({theme:i})=>i.border};
  border-radius: 0.5rem;

  @media (min-width: 960px) {
    width: calc((100% - 1.5rem) / 2);
  }

  @media (min-width: ${r.breakpoint.desktop}) {
    width: calc((100% - 3rem) / 3);
  }
`,L=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,B=s.p`
  font-weight: ${({theme:i})=>i.global.text.fontWeight.b};
`,D=s.p`
  font-weight: ${({theme:i})=>i.global.text.fontWeight.b};
`,R=s.input`
  margin-right: 10px;
`,E=s.label`
  margin-bottom: 20px;
`,F=s.textarea`
  width: 100%;
  min-height: 150px;
  border: 1px solid #000;
  margin-bottom: 20px;
`,O=s.div`
  text-align: justify;
`,M=s.div`
  display: flex;
  justify-content: center;
`,W=s.button`
  ${j}

  color: ${({theme:i})=>i.textColor};

  &:hover,
  &:focus,
  &:active,
  &.open {
    color: ${({theme:i})=>i.linkActiveColor};
  }
`,S=s.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);

    fill: ${({theme:i})=>i.linkActiveColor};
    stroke: ${({theme:i})=>i.linkActiveColor};
  }
`,a=({date:i,day:b,task:x,text:g})=>{const[o,h]=y.useState(!1),f=()=>{h(v=>!v)};return e.jsxs(e.Fragment,{children:[e.jsxs(L,{children:[e.jsx(B,{children:b}),e.jsx(D,{children:i})]}),e.jsxs(E,{children:[e.jsx(R,{type:"checkbox"}),x]}),e.jsx(M,{children:e.jsxs(W,{onClick:f,className:o?"open":"",children:["----------",e.jsx(S,{className:o?"open":"",children:e.jsx("use",{href:`${n}#arrow`})}),"----------"]})}),o&&e.jsx(F,{}),e.jsx(O,{children:g})]})},V=()=>e.jsxs(A,{children:[e.jsx(t,{children:e.jsx(a,{day:"Понеділок",date:"29.07",task:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`})}),e.jsx(t,{children:e.jsx(a,{day:"Вівторок",date:"30.07",task:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates!`,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla?"})}),e.jsx(t,{children:e.jsx(a,{day:"Середа",date:"31.07",task:"Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!",text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`})}),e.jsx(t,{children:e.jsx(a,{day:"Четвер",date:"01.08",task:`Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!`})}),e.jsx(t,{children:e.jsx(a,{day:"П'ятниця",date:"02.08",task:"Recusandae eligendi maiores ducimus!"})}),e.jsx(t,{children:e.jsx(a,{day:"Субота",date:"03.08",task:"Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!",text:`Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`})}),e.jsx(t,{children:e.jsx(a,{day:"Неділя",date:"04.08",task:`Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`,text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`})})]}),P=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{}),e.jsx(V,{})]}),K=P;export{K as default};
//# sourceMappingURL=index-DPURegpW.js.map
