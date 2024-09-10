import{p as i,g as p,e as b,r as m,F as j,G as k,H as w,j as t,B as y,E as $}from"./index-P7y5xxY_.js";import{u as T}from"./formik.esm-DI-5K93h.js";import{s as C}from"./sprite-CR3z7qaS.js";const D=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.global.spacing(6)};
`,N=i.li`
  /* display: flex;
  flex-direction: column; */

  width: 100%;
  padding: ${({theme:e})=>e.global.spacing(4)};

  border: ${({theme:e})=>e.border};
  border-radius: 0.5rem;

  @media (min-width: ${p.breakpoint.desktop}) {
    width: calc((100% - 1.5rem) / 2);
  }

  @media (min-width: ${p.breakpoint.largeDesktop}) {
    width: calc((100% - 3rem) / 3);
  }
`,S=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,W=i.p`
  font-weight: ${({theme:e})=>e.global.text.fontWeight.b};
`,L=i.p`
  font-weight: ${({theme:e})=>e.global.text.fontWeight.b};
`,v=i.input`
  margin-right: 10px;
`,I=i.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`,A=i.label`
  display: block;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`,B=i.p`
  display: inline;

  margin-bottom: 5px;
`,M=i.p`
  /* display: inline; */

  text-indent: 3ch;
`,_=i.textarea`
  width: 100%;
  min-height: 150px;
  border: 1px solid #000;
  margin-bottom: 20px;
`,E=i.div`
  text-align: justify;
`,F=i.div`
  display: flex;
  justify-content: center;
`,P=i.button`
  ${b}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active,
  &.open {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,V=i.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);

    fill: ${({theme:e})=>e.linkActiveColor};
    stroke: ${({theme:e})=>e.linkActiveColor};
  }
`,G=({notes:e,tasks:a,date:n,day:s})=>{const[r,x]=m.useState(!1),h=()=>{x(o=>!o)},[g]=j(),[u]=k(),[f]=w(),[d,l]=m.useState((e==null?void 0:e.note)||""),c=T({initialValues:{note:d},onSubmit:async o=>{o.note.trim()!==d&&(e!=null&&e._id?o.note.trim()===""?(await f({noteId:e._id}),l("")):(await u({noteId:e._id,note:o.note.trim(),date:n.toString()}),l(o.note.trim())):o.note.trim()!==""&&(await g({note:o.note.trim(),date:n.toString()}),l(o.note.trim())))}});return t.jsxs(t.Fragment,{children:[t.jsxs(S,{children:[t.jsx(W,{children:s}),t.jsx(L,{children:new Date(n).toLocaleDateString("uk-UA")})]}),t.jsx(I,{children:a&&a.map(o=>t.jsxs(A,{children:[t.jsx(v,{type:"checkbox"}),t.jsx(B,{children:o.title}),t.jsx(M,{children:o.description})]},o._id))}),t.jsx(F,{children:t.jsxs(P,{onClick:h,className:r?"open":"",children:["----------",t.jsx(V,{className:r?"open":"",children:t.jsx("use",{href:`${C}#arrow`})}),"----------"]})}),r&&t.jsx("form",{onBlur:c.handleSubmit,children:t.jsx(_,{name:"note",onChange:c.handleChange,value:c.values.note})}),t.jsx(E,{children:e?e.note:"My note"})]})},H=()=>{var s;const[e]=y(),a=e.get("date"),{data:n}=$({date:a});return t.jsx(D,{children:(s=n==null?void 0:n.weekDays)==null?void 0:s.map(r=>t.jsx(N,{children:t.jsx(G,{...r})},r.id))})},q=H;export{q as default};
//# sourceMappingURL=index-k02sBsa0.js.map
