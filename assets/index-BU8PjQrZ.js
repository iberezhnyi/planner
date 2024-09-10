import{z as I,p as s,A as u,g as j,N as W,o as O,B as w,C as p,D as i,j as e,E as L,r as T,L as Y,O as B}from"./index-P7y5xxY_.js";import{s as v}from"./sprite-CR3z7qaS.js";import{u as E}from"./useIsMobile-CqgSl5gX.js";import{m as F}from"./routes-CPlSPj5P.js";const b=()=>new Date().toISOString().slice(0,10),H=I`
  width: 1rem;
  height: 1rem;
  fill: ${({theme:t})=>t.textColor};
  stroke: ${({theme:t})=>t.textColor};
`,J=s.div`
  margin-bottom: ${({theme:t})=>t.global.spacing(4)};
`,V=s.div`
  ${u}

  min-width: 11rem;

  color: ${({theme:t})=>t.textColor};

  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    background-color: inherit;
    color: ${({theme:t})=>t.textColor};
  }
`,$=s.button`
  ${u}

  &.prev {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.next {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:hover svg,
  &:focus svg,
  &:active svg,
  &.active svg {
    fill: ${({theme:t})=>t.btnHoverTextColor};
    stroke: ${({theme:t})=>t.btnHoverTextColor};
  }
`,f=s.svg`
  ${H}

  /* fill: ${({theme:t})=>t.btnTextColor};
  stroke: ${({theme:t})=>t.btnTextColor}; */

  &.left {
    transform: rotate(90deg);
  }

  &.right {
    transform: rotate(-90deg);
  }
`,C=s.div`
  display: flex;
  justify-content: center;
`,z=s.div`
  display: flex;
`,G=s.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: ${({theme:t})=>t.global.spacing(4)};

  @media (min-width: ${j.breakpoint.mobile}) {
    margin-bottom: 0;
  }
`,h=s(W)`
  ${u}

  color: ${({theme:t})=>t.btnSecondaryTextColor};

  &:not(:last-child) {
    margin-right: ${({theme:t})=>t.global.spacing(6)};
  }

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:t})=>t.btnHoverTextColor};
  }
`,Q=["January","February","March","April","May","June","July","August","September","October","November","December"],R=({weekData:t})=>{const l=E(j.breakpoint.maxMobile),m=O(),[g,d]=w(),r=parseInt(g.get("month")||p().toString()),n=parseInt(g.get("year")||i().toString()),a=m.pathname===F,c=g.get("date")||new Date().toISOString().slice(0,10),y=()=>{const o=new Date(c);o.setDate(o.getDate()-7),d({date:o.toISOString().slice(0,10)})},S=()=>{const o=new Date(c);o.setDate(o.getDate()+7),d({date:o.toISOString().slice(0,10)})},k=()=>{const o=r===1?12:r-1,x=r===1?n-1:n;d({month:o.toString(),year:x.toString()})},D=()=>{const o=r===12?1:r+1,x=r===12?n+1:n;d({month:o.toString(),year:x.toString()})},M=new Date(c)<new Date(b()),N=new Date(c)>new Date(b()),P=n<i()||n===i()&&r<p(),A=n>i()||n===i()&&r>p();return e.jsxs(J,{children:[e.jsxs(G,{children:[e.jsx(V,{children:a?`${Q[r-1]}-${n}`:`Week-${t==null?void 0:t.weekPerYear} year-${new Date(c).getFullYear()}`}),!l&&e.jsxs(C,{children:[e.jsx(h,{to:"months",children:"Місяць"}),e.jsx(h,{to:"weeks",children:"Тиждень"})]}),e.jsxs(z,{children:[e.jsx($,{className:`prev ${a&&P?"active":""} ${!a&&M?"active":""}`,type:"button",onClick:a?k:y,children:e.jsx(f,{className:"left",children:e.jsx("use",{href:`${v}#arrow`})})}),e.jsx($,{className:`next ${a&&A?"active":""} ${!a&&N?"active":""}`,type:"button",onClick:a?D:S,children:e.jsx(f,{className:"right",children:e.jsx("use",{href:`${v}#arrow`})})})]})]}),l&&e.jsxs(C,{children:[e.jsx(h,{to:"months",children:"Місяць"}),e.jsx(h,{to:"weeks",children:"Тиждень"})]})]})},q=()=>{const[t]=w(),l=t.get("date"),{data:m}=L({date:l});return e.jsxs(e.Fragment,{children:[e.jsx(R,{weekData:m}),e.jsx(T.Suspense,{fallback:e.jsx(Y,{className:"large centered"}),children:e.jsx(B,{})})]})},_=q;export{_ as default};
//# sourceMappingURL=index-BU8PjQrZ.js.map
