import{p as o,g as m,e as f,r as x,E as j,F as k,G as w,j as t,A as y,D as $,M as C}from"./index-Qi9TZNPr.js";import{u as D}from"./formik.esm-DEFxu32g.js";import{s as T}from"./sprite-CR3z7qaS.js";const N=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.global.spacing(6)};
`,S=o.li`
  /* display: flex;
  flex-direction: column; */

  width: 100%;
  padding: ${({theme:e})=>e.global.spacing(4)};

  border: ${({theme:e})=>e.border};
  border-radius: 0.5rem;

  background-color: ${({theme:e})=>e.primaryBgColor};

  @media (min-width: ${m.breakpoint.desktop}) {
    width: calc((100% - 1.5rem) / 2);
  }

  @media (min-width: ${m.breakpoint.largeDesktop}) {
    width: calc((100% - 3rem) / 3);
  }
`,W=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,L=o.p`
  font-weight: ${({theme:e})=>e.global.text.fontWeight.b};
`,v=o.p`
  font-weight: ${({theme:e})=>e.global.text.fontWeight.b};
`,A=o.input`
  margin-right: 10px;
`,I=o.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`,M=o.label`
  display: block;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`,B=o.p`
  display: inline;

  margin-bottom: 5px;
`,F=o.p`
  /* display: inline; */

  text-indent: 3ch;
`,_=o.textarea`
  width: 100%;
  min-height: 150px;
  border: ${({theme:e})=>e.border};
  border-radius: 0.5rem;
  margin-bottom: 20px;

  background-color: ${({theme:e})=>e.inputBgColor};

  resize: none;
`,E=o.div`
  text-align: justify;
`,P=o.div`
  display: flex;
  justify-content: center;
`,V=o.button`
  ${f}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active,
  &.open {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,G=o.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);

    fill: ${({theme:e})=>e.linkActiveColor};
    stroke: ${({theme:e})=>e.linkActiveColor};
  }
`,U=({notes:e,tasks:a,date:n,day:l})=>{const[r,s]=x.useState(!1),g=()=>{s(i=>!i)},[h]=j(),[u]=k(),[b]=w(),[p,c]=x.useState((e==null?void 0:e.note)||""),d=D({initialValues:{note:p},onSubmit:async i=>{i.note.trim()!==p&&(e!=null&&e._id?i.note.trim()===""?(await b({noteId:e._id}),c("")):(await u({noteId:e._id,note:i.note.trim(),date:n.toString()}),c(i.note.trim())):i.note.trim()!==""&&(await h({note:i.note.trim(),date:n.toString()}),c(i.note.trim())))}});return t.jsxs(t.Fragment,{children:[t.jsxs(W,{children:[t.jsx(L,{children:l}),t.jsx(v,{children:new Date(n).toLocaleDateString("uk-UA")})]}),t.jsx(I,{children:a&&a.map(i=>t.jsxs(M,{children:[t.jsx(A,{type:"checkbox"}),t.jsx(B,{children:i.title}),t.jsx(F,{children:i.description})]},i._id))}),t.jsx(P,{children:t.jsxs(V,{onClick:g,className:r?"open":"",children:["----------",t.jsx(G,{className:r?"open":"",children:t.jsx("use",{href:`${T}#arrow`})}),"----------"]})}),r&&t.jsx("form",{onBlur:d.handleSubmit,children:t.jsx(_,{name:"note",onChange:d.handleChange,value:d.values.note})}),t.jsx(E,{children:e?e.note:"My note"})]})},z=()=>{var r;const[e]=y(),a=e.get("date"),{data:n,isFetching:l}=$({date:a});return t.jsxs(N,{children:[l&&t.jsx(C,{}),(r=n==null?void 0:n.weekDays)==null?void 0:r.map(s=>t.jsx(S,{children:t.jsx(U,{...s})},s.id))]})},q=z;export{q as default};
//# sourceMappingURL=index-DZX4xO-y.js.map
