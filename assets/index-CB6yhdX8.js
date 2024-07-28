import{y as d,p as r,j as e}from"./index-BDaZ9jbU.js";import{s as n}from"./Button.styled-_CX5umou.js";import{B as o}from"./Button-ma8DkesL.js";const i=d`
  background-color: transparent;
  border: 1px solid rgba(220, 227, 229, 0.5);
`,u=d`
  width: 1rem;
  height: 1rem;
  fill: ${({theme:t})=>t.textColor};
  stroke: ${({theme:t})=>t.textColor};
`,x=r.div`
  display: flex;
`,h=r(o)`
  text-transform: uppercase;
  font-size: ${({theme:t})=>t.global.text.fontSize.m};
  font-weight: ${({theme:t})=>t.global.text.fontWeight.b};
`,s=r(o)`
  ${i}

  border-top-right-radius: ${({$prev:t})=>t?"0":""};
  border-bottom-right-radius: ${({$prev:t})=>t?"0":""};

  border-top-left-radius: ${({$next:t})=>t?"0":""};
  border-bottom-left-radius: ${({$next:t})=>t?"0":""};
`,a=r.svg`
  ${u}

  transform: ${({$left:t,$right:c})=>t?"rotate(90deg)":c?"rotate(-90deg)":"none"};
`,l=r(o)`
  ${i}
`,p=()=>e.jsxs(x,{children:[e.jsx(h,{type:"button",children:"28 липня 2024"}),e.jsx(s,{type:"button",$prev:!0,children:e.jsx(a,{$left:!0,children:e.jsx("use",{href:`${n}#arrow-down`})})}),e.jsx(s,{type:"button",$next:!0,children:e.jsx(a,{$right:!0,children:e.jsx("use",{href:`${n}#arrow-down`})})}),e.jsx(l,{type:"button",children:"Місяць"}),e.jsx(l,{type:"button",children:"Тиждень"})]}),$=r.div``,m=()=>e.jsx($,{children:"WeeksPanel"}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx(m,{}),e.jsx("div",{children:"Days Panel"})]}),C=b;export{C as default};
//# sourceMappingURL=index-CB6yhdX8.js.map
