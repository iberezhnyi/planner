import{p as o,g as r,j as t,A as c,H as l,M as m}from"./index-BYG2Dzz5.js";import{u as p}from"./useIsMobile-BrMfGrRx.js";const h=o.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  border: ${({theme:e})=>e.border};
  border-radius: 0.5rem;

  padding: 1rem;
`,u=o.li`
  display: flex;
  justify-content: center;

  /* background-color: tomato; */

  background-color: ${({theme:e})=>e.transparent};

  width: calc((100% - 4rem) / 5);

  @media (min-width: ${r.breakpoint.mobile}) {
    width: calc((100% - 6rem) / 7);
  }
`,b=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: ${({theme:e})=>e.global.spacing(2)};

  text-align: center;

  background-color: ${({theme:e})=>e.global.form.inputBgColor};
  border: ${({theme:e})=>e.border};
  border-radius: 50%;

  @media (max-width: ${r.breakpoint.desktop}) {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: ${r.breakpoint.desktop}) {
    border-radius: 0.5rem;
  }
`,g=o.span``,x=({day:e})=>{const s=p(r.breakpoint.desktop);return t.jsxs(b,{children:[t.jsx(g,{children:e}),!s&&t.jsx("div",{children:"Info about day"})]})},f=()=>{const[e]=c(),s=parseInt(e.get("month")),i=parseInt(e.get("year")),{data:n,isFetching:d}=l({month:s,year:i});return t.jsxs(h,{children:[d&&t.jsx(m,{}),n==null?void 0:n.monthsDays.map(a=>t.jsx(u,{children:t.jsx(x,{...a})},a.id))]})},k=f;export{k as default};
//# sourceMappingURL=index-Bvj8Ch0A.js.map
