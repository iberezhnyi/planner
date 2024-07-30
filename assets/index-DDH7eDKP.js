import{z as j,p as t,A as m,g as a,j as e,e as y,r as q}from"./index-CsyOjkQH.js";import{s as l}from"./sprite-lEIqProi.js";import{u as b}from"./useIsMobile-DanOif54.js";const k=j`
  width: 1rem;
  height: 1rem;
  fill: ${({theme:i})=>i.textColor};
  stroke: ${({theme:i})=>i.textColor};
`,$=t.div`
  margin-bottom: ${({theme:i})=>i.global.spacing(4)};
`,w=t.button`
  ${m}

  text-transform: uppercase;
`,d=t.button`
  ${m}

  &.prev {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.next {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`,c=t.svg`
  ${k}

  &.left {
    transform: rotate(90deg);
  }

  &.right {
    transform: rotate(-90deg);
  }
`,p=t.div`
  display: flex;
  justify-content: center;
`,C=t.div`
  display: flex;
`,I=t.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: ${({theme:i})=>i.global.spacing(4)};

  @media (min-width: ${a.breakpoint.mobile}) {
    margin-bottom: 0;
  }
`,n=t.button`
  ${m}

  &:not(:last-child) {
    margin-right: ${({theme:i})=>i.global.spacing(6)};
  }
`,T=({setView:i})=>{const s=b(a.breakpoint.maxMobile);return e.jsxs($,{children:[e.jsxs(I,{children:[e.jsx(w,{type:"button",children:"29 липня"}),!s&&e.jsxs(p,{children:[e.jsx(n,{type:"button",onClick:()=>i("month"),children:"Місяць"}),e.jsx(n,{type:"button",onClick:()=>i("week"),children:"Тиждень"})]}),e.jsxs(C,{children:[e.jsx(d,{className:"prev",type:"button",children:e.jsx(c,{className:"left",children:e.jsx("use",{href:`${l}#arrow`})})}),e.jsx(d,{className:"next",type:"button",children:e.jsx(c,{className:"right",children:e.jsx("use",{href:`${l}#arrow`})})})]})]}),s&&e.jsxs(p,{children:[e.jsx(n,{type:"button",onClick:()=>i("month"),children:"Місяць"}),e.jsx(n,{type:"button",onClick:()=>i("week"),children:"Тиждень"})]})]})},L=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:i})=>i.global.spacing(6)};
`,u=t.li`
  /* display: flex;
  flex-direction: column; */

  width: 100%;
  padding: ${({theme:i})=>i.global.spacing(4)};

  border: ${({theme:i})=>i.border};
  border-radius: 0.5rem;

  @media (min-width: ${a.breakpoint.desktop}) {
    width: calc((100% - 1.5rem) / 2);
  }

  @media (min-width: ${a.breakpoint.largeDesktop}) {
    width: calc((100% - 3rem) / 3);
  }
`,A=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,D=t.p`
  font-weight: ${({theme:i})=>i.global.text.fontWeight.b};
`,N=t.p`
  font-weight: ${({theme:i})=>i.global.text.fontWeight.b};
`,M=t.input`
  margin-right: 10px;
`,W=t.label`
  margin-bottom: 20px;
`,R=t.textarea`
  width: 100%;
  min-height: 150px;
  border: 1px solid #000;
  margin-bottom: 20px;
`,E=t.div`
  text-align: justify;
`,F=t.div`
  display: flex;
  justify-content: center;
`,O=t.button`
  ${y}

  color: ${({theme:i})=>i.textColor};

  &:hover,
  &:focus,
  &:active,
  &.open {
    color: ${({theme:i})=>i.linkActiveColor};
  }
`,B=t.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);

    fill: ${({theme:i})=>i.linkActiveColor};
    stroke: ${({theme:i})=>i.linkActiveColor};
  }
`,o=({date:i,day:s,task:x,text:h})=>{const[r,g]=q.useState(!1),f=()=>{g(v=>!v)};return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(D,{children:s}),e.jsx(N,{children:i})]}),e.jsxs(W,{children:[e.jsx(M,{type:"checkbox"}),x]}),e.jsx(F,{children:e.jsxs(O,{onClick:f,className:r?"open":"",children:["----------",e.jsx(B,{className:r?"open":"",children:e.jsx("use",{href:`${l}#arrow`})}),"----------"]})}),r&&e.jsx(R,{}),e.jsx(E,{children:h})]})},P=()=>e.jsxs(L,{children:[e.jsx(u,{children:e.jsx(o,{day:"Понеділок",date:"29.07",task:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`})}),e.jsx(u,{children:e.jsx(o,{day:"Вівторок",date:"30.07",task:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates!`,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla?"})}),e.jsx(u,{children:e.jsx(o,{day:"Середа",date:"31.07",task:"Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!",text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`})}),e.jsx(u,{children:e.jsx(o,{day:"Четвер",date:"01.08",task:`Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!`})}),e.jsx(u,{children:e.jsx(o,{day:"П'ятниця",date:"02.08",task:"Recusandae eligendi maiores ducimus!"})}),e.jsx(u,{children:e.jsx(o,{day:"Субота",date:"03.08",task:"Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!",text:`Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`})}),e.jsx(u,{children:e.jsx(o,{day:"Неділя",date:"04.08",task:`Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`,text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, harum odio nostrum alias neque pariatur eaque suscipit. Alias accusamus minus nulla? Totam rerum sapiente consequatur, officia quasi esse. Iure, magnam.
      Tempora consequuntur est delectus odit soluta veniam vel quam, modi voluptates! Culpa facere possimus quaerat maiores velit autem quidem suscipit repudiandae soluta. Facere impedit earum, accusamus minima sapiente perferendis dolor!
      Recusandae eligendi maiores ducimus neque omnis debitis veniam dolor impedit molestias, quia sed nostrum, nesciunt voluptatum blanditiis. Neque accusamus impedit recusandae consequuntur distinctio repellendus vitae odit, sunt quas delectus quam!
      Molestias quae laborum atque saepe vero impedit nobis harum blanditiis perspiciatis cumque neque ab asperiores repellendus voluptas voluptatibus deserunt at, aut aliquid eveniet. Ipsam officiis sequi blanditiis, iure consectetur molestiae!
      Illum, repellendus voluptatibus distinctio quam, quod debitis placeat odio magnam quisquam at similique tempora facilis illo. Optio incidunt odit eius illum est minus, molestias quas culpa, pariatur corrupti nobis cumque!`})})]}),S=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  border: ${({theme:i})=>i.border};
  border-radius: 0.5rem;

  padding: 1rem;
`,V=t.li`
  display: flex;
  justify-content: center;

  /* background-color: tomato; */

  width: calc((100% - 4rem) / 5);

  @media (min-width: ${a.breakpoint.mobile}) {
    width: calc((100% - 6rem) / 7);
  }
`,z=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: ${({theme:i})=>i.global.spacing(2)};

  text-align: center;

  border: ${({theme:i})=>i.border};
  border-radius: 50%;

  @media (max-width: ${a.breakpoint.desktop}) {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: ${a.breakpoint.desktop}) {
    border-radius: 0.5rem;
  }
`,H=t.span``,G=({day:i})=>{const s=b(a.breakpoint.desktop);return e.jsxs(z,{children:[e.jsx(H,{children:i}),!s&&e.jsx("div",{children:"Info about day"})]})},J=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],K=()=>e.jsx(S,{children:J.map(i=>e.jsx(V,{children:e.jsx(G,{day:i})},i))}),Q=()=>{const[i,s]=q.useState("week");return e.jsxs(e.Fragment,{children:[e.jsx(T,{setView:s}),i==="month"?e.jsx(K,{}):e.jsx(P,{})]})},Z=Q;export{Z as default};
//# sourceMappingURL=index-DDH7eDKP.js.map
