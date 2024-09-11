import{p as z,s as vo,c as an,j as R,u as vi,a as Pt,b as hi,d as nr,e as sn,g as pe,r as b,f as mi,R as gi,N as ut,h as cn,i as bi,k as yi,l as xi,m as wi,L as Ci,n as O,o as Si,q as ki,t as Ei,O as Ri}from"./index-U6Y2ey4E.js";import{u as ho}from"./useIsMobile-SoP82mMV.js";import{s as tt}from"./sprite-CR3z7qaS.js";const Oi=z.div`
  display: flex;
  flex-grow: 1;
`,$i=z.main`
  background-color: ${({theme:e})=>e.mainBgColor};
  flex-grow: 1;

  ${vo}

  ${an}
`,Ti=z.div`
  display: flex;
  overflow: hidden;
  z-index: 2;
`,Pi=z.button`
  position: relative;
  left: 0;

  width: 2.1875rem;
  height: 1.625rem;
  padding: 0;

  background: none;
  border: none;

  &::before,
  &::after,
  & span,
  & span::before {
    content: '';
    position: absolute;
    display: block;

    width: 100%;
    height: 0.1875rem;

    background-color: ${({theme:e})=>e.global.text.color.white};
    border-radius: 0.3125rem;

    transition: all 200ms linear;
    will-change: opacity, top, bottom, transform;

    /* transition: opacity 1s linear, transform 1s linear;
    will-change: opacity, transform; */
  }

  &::before {
    top: ${e=>e.$mobileMenu?"44%":"1%"};
    transform: ${e=>e.$mobileMenu?"rotate(45deg)":""};
  }

  &::after {
    bottom: ${e=>e.$mobileMenu?"44%":"1%"};
    transform: ${e=>e.$mobileMenu?"rotate(-45deg)":""};
  }

  & span {
    top: 30%;
  }

  & span::before {
    top: 256%;
  }

  & span,
  & span::before {
    opacity: ${e=>e.$mobileMenu?"0":"1"};
    transform: ${e=>e.$mobileMenu?"translateX(100%)":""};
  }
`,Ai=({onClick:e,mobileMenu:t})=>R.jsx(Ti,{children:R.jsx(Pi,{$mobileMenu:t,onClick:e,children:R.jsx("span",{})})}),Ii=()=>{const e=vi();return[Pt(hi),r=>e(r==="light"?nr("dark"):nr("light"))]},Mi=z.button`
  ${sn}/* @media (max-width: ${pe.breakpoint.maxTablet}) {
    position: absolute;
    top: 2.5%;
    right: 5%;
  } */
`,Li=z.svg`
  width: 1rem;
  height: 1rem;

  fill: ${({theme:e})=>e.global.text.color.white};

  @media (min-width: ${pe.breakpoint.mobile}) {
    /* fill: ${({theme:e})=>e.textColor}; */

    width: 1.5rem;
    height: 1.5rem;
  }
`,Di=()=>{const[e,t]=Ii();return R.jsx(Mi,{onClick:()=>t(e),children:R.jsx(Li,{children:R.jsx("use",{href:`${tt}#${e==="light"?"moon-stars":"sun"}`})})})},ji=z.header`
  padding-top: ${({theme:e})=>e.global.spacing(3)};
  padding-bottom: ${({theme:e})=>e.global.spacing(3)};

  background-color: ${({theme:e})=>e.headerBgColor};
`,Ni=z.div`
  ${an}

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${pe.breakpoint.tablet}) {
    justify-content: space-between;
  }
`,Fi=z.img`
  /* margin-left: 50px; */
`,Bi=z.ul`
  display: flex;
`,rr=z.li`
  display: flex;

  &.is-not-login {
    margin-right: ${({theme:e})=>e.global.spacing(3)};
  }

  @media (min-width: ${pe.breakpoint.mobile}) {
    &:not(:last-child) {
      margin-right: ${({theme:e})=>e.global.spacing(3)};
    }
  }
`;function Ye(e){return mo(e)?(e.nodeName||"").toLowerCase():"#document"}function we(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ze(e){var t;return(t=(mo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function mo(e){return e instanceof Node||e instanceof we(e).Node}function ne(e){return e instanceof Element||e instanceof we(e).Element}function se(e){return e instanceof HTMLElement||e instanceof we(e).HTMLElement}function En(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof we(e).ShadowRoot}function At(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Oe(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Wi(e){return["table","td","th"].includes(Ye(e))}function ln(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Dn(e){const t=jn(),n=Oe(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Hi(e){let t=He(e);for(;se(t)&&!_e(t);){if(ln(t))return null;if(Dn(t))return t;t=He(t)}return null}function jn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _e(e){return["html","body","#document"].includes(Ye(e))}function Oe(e){return we(e).getComputedStyle(e)}function un(e){return ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function He(e){if(Ye(e)==="html")return e;const t=e.assignedSlot||e.parentNode||En(e)&&e.host||ze(e);return En(t)?t.host:t}function go(e){const t=He(e);return _e(t)?e.ownerDocument?e.ownerDocument.body:e.body:se(t)&&At(t)?t:go(t)}function Ke(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=go(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=we(o);return i?t.concat(a,a.visualViewport||[],At(o)?o:[],a.frameElement&&n?Ke(a.frameElement):[]):t.concat(o,Ke(o,[],n))}function Je(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function ye(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&En(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Vi(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function bo(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function zi(e){return e.mozInputSource===0&&e.isTrusted?!0:Rn()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Ui(e){return Ki()?!1:!Rn()&&e.width===0&&e.height===0||Rn()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function qi(){return/apple/i.test(navigator.vendor)}function Rn(){const e=/android/i;return e.test(Vi())||e.test(bo())}function Ki(){return bo().includes("jsdom/")}function or(e,t){return["mouse","pen"].includes(e)}function _i(e){return"nativeEvent"in e}function Xi(e){return e.matches("html,body")}function Ae(e){return(e==null?void 0:e.ownerDocument)||document}function mn(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function nt(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Yi="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function yo(e){return se(e)&&e.matches(Yi)}function gn(e){e.preventDefault(),e.stopPropagation()}function Gi(e){return e?e.getAttribute("role")==="combobox"&&yo(e):!1}const On=Math.min,ft=Math.max,_t=Math.round,Dt=Math.floor,Xe=e=>({x:e,y:e});function xo(e){return e.split("-")[0]}function Qi(e){return e.split("-")[1]}function Zi(e){return e==="x"?"y":"x"}function Ji(e){return e==="y"?"height":"width"}function wo(e){return["top","bottom"].includes(xo(e))?"y":"x"}function ea(e){return Zi(wo(e))}function Co(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ta=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Xt=ta.join(","),So=typeof Element>"u",pt=So?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Yt=!So&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Gt=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),i=o===""||o==="true",a=i||n&&t&&e(t.parentNode);return a},na=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},ra=function(t,n,r){if(Gt(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(Xt));return n&&pt.call(t,Xt)&&o.unshift(t),o=o.filter(r),o},oa=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Gt(a,!1))if(a.tagName==="SLOT"){var s=a.assignedElements(),c=s.length?s:a.children,u=e(c,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:a,candidates:u})}else{var l=pt.call(a,Xt);l&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),y=!Gt(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(d&&y){var f=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:a,candidates:f})}else i.unshift.apply(i,a.children)}}return o},ko=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},Eo=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||na(t))&&!ko(t)?0:t.tabIndex},ia=function(t,n){var r=Eo(t);return r<0&&n&&!ko(t)?0:r},aa=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},Ro=function(t){return t.tagName==="INPUT"},sa=function(t){return Ro(t)&&t.type==="hidden"},ca=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},la=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},ua=function(t){if(!t.name)return!0;var n=t.form||Yt(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=la(o,t.form);return!i||i===t},fa=function(t){return Ro(t)&&t.type==="radio"},da=function(t){return fa(t)&&!ua(t)},pa=function(t){var n,r=t&&Yt(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,s,c;for(i=!!((a=o)!==null&&a!==void 0&&(s=a.ownerDocument)!==null&&s!==void 0&&s.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,l,d;r=Yt(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((l=o)!==null&&l!==void 0&&(d=l.ownerDocument)!==null&&d!==void 0&&d.contains(o))}}return i},ir=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},va=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=pt.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(pt.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var s=t;t;){var c=t.parentElement,u=Yt(t);if(c&&!c.shadowRoot&&o(c)===!0)return ir(t);t.assignedSlot?t=t.assignedSlot:!c&&u!==t.ownerDocument?t=u.host:t=c}t=s}if(pa(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return ir(t);return!1},ha=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return pt.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},ma=function(t,n){return!(n.disabled||Gt(n)||sa(n)||va(n,t)||ca(n)||ha(n))},$n=function(t,n){return!(da(n)||Eo(n)<0||!ma(t,n))},ga=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},ba=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scopeParent,s=a?o.scopeParent:o,c=ia(s,a),u=a?e(o.candidates):s;c===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:c,item:o,isScope:a,content:u})}),r.sort(aa).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},Nn=function(t,n){n=n||{};var r;return n.getShadowRoot?r=oa([t],n.includeContainer,{filter:$n.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:ga}):r=ra(t,n.includeContainer,$n.bind(null,n)),ba(r)},ya=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return pt.call(t,Xt)===!1?!1:$n(n,t)};function ar(e,t,n){let{reference:r,floating:o}=e;const i=wo(t),a=ea(t),s=Ji(a),c=xo(t),u=i==="y",l=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,y=r[s]/2-o[s]/2;let f;switch(c){case"top":f={x:l,y:r.y-o.height};break;case"bottom":f={x:l,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Qi(t)){case"start":f[a]-=y*(n&&u?-1:1);break;case"end":f[a]+=y*(n&&u?-1:1);break}return f}const xa=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:l,y:d}=ar(u,r,c),y=r,f={},p=0;for(let v=0;v<s.length;v++){const{name:w,fn:C}=s[v],{x:S,y:g,data:h,reset:x}=await C({x:l,y:d,initialPlacement:r,placement:y,strategy:o,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});l=S??l,d=g??d,f={...f,[w]:{...f[w],...h}},x&&p<=50&&(p++,typeof x=="object"&&(x.placement&&(y=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:l,y:d}=ar(u,y,c)),v=-1)}return{x:l,y:d,placement:y,strategy:o,middlewareData:f}};function Oo(e){const t=Oe(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=se(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=_t(n)!==i||_t(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function Fn(e){return ne(e)?e:e.contextElement}function dt(e){const t=Fn(e);if(!se(t))return Xe(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Oo(t);let a=(i?_t(n.width):n.width)/r,s=(i?_t(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const wa=Xe(0);function $o(e){const t=we(e);return!jn()||!t.visualViewport?wa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ca(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==we(e)?!1:t}function it(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Fn(e);let a=Xe(1);t&&(r?ne(r)&&(a=dt(r)):a=dt(e));const s=Ca(i,n,r)?$o(i):Xe(0);let c=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,l=o.width/a.x,d=o.height/a.y;if(i){const y=we(i),f=r&&ne(r)?we(r):r;let p=y,v=p.frameElement;for(;v&&r&&f!==p;){const w=dt(v),C=v.getBoundingClientRect(),S=Oe(v),g=C.left+(v.clientLeft+parseFloat(S.paddingLeft))*w.x,h=C.top+(v.clientTop+parseFloat(S.paddingTop))*w.y;c*=w.x,u*=w.y,l*=w.x,d*=w.y,c+=g,u+=h,p=we(v),v=p.frameElement}}return Co({width:l,height:d,x:c,y:u})}function Sa(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=ze(r),s=t?ln(t.floating):!1;if(r===a||s&&i)return n;let c={scrollLeft:0,scrollTop:0},u=Xe(1);const l=Xe(0),d=se(r);if((d||!d&&!i)&&((Ye(r)!=="body"||At(a))&&(c=un(r)),se(r))){const y=it(r);u=dt(r),l.x=y.x+r.clientLeft,l.y=y.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+l.x,y:n.y*u.y-c.scrollTop*u.y+l.y}}function ka(e){return Array.from(e.getClientRects())}function To(e){return it(ze(e)).left+un(e).scrollLeft}function Ea(e){const t=ze(e),n=un(e),r=e.ownerDocument.body,o=ft(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ft(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+To(e);const s=-n.scrollTop;return Oe(r).direction==="rtl"&&(a+=ft(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function Ra(e,t){const n=we(e),r=ze(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;const u=jn();(!u||u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}function Oa(e,t){const n=it(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=se(e)?dt(e):Xe(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:a,height:s,x:c,y:u}}function sr(e,t,n){let r;if(t==="viewport")r=Ra(e,n);else if(t==="document")r=Ea(ze(e));else if(ne(t))r=Oa(t,n);else{const o=$o(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return Co(r)}function Po(e,t){const n=He(e);return n===t||!ne(n)||_e(n)?!1:Oe(n).position==="fixed"||Po(n,t)}function $a(e,t){const n=t.get(e);if(n)return n;let r=Ke(e,[],!1).filter(s=>ne(s)&&Ye(s)!=="body"),o=null;const i=Oe(e).position==="fixed";let a=i?He(e):e;for(;ne(a)&&!_e(a);){const s=Oe(a),c=Dn(a);!c&&s.position==="fixed"&&(o=null),(i?!c&&!o:!c&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||At(a)&&!c&&Po(e,a))?r=r.filter(l=>l!==a):o=s,a=He(a)}return t.set(e,r),r}function Ta(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?ln(t)?[]:$a(t,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,l)=>{const d=sr(t,l,o);return u.top=ft(d.top,u.top),u.right=On(d.right,u.right),u.bottom=On(d.bottom,u.bottom),u.left=ft(d.left,u.left),u},sr(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Pa(e){const{width:t,height:n}=Oo(e);return{width:t,height:n}}function Aa(e,t,n){const r=se(t),o=ze(t),i=n==="fixed",a=it(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const c=Xe(0);if(r||!r&&!i)if((Ye(t)!=="body"||At(o))&&(s=un(t)),r){const d=it(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=To(o));const u=a.left+s.scrollLeft-c.x,l=a.top+s.scrollTop-c.y;return{x:u,y:l,width:a.width,height:a.height}}function bn(e){return Oe(e).position==="static"}function cr(e,t){return!se(e)||Oe(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ao(e,t){const n=we(e);if(ln(e))return n;if(!se(e)){let o=He(e);for(;o&&!_e(o);){if(ne(o)&&!bn(o))return o;o=He(o)}return n}let r=cr(e,t);for(;r&&Wi(r)&&bn(r);)r=cr(r,t);return r&&_e(r)&&bn(r)&&!Dn(r)?n:r||Hi(e)||n}const Ia=async function(e){const t=this.getOffsetParent||Ao,n=this.getDimensions,r=await n(e.floating);return{reference:Aa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ma(e){return Oe(e).direction==="rtl"}const La={convertOffsetParentRelativeRectToViewportRelativeRect:Sa,getDocumentElement:ze,getClippingRect:Ta,getOffsetParent:Ao,getElementRects:Ia,getClientRects:ka,getDimensions:Pa,getScale:dt,isElement:ne,isRTL:Ma};function Da(e,t){let n=null,r;const o=ze(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();const{left:u,top:l,width:d,height:y}=e.getBoundingClientRect();if(s||t(),!d||!y)return;const f=Dt(l),p=Dt(o.clientWidth-(u+d)),v=Dt(o.clientHeight-(l+y)),w=Dt(u),S={rootMargin:-f+"px "+-p+"px "+-v+"px "+-w+"px",threshold:ft(0,On(1,c))||1};let g=!0;function h(x){const m=x[0].intersectionRatio;if(m!==c){if(!g)return a();m?a(!1,m):r=setTimeout(()=>{a(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(h,{...S,root:o.ownerDocument})}catch{n=new IntersectionObserver(h,S)}n.observe(e)}return a(!0),i}function ja(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Fn(e),l=o||i?[...u?Ke(u):[],...Ke(t)]:[];l.forEach(C=>{o&&C.addEventListener("scroll",n,{passive:!0}),i&&C.addEventListener("resize",n)});const d=u&&s?Da(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(C=>{let[S]=C;S&&S.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var g;(g=f)==null||g.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let p,v=c?it(e):null;c&&w();function w(){const C=it(e);v&&(C.x!==v.x||C.y!==v.y||C.width!==v.width||C.height!==v.height)&&n(),v=C,p=requestAnimationFrame(w)}return n(),()=>{var C;l.forEach(S=>{o&&S.removeEventListener("scroll",n),i&&S.removeEventListener("resize",n)}),d==null||d(),(C=f)==null||C.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Na=(e,t,n)=>{const r=new Map,o={platform:La,...n},i={...o.platform,_c:r};return xa(e,t,{...o,platform:i})};var Ht=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Qt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Qt(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Qt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Io(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function lr(e,t){const n=Io(e);return Math.round(t*n)/n}function ur(e){const t=b.useRef(e);return Ht(()=>{t.current=e}),t}function Fa(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[l,d]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[y,f]=b.useState(r);Qt(y,r)||f(r);const[p,v]=b.useState(null),[w,C]=b.useState(null),S=b.useCallback(T=>{T!==m.current&&(m.current=T,v(T))},[]),g=b.useCallback(T=>{T!==k.current&&(k.current=T,C(T))},[]),h=i||p,x=a||w,m=b.useRef(null),k=b.useRef(null),$=b.useRef(l),L=c!=null,I=ur(c),B=ur(o),A=b.useCallback(()=>{if(!m.current||!k.current)return;const T={placement:t,strategy:n,middleware:y};B.current&&(T.platform=B.current),Na(m.current,k.current,T).then(W=>{const Y={...W,isPositioned:!0};V.current&&!Qt($.current,Y)&&($.current=Y,mi.flushSync(()=>{d(Y)}))})},[y,t,n,B]);Ht(()=>{u===!1&&$.current.isPositioned&&($.current.isPositioned=!1,d(T=>({...T,isPositioned:!1})))},[u]);const V=b.useRef(!1);Ht(()=>(V.current=!0,()=>{V.current=!1}),[]),Ht(()=>{if(h&&(m.current=h),x&&(k.current=x),h&&x){if(I.current)return I.current(h,x,A);A()}},[h,x,A,I,L]);const E=b.useMemo(()=>({reference:m,floating:k,setReference:S,setFloating:g}),[S,g]),j=b.useMemo(()=>({reference:h,floating:x}),[h,x]),N=b.useMemo(()=>{const T={position:n,left:0,top:0};if(!j.floating)return T;const W=lr(j.floating,l.x),Y=lr(j.floating,l.y);return s?{...T,transform:"translate("+W+"px, "+Y+"px)",...Io(j.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:Y}},[n,s,j.floating,l.x,l.y]);return b.useMemo(()=>({...l,update:A,refs:E,elements:j,floatingStyles:N}),[l,A,E,j,N])}const Mo={...gi},Ba=Mo.useInsertionEffect,Wa=Ba||(e=>e());function qe(e){const t=b.useRef(()=>{});return Wa(()=>{t.current=e}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}let fr=0;function Ze(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(fr);const i=()=>e==null?void 0:e.focus({preventScroll:n});o?i():fr=requestAnimationFrame(i)}var We=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Zt(){return Zt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zt.apply(this,arguments)}let dr=!1,Ha=0;const pr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Ha++;function Va(){const[e,t]=b.useState(()=>dr?pr():void 0);return We(()=>{e==null&&t(pr())},[]),b.useEffect(()=>{dr=!0},[]),e}const za=Mo.useId,Bn=za||Va;function Ua(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const qa=b.createContext(null),Ka=b.createContext(null),Lo=()=>{var e;return((e=b.useContext(qa))==null?void 0:e.id)||null},Wn=()=>b.useContext(Ka);function Jt(e){return"data-floating-ui-"+e}function yn(e){const t=b.useRef(e);return We(()=>{t.current=e}),t}function _a(e,t){var n;let r=[],o=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;o;){const i=e.find(a=>a.id===o);o=i==null?void 0:i.parentId,i&&(r=r.concat(i))}return r}function Ct(e,t){let n=e.filter(o=>{var i;return o.parentId===t&&((i=o.context)==null?void 0:i.open)}),r=n;for(;r.length;)r=e.filter(o=>{var i;return(i=r)==null?void 0:i.some(a=>{var s;return o.parentId===a.id&&((s=o.context)==null?void 0:s.open)})}),n=n.concat(r);return n}let lt=new WeakMap,jt=new WeakSet,Nt={},xn=0;const Xa=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Do=e=>e&&(e.host||Do(e.parentNode)),Ya=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=Do(n);return e.contains(r)?r:null}).filter(n=>n!=null);function Ga(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Ya(t,e),s=new Set,c=new Set(a),u=[];Nt[o]||(Nt[o]=new WeakMap);const l=Nt[o];a.forEach(d),y(t),s.clear();function d(f){!f||s.has(f)||(s.add(f),f.parentNode&&d(f.parentNode))}function y(f){!f||c.has(f)||[].forEach.call(f.children,p=>{if(Ye(p)!=="script")if(s.has(p))y(p);else{const v=i?p.getAttribute(i):null,w=v!==null&&v!=="false",C=(lt.get(p)||0)+1,S=(l.get(p)||0)+1;lt.set(p,C),l.set(p,S),u.push(p),C===1&&w&&jt.add(p),S===1&&p.setAttribute(o,""),!w&&i&&p.setAttribute(i,"true")}})}return xn++,()=>{u.forEach(f=>{const p=(lt.get(f)||0)-1,v=(l.get(f)||0)-1;lt.set(f,p),l.set(f,v),p||(!jt.has(f)&&i&&f.removeAttribute(i),jt.delete(f)),v||f.removeAttribute(o)}),xn--,xn||(lt=new WeakMap,lt=new WeakMap,jt=new WeakSet,Nt={})}}function vr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=Ae(e[0]).body;return Ga(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const en=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function jo(e,t){const n=Nn(e,en());t==="prev"&&n.reverse();const r=n.indexOf(Je(Ae(e)));return n.slice(r+1)[0]}function Qa(){return jo(document.body,"next")}function Za(){return jo(document.body,"prev")}function hr(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!ye(n,r)}const No={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Ja;function mr(e){e.key==="Tab"&&(e.target,clearTimeout(Ja))}const gr=b.forwardRef(function(t,n){const[r,o]=b.useState();We(()=>(qi()&&o("button"),document.addEventListener("keydown",mr),()=>{document.removeEventListener("keydown",mr)}),[]);const i={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[Jt("focus-guard")]:"",style:No};return b.createElement("span",Zt({},t,i))}),es=b.createContext(null),ts=()=>b.useContext(es),br=20;let et=[];function wn(e){et=et.filter(n=>n.isConnected);let t=e;if(!(!t||Ye(t)==="body")){if(!ya(t,en())){const n=Nn(t,en())[0];n&&(t=n)}et.push(t),et.length>br&&(et=et.slice(-br))}}function yr(){return et.slice().reverse().find(e=>e.isConnected)}const ns=b.forwardRef(function(t,n){return b.createElement("button",Zt({},t,{type:"button",ref:n,tabIndex:-1,style:No}))});function rs(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:a=0,returnFocus:s=!0,restoreFocus:c=!1,modal:u=!0,visuallyHiddenDismiss:l=!1,closeOnFocusOut:d=!0}=e,{open:y,refs:f,nodeId:p,onOpenChange:v,events:w,dataRef:C,floatingId:S,elements:{domReference:g,floating:h}}=t,x=typeof a=="number"&&a<0,m=Gi(g)&&x,k=Xa()?i:!0,$=yn(o),L=yn(a),I=yn(s),B=Wn(),A=ts(),V=b.useRef(null),E=b.useRef(null),j=b.useRef(!1),N=b.useRef(!1),T=b.useRef(-1),W=A!=null,Y=h==null?void 0:h.firstElementChild,F=(Y==null?void 0:Y.id)===S?Y:h,G=qe(function(P){return P===void 0&&(P=F),P?Nn(P,en()):[]}),ae=qe(P=>{const M=G(P);return $.current.map(D=>g&&D==="reference"?g:F&&D==="floating"?F:M).filter(Boolean).flat()});b.useEffect(()=>{if(r||!u)return;function P(D){if(D.key==="Tab"){ye(F,Je(Ae(F)))&&G().length===0&&!m&&gn(D);const H=ae(),X=nt(D);$.current[0]==="reference"&&X===g&&(gn(D),D.shiftKey?Ze(H[H.length-1]):Ze(H[1])),$.current[1]==="floating"&&X===F&&D.shiftKey&&(gn(D),Ze(H[0]))}}const M=Ae(F);return M.addEventListener("keydown",P),()=>{M.removeEventListener("keydown",P)}},[r,g,F,u,$,m,G,ae]),b.useEffect(()=>{if(r||!h)return;function P(M){const D=nt(M),X=G().indexOf(D);X!==-1&&(T.current=X)}return h.addEventListener("focusin",P),()=>{h.removeEventListener("focusin",P)}},[r,h,G]),b.useEffect(()=>{if(r||!d)return;function P(){N.current=!0,setTimeout(()=>{N.current=!1})}function M(D){const H=D.relatedTarget;queueMicrotask(()=>{const X=!(ye(g,H)||ye(h,H)||ye(H,h)||ye(A==null?void 0:A.portalNode,H)||H!=null&&H.hasAttribute(Jt("focus-guard"))||B&&(Ct(B.nodesRef.current,p).find(te=>{var Q,le;return ye((Q=te.context)==null?void 0:Q.elements.floating,H)||ye((le=te.context)==null?void 0:le.elements.domReference,H)})||_a(B.nodesRef.current,p).find(te=>{var Q,le;return((Q=te.context)==null?void 0:Q.elements.floating)===H||((le=te.context)==null?void 0:le.elements.domReference)===H})));if(c&&X&&Je(Ae(F))===Ae(F).body){se(F)&&(F==null||F.focus());const te=T.current,Q=G(),le=Q[te]||Q[Q.length-1]||F;se(le)&&le.focus()}(m||!u)&&H&&X&&!N.current&&H!==yr()&&(j.current=!0,v(!1,D))})}if(h&&se(g))return g.addEventListener("focusout",M),g.addEventListener("pointerdown",P),h.addEventListener("focusout",M),()=>{g.removeEventListener("focusout",M),g.removeEventListener("pointerdown",P),h.removeEventListener("focusout",M)}},[r,g,h,F,u,p,B,A,v,d,c,G,m]),b.useEffect(()=>{var P;if(r)return;const M=Array.from((A==null||(P=A.portalNode)==null?void 0:P.querySelectorAll("["+Jt("portal")+"]"))||[]);if(h){const D=[h,...M,V.current,E.current,$.current.includes("reference")||m?g:null].filter(X=>X!=null),H=u||m?vr(D,k,!k):vr(D);return()=>{H()}}},[r,g,h,u,$,A,m,k]),We(()=>{if(r||!se(F))return;const P=Ae(F),M=Je(P);queueMicrotask(()=>{const D=ae(F),H=L.current,X=(typeof H=="number"?D[H]:H.current)||F,te=ye(F,M);!x&&!te&&y&&Ze(X,{preventScroll:X===F})})},[r,y,F,x,ae,L]),We(()=>{if(r||!F)return;let P=!1;const M=Ae(F),D=Je(M);let X=C.current.openEvent;wn(D);function te(Q){let{open:le,reason:Be,event:oe,nested:he}=Q;le&&(X=oe),Be==="escape-key"&&f.domReference.current&&wn(f.domReference.current),Be==="hover"&&oe.type==="mouseleave"&&(j.current=!0),Be==="outside-press"&&(he?(j.current=!1,P=!0):j.current=!(zi(oe)||Ui(oe)))}return w.on("openchange",te),()=>{w.off("openchange",te);const Q=Je(M),le=ye(h,Q)||B&&Ct(B.nodesRef.current,p).some(he=>{var Z;return ye((Z=he.context)==null?void 0:Z.elements.floating,Q)});(le||X&&["click","mousedown"].includes(X.type))&&f.domReference.current&&wn(f.domReference.current);const oe=yr();I.current&&!j.current&&se(oe)&&(!(oe!==Q&&Q!==M.body)||le)&&Ze(oe,{cancelPrevious:!1,preventScroll:P})}},[r,h,F,I,C,f,w,B,p]),We(()=>{if(!r&&A)return A.setFocusManagerState({modal:u,closeOnFocusOut:d,open:y,onOpenChange:v,refs:f}),()=>{A.setFocusManagerState(null)}},[r,A,u,y,v,f,d]),We(()=>{if(r||!F||typeof MutationObserver!="function"||x)return;const P=()=>{const D=F.getAttribute("tabindex"),H=G(),X=Je(Ae(h)),te=H.indexOf(X);te!==-1&&(T.current=te),$.current.includes("floating")||X!==f.domReference.current&&H.length===0?D!=="0"&&F.setAttribute("tabindex","0"):D!=="-1"&&F.setAttribute("tabindex","-1")};P();const M=new MutationObserver(P);return M.observe(F,{childList:!0,subtree:!0,attributes:!0}),()=>{M.disconnect()}},[r,h,F,f,$,G,x]);function Se(P){return r||!l||!u?null:b.createElement(ns,{ref:P==="start"?V:E,onClick:M=>v(!1,M.nativeEvent)},typeof l=="string"?l:"Dismiss")}const ve=!r&&k&&(u?!m:!0)&&(W||u);return b.createElement(b.Fragment,null,ve&&b.createElement(gr,{"data-type":"inside",ref:A==null?void 0:A.beforeInsideRef,onFocus:P=>{if(u){const D=ae();Ze(o[0]==="reference"?D[0]:D[D.length-1])}else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(j.current=!1,hr(P,A.portalNode)){const D=Qa()||g;D==null||D.focus()}else{var M;(M=A.beforeOutsideRef.current)==null||M.focus()}}}),!m&&Se("start"),n,Se("end"),ve&&b.createElement(gr,{"data-type":"inside",ref:A==null?void 0:A.afterInsideRef,onFocus:P=>{if(u)Ze(ae()[0]);else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(d&&(j.current=!0),hr(P,A.portalNode)){const D=Za()||g;D==null||D.focus()}else{var M;(M=A.afterOutsideRef.current)==null||M.focus()}}}))}function xr(e){return se(e.target)&&e.target.tagName==="BUTTON"}function wr(e){return yo(e)}function os(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:l=!0}=t,d=b.useRef(),y=b.useRef(!1),f=b.useMemo(()=>({onPointerDown(p){d.current=p.pointerType},onMouseDown(p){const v=d.current;p.button===0&&s!=="click"&&(or(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?r(!1,p.nativeEvent,"click"):(p.preventDefault(),r(!0,p.nativeEvent,"click"))))},onClick(p){const v=d.current;if(s==="mousedown"&&d.current){d.current=void 0;return}or(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="click")?r(!1,p.nativeEvent,"click"):r(!0,p.nativeEvent,"click"))},onKeyDown(p){d.current=void 0,!(p.defaultPrevented||!l||xr(p))&&(p.key===" "&&!wr(i)&&(p.preventDefault(),y.current=!0),p.key==="Enter"&&r(!(n&&c),p.nativeEvent,"click"))},onKeyUp(p){p.defaultPrevented||!l||xr(p)||wr(i)||p.key===" "&&y.current&&(y.current=!1,r(!(n&&c),p.nativeEvent,"click"))}}),[o,i,s,u,l,r,n,c]);return b.useMemo(()=>a?{reference:f}:{},[a,f])}const is={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},as={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Cr=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function ss(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:i}=e,{enabled:a=!0,escapeKey:s=!0,outsidePress:c=!0,outsidePressEvent:u="pointerdown",referencePress:l=!1,referencePressEvent:d="pointerdown",ancestorScroll:y=!1,bubbles:f,capture:p}=t,v=Wn(),w=qe(typeof c=="function"?c:()=>!1),C=typeof c=="function"?w:c,S=b.useRef(!1),g=b.useRef(!1),{escapeKey:h,outsidePress:x}=Cr(f),{escapeKey:m,outsidePress:k}=Cr(p),$=qe(E=>{var j;if(!n||!a||!s||E.key!=="Escape")return;const N=(j=i.current.floatingContext)==null?void 0:j.nodeId,T=v?Ct(v.nodesRef.current,N):[];if(!h&&(E.stopPropagation(),T.length>0)){let W=!0;if(T.forEach(Y=>{var F;if((F=Y.context)!=null&&F.open&&!Y.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}r(!1,_i(E)?E.nativeEvent:E,"escape-key")}),L=qe(E=>{var j;const N=()=>{var T;$(E),(T=nt(E))==null||T.removeEventListener("keydown",N)};(j=nt(E))==null||j.addEventListener("keydown",N)}),I=qe(E=>{var j;const N=S.current;S.current=!1;const T=g.current;if(g.current=!1,u==="click"&&T||N||typeof C=="function"&&!C(E))return;const W=nt(E),Y="["+Jt("inert")+"]",F=Ae(o.floating).querySelectorAll(Y);let G=ne(W)?W:null;for(;G&&!_e(G);){const P=He(G);if(_e(P)||!ne(P))break;G=P}if(F.length&&ne(W)&&!Xi(W)&&!ye(W,o.floating)&&Array.from(F).every(P=>!ye(G,P)))return;if(se(W)&&V){const P=W.clientWidth>0&&W.scrollWidth>W.clientWidth,M=W.clientHeight>0&&W.scrollHeight>W.clientHeight;let D=M&&E.offsetX>W.clientWidth;if(M&&Oe(W).direction==="rtl"&&(D=E.offsetX<=W.offsetWidth-W.clientWidth),D||P&&E.offsetY>W.clientHeight)return}const ae=(j=i.current.floatingContext)==null?void 0:j.nodeId,Se=v&&Ct(v.nodesRef.current,ae).some(P=>{var M;return mn(E,(M=P.context)==null?void 0:M.elements.floating)});if(mn(E,o.floating)||mn(E,o.domReference)||Se)return;const ve=v?Ct(v.nodesRef.current,ae):[];if(ve.length>0){let P=!0;if(ve.forEach(M=>{var D;if((D=M.context)!=null&&D.open&&!M.context.dataRef.current.__outsidePressBubbles){P=!1;return}}),!P)return}r(!1,E,"outside-press")}),B=qe(E=>{var j;const N=()=>{var T;I(E),(T=nt(E))==null||T.removeEventListener(u,N)};(j=nt(E))==null||j.addEventListener(u,N)});b.useEffect(()=>{if(!n||!a)return;i.current.__escapeKeyBubbles=h,i.current.__outsidePressBubbles=x;function E(T){r(!1,T,"ancestor-scroll")}const j=Ae(o.floating);s&&j.addEventListener("keydown",m?L:$,m),C&&j.addEventListener(u,k?B:I,k);let N=[];return y&&(ne(o.domReference)&&(N=Ke(o.domReference)),ne(o.floating)&&(N=N.concat(Ke(o.floating))),!ne(o.reference)&&o.reference&&o.reference.contextElement&&(N=N.concat(Ke(o.reference.contextElement)))),N=N.filter(T=>{var W;return T!==((W=j.defaultView)==null?void 0:W.visualViewport)}),N.forEach(T=>{T.addEventListener("scroll",E,{passive:!0})}),()=>{s&&j.removeEventListener("keydown",m?L:$,m),C&&j.removeEventListener(u,k?B:I,k),N.forEach(T=>{T.removeEventListener("scroll",E)})}},[i,o,s,C,u,n,r,y,a,h,x,$,m,L,I,k,B]),b.useEffect(()=>{S.current=!1},[C,u]);const A=b.useMemo(()=>({onKeyDown:$,[is[d]]:E=>{l&&r(!1,E.nativeEvent,"reference-press")}}),[$,r,l,d]),V=b.useMemo(()=>({onKeyDown:$,onMouseDown(){g.current=!0},onMouseUp(){g.current=!0},[as[u]]:()=>{S.current=!0}}),[$,u]);return b.useMemo(()=>a?{reference:A,floating:V}:{},[a,A,V])}function cs(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Bn(),i=b.useRef({}),[a]=b.useState(()=>Ua()),s=Lo()!=null,[c,u]=b.useState(r.reference),l=qe((f,p,v)=>{i.current.openEvent=f?p:void 0,a.emit("openchange",{open:f,event:p,reason:v,nested:s}),n==null||n(f,p,v)}),d=b.useMemo(()=>({setPositionReference:u}),[]),y=b.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return b.useMemo(()=>({dataRef:i,open:t,onOpenChange:l,elements:y,events:a,floatingId:o,refs:d}),[t,l,y,a,o,d])}function ls(e){e===void 0&&(e={});const{nodeId:t}=e,n=cs({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[i,a]=b.useState(null),[s,c]=b.useState(null),l=(o==null?void 0:o.reference)||i,d=b.useRef(null),y=Wn();We(()=>{l&&(d.current=l)},[l]);const f=Fa({...e,elements:{...o,...s&&{reference:s}}}),p=b.useCallback(g=>{const h=ne(g)?{getBoundingClientRect:()=>g.getBoundingClientRect(),contextElement:g}:g;c(h),f.refs.setReference(h)},[f.refs]),v=b.useCallback(g=>{(ne(g)||g===null)&&(d.current=g,a(g)),(ne(f.refs.reference.current)||f.refs.reference.current===null||g!==null&&!ne(g))&&f.refs.setReference(g)},[f.refs]),w=b.useMemo(()=>({...f.refs,setReference:v,setPositionReference:p,domReference:d}),[f.refs,v,p]),C=b.useMemo(()=>({...f.elements,domReference:l}),[f.elements,l]),S=b.useMemo(()=>({...f,...r,refs:w,elements:C,nodeId:t}),[f,w,C,t,r]);return We(()=>{r.dataRef.current.floatingContext=S;const g=y==null?void 0:y.nodesRef.current.find(h=>h.id===t);g&&(g.context=S)}),b.useMemo(()=>({...f,context:S,refs:w,elements:C}),[f,w,C,S])}const Sr="active",kr="selected";function Cn(e,t,n){const r=new Map,o=n==="item";let i=e;if(o&&e){const{[Sr]:a,[kr]:s,...c}=e;i=c}return{...n==="floating"&&{tabIndex:-1},...i,...t.map(a=>{const s=a?a[n]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(c=>{let[u,l]=c;if(!(o&&[Sr,kr].includes(u)))if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof l=="function"){var d;(d=r.get(u))==null||d.push(l),a[u]=function(){for(var y,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(y=r.get(u))==null?void 0:y.map(w=>w(...p)).find(w=>w!==void 0)}}}else a[u]=l}),a),{})}}function us(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),n=e.map(s=>s==null?void 0:s.floating),r=e.map(s=>s==null?void 0:s.item),o=b.useCallback(s=>Cn(s,e,"reference"),t),i=b.useCallback(s=>Cn(s,e,"floating"),n),a=b.useCallback(s=>Cn(s,e,"item"),r);return b.useMemo(()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:a}),[o,i,a])}const fs=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function ds(e,t){var n;t===void 0&&(t={});const{open:r,floatingId:o}=e,{enabled:i=!0,role:a="dialog"}=t,s=(n=fs.get(a))!=null?n:a,c=Bn(),l=Lo()!=null,d=b.useMemo(()=>s==="tooltip"||a==="label"?{["aria-"+(a==="label"?"labelledby":"describedby")]:r?o:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":r?o:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:c},...s==="menu"&&l&&{role:"menuitem"},...a==="select"&&{"aria-autocomplete":"none"},...a==="combobox"&&{"aria-autocomplete":"list"}},[s,o,l,r,c,a]),y=b.useMemo(()=>{const p={id:o,...s&&{role:s}};return s==="tooltip"||a==="label"?p:{...p,...s==="menu"&&{"aria-labelledby":c}}},[s,o,c,a]),f=b.useCallback(p=>{let{active:v,selected:w}=p;const C={role:"option",...v&&{id:o+"-option"}};switch(a){case"select":return{...C,"aria-selected":v&&w};case"combobox":return{...C,...v&&{"aria-selected":!0}}}return{}},[o,a]);return b.useMemo(()=>i?{reference:d,floating:y,item:f}:{},[i,d,y,f])}const ps=z.div`
  z-index: 1;
`,Er=z.button`
  ${sn}

  @media (max-width: ${pe.breakpoint.maxMobile}) {
    max-width: 220px;
    font-size: 12px;
  }

  color: ${({theme:e})=>e.global.text.color.white};

  &.logout {
    color: ${({theme:e})=>e.textColor};
  }

  &:hover,
  &:focus,
  &:active,
  &.open {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,vs=z(ut)`
  ${sn}

  padding-right: 0;

  color: ${({theme:e})=>e.global.text.color.white};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,hs=z.p`
  margin-bottom: 0;

  @media (max-width: ${pe.breakpoint.maxMobile}) {
    max-width: 220px;
    overflow: hidden;
  }
`,Rr=z.svg`
  width: 1.5rem;
  height: 1.5rem;

  fill: transparent;
  stroke: currentColor;

  @media (min-width: ${pe.breakpoint.mobile}) {
    width: 1.75rem;
    height: 1.75rem;
  }
`,ms=z.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);
  }
`,gs=z.ul`
  padding: ${({theme:e})=>e.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({theme:e})=>e.mainBgColor};
`,Or=z.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(3)};
  }
`,bs=z(ut)`
  ${sn}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,$r=z.svg`
  width: 1rem;
  height: 1rem;

  fill: transparent;
  stroke: currentColor;
`,ys=()=>{const e=Pt(cn),t=bi(),[,{isLoading:n}]=yi({fixedCacheKey:"login-user"}),[,{isLoading:r}]=xi({fixedCacheKey:"register-user"}),[o]=wi(),i=async()=>{await o(),t("/login"),s(!1)},[a,s]=b.useState(!1),{refs:c,floatingStyles:u,context:l}=ls({open:a,onOpenChange:s,whileElementsMounted:ja}),d=os(l),y=ss(l),f=ds(l,{role:"menu"}),{getReferenceProps:p,getFloatingProps:v}=us([d,y,f]),w=Bn();return R.jsxs(R.Fragment,{children:[e&&R.jsxs(Er,{className:a?"open":"",ref:c.setReference,...p(),children:[R.jsx(hs,{children:e.email}),R.jsx(Rr,{children:R.jsx("use",{href:`${tt}#user`})}),R.jsx(ms,{className:a?"open":"",children:R.jsx("use",{href:`${tt}#arrow`})})]}),!e&&R.jsxs(vs,{to:"/login",children:[n||r?R.jsx(Ci,{}):R.jsx("p",{children:"Log in"}),R.jsx(Rr,{children:R.jsx("use",{href:`${tt}#user`})})]}),a&&R.jsx(rs,{context:l,modal:!1,initialFocus:-1,children:R.jsx(ps,{ref:c.setFloating,style:u,"aria-labelledby":w,...v(),children:R.jsxs(gs,{children:[R.jsx(Or,{role:"menuitem",children:R.jsxs(Er,{onClick:i,className:"logout",children:[R.jsx($r,{children:R.jsx("use",{href:`${tt}#logout`})}),"Log out"]})}),R.jsx(Or,{role:"menuitem",children:R.jsxs(bs,{to:"/settings",children:[R.jsx($r,{children:R.jsx("use",{href:`${tt}#settings`})}),"Settings"]})})]})})})]})},xs="/planner/assets/logo-placeholder4-BQQMUQJQ.png",ws=({handleClick:e,mobileMenu:t,setHeaderHeight:n,profile:r})=>{const o=ho(),i=b.useRef(null);return b.useEffect(()=>{i.current&&n(i.current.offsetHeight)},[n]),R.jsx(ji,{ref:i,children:R.jsxs(Ni,{children:[o&&R.jsx(Ai,{onClick:()=>e(),mobileMenu:t}),!o&&R.jsx(Fi,{src:xs,alt:"Logo",width:"130"}),R.jsxs(Bi,{children:[R.jsx(rr,{className:r?"":"is-not-login",children:R.jsx(ys,{})}),R.jsx(rr,{children:R.jsx(Di,{})})]})]})})},Cs=z.div`
  padding-top: ${({theme:e})=>e.global.spacing(16)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  background-color: ${({theme:e})=>e.secondaryBgColor};

  @media (min-width: ${pe.breakpoint.tablet}) {
    padding-top: ${({theme:e})=>e.global.spacing(2)};
  }
`,Ss=z.ul`
  ${an}
`,Sn=z.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(2)};
  }
`;z.img`
  border-radius: 50%;
`;const ks=z.svg`
  fill: ${({theme:e})=>e.textColorSecondary};
  stroke: ${({theme:e})=>e.textColorSecondary};
  width: 7rem;
  height: 7rem;
`,Tr=z.p`
  color: ${({theme:e})=>e.textColorSecondary};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};
  font-weight: ${({theme:e})=>e.global.text.fontWeight.m};
`,Es=()=>{const e=Pt(cn);return R.jsx(Cs,{children:R.jsxs(Ss,{children:[R.jsx(Sn,{children:R.jsx(ks,{children:R.jsx("use",{href:`${tt}#user-avatar`})})}),R.jsx(Sn,{children:R.jsx(Tr,{children:e==null?void 0:e.email.split("@")[0]})}),R.jsx(Sn,{children:R.jsx(Tr,{children:e==null?void 0:e.email})})]})})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xe.apply(this,arguments)};function at(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function de(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function Tn(){return Tn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tn.apply(this,arguments)}function Hn(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Rs=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Os=Hn(function(e){return Rs.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function $s(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ts(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ps=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ts(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=$s(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),fe="-ms-",tn="-moz-",K="-webkit-",Fo="comm",Vn="rule",zn="decl",As="@import",Bo="@keyframes",Is=Math.abs,fn=String.fromCharCode,Ms=Object.assign;function Ls(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Wo(e){return e.trim()}function Ds(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,n){return e.replace(t,n)}function Pn(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Et(e,t,n){return e.slice(t,n)}function Le(e){return e.length}function Un(e){return e.length}function Ft(e,t){return t.push(e),e}function js(e,t){return e.map(t).join("")}var dn=1,vt=1,Ho=0,be=0,re=0,yt="";function pn(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:dn,column:vt,length:a,return:""}}function xt(e,t){return Ms(pn("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ns(){return re}function Fs(){return re=be>0?ue(yt,--be):0,vt--,re===10&&(vt=1,dn--),re}function Ce(){return re=be<Ho?ue(yt,be++):0,vt++,re===10&&(vt=1,dn++),re}function je(){return ue(yt,be)}function Vt(){return be}function It(e,t){return Et(yt,e,t)}function Rt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vo(e){return dn=vt=1,Ho=Le(yt=e),be=0,[]}function zo(e){return yt="",e}function zt(e){return Wo(It(be-1,An(e===91?e+2:e===40?e+1:e)))}function Bs(e){for(;(re=je())&&re<33;)Ce();return Rt(e)>2||Rt(re)>3?"":" "}function Ws(e,t){for(;--t&&Ce()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return It(e,Vt()+(t<6&&je()==32&&Ce()==32))}function An(e){for(;Ce();)switch(re){case e:return be;case 34:case 39:e!==34&&e!==39&&An(re);break;case 40:e===41&&An(e);break;case 92:Ce();break}return be}function Hs(e,t){for(;Ce()&&e+re!==57;)if(e+re===84&&je()===47)break;return"/*"+It(t,be-1)+"*"+fn(e===47?e:Ce())}function Vs(e){for(;!Rt(je());)Ce();return It(e,be)}function Pr(e){return zo(Ut("",null,null,null,[""],e=Vo(e),0,[0],e))}function Ut(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,d=a,y=0,f=0,p=0,v=1,w=1,C=1,S=0,g="",h=o,x=i,m=r,k=g;w;)switch(p=S,S=Ce()){case 40:if(p!=108&&ue(k,d-1)==58){Pn(k+=_(zt(S),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:k+=zt(S);break;case 9:case 10:case 13:case 32:k+=Bs(p);break;case 92:k+=Ws(Vt()-1,7);continue;case 47:switch(je()){case 42:case 47:Ft(zs(Hs(Ce(),Vt()),t,n),c);break;default:k+="/"}break;case 123*v:s[u++]=Le(k)*C;case 125*v:case 59:case 0:switch(S){case 0:case 125:w=0;case 59+l:f>0&&Le(k)-d&&Ft(f>32?Ir(k+";",r,n,d-1):Ir(_(k," ","")+";",r,n,d-2),c);break;case 59:k+=";";default:if(Ft(m=Ar(k,t,n,u,l,o,s,g,h=[],x=[],d),i),S===123)if(l===0)Ut(k,t,m,m,h,i,d,s,x);else switch(y===99&&ue(k,3)===110?100:y){case 100:case 109:case 115:Ut(e,m,m,r&&Ft(Ar(e,m,m,0,0,o,s,g,o,h=[],d),x),o,x,d,s,r?h:x);break;default:Ut(k,m,m,m,[""],x,0,s,x)}}u=l=f=0,v=C=1,g=k="",d=a;break;case 58:d=1+Le(k),f=p;default:if(v<1){if(S==123)--v;else if(S==125&&v++==0&&Fs()==125)continue}switch(k+=fn(S),S*v){case 38:C=l>0?1:(k+="\f",-1);break;case 44:s[u++]=(Le(k)-1)*C,C=1;break;case 64:je()===45&&(k+=zt(Ce())),y=je(),l=d=Le(g=k+=Vs(Vt())),S++;break;case 45:p===45&&Le(k)==2&&(v=0)}}return i}function Ar(e,t,n,r,o,i,a,s,c,u,l){for(var d=o-1,y=o===0?i:[""],f=Un(y),p=0,v=0,w=0;p<r;++p)for(var C=0,S=Et(e,d+1,d=Is(v=a[p])),g=e;C<f;++C)(g=Wo(v>0?y[C]+" "+S:_(S,/&\f/g,y[C])))&&(c[w++]=g);return pn(e,t,n,o===0?Vn:s,c,u,l)}function zs(e,t,n){return pn(e,t,n,Fo,fn(Ns()),Et(e,2,-2),0)}function Ir(e,t,n,r){return pn(e,t,n,zn,Et(e,0,r),Et(e,r+1,-1),r)}function rt(e,t){for(var n="",r=Un(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Mr(e,t,n,r){switch(e.type){case As:case zn:return e.return=e.return||e.value;case Fo:return"";case Bo:return e.return=e.value+"{"+rt(e.children,r)+"}";case Vn:e.value=e.props.join(",")}return Le(n=rt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Lr(e){var t=Un(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function Us(e){return function(t){t.root||(t=t.return)&&e(t)}}var qs=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}},Ks=function(t,n,r){for(var o=0,i=0;o=i,i=je(),o===38&&i===12&&(n[r]=1),!Rt(i);)Ce();return It(t,be)},_s=function(t,n){var r=-1,o=44;do switch(Rt(o)){case 0:o===38&&je()===12&&(n[r]=1),t[r]+=Ks(be-1,n,r);break;case 2:t[r]+=zt(o);break;case 4:if(o===44){t[++r]=je()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=fn(o)}while(o=Ce());return t},Xs=function(t,n){return zo(_s(Vo(t),n))},Dr=new WeakMap,Ys=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Dr.get(r))&&!o){Dr.set(t,!0);for(var i=[],a=Xs(n,i),s=r.props,c=0,u=0;c<a.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},Gs=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Uo(e,t){switch(Ls(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+tn+e+fe+e+e;case 6828:case 4268:return K+e+fe+e+e;case 6165:return K+e+fe+"flex-"+e+e;case 5187:return K+e+_(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return K+e+fe+"flex-item-"+_(e,/flex-|-self/,"")+e;case 4675:return K+e+fe+"flex-line-pack"+_(e,/align-content|flex-|-self/,"")+e;case 5548:return K+e+fe+_(e,"shrink","negative")+e;case 5292:return K+e+fe+_(e,"basis","preferred-size")+e;case 6060:return K+"box-"+_(e,"-grow","")+K+e+fe+_(e,"grow","positive")+e;case 4554:return K+_(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Le(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+tn+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pn(e,"stretch")?Uo(_(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,Le(e)-3-(~Pn(e,"!important")&&10))){case 107:return _(e,":",":"+K)+e;case 101:return _(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+K+(ue(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+fe+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return K+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return K+e+fe+e+e}return e}var Qs=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case zn:t.return=Uo(t.value,t.length);break;case Bo:return rt([xt(t,{value:_(t.value,"@","@"+K)})],o);case Vn:if(t.length)return js(t.props,function(i){switch(Ds(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return rt([xt(t,{props:[_(i,/:(read-\w+)/,":"+tn+"$1")]})],o);case"::placeholder":return rt([xt(t,{props:[_(i,/:(plac\w+)/,":"+K+"input-$1")]}),xt(t,{props:[_(i,/:(plac\w+)/,":"+tn+"$1")]}),xt(t,{props:[_(i,/:(plac\w+)/,fe+"input-$1")]})],o)}return""})}},qt=typeof document<"u",Zs=qt?void 0:qs(function(){return Hn(function(){var e={};return function(t){return e[t]}})}),Js=[Qs],qo=function(t){var n=t.key;if(qt&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var x=h.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||Js,i={},a,s=[];qt&&(a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var x=h.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)i[x[m]]=!0;s.push(h)}));var c,u=[Ys,Gs];if(qt){var l,d=[Mr,Us(function(h){l.insert(h)})],y=Lr(u.concat(o,d)),f=function(x){return rt(Pr(x),y)};c=function(x,m,k,$){l=k,f(x?x+"{"+m.styles+"}":m.styles),$&&(g.inserted[m.name]=!0)}}else{var p=[Mr],v=Lr(u.concat(o,p)),w=function(x){return rt(Pr(x),v)},C=Zs(o)(n),S=function(x,m){var k=m.name;return C[k]===void 0&&(C[k]=w(x?x+"{"+m.styles+"}":m.styles)),C[k]};c=function(x,m,k,$){var L=m.name,I=S(x,m);if(g.compat===void 0)return $&&(g.inserted[L]=!0),I;if($)g.inserted[L]=I;else return I}}var g={key:n,sheet:new Ps({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(s),g},ec=typeof document<"u",jr=function(t){return t()},tc=b.useInsertionEffect?b.useInsertionEffect:!1,nc=ec&&tc||jr,rc=typeof document<"u",nn=b.createContext(typeof HTMLElement<"u"?qo({key:"css"}):null);nn.Provider;var Ko=function(t){return b.forwardRef(function(n,r){var o=b.useContext(nn);return t(n,o,r)})};rc||(Ko=function(t){return function(n){var r=b.useContext(nn);return r===null?(r=qo({key:"css"}),b.createElement(nn.Provider,{value:r},t(n,r))):t(n,r)}});var oc=b.createContext({}),In=typeof document<"u";function ic(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var _o=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||In===!1&&t.compat!==void 0)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},ac=function(t,n,r){_o(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",a=n;do{var s=t.insert(n===a?"."+o:"",a,t.sheet,!0);!In&&s!==void 0&&(i+=s),a=a.next}while(a!==void 0);if(!In&&i.length!==0)return i}};function sc(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var cc={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lc=/[A-Z]|^ms/g,uc=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Xo=function(t){return t.charCodeAt(1)===45},Nr=function(t){return t!=null&&typeof t!="boolean"},kn=Hn(function(e){return Xo(e)?e:e.replace(lc,"-$&").toLowerCase()}),Fr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(uc,function(r,o,i){return De={name:o,styles:i,next:De},o})}return cc[t]!==1&&!Xo(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ot(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return De={name:n.name,styles:n.styles,next:De},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)De={name:r.name,styles:r.styles,next:De},r=r.next;var o=n.styles+";";return o}return fc(e,t,n)}case"function":{if(e!==void 0){var i=De,a=n(e);return De=i,Ot(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function fc(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ot(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":Nr(a)&&(r+=kn(i)+":"+Fr(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Nr(a[s])&&(r+=kn(i)+":"+Fr(i,a[s])+";");else{var c=Ot(e,t,a);switch(i){case"animation":case"animationName":{r+=kn(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Br=/label:\s*([^\s;\n{]+)\s*(;|$)/g,De,dc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";De=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Ot(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Ot(r,n,t[s]),o&&(i+=a[s]);Br.lastIndex=0;for(var c="",u;(u=Br.exec(i))!==null;)c+="-"+u[1];var l=sc(i)+c;return{name:l,styles:i,next:De}},pc=Os,vc=function(t){return t!=="theme"},Wr=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?pc:vc},Hr=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},hc=typeof document<"u",mc=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;_o(n,r,o);var i=nc(function(){return ac(n,r,o)});if(!hc&&i!==void 0){for(var a,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return b.createElement("style",(a={},a["data-emotion"]=n.key+" "+s,a.dangerouslySetInnerHTML={__html:i},a.nonce=n.sheet.nonce,a))}return null},gc=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Hr(t,n,r),c=s||Wr(o),u=!c("as");return function(){var l=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)d.push.apply(d,l);else{d.push(l[0][0]);for(var y=l.length,f=1;f<y;f++)d.push(l[f],l[0][f])}var p=Ko(function(v,w,C){var S=u&&v.as||o,g="",h=[],x=v;if(v.theme==null){x={};for(var m in v)x[m]=v[m];x.theme=b.useContext(oc)}typeof v.className=="string"?g=ic(w.registered,h,v.className):v.className!=null&&(g=v.className+" ");var k=dc(d.concat(h),w.registered,x);g+=w.key+"-"+k.name,a!==void 0&&(g+=" "+a);var $=u&&s===void 0?Wr(S):c,L={};for(var I in v)u&&I==="as"||$(I)&&(L[I]=v[I]);return L.className=g,L.ref=C,b.createElement(b.Fragment,null,b.createElement(mc,{cache:w,serialized:k,isStringTag:typeof S=="string"}),b.createElement(S,L))});return p.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(v,w){return e(v,Tn({},n,w,{shouldForwardProp:Hr(p,w,!0)})).apply(void 0,d)},p}},bc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ce=gc.bind();bc.forEach(function(e){ce[e]=ce(e)});var Yo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Yo);var ie=Yo.exports,yc=O.createContext(void 0),xc=function(){var e=O.useContext(yc);return e},wc=function(e){var t=O.useState(!!e&&typeof window<"u"&&window.matchMedia(e).matches),n=t[0],r=t[1];return O.useEffect(function(){if(e){var o=window.matchMedia(e),i=function(){o.matches!==n&&r(o.matches)};return i(),o.addEventListener("change",i),function(){return o.removeEventListener("change",i)}}},[n,e]),n},J={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},q={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},Cc=ce.div(Vr||(Vr=de([`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`],[`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: rgb(0, 0, 0, 0.3);
`]))),Vr,Sc={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},kc=ce.aside(zr||(zr=de([`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: `,`;

  width: `,`;
  min-width: `,`;

  &.`,` {
    width: `,`;
    min-width: `,`;
  }

  &.`,` {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }

  &.`,` {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    `,`

    &.`,` {
      `,`
    }

    &.`,` {
      `,`
    }

    &.`,` {
      right: -`,`;

      &.`,` {
        right: -`,`;
      }

      &.`,` {
        right: 0;
      }
    }
  }

  `,`
`],[`
  position: relative;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #efefef;

  transition: `,`;

  width: `,`;
  min-width: `,`;

  &.`,` {
    width: `,`;
    min-width: `,`;
  }

  &.`,` {
    direction: rtl;
    border-right-width: none;
    border-left-width: 1px;
    border-right-style: none;
    border-left-style: solid;
  }

  &.`,` {
    position: fixed;
    height: 100%;
    top: 0px;
    z-index: 100;

    `,`

    &.`,` {
      `,`
    }

    &.`,` {
      `,`
    }

    &.`,` {
      right: -`,`;

      &.`,` {
        right: -`,`;
      }

      &.`,` {
        right: 0;
      }
    }
  }

  `,`
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},J.rtl,J.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},J.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},J.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},J.rtl,function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},J.toggled,function(e){var t=e.rootStyles;return t}),Ec=ce.div(Ur||(Ur=de([`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  `,`
`],[`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;

  `,`
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),Rc=ce.img(qr||(qr=de([`
  &.`,` {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`],[`
  &.`,` {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
`])),J.image),vn=O.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),Oc=O.forwardRef(function(e,t){var n,r=e.collapsed,o=e.toggled,i=e.onBackdropClick,a=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,d=e.defaultCollapsed,y=e.className,f=e.children,p=e.breakPoint,v=e.customBreakPoint,w=e.backgroundColor,C=w===void 0?"rgb(249, 249, 249, 0.7)":w,S=e.transitionDuration,g=S===void 0?300:S,h=e.image,x=e.rtl,m=e.rootStyles,k=at(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),$=function(){if(v)return"(max-width: ".concat(v,")");if(p)return["xs","sm","md","lg","xl","xxl"].includes(p)?"(max-width: ".concat(Sc[p],")"):p==="always"||p==="all"?(p==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(p,")")},L=O.useRef();L.current=function(W){a==null||a(W)};var I=wc($()),B=O.useState(!1),A=B[0],V=B[1],E=xc(),j=r??(!A&&d?!0:E==null?void 0:E.collapsed),N=o??(E==null?void 0:E.toggled),T=function(){i==null||i(),E==null||E.updateSidebarState({toggled:!1})};return O.useEffect(function(){var W;(W=L.current)===null||W===void 0||W.call(L,I)},[I]),O.useEffect(function(){E==null||E.updateSidebarState({broken:I,rtl:x,transitionDuration:g})},[I,E==null?void 0:E.updateSidebarState,x,g]),O.useEffect(function(){A||(E==null||E.updateSidebarState({collapsed:d}),V(!0))},[d,A,E==null?void 0:E.updateSidebarState]),O.createElement(vn.Provider,{value:{collapsed:j,toggled:N,rtl:x,transitionDuration:g}},O.createElement(kc,xe({ref:t,"data-testid":"".concat(J.root,"-test-id"),rtl:x,rootStyles:m,width:c,collapsedWidth:l,transitionDuration:g,className:ie(J.root,(n={},n[J.collapsed]=j,n[J.toggled]=N,n[J.broken]=I,n[J.rtl]=x,n),y)},k),O.createElement(Ec,{"data-testid":"".concat(J.container,"-test-id"),className:J.container,backgroundColor:C},f),h&&O.createElement(Rc,{"data-testid":"".concat(J.image,"-test-id"),src:h,alt:"sidebar background",className:J.image}),I&&N&&O.createElement(Cc,{"data-testid":"".concat(J.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:T,onKeyPress:T,className:J.backdrop})))}),zr,Ur,qr,Go=ce.ul(Kr||(Kr=de([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),Kr,$c=ce.nav(_r||(_r=de([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),q.root,function(e){var t=e.rootStyles;return t}),Qo=O.createContext(void 0),rn=O.createContext(0),Tc=function(e,t){var n=e.children,r=e.className,o=e.transitionDuration,i=o===void 0?300:o,a=e.closeOnClick,s=a===void 0?!1:a,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,d=at(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),y=O.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return O.createElement(Qo.Provider,{value:y},O.createElement(rn.Provider,{value:0},O.createElement($c,xe({ref:t,className:ie(q.root,r),rootStyles:c},d),O.createElement(Go,null,n))))},Pc=O.forwardRef(Tc),_r,qn=function(){var e=O.useContext(Qo);if(e===void 0)throw new Error("Menu Component is required!");return e},Ac=ce.div(Xr||(Xr=de([`
  height: 0px;
  overflow: hidden;
  z-index: 999;
  transition: height `,`ms;
  box-sizing: border-box;
  background-color: white;

  `,`

  `,`

  `,`;

  `,`;
`],[`
  height: 0px;
  overflow: hidden;
  z-index: 999;
  transition: height `,`ms;
  box-sizing: border-box;
  background-color: white;

  `,`

  `,`

  `,`;

  `,`;
`])),function(e){var t=e.transitionDuration;return t},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n&&`
     background-color: white;
     box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
     `},function(e){var t=e.defaultOpen;return t&&"height: auto;display: block;"},function(e){var t=e.collapsed,n=e.firstLevel,r=e.openWhenCollapsed;return t&&n?`
      position: fixed;
      padding-left: 0px;
      width: 200px;
      border-radius: 4px;
      height: auto!important;
      display: block!important;     
      transition: none!important;     
      visibility: `.concat(r?"visible":"hidden",`;
     `):`
      position: static!important;
      transform: none!important;
      `},function(e){var t=e.rootStyles;return t}),Ic=function(e,t){var n=e.children,r=e.open,o=e.openWhenCollapsed,i=e.firstLevel,a=e.collapsed,s=e.defaultOpen,c=at(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=qn().transitionDuration,l=O.useState(s)[0];return O.createElement(Ac,xe({"data-testid":"".concat(q.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:a,open:r,openWhenCollapsed:o,transitionDuration:u,defaultOpen:l},c),O.createElement(Go,null,n))},Mc=O.forwardRef(Ic),Xr,Zo=ce.span(Yr||(Yr=de([`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  `,`;
`],[`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  `,`;
`])),function(e){var t=e.rootStyles;return t}),Yr,Jo=ce.span(Gr||(Gr=de([`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  `,`

  `,`;
`],[`
  width: 35px;
  min-width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  `,`

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),Gr,ei=ce.span(Qr||(Qr=de([`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 5px;":"margin-right: 5px;"},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Qr,ti=ce.span(Zr||(Zr=de([`
  margin-right: 5px;
  margin-left: 5px;
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  margin-right: 5px;
  margin-left: 5px;
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Zr,Lc=ce.span(Jr||(Jr=de([`
  `,`

  `,`;
`],[`
  `,`

  `,`;
`])),function(e){var t=e.collapsed,n=e.level,r=e.rtl;return t&&n===0&&`
    position: absolute;
    `.concat(r?"left: 10px;":"right: 10px;",`
    top: 50%;
    transform: translateY(-50%);
    
    `)},function(e){var t=e.rootStyles;return t}),Dc=ce.span(eo||(eo=de([`
  display: inline-block;
  transition: transform 0.3s;
  `,`

  width: 5px;
  height: 5px;
  transform: rotate(`,`);
`],[`
  display: inline-block;
  transition: transform 0.3s;
  `,`

  width: 5px;
  height: 5px;
  transform: rotate(`,`);
`])),function(e){var t=e.rtl;return t?`
          border-left: 2px solid currentcolor;
          border-top: 2px solid currentcolor;
        `:` border-right: 2px solid currentcolor;
          border-bottom: 2px solid currentcolor;
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),jc=ce.span(to||(to=de([`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`],[`
  width: 5px;
  height: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
`]))),Jr,eo,to,me="top",$e="bottom",Te="right",ge="left",Kn="auto",Mt=[me,$e,Te,ge],ht="start",$t="end",Nc="clippingParents",ni="viewport",wt="popper",Fc="reference",no=Mt.reduce(function(e,t){return e.concat([t+"-"+ht,t+"-"+$t])},[]),ri=[].concat(Mt,[Kn]).reduce(function(e,t){return e.concat([t,t+"-"+ht,t+"-"+$t])},[]),Bc="beforeRead",Wc="read",Hc="afterRead",Vc="beforeMain",zc="main",Uc="afterMain",qc="beforeWrite",Kc="write",_c="afterWrite",Xc=[Bc,Wc,Hc,Vc,zc,Uc,qc,Kc,_c];function Fe(e){return e?(e.nodeName||"").toLowerCase():null}function Pe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function st(e){var t=Pe(e).Element;return e instanceof t||e instanceof Element}function Re(e){var t=Pe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _n(e){if(typeof ShadowRoot>"u")return!1;var t=Pe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Yc(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!Re(i)||!Fe(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function Gc(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(c,u){return c[u]="",c},{});!Re(o)||!Fe(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}var Qc={name:"applyStyles",enabled:!0,phase:"write",fn:Yc,effect:Gc,requires:["computeStyles"]};function Ne(e){return e.split("-")[0]}var ot=Math.max,on=Math.min,mt=Math.round;function Mn(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function oi(){return!/^((?!chrome|android).)*safari/i.test(Mn())}function gt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&Re(e)&&(o=e.offsetWidth>0&&mt(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&mt(r.height)/e.offsetHeight||1);var a=st(e)?Pe(e):window,s=a.visualViewport,c=!oi()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/o,l=(r.top+(c&&s?s.offsetTop:0))/i,d=r.width/o,y=r.height/i;return{width:d,height:y,top:l,right:u+d,bottom:l+y,left:u,x:u,y:l}}function Xn(e){var t=gt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function ii(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_n(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ve(e){return Pe(e).getComputedStyle(e)}function Zc(e){return["table","td","th"].indexOf(Fe(e))>=0}function Ge(e){return((st(e)?e.ownerDocument:e.document)||window.document).documentElement}function hn(e){return Fe(e)==="html"?e:e.assignedSlot||e.parentNode||(_n(e)?e.host:null)||Ge(e)}function ro(e){return!Re(e)||Ve(e).position==="fixed"?null:e.offsetParent}function Jc(e){var t=/firefox/i.test(Mn()),n=/Trident/i.test(Mn());if(n&&Re(e)){var r=Ve(e);if(r.position==="fixed")return null}var o=hn(e);for(_n(o)&&(o=o.host);Re(o)&&["html","body"].indexOf(Fe(o))<0;){var i=Ve(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Lt(e){for(var t=Pe(e),n=ro(e);n&&Zc(n)&&Ve(n).position==="static";)n=ro(n);return n&&(Fe(n)==="html"||Fe(n)==="body"&&Ve(n).position==="static")?t:n||Jc(e)||t}function Yn(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function St(e,t,n){return ot(e,on(t,n))}function el(e,t,n){var r=St(e,t,n);return r>n?n:r}function ai(){return{top:0,right:0,bottom:0,left:0}}function si(e){return Object.assign({},ai(),e)}function ci(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var tl=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,si(typeof t!="number"?t:ci(t,Mt))};function nl(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Ne(n.placement),c=Yn(s),u=[ge,Te].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var d=tl(o.padding,n),y=Xn(i),f=c==="y"?me:ge,p=c==="y"?$e:Te,v=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],w=a[c]-n.rects.reference[c],C=Lt(i),S=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,g=v/2-w/2,h=d[f],x=S-y[l]-d[p],m=S/2-y[l]/2+g,k=St(h,m,x),$=c;n.modifiersData[r]=(t={},t[$]=k,t.centerOffset=k-m,t)}}function rl(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||ii(t.elements.popper,o)&&(t.elements.arrow=o))}var ol={name:"arrow",enabled:!0,phase:"main",fn:nl,effect:rl,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function bt(e){return e.split("-")[1]}var il={top:"auto",right:"auto",bottom:"auto",left:"auto"};function al(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:mt(t*o)/o||0,y:mt(n*o)/o||0}}function oo(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,y=a.x,f=y===void 0?0:y,p=a.y,v=p===void 0?0:p,w=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=w.x,v=w.y;var C=a.hasOwnProperty("x"),S=a.hasOwnProperty("y"),g=ge,h=me,x=window;if(u){var m=Lt(n),k="clientHeight",$="clientWidth";if(m===Pe(n)&&(m=Ge(n),Ve(m).position!=="static"&&s==="absolute"&&(k="scrollHeight",$="scrollWidth")),m=m,o===me||(o===ge||o===Te)&&i===$t){h=$e;var L=d&&m===x&&x.visualViewport?x.visualViewport.height:m[k];v-=L-r.height,v*=c?1:-1}if(o===ge||(o===me||o===$e)&&i===$t){g=Te;var I=d&&m===x&&x.visualViewport?x.visualViewport.width:m[$];f-=I-r.width,f*=c?1:-1}}var B=Object.assign({position:s},u&&il),A=l===!0?al({x:f,y:v}):{x:f,y:v};if(f=A.x,v=A.y,c){var V;return Object.assign({},B,(V={},V[h]=S?"0":"",V[g]=C?"0":"",V.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",V))}return Object.assign({},B,(t={},t[h]=S?v+"px":"",t[g]=C?f+"px":"",t.transform="",t))}function sl(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:Ne(t.placement),variation:bt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,oo(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,oo(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var cl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:sl,data:{}},Bt={passive:!0};function ll(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,c=Pe(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,Bt)}),s&&c.addEventListener("resize",n.update,Bt),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,Bt)}),s&&c.removeEventListener("resize",n.update,Bt)}}var ul={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ll,data:{}},fl={left:"right",right:"left",bottom:"top",top:"bottom"};function Kt(e){return e.replace(/left|right|bottom|top/g,function(t){return fl[t]})}var dl={start:"end",end:"start"};function io(e){return e.replace(/start|end/g,function(t){return dl[t]})}function Gn(e){var t=Pe(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Qn(e){return gt(Ge(e)).left+Gn(e).scrollLeft}function pl(e,t){var n=Pe(e),r=Ge(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=oi();(u||!u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+Qn(e),y:c}}function vl(e){var t,n=Ge(e),r=Gn(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=ot(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ot(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Qn(e),c=-r.scrollTop;return Ve(o||n).direction==="rtl"&&(s+=ot(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function Zn(e){var t=Ve(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function li(e){return["html","body","#document"].indexOf(Fe(e))>=0?e.ownerDocument.body:Re(e)&&Zn(e)?e:li(hn(e))}function kt(e,t){var n;t===void 0&&(t=[]);var r=li(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=Pe(r),a=o?[i].concat(i.visualViewport||[],Zn(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(kt(hn(a)))}function Ln(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function hl(e,t){var n=gt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ao(e,t,n){return t===ni?Ln(pl(e,n)):st(t)?hl(t,n):Ln(vl(Ge(e)))}function ml(e){var t=kt(hn(e)),n=["absolute","fixed"].indexOf(Ve(e).position)>=0,r=n&&Re(e)?Lt(e):e;return st(r)?t.filter(function(o){return st(o)&&ii(o,r)&&Fe(o)!=="body"}):[]}function gl(e,t,n,r){var o=t==="clippingParents"?ml(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(c,u){var l=ao(e,u,r);return c.top=ot(l.top,c.top),c.right=on(l.right,c.right),c.bottom=on(l.bottom,c.bottom),c.left=ot(l.left,c.left),c},ao(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ui(e){var t=e.reference,n=e.element,r=e.placement,o=r?Ne(r):null,i=r?bt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case me:c={x:a,y:t.y-n.height};break;case $e:c={x:a,y:t.y+t.height};break;case Te:c={x:t.x+t.width,y:s};break;case ge:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?Yn(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case ht:c[u]=c[u]-(t[l]/2-n[l]/2);break;case $t:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function Tt(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?Nc:s,u=n.rootBoundary,l=u===void 0?ni:u,d=n.elementContext,y=d===void 0?wt:d,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,w=v===void 0?0:v,C=si(typeof w!="number"?w:ci(w,Mt)),S=y===wt?Fc:wt,g=e.rects.popper,h=e.elements[p?S:y],x=gl(st(h)?h:h.contextElement||Ge(e.elements.popper),c,l,a),m=gt(e.elements.reference),k=ui({reference:m,element:g,strategy:"absolute",placement:o}),$=Ln(Object.assign({},g,k)),L=y===wt?$:m,I={top:x.top-L.top+C.top,bottom:L.bottom-x.bottom+C.bottom,left:x.left-L.left+C.left,right:L.right-x.right+C.right},B=e.modifiersData.offset;if(y===wt&&B){var A=B[o];Object.keys(I).forEach(function(V){var E=[Te,$e].indexOf(V)>=0?1:-1,j=[me,$e].indexOf(V)>=0?"y":"x";I[V]+=A[j]*E})}return I}function bl(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?ri:c,l=bt(r),d=l?s?no:no.filter(function(p){return bt(p)===l}):Mt,y=d.filter(function(p){return u.indexOf(p)>=0});y.length===0&&(y=d);var f=y.reduce(function(p,v){return p[v]=Tt(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[Ne(v)],p},{});return Object.keys(f).sort(function(p,v){return f[p]-f[v]})}function yl(e){if(Ne(e)===Kn)return[];var t=Kt(e);return[io(e),t,io(t)]}function xl(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,y=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,v=n.allowedAutoPlacements,w=t.options.placement,C=Ne(w),S=C===w,g=c||(S||!p?[Kt(w)]:yl(w)),h=[w].concat(g).reduce(function(ve,P){return ve.concat(Ne(P)===Kn?bl(t,{placement:P,boundary:l,rootBoundary:d,padding:u,flipVariations:p,allowedAutoPlacements:v}):P)},[]),x=t.rects.reference,m=t.rects.popper,k=new Map,$=!0,L=h[0],I=0;I<h.length;I++){var B=h[I],A=Ne(B),V=bt(B)===ht,E=[me,$e].indexOf(A)>=0,j=E?"width":"height",N=Tt(t,{placement:B,boundary:l,rootBoundary:d,altBoundary:y,padding:u}),T=E?V?Te:ge:V?$e:me;x[j]>m[j]&&(T=Kt(T));var W=Kt(T),Y=[];if(i&&Y.push(N[A]<=0),s&&Y.push(N[T]<=0,N[W]<=0),Y.every(function(ve){return ve})){L=B,$=!1;break}k.set(B,Y)}if($)for(var F=p?3:1,G=function(P){var M=h.find(function(D){var H=k.get(D);if(H)return H.slice(0,P).every(function(X){return X})});if(M)return L=M,"break"},ae=F;ae>0;ae--){var Se=G(ae);if(Se==="break")break}t.placement!==L&&(t.modifiersData[r]._skip=!0,t.placement=L,t.reset=!0)}}var wl={name:"flip",enabled:!0,phase:"main",fn:xl,requiresIfExists:["offset"],data:{_skip:!1}};function so(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function co(e){return[me,Te,$e,ge].some(function(t){return e[t]>=0})}function Cl(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Tt(t,{elementContext:"reference"}),s=Tt(t,{altBoundary:!0}),c=so(a,r),u=so(s,o,i),l=co(c),d=co(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var Sl={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Cl};function kl(e,t,n){var r=Ne(e),o=[ge,me].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[ge,Te].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function El(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=ri.reduce(function(l,d){return l[d]=kl(d,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var Rl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:El};function Ol(e){var t=e.state,n=e.name;t.modifiersData[n]=ui({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var $l={name:"popperOffsets",enabled:!0,phase:"read",fn:Ol,data:{}};function Tl(e){return e==="x"?"y":"x"}function Pl(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,y=n.tether,f=y===void 0?!0:y,p=n.tetherOffset,v=p===void 0?0:p,w=Tt(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),C=Ne(t.placement),S=bt(t.placement),g=!S,h=Yn(C),x=Tl(h),m=t.modifiersData.popperOffsets,k=t.rects.reference,$=t.rects.popper,L=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,I=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(m){if(i){var V,E=h==="y"?me:ge,j=h==="y"?$e:Te,N=h==="y"?"height":"width",T=m[h],W=T+w[E],Y=T-w[j],F=f?-$[N]/2:0,G=S===ht?k[N]:$[N],ae=S===ht?-$[N]:-k[N],Se=t.elements.arrow,ve=f&&Se?Xn(Se):{width:0,height:0},P=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ai(),M=P[E],D=P[j],H=St(0,k[N],ve[N]),X=g?k[N]/2-F-H-M-I.mainAxis:G-H-M-I.mainAxis,te=g?-k[N]/2+F+H+D+I.mainAxis:ae+H+D+I.mainAxis,Q=t.elements.arrow&&Lt(t.elements.arrow),le=Q?h==="y"?Q.clientTop||0:Q.clientLeft||0:0,Be=(V=B==null?void 0:B[h])!=null?V:0,oe=T+X-Be-le,he=T+te-Be,Z=St(f?on(W,oe):W,T,f?ot(Y,he):Y);m[h]=Z,A[h]=Z-T}if(s){var U,ke=h==="x"?me:ge,Ue=h==="x"?$e:Te,ee=m[x],Ee=x==="y"?"height":"width",Ie=ee+w[ke],Me=ee-w[Ue],Qe=[me,ge].indexOf(C)!==-1,ct=(U=B==null?void 0:B[x])!=null?U:0,Jn=Qe?Ie:ee-k[Ee]-$[Ee]-ct+I.altAxis,er=Qe?ee+k[Ee]+$[Ee]-ct-I.altAxis:Me,tr=f&&Qe?el(Jn,ee,er):St(f?Jn:Ie,ee,f?er:Me);m[x]=tr,A[x]=tr-ee}t.modifiersData[r]=A}}var Al={name:"preventOverflow",enabled:!0,phase:"main",fn:Pl,requiresIfExists:["offset"]};function Il(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ml(e){return e===Pe(e)||!Re(e)?Gn(e):Il(e)}function Ll(e){var t=e.getBoundingClientRect(),n=mt(t.width)/e.offsetWidth||1,r=mt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Dl(e,t,n){n===void 0&&(n=!1);var r=Re(t),o=Re(t)&&Ll(t),i=Ge(t),a=gt(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Fe(t)!=="body"||Zn(i))&&(s=Ml(t)),Re(t)?(c=gt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Qn(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function jl(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function Nl(e){var t=jl(e);return Xc.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Fl(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Bl(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var lo={placement:"bottom",modifiers:[],strategy:"absolute"};function uo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Wl(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?lo:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},lo,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],y=!1,f={state:l,setOptions:function(C){var S=typeof C=="function"?C(l.options):C;v(),l.options=Object.assign({},i,l.options,S),l.scrollParents={reference:st(s)?kt(s):s.contextElement?kt(s.contextElement):[],popper:kt(c)};var g=Nl(Bl([].concat(r,l.options.modifiers)));return l.orderedModifiers=g.filter(function(h){return h.enabled}),p(),f.update()},forceUpdate:function(){if(!y){var C=l.elements,S=C.reference,g=C.popper;if(uo(S,g)){l.rects={reference:Dl(S,Lt(g),l.options.strategy==="fixed"),popper:Xn(g)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(I){return l.modifiersData[I.name]=Object.assign({},I.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var x=l.orderedModifiers[h],m=x.fn,k=x.options,$=k===void 0?{}:k,L=x.name;typeof m=="function"&&(l=m({state:l,options:$,name:L,instance:f})||l)}}}},update:Fl(function(){return new Promise(function(w){f.forceUpdate(),w(l)})}),destroy:function(){v(),y=!0}};if(!uo(s,c))return f;f.setOptions(u).then(function(w){!y&&u.onFirstUpdate&&u.onFirstUpdate(w)});function p(){l.orderedModifiers.forEach(function(w){var C=w.name,S=w.options,g=S===void 0?{}:S,h=w.effect;if(typeof h=="function"){var x=h({state:l,name:C,instance:f,options:g}),m=function(){};d.push(x||m)}})}function v(){d.forEach(function(w){return w()}),d=[]}return f}}var Hl=[ul,$l,cl,Qc,Rl,wl,Al,ol,Sl],Vl=Wl({defaultModifiers:Hl}),zl=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,o=O.useContext(vn),i=o.collapsed,a=o.toggled,s=o.transitionDuration,c=O.useRef();return O.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=Vl(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),O.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,a,r,n]),{popperInstance:c.current}},fi=function(e){var t=e.rtl,n=e.level,r=e.collapsed,o=e.disabled,i=e.active;return`
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    cursor: pointer;

    `.concat(t?`padding-left: 20px;
           padding-right: `.concat(n===0?20:(r?n:n+1)*20,`px;
            `):`padding-right: 20px;
           padding-left: `.concat(n===0?20:(r?n:n+1)*20,`px;
           `),`

    &:hover {
      background-color: #f3f3f3;
    }

    `).concat(o&&` 
      pointer-events: none;
      cursor: default;
      color:#adadad;
        `,`

    `).concat(i&&"background-color: #e2eef9;",`
  
  `)},Ul=function(e,t){var n=e.className,r=e.component,o=e.children,i=at(e,["className","component","children"]);if(r){if(typeof r=="string")return O.createElement(r,xe(xe({className:ie(n)},i),{ref:t}),o);var a=r.props,s=a.className,c=at(a,["className"]);return O.cloneElement(r,xe(xe(xe({className:ie(n,s)},i),c),{ref:t}),o)}else return O.createElement("a",xe({ref:t,className:ie(n)},i),o)},di=O.forwardRef(Ul),ql=ce.li(fo||(fo=de([`
  position: relative;
  width: 100%;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`],[`
  position: relative;
  width: 100%;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},q.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return fi({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Kl=function(e,t){var n,r=e.children,o=e.className,i=e.label,a=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,d=e.defaultOpen,y=e.active,f=y===void 0?!1:y,p=e.disabled,v=p===void 0?!1:p,w=e.rootStyles,C=e.component,S=e.onOpenChange,g=e.onClick,h=e.onKeyUp,x=at(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),m=O.useContext(rn),k=O.useContext(vn),$=k.collapsed,L=k.rtl,I=k.transitionDuration,B=qn(),A=B.renderExpandIcon,V=B.closeOnClick,E=B.menuItemStyles,j=B.transitionDuration,N=O.useState(!!d),T=N[0],W=N[1],Y=O.useState(!1),F=Y[0],G=Y[1],ae=O.useState(!1),Se=ae[0],ve=ae[1],P=O.useRef(null),M=O.useRef(null),D=O.useRef(),H=zl({level:m,buttonRef:P,contentRef:M}).popperInstance,X=O.useCallback(function(){var Z,U=M.current;if(U){var ke=(Z=U==null?void 0:U.querySelector(".".concat(q.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;U.style.overflow="hidden",U.style.height="".concat(ke,"px"),D.current=setTimeout(function(){U.style.overflow="auto",U.style.height="auto"},j)}},[j]),te=function(){var Z,U=M.current;if(U){var ke=(Z=U==null?void 0:U.querySelector(".".concat(q.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;U.style.overflow="hidden",U.style.height="".concat(ke,"px"),U.offsetHeight,U.style.height="0px"}},Q=function(){m===0&&$||(typeof l>"u"?(clearTimeout(Number(D.current)),T?te():X(),S==null||S(!T),W(!T)):S==null||S(!l))};O.useEffect(function(){!(m===0&&$)&&typeof l<"u"&&Se&&(clearTimeout(Number(D.current)),l?X():te())},[$,X,i,m,S,l]);var le=function(Z){g==null||g(Z),Q()},Be=function(Z){h==null||h(Z),Z.key==="Enter"&&Q()},oe=function(Z){if(E){var U={level:m,disabled:v,active:f,isSubmenu:!0,open:l??T},ke=E.root,Ue=E.button,ee=E.label,Ee=E.icon,Ie=E.prefix,Me=E.suffix,Qe=E.subMenuContent,ct=E.SubMenuExpandIcon;switch(Z){case"root":return typeof ke=="function"?ke(U):ke;case"button":return typeof Ue=="function"?Ue(U):Ue;case"label":return typeof ee=="function"?ee(U):ee;case"icon":return typeof Ee=="function"?Ee(U):Ee;case"prefix":return typeof Ie=="function"?Ie(U):Ie;case"suffix":return typeof Me=="function"?Me(U):Me;case"SubMenuExpandIcon":return typeof ct=="function"?ct(U):ct;case"subMenuContent":return typeof Qe=="function"?Qe(U):Qe;default:return}}};O.useEffect(function(){setTimeout(function(){return H==null?void 0:H.update()},I),$&&m===0&&G(!1)},[$,m,L,I,H]),O.useEffect(function(){var Z=function(ee){var Ee,Ie,Me;!F&&(!((Ee=P.current)===null||Ee===void 0)&&Ee.contains(ee))?G(!0):(V&&!(!((Ie=ee.closest(".".concat(q.menuItemRoot)))===null||Ie===void 0)&&Ie.classList.contains(q.subMenuRoot))||!(!((Me=M.current)===null||Me===void 0)&&Me.contains(ee))&&F)&&G(!1)},U=function(ee){Z(ee.target)},ke=function(ee){ee.key==="Enter"?Z(ee.target):ee.key==="Escape"&&G(!1)},Ue=function(){document.removeEventListener("click",U),document.removeEventListener("keyup",ke)};return Ue(),$&&m===0&&(document.addEventListener("click",U,!1),document.addEventListener("keyup",ke,!1)),function(){Ue()}},[$,m,V,F]),O.useEffect(function(){ve(!0)},[]);var he=(n={},n[q.active]=f,n[q.disabled]=v,n[q.open]=l??T,n);return O.createElement(ql,{ref:t,className:ie(q.menuItemRoot,q.subMenuRoot,he,o),menuItemStyles:oe("root"),level:m,collapsed:$,rtl:L,disabled:v,active:f,buttonStyles:oe("button"),rootStyles:w},O.createElement(di,xe({"data-testid":"".concat(q.button,"-test-id"),ref:P,title:s,className:ie(q.button,he),onClick:le,onKeyUp:Be,component:C,tabIndex:0},x),a&&O.createElement(Jo,{rtl:L,className:ie(q.icon,he),rootStyles:oe("icon")},a),c&&O.createElement(ei,{collapsed:$,transitionDuration:I,firstLevel:m===0,className:ie(q.prefix,he),rtl:L,rootStyles:oe("prefix")},c),O.createElement(Zo,{className:ie(q.label,he),rootStyles:oe("label")},i),u&&O.createElement(ti,{collapsed:$,transitionDuration:I,firstLevel:m===0,className:ie(q.suffix,he),rootStyles:oe("suffix")},u),O.createElement(Lc,{rtl:L,className:ie(q.SubMenuExpandIcon,he),collapsed:$,level:m,rootStyles:oe("SubMenuExpandIcon")},A?A({level:m,disabled:v,active:f,open:l??T}):$&&m===0?O.createElement(jc,null):O.createElement(Dc,{rtl:L,open:l??T}))),O.createElement(Mc,{ref:M,openWhenCollapsed:F,open:l??T,firstLevel:m===0,collapsed:$,defaultOpen:l&&!Se||d,className:ie(q.subMenuContent,he),rootStyles:oe("subMenuContent")},O.createElement(rn.Provider,{value:m+1},r)))};O.forwardRef(Kl);var fo,_l=ce.li(po||(po=de([`
  width: 100%;
  position: relative;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`],[`
  width: 100%;
  position: relative;

  `,`;

  `,`;

  > .`,` {
    `,`;

    `,`;
  }
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},q.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return fi({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Xl=function(e,t){var n,r=e.children,o=e.icon,i=e.className,a=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,d=l===void 0?!1:l,y=e.component,f=e.rootStyles,p=at(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),v=O.useContext(rn),w=O.useContext(vn),C=w.collapsed,S=w.rtl,g=w.transitionDuration,h=qn().menuItemStyles,x=function(k){if(h){var $={level:v,disabled:d,active:u,isSubmenu:!1},L=h.root,I=h.button,B=h.label,A=h.icon,V=h.prefix,E=h.suffix;switch(k){case"root":return typeof L=="function"?L($):L;case"button":return typeof I=="function"?I($):I;case"label":return typeof B=="function"?B($):B;case"icon":return typeof A=="function"?A($):A;case"prefix":return typeof V=="function"?V($):V;case"suffix":return typeof E=="function"?E($):E;default:return}}},m=(n={},n[q.active]=u,n[q.disabled]=d,n);return O.createElement(_l,{ref:t,className:ie(q.menuItemRoot,m,i),menuItemStyles:x("root"),level:v,collapsed:C,rtl:S,disabled:d,active:u,buttonStyles:x("button"),rootStyles:f},O.createElement(di,xe({className:ie(q.button,m),"data-testid":"".concat(q.button,"-test-id"),component:y,tabIndex:0},p),o&&O.createElement(Jo,{rtl:S,className:ie(q.icon,m),rootStyles:x("icon")},o),a&&O.createElement(ei,{collapsed:C,transitionDuration:g,firstLevel:v===0,className:ie(q.prefix,m),rtl:S,rootStyles:x("prefix")},a),O.createElement(Zo,{className:ie(q.label,m),rootStyles:x("label")},r),s&&O.createElement(ti,{collapsed:C,transitionDuration:g,firstLevel:v===0,className:ie(q.suffix,m),rootStyles:x("suffix")},s)))},Yl=O.forwardRef(Xl),po;const Gl=z(Pc)`
  /* flex-grow: 1;

  background-color: ${({theme:e})=>e.primaryBgColor}; */
`,Wt=z(Yl)`
  a.${q.button} {
    padding: ${({theme:e})=>e.global.spacing(3,0,3,4)};

    &:hover,
    &:focus,
    &:active,
    &.active {
      background-color: ${({theme:e})=>e.linkActiveBgColor};
      color: ${({theme:e})=>e.linkActiveColor};
    }

    @media (min-width: ${pe.breakpoint.tablet}) {
      padding-left: ${({theme:e})=>e.global.spacing(8)};
    }

    @media (min-width: ${pe.breakpoint.largeDesktop}) {
      padding-left: ${({theme:e})=>e.global.spacing(12)};
    }
  }
`,Ql=({setMobileMenu:e})=>{const n=Si().pathname.startsWith("/calendar");return R.jsxs(Gl,{children:[R.jsx(Wt,{component:R.jsx(ut,{to:"/",onClick:()=>e(!1)}),children:"Home"}),R.jsx(Wt,{component:R.jsx(ut,{to:"calendar/weeks",onClick:()=>e(!1),className:n?"active":""}),children:"Calendar"}),R.jsx(Wt,{component:R.jsx(ut,{to:"/services",onClick:()=>e(!1)}),children:"Services"}),R.jsx(Wt,{component:R.jsx(ut,{to:"/contacts",onClick:()=>e(!1)}),children:"Contacts"})]})},Zl=z.footer`
  padding-top: ${({theme:e})=>e.global.spacing(2)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  ${({$isMainLayout:e})=>e&&vo}

  color: ${({theme:e})=>e.footerTextColor};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};

  background-color: ${({$isMainLayout:e,theme:t})=>e?t.primaryBgColor:t.footerBgColor};
`,Jl=z(Ei)`
  ${ki}
`,eu=z.div`
  ${an}

  text-align: ${({$isMainLayout:e})=>e&&"center"};
`,pi=({$isMainLayout:e})=>R.jsx(Zl,{$isMainLayout:e,children:R.jsxs(eu,{$isMainLayout:e,children:["Coded by"," ",R.jsx(Jl,{to:"https://github.com/iberezhnyi",children:"©iberezhnyi"})]})}),tu=z(Oc)`
  &&& {
    z-index: 1;
    border: none;

    @media (min-width: ${pe.breakpoint.tablet}) {
      border-top: ${({theme:e})=>e.global.spacing(1)} solid
        ${({theme:e})=>e.mainBgColor};
      border-bottom: ${({theme:e})=>e.global.spacing(1)} solid
        ${({theme:e})=>e.mainBgColor};

      transition: border 0ms;
    }

    @media (min-width: ${pe.breakpoint.tablet}) and (max-width: ${pe.breakpoint.largeDesktop}) {
      width: 200px;
      min-width: 200px;
    }
  }

  .${J.container} {
    display: flex;
    flex-direction: column;
    z-index: 2;

    background-color: ${({theme:e})=>e.primaryBgColor};
  }

  .${J.backdrop} {
    z-index: inherit;

    background-color: ${({theme:e})=>e.global.backdrop.backgroundColor};
    backdrop-filter: ${({theme:e})=>e.global.backdrop.backdropFilter};
  }
`,nu=z.div`
  flex-grow: 1;
`,ru=z.div`
  background-color: ${({theme:e})=>e.secondaryBgColor};
  height: ${({$headerHeight:e})=>`${e}px`};

  @media (min-width: ${pe.breakpoint.tablet}) {
    display: none;
  }
`,ou=({mobileMenu:e,setMobileMenu:t,headerHeight:n})=>{const r=Pt(cn);return b.useEffect(()=>(document.body.classList.toggle("no-scroll",e),()=>document.body.classList.remove("no-scroll")),[e]),R.jsxs(tu,{toggled:e,customBreakPoint:`${pe.breakpoint.maxTablet}`,onBackdropClick:()=>t(!1),$profile:!!r,children:[!r&&R.jsx(ru,{$headerHeight:n}),R.jsxs(nu,{children:[r&&R.jsx(Es,{}),R.jsx(Ql,{setMobileMenu:t})]}),r&&R.jsx(pi,{})]})},iu=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(0),o=ho(),i=Pt(cn),a=()=>t(s=>!s);return b.useEffect(()=>{!o&&t(!1)},[o]),R.jsxs(R.Fragment,{children:[R.jsx(ws,{handleClick:a,mobileMenu:e,setHeaderHeight:r,profile:i}),R.jsxs(Oi,{children:[R.jsx(ou,{setMobileMenu:t,mobileMenu:e,headerHeight:n}),R.jsx($i,{children:R.jsx(Ri,{})})]}),!i&&R.jsx(pi,{$isMainLayout:!0})]})},lu=iu;export{lu as default};
//# sourceMappingURL=index-Qs2BmOVA.js.map
