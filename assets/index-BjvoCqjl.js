import{y as I,p as s,z as u,g as j,N as W,o as O,A as y,B as p,C as i,j as e,D as B,r as T,M as L,O as Y}from"./index-BbMax_ks.js";import{s as b}from"./sprite-CR3z7qaS.js";import{u as F}from"./useIsMobile-CbU-rcjY.js";import{m as H}from"./routes-CPlSPj5P.js";const v=()=>new Date().toISOString().slice(0,10),J=I`
  width: 1rem;
  height: 1rem;
  fill: ${({theme:t})=>t.textColor};
  stroke: ${({theme:t})=>t.textColor};
`,E=s.div`
  margin-bottom: ${({theme:t})=>t.global.spacing(4)};
`,V=s.div`
  ${u}

  min-width: 11rem;

  color: ${({theme:t})=>t.textColor};

  text-transform: uppercase;

  background-color: ${({theme:t})=>t.primaryBgColor};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({theme:t})=>t.primaryBgColor};
    color: ${({theme:t})=>t.textColor};
  }
`,$=s.button`
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

  &:hover svg,
  &:focus svg,
  &:active svg,
  &.active svg {
    fill: ${({theme:t})=>t.btnHoverTextColor};
    stroke: ${({theme:t})=>t.btnHoverTextColor};
  }
`,C=s.svg`
  ${J}

  /* fill: ${({theme:t})=>t.btnTextColor};
  stroke: ${({theme:t})=>t.btnTextColor}; */

  &.left {
    transform: rotate(90deg);
  }

  &.right {
    transform: rotate(-90deg);
  }
`,f=s.div`
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
`,m=s(W)`
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
`,Q=["January","February","March","April","May","June","July","August","September","October","November","December"],R=({weekData:t})=>{const l=F(j.breakpoint.maxMobile),h=O(),[g,d]=y(),r=parseInt(g.get("month")||p().toString()),n=parseInt(g.get("year")||i().toString()),a=h.pathname===H,c=g.get("date")||new Date().toISOString().slice(0,10),w=()=>{const o=new Date(c);o.setDate(o.getDate()-7),d({date:o.toISOString().slice(0,10)})},k=()=>{const o=new Date(c);o.setDate(o.getDate()+7),d({date:o.toISOString().slice(0,10)})},S=()=>{const o=r===1?12:r-1,x=r===1?n-1:n;d({month:o.toString(),year:x.toString()})},D=()=>{const o=r===12?1:r+1,x=r===12?n+1:n;d({month:o.toString(),year:x.toString()})},M=new Date(c)<new Date(v()),P=new Date(c)>new Date(v()),N=n<i()||n===i()&&r<p(),A=n>i()||n===i()&&r>p();return e.jsxs(E,{children:[e.jsxs(G,{children:[e.jsx(V,{children:a?`${Q[r-1]}-${n}`:`Week-${t==null?void 0:t.weekPerYear} year-${new Date(c).getFullYear()}`}),!l&&e.jsxs(f,{children:[e.jsx(m,{to:"months",children:"Місяць"}),e.jsx(m,{to:"weeks",children:"Тиждень"})]}),e.jsxs(z,{children:[e.jsx($,{className:`prev ${a&&N?"active":""} ${!a&&M?"active":""}`,type:"button",onClick:a?S:w,children:e.jsx(C,{className:"left",children:e.jsx("use",{href:`${b}#arrow`})})}),e.jsx($,{className:`next ${a&&A?"active":""} ${!a&&P?"active":""}`,type:"button",onClick:a?D:k,children:e.jsx(C,{className:"right",children:e.jsx("use",{href:`${b}#arrow`})})})]})]}),l&&e.jsxs(f,{children:[e.jsx(m,{to:"months",children:"Місяць"}),e.jsx(m,{to:"weeks",children:"Тиждень"})]})]})},q=()=>{const[t]=y(),l=t.get("date"),{data:h}=B({date:l});return e.jsxs(e.Fragment,{children:[e.jsx(R,{weekData:h}),e.jsx(T.Suspense,{fallback:e.jsx(L,{}),children:e.jsx(Y,{})})]})},_=q;export{_ as default};
//# sourceMappingURL=index-BjvoCqjl.js.map
