import{p as V,s as fo,c as on,j as $,u as pi,a as Tt,b as vi,d as tr,e as an,g as pe,L as po,r as b,f as hi,R as mi,N as qt,h as sn,i as gi,k as bi,l as yi,m as xi,M as wi,n as Ci,o as R,q as ki,t as Si,O as Ei}from"./index-BbAwQ9Xb.js";import{u as vo}from"./useIsMobile-CBi1X1AU.js";import{s as lt}from"./sprite-CR3z7qaS.js";const Ri=V.div`
  display: flex;
  flex-grow: 1;
`,Oi=V.main`
  background-color: ${({theme:e})=>e.mainBgColor};
  flex-grow: 1;

  ${fo}

  ${on}
`,$i=V.div`
  display: flex;
  overflow: hidden;
  z-index: 2;
`,Ti=V.button`
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
`,Pi=({onClick:e,mobileMenu:t})=>$.jsx($i,{children:$.jsx(Ti,{$mobileMenu:t,onClick:e,children:$.jsx("span",{})})}),Ai=()=>{const e=pi();return[Tt(vi),r=>e(r==="light"?tr("dark"):tr("light"))]},Mi=V.button`
  ${an}

  color: ${({theme:e})=>e.global.text.color.white};

  transition: color ${({theme:e})=>e.transitionDuration};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,Ii=V.svg`
  width: 1rem;
  height: 1rem;

  /* fill: ${({theme:e})=>e.global.text.color.white}; */
  fill: currentColor;

  @media (min-width: ${pe.breakpoint.mobile}) {
    /* fill: ${({theme:e})=>e.textColor}; */

    width: 1.5rem;
    height: 1.5rem;
  }
`,Li=()=>{const[e,t]=Ai();return $.jsx(Mi,{onClick:()=>t(e),children:$.jsx(Ii,{children:$.jsx("use",{href:`${lt}#${e==="light"?"moon-stars":"sun"}`})})})},Di=V.header`
  padding-top: ${({theme:e})=>e.global.spacing(3)};
  padding-bottom: ${({theme:e})=>e.global.spacing(3)};

  background-color: ${({theme:e})=>e.headerBgColor};
`,Ni=V.div`
  ${on}

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${pe.breakpoint.tablet}) {
    justify-content: space-between;
  }
`,ji=V.img`
  /* margin-left: 50px; */

  /* border-radius: 10px; */
`,Fi=V(po)`
  padding: ${({theme:e})=>e.global.spacing(3)};

  border-radius: 10px;
  border: ${({theme:e})=>e.border};
  border-color: ${({theme:e})=>e.transparent};

  transition: border-color ${({theme:e})=>e.transitionDuration};

  &:hover {
    border-color: ${({theme:e})=>e.borderColor};

    /* transition: border-color ${({theme:e})=>e.transitionDuration}; */
  }
`,Bi=V.ul`
  display: flex;
`,nr=V.li`
  display: flex;

  &.is-not-login {
    margin-right: ${({theme:e})=>e.global.spacing(3)};
  }

  @media (min-width: ${pe.breakpoint.mobile}) {
    &:not(:last-child) {
      margin-right: ${({theme:e})=>e.global.spacing(3)};
    }
  }
`;function Ye(e){return ho(e)?(e.nodeName||"").toLowerCase():"#document"}function we(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ze(e){var t;return(t=(ho(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ho(e){return e instanceof Node||e instanceof we(e).Node}function ne(e){return e instanceof Element||e instanceof we(e).Element}function se(e){return e instanceof HTMLElement||e instanceof we(e).HTMLElement}function Sn(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof we(e).ShadowRoot}function Pt(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Oe(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Wi(e){return["table","td","th"].includes(Ye(e))}function cn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ln(e){const t=Dn(),n=Oe(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Hi(e){let t=He(e);for(;se(t)&&!_e(t);){if(cn(t))return null;if(Ln(t))return t;t=He(t)}return null}function Dn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _e(e){return["html","body","#document"].includes(Ye(e))}function Oe(e){return we(e).getComputedStyle(e)}function ln(e){return ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function He(e){if(Ye(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Sn(e)&&e.host||ze(e);return Sn(t)?t.host:t}function mo(e){const t=He(e);return _e(t)?e.ownerDocument?e.ownerDocument.body:e.body:se(t)&&Pt(t)?t:mo(t)}function Ke(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=mo(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=we(o);return i?t.concat(a,a.visualViewport||[],Pt(o)?o:[],a.frameElement&&n?Ke(a.frameElement):[]):t.concat(o,Ke(o,[],n))}function Je(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function ye(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Sn(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Vi(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function go(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function zi(e){return e.mozInputSource===0&&e.isTrusted?!0:En()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Ui(e){return Ki()?!1:!En()&&e.width===0&&e.height===0||En()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function qi(){return/apple/i.test(navigator.vendor)}function En(){const e=/android/i;return e.test(Vi())||e.test(go())}function Ki(){return go().includes("jsdom/")}function rr(e,t){return["mouse","pen"].includes(e)}function _i(e){return"nativeEvent"in e}function Xi(e){return e.matches("html,body")}function Ae(e){return(e==null?void 0:e.ownerDocument)||document}function hn(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function tt(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Yi="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function bo(e){return se(e)&&e.matches(Yi)}function mn(e){e.preventDefault(),e.stopPropagation()}function Gi(e){return e?e.getAttribute("role")==="combobox"&&bo(e):!1}const Rn=Math.min,ut=Math.max,Kt=Math.round,Lt=Math.floor,Xe=e=>({x:e,y:e});function yo(e){return e.split("-")[0]}function Qi(e){return e.split("-")[1]}function Zi(e){return e==="x"?"y":"x"}function Ji(e){return e==="y"?"height":"width"}function xo(e){return["top","bottom"].includes(yo(e))?"y":"x"}function ea(e){return Zi(xo(e))}function wo(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ta=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],_t=ta.join(","),Co=typeof Element>"u",dt=Co?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Xt=!Co&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Yt=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),i=o===""||o==="true",a=i||n&&t&&e(t.parentNode);return a},na=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},ra=function(t,n,r){if(Yt(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(_t));return n&&dt.call(t,_t)&&o.unshift(t),o=o.filter(r),o},oa=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Yt(a,!1))if(a.tagName==="SLOT"){var s=a.assignedElements(),c=s.length?s:a.children,u=e(c,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:a,candidates:u})}else{var l=dt.call(a,_t);l&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),y=!Yt(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(d&&y){var f=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:a,candidates:f})}else i.unshift.apply(i,a.children)}}return o},ko=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},So=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||na(t))&&!ko(t)?0:t.tabIndex},ia=function(t,n){var r=So(t);return r<0&&n&&!ko(t)?0:r},aa=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},Eo=function(t){return t.tagName==="INPUT"},sa=function(t){return Eo(t)&&t.type==="hidden"},ca=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},la=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},ua=function(t){if(!t.name)return!0;var n=t.form||Xt(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=la(o,t.form);return!i||i===t},fa=function(t){return Eo(t)&&t.type==="radio"},da=function(t){return fa(t)&&!ua(t)},pa=function(t){var n,r=t&&Xt(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,s,c;for(i=!!((a=o)!==null&&a!==void 0&&(s=a.ownerDocument)!==null&&s!==void 0&&s.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,l,d;r=Xt(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((l=o)!==null&&l!==void 0&&(d=l.ownerDocument)!==null&&d!==void 0&&d.contains(o))}}return i},or=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},va=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=dt.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(dt.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var s=t;t;){var c=t.parentElement,u=Xt(t);if(c&&!c.shadowRoot&&o(c)===!0)return or(t);t.assignedSlot?t=t.assignedSlot:!c&&u!==t.ownerDocument?t=u.host:t=c}t=s}if(pa(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return or(t);return!1},ha=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return dt.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},ma=function(t,n){return!(n.disabled||Yt(n)||sa(n)||va(n,t)||ca(n)||ha(n))},On=function(t,n){return!(da(n)||So(n)<0||!ma(t,n))},ga=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},ba=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scopeParent,s=a?o.scopeParent:o,c=ia(s,a),u=a?e(o.candidates):s;c===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:c,item:o,isScope:a,content:u})}),r.sort(aa).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},Nn=function(t,n){n=n||{};var r;return n.getShadowRoot?r=oa([t],n.includeContainer,{filter:On.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:ga}):r=ra(t,n.includeContainer,On.bind(null,n)),ba(r)},ya=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return dt.call(t,_t)===!1?!1:On(n,t)};function ir(e,t,n){let{reference:r,floating:o}=e;const i=xo(t),a=ea(t),s=Ji(a),c=yo(t),u=i==="y",l=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,y=r[s]/2-o[s]/2;let f;switch(c){case"top":f={x:l,y:r.y-o.height};break;case"bottom":f={x:l,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Qi(t)){case"start":f[a]-=y*(n&&u?-1:1);break;case"end":f[a]+=y*(n&&u?-1:1);break}return f}const xa=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:l,y:d}=ir(u,r,c),y=r,f={},p=0;for(let v=0;v<s.length;v++){const{name:C,fn:w}=s[v],{x:k,y:g,data:h,reset:x}=await w({x:l,y:d,initialPlacement:r,placement:y,strategy:o,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});l=k??l,d=g??d,f={...f,[C]:{...f[C],...h}},x&&p<=50&&(p++,typeof x=="object"&&(x.placement&&(y=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:l,y:d}=ir(u,y,c)),v=-1)}return{x:l,y:d,placement:y,strategy:o,middlewareData:f}};function Ro(e){const t=Oe(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=se(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=Kt(n)!==i||Kt(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function jn(e){return ne(e)?e:e.contextElement}function ft(e){const t=jn(e);if(!se(t))return Xe(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Ro(t);let a=(i?Kt(n.width):n.width)/r,s=(i?Kt(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const wa=Xe(0);function Oo(e){const t=we(e);return!Dn()||!t.visualViewport?wa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ca(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==we(e)?!1:t}function ot(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=jn(e);let a=Xe(1);t&&(r?ne(r)&&(a=ft(r)):a=ft(e));const s=Ca(i,n,r)?Oo(i):Xe(0);let c=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,l=o.width/a.x,d=o.height/a.y;if(i){const y=we(i),f=r&&ne(r)?we(r):r;let p=y,v=p.frameElement;for(;v&&r&&f!==p;){const C=ft(v),w=v.getBoundingClientRect(),k=Oe(v),g=w.left+(v.clientLeft+parseFloat(k.paddingLeft))*C.x,h=w.top+(v.clientTop+parseFloat(k.paddingTop))*C.y;c*=C.x,u*=C.y,l*=C.x,d*=C.y,c+=g,u+=h,p=we(v),v=p.frameElement}}return wo({width:l,height:d,x:c,y:u})}function ka(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=ze(r),s=t?cn(t.floating):!1;if(r===a||s&&i)return n;let c={scrollLeft:0,scrollTop:0},u=Xe(1);const l=Xe(0),d=se(r);if((d||!d&&!i)&&((Ye(r)!=="body"||Pt(a))&&(c=ln(r)),se(r))){const y=ot(r);u=ft(r),l.x=y.x+r.clientLeft,l.y=y.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+l.x,y:n.y*u.y-c.scrollTop*u.y+l.y}}function Sa(e){return Array.from(e.getClientRects())}function $o(e){return ot(ze(e)).left+ln(e).scrollLeft}function Ea(e){const t=ze(e),n=ln(e),r=e.ownerDocument.body,o=ut(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ut(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+$o(e);const s=-n.scrollTop;return Oe(r).direction==="rtl"&&(a+=ut(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function Ra(e,t){const n=we(e),r=ze(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;const u=Dn();(!u||u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}function Oa(e,t){const n=ot(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=se(e)?ft(e):Xe(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:a,height:s,x:c,y:u}}function ar(e,t,n){let r;if(t==="viewport")r=Ra(e,n);else if(t==="document")r=Ea(ze(e));else if(ne(t))r=Oa(t,n);else{const o=Oo(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return wo(r)}function To(e,t){const n=He(e);return n===t||!ne(n)||_e(n)?!1:Oe(n).position==="fixed"||To(n,t)}function $a(e,t){const n=t.get(e);if(n)return n;let r=Ke(e,[],!1).filter(s=>ne(s)&&Ye(s)!=="body"),o=null;const i=Oe(e).position==="fixed";let a=i?He(e):e;for(;ne(a)&&!_e(a);){const s=Oe(a),c=Ln(a);!c&&s.position==="fixed"&&(o=null),(i?!c&&!o:!c&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Pt(a)&&!c&&To(e,a))?r=r.filter(l=>l!==a):o=s,a=He(a)}return t.set(e,r),r}function Ta(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?cn(t)?[]:$a(t,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,l)=>{const d=ar(t,l,o);return u.top=ut(d.top,u.top),u.right=Rn(d.right,u.right),u.bottom=Rn(d.bottom,u.bottom),u.left=ut(d.left,u.left),u},ar(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Pa(e){const{width:t,height:n}=Ro(e);return{width:t,height:n}}function Aa(e,t,n){const r=se(t),o=ze(t),i=n==="fixed",a=ot(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const c=Xe(0);if(r||!r&&!i)if((Ye(t)!=="body"||Pt(o))&&(s=ln(t)),r){const d=ot(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=$o(o));const u=a.left+s.scrollLeft-c.x,l=a.top+s.scrollTop-c.y;return{x:u,y:l,width:a.width,height:a.height}}function gn(e){return Oe(e).position==="static"}function sr(e,t){return!se(e)||Oe(e).position==="fixed"?null:t?t(e):e.offsetParent}function Po(e,t){const n=we(e);if(cn(e))return n;if(!se(e)){let o=He(e);for(;o&&!_e(o);){if(ne(o)&&!gn(o))return o;o=He(o)}return n}let r=sr(e,t);for(;r&&Wi(r)&&gn(r);)r=sr(r,t);return r&&_e(r)&&gn(r)&&!Ln(r)?n:r||Hi(e)||n}const Ma=async function(e){const t=this.getOffsetParent||Po,n=this.getDimensions,r=await n(e.floating);return{reference:Aa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ia(e){return Oe(e).direction==="rtl"}const La={convertOffsetParentRelativeRectToViewportRelativeRect:ka,getDocumentElement:ze,getClippingRect:Ta,getOffsetParent:Po,getElementRects:Ma,getClientRects:Sa,getDimensions:Pa,getScale:ft,isElement:ne,isRTL:Ia};function Da(e,t){let n=null,r;const o=ze(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();const{left:u,top:l,width:d,height:y}=e.getBoundingClientRect();if(s||t(),!d||!y)return;const f=Lt(l),p=Lt(o.clientWidth-(u+d)),v=Lt(o.clientHeight-(l+y)),C=Lt(u),k={rootMargin:-f+"px "+-p+"px "+-v+"px "+-C+"px",threshold:ut(0,Rn(1,c))||1};let g=!0;function h(x){const m=x[0].intersectionRatio;if(m!==c){if(!g)return a();m?a(!1,m):r=setTimeout(()=>{a(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(h,{...k,root:o.ownerDocument})}catch{n=new IntersectionObserver(h,k)}n.observe(e)}return a(!0),i}function Na(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=jn(e),l=o||i?[...u?Ke(u):[],...Ke(t)]:[];l.forEach(w=>{o&&w.addEventListener("scroll",n,{passive:!0}),i&&w.addEventListener("resize",n)});const d=u&&s?Da(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(w=>{let[k]=w;k&&k.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var g;(g=f)==null||g.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let p,v=c?ot(e):null;c&&C();function C(){const w=ot(e);v&&(w.x!==v.x||w.y!==v.y||w.width!==v.width||w.height!==v.height)&&n(),v=w,p=requestAnimationFrame(C)}return n(),()=>{var w;l.forEach(k=>{o&&k.removeEventListener("scroll",n),i&&k.removeEventListener("resize",n)}),d==null||d(),(w=f)==null||w.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const ja=(e,t,n)=>{const r=new Map,o={platform:La,...n},i={...o.platform,_c:r};return xa(e,t,{...o,platform:i})};var Bt=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Gt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Gt(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Gt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Ao(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function cr(e,t){const n=Ao(e);return Math.round(t*n)/n}function lr(e){const t=b.useRef(e);return Bt(()=>{t.current=e}),t}function Fa(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[l,d]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[y,f]=b.useState(r);Gt(y,r)||f(r);const[p,v]=b.useState(null),[C,w]=b.useState(null),k=b.useCallback(T=>{T!==m.current&&(m.current=T,v(T))},[]),g=b.useCallback(T=>{T!==S.current&&(S.current=T,w(T))},[]),h=i||p,x=a||C,m=b.useRef(null),S=b.useRef(null),O=b.useRef(l),L=c!=null,M=lr(c),B=lr(o),A=b.useCallback(()=>{if(!m.current||!S.current)return;const T={placement:t,strategy:n,middleware:y};B.current&&(T.platform=B.current),ja(m.current,S.current,T).then(W=>{const Y={...W,isPositioned:!0};z.current&&!Gt(O.current,Y)&&(O.current=Y,hi.flushSync(()=>{d(Y)}))})},[y,t,n,B]);Bt(()=>{u===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d(T=>({...T,isPositioned:!1})))},[u]);const z=b.useRef(!1);Bt(()=>(z.current=!0,()=>{z.current=!1}),[]),Bt(()=>{if(h&&(m.current=h),x&&(S.current=x),h&&x){if(M.current)return M.current(h,x,A);A()}},[h,x,A,M,L]);const E=b.useMemo(()=>({reference:m,floating:S,setReference:k,setFloating:g}),[k,g]),N=b.useMemo(()=>({reference:h,floating:x}),[h,x]),j=b.useMemo(()=>{const T={position:n,left:0,top:0};if(!N.floating)return T;const W=cr(N.floating,l.x),Y=cr(N.floating,l.y);return s?{...T,transform:"translate("+W+"px, "+Y+"px)",...Ao(N.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:Y}},[n,s,N.floating,l.x,l.y]);return b.useMemo(()=>({...l,update:A,refs:E,elements:N,floatingStyles:j}),[l,A,E,N,j])}const Mo={...mi},Ba=Mo.useInsertionEffect,Wa=Ba||(e=>e());function qe(e){const t=b.useRef(()=>{});return Wa(()=>{t.current=e}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}let ur=0;function Ze(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(ur);const i=()=>e==null?void 0:e.focus({preventScroll:n});o?i():ur=requestAnimationFrame(i)}var We=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Qt(){return Qt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qt.apply(this,arguments)}let fr=!1,Ha=0;const dr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Ha++;function Va(){const[e,t]=b.useState(()=>fr?dr():void 0);return We(()=>{e==null&&t(dr())},[]),b.useEffect(()=>{fr=!0},[]),e}const za=Mo.useId,Fn=za||Va;function Ua(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const qa=b.createContext(null),Ka=b.createContext(null),Io=()=>{var e;return((e=b.useContext(qa))==null?void 0:e.id)||null},Bn=()=>b.useContext(Ka);function Zt(e){return"data-floating-ui-"+e}function bn(e){const t=b.useRef(e);return We(()=>{t.current=e}),t}function _a(e,t){var n;let r=[],o=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;o;){const i=e.find(a=>a.id===o);o=i==null?void 0:i.parentId,i&&(r=r.concat(i))}return r}function wt(e,t){let n=e.filter(o=>{var i;return o.parentId===t&&((i=o.context)==null?void 0:i.open)}),r=n;for(;r.length;)r=e.filter(o=>{var i;return(i=r)==null?void 0:i.some(a=>{var s;return o.parentId===a.id&&((s=o.context)==null?void 0:s.open)})}),n=n.concat(r);return n}let ct=new WeakMap,Dt=new WeakSet,Nt={},yn=0;const Xa=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Lo=e=>e&&(e.host||Lo(e.parentNode)),Ya=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=Lo(n);return e.contains(r)?r:null}).filter(n=>n!=null);function Ga(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Ya(t,e),s=new Set,c=new Set(a),u=[];Nt[o]||(Nt[o]=new WeakMap);const l=Nt[o];a.forEach(d),y(t),s.clear();function d(f){!f||s.has(f)||(s.add(f),f.parentNode&&d(f.parentNode))}function y(f){!f||c.has(f)||[].forEach.call(f.children,p=>{if(Ye(p)!=="script")if(s.has(p))y(p);else{const v=i?p.getAttribute(i):null,C=v!==null&&v!=="false",w=(ct.get(p)||0)+1,k=(l.get(p)||0)+1;ct.set(p,w),l.set(p,k),u.push(p),w===1&&C&&Dt.add(p),k===1&&p.setAttribute(o,""),!C&&i&&p.setAttribute(i,"true")}})}return yn++,()=>{u.forEach(f=>{const p=(ct.get(f)||0)-1,v=(l.get(f)||0)-1;ct.set(f,p),l.set(f,v),p||(!Dt.has(f)&&i&&f.removeAttribute(i),Dt.delete(f)),v||f.removeAttribute(o)}),yn--,yn||(ct=new WeakMap,ct=new WeakMap,Dt=new WeakSet,Nt={})}}function pr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=Ae(e[0]).body;return Ga(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const Jt=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Do(e,t){const n=Nn(e,Jt());t==="prev"&&n.reverse();const r=n.indexOf(Je(Ae(e)));return n.slice(r+1)[0]}function Qa(){return Do(document.body,"next")}function Za(){return Do(document.body,"prev")}function vr(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!ye(n,r)}const No={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Ja;function hr(e){e.key==="Tab"&&(e.target,clearTimeout(Ja))}const mr=b.forwardRef(function(t,n){const[r,o]=b.useState();We(()=>(qi()&&o("button"),document.addEventListener("keydown",hr),()=>{document.removeEventListener("keydown",hr)}),[]);const i={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[Zt("focus-guard")]:"",style:No};return b.createElement("span",Qt({},t,i))}),es=b.createContext(null),ts=()=>b.useContext(es),gr=20;let et=[];function xn(e){et=et.filter(n=>n.isConnected);let t=e;if(!(!t||Ye(t)==="body")){if(!ya(t,Jt())){const n=Nn(t,Jt())[0];n&&(t=n)}et.push(t),et.length>gr&&(et=et.slice(-gr))}}function br(){return et.slice().reverse().find(e=>e.isConnected)}const ns=b.forwardRef(function(t,n){return b.createElement("button",Qt({},t,{type:"button",ref:n,tabIndex:-1,style:No}))});function rs(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:a=0,returnFocus:s=!0,restoreFocus:c=!1,modal:u=!0,visuallyHiddenDismiss:l=!1,closeOnFocusOut:d=!0}=e,{open:y,refs:f,nodeId:p,onOpenChange:v,events:C,dataRef:w,floatingId:k,elements:{domReference:g,floating:h}}=t,x=typeof a=="number"&&a<0,m=Gi(g)&&x,S=Xa()?i:!0,O=bn(o),L=bn(a),M=bn(s),B=Bn(),A=ts(),z=b.useRef(null),E=b.useRef(null),N=b.useRef(!1),j=b.useRef(!1),T=b.useRef(-1),W=A!=null,Y=h==null?void 0:h.firstElementChild,F=(Y==null?void 0:Y.id)===k?Y:h,G=qe(function(P){return P===void 0&&(P=F),P?Nn(P,Jt()):[]}),ae=qe(P=>{const I=G(P);return O.current.map(D=>g&&D==="reference"?g:F&&D==="floating"?F:I).filter(Boolean).flat()});b.useEffect(()=>{if(r||!u)return;function P(D){if(D.key==="Tab"){ye(F,Je(Ae(F)))&&G().length===0&&!m&&mn(D);const H=ae(),X=tt(D);O.current[0]==="reference"&&X===g&&(mn(D),D.shiftKey?Ze(H[H.length-1]):Ze(H[1])),O.current[1]==="floating"&&X===F&&D.shiftKey&&(mn(D),Ze(H[0]))}}const I=Ae(F);return I.addEventListener("keydown",P),()=>{I.removeEventListener("keydown",P)}},[r,g,F,u,O,m,G,ae]),b.useEffect(()=>{if(r||!h)return;function P(I){const D=tt(I),X=G().indexOf(D);X!==-1&&(T.current=X)}return h.addEventListener("focusin",P),()=>{h.removeEventListener("focusin",P)}},[r,h,G]),b.useEffect(()=>{if(r||!d)return;function P(){j.current=!0,setTimeout(()=>{j.current=!1})}function I(D){const H=D.relatedTarget;queueMicrotask(()=>{const X=!(ye(g,H)||ye(h,H)||ye(H,h)||ye(A==null?void 0:A.portalNode,H)||H!=null&&H.hasAttribute(Zt("focus-guard"))||B&&(wt(B.nodesRef.current,p).find(te=>{var Q,le;return ye((Q=te.context)==null?void 0:Q.elements.floating,H)||ye((le=te.context)==null?void 0:le.elements.domReference,H)})||_a(B.nodesRef.current,p).find(te=>{var Q,le;return((Q=te.context)==null?void 0:Q.elements.floating)===H||((le=te.context)==null?void 0:le.elements.domReference)===H})));if(c&&X&&Je(Ae(F))===Ae(F).body){se(F)&&(F==null||F.focus());const te=T.current,Q=G(),le=Q[te]||Q[Q.length-1]||F;se(le)&&le.focus()}(m||!u)&&H&&X&&!j.current&&H!==br()&&(N.current=!0,v(!1,D))})}if(h&&se(g))return g.addEventListener("focusout",I),g.addEventListener("pointerdown",P),h.addEventListener("focusout",I),()=>{g.removeEventListener("focusout",I),g.removeEventListener("pointerdown",P),h.removeEventListener("focusout",I)}},[r,g,h,F,u,p,B,A,v,d,c,G,m]),b.useEffect(()=>{var P;if(r)return;const I=Array.from((A==null||(P=A.portalNode)==null?void 0:P.querySelectorAll("["+Zt("portal")+"]"))||[]);if(h){const D=[h,...I,z.current,E.current,O.current.includes("reference")||m?g:null].filter(X=>X!=null),H=u||m?pr(D,S,!S):pr(D);return()=>{H()}}},[r,g,h,u,O,A,m,S]),We(()=>{if(r||!se(F))return;const P=Ae(F),I=Je(P);queueMicrotask(()=>{const D=ae(F),H=L.current,X=(typeof H=="number"?D[H]:H.current)||F,te=ye(F,I);!x&&!te&&y&&Ze(X,{preventScroll:X===F})})},[r,y,F,x,ae,L]),We(()=>{if(r||!F)return;let P=!1;const I=Ae(F),D=Je(I);let X=w.current.openEvent;xn(D);function te(Q){let{open:le,reason:Be,event:oe,nested:he}=Q;le&&(X=oe),Be==="escape-key"&&f.domReference.current&&xn(f.domReference.current),Be==="hover"&&oe.type==="mouseleave"&&(N.current=!0),Be==="outside-press"&&(he?(N.current=!1,P=!0):N.current=!(zi(oe)||Ui(oe)))}return C.on("openchange",te),()=>{C.off("openchange",te);const Q=Je(I),le=ye(h,Q)||B&&wt(B.nodesRef.current,p).some(he=>{var Z;return ye((Z=he.context)==null?void 0:Z.elements.floating,Q)});(le||X&&["click","mousedown"].includes(X.type))&&f.domReference.current&&xn(f.domReference.current);const oe=br();M.current&&!N.current&&se(oe)&&(!(oe!==Q&&Q!==I.body)||le)&&Ze(oe,{cancelPrevious:!1,preventScroll:P})}},[r,h,F,M,w,f,C,B,p]),We(()=>{if(!r&&A)return A.setFocusManagerState({modal:u,closeOnFocusOut:d,open:y,onOpenChange:v,refs:f}),()=>{A.setFocusManagerState(null)}},[r,A,u,y,v,f,d]),We(()=>{if(r||!F||typeof MutationObserver!="function"||x)return;const P=()=>{const D=F.getAttribute("tabindex"),H=G(),X=Je(Ae(h)),te=H.indexOf(X);te!==-1&&(T.current=te),O.current.includes("floating")||X!==f.domReference.current&&H.length===0?D!=="0"&&F.setAttribute("tabindex","0"):D!=="-1"&&F.setAttribute("tabindex","-1")};P();const I=new MutationObserver(P);return I.observe(F,{childList:!0,subtree:!0,attributes:!0}),()=>{I.disconnect()}},[r,h,F,f,O,G,x]);function ke(P){return r||!l||!u?null:b.createElement(ns,{ref:P==="start"?z:E,onClick:I=>v(!1,I.nativeEvent)},typeof l=="string"?l:"Dismiss")}const ve=!r&&S&&(u?!m:!0)&&(W||u);return b.createElement(b.Fragment,null,ve&&b.createElement(mr,{"data-type":"inside",ref:A==null?void 0:A.beforeInsideRef,onFocus:P=>{if(u){const D=ae();Ze(o[0]==="reference"?D[0]:D[D.length-1])}else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(N.current=!1,vr(P,A.portalNode)){const D=Qa()||g;D==null||D.focus()}else{var I;(I=A.beforeOutsideRef.current)==null||I.focus()}}}),!m&&ke("start"),n,ke("end"),ve&&b.createElement(mr,{"data-type":"inside",ref:A==null?void 0:A.afterInsideRef,onFocus:P=>{if(u)Ze(ae()[0]);else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(d&&(N.current=!0),vr(P,A.portalNode)){const D=Za()||g;D==null||D.focus()}else{var I;(I=A.afterOutsideRef.current)==null||I.focus()}}}))}function yr(e){return se(e.target)&&e.target.tagName==="BUTTON"}function xr(e){return bo(e)}function os(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:l=!0}=t,d=b.useRef(),y=b.useRef(!1),f=b.useMemo(()=>({onPointerDown(p){d.current=p.pointerType},onMouseDown(p){const v=d.current;p.button===0&&s!=="click"&&(rr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?r(!1,p.nativeEvent,"click"):(p.preventDefault(),r(!0,p.nativeEvent,"click"))))},onClick(p){const v=d.current;if(s==="mousedown"&&d.current){d.current=void 0;return}rr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="click")?r(!1,p.nativeEvent,"click"):r(!0,p.nativeEvent,"click"))},onKeyDown(p){d.current=void 0,!(p.defaultPrevented||!l||yr(p))&&(p.key===" "&&!xr(i)&&(p.preventDefault(),y.current=!0),p.key==="Enter"&&r(!(n&&c),p.nativeEvent,"click"))},onKeyUp(p){p.defaultPrevented||!l||yr(p)||xr(i)||p.key===" "&&y.current&&(y.current=!1,r(!(n&&c),p.nativeEvent,"click"))}}),[o,i,s,u,l,r,n,c]);return b.useMemo(()=>a?{reference:f}:{},[a,f])}const is={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},as={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},wr=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function ss(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:i}=e,{enabled:a=!0,escapeKey:s=!0,outsidePress:c=!0,outsidePressEvent:u="pointerdown",referencePress:l=!1,referencePressEvent:d="pointerdown",ancestorScroll:y=!1,bubbles:f,capture:p}=t,v=Bn(),C=qe(typeof c=="function"?c:()=>!1),w=typeof c=="function"?C:c,k=b.useRef(!1),g=b.useRef(!1),{escapeKey:h,outsidePress:x}=wr(f),{escapeKey:m,outsidePress:S}=wr(p),O=qe(E=>{var N;if(!n||!a||!s||E.key!=="Escape")return;const j=(N=i.current.floatingContext)==null?void 0:N.nodeId,T=v?wt(v.nodesRef.current,j):[];if(!h&&(E.stopPropagation(),T.length>0)){let W=!0;if(T.forEach(Y=>{var F;if((F=Y.context)!=null&&F.open&&!Y.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}r(!1,_i(E)?E.nativeEvent:E,"escape-key")}),L=qe(E=>{var N;const j=()=>{var T;O(E),(T=tt(E))==null||T.removeEventListener("keydown",j)};(N=tt(E))==null||N.addEventListener("keydown",j)}),M=qe(E=>{var N;const j=k.current;k.current=!1;const T=g.current;if(g.current=!1,u==="click"&&T||j||typeof w=="function"&&!w(E))return;const W=tt(E),Y="["+Zt("inert")+"]",F=Ae(o.floating).querySelectorAll(Y);let G=ne(W)?W:null;for(;G&&!_e(G);){const P=He(G);if(_e(P)||!ne(P))break;G=P}if(F.length&&ne(W)&&!Xi(W)&&!ye(W,o.floating)&&Array.from(F).every(P=>!ye(G,P)))return;if(se(W)&&z){const P=W.clientWidth>0&&W.scrollWidth>W.clientWidth,I=W.clientHeight>0&&W.scrollHeight>W.clientHeight;let D=I&&E.offsetX>W.clientWidth;if(I&&Oe(W).direction==="rtl"&&(D=E.offsetX<=W.offsetWidth-W.clientWidth),D||P&&E.offsetY>W.clientHeight)return}const ae=(N=i.current.floatingContext)==null?void 0:N.nodeId,ke=v&&wt(v.nodesRef.current,ae).some(P=>{var I;return hn(E,(I=P.context)==null?void 0:I.elements.floating)});if(hn(E,o.floating)||hn(E,o.domReference)||ke)return;const ve=v?wt(v.nodesRef.current,ae):[];if(ve.length>0){let P=!0;if(ve.forEach(I=>{var D;if((D=I.context)!=null&&D.open&&!I.context.dataRef.current.__outsidePressBubbles){P=!1;return}}),!P)return}r(!1,E,"outside-press")}),B=qe(E=>{var N;const j=()=>{var T;M(E),(T=tt(E))==null||T.removeEventListener(u,j)};(N=tt(E))==null||N.addEventListener(u,j)});b.useEffect(()=>{if(!n||!a)return;i.current.__escapeKeyBubbles=h,i.current.__outsidePressBubbles=x;function E(T){r(!1,T,"ancestor-scroll")}const N=Ae(o.floating);s&&N.addEventListener("keydown",m?L:O,m),w&&N.addEventListener(u,S?B:M,S);let j=[];return y&&(ne(o.domReference)&&(j=Ke(o.domReference)),ne(o.floating)&&(j=j.concat(Ke(o.floating))),!ne(o.reference)&&o.reference&&o.reference.contextElement&&(j=j.concat(Ke(o.reference.contextElement)))),j=j.filter(T=>{var W;return T!==((W=N.defaultView)==null?void 0:W.visualViewport)}),j.forEach(T=>{T.addEventListener("scroll",E,{passive:!0})}),()=>{s&&N.removeEventListener("keydown",m?L:O,m),w&&N.removeEventListener(u,S?B:M,S),j.forEach(T=>{T.removeEventListener("scroll",E)})}},[i,o,s,w,u,n,r,y,a,h,x,O,m,L,M,S,B]),b.useEffect(()=>{k.current=!1},[w,u]);const A=b.useMemo(()=>({onKeyDown:O,[is[d]]:E=>{l&&r(!1,E.nativeEvent,"reference-press")}}),[O,r,l,d]),z=b.useMemo(()=>({onKeyDown:O,onMouseDown(){g.current=!0},onMouseUp(){g.current=!0},[as[u]]:()=>{k.current=!0}}),[O,u]);return b.useMemo(()=>a?{reference:A,floating:z}:{},[a,A,z])}function cs(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Fn(),i=b.useRef({}),[a]=b.useState(()=>Ua()),s=Io()!=null,[c,u]=b.useState(r.reference),l=qe((f,p,v)=>{i.current.openEvent=f?p:void 0,a.emit("openchange",{open:f,event:p,reason:v,nested:s}),n==null||n(f,p,v)}),d=b.useMemo(()=>({setPositionReference:u}),[]),y=b.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return b.useMemo(()=>({dataRef:i,open:t,onOpenChange:l,elements:y,events:a,floatingId:o,refs:d}),[t,l,y,a,o,d])}function ls(e){e===void 0&&(e={});const{nodeId:t}=e,n=cs({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[i,a]=b.useState(null),[s,c]=b.useState(null),l=(o==null?void 0:o.reference)||i,d=b.useRef(null),y=Bn();We(()=>{l&&(d.current=l)},[l]);const f=Fa({...e,elements:{...o,...s&&{reference:s}}}),p=b.useCallback(g=>{const h=ne(g)?{getBoundingClientRect:()=>g.getBoundingClientRect(),contextElement:g}:g;c(h),f.refs.setReference(h)},[f.refs]),v=b.useCallback(g=>{(ne(g)||g===null)&&(d.current=g,a(g)),(ne(f.refs.reference.current)||f.refs.reference.current===null||g!==null&&!ne(g))&&f.refs.setReference(g)},[f.refs]),C=b.useMemo(()=>({...f.refs,setReference:v,setPositionReference:p,domReference:d}),[f.refs,v,p]),w=b.useMemo(()=>({...f.elements,domReference:l}),[f.elements,l]),k=b.useMemo(()=>({...f,...r,refs:C,elements:w,nodeId:t}),[f,C,w,t,r]);return We(()=>{r.dataRef.current.floatingContext=k;const g=y==null?void 0:y.nodesRef.current.find(h=>h.id===t);g&&(g.context=k)}),b.useMemo(()=>({...f,context:k,refs:C,elements:w}),[f,C,w,k])}const Cr="active",kr="selected";function wn(e,t,n){const r=new Map,o=n==="item";let i=e;if(o&&e){const{[Cr]:a,[kr]:s,...c}=e;i=c}return{...n==="floating"&&{tabIndex:-1},...i,...t.map(a=>{const s=a?a[n]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(c=>{let[u,l]=c;if(!(o&&[Cr,kr].includes(u)))if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof l=="function"){var d;(d=r.get(u))==null||d.push(l),a[u]=function(){for(var y,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(y=r.get(u))==null?void 0:y.map(C=>C(...p)).find(C=>C!==void 0)}}}else a[u]=l}),a),{})}}function us(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),n=e.map(s=>s==null?void 0:s.floating),r=e.map(s=>s==null?void 0:s.item),o=b.useCallback(s=>wn(s,e,"reference"),t),i=b.useCallback(s=>wn(s,e,"floating"),n),a=b.useCallback(s=>wn(s,e,"item"),r);return b.useMemo(()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:a}),[o,i,a])}const fs=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function ds(e,t){var n;t===void 0&&(t={});const{open:r,floatingId:o}=e,{enabled:i=!0,role:a="dialog"}=t,s=(n=fs.get(a))!=null?n:a,c=Fn(),l=Io()!=null,d=b.useMemo(()=>s==="tooltip"||a==="label"?{["aria-"+(a==="label"?"labelledby":"describedby")]:r?o:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":r?o:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:c},...s==="menu"&&l&&{role:"menuitem"},...a==="select"&&{"aria-autocomplete":"none"},...a==="combobox"&&{"aria-autocomplete":"list"}},[s,o,l,r,c,a]),y=b.useMemo(()=>{const p={id:o,...s&&{role:s}};return s==="tooltip"||a==="label"?p:{...p,...s==="menu"&&{"aria-labelledby":c}}},[s,o,c,a]),f=b.useCallback(p=>{let{active:v,selected:C}=p;const w={role:"option",...v&&{id:o+"-option"}};switch(a){case"select":return{...w,"aria-selected":v&&C};case"combobox":return{...w,...v&&{"aria-selected":!0}}}return{}},[o,a]);return b.useMemo(()=>i?{reference:d,floating:y,item:f}:{},[i,d,y,f])}const ps=V.div`
  z-index: 1;
`,Sr=V.button`
  ${an}

  @media (max-width: ${pe.breakpoint.maxMobile}) {
    max-width: 220px;
    font-size: 12px;
  }

  color: ${({theme:e})=>e.global.text.color.white};

  transition: color ${({theme:e})=>e.transitionDuration};

  &.logout {
    color: ${({theme:e})=>e.textColor};
  }

  &:hover,
  &:focus,
  &:active,
  &.open {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,vs=V(qt)`
  ${an}

  padding-right: 0;

  color: ${({theme:e})=>e.global.text.color.white};

  transition: color ${({theme:e})=>e.transitionDuration};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,hs=V.p`
  margin-bottom: 0;

  @media (max-width: ${pe.breakpoint.maxMobile}) {
    max-width: 220px;
    overflow: hidden;
  }
`,Er=V.svg`
  width: 1.5rem;
  height: 1.5rem;

  fill: transparent;
  stroke: currentColor;

  @media (min-width: ${pe.breakpoint.mobile}) {
    width: 1.75rem;
    height: 1.75rem;
  }
`,ms=V.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);
  }
`,gs=V.ul`
  padding: ${({theme:e})=>e.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({theme:e})=>e.mainBgColor};
`,bs=V.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(3)};
  }
`;V(qt)`
  ${an}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`;const ys=V.svg`
  width: 1rem;
  height: 1rem;

  fill: transparent;
  stroke: currentColor;
`,xs=()=>{const e=Tt(sn),t=gi(),[,{isLoading:n}]=bi({fixedCacheKey:"login-user"}),[,{isLoading:r}]=yi({fixedCacheKey:"register-user"}),[o,{isLoading:i}]=xi(),a=async()=>{await o(),t("/login"),c(!1)},[s,c]=b.useState(!1),{refs:u,floatingStyles:l,context:d}=ls({open:s,onOpenChange:c,whileElementsMounted:Na}),y=os(d),f=ss(d),p=ds(d,{role:"menu"}),{getReferenceProps:v,getFloatingProps:C}=us([y,f,p]),w=Fn();return $.jsxs($.Fragment,{children:[i&&$.jsx(wi,{}),e&&$.jsxs(Sr,{className:s?"open":"",ref:u.setReference,...v(),children:[$.jsx(hs,{children:e.email}),$.jsx(Er,{children:$.jsx("use",{href:`${lt}#user`})}),$.jsx(ms,{className:s?"open":"",children:$.jsx("use",{href:`${lt}#arrow`})})]}),!e&&$.jsxs(vs,{to:"/login",children:[n||r?$.jsx(Ci,{}):$.jsx("p",{children:"Log in"}),$.jsx(Er,{children:$.jsx("use",{href:`${lt}#user`})})]}),s&&$.jsx(rs,{context:d,modal:!1,initialFocus:-1,children:$.jsx(ps,{ref:u.setFloating,style:l,"aria-labelledby":w,...C(),children:$.jsx(gs,{children:$.jsx(bs,{role:"menuitem",children:$.jsxs(Sr,{onClick:a,className:"logout",children:[$.jsx(ys,{children:$.jsx("use",{href:`${lt}#logout`})}),"Log out"]})})})})})]})},ws="/planner/assets/logo-placeholder4-BQQMUQJQ.png",Cs=({handleClick:e,mobileMenu:t,setHeaderHeight:n,profile:r})=>{const o=vo(),i=b.useRef(null);return b.useEffect(()=>{i.current&&n(i.current.offsetHeight)},[n]),$.jsx(Di,{ref:i,children:$.jsxs(Ni,{children:[o&&$.jsx(Pi,{onClick:()=>e(),mobileMenu:t}),!o&&$.jsx(Fi,{to:"/",children:$.jsx(ji,{src:ws,alt:"Logo",width:"130"})}),$.jsxs(Bi,{children:[$.jsx(nr,{className:r?"":"is-not-login",children:$.jsx(xs,{})}),$.jsx(nr,{children:$.jsx(Li,{})})]})]})})},ks=V.div`
  padding-top: ${({theme:e})=>e.global.spacing(16)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  background-color: ${({theme:e})=>e.secondaryBgColor};

  @media (min-width: ${pe.breakpoint.tablet}) {
    padding-top: ${({theme:e})=>e.global.spacing(2)};
  }
`,Ss=V.ul`
  ${on}
`,Cn=V.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(2)};
  }
`;V.img`
  border-radius: 50%;
`;const Es=V.svg`
  fill: ${({theme:e})=>e.textColorSecondary};
  stroke: ${({theme:e})=>e.textColorSecondary};
  width: 7rem;
  height: 7rem;
`,Rr=V.p`
  color: ${({theme:e})=>e.textColorSecondary};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};
  font-weight: ${({theme:e})=>e.global.text.fontWeight.m};
`,Rs=()=>{const e=Tt(sn);return $.jsx(ks,{children:$.jsxs(Ss,{children:[$.jsx(Cn,{children:$.jsx(Es,{children:$.jsx("use",{href:`${lt}#user-avatar`})})}),$.jsx(Cn,{children:$.jsx(Rr,{children:e==null?void 0:e.email.split("@")[0]})}),$.jsx(Cn,{children:$.jsx(Rr,{children:e==null?void 0:e.email})})]})})};/*! *****************************************************************************
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
***************************************************************************** */var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xe.apply(this,arguments)};function it(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function de(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function $n(){return $n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$n.apply(this,arguments)}function Wn(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Os=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,$s=Wn(function(e){return Os.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Ts(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ps(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var As=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ps(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Ts(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),fe="-ms-",en="-moz-",K="-webkit-",jo="comm",Hn="rule",Vn="decl",Ms="@import",Fo="@keyframes",Is=Math.abs,un=String.fromCharCode,Ls=Object.assign;function Ds(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Bo(e){return e.trim()}function Ns(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,n){return e.replace(t,n)}function Tn(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function St(e,t,n){return e.slice(t,n)}function Le(e){return e.length}function zn(e){return e.length}function jt(e,t){return t.push(e),e}function js(e,t){return e.map(t).join("")}var fn=1,pt=1,Wo=0,be=0,re=0,bt="";function dn(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:fn,column:pt,length:a,return:""}}function yt(e,t){return Ls(dn("",null,null,"",null,null,0),e,{length:-e.length},t)}function Fs(){return re}function Bs(){return re=be>0?ue(bt,--be):0,pt--,re===10&&(pt=1,fn--),re}function Ce(){return re=be<Wo?ue(bt,be++):0,pt++,re===10&&(pt=1,fn++),re}function Ne(){return ue(bt,be)}function Wt(){return be}function At(e,t){return St(bt,e,t)}function Et(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ho(e){return fn=pt=1,Wo=Le(bt=e),be=0,[]}function Vo(e){return bt="",e}function Ht(e){return Bo(At(be-1,Pn(e===91?e+2:e===40?e+1:e)))}function Ws(e){for(;(re=Ne())&&re<33;)Ce();return Et(e)>2||Et(re)>3?"":" "}function Hs(e,t){for(;--t&&Ce()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return At(e,Wt()+(t<6&&Ne()==32&&Ce()==32))}function Pn(e){for(;Ce();)switch(re){case e:return be;case 34:case 39:e!==34&&e!==39&&Pn(re);break;case 40:e===41&&Pn(e);break;case 92:Ce();break}return be}function Vs(e,t){for(;Ce()&&e+re!==57;)if(e+re===84&&Ne()===47)break;return"/*"+At(t,be-1)+"*"+un(e===47?e:Ce())}function zs(e){for(;!Et(Ne());)Ce();return At(e,be)}function Or(e){return Vo(Vt("",null,null,null,[""],e=Ho(e),0,[0],e))}function Vt(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,d=a,y=0,f=0,p=0,v=1,C=1,w=1,k=0,g="",h=o,x=i,m=r,S=g;C;)switch(p=k,k=Ce()){case 40:if(p!=108&&ue(S,d-1)==58){Tn(S+=_(Ht(k),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:S+=Ht(k);break;case 9:case 10:case 13:case 32:S+=Ws(p);break;case 92:S+=Hs(Wt()-1,7);continue;case 47:switch(Ne()){case 42:case 47:jt(Us(Vs(Ce(),Wt()),t,n),c);break;default:S+="/"}break;case 123*v:s[u++]=Le(S)*w;case 125*v:case 59:case 0:switch(k){case 0:case 125:C=0;case 59+l:f>0&&Le(S)-d&&jt(f>32?Tr(S+";",r,n,d-1):Tr(_(S," ","")+";",r,n,d-2),c);break;case 59:S+=";";default:if(jt(m=$r(S,t,n,u,l,o,s,g,h=[],x=[],d),i),k===123)if(l===0)Vt(S,t,m,m,h,i,d,s,x);else switch(y===99&&ue(S,3)===110?100:y){case 100:case 109:case 115:Vt(e,m,m,r&&jt($r(e,m,m,0,0,o,s,g,o,h=[],d),x),o,x,d,s,r?h:x);break;default:Vt(S,m,m,m,[""],x,0,s,x)}}u=l=f=0,v=w=1,g=S="",d=a;break;case 58:d=1+Le(S),f=p;default:if(v<1){if(k==123)--v;else if(k==125&&v++==0&&Bs()==125)continue}switch(S+=un(k),k*v){case 38:w=l>0?1:(S+="\f",-1);break;case 44:s[u++]=(Le(S)-1)*w,w=1;break;case 64:Ne()===45&&(S+=Ht(Ce())),y=Ne(),l=d=Le(g=S+=zs(Wt())),k++;break;case 45:p===45&&Le(S)==2&&(v=0)}}return i}function $r(e,t,n,r,o,i,a,s,c,u,l){for(var d=o-1,y=o===0?i:[""],f=zn(y),p=0,v=0,C=0;p<r;++p)for(var w=0,k=St(e,d+1,d=Is(v=a[p])),g=e;w<f;++w)(g=Bo(v>0?y[w]+" "+k:_(k,/&\f/g,y[w])))&&(c[C++]=g);return dn(e,t,n,o===0?Hn:s,c,u,l)}function Us(e,t,n){return dn(e,t,n,jo,un(Fs()),St(e,2,-2),0)}function Tr(e,t,n,r){return dn(e,t,n,Vn,St(e,0,r),St(e,r+1,-1),r)}function nt(e,t){for(var n="",r=zn(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Pr(e,t,n,r){switch(e.type){case Ms:case Vn:return e.return=e.return||e.value;case jo:return"";case Fo:return e.return=e.value+"{"+nt(e.children,r)+"}";case Hn:e.value=e.props.join(",")}return Le(n=nt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ar(e){var t=zn(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function qs(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ks=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}},_s=function(t,n,r){for(var o=0,i=0;o=i,i=Ne(),o===38&&i===12&&(n[r]=1),!Et(i);)Ce();return At(t,be)},Xs=function(t,n){var r=-1,o=44;do switch(Et(o)){case 0:o===38&&Ne()===12&&(n[r]=1),t[r]+=_s(be-1,n,r);break;case 2:t[r]+=Ht(o);break;case 4:if(o===44){t[++r]=Ne()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=un(o)}while(o=Ce());return t},Ys=function(t,n){return Vo(Xs(Ho(t),n))},Mr=new WeakMap,Gs=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Mr.get(r))&&!o){Mr.set(t,!0);for(var i=[],a=Ys(n,i),s=r.props,c=0,u=0;c<a.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},Qs=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function zo(e,t){switch(Ds(e,t)){case 5103:return K+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return K+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return K+e+en+e+fe+e+e;case 6828:case 4268:return K+e+fe+e+e;case 6165:return K+e+fe+"flex-"+e+e;case 5187:return K+e+_(e,/(\w+).+(:[^]+)/,K+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return K+e+fe+"flex-item-"+_(e,/flex-|-self/,"")+e;case 4675:return K+e+fe+"flex-line-pack"+_(e,/align-content|flex-|-self/,"")+e;case 5548:return K+e+fe+_(e,"shrink","negative")+e;case 5292:return K+e+fe+_(e,"basis","preferred-size")+e;case 6060:return K+"box-"+_(e,"-grow","")+K+e+fe+_(e,"grow","positive")+e;case 4554:return K+_(e,/([^-])(transform)/g,"$1"+K+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,K+"$1"),/(image-set)/,K+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,K+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,K+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+K+e+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,K+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Le(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+K+"$2-$3$1"+en+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Tn(e,"stretch")?zo(_(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,Le(e)-3-(~Tn(e,"!important")&&10))){case 107:return _(e,":",":"+K)+e;case 101:return _(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+K+(ue(e,14)===45?"inline-":"")+"box$3$1"+K+"$2$3$1"+fe+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return K+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return K+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return K+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return K+e+fe+e+e}return e}var Zs=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Vn:t.return=zo(t.value,t.length);break;case Fo:return nt([yt(t,{value:_(t.value,"@","@"+K)})],o);case Hn:if(t.length)return js(t.props,function(i){switch(Ns(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return nt([yt(t,{props:[_(i,/:(read-\w+)/,":"+en+"$1")]})],o);case"::placeholder":return nt([yt(t,{props:[_(i,/:(plac\w+)/,":"+K+"input-$1")]}),yt(t,{props:[_(i,/:(plac\w+)/,":"+en+"$1")]}),yt(t,{props:[_(i,/:(plac\w+)/,fe+"input-$1")]})],o)}return""})}},zt=typeof document<"u",Js=zt?void 0:Ks(function(){return Wn(function(){var e={};return function(t){return e[t]}})}),ec=[Zs],Uo=function(t){var n=t.key;if(zt&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var x=h.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||ec,i={},a,s=[];zt&&(a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var x=h.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)i[x[m]]=!0;s.push(h)}));var c,u=[Gs,Qs];if(zt){var l,d=[Pr,qs(function(h){l.insert(h)})],y=Ar(u.concat(o,d)),f=function(x){return nt(Or(x),y)};c=function(x,m,S,O){l=S,f(x?x+"{"+m.styles+"}":m.styles),O&&(g.inserted[m.name]=!0)}}else{var p=[Pr],v=Ar(u.concat(o,p)),C=function(x){return nt(Or(x),v)},w=Js(o)(n),k=function(x,m){var S=m.name;return w[S]===void 0&&(w[S]=C(x?x+"{"+m.styles+"}":m.styles)),w[S]};c=function(x,m,S,O){var L=m.name,M=k(x,m);if(g.compat===void 0)return O&&(g.inserted[L]=!0),M;if(O)g.inserted[L]=M;else return M}}var g={key:n,sheet:new As({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(s),g},tc=typeof document<"u",Ir=function(t){return t()},nc=b.useInsertionEffect?b.useInsertionEffect:!1,rc=tc&&nc||Ir,oc=typeof document<"u",tn=b.createContext(typeof HTMLElement<"u"?Uo({key:"css"}):null);tn.Provider;var qo=function(t){return b.forwardRef(function(n,r){var o=b.useContext(tn);return t(n,o,r)})};oc||(qo=function(t){return function(n){var r=b.useContext(tn);return r===null?(r=Uo({key:"css"}),b.createElement(tn.Provider,{value:r},t(n,r))):t(n,r)}});var ic=b.createContext({}),An=typeof document<"u";function ac(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Ko=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||An===!1&&t.compat!==void 0)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},sc=function(t,n,r){Ko(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",a=n;do{var s=t.insert(n===a?"."+o:"",a,t.sheet,!0);!An&&s!==void 0&&(i+=s),a=a.next}while(a!==void 0);if(!An&&i.length!==0)return i}};function cc(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var lc={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},uc=/[A-Z]|^ms/g,fc=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_o=function(t){return t.charCodeAt(1)===45},Lr=function(t){return t!=null&&typeof t!="boolean"},kn=Wn(function(e){return _o(e)?e:e.replace(uc,"-$&").toLowerCase()}),Dr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(fc,function(r,o,i){return De={name:o,styles:i,next:De},o})}return lc[t]!==1&&!_o(t)&&typeof n=="number"&&n!==0?n+"px":n};function Rt(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return De={name:n.name,styles:n.styles,next:De},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)De={name:r.name,styles:r.styles,next:De},r=r.next;var o=n.styles+";";return o}return dc(e,t,n)}case"function":{if(e!==void 0){var i=De,a=n(e);return De=i,Rt(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function dc(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Rt(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":Lr(a)&&(r+=kn(i)+":"+Dr(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Lr(a[s])&&(r+=kn(i)+":"+Dr(i,a[s])+";");else{var c=Rt(e,t,a);switch(i){case"animation":case"animationName":{r+=kn(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Nr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,De,pc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";De=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Rt(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Rt(r,n,t[s]),o&&(i+=a[s]);Nr.lastIndex=0;for(var c="",u;(u=Nr.exec(i))!==null;)c+="-"+u[1];var l=cc(i)+c;return{name:l,styles:i,next:De}},vc=$s,hc=function(t){return t!=="theme"},jr=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?vc:hc},Fr=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},mc=typeof document<"u",gc=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;Ko(n,r,o);var i=rc(function(){return sc(n,r,o)});if(!mc&&i!==void 0){for(var a,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return b.createElement("style",(a={},a["data-emotion"]=n.key+" "+s,a.dangerouslySetInnerHTML={__html:i},a.nonce=n.sheet.nonce,a))}return null},bc=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Fr(t,n,r),c=s||jr(o),u=!c("as");return function(){var l=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)d.push.apply(d,l);else{d.push(l[0][0]);for(var y=l.length,f=1;f<y;f++)d.push(l[f],l[0][f])}var p=qo(function(v,C,w){var k=u&&v.as||o,g="",h=[],x=v;if(v.theme==null){x={};for(var m in v)x[m]=v[m];x.theme=b.useContext(ic)}typeof v.className=="string"?g=ac(C.registered,h,v.className):v.className!=null&&(g=v.className+" ");var S=pc(d.concat(h),C.registered,x);g+=C.key+"-"+S.name,a!==void 0&&(g+=" "+a);var O=u&&s===void 0?jr(k):c,L={};for(var M in v)u&&M==="as"||O(M)&&(L[M]=v[M]);return L.className=g,L.ref=w,b.createElement(b.Fragment,null,b.createElement(gc,{cache:C,serialized:S,isStringTag:typeof k=="string"}),b.createElement(k,L))});return p.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(v,C){return e(v,$n({},n,C,{shouldForwardProp:Fr(p,C,!0)})).apply(void 0,d)},p}},yc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ce=bc.bind();yc.forEach(function(e){ce[e]=ce(e)});var Xo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Xo);var ie=Xo.exports,xc=R.createContext(void 0),wc=function(){var e=R.useContext(xc);return e},Cc=function(e){var t=R.useState(!!e&&typeof window<"u"&&window.matchMedia(e).matches),n=t[0],r=t[1];return R.useEffect(function(){if(e){var o=window.matchMedia(e),i=function(){o.matches!==n&&r(o.matches)};return i(),o.addEventListener("change",i),function(){return o.removeEventListener("change",i)}}},[n,e]),n},J={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},q={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},kc=ce.div(Br||(Br=de([`
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
`]))),Br,Sc={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},Ec=ce.aside(Wr||(Wr=de([`
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
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},J.rtl,J.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},J.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},J.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},J.rtl,function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},J.toggled,function(e){var t=e.rootStyles;return t}),Rc=ce.div(Hr||(Hr=de([`
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
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),Oc=ce.img(Vr||(Vr=de([`
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
`])),J.image),pn=R.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),$c=R.forwardRef(function(e,t){var n,r=e.collapsed,o=e.toggled,i=e.onBackdropClick,a=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,d=e.defaultCollapsed,y=e.className,f=e.children,p=e.breakPoint,v=e.customBreakPoint,C=e.backgroundColor,w=C===void 0?"rgb(249, 249, 249, 0.7)":C,k=e.transitionDuration,g=k===void 0?300:k,h=e.image,x=e.rtl,m=e.rootStyles,S=it(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),O=function(){if(v)return"(max-width: ".concat(v,")");if(p)return["xs","sm","md","lg","xl","xxl"].includes(p)?"(max-width: ".concat(Sc[p],")"):p==="always"||p==="all"?(p==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(p,")")},L=R.useRef();L.current=function(W){a==null||a(W)};var M=Cc(O()),B=R.useState(!1),A=B[0],z=B[1],E=wc(),N=r??(!A&&d?!0:E==null?void 0:E.collapsed),j=o??(E==null?void 0:E.toggled),T=function(){i==null||i(),E==null||E.updateSidebarState({toggled:!1})};return R.useEffect(function(){var W;(W=L.current)===null||W===void 0||W.call(L,M)},[M]),R.useEffect(function(){E==null||E.updateSidebarState({broken:M,rtl:x,transitionDuration:g})},[M,E==null?void 0:E.updateSidebarState,x,g]),R.useEffect(function(){A||(E==null||E.updateSidebarState({collapsed:d}),z(!0))},[d,A,E==null?void 0:E.updateSidebarState]),R.createElement(pn.Provider,{value:{collapsed:N,toggled:j,rtl:x,transitionDuration:g}},R.createElement(Ec,xe({ref:t,"data-testid":"".concat(J.root,"-test-id"),rtl:x,rootStyles:m,width:c,collapsedWidth:l,transitionDuration:g,className:ie(J.root,(n={},n[J.collapsed]=N,n[J.toggled]=j,n[J.broken]=M,n[J.rtl]=x,n),y)},S),R.createElement(Rc,{"data-testid":"".concat(J.container,"-test-id"),className:J.container,backgroundColor:w},f),h&&R.createElement(Oc,{"data-testid":"".concat(J.image,"-test-id"),src:h,alt:"sidebar background",className:J.image}),M&&j&&R.createElement(kc,{"data-testid":"".concat(J.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:T,onKeyPress:T,className:J.backdrop})))}),Wr,Hr,Vr,Yo=ce.ul(zr||(zr=de([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),zr,Tc=ce.nav(Ur||(Ur=de([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),q.root,function(e){var t=e.rootStyles;return t}),Go=R.createContext(void 0),nn=R.createContext(0),Pc=function(e,t){var n=e.children,r=e.className,o=e.transitionDuration,i=o===void 0?300:o,a=e.closeOnClick,s=a===void 0?!1:a,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,d=it(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),y=R.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return R.createElement(Go.Provider,{value:y},R.createElement(nn.Provider,{value:0},R.createElement(Tc,xe({ref:t,className:ie(q.root,r),rootStyles:c},d),R.createElement(Yo,null,n))))},Ac=R.forwardRef(Pc),Ur,Un=function(){var e=R.useContext(Go);if(e===void 0)throw new Error("Menu Component is required!");return e},Mc=ce.div(qr||(qr=de([`
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
      `},function(e){var t=e.rootStyles;return t}),Ic=function(e,t){var n=e.children,r=e.open,o=e.openWhenCollapsed,i=e.firstLevel,a=e.collapsed,s=e.defaultOpen,c=it(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=Un().transitionDuration,l=R.useState(s)[0];return R.createElement(Mc,xe({"data-testid":"".concat(q.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:a,open:r,openWhenCollapsed:o,transitionDuration:u,defaultOpen:l},c),R.createElement(Yo,null,n))},Lc=R.forwardRef(Ic),qr,Qo=ce.span(Kr||(Kr=de([`
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
`])),function(e){var t=e.rootStyles;return t}),Kr,Zo=ce.span(_r||(_r=de([`
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
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),_r,Jo=ce.span(Xr||(Xr=de([`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 5px;":"margin-right: 5px;"},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Xr,ei=ce.span(Yr||(Yr=de([`
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
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Yr,Dc=ce.span(Gr||(Gr=de([`
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
    
    `)},function(e){var t=e.rootStyles;return t}),Nc=ce.span(Qr||(Qr=de([`
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
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),jc=ce.span(Zr||(Zr=de([`
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
`]))),Gr,Qr,Zr,me="top",$e="bottom",Te="right",ge="left",qn="auto",Mt=[me,$e,Te,ge],vt="start",Ot="end",Fc="clippingParents",ti="viewport",xt="popper",Bc="reference",Jr=Mt.reduce(function(e,t){return e.concat([t+"-"+vt,t+"-"+Ot])},[]),ni=[].concat(Mt,[qn]).reduce(function(e,t){return e.concat([t,t+"-"+vt,t+"-"+Ot])},[]),Wc="beforeRead",Hc="read",Vc="afterRead",zc="beforeMain",Uc="main",qc="afterMain",Kc="beforeWrite",_c="write",Xc="afterWrite",Yc=[Wc,Hc,Vc,zc,Uc,qc,Kc,_c,Xc];function Fe(e){return e?(e.nodeName||"").toLowerCase():null}function Pe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function at(e){var t=Pe(e).Element;return e instanceof t||e instanceof Element}function Re(e){var t=Pe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Kn(e){if(typeof ShadowRoot>"u")return!1;var t=Pe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Gc(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!Re(i)||!Fe(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function Qc(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(c,u){return c[u]="",c},{});!Re(o)||!Fe(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}var Zc={name:"applyStyles",enabled:!0,phase:"write",fn:Gc,effect:Qc,requires:["computeStyles"]};function je(e){return e.split("-")[0]}var rt=Math.max,rn=Math.min,ht=Math.round;function Mn(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ri(){return!/^((?!chrome|android).)*safari/i.test(Mn())}function mt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&Re(e)&&(o=e.offsetWidth>0&&ht(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ht(r.height)/e.offsetHeight||1);var a=at(e)?Pe(e):window,s=a.visualViewport,c=!ri()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/o,l=(r.top+(c&&s?s.offsetTop:0))/i,d=r.width/o,y=r.height/i;return{width:d,height:y,top:l,right:u+d,bottom:l+y,left:u,x:u,y:l}}function _n(e){var t=mt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function oi(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Kn(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ve(e){return Pe(e).getComputedStyle(e)}function Jc(e){return["table","td","th"].indexOf(Fe(e))>=0}function Ge(e){return((at(e)?e.ownerDocument:e.document)||window.document).documentElement}function vn(e){return Fe(e)==="html"?e:e.assignedSlot||e.parentNode||(Kn(e)?e.host:null)||Ge(e)}function eo(e){return!Re(e)||Ve(e).position==="fixed"?null:e.offsetParent}function el(e){var t=/firefox/i.test(Mn()),n=/Trident/i.test(Mn());if(n&&Re(e)){var r=Ve(e);if(r.position==="fixed")return null}var o=vn(e);for(Kn(o)&&(o=o.host);Re(o)&&["html","body"].indexOf(Fe(o))<0;){var i=Ve(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function It(e){for(var t=Pe(e),n=eo(e);n&&Jc(n)&&Ve(n).position==="static";)n=eo(n);return n&&(Fe(n)==="html"||Fe(n)==="body"&&Ve(n).position==="static")?t:n||el(e)||t}function Xn(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ct(e,t,n){return rt(e,rn(t,n))}function tl(e,t,n){var r=Ct(e,t,n);return r>n?n:r}function ii(){return{top:0,right:0,bottom:0,left:0}}function ai(e){return Object.assign({},ii(),e)}function si(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var nl=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ai(typeof t!="number"?t:si(t,Mt))};function rl(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=je(n.placement),c=Xn(s),u=[ge,Te].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var d=nl(o.padding,n),y=_n(i),f=c==="y"?me:ge,p=c==="y"?$e:Te,v=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],C=a[c]-n.rects.reference[c],w=It(i),k=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0,g=v/2-C/2,h=d[f],x=k-y[l]-d[p],m=k/2-y[l]/2+g,S=Ct(h,m,x),O=c;n.modifiersData[r]=(t={},t[O]=S,t.centerOffset=S-m,t)}}function ol(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||oi(t.elements.popper,o)&&(t.elements.arrow=o))}var il={name:"arrow",enabled:!0,phase:"main",fn:rl,effect:ol,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function gt(e){return e.split("-")[1]}var al={top:"auto",right:"auto",bottom:"auto",left:"auto"};function sl(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:ht(t*o)/o||0,y:ht(n*o)/o||0}}function to(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,y=a.x,f=y===void 0?0:y,p=a.y,v=p===void 0?0:p,C=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=C.x,v=C.y;var w=a.hasOwnProperty("x"),k=a.hasOwnProperty("y"),g=ge,h=me,x=window;if(u){var m=It(n),S="clientHeight",O="clientWidth";if(m===Pe(n)&&(m=Ge(n),Ve(m).position!=="static"&&s==="absolute"&&(S="scrollHeight",O="scrollWidth")),m=m,o===me||(o===ge||o===Te)&&i===Ot){h=$e;var L=d&&m===x&&x.visualViewport?x.visualViewport.height:m[S];v-=L-r.height,v*=c?1:-1}if(o===ge||(o===me||o===$e)&&i===Ot){g=Te;var M=d&&m===x&&x.visualViewport?x.visualViewport.width:m[O];f-=M-r.width,f*=c?1:-1}}var B=Object.assign({position:s},u&&al),A=l===!0?sl({x:f,y:v}):{x:f,y:v};if(f=A.x,v=A.y,c){var z;return Object.assign({},B,(z={},z[h]=k?"0":"",z[g]=w?"0":"",z.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",z))}return Object.assign({},B,(t={},t[h]=k?v+"px":"",t[g]=w?f+"px":"",t.transform="",t))}function cl(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:je(t.placement),variation:gt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,to(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,to(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ll={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:cl,data:{}},Ft={passive:!0};function ul(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,c=Pe(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,Ft)}),s&&c.addEventListener("resize",n.update,Ft),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,Ft)}),s&&c.removeEventListener("resize",n.update,Ft)}}var fl={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ul,data:{}},dl={left:"right",right:"left",bottom:"top",top:"bottom"};function Ut(e){return e.replace(/left|right|bottom|top/g,function(t){return dl[t]})}var pl={start:"end",end:"start"};function no(e){return e.replace(/start|end/g,function(t){return pl[t]})}function Yn(e){var t=Pe(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Gn(e){return mt(Ge(e)).left+Yn(e).scrollLeft}function vl(e,t){var n=Pe(e),r=Ge(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=ri();(u||!u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+Gn(e),y:c}}function hl(e){var t,n=Ge(e),r=Yn(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=rt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=rt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Gn(e),c=-r.scrollTop;return Ve(o||n).direction==="rtl"&&(s+=rt(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function Qn(e){var t=Ve(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ci(e){return["html","body","#document"].indexOf(Fe(e))>=0?e.ownerDocument.body:Re(e)&&Qn(e)?e:ci(vn(e))}function kt(e,t){var n;t===void 0&&(t=[]);var r=ci(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=Pe(r),a=o?[i].concat(i.visualViewport||[],Qn(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(kt(vn(a)))}function In(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ml(e,t){var n=mt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ro(e,t,n){return t===ti?In(vl(e,n)):at(t)?ml(t,n):In(hl(Ge(e)))}function gl(e){var t=kt(vn(e)),n=["absolute","fixed"].indexOf(Ve(e).position)>=0,r=n&&Re(e)?It(e):e;return at(r)?t.filter(function(o){return at(o)&&oi(o,r)&&Fe(o)!=="body"}):[]}function bl(e,t,n,r){var o=t==="clippingParents"?gl(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(c,u){var l=ro(e,u,r);return c.top=rt(l.top,c.top),c.right=rn(l.right,c.right),c.bottom=rn(l.bottom,c.bottom),c.left=rt(l.left,c.left),c},ro(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function li(e){var t=e.reference,n=e.element,r=e.placement,o=r?je(r):null,i=r?gt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case me:c={x:a,y:t.y-n.height};break;case $e:c={x:a,y:t.y+t.height};break;case Te:c={x:t.x+t.width,y:s};break;case ge:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?Xn(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case vt:c[u]=c[u]-(t[l]/2-n[l]/2);break;case Ot:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function $t(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?Fc:s,u=n.rootBoundary,l=u===void 0?ti:u,d=n.elementContext,y=d===void 0?xt:d,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,C=v===void 0?0:v,w=ai(typeof C!="number"?C:si(C,Mt)),k=y===xt?Bc:xt,g=e.rects.popper,h=e.elements[p?k:y],x=bl(at(h)?h:h.contextElement||Ge(e.elements.popper),c,l,a),m=mt(e.elements.reference),S=li({reference:m,element:g,strategy:"absolute",placement:o}),O=In(Object.assign({},g,S)),L=y===xt?O:m,M={top:x.top-L.top+w.top,bottom:L.bottom-x.bottom+w.bottom,left:x.left-L.left+w.left,right:L.right-x.right+w.right},B=e.modifiersData.offset;if(y===xt&&B){var A=B[o];Object.keys(M).forEach(function(z){var E=[Te,$e].indexOf(z)>=0?1:-1,N=[me,$e].indexOf(z)>=0?"y":"x";M[z]+=A[N]*E})}return M}function yl(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?ni:c,l=gt(r),d=l?s?Jr:Jr.filter(function(p){return gt(p)===l}):Mt,y=d.filter(function(p){return u.indexOf(p)>=0});y.length===0&&(y=d);var f=y.reduce(function(p,v){return p[v]=$t(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[je(v)],p},{});return Object.keys(f).sort(function(p,v){return f[p]-f[v]})}function xl(e){if(je(e)===qn)return[];var t=Ut(e);return[no(e),t,no(t)]}function wl(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,y=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,v=n.allowedAutoPlacements,C=t.options.placement,w=je(C),k=w===C,g=c||(k||!p?[Ut(C)]:xl(C)),h=[C].concat(g).reduce(function(ve,P){return ve.concat(je(P)===qn?yl(t,{placement:P,boundary:l,rootBoundary:d,padding:u,flipVariations:p,allowedAutoPlacements:v}):P)},[]),x=t.rects.reference,m=t.rects.popper,S=new Map,O=!0,L=h[0],M=0;M<h.length;M++){var B=h[M],A=je(B),z=gt(B)===vt,E=[me,$e].indexOf(A)>=0,N=E?"width":"height",j=$t(t,{placement:B,boundary:l,rootBoundary:d,altBoundary:y,padding:u}),T=E?z?Te:ge:z?$e:me;x[N]>m[N]&&(T=Ut(T));var W=Ut(T),Y=[];if(i&&Y.push(j[A]<=0),s&&Y.push(j[T]<=0,j[W]<=0),Y.every(function(ve){return ve})){L=B,O=!1;break}S.set(B,Y)}if(O)for(var F=p?3:1,G=function(P){var I=h.find(function(D){var H=S.get(D);if(H)return H.slice(0,P).every(function(X){return X})});if(I)return L=I,"break"},ae=F;ae>0;ae--){var ke=G(ae);if(ke==="break")break}t.placement!==L&&(t.modifiersData[r]._skip=!0,t.placement=L,t.reset=!0)}}var Cl={name:"flip",enabled:!0,phase:"main",fn:wl,requiresIfExists:["offset"],data:{_skip:!1}};function oo(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function io(e){return[me,Te,$e,ge].some(function(t){return e[t]>=0})}function kl(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=$t(t,{elementContext:"reference"}),s=$t(t,{altBoundary:!0}),c=oo(a,r),u=oo(s,o,i),l=io(c),d=io(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var Sl={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:kl};function El(e,t,n){var r=je(e),o=[ge,me].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[ge,Te].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function Rl(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=ni.reduce(function(l,d){return l[d]=El(d,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var Ol={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Rl};function $l(e){var t=e.state,n=e.name;t.modifiersData[n]=li({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Tl={name:"popperOffsets",enabled:!0,phase:"read",fn:$l,data:{}};function Pl(e){return e==="x"?"y":"x"}function Al(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,y=n.tether,f=y===void 0?!0:y,p=n.tetherOffset,v=p===void 0?0:p,C=$t(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),w=je(t.placement),k=gt(t.placement),g=!k,h=Xn(w),x=Pl(h),m=t.modifiersData.popperOffsets,S=t.rects.reference,O=t.rects.popper,L=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,M=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(m){if(i){var z,E=h==="y"?me:ge,N=h==="y"?$e:Te,j=h==="y"?"height":"width",T=m[h],W=T+C[E],Y=T-C[N],F=f?-O[j]/2:0,G=k===vt?S[j]:O[j],ae=k===vt?-O[j]:-S[j],ke=t.elements.arrow,ve=f&&ke?_n(ke):{width:0,height:0},P=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ii(),I=P[E],D=P[N],H=Ct(0,S[j],ve[j]),X=g?S[j]/2-F-H-I-M.mainAxis:G-H-I-M.mainAxis,te=g?-S[j]/2+F+H+D+M.mainAxis:ae+H+D+M.mainAxis,Q=t.elements.arrow&&It(t.elements.arrow),le=Q?h==="y"?Q.clientTop||0:Q.clientLeft||0:0,Be=(z=B==null?void 0:B[h])!=null?z:0,oe=T+X-Be-le,he=T+te-Be,Z=Ct(f?rn(W,oe):W,T,f?rt(Y,he):Y);m[h]=Z,A[h]=Z-T}if(s){var U,Se=h==="x"?me:ge,Ue=h==="x"?$e:Te,ee=m[x],Ee=x==="y"?"height":"width",Me=ee+C[Se],Ie=ee-C[Ue],Qe=[me,ge].indexOf(w)!==-1,st=(U=B==null?void 0:B[x])!=null?U:0,Zn=Qe?Me:ee-S[Ee]-O[Ee]-st+M.altAxis,Jn=Qe?ee+S[Ee]+O[Ee]-st-M.altAxis:Ie,er=f&&Qe?tl(Zn,ee,Jn):Ct(f?Zn:Me,ee,f?Jn:Ie);m[x]=er,A[x]=er-ee}t.modifiersData[r]=A}}var Ml={name:"preventOverflow",enabled:!0,phase:"main",fn:Al,requiresIfExists:["offset"]};function Il(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ll(e){return e===Pe(e)||!Re(e)?Yn(e):Il(e)}function Dl(e){var t=e.getBoundingClientRect(),n=ht(t.width)/e.offsetWidth||1,r=ht(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Nl(e,t,n){n===void 0&&(n=!1);var r=Re(t),o=Re(t)&&Dl(t),i=Ge(t),a=mt(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Fe(t)!=="body"||Qn(i))&&(s=Ll(t)),Re(t)?(c=mt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Gn(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function jl(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function Fl(e){var t=jl(e);return Yc.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Bl(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Wl(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var ao={placement:"bottom",modifiers:[],strategy:"absolute"};function so(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Hl(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?ao:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ao,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],y=!1,f={state:l,setOptions:function(w){var k=typeof w=="function"?w(l.options):w;v(),l.options=Object.assign({},i,l.options,k),l.scrollParents={reference:at(s)?kt(s):s.contextElement?kt(s.contextElement):[],popper:kt(c)};var g=Fl(Wl([].concat(r,l.options.modifiers)));return l.orderedModifiers=g.filter(function(h){return h.enabled}),p(),f.update()},forceUpdate:function(){if(!y){var w=l.elements,k=w.reference,g=w.popper;if(so(k,g)){l.rects={reference:Nl(k,It(g),l.options.strategy==="fixed"),popper:_n(g)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(M){return l.modifiersData[M.name]=Object.assign({},M.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var x=l.orderedModifiers[h],m=x.fn,S=x.options,O=S===void 0?{}:S,L=x.name;typeof m=="function"&&(l=m({state:l,options:O,name:L,instance:f})||l)}}}},update:Bl(function(){return new Promise(function(C){f.forceUpdate(),C(l)})}),destroy:function(){v(),y=!0}};if(!so(s,c))return f;f.setOptions(u).then(function(C){!y&&u.onFirstUpdate&&u.onFirstUpdate(C)});function p(){l.orderedModifiers.forEach(function(C){var w=C.name,k=C.options,g=k===void 0?{}:k,h=C.effect;if(typeof h=="function"){var x=h({state:l,name:w,instance:f,options:g}),m=function(){};d.push(x||m)}})}function v(){d.forEach(function(C){return C()}),d=[]}return f}}var Vl=[fl,Tl,ll,Zc,Ol,Cl,Ml,il,Sl],zl=Hl({defaultModifiers:Vl}),Ul=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,o=R.useContext(pn),i=o.collapsed,a=o.toggled,s=o.transitionDuration,c=R.useRef();return R.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=zl(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),R.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,a,r,n]),{popperInstance:c.current}},ui=function(e){var t=e.rtl,n=e.level,r=e.collapsed,o=e.disabled,i=e.active;return`
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
  
  `)},ql=function(e,t){var n=e.className,r=e.component,o=e.children,i=it(e,["className","component","children"]);if(r){if(typeof r=="string")return R.createElement(r,xe(xe({className:ie(n)},i),{ref:t}),o);var a=r.props,s=a.className,c=it(a,["className"]);return R.cloneElement(r,xe(xe(xe({className:ie(n,s)},i),c),{ref:t}),o)}else return R.createElement("a",xe({ref:t,className:ie(n)},i),o)},fi=R.forwardRef(ql),Kl=ce.li(co||(co=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},q.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return ui({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),_l=function(e,t){var n,r=e.children,o=e.className,i=e.label,a=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,d=e.defaultOpen,y=e.active,f=y===void 0?!1:y,p=e.disabled,v=p===void 0?!1:p,C=e.rootStyles,w=e.component,k=e.onOpenChange,g=e.onClick,h=e.onKeyUp,x=it(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),m=R.useContext(nn),S=R.useContext(pn),O=S.collapsed,L=S.rtl,M=S.transitionDuration,B=Un(),A=B.renderExpandIcon,z=B.closeOnClick,E=B.menuItemStyles,N=B.transitionDuration,j=R.useState(!!d),T=j[0],W=j[1],Y=R.useState(!1),F=Y[0],G=Y[1],ae=R.useState(!1),ke=ae[0],ve=ae[1],P=R.useRef(null),I=R.useRef(null),D=R.useRef(),H=Ul({level:m,buttonRef:P,contentRef:I}).popperInstance,X=R.useCallback(function(){var Z,U=I.current;if(U){var Se=(Z=U==null?void 0:U.querySelector(".".concat(q.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;U.style.overflow="hidden",U.style.height="".concat(Se,"px"),D.current=setTimeout(function(){U.style.overflow="auto",U.style.height="auto"},N)}},[N]),te=function(){var Z,U=I.current;if(U){var Se=(Z=U==null?void 0:U.querySelector(".".concat(q.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;U.style.overflow="hidden",U.style.height="".concat(Se,"px"),U.offsetHeight,U.style.height="0px"}},Q=function(){m===0&&O||(typeof l>"u"?(clearTimeout(Number(D.current)),T?te():X(),k==null||k(!T),W(!T)):k==null||k(!l))};R.useEffect(function(){!(m===0&&O)&&typeof l<"u"&&ke&&(clearTimeout(Number(D.current)),l?X():te())},[O,X,i,m,k,l]);var le=function(Z){g==null||g(Z),Q()},Be=function(Z){h==null||h(Z),Z.key==="Enter"&&Q()},oe=function(Z){if(E){var U={level:m,disabled:v,active:f,isSubmenu:!0,open:l??T},Se=E.root,Ue=E.button,ee=E.label,Ee=E.icon,Me=E.prefix,Ie=E.suffix,Qe=E.subMenuContent,st=E.SubMenuExpandIcon;switch(Z){case"root":return typeof Se=="function"?Se(U):Se;case"button":return typeof Ue=="function"?Ue(U):Ue;case"label":return typeof ee=="function"?ee(U):ee;case"icon":return typeof Ee=="function"?Ee(U):Ee;case"prefix":return typeof Me=="function"?Me(U):Me;case"suffix":return typeof Ie=="function"?Ie(U):Ie;case"SubMenuExpandIcon":return typeof st=="function"?st(U):st;case"subMenuContent":return typeof Qe=="function"?Qe(U):Qe;default:return}}};R.useEffect(function(){setTimeout(function(){return H==null?void 0:H.update()},M),O&&m===0&&G(!1)},[O,m,L,M,H]),R.useEffect(function(){var Z=function(ee){var Ee,Me,Ie;!F&&(!((Ee=P.current)===null||Ee===void 0)&&Ee.contains(ee))?G(!0):(z&&!(!((Me=ee.closest(".".concat(q.menuItemRoot)))===null||Me===void 0)&&Me.classList.contains(q.subMenuRoot))||!(!((Ie=I.current)===null||Ie===void 0)&&Ie.contains(ee))&&F)&&G(!1)},U=function(ee){Z(ee.target)},Se=function(ee){ee.key==="Enter"?Z(ee.target):ee.key==="Escape"&&G(!1)},Ue=function(){document.removeEventListener("click",U),document.removeEventListener("keyup",Se)};return Ue(),O&&m===0&&(document.addEventListener("click",U,!1),document.addEventListener("keyup",Se,!1)),function(){Ue()}},[O,m,z,F]),R.useEffect(function(){ve(!0)},[]);var he=(n={},n[q.active]=f,n[q.disabled]=v,n[q.open]=l??T,n);return R.createElement(Kl,{ref:t,className:ie(q.menuItemRoot,q.subMenuRoot,he,o),menuItemStyles:oe("root"),level:m,collapsed:O,rtl:L,disabled:v,active:f,buttonStyles:oe("button"),rootStyles:C},R.createElement(fi,xe({"data-testid":"".concat(q.button,"-test-id"),ref:P,title:s,className:ie(q.button,he),onClick:le,onKeyUp:Be,component:w,tabIndex:0},x),a&&R.createElement(Zo,{rtl:L,className:ie(q.icon,he),rootStyles:oe("icon")},a),c&&R.createElement(Jo,{collapsed:O,transitionDuration:M,firstLevel:m===0,className:ie(q.prefix,he),rtl:L,rootStyles:oe("prefix")},c),R.createElement(Qo,{className:ie(q.label,he),rootStyles:oe("label")},i),u&&R.createElement(ei,{collapsed:O,transitionDuration:M,firstLevel:m===0,className:ie(q.suffix,he),rootStyles:oe("suffix")},u),R.createElement(Dc,{rtl:L,className:ie(q.SubMenuExpandIcon,he),collapsed:O,level:m,rootStyles:oe("SubMenuExpandIcon")},A?A({level:m,disabled:v,active:f,open:l??T}):O&&m===0?R.createElement(jc,null):R.createElement(Nc,{rtl:L,open:l??T}))),R.createElement(Lc,{ref:I,openWhenCollapsed:F,open:l??T,firstLevel:m===0,collapsed:O,defaultOpen:l&&!ke||d,className:ie(q.subMenuContent,he),rootStyles:oe("subMenuContent")},R.createElement(nn.Provider,{value:m+1},r)))};R.forwardRef(_l);var co,Xl=ce.li(lo||(lo=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},q.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return ui({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Yl=function(e,t){var n,r=e.children,o=e.icon,i=e.className,a=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,d=l===void 0?!1:l,y=e.component,f=e.rootStyles,p=it(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),v=R.useContext(nn),C=R.useContext(pn),w=C.collapsed,k=C.rtl,g=C.transitionDuration,h=Un().menuItemStyles,x=function(S){if(h){var O={level:v,disabled:d,active:u,isSubmenu:!1},L=h.root,M=h.button,B=h.label,A=h.icon,z=h.prefix,E=h.suffix;switch(S){case"root":return typeof L=="function"?L(O):L;case"button":return typeof M=="function"?M(O):M;case"label":return typeof B=="function"?B(O):B;case"icon":return typeof A=="function"?A(O):A;case"prefix":return typeof z=="function"?z(O):z;case"suffix":return typeof E=="function"?E(O):E;default:return}}},m=(n={},n[q.active]=u,n[q.disabled]=d,n);return R.createElement(Xl,{ref:t,className:ie(q.menuItemRoot,m,i),menuItemStyles:x("root"),level:v,collapsed:w,rtl:k,disabled:d,active:u,buttonStyles:x("button"),rootStyles:f},R.createElement(fi,xe({className:ie(q.button,m),"data-testid":"".concat(q.button,"-test-id"),component:y,tabIndex:0},p),o&&R.createElement(Zo,{rtl:k,className:ie(q.icon,m),rootStyles:x("icon")},o),a&&R.createElement(Jo,{collapsed:w,transitionDuration:g,firstLevel:v===0,className:ie(q.prefix,m),rtl:k,rootStyles:x("prefix")},a),R.createElement(Qo,{className:ie(q.label,m),rootStyles:x("label")},r),s&&R.createElement(ei,{collapsed:w,transitionDuration:g,firstLevel:v===0,className:ie(q.suffix,m),rootStyles:x("suffix")},s)))},Gl=R.forwardRef(Yl),lo;const Ql=V(Ac)`
  /* flex-grow: 1;

  background-color: ${({theme:e})=>e.primaryBgColor}; */
`,uo=V(Gl)`
  a.${q.button} {
    padding: ${({theme:e})=>e.global.spacing(3,0,3,4)};
    background-color: ${({theme:e})=>e.transparent};
    color: inherit;

    transition: background-color ${({theme:e})=>e.transitionDuration},
      color ${({theme:e})=>e.transitionDuration};

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
`,Zl=({setMobileMenu:e})=>{const n=ki().pathname.startsWith("/calendar");return $.jsxs(Ql,{children:[$.jsx(uo,{component:$.jsx(qt,{to:"/",onClick:()=>e(!1)}),children:"Home"}),$.jsx(uo,{component:$.jsx(qt,{to:"calendar/weeks",onClick:()=>e(!1),className:n?"active":""}),children:"Calendar"})]})},Jl=V.footer`
  padding-top: ${({theme:e})=>e.global.spacing(2)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  ${({$isMainLayout:e})=>e&&fo}

  color: ${({theme:e})=>e.footerTextColor};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};

  background-color: ${({$isMainLayout:e,theme:t})=>e?t.primaryBgColor:t.footerBgColor};
`,eu=V(po)`
  ${Si}
`,tu=V.div`
  ${on}

  text-align: ${({$isMainLayout:e})=>e&&"center"};
`,di=({$isMainLayout:e})=>$.jsx(Jl,{$isMainLayout:e,children:$.jsxs(tu,{$isMainLayout:e,children:["Coded by"," ",$.jsx(eu,{to:"https://github.com/iberezhnyi",children:"©iberezhnyi"})]})}),nu=V($c)`
  &&& {
    z-index: 1;
    border: none;

    /* @media (min-width: ${pe.breakpoint.tablet}) {
      border-top: ${({theme:e})=>e.global.spacing(1)} solid
        ${({theme:e})=>e.mainBgColor};
      border-bottom: ${({theme:e})=>e.global.spacing(1)} solid
        ${({theme:e})=>e.mainBgColor};

      transition: border 0ms;
    } */

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
`,ru=V.div`
  flex-grow: 1;

  @media (min-width: ${pe.breakpoint.tablet}) {
    border-top: ${({theme:e})=>e.global.spacing(1)} solid
      ${({theme:e})=>e.mainBgColor};
    border-bottom: ${({theme:e})=>e.global.spacing(1)} solid
      ${({theme:e})=>e.mainBgColor};
  }
`,ou=V.div`
  background-color: ${({theme:e})=>e.secondaryBgColor};
  height: ${({$headerHeight:e})=>`${e}px`};

  @media (min-width: ${pe.breakpoint.tablet}) {
    display: none;
  }
`,iu=({mobileMenu:e,setMobileMenu:t,headerHeight:n})=>{const r=Tt(sn);return b.useEffect(()=>(document.body.classList.toggle("no-scroll",e),()=>document.body.classList.remove("no-scroll")),[e]),$.jsxs(nu,{toggled:e,customBreakPoint:`${pe.breakpoint.maxTablet}`,onBackdropClick:()=>t(!1),$profile:!!r,children:[!r&&$.jsx(ou,{$headerHeight:n}),$.jsxs(ru,{children:[r&&$.jsx(Rs,{}),$.jsx(Zl,{setMobileMenu:t})]}),r&&$.jsx(di,{})]})},au=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(0),o=vo(),i=Tt(sn),a=()=>t(s=>!s);return b.useEffect(()=>{!o&&t(!1)},[o]),$.jsxs($.Fragment,{children:[$.jsx(Cs,{handleClick:a,mobileMenu:e,setHeaderHeight:r,profile:i}),$.jsxs(Ri,{children:[$.jsx(iu,{setMobileMenu:t,mobileMenu:e,headerHeight:n}),$.jsx(Oi,{children:$.jsx(Ei,{})})]}),!i&&$.jsx(di,{$isMainLayout:!0})]})},uu=au;export{uu as default};
//# sourceMappingURL=index-C5Joymq_.js.map
