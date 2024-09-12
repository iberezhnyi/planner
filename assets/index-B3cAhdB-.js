import{y as A,p as a,z as u,g as j,N as I,o as O,A as y,B as x,C as c,j as t,D as B,r as T,M as L,O as Y}from"./index-BB4Xbw6T.js";import{s as b}from"./sprite-CR3z7qaS.js";import{u as F}from"./useIsMobile-Gy7FEFoV.js";import{m as H}from"./routes-CPlSPj5P.js";const v=()=>new Date().toISOString().slice(0,10),J=A`
  width: 1rem;
  height: 1rem;
  fill: ${({theme:e})=>e.textColor};
  stroke: ${({theme:e})=>e.textColor};
`,E=a.div`
  margin-bottom: ${({theme:e})=>e.global.spacing(4)};
`,V=a.div`
  /* ${u} */

  min-width: 3.875rem;

  &.month-page {
    min-width: 7.25rem;
  }

  /* min-width: 11rem; */
  /* min-width: 7.25rem; */

  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  gap: ${({theme:e})=>e.global.spacing(1)};

  margin-left: ${({theme:e})=>e.global.spacing(4)};

  color: ${({theme:e})=>e.textColor};
  font-weight: ${({theme:e})=>e.global.text.fontWeight.sb};

  /* text-transform: uppercase; */
  /* border: none; */
  /* background-color: ${({theme:e})=>e.primaryBgColor}; */

  /* &:hover,
  &:focus,
  &:active {
    background-color: ${({theme:e})=>e.primaryBgColor};
    background-color: inherit;
    color: ${({theme:e})=>e.textColor};
  } */
`,f=a.button`
  ${u}

  background-color: ${({theme:e})=>e.primaryBgColor};

  &.prev {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.next {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    border-left: 0.03125rem;
  }

  &:hover svg,
  &:focus svg,
  &:active svg,
  &.active svg {
    fill: ${({theme:e})=>e.btnHoverTextColor};
    stroke: ${({theme:e})=>e.btnHoverTextColor};
  }
`,$=a.svg`
  ${J}

  /* fill: ${({theme:e})=>e.btnTextColor};
  stroke: ${({theme:e})=>e.btnTextColor}; */

  &.left {
    transform: rotate(90deg);
  }

  &.right {
    transform: rotate(-90deg);
  }
`,C=a.div`
  display: flex;
  justify-content: center;

  /* position: absolute;
  top: 0;
  left: 312px; */
`,z=a.div`
  display: flex;
`,G=a.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.global.spacing(4)};

  @media (min-width: ${j.breakpoint.mobile}) {
    margin-bottom: 0;
    /* position: relative; */
  }
`,h=a(I)`
  ${u}

  color: ${({theme:e})=>e.btnSecondaryTextColor};

  background-color: ${({theme:e})=>e.primaryBgColor};

  &:not(:last-child) {
    margin-right: ${({theme:e})=>e.global.spacing(6)};
  }

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:e})=>e.btnHoverTextColor};
  }
`,Q=["January","February","March","April","May","June","July","August","September","October","November","December"],R=({weekData:e})=>{const l=F(j.breakpoint.maxMobile),m=O(),[g,d]=y(),r=parseInt(g.get("month")||x().toString()),n=parseInt(g.get("year")||c().toString()),s=m.pathname===H,i=g.get("date")||new Date().toISOString().slice(0,10),w=()=>{const o=new Date(i);o.setDate(o.getDate()-7),d({date:o.toISOString().slice(0,10)})},k=()=>{const o=new Date(i);o.setDate(o.getDate()+7),d({date:o.toISOString().slice(0,10)})},S=()=>{const o=r===1?12:r-1,p=r===1?n-1:n;d({month:o.toString(),year:p.toString()})},M=()=>{const o=r===12?1:r+1,p=r===12?n+1:n;d({month:o.toString(),year:p.toString()})},D=new Date(i)<new Date(v()),N=new Date(i)>new Date(v()),P=n<c()||n===c()&&r<x(),W=n>c()||n===c()&&r>x();return t.jsxs(E,{children:[t.jsxs(G,{children:[t.jsx(V,{className:s?"month-page":"",children:s?t.jsxs("p",{children:[Q[r-1]," ",n]}):t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:["Week ",e==null?void 0:e.weekPerYear]}),t.jsx("p",{children:new Date(i).getFullYear()})]})}),!l&&t.jsxs(C,{children:[t.jsx(h,{to:"months",children:"Month"}),t.jsx(h,{to:"weeks",children:"Week"})]}),t.jsxs(z,{children:[t.jsx(f,{className:`prev ${s&&P?"active":""} ${!s&&D?"active":""}`,type:"button",onClick:s?S:w,children:t.jsx($,{className:"left",children:t.jsx("use",{href:`${b}#arrow`})})}),t.jsx(f,{className:`next ${s&&W?"active":""} ${!s&&N?"active":""}`,type:"button",onClick:s?M:k,children:t.jsx($,{className:"right",children:t.jsx("use",{href:`${b}#arrow`})})})]})]}),l&&t.jsxs(C,{children:[t.jsx(h,{to:"months",children:"Month"}),t.jsx(h,{to:"weeks",children:"Week"})]})]})},q=()=>{const[e]=y(),l=e.get("date"),{data:m}=B({date:l});return t.jsxs(t.Fragment,{children:[t.jsx(R,{weekData:m}),t.jsx(T.Suspense,{fallback:t.jsx(L,{}),children:t.jsx(Y,{})})]})},_=q;export{_ as default};
//# sourceMappingURL=index-B3cAhdB-.js.map
