import{p as s,g as r,j as t,B as d,I as c}from"./index-P7y5xxY_.js";import{u as m}from"./useIsMobile-CqgSl5gX.js";const l=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  border: ${({theme:e})=>e.border};
  border-radius: 0.5rem;

  padding: 1rem;
`,p=s.li`
  display: flex;
  justify-content: center;

  /* background-color: tomato; */

  width: calc((100% - 4rem) / 5);

  @media (min-width: ${r.breakpoint.mobile}) {
    width: calc((100% - 6rem) / 7);
  }
`,h=s.div`
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
`,u=s.span``,b=({day:e})=>{const o=m(r.breakpoint.desktop);return t.jsxs(h,{children:[t.jsx(u,{children:e}),!o&&t.jsx("div",{children:"Info about day"})]})},x=()=>{const[e]=d(),o=parseInt(e.get("month")),i=parseInt(e.get("year")),{data:n}=c({month:o,year:i});return t.jsx(l,{children:n==null?void 0:n.monthsDays.map(a=>t.jsx(p,{children:t.jsx(b,{...a})},a.id))})},y=x;export{y as default};
//# sourceMappingURL=index-DHyOVETg.js.map
