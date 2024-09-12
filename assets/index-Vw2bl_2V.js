import{p as o,g as r,j as t,A as c,H as m,M as l}from"./index-BB4Xbw6T.js";import{u as p}from"./useIsMobile-Gy7FEFoV.js";const h=o.ul`
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

  background-color: ${({theme:e})=>e.primaryBgColor};

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

  border: ${({theme:e})=>e.border};
  border-radius: 50%;

  @media (max-width: ${r.breakpoint.desktop}) {
    width: 2rem;
    height: 2rem;
  }

  @media (min-width: ${r.breakpoint.desktop}) {
    border-radius: 0.5rem;
  }
`,x=o.span``,g=({day:e})=>{const s=p(r.breakpoint.desktop);return t.jsxs(b,{children:[t.jsx(x,{children:e}),!s&&t.jsx("div",{children:"Info about day"})]})},y=()=>{const[e]=c(),s=parseInt(e.get("month")),i=parseInt(e.get("year")),{data:n,isFetching:d}=m({month:s,year:i});return t.jsxs(h,{children:[d&&t.jsx(l,{}),n==null?void 0:n.monthsDays.map(a=>t.jsx(u,{children:t.jsx(g,{...a})},a.id))]})},k=y;export{k as default};
//# sourceMappingURL=index-Vw2bl_2V.js.map
