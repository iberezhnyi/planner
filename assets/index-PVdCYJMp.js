import{p as Y,s as po,c as an,j as T,u as vo,a as Pt,b as pi,d as nr,g as We,r as b,e as vi,R as hi,f as Ln,N as ut,h as sn,i as mi,k as gi,l as bi,L as yi,m as xi,n as R,o as wi,q as Ci,O as Si}from"./index-BDaZ9jbU.js";import{M as ki,a as Ei,T as Ri,b as Oi,s as lt}from"./Button.styled-_CX5umou.js";const Ti=Y.div`
  display: flex;
  flex-grow: 1;
`,$i=Y.main`
  background-color: ${({theme:e})=>e.mainBgColor};
  flex-grow: 1;

  ${po}

  ${an}
`,Pi=({onClick:e,mobileMenu:t})=>T.jsx(ki,{children:T.jsx(Ei,{$mobileMenu:t,onClick:e,children:T.jsx("span",{})})}),Ai=()=>{const e=vo();return[Pt(pi),r=>e(r==="light"?nr("dark"):nr("light"))]},Ii=()=>{const[e,t]=Ai();return T.jsx(Ri,{onClick:()=>t(e),children:T.jsx(Oi,{children:T.jsx("use",{href:`${lt}#${e==="light"?"moon-stars":"sun"}`})})})},Mi=Y.header`
  padding-top: ${({theme:e})=>e.global.spacing(3)};
  padding-bottom: ${({theme:e})=>e.global.spacing(3)};

  background-color: ${({theme:e})=>e.headerBgColor};
`,Li=Y.div`
  ${an}

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${We.breakpoint.tablet}) {
    justify-content: space-between;
  }
`,Di=Y.img`
  /* margin-left: 50px; */
`;function Xe(e){return ho(e)?(e.nodeName||"").toLowerCase():"#document"}function xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ze(e){var t;return(t=(ho(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ho(e){return e instanceof Node||e instanceof xe(e).Node}function ne(e){return e instanceof Element||e instanceof xe(e).Element}function se(e){return e instanceof HTMLElement||e instanceof xe(e).HTMLElement}function kn(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof xe(e).ShadowRoot}function At(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Re(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function ji(e){return["table","td","th"].includes(Xe(e))}function cn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Dn(e){const t=jn(),n=Re(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ni(e){let t=He(e);for(;se(t)&&!_e(t);){if(cn(t))return null;if(Dn(t))return t;t=He(t)}return null}function jn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _e(e){return["html","body","#document"].includes(Xe(e))}function Re(e){return xe(e).getComputedStyle(e)}function ln(e){return ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function He(e){if(Xe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||kn(e)&&e.host||ze(e);return kn(t)?t.host:t}function mo(e){const t=He(e);return _e(t)?e.ownerDocument?e.ownerDocument.body:e.body:se(t)&&At(t)?t:mo(t)}function Ke(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=mo(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=xe(o);return i?t.concat(a,a.visualViewport||[],At(o)?o:[],a.frameElement&&n?Ke(a.frameElement):[]):t.concat(o,Ke(o,[],n))}function Je(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function be(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&kn(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Fi(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function go(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Bi(e){return e.mozInputSource===0&&e.isTrusted?!0:En()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Wi(e){return Vi()?!1:!En()&&e.width===0&&e.height===0||En()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Hi(){return/apple/i.test(navigator.vendor)}function En(){const e=/android/i;return e.test(Fi())||e.test(go())}function Vi(){return go().includes("jsdom/")}function rr(e,t){return["mouse","pen"].includes(e)}function zi(e){return"nativeEvent"in e}function Ui(e){return e.matches("html,body")}function Pe(e){return(e==null?void 0:e.ownerDocument)||document}function hn(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function tt(e){return"composedPath"in e?e.composedPath()[0]:e.target}const qi="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function bo(e){return se(e)&&e.matches(qi)}function mn(e){e.preventDefault(),e.stopPropagation()}function Ki(e){return e?e.getAttribute("role")==="combobox"&&bo(e):!1}const Rn=Math.min,ft=Math.max,_t=Math.round,Dt=Math.floor,Ye=e=>({x:e,y:e});function yo(e){return e.split("-")[0]}function _i(e){return e.split("-")[1]}function Yi(e){return e==="x"?"y":"x"}function Xi(e){return e==="y"?"height":"width"}function xo(e){return["top","bottom"].includes(yo(e))?"y":"x"}function Gi(e){return Yi(xo(e))}function wo(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Qi=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Yt=Qi.join(","),Co=typeof Element>"u",pt=Co?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Xt=!Co&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Gt=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),i=o===""||o==="true",a=i||n&&t&&e(t.parentNode);return a},Zi=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},Ji=function(t,n,r){if(Gt(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(Yt));return n&&pt.call(t,Yt)&&o.unshift(t),o=o.filter(r),o},ea=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Gt(a,!1))if(a.tagName==="SLOT"){var s=a.assignedElements(),c=s.length?s:a.children,u=e(c,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:a,candidates:u})}else{var l=pt.call(a,Yt);l&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),y=!Gt(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(d&&y){var f=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:a,candidates:f})}else i.unshift.apply(i,a.children)}}return o},So=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},ko=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Zi(t))&&!So(t)?0:t.tabIndex},ta=function(t,n){var r=ko(t);return r<0&&n&&!So(t)?0:r},na=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},Eo=function(t){return t.tagName==="INPUT"},ra=function(t){return Eo(t)&&t.type==="hidden"},oa=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},ia=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},aa=function(t){if(!t.name)return!0;var n=t.form||Xt(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=ia(o,t.form);return!i||i===t},sa=function(t){return Eo(t)&&t.type==="radio"},ca=function(t){return sa(t)&&!aa(t)},la=function(t){var n,r=t&&Xt(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,s,c;for(i=!!((a=o)!==null&&a!==void 0&&(s=a.ownerDocument)!==null&&s!==void 0&&s.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,l,d;r=Xt(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((l=o)!==null&&l!==void 0&&(d=l.ownerDocument)!==null&&d!==void 0&&d.contains(o))}}return i},or=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},ua=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=pt.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(pt.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var s=t;t;){var c=t.parentElement,u=Xt(t);if(c&&!c.shadowRoot&&o(c)===!0)return or(t);t.assignedSlot?t=t.assignedSlot:!c&&u!==t.ownerDocument?t=u.host:t=c}t=s}if(la(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return or(t);return!1},fa=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return pt.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},da=function(t,n){return!(n.disabled||Gt(n)||ra(n)||ua(n,t)||oa(n)||fa(n))},On=function(t,n){return!(ca(n)||ko(n)<0||!da(t,n))},pa=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},va=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scopeParent,s=a?o.scopeParent:o,c=ta(s,a),u=a?e(o.candidates):s;c===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:c,item:o,isScope:a,content:u})}),r.sort(na).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},Nn=function(t,n){n=n||{};var r;return n.getShadowRoot?r=ea([t],n.includeContainer,{filter:On.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:pa}):r=Ji(t,n.includeContainer,On.bind(null,n)),va(r)},ha=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return pt.call(t,Yt)===!1?!1:On(n,t)};function ir(e,t,n){let{reference:r,floating:o}=e;const i=xo(t),a=Gi(t),s=Xi(a),c=yo(t),u=i==="y",l=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,y=r[s]/2-o[s]/2;let f;switch(c){case"top":f={x:l,y:r.y-o.height};break;case"bottom":f={x:l,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(_i(t)){case"start":f[a]-=y*(n&&u?-1:1);break;case"end":f[a]+=y*(n&&u?-1:1);break}return f}const ma=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:l,y:d}=ir(u,r,c),y=r,f={},p=0;for(let v=0;v<s.length;v++){const{name:w,fn:C}=s[v],{x:S,y:g,data:h,reset:x}=await C({x:l,y:d,initialPlacement:r,placement:y,strategy:o,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});l=S??l,d=g??d,f={...f,[w]:{...f[w],...h}},x&&p<=50&&(p++,typeof x=="object"&&(x.placement&&(y=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:l,y:d}=ir(u,y,c)),v=-1)}return{x:l,y:d,placement:y,strategy:o,middlewareData:f}};function Ro(e){const t=Re(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=se(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=_t(n)!==i||_t(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function Fn(e){return ne(e)?e:e.contextElement}function dt(e){const t=Fn(e);if(!se(t))return Ye(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Ro(t);let a=(i?_t(n.width):n.width)/r,s=(i?_t(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const ga=Ye(0);function Oo(e){const t=xe(e);return!jn()||!t.visualViewport?ga:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ba(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==xe(e)?!1:t}function ot(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Fn(e);let a=Ye(1);t&&(r?ne(r)&&(a=dt(r)):a=dt(e));const s=ba(i,n,r)?Oo(i):Ye(0);let c=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,l=o.width/a.x,d=o.height/a.y;if(i){const y=xe(i),f=r&&ne(r)?xe(r):r;let p=y,v=p.frameElement;for(;v&&r&&f!==p;){const w=dt(v),C=v.getBoundingClientRect(),S=Re(v),g=C.left+(v.clientLeft+parseFloat(S.paddingLeft))*w.x,h=C.top+(v.clientTop+parseFloat(S.paddingTop))*w.y;c*=w.x,u*=w.y,l*=w.x,d*=w.y,c+=g,u+=h,p=xe(v),v=p.frameElement}}return wo({width:l,height:d,x:c,y:u})}function ya(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=ze(r),s=t?cn(t.floating):!1;if(r===a||s&&i)return n;let c={scrollLeft:0,scrollTop:0},u=Ye(1);const l=Ye(0),d=se(r);if((d||!d&&!i)&&((Xe(r)!=="body"||At(a))&&(c=ln(r)),se(r))){const y=ot(r);u=dt(r),l.x=y.x+r.clientLeft,l.y=y.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+l.x,y:n.y*u.y-c.scrollTop*u.y+l.y}}function xa(e){return Array.from(e.getClientRects())}function To(e){return ot(ze(e)).left+ln(e).scrollLeft}function wa(e){const t=ze(e),n=ln(e),r=e.ownerDocument.body,o=ft(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ft(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+To(e);const s=-n.scrollTop;return Re(r).direction==="rtl"&&(a+=ft(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function Ca(e,t){const n=xe(e),r=ze(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;const u=jn();(!u||u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}function Sa(e,t){const n=ot(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=se(e)?dt(e):Ye(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:a,height:s,x:c,y:u}}function ar(e,t,n){let r;if(t==="viewport")r=Ca(e,n);else if(t==="document")r=wa(ze(e));else if(ne(t))r=Sa(t,n);else{const o=Oo(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return wo(r)}function $o(e,t){const n=He(e);return n===t||!ne(n)||_e(n)?!1:Re(n).position==="fixed"||$o(n,t)}function ka(e,t){const n=t.get(e);if(n)return n;let r=Ke(e,[],!1).filter(s=>ne(s)&&Xe(s)!=="body"),o=null;const i=Re(e).position==="fixed";let a=i?He(e):e;for(;ne(a)&&!_e(a);){const s=Re(a),c=Dn(a);!c&&s.position==="fixed"&&(o=null),(i?!c&&!o:!c&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||At(a)&&!c&&$o(e,a))?r=r.filter(l=>l!==a):o=s,a=He(a)}return t.set(e,r),r}function Ea(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?cn(t)?[]:ka(t,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,l)=>{const d=ar(t,l,o);return u.top=ft(d.top,u.top),u.right=Rn(d.right,u.right),u.bottom=Rn(d.bottom,u.bottom),u.left=ft(d.left,u.left),u},ar(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Ra(e){const{width:t,height:n}=Ro(e);return{width:t,height:n}}function Oa(e,t,n){const r=se(t),o=ze(t),i=n==="fixed",a=ot(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const c=Ye(0);if(r||!r&&!i)if((Xe(t)!=="body"||At(o))&&(s=ln(t)),r){const d=ot(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=To(o));const u=a.left+s.scrollLeft-c.x,l=a.top+s.scrollTop-c.y;return{x:u,y:l,width:a.width,height:a.height}}function gn(e){return Re(e).position==="static"}function sr(e,t){return!se(e)||Re(e).position==="fixed"?null:t?t(e):e.offsetParent}function Po(e,t){const n=xe(e);if(cn(e))return n;if(!se(e)){let o=He(e);for(;o&&!_e(o);){if(ne(o)&&!gn(o))return o;o=He(o)}return n}let r=sr(e,t);for(;r&&ji(r)&&gn(r);)r=sr(r,t);return r&&_e(r)&&gn(r)&&!Dn(r)?n:r||Ni(e)||n}const Ta=async function(e){const t=this.getOffsetParent||Po,n=this.getDimensions,r=await n(e.floating);return{reference:Oa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function $a(e){return Re(e).direction==="rtl"}const Pa={convertOffsetParentRelativeRectToViewportRelativeRect:ya,getDocumentElement:ze,getClippingRect:Ea,getOffsetParent:Po,getElementRects:Ta,getClientRects:xa,getDimensions:Ra,getScale:dt,isElement:ne,isRTL:$a};function Aa(e,t){let n=null,r;const o=ze(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();const{left:u,top:l,width:d,height:y}=e.getBoundingClientRect();if(s||t(),!d||!y)return;const f=Dt(l),p=Dt(o.clientWidth-(u+d)),v=Dt(o.clientHeight-(l+y)),w=Dt(u),S={rootMargin:-f+"px "+-p+"px "+-v+"px "+-w+"px",threshold:ft(0,Rn(1,c))||1};let g=!0;function h(x){const m=x[0].intersectionRatio;if(m!==c){if(!g)return a();m?a(!1,m):r=setTimeout(()=>{a(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(h,{...S,root:o.ownerDocument})}catch{n=new IntersectionObserver(h,S)}n.observe(e)}return a(!0),i}function Ia(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Fn(e),l=o||i?[...u?Ke(u):[],...Ke(t)]:[];l.forEach(C=>{o&&C.addEventListener("scroll",n,{passive:!0}),i&&C.addEventListener("resize",n)});const d=u&&s?Aa(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(C=>{let[S]=C;S&&S.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var g;(g=f)==null||g.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let p,v=c?ot(e):null;c&&w();function w(){const C=ot(e);v&&(C.x!==v.x||C.y!==v.y||C.width!==v.width||C.height!==v.height)&&n(),v=C,p=requestAnimationFrame(w)}return n(),()=>{var C;l.forEach(S=>{o&&S.removeEventListener("scroll",n),i&&S.removeEventListener("resize",n)}),d==null||d(),(C=f)==null||C.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Ma=(e,t,n)=>{const r=new Map,o={platform:Pa,...n},i={...o.platform,_c:r};return ma(e,t,{...o,platform:i})};var Ht=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Qt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Qt(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Qt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Ao(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function cr(e,t){const n=Ao(e);return Math.round(t*n)/n}function lr(e){const t=b.useRef(e);return Ht(()=>{t.current=e}),t}function La(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[l,d]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[y,f]=b.useState(r);Qt(y,r)||f(r);const[p,v]=b.useState(null),[w,C]=b.useState(null),S=b.useCallback($=>{$!==m.current&&(m.current=$,v($))},[]),g=b.useCallback($=>{$!==k.current&&(k.current=$,C($))},[]),h=i||p,x=a||w,m=b.useRef(null),k=b.useRef(null),O=b.useRef(l),L=c!=null,I=lr(c),B=lr(o),A=b.useCallback(()=>{if(!m.current||!k.current)return;const $={placement:t,strategy:n,middleware:y};B.current&&($.platform=B.current),Ma(m.current,k.current,$).then(W=>{const X={...W,isPositioned:!0};V.current&&!Qt(O.current,X)&&(O.current=X,vi.flushSync(()=>{d(X)}))})},[y,t,n,B]);Ht(()=>{u===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d($=>({...$,isPositioned:!1})))},[u]);const V=b.useRef(!1);Ht(()=>(V.current=!0,()=>{V.current=!1}),[]),Ht(()=>{if(h&&(m.current=h),x&&(k.current=x),h&&x){if(I.current)return I.current(h,x,A);A()}},[h,x,A,I,L]);const E=b.useMemo(()=>({reference:m,floating:k,setReference:S,setFloating:g}),[S,g]),j=b.useMemo(()=>({reference:h,floating:x}),[h,x]),N=b.useMemo(()=>{const $={position:n,left:0,top:0};if(!j.floating)return $;const W=cr(j.floating,l.x),X=cr(j.floating,l.y);return s?{...$,transform:"translate("+W+"px, "+X+"px)",...Ao(j.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:X}},[n,s,j.floating,l.x,l.y]);return b.useMemo(()=>({...l,update:A,refs:E,elements:j,floatingStyles:N}),[l,A,E,j,N])}const Io={...hi},Da=Io.useInsertionEffect,ja=Da||(e=>e());function qe(e){const t=b.useRef(()=>{});return ja(()=>{t.current=e}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}let ur=0;function Ze(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(ur);const i=()=>e==null?void 0:e.focus({preventScroll:n});o?i():ur=requestAnimationFrame(i)}var Be=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Zt(){return Zt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zt.apply(this,arguments)}let fr=!1,Na=0;const dr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Na++;function Fa(){const[e,t]=b.useState(()=>fr?dr():void 0);return Be(()=>{e==null&&t(dr())},[]),b.useEffect(()=>{fr=!0},[]),e}const Ba=Io.useId,Bn=Ba||Fa;function Wa(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const Ha=b.createContext(null),Va=b.createContext(null),Mo=()=>{var e;return((e=b.useContext(Ha))==null?void 0:e.id)||null},Wn=()=>b.useContext(Va);function Jt(e){return"data-floating-ui-"+e}function bn(e){const t=b.useRef(e);return Be(()=>{t.current=e}),t}function za(e,t){var n;let r=[],o=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;o;){const i=e.find(a=>a.id===o);o=i==null?void 0:i.parentId,i&&(r=r.concat(i))}return r}function Ct(e,t){let n=e.filter(o=>{var i;return o.parentId===t&&((i=o.context)==null?void 0:i.open)}),r=n;for(;r.length;)r=e.filter(o=>{var i;return(i=r)==null?void 0:i.some(a=>{var s;return o.parentId===a.id&&((s=o.context)==null?void 0:s.open)})}),n=n.concat(r);return n}let ct=new WeakMap,jt=new WeakSet,Nt={},yn=0;const Ua=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Lo=e=>e&&(e.host||Lo(e.parentNode)),qa=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=Lo(n);return e.contains(r)?r:null}).filter(n=>n!=null);function Ka(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=qa(t,e),s=new Set,c=new Set(a),u=[];Nt[o]||(Nt[o]=new WeakMap);const l=Nt[o];a.forEach(d),y(t),s.clear();function d(f){!f||s.has(f)||(s.add(f),f.parentNode&&d(f.parentNode))}function y(f){!f||c.has(f)||[].forEach.call(f.children,p=>{if(Xe(p)!=="script")if(s.has(p))y(p);else{const v=i?p.getAttribute(i):null,w=v!==null&&v!=="false",C=(ct.get(p)||0)+1,S=(l.get(p)||0)+1;ct.set(p,C),l.set(p,S),u.push(p),C===1&&w&&jt.add(p),S===1&&p.setAttribute(o,""),!w&&i&&p.setAttribute(i,"true")}})}return yn++,()=>{u.forEach(f=>{const p=(ct.get(f)||0)-1,v=(l.get(f)||0)-1;ct.set(f,p),l.set(f,v),p||(!jt.has(f)&&i&&f.removeAttribute(i),jt.delete(f)),v||f.removeAttribute(o)}),yn--,yn||(ct=new WeakMap,ct=new WeakMap,jt=new WeakSet,Nt={})}}function pr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=Pe(e[0]).body;return Ka(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const en=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Do(e,t){const n=Nn(e,en());t==="prev"&&n.reverse();const r=n.indexOf(Je(Pe(e)));return n.slice(r+1)[0]}function _a(){return Do(document.body,"next")}function Ya(){return Do(document.body,"prev")}function vr(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!be(n,r)}const jo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Xa;function hr(e){e.key==="Tab"&&(e.target,clearTimeout(Xa))}const mr=b.forwardRef(function(t,n){const[r,o]=b.useState();Be(()=>(Hi()&&o("button"),document.addEventListener("keydown",hr),()=>{document.removeEventListener("keydown",hr)}),[]);const i={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[Jt("focus-guard")]:"",style:jo};return b.createElement("span",Zt({},t,i))}),Ga=b.createContext(null),Qa=()=>b.useContext(Ga),gr=20;let et=[];function xn(e){et=et.filter(n=>n.isConnected);let t=e;if(!(!t||Xe(t)==="body")){if(!ha(t,en())){const n=Nn(t,en())[0];n&&(t=n)}et.push(t),et.length>gr&&(et=et.slice(-gr))}}function br(){return et.slice().reverse().find(e=>e.isConnected)}const Za=b.forwardRef(function(t,n){return b.createElement("button",Zt({},t,{type:"button",ref:n,tabIndex:-1,style:jo}))});function Ja(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:a=0,returnFocus:s=!0,restoreFocus:c=!1,modal:u=!0,visuallyHiddenDismiss:l=!1,closeOnFocusOut:d=!0}=e,{open:y,refs:f,nodeId:p,onOpenChange:v,events:w,dataRef:C,floatingId:S,elements:{domReference:g,floating:h}}=t,x=typeof a=="number"&&a<0,m=Ki(g)&&x,k=Ua()?i:!0,O=bn(o),L=bn(a),I=bn(s),B=Wn(),A=Qa(),V=b.useRef(null),E=b.useRef(null),j=b.useRef(!1),N=b.useRef(!1),$=b.useRef(-1),W=A!=null,X=h==null?void 0:h.firstElementChild,F=(X==null?void 0:X.id)===S?X:h,G=qe(function(P){return P===void 0&&(P=F),P?Nn(P,en()):[]}),ae=qe(P=>{const M=G(P);return O.current.map(D=>g&&D==="reference"?g:F&&D==="floating"?F:M).filter(Boolean).flat()});b.useEffect(()=>{if(r||!u)return;function P(D){if(D.key==="Tab"){be(F,Je(Pe(F)))&&G().length===0&&!m&&mn(D);const H=ae(),_=tt(D);O.current[0]==="reference"&&_===g&&(mn(D),D.shiftKey?Ze(H[H.length-1]):Ze(H[1])),O.current[1]==="floating"&&_===F&&D.shiftKey&&(mn(D),Ze(H[0]))}}const M=Pe(F);return M.addEventListener("keydown",P),()=>{M.removeEventListener("keydown",P)}},[r,g,F,u,O,m,G,ae]),b.useEffect(()=>{if(r||!h)return;function P(M){const D=tt(M),_=G().indexOf(D);_!==-1&&($.current=_)}return h.addEventListener("focusin",P),()=>{h.removeEventListener("focusin",P)}},[r,h,G]),b.useEffect(()=>{if(r||!d)return;function P(){N.current=!0,setTimeout(()=>{N.current=!1})}function M(D){const H=D.relatedTarget;queueMicrotask(()=>{const _=!(be(g,H)||be(h,H)||be(H,h)||be(A==null?void 0:A.portalNode,H)||H!=null&&H.hasAttribute(Jt("focus-guard"))||B&&(Ct(B.nodesRef.current,p).find(te=>{var Q,le;return be((Q=te.context)==null?void 0:Q.elements.floating,H)||be((le=te.context)==null?void 0:le.elements.domReference,H)})||za(B.nodesRef.current,p).find(te=>{var Q,le;return((Q=te.context)==null?void 0:Q.elements.floating)===H||((le=te.context)==null?void 0:le.elements.domReference)===H})));if(c&&_&&Je(Pe(F))===Pe(F).body){se(F)&&(F==null||F.focus());const te=$.current,Q=G(),le=Q[te]||Q[Q.length-1]||F;se(le)&&le.focus()}(m||!u)&&H&&_&&!N.current&&H!==br()&&(j.current=!0,v(!1,D))})}if(h&&se(g))return g.addEventListener("focusout",M),g.addEventListener("pointerdown",P),h.addEventListener("focusout",M),()=>{g.removeEventListener("focusout",M),g.removeEventListener("pointerdown",P),h.removeEventListener("focusout",M)}},[r,g,h,F,u,p,B,A,v,d,c,G,m]),b.useEffect(()=>{var P;if(r)return;const M=Array.from((A==null||(P=A.portalNode)==null?void 0:P.querySelectorAll("["+Jt("portal")+"]"))||[]);if(h){const D=[h,...M,V.current,E.current,O.current.includes("reference")||m?g:null].filter(_=>_!=null),H=u||m?pr(D,k,!k):pr(D);return()=>{H()}}},[r,g,h,u,O,A,m,k]),Be(()=>{if(r||!se(F))return;const P=Pe(F),M=Je(P);queueMicrotask(()=>{const D=ae(F),H=L.current,_=(typeof H=="number"?D[H]:H.current)||F,te=be(F,M);!x&&!te&&y&&Ze(_,{preventScroll:_===F})})},[r,y,F,x,ae,L]),Be(()=>{if(r||!F)return;let P=!1;const M=Pe(F),D=Je(M);let _=C.current.openEvent;xn(D);function te(Q){let{open:le,reason:Fe,event:oe,nested:ve}=Q;le&&(_=oe),Fe==="escape-key"&&f.domReference.current&&xn(f.domReference.current),Fe==="hover"&&oe.type==="mouseleave"&&(j.current=!0),Fe==="outside-press"&&(ve?(j.current=!1,P=!0):j.current=!(Bi(oe)||Wi(oe)))}return w.on("openchange",te),()=>{w.off("openchange",te);const Q=Je(M),le=be(h,Q)||B&&Ct(B.nodesRef.current,p).some(ve=>{var Z;return be((Z=ve.context)==null?void 0:Z.elements.floating,Q)});(le||_&&["click","mousedown"].includes(_.type))&&f.domReference.current&&xn(f.domReference.current);const oe=br();I.current&&!j.current&&se(oe)&&(!(oe!==Q&&Q!==M.body)||le)&&Ze(oe,{cancelPrevious:!1,preventScroll:P})}},[r,h,F,I,C,f,w,B,p]),Be(()=>{if(!r&&A)return A.setFocusManagerState({modal:u,closeOnFocusOut:d,open:y,onOpenChange:v,refs:f}),()=>{A.setFocusManagerState(null)}},[r,A,u,y,v,f,d]),Be(()=>{if(r||!F||typeof MutationObserver!="function"||x)return;const P=()=>{const D=F.getAttribute("tabindex"),H=G(),_=Je(Pe(h)),te=H.indexOf(_);te!==-1&&($.current=te),O.current.includes("floating")||_!==f.domReference.current&&H.length===0?D!=="0"&&F.setAttribute("tabindex","0"):D!=="-1"&&F.setAttribute("tabindex","-1")};P();const M=new MutationObserver(P);return M.observe(F,{childList:!0,subtree:!0,attributes:!0}),()=>{M.disconnect()}},[r,h,F,f,O,G,x]);function Ce(P){return r||!l||!u?null:b.createElement(Za,{ref:P==="start"?V:E,onClick:M=>v(!1,M.nativeEvent)},typeof l=="string"?l:"Dismiss")}const pe=!r&&k&&(u?!m:!0)&&(W||u);return b.createElement(b.Fragment,null,pe&&b.createElement(mr,{"data-type":"inside",ref:A==null?void 0:A.beforeInsideRef,onFocus:P=>{if(u){const D=ae();Ze(o[0]==="reference"?D[0]:D[D.length-1])}else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(j.current=!1,vr(P,A.portalNode)){const D=_a()||g;D==null||D.focus()}else{var M;(M=A.beforeOutsideRef.current)==null||M.focus()}}}),!m&&Ce("start"),n,Ce("end"),pe&&b.createElement(mr,{"data-type":"inside",ref:A==null?void 0:A.afterInsideRef,onFocus:P=>{if(u)Ze(ae()[0]);else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(d&&(j.current=!0),vr(P,A.portalNode)){const D=Ya()||g;D==null||D.focus()}else{var M;(M=A.afterOutsideRef.current)==null||M.focus()}}}))}function yr(e){return se(e.target)&&e.target.tagName==="BUTTON"}function xr(e){return bo(e)}function es(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:l=!0}=t,d=b.useRef(),y=b.useRef(!1),f=b.useMemo(()=>({onPointerDown(p){d.current=p.pointerType},onMouseDown(p){const v=d.current;p.button===0&&s!=="click"&&(rr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?r(!1,p.nativeEvent,"click"):(p.preventDefault(),r(!0,p.nativeEvent,"click"))))},onClick(p){const v=d.current;if(s==="mousedown"&&d.current){d.current=void 0;return}rr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="click")?r(!1,p.nativeEvent,"click"):r(!0,p.nativeEvent,"click"))},onKeyDown(p){d.current=void 0,!(p.defaultPrevented||!l||yr(p))&&(p.key===" "&&!xr(i)&&(p.preventDefault(),y.current=!0),p.key==="Enter"&&r(!(n&&c),p.nativeEvent,"click"))},onKeyUp(p){p.defaultPrevented||!l||yr(p)||xr(i)||p.key===" "&&y.current&&(y.current=!1,r(!(n&&c),p.nativeEvent,"click"))}}),[o,i,s,u,l,r,n,c]);return b.useMemo(()=>a?{reference:f}:{},[a,f])}const ts={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},ns={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},wr=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function rs(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:i}=e,{enabled:a=!0,escapeKey:s=!0,outsidePress:c=!0,outsidePressEvent:u="pointerdown",referencePress:l=!1,referencePressEvent:d="pointerdown",ancestorScroll:y=!1,bubbles:f,capture:p}=t,v=Wn(),w=qe(typeof c=="function"?c:()=>!1),C=typeof c=="function"?w:c,S=b.useRef(!1),g=b.useRef(!1),{escapeKey:h,outsidePress:x}=wr(f),{escapeKey:m,outsidePress:k}=wr(p),O=qe(E=>{var j;if(!n||!a||!s||E.key!=="Escape")return;const N=(j=i.current.floatingContext)==null?void 0:j.nodeId,$=v?Ct(v.nodesRef.current,N):[];if(!h&&(E.stopPropagation(),$.length>0)){let W=!0;if($.forEach(X=>{var F;if((F=X.context)!=null&&F.open&&!X.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}r(!1,zi(E)?E.nativeEvent:E,"escape-key")}),L=qe(E=>{var j;const N=()=>{var $;O(E),($=tt(E))==null||$.removeEventListener("keydown",N)};(j=tt(E))==null||j.addEventListener("keydown",N)}),I=qe(E=>{var j;const N=S.current;S.current=!1;const $=g.current;if(g.current=!1,u==="click"&&$||N||typeof C=="function"&&!C(E))return;const W=tt(E),X="["+Jt("inert")+"]",F=Pe(o.floating).querySelectorAll(X);let G=ne(W)?W:null;for(;G&&!_e(G);){const P=He(G);if(_e(P)||!ne(P))break;G=P}if(F.length&&ne(W)&&!Ui(W)&&!be(W,o.floating)&&Array.from(F).every(P=>!be(G,P)))return;if(se(W)&&V){const P=W.clientWidth>0&&W.scrollWidth>W.clientWidth,M=W.clientHeight>0&&W.scrollHeight>W.clientHeight;let D=M&&E.offsetX>W.clientWidth;if(M&&Re(W).direction==="rtl"&&(D=E.offsetX<=W.offsetWidth-W.clientWidth),D||P&&E.offsetY>W.clientHeight)return}const ae=(j=i.current.floatingContext)==null?void 0:j.nodeId,Ce=v&&Ct(v.nodesRef.current,ae).some(P=>{var M;return hn(E,(M=P.context)==null?void 0:M.elements.floating)});if(hn(E,o.floating)||hn(E,o.domReference)||Ce)return;const pe=v?Ct(v.nodesRef.current,ae):[];if(pe.length>0){let P=!0;if(pe.forEach(M=>{var D;if((D=M.context)!=null&&D.open&&!M.context.dataRef.current.__outsidePressBubbles){P=!1;return}}),!P)return}r(!1,E,"outside-press")}),B=qe(E=>{var j;const N=()=>{var $;I(E),($=tt(E))==null||$.removeEventListener(u,N)};(j=tt(E))==null||j.addEventListener(u,N)});b.useEffect(()=>{if(!n||!a)return;i.current.__escapeKeyBubbles=h,i.current.__outsidePressBubbles=x;function E($){r(!1,$,"ancestor-scroll")}const j=Pe(o.floating);s&&j.addEventListener("keydown",m?L:O,m),C&&j.addEventListener(u,k?B:I,k);let N=[];return y&&(ne(o.domReference)&&(N=Ke(o.domReference)),ne(o.floating)&&(N=N.concat(Ke(o.floating))),!ne(o.reference)&&o.reference&&o.reference.contextElement&&(N=N.concat(Ke(o.reference.contextElement)))),N=N.filter($=>{var W;return $!==((W=j.defaultView)==null?void 0:W.visualViewport)}),N.forEach($=>{$.addEventListener("scroll",E,{passive:!0})}),()=>{s&&j.removeEventListener("keydown",m?L:O,m),C&&j.removeEventListener(u,k?B:I,k),N.forEach($=>{$.removeEventListener("scroll",E)})}},[i,o,s,C,u,n,r,y,a,h,x,O,m,L,I,k,B]),b.useEffect(()=>{S.current=!1},[C,u]);const A=b.useMemo(()=>({onKeyDown:O,[ts[d]]:E=>{l&&r(!1,E.nativeEvent,"reference-press")}}),[O,r,l,d]),V=b.useMemo(()=>({onKeyDown:O,onMouseDown(){g.current=!0},onMouseUp(){g.current=!0},[ns[u]]:()=>{S.current=!0}}),[O,u]);return b.useMemo(()=>a?{reference:A,floating:V}:{},[a,A,V])}function os(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Bn(),i=b.useRef({}),[a]=b.useState(()=>Wa()),s=Mo()!=null,[c,u]=b.useState(r.reference),l=qe((f,p,v)=>{i.current.openEvent=f?p:void 0,a.emit("openchange",{open:f,event:p,reason:v,nested:s}),n==null||n(f,p,v)}),d=b.useMemo(()=>({setPositionReference:u}),[]),y=b.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return b.useMemo(()=>({dataRef:i,open:t,onOpenChange:l,elements:y,events:a,floatingId:o,refs:d}),[t,l,y,a,o,d])}function is(e){e===void 0&&(e={});const{nodeId:t}=e,n=os({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[i,a]=b.useState(null),[s,c]=b.useState(null),l=(o==null?void 0:o.reference)||i,d=b.useRef(null),y=Wn();Be(()=>{l&&(d.current=l)},[l]);const f=La({...e,elements:{...o,...s&&{reference:s}}}),p=b.useCallback(g=>{const h=ne(g)?{getBoundingClientRect:()=>g.getBoundingClientRect(),contextElement:g}:g;c(h),f.refs.setReference(h)},[f.refs]),v=b.useCallback(g=>{(ne(g)||g===null)&&(d.current=g,a(g)),(ne(f.refs.reference.current)||f.refs.reference.current===null||g!==null&&!ne(g))&&f.refs.setReference(g)},[f.refs]),w=b.useMemo(()=>({...f.refs,setReference:v,setPositionReference:p,domReference:d}),[f.refs,v,p]),C=b.useMemo(()=>({...f.elements,domReference:l}),[f.elements,l]),S=b.useMemo(()=>({...f,...r,refs:w,elements:C,nodeId:t}),[f,w,C,t,r]);return Be(()=>{r.dataRef.current.floatingContext=S;const g=y==null?void 0:y.nodesRef.current.find(h=>h.id===t);g&&(g.context=S)}),b.useMemo(()=>({...f,context:S,refs:w,elements:C}),[f,w,C,S])}const Cr="active",Sr="selected";function wn(e,t,n){const r=new Map,o=n==="item";let i=e;if(o&&e){const{[Cr]:a,[Sr]:s,...c}=e;i=c}return{...n==="floating"&&{tabIndex:-1},...i,...t.map(a=>{const s=a?a[n]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(c=>{let[u,l]=c;if(!(o&&[Cr,Sr].includes(u)))if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof l=="function"){var d;(d=r.get(u))==null||d.push(l),a[u]=function(){for(var y,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(y=r.get(u))==null?void 0:y.map(w=>w(...p)).find(w=>w!==void 0)}}}else a[u]=l}),a),{})}}function as(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),n=e.map(s=>s==null?void 0:s.floating),r=e.map(s=>s==null?void 0:s.item),o=b.useCallback(s=>wn(s,e,"reference"),t),i=b.useCallback(s=>wn(s,e,"floating"),n),a=b.useCallback(s=>wn(s,e,"item"),r);return b.useMemo(()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:a}),[o,i,a])}const ss=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function cs(e,t){var n;t===void 0&&(t={});const{open:r,floatingId:o}=e,{enabled:i=!0,role:a="dialog"}=t,s=(n=ss.get(a))!=null?n:a,c=Bn(),l=Mo()!=null,d=b.useMemo(()=>s==="tooltip"||a==="label"?{["aria-"+(a==="label"?"labelledby":"describedby")]:r?o:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":r?o:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:c},...s==="menu"&&l&&{role:"menuitem"},...a==="select"&&{"aria-autocomplete":"none"},...a==="combobox"&&{"aria-autocomplete":"list"}},[s,o,l,r,c,a]),y=b.useMemo(()=>{const p={id:o,...s&&{role:s}};return s==="tooltip"||a==="label"?p:{...p,...s==="menu"&&{"aria-labelledby":c}}},[s,o,c,a]),f=b.useCallback(p=>{let{active:v,selected:w}=p;const C={role:"option",...v&&{id:o+"-option"}};switch(a){case"select":return{...C,"aria-selected":v&&w};case"combobox":return{...C,...v&&{"aria-selected":!0}}}return{}},[o,a]);return b.useMemo(()=>i?{reference:d,floating:y,item:f}:{},[i,d,y,f])}const kr=Y.button`
  ${Ln}

  color: ${({theme:e})=>e.global.text.color.white};

  &.logout {
    color: ${({theme:e})=>e.textColor};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,ls=Y(ut)`
  ${Ln}

  padding-right: 0;

  color: ${({theme:e})=>e.global.text.color.white};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,us=Y.p`
  margin-bottom: 0;
`,Er=Y.svg`
  width: 1.75rem;
  height: 1.75rem;

  fill: transparent;
  stroke: currentColor;
`,fs=Y.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);
  }
`,ds=Y.ul`
  padding: ${({theme:e})=>e.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({theme:e})=>e.mainBgColor};
`,Rr=Y.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(3)};
  }
`,ps=Y(ut)`
  ${Ln}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,Or=Y.svg`
  width: 1rem;
  height: 1rem;

  fill: transparent;
  stroke: currentColor;
`,vs=()=>{const e=Pt(sn),t=vo(),n=mi(),[,{isLoading:r}]=gi({fixedCacheKey:"login-user"}),[,{isLoading:o}]=bi({fixedCacheKey:"register-user"}),i=()=>{t(xi()),n("/login"),s(!1)},[a,s]=b.useState(!1),{refs:c,floatingStyles:u,context:l}=is({open:a,onOpenChange:s,whileElementsMounted:Ia}),d=es(l),y=rs(l),f=cs(l,{role:"menu"}),{getReferenceProps:p,getFloatingProps:v}=as([d,y,f]),w=Bn();return T.jsxs(T.Fragment,{children:[e&&T.jsxs(kr,{ref:c.setReference,...p(),children:[T.jsx(us,{children:e.firstName}),T.jsx(Er,{children:T.jsx("use",{href:`${lt}#user`})}),T.jsx(fs,{className:a?"open":"",children:T.jsx("use",{href:`${lt}#arrow-down`})})]}),!e&&T.jsxs(ls,{to:"/login",children:[r||o?T.jsx(yi,{}):T.jsx("p",{children:"Log in"}),T.jsx(Er,{children:T.jsx("use",{href:`${lt}#user`})})]}),a&&T.jsx(Ja,{context:l,modal:!1,initialFocus:-1,children:T.jsx("div",{className:"Popover",ref:c.setFloating,style:u,"aria-labelledby":w,...v(),children:T.jsxs(ds,{children:[T.jsx(Rr,{role:"menuitem",children:T.jsxs(kr,{onClick:i,className:"logout",children:[T.jsx(Or,{children:T.jsx("use",{href:`${lt}#logout`})}),"Log out"]})}),T.jsx(Rr,{role:"menuitem",children:T.jsxs(ps,{to:"/settings",children:[T.jsx(Or,{children:T.jsx("use",{href:`${lt}#settings`})}),"Settings"]})})]})})})]})},hs="/mv/assets/logo-placeholder4-BQQMUQJQ.png",ms=({isMobile:e,handleClick:t,mobileMenu:n,setHeaderHeight:r})=>{const o=b.useRef(null);return b.useEffect(()=>{o.current&&r(o.current.offsetHeight)},[r]),T.jsx(Mi,{ref:o,children:T.jsxs(Li,{children:[e&&T.jsx(Pi,{onClick:()=>t(),mobileMenu:n}),!e&&T.jsx(Di,{src:hs,alt:"Logo",width:"130"}),T.jsx(vs,{})]})})},gs=Y.div`
  padding-top: ${({theme:e})=>e.global.spacing(12)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  background-color: ${({theme:e})=>e.secondaryBgColor};

  @media (min-width: ${We.breakpoint.tablet}) {
    padding-top: ${({theme:e})=>e.global.spacing(2)};
  }
`,bs=Y.ul`
  ${an}
`,Cn=Y.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(2)};
  }
`,ys=Y.img`
  border-radius: 50%;
`,Tr=Y.p`
  color: ${({theme:e})=>e.textColorSecondary};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};
  font-weight: ${({theme:e})=>e.global.text.fontWeight.m};
`,xs=()=>{const e=Pt(sn);return T.jsx(gs,{children:T.jsxs(bs,{children:[T.jsx(Cn,{children:T.jsx(ys,{src:e==null?void 0:e.image,alt:"User photo",width:"60"})}),T.jsx(Cn,{children:T.jsx(Tr,{children:e==null?void 0:e.firstName})}),T.jsx(Cn,{children:T.jsx(Tr,{children:e==null?void 0:e.email})})]})})};/*! *****************************************************************************
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
***************************************************************************** */var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ye.apply(this,arguments)};function it(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function de(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function Tn(){return Tn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tn.apply(this,arguments)}function Hn(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ws=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Cs=Hn(function(e){return ws.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Ss(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ks(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Es=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ks(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Ss(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),fe="-ms-",tn="-moz-",q="-webkit-",No="comm",Vn="rule",zn="decl",Rs="@import",Fo="@keyframes",Os=Math.abs,un=String.fromCharCode,Ts=Object.assign;function $s(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Bo(e){return e.trim()}function Ps(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function $n(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Et(e,t,n){return e.slice(t,n)}function Me(e){return e.length}function Un(e){return e.length}function Ft(e,t){return t.push(e),e}function As(e,t){return e.map(t).join("")}var fn=1,vt=1,Wo=0,ge=0,re=0,yt="";function dn(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:fn,column:vt,length:a,return:""}}function xt(e,t){return Ts(dn("",null,null,"",null,null,0),e,{length:-e.length},t)}function Is(){return re}function Ms(){return re=ge>0?ue(yt,--ge):0,vt--,re===10&&(vt=1,fn--),re}function we(){return re=ge<Wo?ue(yt,ge++):0,vt++,re===10&&(vt=1,fn++),re}function De(){return ue(yt,ge)}function Vt(){return ge}function It(e,t){return Et(yt,e,t)}function Rt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ho(e){return fn=vt=1,Wo=Me(yt=e),ge=0,[]}function Vo(e){return yt="",e}function zt(e){return Bo(It(ge-1,Pn(e===91?e+2:e===40?e+1:e)))}function Ls(e){for(;(re=De())&&re<33;)we();return Rt(e)>2||Rt(re)>3?"":" "}function Ds(e,t){for(;--t&&we()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return It(e,Vt()+(t<6&&De()==32&&we()==32))}function Pn(e){for(;we();)switch(re){case e:return ge;case 34:case 39:e!==34&&e!==39&&Pn(re);break;case 40:e===41&&Pn(e);break;case 92:we();break}return ge}function js(e,t){for(;we()&&e+re!==57;)if(e+re===84&&De()===47)break;return"/*"+It(t,ge-1)+"*"+un(e===47?e:we())}function Ns(e){for(;!Rt(De());)we();return It(e,ge)}function $r(e){return Vo(Ut("",null,null,null,[""],e=Ho(e),0,[0],e))}function Ut(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,d=a,y=0,f=0,p=0,v=1,w=1,C=1,S=0,g="",h=o,x=i,m=r,k=g;w;)switch(p=S,S=we()){case 40:if(p!=108&&ue(k,d-1)==58){$n(k+=K(zt(S),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:k+=zt(S);break;case 9:case 10:case 13:case 32:k+=Ls(p);break;case 92:k+=Ds(Vt()-1,7);continue;case 47:switch(De()){case 42:case 47:Ft(Fs(js(we(),Vt()),t,n),c);break;default:k+="/"}break;case 123*v:s[u++]=Me(k)*C;case 125*v:case 59:case 0:switch(S){case 0:case 125:w=0;case 59+l:f>0&&Me(k)-d&&Ft(f>32?Ar(k+";",r,n,d-1):Ar(K(k," ","")+";",r,n,d-2),c);break;case 59:k+=";";default:if(Ft(m=Pr(k,t,n,u,l,o,s,g,h=[],x=[],d),i),S===123)if(l===0)Ut(k,t,m,m,h,i,d,s,x);else switch(y===99&&ue(k,3)===110?100:y){case 100:case 109:case 115:Ut(e,m,m,r&&Ft(Pr(e,m,m,0,0,o,s,g,o,h=[],d),x),o,x,d,s,r?h:x);break;default:Ut(k,m,m,m,[""],x,0,s,x)}}u=l=f=0,v=C=1,g=k="",d=a;break;case 58:d=1+Me(k),f=p;default:if(v<1){if(S==123)--v;else if(S==125&&v++==0&&Ms()==125)continue}switch(k+=un(S),S*v){case 38:C=l>0?1:(k+="\f",-1);break;case 44:s[u++]=(Me(k)-1)*C,C=1;break;case 64:De()===45&&(k+=zt(we())),y=De(),l=d=Me(g=k+=Ns(Vt())),S++;break;case 45:p===45&&Me(k)==2&&(v=0)}}return i}function Pr(e,t,n,r,o,i,a,s,c,u,l){for(var d=o-1,y=o===0?i:[""],f=Un(y),p=0,v=0,w=0;p<r;++p)for(var C=0,S=Et(e,d+1,d=Os(v=a[p])),g=e;C<f;++C)(g=Bo(v>0?y[C]+" "+S:K(S,/&\f/g,y[C])))&&(c[w++]=g);return dn(e,t,n,o===0?Vn:s,c,u,l)}function Fs(e,t,n){return dn(e,t,n,No,un(Is()),Et(e,2,-2),0)}function Ar(e,t,n,r){return dn(e,t,n,zn,Et(e,0,r),Et(e,r+1,-1),r)}function nt(e,t){for(var n="",r=Un(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Ir(e,t,n,r){switch(e.type){case Rs:case zn:return e.return=e.return||e.value;case No:return"";case Fo:return e.return=e.value+"{"+nt(e.children,r)+"}";case Vn:e.value=e.props.join(",")}return Me(n=nt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Mr(e){var t=Un(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function Bs(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ws=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}},Hs=function(t,n,r){for(var o=0,i=0;o=i,i=De(),o===38&&i===12&&(n[r]=1),!Rt(i);)we();return It(t,ge)},Vs=function(t,n){var r=-1,o=44;do switch(Rt(o)){case 0:o===38&&De()===12&&(n[r]=1),t[r]+=Hs(ge-1,n,r);break;case 2:t[r]+=zt(o);break;case 4:if(o===44){t[++r]=De()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=un(o)}while(o=we());return t},zs=function(t,n){return Vo(Vs(Ho(t),n))},Lr=new WeakMap,Us=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Lr.get(r))&&!o){Lr.set(t,!0);for(var i=[],a=zs(n,i),s=r.props,c=0,u=0;c<a.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},qs=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function zo(e,t){switch($s(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+tn+e+fe+e+e;case 6828:case 4268:return q+e+fe+e+e;case 6165:return q+e+fe+"flex-"+e+e;case 5187:return q+e+K(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return q+e+fe+"flex-item-"+K(e,/flex-|-self/,"")+e;case 4675:return q+e+fe+"flex-line-pack"+K(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+fe+K(e,"shrink","negative")+e;case 5292:return q+e+fe+K(e,"basis","preferred-size")+e;case 6060:return q+"box-"+K(e,"-grow","")+q+e+fe+K(e,"grow","positive")+e;case 4554:return q+K(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Me(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+tn+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~$n(e,"stretch")?zo(K(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,Me(e)-3-(~$n(e,"!important")&&10))){case 107:return K(e,":",":"+q)+e;case 101:return K(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(ue(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+fe+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+fe+e+e}return e}var Ks=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case zn:t.return=zo(t.value,t.length);break;case Fo:return nt([xt(t,{value:K(t.value,"@","@"+q)})],o);case Vn:if(t.length)return As(t.props,function(i){switch(Ps(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return nt([xt(t,{props:[K(i,/:(read-\w+)/,":"+tn+"$1")]})],o);case"::placeholder":return nt([xt(t,{props:[K(i,/:(plac\w+)/,":"+q+"input-$1")]}),xt(t,{props:[K(i,/:(plac\w+)/,":"+tn+"$1")]}),xt(t,{props:[K(i,/:(plac\w+)/,fe+"input-$1")]})],o)}return""})}},qt=typeof document<"u",_s=qt?void 0:Ws(function(){return Hn(function(){var e={};return function(t){return e[t]}})}),Ys=[Ks],Uo=function(t){var n=t.key;if(qt&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var x=h.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||Ys,i={},a,s=[];qt&&(a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var x=h.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)i[x[m]]=!0;s.push(h)}));var c,u=[Us,qs];if(qt){var l,d=[Ir,Bs(function(h){l.insert(h)})],y=Mr(u.concat(o,d)),f=function(x){return nt($r(x),y)};c=function(x,m,k,O){l=k,f(x?x+"{"+m.styles+"}":m.styles),O&&(g.inserted[m.name]=!0)}}else{var p=[Ir],v=Mr(u.concat(o,p)),w=function(x){return nt($r(x),v)},C=_s(o)(n),S=function(x,m){var k=m.name;return C[k]===void 0&&(C[k]=w(x?x+"{"+m.styles+"}":m.styles)),C[k]};c=function(x,m,k,O){var L=m.name,I=S(x,m);if(g.compat===void 0)return O&&(g.inserted[L]=!0),I;if(O)g.inserted[L]=I;else return I}}var g={key:n,sheet:new Es({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(s),g},Xs=typeof document<"u",Dr=function(t){return t()},Gs=b.useInsertionEffect?b.useInsertionEffect:!1,Qs=Xs&&Gs||Dr,Zs=typeof document<"u",nn=b.createContext(typeof HTMLElement<"u"?Uo({key:"css"}):null);nn.Provider;var qo=function(t){return b.forwardRef(function(n,r){var o=b.useContext(nn);return t(n,o,r)})};Zs||(qo=function(t){return function(n){var r=b.useContext(nn);return r===null?(r=Uo({key:"css"}),b.createElement(nn.Provider,{value:r},t(n,r))):t(n,r)}});var Js=b.createContext({}),An=typeof document<"u";function ec(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Ko=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||An===!1&&t.compat!==void 0)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},tc=function(t,n,r){Ko(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",a=n;do{var s=t.insert(n===a?"."+o:"",a,t.sheet,!0);!An&&s!==void 0&&(i+=s),a=a.next}while(a!==void 0);if(!An&&i.length!==0)return i}};function nc(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var rc={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oc=/[A-Z]|^ms/g,ic=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_o=function(t){return t.charCodeAt(1)===45},jr=function(t){return t!=null&&typeof t!="boolean"},Sn=Hn(function(e){return _o(e)?e:e.replace(oc,"-$&").toLowerCase()}),Nr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ic,function(r,o,i){return Le={name:o,styles:i,next:Le},o})}return rc[t]!==1&&!_o(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ot(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Le={name:n.name,styles:n.styles,next:Le},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Le={name:r.name,styles:r.styles,next:Le},r=r.next;var o=n.styles+";";return o}return ac(e,t,n)}case"function":{if(e!==void 0){var i=Le,a=n(e);return Le=i,Ot(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function ac(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ot(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":jr(a)&&(r+=Sn(i)+":"+Nr(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)jr(a[s])&&(r+=Sn(i)+":"+Nr(i,a[s])+";");else{var c=Ot(e,t,a);switch(i){case"animation":case"animationName":{r+=Sn(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Fr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Le,sc=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Le=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Ot(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Ot(r,n,t[s]),o&&(i+=a[s]);Fr.lastIndex=0;for(var c="",u;(u=Fr.exec(i))!==null;)c+="-"+u[1];var l=nc(i)+c;return{name:l,styles:i,next:Le}},cc=Cs,lc=function(t){return t!=="theme"},Br=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?cc:lc},Wr=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},uc=typeof document<"u",fc=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;Ko(n,r,o);var i=Qs(function(){return tc(n,r,o)});if(!uc&&i!==void 0){for(var a,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return b.createElement("style",(a={},a["data-emotion"]=n.key+" "+s,a.dangerouslySetInnerHTML={__html:i},a.nonce=n.sheet.nonce,a))}return null},dc=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Wr(t,n,r),c=s||Br(o),u=!c("as");return function(){var l=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)d.push.apply(d,l);else{d.push(l[0][0]);for(var y=l.length,f=1;f<y;f++)d.push(l[f],l[0][f])}var p=qo(function(v,w,C){var S=u&&v.as||o,g="",h=[],x=v;if(v.theme==null){x={};for(var m in v)x[m]=v[m];x.theme=b.useContext(Js)}typeof v.className=="string"?g=ec(w.registered,h,v.className):v.className!=null&&(g=v.className+" ");var k=sc(d.concat(h),w.registered,x);g+=w.key+"-"+k.name,a!==void 0&&(g+=" "+a);var O=u&&s===void 0?Br(S):c,L={};for(var I in v)u&&I==="as"||O(I)&&(L[I]=v[I]);return L.className=g,L.ref=C,b.createElement(b.Fragment,null,b.createElement(fc,{cache:w,serialized:k,isStringTag:typeof S=="string"}),b.createElement(S,L))});return p.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(v,w){return e(v,Tn({},n,w,{shouldForwardProp:Wr(p,w,!0)})).apply(void 0,d)},p}},pc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ce=dc.bind();pc.forEach(function(e){ce[e]=ce(e)});var Yo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Yo);var ie=Yo.exports,vc=R.createContext(void 0),hc=function(){var e=R.useContext(vc);return e},mc=function(e){var t=R.useState(!!e&&typeof window<"u"&&window.matchMedia(e).matches),n=t[0],r=t[1];return R.useEffect(function(){if(e){var o=window.matchMedia(e),i=function(){o.matches!==n&&r(o.matches)};return i(),o.addEventListener("change",i),function(){return o.removeEventListener("change",i)}}},[n,e]),n},J={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},U={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},gc=ce.div(Hr||(Hr=de([`
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
`]))),Hr,bc={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},yc=ce.aside(Vr||(Vr=de([`
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
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},J.rtl,J.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},J.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},J.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},J.rtl,function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},J.toggled,function(e){var t=e.rootStyles;return t}),xc=ce.div(zr||(zr=de([`
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
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),wc=ce.img(Ur||(Ur=de([`
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
`])),J.image),pn=R.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),Cc=R.forwardRef(function(e,t){var n,r=e.collapsed,o=e.toggled,i=e.onBackdropClick,a=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,d=e.defaultCollapsed,y=e.className,f=e.children,p=e.breakPoint,v=e.customBreakPoint,w=e.backgroundColor,C=w===void 0?"rgb(249, 249, 249, 0.7)":w,S=e.transitionDuration,g=S===void 0?300:S,h=e.image,x=e.rtl,m=e.rootStyles,k=it(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),O=function(){if(v)return"(max-width: ".concat(v,")");if(p)return["xs","sm","md","lg","xl","xxl"].includes(p)?"(max-width: ".concat(bc[p],")"):p==="always"||p==="all"?(p==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(p,")")},L=R.useRef();L.current=function(W){a==null||a(W)};var I=mc(O()),B=R.useState(!1),A=B[0],V=B[1],E=hc(),j=r??(!A&&d?!0:E==null?void 0:E.collapsed),N=o??(E==null?void 0:E.toggled),$=function(){i==null||i(),E==null||E.updateSidebarState({toggled:!1})};return R.useEffect(function(){var W;(W=L.current)===null||W===void 0||W.call(L,I)},[I]),R.useEffect(function(){E==null||E.updateSidebarState({broken:I,rtl:x,transitionDuration:g})},[I,E==null?void 0:E.updateSidebarState,x,g]),R.useEffect(function(){A||(E==null||E.updateSidebarState({collapsed:d}),V(!0))},[d,A,E==null?void 0:E.updateSidebarState]),R.createElement(pn.Provider,{value:{collapsed:j,toggled:N,rtl:x,transitionDuration:g}},R.createElement(yc,ye({ref:t,"data-testid":"".concat(J.root,"-test-id"),rtl:x,rootStyles:m,width:c,collapsedWidth:l,transitionDuration:g,className:ie(J.root,(n={},n[J.collapsed]=j,n[J.toggled]=N,n[J.broken]=I,n[J.rtl]=x,n),y)},k),R.createElement(xc,{"data-testid":"".concat(J.container,"-test-id"),className:J.container,backgroundColor:C},f),h&&R.createElement(wc,{"data-testid":"".concat(J.image,"-test-id"),src:h,alt:"sidebar background",className:J.image}),I&&N&&R.createElement(gc,{"data-testid":"".concat(J.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:$,onKeyPress:$,className:J.backdrop})))}),Vr,zr,Ur,Xo=ce.ul(qr||(qr=de([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),qr,Sc=ce.nav(Kr||(Kr=de([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),U.root,function(e){var t=e.rootStyles;return t}),Go=R.createContext(void 0),rn=R.createContext(0),kc=function(e,t){var n=e.children,r=e.className,o=e.transitionDuration,i=o===void 0?300:o,a=e.closeOnClick,s=a===void 0?!1:a,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,d=it(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),y=R.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return R.createElement(Go.Provider,{value:y},R.createElement(rn.Provider,{value:0},R.createElement(Sc,ye({ref:t,className:ie(U.root,r),rootStyles:c},d),R.createElement(Xo,null,n))))},Ec=R.forwardRef(kc),Kr,qn=function(){var e=R.useContext(Go);if(e===void 0)throw new Error("Menu Component is required!");return e},Rc=ce.div(_r||(_r=de([`
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
      `},function(e){var t=e.rootStyles;return t}),Oc=function(e,t){var n=e.children,r=e.open,o=e.openWhenCollapsed,i=e.firstLevel,a=e.collapsed,s=e.defaultOpen,c=it(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=qn().transitionDuration,l=R.useState(s)[0];return R.createElement(Rc,ye({"data-testid":"".concat(U.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:a,open:r,openWhenCollapsed:o,transitionDuration:u,defaultOpen:l},c),R.createElement(Xo,null,n))},Tc=R.forwardRef(Oc),_r,Qo=ce.span(Yr||(Yr=de([`
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
`])),function(e){var t=e.rootStyles;return t}),Yr,Zo=ce.span(Xr||(Xr=de([`
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
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),Xr,Jo=ce.span(Gr||(Gr=de([`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 5px;":"margin-right: 5px;"},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Gr,ei=ce.span(Qr||(Qr=de([`
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
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Qr,$c=ce.span(Zr||(Zr=de([`
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
    
    `)},function(e){var t=e.rootStyles;return t}),Pc=ce.span(Jr||(Jr=de([`
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
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),Ac=ce.span(eo||(eo=de([`
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
`]))),Zr,Jr,eo,he="top",Oe="bottom",Te="right",me="left",Kn="auto",Mt=[he,Oe,Te,me],ht="start",Tt="end",Ic="clippingParents",ti="viewport",wt="popper",Mc="reference",to=Mt.reduce(function(e,t){return e.concat([t+"-"+ht,t+"-"+Tt])},[]),ni=[].concat(Mt,[Kn]).reduce(function(e,t){return e.concat([t,t+"-"+ht,t+"-"+Tt])},[]),Lc="beforeRead",Dc="read",jc="afterRead",Nc="beforeMain",Fc="main",Bc="afterMain",Wc="beforeWrite",Hc="write",Vc="afterWrite",zc=[Lc,Dc,jc,Nc,Fc,Bc,Wc,Hc,Vc];function Ne(e){return e?(e.nodeName||"").toLowerCase():null}function $e(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function at(e){var t=$e(e).Element;return e instanceof t||e instanceof Element}function Ee(e){var t=$e(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _n(e){if(typeof ShadowRoot>"u")return!1;var t=$e(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Uc(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!Ee(i)||!Ne(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function qc(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(c,u){return c[u]="",c},{});!Ee(o)||!Ne(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}var Kc={name:"applyStyles",enabled:!0,phase:"write",fn:Uc,effect:qc,requires:["computeStyles"]};function je(e){return e.split("-")[0]}var rt=Math.max,on=Math.min,mt=Math.round;function In(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ri(){return!/^((?!chrome|android).)*safari/i.test(In())}function gt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&Ee(e)&&(o=e.offsetWidth>0&&mt(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&mt(r.height)/e.offsetHeight||1);var a=at(e)?$e(e):window,s=a.visualViewport,c=!ri()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/o,l=(r.top+(c&&s?s.offsetTop:0))/i,d=r.width/o,y=r.height/i;return{width:d,height:y,top:l,right:u+d,bottom:l+y,left:u,x:u,y:l}}function Yn(e){var t=gt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function oi(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_n(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ve(e){return $e(e).getComputedStyle(e)}function _c(e){return["table","td","th"].indexOf(Ne(e))>=0}function Ge(e){return((at(e)?e.ownerDocument:e.document)||window.document).documentElement}function vn(e){return Ne(e)==="html"?e:e.assignedSlot||e.parentNode||(_n(e)?e.host:null)||Ge(e)}function no(e){return!Ee(e)||Ve(e).position==="fixed"?null:e.offsetParent}function Yc(e){var t=/firefox/i.test(In()),n=/Trident/i.test(In());if(n&&Ee(e)){var r=Ve(e);if(r.position==="fixed")return null}var o=vn(e);for(_n(o)&&(o=o.host);Ee(o)&&["html","body"].indexOf(Ne(o))<0;){var i=Ve(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Lt(e){for(var t=$e(e),n=no(e);n&&_c(n)&&Ve(n).position==="static";)n=no(n);return n&&(Ne(n)==="html"||Ne(n)==="body"&&Ve(n).position==="static")?t:n||Yc(e)||t}function Xn(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function St(e,t,n){return rt(e,on(t,n))}function Xc(e,t,n){var r=St(e,t,n);return r>n?n:r}function ii(){return{top:0,right:0,bottom:0,left:0}}function ai(e){return Object.assign({},ii(),e)}function si(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Gc=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ai(typeof t!="number"?t:si(t,Mt))};function Qc(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=je(n.placement),c=Xn(s),u=[me,Te].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var d=Gc(o.padding,n),y=Yn(i),f=c==="y"?he:me,p=c==="y"?Oe:Te,v=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],w=a[c]-n.rects.reference[c],C=Lt(i),S=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,g=v/2-w/2,h=d[f],x=S-y[l]-d[p],m=S/2-y[l]/2+g,k=St(h,m,x),O=c;n.modifiersData[r]=(t={},t[O]=k,t.centerOffset=k-m,t)}}function Zc(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||oi(t.elements.popper,o)&&(t.elements.arrow=o))}var Jc={name:"arrow",enabled:!0,phase:"main",fn:Qc,effect:Zc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function bt(e){return e.split("-")[1]}var el={top:"auto",right:"auto",bottom:"auto",left:"auto"};function tl(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:mt(t*o)/o||0,y:mt(n*o)/o||0}}function ro(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,y=a.x,f=y===void 0?0:y,p=a.y,v=p===void 0?0:p,w=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=w.x,v=w.y;var C=a.hasOwnProperty("x"),S=a.hasOwnProperty("y"),g=me,h=he,x=window;if(u){var m=Lt(n),k="clientHeight",O="clientWidth";if(m===$e(n)&&(m=Ge(n),Ve(m).position!=="static"&&s==="absolute"&&(k="scrollHeight",O="scrollWidth")),m=m,o===he||(o===me||o===Te)&&i===Tt){h=Oe;var L=d&&m===x&&x.visualViewport?x.visualViewport.height:m[k];v-=L-r.height,v*=c?1:-1}if(o===me||(o===he||o===Oe)&&i===Tt){g=Te;var I=d&&m===x&&x.visualViewport?x.visualViewport.width:m[O];f-=I-r.width,f*=c?1:-1}}var B=Object.assign({position:s},u&&el),A=l===!0?tl({x:f,y:v}):{x:f,y:v};if(f=A.x,v=A.y,c){var V;return Object.assign({},B,(V={},V[h]=S?"0":"",V[g]=C?"0":"",V.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",V))}return Object.assign({},B,(t={},t[h]=S?v+"px":"",t[g]=C?f+"px":"",t.transform="",t))}function nl(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:je(t.placement),variation:bt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ro(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ro(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var rl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:nl,data:{}},Bt={passive:!0};function ol(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,c=$e(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,Bt)}),s&&c.addEventListener("resize",n.update,Bt),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,Bt)}),s&&c.removeEventListener("resize",n.update,Bt)}}var il={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ol,data:{}},al={left:"right",right:"left",bottom:"top",top:"bottom"};function Kt(e){return e.replace(/left|right|bottom|top/g,function(t){return al[t]})}var sl={start:"end",end:"start"};function oo(e){return e.replace(/start|end/g,function(t){return sl[t]})}function Gn(e){var t=$e(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Qn(e){return gt(Ge(e)).left+Gn(e).scrollLeft}function cl(e,t){var n=$e(e),r=Ge(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=ri();(u||!u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+Qn(e),y:c}}function ll(e){var t,n=Ge(e),r=Gn(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=rt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=rt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Qn(e),c=-r.scrollTop;return Ve(o||n).direction==="rtl"&&(s+=rt(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function Zn(e){var t=Ve(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ci(e){return["html","body","#document"].indexOf(Ne(e))>=0?e.ownerDocument.body:Ee(e)&&Zn(e)?e:ci(vn(e))}function kt(e,t){var n;t===void 0&&(t=[]);var r=ci(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=$e(r),a=o?[i].concat(i.visualViewport||[],Zn(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(kt(vn(a)))}function Mn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ul(e,t){var n=gt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function io(e,t,n){return t===ti?Mn(cl(e,n)):at(t)?ul(t,n):Mn(ll(Ge(e)))}function fl(e){var t=kt(vn(e)),n=["absolute","fixed"].indexOf(Ve(e).position)>=0,r=n&&Ee(e)?Lt(e):e;return at(r)?t.filter(function(o){return at(o)&&oi(o,r)&&Ne(o)!=="body"}):[]}function dl(e,t,n,r){var o=t==="clippingParents"?fl(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(c,u){var l=io(e,u,r);return c.top=rt(l.top,c.top),c.right=on(l.right,c.right),c.bottom=on(l.bottom,c.bottom),c.left=rt(l.left,c.left),c},io(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function li(e){var t=e.reference,n=e.element,r=e.placement,o=r?je(r):null,i=r?bt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case he:c={x:a,y:t.y-n.height};break;case Oe:c={x:a,y:t.y+t.height};break;case Te:c={x:t.x+t.width,y:s};break;case me:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?Xn(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case ht:c[u]=c[u]-(t[l]/2-n[l]/2);break;case Tt:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function $t(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?Ic:s,u=n.rootBoundary,l=u===void 0?ti:u,d=n.elementContext,y=d===void 0?wt:d,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,w=v===void 0?0:v,C=ai(typeof w!="number"?w:si(w,Mt)),S=y===wt?Mc:wt,g=e.rects.popper,h=e.elements[p?S:y],x=dl(at(h)?h:h.contextElement||Ge(e.elements.popper),c,l,a),m=gt(e.elements.reference),k=li({reference:m,element:g,strategy:"absolute",placement:o}),O=Mn(Object.assign({},g,k)),L=y===wt?O:m,I={top:x.top-L.top+C.top,bottom:L.bottom-x.bottom+C.bottom,left:x.left-L.left+C.left,right:L.right-x.right+C.right},B=e.modifiersData.offset;if(y===wt&&B){var A=B[o];Object.keys(I).forEach(function(V){var E=[Te,Oe].indexOf(V)>=0?1:-1,j=[he,Oe].indexOf(V)>=0?"y":"x";I[V]+=A[j]*E})}return I}function pl(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?ni:c,l=bt(r),d=l?s?to:to.filter(function(p){return bt(p)===l}):Mt,y=d.filter(function(p){return u.indexOf(p)>=0});y.length===0&&(y=d);var f=y.reduce(function(p,v){return p[v]=$t(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[je(v)],p},{});return Object.keys(f).sort(function(p,v){return f[p]-f[v]})}function vl(e){if(je(e)===Kn)return[];var t=Kt(e);return[oo(e),t,oo(t)]}function hl(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,y=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,v=n.allowedAutoPlacements,w=t.options.placement,C=je(w),S=C===w,g=c||(S||!p?[Kt(w)]:vl(w)),h=[w].concat(g).reduce(function(pe,P){return pe.concat(je(P)===Kn?pl(t,{placement:P,boundary:l,rootBoundary:d,padding:u,flipVariations:p,allowedAutoPlacements:v}):P)},[]),x=t.rects.reference,m=t.rects.popper,k=new Map,O=!0,L=h[0],I=0;I<h.length;I++){var B=h[I],A=je(B),V=bt(B)===ht,E=[he,Oe].indexOf(A)>=0,j=E?"width":"height",N=$t(t,{placement:B,boundary:l,rootBoundary:d,altBoundary:y,padding:u}),$=E?V?Te:me:V?Oe:he;x[j]>m[j]&&($=Kt($));var W=Kt($),X=[];if(i&&X.push(N[A]<=0),s&&X.push(N[$]<=0,N[W]<=0),X.every(function(pe){return pe})){L=B,O=!1;break}k.set(B,X)}if(O)for(var F=p?3:1,G=function(P){var M=h.find(function(D){var H=k.get(D);if(H)return H.slice(0,P).every(function(_){return _})});if(M)return L=M,"break"},ae=F;ae>0;ae--){var Ce=G(ae);if(Ce==="break")break}t.placement!==L&&(t.modifiersData[r]._skip=!0,t.placement=L,t.reset=!0)}}var ml={name:"flip",enabled:!0,phase:"main",fn:hl,requiresIfExists:["offset"],data:{_skip:!1}};function ao(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function so(e){return[he,Te,Oe,me].some(function(t){return e[t]>=0})}function gl(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=$t(t,{elementContext:"reference"}),s=$t(t,{altBoundary:!0}),c=ao(a,r),u=ao(s,o,i),l=so(c),d=so(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var bl={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:gl};function yl(e,t,n){var r=je(e),o=[me,he].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[me,Te].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function xl(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=ni.reduce(function(l,d){return l[d]=yl(d,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var wl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:xl};function Cl(e){var t=e.state,n=e.name;t.modifiersData[n]=li({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Sl={name:"popperOffsets",enabled:!0,phase:"read",fn:Cl,data:{}};function kl(e){return e==="x"?"y":"x"}function El(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,y=n.tether,f=y===void 0?!0:y,p=n.tetherOffset,v=p===void 0?0:p,w=$t(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),C=je(t.placement),S=bt(t.placement),g=!S,h=Xn(C),x=kl(h),m=t.modifiersData.popperOffsets,k=t.rects.reference,O=t.rects.popper,L=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,I=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(m){if(i){var V,E=h==="y"?he:me,j=h==="y"?Oe:Te,N=h==="y"?"height":"width",$=m[h],W=$+w[E],X=$-w[j],F=f?-O[N]/2:0,G=S===ht?k[N]:O[N],ae=S===ht?-O[N]:-k[N],Ce=t.elements.arrow,pe=f&&Ce?Yn(Ce):{width:0,height:0},P=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ii(),M=P[E],D=P[j],H=St(0,k[N],pe[N]),_=g?k[N]/2-F-H-M-I.mainAxis:G-H-M-I.mainAxis,te=g?-k[N]/2+F+H+D+I.mainAxis:ae+H+D+I.mainAxis,Q=t.elements.arrow&&Lt(t.elements.arrow),le=Q?h==="y"?Q.clientTop||0:Q.clientLeft||0:0,Fe=(V=B==null?void 0:B[h])!=null?V:0,oe=$+_-Fe-le,ve=$+te-Fe,Z=St(f?on(W,oe):W,$,f?rt(X,ve):X);m[h]=Z,A[h]=Z-$}if(s){var z,Se=h==="x"?he:me,Ue=h==="x"?Oe:Te,ee=m[x],ke=x==="y"?"height":"width",Ae=ee+w[Se],Ie=ee-w[Ue],Qe=[he,me].indexOf(C)!==-1,st=(z=B==null?void 0:B[x])!=null?z:0,Jn=Qe?Ae:ee-k[ke]-O[ke]-st+I.altAxis,er=Qe?ee+k[ke]+O[ke]-st-I.altAxis:Ie,tr=f&&Qe?Xc(Jn,ee,er):St(f?Jn:Ae,ee,f?er:Ie);m[x]=tr,A[x]=tr-ee}t.modifiersData[r]=A}}var Rl={name:"preventOverflow",enabled:!0,phase:"main",fn:El,requiresIfExists:["offset"]};function Ol(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Tl(e){return e===$e(e)||!Ee(e)?Gn(e):Ol(e)}function $l(e){var t=e.getBoundingClientRect(),n=mt(t.width)/e.offsetWidth||1,r=mt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Pl(e,t,n){n===void 0&&(n=!1);var r=Ee(t),o=Ee(t)&&$l(t),i=Ge(t),a=gt(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Ne(t)!=="body"||Zn(i))&&(s=Tl(t)),Ee(t)?(c=gt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Qn(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Al(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function Il(e){var t=Al(e);return zc.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Ml(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ll(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var co={placement:"bottom",modifiers:[],strategy:"absolute"};function lo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Dl(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?co:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},co,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],y=!1,f={state:l,setOptions:function(C){var S=typeof C=="function"?C(l.options):C;v(),l.options=Object.assign({},i,l.options,S),l.scrollParents={reference:at(s)?kt(s):s.contextElement?kt(s.contextElement):[],popper:kt(c)};var g=Il(Ll([].concat(r,l.options.modifiers)));return l.orderedModifiers=g.filter(function(h){return h.enabled}),p(),f.update()},forceUpdate:function(){if(!y){var C=l.elements,S=C.reference,g=C.popper;if(lo(S,g)){l.rects={reference:Pl(S,Lt(g),l.options.strategy==="fixed"),popper:Yn(g)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(I){return l.modifiersData[I.name]=Object.assign({},I.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var x=l.orderedModifiers[h],m=x.fn,k=x.options,O=k===void 0?{}:k,L=x.name;typeof m=="function"&&(l=m({state:l,options:O,name:L,instance:f})||l)}}}},update:Ml(function(){return new Promise(function(w){f.forceUpdate(),w(l)})}),destroy:function(){v(),y=!0}};if(!lo(s,c))return f;f.setOptions(u).then(function(w){!y&&u.onFirstUpdate&&u.onFirstUpdate(w)});function p(){l.orderedModifiers.forEach(function(w){var C=w.name,S=w.options,g=S===void 0?{}:S,h=w.effect;if(typeof h=="function"){var x=h({state:l,name:C,instance:f,options:g}),m=function(){};d.push(x||m)}})}function v(){d.forEach(function(w){return w()}),d=[]}return f}}var jl=[il,Sl,rl,Kc,wl,ml,Rl,Jc,bl],Nl=Dl({defaultModifiers:jl}),Fl=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,o=R.useContext(pn),i=o.collapsed,a=o.toggled,s=o.transitionDuration,c=R.useRef();return R.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=Nl(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),R.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,a,r,n]),{popperInstance:c.current}},ui=function(e){var t=e.rtl,n=e.level,r=e.collapsed,o=e.disabled,i=e.active;return`
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
  
  `)},Bl=function(e,t){var n=e.className,r=e.component,o=e.children,i=it(e,["className","component","children"]);if(r){if(typeof r=="string")return R.createElement(r,ye(ye({className:ie(n)},i),{ref:t}),o);var a=r.props,s=a.className,c=it(a,["className"]);return R.cloneElement(r,ye(ye(ye({className:ie(n,s)},i),c),{ref:t}),o)}else return R.createElement("a",ye({ref:t,className:ie(n)},i),o)},fi=R.forwardRef(Bl),Wl=ce.li(uo||(uo=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},U.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return ui({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Hl=function(e,t){var n,r=e.children,o=e.className,i=e.label,a=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,d=e.defaultOpen,y=e.active,f=y===void 0?!1:y,p=e.disabled,v=p===void 0?!1:p,w=e.rootStyles,C=e.component,S=e.onOpenChange,g=e.onClick,h=e.onKeyUp,x=it(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),m=R.useContext(rn),k=R.useContext(pn),O=k.collapsed,L=k.rtl,I=k.transitionDuration,B=qn(),A=B.renderExpandIcon,V=B.closeOnClick,E=B.menuItemStyles,j=B.transitionDuration,N=R.useState(!!d),$=N[0],W=N[1],X=R.useState(!1),F=X[0],G=X[1],ae=R.useState(!1),Ce=ae[0],pe=ae[1],P=R.useRef(null),M=R.useRef(null),D=R.useRef(),H=Fl({level:m,buttonRef:P,contentRef:M}).popperInstance,_=R.useCallback(function(){var Z,z=M.current;if(z){var Se=(Z=z==null?void 0:z.querySelector(".".concat(U.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Se,"px"),D.current=setTimeout(function(){z.style.overflow="auto",z.style.height="auto"},j)}},[j]),te=function(){var Z,z=M.current;if(z){var Se=(Z=z==null?void 0:z.querySelector(".".concat(U.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Se,"px"),z.offsetHeight,z.style.height="0px"}},Q=function(){m===0&&O||(typeof l>"u"?(clearTimeout(Number(D.current)),$?te():_(),S==null||S(!$),W(!$)):S==null||S(!l))};R.useEffect(function(){!(m===0&&O)&&typeof l<"u"&&Ce&&(clearTimeout(Number(D.current)),l?_():te())},[O,_,i,m,S,l]);var le=function(Z){g==null||g(Z),Q()},Fe=function(Z){h==null||h(Z),Z.key==="Enter"&&Q()},oe=function(Z){if(E){var z={level:m,disabled:v,active:f,isSubmenu:!0,open:l??$},Se=E.root,Ue=E.button,ee=E.label,ke=E.icon,Ae=E.prefix,Ie=E.suffix,Qe=E.subMenuContent,st=E.SubMenuExpandIcon;switch(Z){case"root":return typeof Se=="function"?Se(z):Se;case"button":return typeof Ue=="function"?Ue(z):Ue;case"label":return typeof ee=="function"?ee(z):ee;case"icon":return typeof ke=="function"?ke(z):ke;case"prefix":return typeof Ae=="function"?Ae(z):Ae;case"suffix":return typeof Ie=="function"?Ie(z):Ie;case"SubMenuExpandIcon":return typeof st=="function"?st(z):st;case"subMenuContent":return typeof Qe=="function"?Qe(z):Qe;default:return}}};R.useEffect(function(){setTimeout(function(){return H==null?void 0:H.update()},I),O&&m===0&&G(!1)},[O,m,L,I,H]),R.useEffect(function(){var Z=function(ee){var ke,Ae,Ie;!F&&(!((ke=P.current)===null||ke===void 0)&&ke.contains(ee))?G(!0):(V&&!(!((Ae=ee.closest(".".concat(U.menuItemRoot)))===null||Ae===void 0)&&Ae.classList.contains(U.subMenuRoot))||!(!((Ie=M.current)===null||Ie===void 0)&&Ie.contains(ee))&&F)&&G(!1)},z=function(ee){Z(ee.target)},Se=function(ee){ee.key==="Enter"?Z(ee.target):ee.key==="Escape"&&G(!1)},Ue=function(){document.removeEventListener("click",z),document.removeEventListener("keyup",Se)};return Ue(),O&&m===0&&(document.addEventListener("click",z,!1),document.addEventListener("keyup",Se,!1)),function(){Ue()}},[O,m,V,F]),R.useEffect(function(){pe(!0)},[]);var ve=(n={},n[U.active]=f,n[U.disabled]=v,n[U.open]=l??$,n);return R.createElement(Wl,{ref:t,className:ie(U.menuItemRoot,U.subMenuRoot,ve,o),menuItemStyles:oe("root"),level:m,collapsed:O,rtl:L,disabled:v,active:f,buttonStyles:oe("button"),rootStyles:w},R.createElement(fi,ye({"data-testid":"".concat(U.button,"-test-id"),ref:P,title:s,className:ie(U.button,ve),onClick:le,onKeyUp:Fe,component:C,tabIndex:0},x),a&&R.createElement(Zo,{rtl:L,className:ie(U.icon,ve),rootStyles:oe("icon")},a),c&&R.createElement(Jo,{collapsed:O,transitionDuration:I,firstLevel:m===0,className:ie(U.prefix,ve),rtl:L,rootStyles:oe("prefix")},c),R.createElement(Qo,{className:ie(U.label,ve),rootStyles:oe("label")},i),u&&R.createElement(ei,{collapsed:O,transitionDuration:I,firstLevel:m===0,className:ie(U.suffix,ve),rootStyles:oe("suffix")},u),R.createElement($c,{rtl:L,className:ie(U.SubMenuExpandIcon,ve),collapsed:O,level:m,rootStyles:oe("SubMenuExpandIcon")},A?A({level:m,disabled:v,active:f,open:l??$}):O&&m===0?R.createElement(Ac,null):R.createElement(Pc,{rtl:L,open:l??$}))),R.createElement(Tc,{ref:M,openWhenCollapsed:F,open:l??$,firstLevel:m===0,collapsed:O,defaultOpen:l&&!Ce||d,className:ie(U.subMenuContent,ve),rootStyles:oe("subMenuContent")},R.createElement(rn.Provider,{value:m+1},r)))};R.forwardRef(Hl);var uo,Vl=ce.li(fo||(fo=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},U.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return ui({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),zl=function(e,t){var n,r=e.children,o=e.icon,i=e.className,a=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,d=l===void 0?!1:l,y=e.component,f=e.rootStyles,p=it(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),v=R.useContext(rn),w=R.useContext(pn),C=w.collapsed,S=w.rtl,g=w.transitionDuration,h=qn().menuItemStyles,x=function(k){if(h){var O={level:v,disabled:d,active:u,isSubmenu:!1},L=h.root,I=h.button,B=h.label,A=h.icon,V=h.prefix,E=h.suffix;switch(k){case"root":return typeof L=="function"?L(O):L;case"button":return typeof I=="function"?I(O):I;case"label":return typeof B=="function"?B(O):B;case"icon":return typeof A=="function"?A(O):A;case"prefix":return typeof V=="function"?V(O):V;case"suffix":return typeof E=="function"?E(O):E;default:return}}},m=(n={},n[U.active]=u,n[U.disabled]=d,n);return R.createElement(Vl,{ref:t,className:ie(U.menuItemRoot,m,i),menuItemStyles:x("root"),level:v,collapsed:C,rtl:S,disabled:d,active:u,buttonStyles:x("button"),rootStyles:f},R.createElement(fi,ye({className:ie(U.button,m),"data-testid":"".concat(U.button,"-test-id"),component:y,tabIndex:0},p),o&&R.createElement(Zo,{rtl:S,className:ie(U.icon,m),rootStyles:x("icon")},o),a&&R.createElement(Jo,{collapsed:C,transitionDuration:g,firstLevel:v===0,className:ie(U.prefix,m),rtl:S,rootStyles:x("prefix")},a),R.createElement(Qo,{className:ie(U.label,m),rootStyles:x("label")},r),s&&R.createElement(ei,{collapsed:C,transitionDuration:g,firstLevel:v===0,className:ie(U.suffix,m),rootStyles:x("suffix")},s)))},Ul=R.forwardRef(zl),fo;const ql=Y(Ec)`
  /* flex-grow: 1;

  background-color: ${({theme:e})=>e.primaryBgColor}; */
`,Wt=Y(Ul)`
  a.${U.button} {
    padding: ${({theme:e})=>e.global.spacing(3,0,3,4)};

    &:hover,
    &:focus,
    &:active,
    &.active {
      background-color: ${({theme:e})=>e.linkActiveBgColor};
      color: ${({theme:e})=>e.linkActiveColor};
    }

    @media (min-width: ${We.breakpoint.tablet}) {
      padding-left: ${({theme:e})=>e.global.spacing(8)};
    }

    @media (min-width: ${We.breakpoint.desktop}) {
      padding-left: ${({theme:e})=>e.global.spacing(12)};
    }
  }
`,Kl=({setMobileMenu:e})=>T.jsxs(ql,{children:[T.jsx(Wt,{component:T.jsx(ut,{to:"/",onClick:()=>e(!1)}),children:"Home"}),T.jsx(Wt,{component:T.jsx(ut,{to:"/calendar",onClick:()=>e(!1)}),children:"Calendar"}),T.jsx(Wt,{component:T.jsx(ut,{to:"/services",onClick:()=>e(!1)}),children:"Services"}),T.jsx(Wt,{component:T.jsx(ut,{to:"/contacts",onClick:()=>e(!1)}),children:"Contacts"})]}),_l=Y.footer`
  padding-top: ${({theme:e})=>e.global.spacing(2)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  ${({$isMainLayout:e})=>e&&po}

  color: ${({theme:e})=>e.footerTextColor};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};

  background-color: ${({$isMainLayout:e,theme:t})=>e?t.primaryBgColor:t.footerBgColor};
`,Yl=Y(Ci)`
  ${wi}
`,Xl=Y.div`
  ${an}

  text-align: ${({$isMainLayout:e})=>e&&"center"};
`,di=({$isMainLayout:e})=>T.jsx(_l,{$isMainLayout:e,children:T.jsxs(Xl,{$isMainLayout:e,children:["Coded by"," ",T.jsx(Yl,{to:"https://github.com/iberezhnyi",children:"©iberezhnyi"})]})}),Gl=Y(Cc)`
  &&& {
    z-index: 1;

    border: none;

    @media (min-width: ${We.breakpoint.tablet}) and (max-width: ${We.breakpoint.desktop}) {
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
`,Ql=Y.div`
  flex-grow: 1;
`,Zl=Y.div`
  background-color: ${({theme:e})=>e.secondaryBgColor};
  height: ${({$headerHeight:e})=>`${e}px`};

  @media (min-width: ${We.breakpoint.tablet}) {
    display: none;
  }
`,Jl=({mobileMenu:e,setIsMobile:t,setMobileMenu:n,headerHeight:r})=>{const o=Pt(sn);return T.jsxs(Gl,{toggled:e,customBreakPoint:`${We.breakpoint.maxTablet}`,onBreakPoint:t,onBackdropClick:()=>n(!1),$profile:!!o,children:[!o&&T.jsx(Zl,{$headerHeight:r}),T.jsxs(Ql,{children:[o&&T.jsx(xs,{}),T.jsx(Kl,{setMobileMenu:n}),T.jsx(Ii,{})]}),o&&T.jsx(di,{})]})},eu=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(0),[o,i]=b.useState(window.matchMedia(`(max-width: ${We.breakpoint.maxTablet})`).matches),a=Pt(sn),s=()=>t(c=>!c);return b.useEffect(()=>{!o&&t(!1)},[o]),T.jsxs(T.Fragment,{children:[T.jsx(ms,{isMobile:o,handleClick:s,mobileMenu:e,setHeaderHeight:r}),T.jsxs(Ti,{children:[T.jsx(Jl,{setMobileMenu:t,setIsMobile:i,mobileMenu:e,headerHeight:n}),T.jsx($i,{children:T.jsx(Si,{})})]}),!a&&T.jsx(di,{$isMainLayout:!0})]})},ru=eu;export{ru as default};
//# sourceMappingURL=index-PVdCYJMp.js.map
