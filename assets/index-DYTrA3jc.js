import{y as A,p as a,z as u,g as j,N as I,q as O,A as y,B as x,C as c,j as e,D as T,r as B,M as L,O as Y}from"./index-Q9BVDK4A.js";import{s as b}from"./sprite-CR3z7qaS.js";import{u as F}from"./useIsMobile-CmoiH9Hx.js";import{m as H}from"./routes-CPlSPj5P.js";const v=()=>new Date().toISOString().slice(0,10),J=A`
  width: 1rem;
  height: 1rem;

  fill: ${({theme:t})=>t.textColor};
  stroke: ${({theme:t})=>t.textColor};
`,E=a.div`
  margin-bottom: ${({theme:t})=>t.global.spacing(4)};
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
  gap: ${({theme:t})=>t.global.spacing(1)};

  margin-left: ${({theme:t})=>t.global.spacing(4)};

  color: ${({theme:t})=>t.textColor};
  font-weight: ${({theme:t})=>t.global.text.fontWeight.sb};

  /* text-transform: uppercase; */
  /* border: none; */
  /* background-color: ${({theme:t})=>t.primaryBgColor}; */

  /* &:hover,
  &:focus,
  &:active {
    background-color: ${({theme:t})=>t.primaryBgColor};
    background-color: inherit;
    color: ${({theme:t})=>t.textColor};
  } */
`,f=a.button`
  ${u}

  background-color: ${({theme:t})=>t.primaryBgColor};

  &.prev {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.next {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    border-left: 0.03125rem;
  }

  & svg {
    transition: fill ${({theme:t})=>t.transitionDuration},
      stroke ${({theme:t})=>t.transitionDuration};
  }

  &:hover svg {
    fill: ${({theme:t})=>t.btnSecondaryTextColor};
    stroke: ${({theme:t})=>t.btnSecondaryTextColor};
  }

  &:hover svg,
  &:focus svg,
  &:active svg,
  &.active svg {
    fill: ${({theme:t})=>t.btnHoverTextColor};
    stroke: ${({theme:t})=>t.btnHoverTextColor};
  }
`,$=a.svg`
  ${J}

  /* fill: ${({theme:t})=>t.btnTextColor};
  stroke: ${({theme:t})=>t.btnTextColor}; */

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
`,q=a.div`
  display: flex;
`,z=a.div`
  display: flex;

  justify-content: space-between;
  margin-bottom: ${({theme:t})=>t.global.spacing(4)};

  @media (min-width: ${j.breakpoint.mobile}) {
    margin-bottom: 0;
    /* position: relative; */
  }
`,h=a(I)`
  ${u}

  color: ${({theme:t})=>t.btnSecondaryTextColor};

  background-color: ${({theme:t})=>t.primaryBgColor};

  &:not(:last-child) {
    margin-right: ${({theme:t})=>t.global.spacing(6)};
  }

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:t})=>t.btnHoverTextColor};
  }
`,G=["January","February","March","April","May","June","July","August","September","October","November","December"],Q=({weekData:t})=>{const l=F(j.breakpoint.maxMobile),g=O(),[m,d]=y(),r=parseInt(m.get("month")||x().toString()),n=parseInt(m.get("year")||c().toString()),s=g.pathname===H,i=m.get("date")||new Date().toISOString().slice(0,10),k=()=>{const o=new Date(i);o.setDate(o.getDate()-7),d({date:o.toISOString().slice(0,10)})},w=()=>{const o=new Date(i);o.setDate(o.getDate()+7),d({date:o.toISOString().slice(0,10)})},S=()=>{const o=r===1?12:r-1,p=r===1?n-1:n;d({month:o.toString(),year:p.toString()})},D=()=>{const o=r===12?1:r+1,p=r===12?n+1:n;d({month:o.toString(),year:p.toString()})},M=new Date(i)<new Date(v()),N=new Date(i)>new Date(v()),P=n<c()||n===c()&&r<x(),W=n>c()||n===c()&&r>x();return e.jsxs(E,{children:[e.jsxs(z,{children:[e.jsx(V,{className:s?"month-page":"",children:s?e.jsxs("p",{children:[G[r-1]," ",n]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Week ",t==null?void 0:t.weekPerYear]}),e.jsx("p",{children:new Date(i).getFullYear()})]})}),!l&&e.jsxs(C,{children:[e.jsx(h,{to:"months",children:"Month"}),e.jsx(h,{to:"weeks",children:"Week"})]}),e.jsxs(q,{children:[e.jsx(f,{className:`prev ${s&&P?"active":""} ${!s&&M?"active":""}`,type:"button",onClick:s?S:k,children:e.jsx($,{className:"left",children:e.jsx("use",{href:`${b}#arrow`})})}),e.jsx(f,{className:`next ${s&&W?"active":""} ${!s&&N?"active":""}`,type:"button",onClick:s?D:w,children:e.jsx($,{className:"right",children:e.jsx("use",{href:`${b}#arrow`})})})]})]}),l&&e.jsxs(C,{children:[e.jsx(h,{to:"months",children:"Month"}),e.jsx(h,{to:"weeks",children:"Week"})]})]})},R=()=>{const[t]=y(),l=t.get("date"),{data:g}=T({date:l});return e.jsxs(e.Fragment,{children:[e.jsx(Q,{weekData:g}),e.jsx(B.Suspense,{fallback:e.jsx(L,{}),children:e.jsx(Y,{})})]})},_=R;export{_ as default};
//# sourceMappingURL=index-DYTrA3jc.js.map
