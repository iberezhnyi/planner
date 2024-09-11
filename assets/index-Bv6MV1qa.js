import{p as i,g as m,e as b,r as x,F as j,G as k,H as w,j as t,A as y,D as $,E as D}from"./index-U6Y2ey4E.js";import{u as T}from"./formik.esm-BOnq4SLf.js";import{s as C}from"./sprite-CR3z7qaS.js";const N=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.global.spacing(6)};
`,S=i.li`
  /* display: flex;
  flex-direction: column; */

  width: 100%;
  padding: ${({theme:e})=>e.global.spacing(4)};

  border: ${({theme:e})=>e.border};
  border-radius: 0.5rem;

  @media (min-width: ${m.breakpoint.desktop}) {
    width: calc((100% - 1.5rem) / 2);
  }

  @media (min-width: ${m.breakpoint.largeDesktop}) {
    width: calc((100% - 3rem) / 3);
  }
`,W=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,L=i.p`
  font-weight: ${({theme:e})=>e.global.text.fontWeight.b};
`,v=i.p`
  font-weight: ${({theme:e})=>e.global.text.fontWeight.b};
`,A=i.input`
  margin-right: 10px;
`,I=i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`,M=i.label`
  display: block;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`,F=i.p`
  display: inline;

  margin-bottom: 5px;
`,_=i.p`
  /* display: inline; */

  text-indent: 3ch;
`,B=i.textarea`
  width: 100%;
  min-height: 150px;
  border: 1px solid #000;
  margin-bottom: 20px;
`,E=i.div`
  text-align: justify;
`,P=i.div`
  display: flex;
  justify-content: center;
`,V=i.button`
  ${b}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active,
  &.open {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,G=i.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);

    fill: ${({theme:e})=>e.linkActiveColor};
    stroke: ${({theme:e})=>e.linkActiveColor};
  }
`,H=({notes:e,tasks:r,date:n,day:s})=>{const[a,l]=x.useState(!1),h=()=>{l(o=>!o)},[g]=j(),[u]=k(),[f]=w(),[p,c]=x.useState((e==null?void 0:e.note)||""),d=T({initialValues:{note:p},onSubmit:async o=>{o.note.trim()!==p&&(e!=null&&e._id?o.note.trim()===""?(await f({noteId:e._id}),c("")):(await u({noteId:e._id,note:o.note.trim(),date:n.toString()}),c(o.note.trim())):o.note.trim()!==""&&(await g({note:o.note.trim(),date:n.toString()}),c(o.note.trim())))}});return t.jsxs(t.Fragment,{children:[t.jsxs(W,{children:[t.jsx(L,{children:s}),t.jsx(v,{children:new Date(n).toLocaleDateString("uk-UA")})]}),t.jsx(I,{children:r&&r.map(o=>t.jsxs(M,{children:[t.jsx(A,{type:"checkbox"}),t.jsx(F,{children:o.title}),t.jsx(_,{children:o.description})]},o._id))}),t.jsx(P,{children:t.jsxs(V,{onClick:h,className:a?"open":"",children:["----------",t.jsx(G,{className:a?"open":"",children:t.jsx("use",{href:`${C}#arrow`})}),"----------"]})}),a&&t.jsx("form",{onBlur:d.handleSubmit,children:t.jsx(B,{name:"note",onChange:d.handleChange,value:d.values.note})}),t.jsx(E,{children:e?e.note:"My note"})]})},U=()=>{var a;const[e]=y(),r=e.get("date"),{data:n,isFetching:s}=$({date:r});return t.jsxs(N,{children:[s&&t.jsx(D,{isFetching:s}),(a=n==null?void 0:n.weekDays)==null?void 0:a.map(l=>t.jsx(S,{children:t.jsx(H,{...l})},l.id))]})},z=U;export{z as default};
//# sourceMappingURL=index-Bv6MV1qa.js.map
