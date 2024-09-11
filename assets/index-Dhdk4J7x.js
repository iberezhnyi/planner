import{p as s,g as r,j as t,A as c,I as m,E as l}from"./index-U6Y2ey4E.js";import{u as p}from"./useIsMobile-SoP82mMV.js";const h=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  border: ${({theme:e})=>e.border};
  border-radius: 0.5rem;

  padding: 1rem;
`,u=s.li`
  display: flex;
  justify-content: center;

  /* background-color: tomato; */

  width: calc((100% - 4rem) / 5);

  @media (min-width: ${r.breakpoint.mobile}) {
    width: calc((100% - 6rem) / 7);
  }
`,b=s.div`
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
`,x=s.span``,g=({day:e})=>{const n=p(r.breakpoint.desktop);return t.jsxs(b,{children:[t.jsx(x,{children:e}),!n&&t.jsx("div",{children:"Info about day"})]})},f=()=>{const[e]=c(),n=parseInt(e.get("month")),d=parseInt(e.get("year")),{data:o,isFetching:a}=m({month:n,year:d});return t.jsxs(h,{children:[a&&t.jsx(l,{isFetching:a}),o==null?void 0:o.monthsDays.map(i=>t.jsx(u,{children:t.jsx(g,{...i})},i.id))]})},k=f;export{k as default};
//# sourceMappingURL=index-Dhdk4J7x.js.map
