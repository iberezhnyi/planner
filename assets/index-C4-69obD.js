import{p as X,m as Kt,c as an,j as T,u as po,a as Pt,s as pi,b as nr,d as vo,r as b,e as vi,R as hi,f as Ln,N as lt,g as sn,h as mi,i as gi,k as bi,L as yi,l as xi,n as R,o as wi,q as Ci,O as Si}from"./index-DW38SQeq.js";import{M as Ei,a as ki,T as Ri,b as Oi,s as ct}from"./Button.styled-CzYniAYx.js";const Ti=X.div`
  display: flex;
  flex-grow: 1;

  ${Kt.tablet`
  padding-left: 0;
  `}

  ${Kt.desktop`
  ${an}
  `}
`,Pi=X.main`
  background-color: ${({theme:e})=>e.mainBgColor};
  flex-grow: 1;
`,$i=({onClick:e,mobileMenu:t})=>T.jsx(Ei,{children:T.jsx(ki,{$mobileMenu:t,onClick:e,children:T.jsx("span",{})})}),Ai=()=>{const e=po();return[Pt(pi),r=>e(r==="light"?nr("dark"):nr("light"))]},Ii=()=>{const[e,t]=Ai();return T.jsx(Ri,{onClick:()=>t(e),children:T.jsx(Oi,{children:T.jsx("use",{href:`${ct}#${e==="light"?"moon-stars":"sun"}`})})})},Mi=X.header`
  ${vo}
  background-color: ${({theme:e})=>e.headerBgColor};
`,Li=X.div`
  ${an}

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Kt.tablet`
    justify-content: flex-end;
  `}
`;function Ye(e){return ho(e)?(e.nodeName||"").toLowerCase():"#document"}function xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ve(e){var t;return(t=(ho(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ho(e){return e instanceof Node||e instanceof xe(e).Node}function ne(e){return e instanceof Element||e instanceof xe(e).Element}function se(e){return e instanceof HTMLElement||e instanceof xe(e).HTMLElement}function En(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof xe(e).ShadowRoot}function $t(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Re(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Di(e){return["table","td","th"].includes(Ye(e))}function cn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Dn(e){const t=jn(),n=Re(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function ji(e){let t=We(e);for(;se(t)&&!Ke(t);){if(cn(t))return null;if(Dn(t))return t;t=We(t)}return null}function jn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ke(e){return["html","body","#document"].includes(Ye(e))}function Re(e){return xe(e).getComputedStyle(e)}function ln(e){return ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function We(e){if(Ye(e)==="html")return e;const t=e.assignedSlot||e.parentNode||En(e)&&e.host||Ve(e);return En(t)?t.host:t}function mo(e){const t=We(e);return Ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:se(t)&&$t(t)?t:mo(t)}function qe(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=mo(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=xe(o);return i?t.concat(a,a.visualViewport||[],$t(o)?o:[],a.frameElement&&n?qe(a.frameElement):[]):t.concat(o,qe(o,[],n))}function Je(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function be(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&En(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Ni(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function go(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Fi(e){return e.mozInputSource===0&&e.isTrusted?!0:kn()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Bi(e){return Hi()?!1:!kn()&&e.width===0&&e.height===0||kn()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Wi(){return/apple/i.test(navigator.vendor)}function kn(){const e=/android/i;return e.test(Ni())||e.test(go())}function Hi(){return go().includes("jsdom/")}function rr(e,t){return["mouse","pen"].includes(e)}function Vi(e){return"nativeEvent"in e}function zi(e){return e.matches("html,body")}function $e(e){return(e==null?void 0:e.ownerDocument)||document}function hn(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function et(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Ui="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function bo(e){return se(e)&&e.matches(Ui)}function mn(e){e.preventDefault(),e.stopPropagation()}function qi(e){return e?e.getAttribute("role")==="combobox"&&bo(e):!1}const Rn=Math.min,ut=Math.max,_t=Math.round,Lt=Math.floor,_e=e=>({x:e,y:e});function yo(e){return e.split("-")[0]}function Ki(e){return e.split("-")[1]}function _i(e){return e==="x"?"y":"x"}function Yi(e){return e==="y"?"height":"width"}function xo(e){return["top","bottom"].includes(yo(e))?"y":"x"}function Xi(e){return _i(xo(e))}function wo(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Gi=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Yt=Gi.join(","),Co=typeof Element>"u",dt=Co?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Xt=!Co&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Gt=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),i=o===""||o==="true",a=i||n&&t&&e(t.parentNode);return a},Zi=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},Ji=function(t,n,r){if(Gt(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(Yt));return n&&dt.call(t,Yt)&&o.unshift(t),o=o.filter(r),o},Qi=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Gt(a,!1))if(a.tagName==="SLOT"){var s=a.assignedElements(),c=s.length?s:a.children,u=e(c,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:a,candidates:u})}else{var l=dt.call(a,Yt);l&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),y=!Gt(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(d&&y){var f=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:a,candidates:f})}else i.unshift.apply(i,a.children)}}return o},So=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},Eo=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Zi(t))&&!So(t)?0:t.tabIndex},ea=function(t,n){var r=Eo(t);return r<0&&n&&!So(t)?0:r},ta=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},ko=function(t){return t.tagName==="INPUT"},na=function(t){return ko(t)&&t.type==="hidden"},ra=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},oa=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},ia=function(t){if(!t.name)return!0;var n=t.form||Xt(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=oa(o,t.form);return!i||i===t},aa=function(t){return ko(t)&&t.type==="radio"},sa=function(t){return aa(t)&&!ia(t)},ca=function(t){var n,r=t&&Xt(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,s,c;for(i=!!((a=o)!==null&&a!==void 0&&(s=a.ownerDocument)!==null&&s!==void 0&&s.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,l,d;r=Xt(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((l=o)!==null&&l!==void 0&&(d=l.ownerDocument)!==null&&d!==void 0&&d.contains(o))}}return i},or=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},la=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=dt.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(dt.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var s=t;t;){var c=t.parentElement,u=Xt(t);if(c&&!c.shadowRoot&&o(c)===!0)return or(t);t.assignedSlot?t=t.assignedSlot:!c&&u!==t.ownerDocument?t=u.host:t=c}t=s}if(ca(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return or(t);return!1},ua=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return dt.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},fa=function(t,n){return!(n.disabled||Gt(n)||na(n)||la(n,t)||ra(n)||ua(n))},On=function(t,n){return!(sa(n)||Eo(n)<0||!fa(t,n))},da=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},pa=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scopeParent,s=a?o.scopeParent:o,c=ea(s,a),u=a?e(o.candidates):s;c===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:c,item:o,isScope:a,content:u})}),r.sort(ta).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},Nn=function(t,n){n=n||{};var r;return n.getShadowRoot?r=Qi([t],n.includeContainer,{filter:On.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:da}):r=Ji(t,n.includeContainer,On.bind(null,n)),pa(r)},va=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return dt.call(t,Yt)===!1?!1:On(n,t)};function ir(e,t,n){let{reference:r,floating:o}=e;const i=xo(t),a=Xi(t),s=Yi(a),c=yo(t),u=i==="y",l=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,y=r[s]/2-o[s]/2;let f;switch(c){case"top":f={x:l,y:r.y-o.height};break;case"bottom":f={x:l,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Ki(t)){case"start":f[a]-=y*(n&&u?-1:1);break;case"end":f[a]+=y*(n&&u?-1:1);break}return f}const ha=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:l,y:d}=ir(u,r,c),y=r,f={},p=0;for(let v=0;v<s.length;v++){const{name:w,fn:C}=s[v],{x:S,y:g,data:h,reset:x}=await C({x:l,y:d,initialPlacement:r,placement:y,strategy:o,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});l=S??l,d=g??d,f={...f,[w]:{...f[w],...h}},x&&p<=50&&(p++,typeof x=="object"&&(x.placement&&(y=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:l,y:d}=ir(u,y,c)),v=-1)}return{x:l,y:d,placement:y,strategy:o,middlewareData:f}};function Ro(e){const t=Re(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=se(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=_t(n)!==i||_t(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function Fn(e){return ne(e)?e:e.contextElement}function ft(e){const t=Fn(e);if(!se(t))return _e(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Ro(t);let a=(i?_t(n.width):n.width)/r,s=(i?_t(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const ma=_e(0);function Oo(e){const t=xe(e);return!jn()||!t.visualViewport?ma:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ga(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==xe(e)?!1:t}function rt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Fn(e);let a=_e(1);t&&(r?ne(r)&&(a=ft(r)):a=ft(e));const s=ga(i,n,r)?Oo(i):_e(0);let c=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,l=o.width/a.x,d=o.height/a.y;if(i){const y=xe(i),f=r&&ne(r)?xe(r):r;let p=y,v=p.frameElement;for(;v&&r&&f!==p;){const w=ft(v),C=v.getBoundingClientRect(),S=Re(v),g=C.left+(v.clientLeft+parseFloat(S.paddingLeft))*w.x,h=C.top+(v.clientTop+parseFloat(S.paddingTop))*w.y;c*=w.x,u*=w.y,l*=w.x,d*=w.y,c+=g,u+=h,p=xe(v),v=p.frameElement}}return wo({width:l,height:d,x:c,y:u})}function ba(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=Ve(r),s=t?cn(t.floating):!1;if(r===a||s&&i)return n;let c={scrollLeft:0,scrollTop:0},u=_e(1);const l=_e(0),d=se(r);if((d||!d&&!i)&&((Ye(r)!=="body"||$t(a))&&(c=ln(r)),se(r))){const y=rt(r);u=ft(r),l.x=y.x+r.clientLeft,l.y=y.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+l.x,y:n.y*u.y-c.scrollTop*u.y+l.y}}function ya(e){return Array.from(e.getClientRects())}function To(e){return rt(Ve(e)).left+ln(e).scrollLeft}function xa(e){const t=Ve(e),n=ln(e),r=e.ownerDocument.body,o=ut(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ut(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+To(e);const s=-n.scrollTop;return Re(r).direction==="rtl"&&(a+=ut(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function wa(e,t){const n=xe(e),r=Ve(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;const u=jn();(!u||u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}function Ca(e,t){const n=rt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=se(e)?ft(e):_e(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:a,height:s,x:c,y:u}}function ar(e,t,n){let r;if(t==="viewport")r=wa(e,n);else if(t==="document")r=xa(Ve(e));else if(ne(t))r=Ca(t,n);else{const o=Oo(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return wo(r)}function Po(e,t){const n=We(e);return n===t||!ne(n)||Ke(n)?!1:Re(n).position==="fixed"||Po(n,t)}function Sa(e,t){const n=t.get(e);if(n)return n;let r=qe(e,[],!1).filter(s=>ne(s)&&Ye(s)!=="body"),o=null;const i=Re(e).position==="fixed";let a=i?We(e):e;for(;ne(a)&&!Ke(a);){const s=Re(a),c=Dn(a);!c&&s.position==="fixed"&&(o=null),(i?!c&&!o:!c&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||$t(a)&&!c&&Po(e,a))?r=r.filter(l=>l!==a):o=s,a=We(a)}return t.set(e,r),r}function Ea(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?cn(t)?[]:Sa(t,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,l)=>{const d=ar(t,l,o);return u.top=ut(d.top,u.top),u.right=Rn(d.right,u.right),u.bottom=Rn(d.bottom,u.bottom),u.left=ut(d.left,u.left),u},ar(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ka(e){const{width:t,height:n}=Ro(e);return{width:t,height:n}}function Ra(e,t,n){const r=se(t),o=Ve(t),i=n==="fixed",a=rt(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const c=_e(0);if(r||!r&&!i)if((Ye(t)!=="body"||$t(o))&&(s=ln(t)),r){const d=rt(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=To(o));const u=a.left+s.scrollLeft-c.x,l=a.top+s.scrollTop-c.y;return{x:u,y:l,width:a.width,height:a.height}}function gn(e){return Re(e).position==="static"}function sr(e,t){return!se(e)||Re(e).position==="fixed"?null:t?t(e):e.offsetParent}function $o(e,t){const n=xe(e);if(cn(e))return n;if(!se(e)){let o=We(e);for(;o&&!Ke(o);){if(ne(o)&&!gn(o))return o;o=We(o)}return n}let r=sr(e,t);for(;r&&Di(r)&&gn(r);)r=sr(r,t);return r&&Ke(r)&&gn(r)&&!Dn(r)?n:r||ji(e)||n}const Oa=async function(e){const t=this.getOffsetParent||$o,n=this.getDimensions,r=await n(e.floating);return{reference:Ra(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ta(e){return Re(e).direction==="rtl"}const Pa={convertOffsetParentRelativeRectToViewportRelativeRect:ba,getDocumentElement:Ve,getClippingRect:Ea,getOffsetParent:$o,getElementRects:Oa,getClientRects:ya,getDimensions:ka,getScale:ft,isElement:ne,isRTL:Ta};function $a(e,t){let n=null,r;const o=Ve(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();const{left:u,top:l,width:d,height:y}=e.getBoundingClientRect();if(s||t(),!d||!y)return;const f=Lt(l),p=Lt(o.clientWidth-(u+d)),v=Lt(o.clientHeight-(l+y)),w=Lt(u),S={rootMargin:-f+"px "+-p+"px "+-v+"px "+-w+"px",threshold:ut(0,Rn(1,c))||1};let g=!0;function h(x){const m=x[0].intersectionRatio;if(m!==c){if(!g)return a();m?a(!1,m):r=setTimeout(()=>{a(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(h,{...S,root:o.ownerDocument})}catch{n=new IntersectionObserver(h,S)}n.observe(e)}return a(!0),i}function Aa(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Fn(e),l=o||i?[...u?qe(u):[],...qe(t)]:[];l.forEach(C=>{o&&C.addEventListener("scroll",n,{passive:!0}),i&&C.addEventListener("resize",n)});const d=u&&s?$a(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(C=>{let[S]=C;S&&S.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var g;(g=f)==null||g.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let p,v=c?rt(e):null;c&&w();function w(){const C=rt(e);v&&(C.x!==v.x||C.y!==v.y||C.width!==v.width||C.height!==v.height)&&n(),v=C,p=requestAnimationFrame(w)}return n(),()=>{var C;l.forEach(S=>{o&&S.removeEventListener("scroll",n),i&&S.removeEventListener("resize",n)}),d==null||d(),(C=f)==null||C.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Ia=(e,t,n)=>{const r=new Map,o={platform:Pa,...n},i={...o.platform,_c:r};return ha(e,t,{...o,platform:i})};var Wt=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Zt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Zt(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Zt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Ao(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function cr(e,t){const n=Ao(e);return Math.round(t*n)/n}function lr(e){const t=b.useRef(e);return Wt(()=>{t.current=e}),t}function Ma(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[l,d]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[y,f]=b.useState(r);Zt(y,r)||f(r);const[p,v]=b.useState(null),[w,C]=b.useState(null),S=b.useCallback(P=>{P!==m.current&&(m.current=P,v(P))},[]),g=b.useCallback(P=>{P!==E.current&&(E.current=P,C(P))},[]),h=i||p,x=a||w,m=b.useRef(null),E=b.useRef(null),O=b.useRef(l),L=c!=null,I=lr(c),B=lr(o),A=b.useCallback(()=>{if(!m.current||!E.current)return;const P={placement:t,strategy:n,middleware:y};B.current&&(P.platform=B.current),Ia(m.current,E.current,P).then(W=>{const Y={...W,isPositioned:!0};V.current&&!Zt(O.current,Y)&&(O.current=Y,vi.flushSync(()=>{d(Y)}))})},[y,t,n,B]);Wt(()=>{u===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d(P=>({...P,isPositioned:!1})))},[u]);const V=b.useRef(!1);Wt(()=>(V.current=!0,()=>{V.current=!1}),[]),Wt(()=>{if(h&&(m.current=h),x&&(E.current=x),h&&x){if(I.current)return I.current(h,x,A);A()}},[h,x,A,I,L]);const k=b.useMemo(()=>({reference:m,floating:E,setReference:S,setFloating:g}),[S,g]),j=b.useMemo(()=>({reference:h,floating:x}),[h,x]),N=b.useMemo(()=>{const P={position:n,left:0,top:0};if(!j.floating)return P;const W=cr(j.floating,l.x),Y=cr(j.floating,l.y);return s?{...P,transform:"translate("+W+"px, "+Y+"px)",...Ao(j.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:Y}},[n,s,j.floating,l.x,l.y]);return b.useMemo(()=>({...l,update:A,refs:k,elements:j,floatingStyles:N}),[l,A,k,j,N])}const Io={...hi},La=Io.useInsertionEffect,Da=La||(e=>e());function Ue(e){const t=b.useRef(()=>{});return Da(()=>{t.current=e}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}let ur=0;function Ze(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(ur);const i=()=>e==null?void 0:e.focus({preventScroll:n});o?i():ur=requestAnimationFrame(i)}var Be=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Jt(){return Jt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jt.apply(this,arguments)}let fr=!1,ja=0;const dr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+ja++;function Na(){const[e,t]=b.useState(()=>fr?dr():void 0);return Be(()=>{e==null&&t(dr())},[]),b.useEffect(()=>{fr=!0},[]),e}const Fa=Io.useId,Bn=Fa||Na;function Ba(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const Wa=b.createContext(null),Ha=b.createContext(null),Mo=()=>{var e;return((e=b.useContext(Wa))==null?void 0:e.id)||null},Wn=()=>b.useContext(Ha);function Qt(e){return"data-floating-ui-"+e}function bn(e){const t=b.useRef(e);return Be(()=>{t.current=e}),t}function Va(e,t){var n;let r=[],o=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;o;){const i=e.find(a=>a.id===o);o=i==null?void 0:i.parentId,i&&(r=r.concat(i))}return r}function wt(e,t){let n=e.filter(o=>{var i;return o.parentId===t&&((i=o.context)==null?void 0:i.open)}),r=n;for(;r.length;)r=e.filter(o=>{var i;return(i=r)==null?void 0:i.some(a=>{var s;return o.parentId===a.id&&((s=o.context)==null?void 0:s.open)})}),n=n.concat(r);return n}let st=new WeakMap,Dt=new WeakSet,jt={},yn=0;const za=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Lo=e=>e&&(e.host||Lo(e.parentNode)),Ua=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=Lo(n);return e.contains(r)?r:null}).filter(n=>n!=null);function qa(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Ua(t,e),s=new Set,c=new Set(a),u=[];jt[o]||(jt[o]=new WeakMap);const l=jt[o];a.forEach(d),y(t),s.clear();function d(f){!f||s.has(f)||(s.add(f),f.parentNode&&d(f.parentNode))}function y(f){!f||c.has(f)||[].forEach.call(f.children,p=>{if(Ye(p)!=="script")if(s.has(p))y(p);else{const v=i?p.getAttribute(i):null,w=v!==null&&v!=="false",C=(st.get(p)||0)+1,S=(l.get(p)||0)+1;st.set(p,C),l.set(p,S),u.push(p),C===1&&w&&Dt.add(p),S===1&&p.setAttribute(o,""),!w&&i&&p.setAttribute(i,"true")}})}return yn++,()=>{u.forEach(f=>{const p=(st.get(f)||0)-1,v=(l.get(f)||0)-1;st.set(f,p),l.set(f,v),p||(!Dt.has(f)&&i&&f.removeAttribute(i),Dt.delete(f)),v||f.removeAttribute(o)}),yn--,yn||(st=new WeakMap,st=new WeakMap,Dt=new WeakSet,jt={})}}function pr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=$e(e[0]).body;return qa(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const en=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Do(e,t){const n=Nn(e,en());t==="prev"&&n.reverse();const r=n.indexOf(Je($e(e)));return n.slice(r+1)[0]}function Ka(){return Do(document.body,"next")}function _a(){return Do(document.body,"prev")}function vr(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!be(n,r)}const jo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Ya;function hr(e){e.key==="Tab"&&(e.target,clearTimeout(Ya))}const mr=b.forwardRef(function(t,n){const[r,o]=b.useState();Be(()=>(Wi()&&o("button"),document.addEventListener("keydown",hr),()=>{document.removeEventListener("keydown",hr)}),[]);const i={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[Qt("focus-guard")]:"",style:jo};return b.createElement("span",Jt({},t,i))}),Xa=b.createContext(null),Ga=()=>b.useContext(Xa),gr=20;let Qe=[];function xn(e){Qe=Qe.filter(n=>n.isConnected);let t=e;if(!(!t||Ye(t)==="body")){if(!va(t,en())){const n=Nn(t,en())[0];n&&(t=n)}Qe.push(t),Qe.length>gr&&(Qe=Qe.slice(-gr))}}function br(){return Qe.slice().reverse().find(e=>e.isConnected)}const Za=b.forwardRef(function(t,n){return b.createElement("button",Jt({},t,{type:"button",ref:n,tabIndex:-1,style:jo}))});function Ja(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:a=0,returnFocus:s=!0,restoreFocus:c=!1,modal:u=!0,visuallyHiddenDismiss:l=!1,closeOnFocusOut:d=!0}=e,{open:y,refs:f,nodeId:p,onOpenChange:v,events:w,dataRef:C,floatingId:S,elements:{domReference:g,floating:h}}=t,x=typeof a=="number"&&a<0,m=qi(g)&&x,E=za()?i:!0,O=bn(o),L=bn(a),I=bn(s),B=Wn(),A=Ga(),V=b.useRef(null),k=b.useRef(null),j=b.useRef(!1),N=b.useRef(!1),P=b.useRef(-1),W=A!=null,Y=h==null?void 0:h.firstElementChild,F=(Y==null?void 0:Y.id)===S?Y:h,G=Ue(function($){return $===void 0&&($=F),$?Nn($,en()):[]}),ae=Ue($=>{const M=G($);return O.current.map(D=>g&&D==="reference"?g:F&&D==="floating"?F:M).filter(Boolean).flat()});b.useEffect(()=>{if(r||!u)return;function $(D){if(D.key==="Tab"){be(F,Je($e(F)))&&G().length===0&&!m&&mn(D);const H=ae(),_=et(D);O.current[0]==="reference"&&_===g&&(mn(D),D.shiftKey?Ze(H[H.length-1]):Ze(H[1])),O.current[1]==="floating"&&_===F&&D.shiftKey&&(mn(D),Ze(H[0]))}}const M=$e(F);return M.addEventListener("keydown",$),()=>{M.removeEventListener("keydown",$)}},[r,g,F,u,O,m,G,ae]),b.useEffect(()=>{if(r||!h)return;function $(M){const D=et(M),_=G().indexOf(D);_!==-1&&(P.current=_)}return h.addEventListener("focusin",$),()=>{h.removeEventListener("focusin",$)}},[r,h,G]),b.useEffect(()=>{if(r||!d)return;function $(){N.current=!0,setTimeout(()=>{N.current=!1})}function M(D){const H=D.relatedTarget;queueMicrotask(()=>{const _=!(be(g,H)||be(h,H)||be(H,h)||be(A==null?void 0:A.portalNode,H)||H!=null&&H.hasAttribute(Qt("focus-guard"))||B&&(wt(B.nodesRef.current,p).find(te=>{var Z,le;return be((Z=te.context)==null?void 0:Z.elements.floating,H)||be((le=te.context)==null?void 0:le.elements.domReference,H)})||Va(B.nodesRef.current,p).find(te=>{var Z,le;return((Z=te.context)==null?void 0:Z.elements.floating)===H||((le=te.context)==null?void 0:le.elements.domReference)===H})));if(c&&_&&Je($e(F))===$e(F).body){se(F)&&(F==null||F.focus());const te=P.current,Z=G(),le=Z[te]||Z[Z.length-1]||F;se(le)&&le.focus()}(m||!u)&&H&&_&&!N.current&&H!==br()&&(j.current=!0,v(!1,D))})}if(h&&se(g))return g.addEventListener("focusout",M),g.addEventListener("pointerdown",$),h.addEventListener("focusout",M),()=>{g.removeEventListener("focusout",M),g.removeEventListener("pointerdown",$),h.removeEventListener("focusout",M)}},[r,g,h,F,u,p,B,A,v,d,c,G,m]),b.useEffect(()=>{var $;if(r)return;const M=Array.from((A==null||($=A.portalNode)==null?void 0:$.querySelectorAll("["+Qt("portal")+"]"))||[]);if(h){const D=[h,...M,V.current,k.current,O.current.includes("reference")||m?g:null].filter(_=>_!=null),H=u||m?pr(D,E,!E):pr(D);return()=>{H()}}},[r,g,h,u,O,A,m,E]),Be(()=>{if(r||!se(F))return;const $=$e(F),M=Je($);queueMicrotask(()=>{const D=ae(F),H=L.current,_=(typeof H=="number"?D[H]:H.current)||F,te=be(F,M);!x&&!te&&y&&Ze(_,{preventScroll:_===F})})},[r,y,F,x,ae,L]),Be(()=>{if(r||!F)return;let $=!1;const M=$e(F),D=Je(M);let _=C.current.openEvent;xn(D);function te(Z){let{open:le,reason:Fe,event:oe,nested:ve}=Z;le&&(_=oe),Fe==="escape-key"&&f.domReference.current&&xn(f.domReference.current),Fe==="hover"&&oe.type==="mouseleave"&&(j.current=!0),Fe==="outside-press"&&(ve?(j.current=!1,$=!0):j.current=!(Fi(oe)||Bi(oe)))}return w.on("openchange",te),()=>{w.off("openchange",te);const Z=Je(M),le=be(h,Z)||B&&wt(B.nodesRef.current,p).some(ve=>{var J;return be((J=ve.context)==null?void 0:J.elements.floating,Z)});(le||_&&["click","mousedown"].includes(_.type))&&f.domReference.current&&xn(f.domReference.current);const oe=br();I.current&&!j.current&&se(oe)&&(!(oe!==Z&&Z!==M.body)||le)&&Ze(oe,{cancelPrevious:!1,preventScroll:$})}},[r,h,F,I,C,f,w,B,p]),Be(()=>{if(!r&&A)return A.setFocusManagerState({modal:u,closeOnFocusOut:d,open:y,onOpenChange:v,refs:f}),()=>{A.setFocusManagerState(null)}},[r,A,u,y,v,f,d]),Be(()=>{if(r||!F||typeof MutationObserver!="function"||x)return;const $=()=>{const D=F.getAttribute("tabindex"),H=G(),_=Je($e(h)),te=H.indexOf(_);te!==-1&&(P.current=te),O.current.includes("floating")||_!==f.domReference.current&&H.length===0?D!=="0"&&F.setAttribute("tabindex","0"):D!=="-1"&&F.setAttribute("tabindex","-1")};$();const M=new MutationObserver($);return M.observe(F,{childList:!0,subtree:!0,attributes:!0}),()=>{M.disconnect()}},[r,h,F,f,O,G,x]);function Ce($){return r||!l||!u?null:b.createElement(Za,{ref:$==="start"?V:k,onClick:M=>v(!1,M.nativeEvent)},typeof l=="string"?l:"Dismiss")}const pe=!r&&E&&(u?!m:!0)&&(W||u);return b.createElement(b.Fragment,null,pe&&b.createElement(mr,{"data-type":"inside",ref:A==null?void 0:A.beforeInsideRef,onFocus:$=>{if(u){const D=ae();Ze(o[0]==="reference"?D[0]:D[D.length-1])}else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(j.current=!1,vr($,A.portalNode)){const D=Ka()||g;D==null||D.focus()}else{var M;(M=A.beforeOutsideRef.current)==null||M.focus()}}}),!m&&Ce("start"),n,Ce("end"),pe&&b.createElement(mr,{"data-type":"inside",ref:A==null?void 0:A.afterInsideRef,onFocus:$=>{if(u)Ze(ae()[0]);else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(d&&(j.current=!0),vr($,A.portalNode)){const D=_a()||g;D==null||D.focus()}else{var M;(M=A.afterOutsideRef.current)==null||M.focus()}}}))}function yr(e){return se(e.target)&&e.target.tagName==="BUTTON"}function xr(e){return bo(e)}function Qa(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:l=!0}=t,d=b.useRef(),y=b.useRef(!1),f=b.useMemo(()=>({onPointerDown(p){d.current=p.pointerType},onMouseDown(p){const v=d.current;p.button===0&&s!=="click"&&(rr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?r(!1,p.nativeEvent,"click"):(p.preventDefault(),r(!0,p.nativeEvent,"click"))))},onClick(p){const v=d.current;if(s==="mousedown"&&d.current){d.current=void 0;return}rr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="click")?r(!1,p.nativeEvent,"click"):r(!0,p.nativeEvent,"click"))},onKeyDown(p){d.current=void 0,!(p.defaultPrevented||!l||yr(p))&&(p.key===" "&&!xr(i)&&(p.preventDefault(),y.current=!0),p.key==="Enter"&&r(!(n&&c),p.nativeEvent,"click"))},onKeyUp(p){p.defaultPrevented||!l||yr(p)||xr(i)||p.key===" "&&y.current&&(y.current=!1,r(!(n&&c),p.nativeEvent,"click"))}}),[o,i,s,u,l,r,n,c]);return b.useMemo(()=>a?{reference:f}:{},[a,f])}const es={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},ts={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},wr=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function ns(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:i}=e,{enabled:a=!0,escapeKey:s=!0,outsidePress:c=!0,outsidePressEvent:u="pointerdown",referencePress:l=!1,referencePressEvent:d="pointerdown",ancestorScroll:y=!1,bubbles:f,capture:p}=t,v=Wn(),w=Ue(typeof c=="function"?c:()=>!1),C=typeof c=="function"?w:c,S=b.useRef(!1),g=b.useRef(!1),{escapeKey:h,outsidePress:x}=wr(f),{escapeKey:m,outsidePress:E}=wr(p),O=Ue(k=>{var j;if(!n||!a||!s||k.key!=="Escape")return;const N=(j=i.current.floatingContext)==null?void 0:j.nodeId,P=v?wt(v.nodesRef.current,N):[];if(!h&&(k.stopPropagation(),P.length>0)){let W=!0;if(P.forEach(Y=>{var F;if((F=Y.context)!=null&&F.open&&!Y.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}r(!1,Vi(k)?k.nativeEvent:k,"escape-key")}),L=Ue(k=>{var j;const N=()=>{var P;O(k),(P=et(k))==null||P.removeEventListener("keydown",N)};(j=et(k))==null||j.addEventListener("keydown",N)}),I=Ue(k=>{var j;const N=S.current;S.current=!1;const P=g.current;if(g.current=!1,u==="click"&&P||N||typeof C=="function"&&!C(k))return;const W=et(k),Y="["+Qt("inert")+"]",F=$e(o.floating).querySelectorAll(Y);let G=ne(W)?W:null;for(;G&&!Ke(G);){const $=We(G);if(Ke($)||!ne($))break;G=$}if(F.length&&ne(W)&&!zi(W)&&!be(W,o.floating)&&Array.from(F).every($=>!be(G,$)))return;if(se(W)&&V){const $=W.clientWidth>0&&W.scrollWidth>W.clientWidth,M=W.clientHeight>0&&W.scrollHeight>W.clientHeight;let D=M&&k.offsetX>W.clientWidth;if(M&&Re(W).direction==="rtl"&&(D=k.offsetX<=W.offsetWidth-W.clientWidth),D||$&&k.offsetY>W.clientHeight)return}const ae=(j=i.current.floatingContext)==null?void 0:j.nodeId,Ce=v&&wt(v.nodesRef.current,ae).some($=>{var M;return hn(k,(M=$.context)==null?void 0:M.elements.floating)});if(hn(k,o.floating)||hn(k,o.domReference)||Ce)return;const pe=v?wt(v.nodesRef.current,ae):[];if(pe.length>0){let $=!0;if(pe.forEach(M=>{var D;if((D=M.context)!=null&&D.open&&!M.context.dataRef.current.__outsidePressBubbles){$=!1;return}}),!$)return}r(!1,k,"outside-press")}),B=Ue(k=>{var j;const N=()=>{var P;I(k),(P=et(k))==null||P.removeEventListener(u,N)};(j=et(k))==null||j.addEventListener(u,N)});b.useEffect(()=>{if(!n||!a)return;i.current.__escapeKeyBubbles=h,i.current.__outsidePressBubbles=x;function k(P){r(!1,P,"ancestor-scroll")}const j=$e(o.floating);s&&j.addEventListener("keydown",m?L:O,m),C&&j.addEventListener(u,E?B:I,E);let N=[];return y&&(ne(o.domReference)&&(N=qe(o.domReference)),ne(o.floating)&&(N=N.concat(qe(o.floating))),!ne(o.reference)&&o.reference&&o.reference.contextElement&&(N=N.concat(qe(o.reference.contextElement)))),N=N.filter(P=>{var W;return P!==((W=j.defaultView)==null?void 0:W.visualViewport)}),N.forEach(P=>{P.addEventListener("scroll",k,{passive:!0})}),()=>{s&&j.removeEventListener("keydown",m?L:O,m),C&&j.removeEventListener(u,E?B:I,E),N.forEach(P=>{P.removeEventListener("scroll",k)})}},[i,o,s,C,u,n,r,y,a,h,x,O,m,L,I,E,B]),b.useEffect(()=>{S.current=!1},[C,u]);const A=b.useMemo(()=>({onKeyDown:O,[es[d]]:k=>{l&&r(!1,k.nativeEvent,"reference-press")}}),[O,r,l,d]),V=b.useMemo(()=>({onKeyDown:O,onMouseDown(){g.current=!0},onMouseUp(){g.current=!0},[ts[u]]:()=>{S.current=!0}}),[O,u]);return b.useMemo(()=>a?{reference:A,floating:V}:{},[a,A,V])}function rs(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Bn(),i=b.useRef({}),[a]=b.useState(()=>Ba()),s=Mo()!=null,[c,u]=b.useState(r.reference),l=Ue((f,p,v)=>{i.current.openEvent=f?p:void 0,a.emit("openchange",{open:f,event:p,reason:v,nested:s}),n==null||n(f,p,v)}),d=b.useMemo(()=>({setPositionReference:u}),[]),y=b.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return b.useMemo(()=>({dataRef:i,open:t,onOpenChange:l,elements:y,events:a,floatingId:o,refs:d}),[t,l,y,a,o,d])}function os(e){e===void 0&&(e={});const{nodeId:t}=e,n=rs({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[i,a]=b.useState(null),[s,c]=b.useState(null),l=(o==null?void 0:o.reference)||i,d=b.useRef(null),y=Wn();Be(()=>{l&&(d.current=l)},[l]);const f=Ma({...e,elements:{...o,...s&&{reference:s}}}),p=b.useCallback(g=>{const h=ne(g)?{getBoundingClientRect:()=>g.getBoundingClientRect(),contextElement:g}:g;c(h),f.refs.setReference(h)},[f.refs]),v=b.useCallback(g=>{(ne(g)||g===null)&&(d.current=g,a(g)),(ne(f.refs.reference.current)||f.refs.reference.current===null||g!==null&&!ne(g))&&f.refs.setReference(g)},[f.refs]),w=b.useMemo(()=>({...f.refs,setReference:v,setPositionReference:p,domReference:d}),[f.refs,v,p]),C=b.useMemo(()=>({...f.elements,domReference:l}),[f.elements,l]),S=b.useMemo(()=>({...f,...r,refs:w,elements:C,nodeId:t}),[f,w,C,t,r]);return Be(()=>{r.dataRef.current.floatingContext=S;const g=y==null?void 0:y.nodesRef.current.find(h=>h.id===t);g&&(g.context=S)}),b.useMemo(()=>({...f,context:S,refs:w,elements:C}),[f,w,C,S])}const Cr="active",Sr="selected";function wn(e,t,n){const r=new Map,o=n==="item";let i=e;if(o&&e){const{[Cr]:a,[Sr]:s,...c}=e;i=c}return{...n==="floating"&&{tabIndex:-1},...i,...t.map(a=>{const s=a?a[n]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(c=>{let[u,l]=c;if(!(o&&[Cr,Sr].includes(u)))if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof l=="function"){var d;(d=r.get(u))==null||d.push(l),a[u]=function(){for(var y,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(y=r.get(u))==null?void 0:y.map(w=>w(...p)).find(w=>w!==void 0)}}}else a[u]=l}),a),{})}}function is(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),n=e.map(s=>s==null?void 0:s.floating),r=e.map(s=>s==null?void 0:s.item),o=b.useCallback(s=>wn(s,e,"reference"),t),i=b.useCallback(s=>wn(s,e,"floating"),n),a=b.useCallback(s=>wn(s,e,"item"),r);return b.useMemo(()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:a}),[o,i,a])}const as=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function ss(e,t){var n;t===void 0&&(t={});const{open:r,floatingId:o}=e,{enabled:i=!0,role:a="dialog"}=t,s=(n=as.get(a))!=null?n:a,c=Bn(),l=Mo()!=null,d=b.useMemo(()=>s==="tooltip"||a==="label"?{["aria-"+(a==="label"?"labelledby":"describedby")]:r?o:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":r?o:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:c},...s==="menu"&&l&&{role:"menuitem"},...a==="select"&&{"aria-autocomplete":"none"},...a==="combobox"&&{"aria-autocomplete":"list"}},[s,o,l,r,c,a]),y=b.useMemo(()=>{const p={id:o,...s&&{role:s}};return s==="tooltip"||a==="label"?p:{...p,...s==="menu"&&{"aria-labelledby":c}}},[s,o,c,a]),f=b.useCallback(p=>{let{active:v,selected:w}=p;const C={role:"option",...v&&{id:o+"-option"}};switch(a){case"select":return{...C,"aria-selected":v&&w};case"combobox":return{...C,...v&&{"aria-selected":!0}}}return{}},[o,a]);return b.useMemo(()=>i?{reference:d,floating:y,item:f}:{},[i,d,y,f])}const Er=X.button`
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
`,cs=X(lt)`
  ${Ln}

  color: ${({theme:e})=>e.global.text.color.white};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,ls=X.p`
  margin-bottom: 0;
`,kr=X.svg`
  width: 1.75rem;
  height: 1.75rem;

  fill: transparent;
  stroke: currentColor;
`,us=X.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);
  }
`,fs=X.ul`
  padding: ${({theme:e})=>e.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({theme:e})=>e.pageBackground};
`,Rr=X.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(3)};
  }
`,ds=X(lt)`
  ${Ln}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,Or=X.svg`
  width: 1rem;
  height: 1rem;

  fill: transparent;
  stroke: currentColor;
`,ps=()=>{const e=Pt(sn),t=po(),n=mi(),[,{isLoading:r}]=gi({fixedCacheKey:"login-user"}),[,{isLoading:o}]=bi({fixedCacheKey:"register-user"}),i=()=>{t(xi()),n("/login"),s(!1)},[a,s]=b.useState(!1),{refs:c,floatingStyles:u,context:l}=os({open:a,onOpenChange:s,whileElementsMounted:Aa}),d=Qa(l),y=ns(l),f=ss(l,{role:"menu"}),{getReferenceProps:p,getFloatingProps:v}=is([d,y,f]),w=Bn();return T.jsxs(T.Fragment,{children:[e&&T.jsxs(Er,{ref:c.setReference,...p(),children:[T.jsx(ls,{children:e.firstName}),T.jsx(kr,{children:T.jsx("use",{href:`${ct}#user`})}),T.jsx(us,{className:a?"open":"",children:T.jsx("use",{href:`${ct}#arrow-down`})})]}),!e&&T.jsxs(cs,{to:"/login",children:[r||o?T.jsx(yi,{}):T.jsx("p",{children:"Log in"}),T.jsx(kr,{children:T.jsx("use",{href:`${ct}#user`})})]}),a&&T.jsx(Ja,{context:l,modal:!1,initialFocus:-1,children:T.jsx("div",{className:"Popover",ref:c.setFloating,style:u,"aria-labelledby":w,...v(),children:T.jsxs(fs,{children:[T.jsx(Rr,{role:"menuitem",children:T.jsxs(Er,{onClick:i,className:"logout",children:[T.jsx(Or,{children:T.jsx("use",{href:`${ct}#logout`})}),"Log out"]})}),T.jsx(Rr,{role:"menuitem",children:T.jsxs(ds,{to:"/settings",children:[T.jsx(Or,{children:T.jsx("use",{href:`${ct}#settings`})}),"Settings"]})})]})})})]})},vs=({isMobile:e,handleClick:t,mobileMenu:n})=>T.jsx(Mi,{children:T.jsxs(Li,{children:[e&&T.jsx($i,{onClick:()=>t(),mobileMenu:n}),T.jsx(ps,{})]})}),hs=X.div`
  padding-top: ${({theme:e})=>e.global.spacing(12)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  background-color: ${({theme:e})=>e.secondaryBgColor};

  ${Kt.tablet`
    padding-top: ${({theme:e})=>e.global.spacing(2)};
  `}
`,ms=X.ul`
  ${an}
`,Cn=X.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(2)};
  }
`,gs=X.img`
  border-radius: 50%;
`,Tr=X.p`
  color: ${({theme:e})=>e.textColorSecondary};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};
  font-weight: ${({theme:e})=>e.global.text.fontWeight.m};
`,bs=()=>{const e=Pt(sn);return T.jsx(hs,{children:T.jsxs(ms,{children:[T.jsx(Cn,{children:T.jsx(gs,{src:e==null?void 0:e.image,alt:"User photo",width:"60"})}),T.jsx(Cn,{children:T.jsx(Tr,{children:e==null?void 0:e.firstName})}),T.jsx(Cn,{children:T.jsx(Tr,{children:e==null?void 0:e.email})})]})})};/*! *****************************************************************************
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
***************************************************************************** */var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ye.apply(this,arguments)};function ot(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function de(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function Tn(){return Tn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tn.apply(this,arguments)}function Hn(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ys=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,xs=Hn(function(e){return ys.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function ws(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Cs(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ss=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Cs(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ws(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),fe="-ms-",tn="-moz-",q="-webkit-",No="comm",Vn="rule",zn="decl",Es="@import",Fo="@keyframes",ks=Math.abs,un=String.fromCharCode,Rs=Object.assign;function Os(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Bo(e){return e.trim()}function Ts(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function Pn(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Et(e,t,n){return e.slice(t,n)}function Me(e){return e.length}function Un(e){return e.length}function Nt(e,t){return t.push(e),e}function Ps(e,t){return e.map(t).join("")}var fn=1,pt=1,Wo=0,ge=0,re=0,bt="";function dn(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:fn,column:pt,length:a,return:""}}function yt(e,t){return Rs(dn("",null,null,"",null,null,0),e,{length:-e.length},t)}function $s(){return re}function As(){return re=ge>0?ue(bt,--ge):0,pt--,re===10&&(pt=1,fn--),re}function we(){return re=ge<Wo?ue(bt,ge++):0,pt++,re===10&&(pt=1,fn++),re}function De(){return ue(bt,ge)}function Ht(){return ge}function At(e,t){return Et(bt,e,t)}function kt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ho(e){return fn=pt=1,Wo=Me(bt=e),ge=0,[]}function Vo(e){return bt="",e}function Vt(e){return Bo(At(ge-1,$n(e===91?e+2:e===40?e+1:e)))}function Is(e){for(;(re=De())&&re<33;)we();return kt(e)>2||kt(re)>3?"":" "}function Ms(e,t){for(;--t&&we()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return At(e,Ht()+(t<6&&De()==32&&we()==32))}function $n(e){for(;we();)switch(re){case e:return ge;case 34:case 39:e!==34&&e!==39&&$n(re);break;case 40:e===41&&$n(e);break;case 92:we();break}return ge}function Ls(e,t){for(;we()&&e+re!==57;)if(e+re===84&&De()===47)break;return"/*"+At(t,ge-1)+"*"+un(e===47?e:we())}function Ds(e){for(;!kt(De());)we();return At(e,ge)}function Pr(e){return Vo(zt("",null,null,null,[""],e=Ho(e),0,[0],e))}function zt(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,d=a,y=0,f=0,p=0,v=1,w=1,C=1,S=0,g="",h=o,x=i,m=r,E=g;w;)switch(p=S,S=we()){case 40:if(p!=108&&ue(E,d-1)==58){Pn(E+=K(Vt(S),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:E+=Vt(S);break;case 9:case 10:case 13:case 32:E+=Is(p);break;case 92:E+=Ms(Ht()-1,7);continue;case 47:switch(De()){case 42:case 47:Nt(js(Ls(we(),Ht()),t,n),c);break;default:E+="/"}break;case 123*v:s[u++]=Me(E)*C;case 125*v:case 59:case 0:switch(S){case 0:case 125:w=0;case 59+l:f>0&&Me(E)-d&&Nt(f>32?Ar(E+";",r,n,d-1):Ar(K(E," ","")+";",r,n,d-2),c);break;case 59:E+=";";default:if(Nt(m=$r(E,t,n,u,l,o,s,g,h=[],x=[],d),i),S===123)if(l===0)zt(E,t,m,m,h,i,d,s,x);else switch(y===99&&ue(E,3)===110?100:y){case 100:case 109:case 115:zt(e,m,m,r&&Nt($r(e,m,m,0,0,o,s,g,o,h=[],d),x),o,x,d,s,r?h:x);break;default:zt(E,m,m,m,[""],x,0,s,x)}}u=l=f=0,v=C=1,g=E="",d=a;break;case 58:d=1+Me(E),f=p;default:if(v<1){if(S==123)--v;else if(S==125&&v++==0&&As()==125)continue}switch(E+=un(S),S*v){case 38:C=l>0?1:(E+="\f",-1);break;case 44:s[u++]=(Me(E)-1)*C,C=1;break;case 64:De()===45&&(E+=Vt(we())),y=De(),l=d=Me(g=E+=Ds(Ht())),S++;break;case 45:p===45&&Me(E)==2&&(v=0)}}return i}function $r(e,t,n,r,o,i,a,s,c,u,l){for(var d=o-1,y=o===0?i:[""],f=Un(y),p=0,v=0,w=0;p<r;++p)for(var C=0,S=Et(e,d+1,d=ks(v=a[p])),g=e;C<f;++C)(g=Bo(v>0?y[C]+" "+S:K(S,/&\f/g,y[C])))&&(c[w++]=g);return dn(e,t,n,o===0?Vn:s,c,u,l)}function js(e,t,n){return dn(e,t,n,No,un($s()),Et(e,2,-2),0)}function Ar(e,t,n,r){return dn(e,t,n,zn,Et(e,0,r),Et(e,r+1,-1),r)}function tt(e,t){for(var n="",r=Un(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Ir(e,t,n,r){switch(e.type){case Es:case zn:return e.return=e.return||e.value;case No:return"";case Fo:return e.return=e.value+"{"+tt(e.children,r)+"}";case Vn:e.value=e.props.join(",")}return Me(n=tt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Mr(e){var t=Un(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function Ns(e){return function(t){t.root||(t=t.return)&&e(t)}}var Fs=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}},Bs=function(t,n,r){for(var o=0,i=0;o=i,i=De(),o===38&&i===12&&(n[r]=1),!kt(i);)we();return At(t,ge)},Ws=function(t,n){var r=-1,o=44;do switch(kt(o)){case 0:o===38&&De()===12&&(n[r]=1),t[r]+=Bs(ge-1,n,r);break;case 2:t[r]+=Vt(o);break;case 4:if(o===44){t[++r]=De()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=un(o)}while(o=we());return t},Hs=function(t,n){return Vo(Ws(Ho(t),n))},Lr=new WeakMap,Vs=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Lr.get(r))&&!o){Lr.set(t,!0);for(var i=[],a=Hs(n,i),s=r.props,c=0,u=0;c<a.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},zs=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function zo(e,t){switch(Os(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+tn+e+fe+e+e;case 6828:case 4268:return q+e+fe+e+e;case 6165:return q+e+fe+"flex-"+e+e;case 5187:return q+e+K(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return q+e+fe+"flex-item-"+K(e,/flex-|-self/,"")+e;case 4675:return q+e+fe+"flex-line-pack"+K(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+fe+K(e,"shrink","negative")+e;case 5292:return q+e+fe+K(e,"basis","preferred-size")+e;case 6060:return q+"box-"+K(e,"-grow","")+q+e+fe+K(e,"grow","positive")+e;case 4554:return q+K(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Me(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+tn+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pn(e,"stretch")?zo(K(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,Me(e)-3-(~Pn(e,"!important")&&10))){case 107:return K(e,":",":"+q)+e;case 101:return K(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(ue(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+fe+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+fe+e+e}return e}var Us=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case zn:t.return=zo(t.value,t.length);break;case Fo:return tt([yt(t,{value:K(t.value,"@","@"+q)})],o);case Vn:if(t.length)return Ps(t.props,function(i){switch(Ts(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return tt([yt(t,{props:[K(i,/:(read-\w+)/,":"+tn+"$1")]})],o);case"::placeholder":return tt([yt(t,{props:[K(i,/:(plac\w+)/,":"+q+"input-$1")]}),yt(t,{props:[K(i,/:(plac\w+)/,":"+tn+"$1")]}),yt(t,{props:[K(i,/:(plac\w+)/,fe+"input-$1")]})],o)}return""})}},Ut=typeof document<"u",qs=Ut?void 0:Fs(function(){return Hn(function(){var e={};return function(t){return e[t]}})}),Ks=[Us],Uo=function(t){var n=t.key;if(Ut&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var x=h.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||Ks,i={},a,s=[];Ut&&(a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var x=h.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)i[x[m]]=!0;s.push(h)}));var c,u=[Vs,zs];if(Ut){var l,d=[Ir,Ns(function(h){l.insert(h)})],y=Mr(u.concat(o,d)),f=function(x){return tt(Pr(x),y)};c=function(x,m,E,O){l=E,f(x?x+"{"+m.styles+"}":m.styles),O&&(g.inserted[m.name]=!0)}}else{var p=[Ir],v=Mr(u.concat(o,p)),w=function(x){return tt(Pr(x),v)},C=qs(o)(n),S=function(x,m){var E=m.name;return C[E]===void 0&&(C[E]=w(x?x+"{"+m.styles+"}":m.styles)),C[E]};c=function(x,m,E,O){var L=m.name,I=S(x,m);if(g.compat===void 0)return O&&(g.inserted[L]=!0),I;if(O)g.inserted[L]=I;else return I}}var g={key:n,sheet:new Ss({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(s),g},_s=typeof document<"u",Dr=function(t){return t()},Ys=b.useInsertionEffect?b.useInsertionEffect:!1,Xs=_s&&Ys||Dr,Gs=typeof document<"u",nn=b.createContext(typeof HTMLElement<"u"?Uo({key:"css"}):null);nn.Provider;var qo=function(t){return b.forwardRef(function(n,r){var o=b.useContext(nn);return t(n,o,r)})};Gs||(qo=function(t){return function(n){var r=b.useContext(nn);return r===null?(r=Uo({key:"css"}),b.createElement(nn.Provider,{value:r},t(n,r))):t(n,r)}});var Zs=b.createContext({}),An=typeof document<"u";function Js(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Ko=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||An===!1&&t.compat!==void 0)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Qs=function(t,n,r){Ko(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",a=n;do{var s=t.insert(n===a?"."+o:"",a,t.sheet,!0);!An&&s!==void 0&&(i+=s),a=a.next}while(a!==void 0);if(!An&&i.length!==0)return i}};function ec(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var tc={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},nc=/[A-Z]|^ms/g,rc=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_o=function(t){return t.charCodeAt(1)===45},jr=function(t){return t!=null&&typeof t!="boolean"},Sn=Hn(function(e){return _o(e)?e:e.replace(nc,"-$&").toLowerCase()}),Nr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(rc,function(r,o,i){return Le={name:o,styles:i,next:Le},o})}return tc[t]!==1&&!_o(t)&&typeof n=="number"&&n!==0?n+"px":n};function Rt(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Le={name:n.name,styles:n.styles,next:Le},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Le={name:r.name,styles:r.styles,next:Le},r=r.next;var o=n.styles+";";return o}return oc(e,t,n)}case"function":{if(e!==void 0){var i=Le,a=n(e);return Le=i,Rt(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function oc(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Rt(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":jr(a)&&(r+=Sn(i)+":"+Nr(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)jr(a[s])&&(r+=Sn(i)+":"+Nr(i,a[s])+";");else{var c=Rt(e,t,a);switch(i){case"animation":case"animationName":{r+=Sn(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Fr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Le,ic=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Le=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Rt(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Rt(r,n,t[s]),o&&(i+=a[s]);Fr.lastIndex=0;for(var c="",u;(u=Fr.exec(i))!==null;)c+="-"+u[1];var l=ec(i)+c;return{name:l,styles:i,next:Le}},ac=xs,sc=function(t){return t!=="theme"},Br=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ac:sc},Wr=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},cc=typeof document<"u",lc=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;Ko(n,r,o);var i=Xs(function(){return Qs(n,r,o)});if(!cc&&i!==void 0){for(var a,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return b.createElement("style",(a={},a["data-emotion"]=n.key+" "+s,a.dangerouslySetInnerHTML={__html:i},a.nonce=n.sheet.nonce,a))}return null},uc=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Wr(t,n,r),c=s||Br(o),u=!c("as");return function(){var l=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)d.push.apply(d,l);else{d.push(l[0][0]);for(var y=l.length,f=1;f<y;f++)d.push(l[f],l[0][f])}var p=qo(function(v,w,C){var S=u&&v.as||o,g="",h=[],x=v;if(v.theme==null){x={};for(var m in v)x[m]=v[m];x.theme=b.useContext(Zs)}typeof v.className=="string"?g=Js(w.registered,h,v.className):v.className!=null&&(g=v.className+" ");var E=ic(d.concat(h),w.registered,x);g+=w.key+"-"+E.name,a!==void 0&&(g+=" "+a);var O=u&&s===void 0?Br(S):c,L={};for(var I in v)u&&I==="as"||O(I)&&(L[I]=v[I]);return L.className=g,L.ref=C,b.createElement(b.Fragment,null,b.createElement(lc,{cache:w,serialized:E,isStringTag:typeof S=="string"}),b.createElement(S,L))});return p.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(v,w){return e(v,Tn({},n,w,{shouldForwardProp:Wr(p,w,!0)})).apply(void 0,d)},p}},fc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ce=uc.bind();fc.forEach(function(e){ce[e]=ce(e)});var Yo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Yo);var ie=Yo.exports,dc=R.createContext(void 0),pc=function(){var e=R.useContext(dc);return e},vc=function(e){var t=R.useState(!!e&&typeof window<"u"&&window.matchMedia(e).matches),n=t[0],r=t[1];return R.useEffect(function(){if(e){var o=window.matchMedia(e),i=function(){o.matches!==n&&r(o.matches)};return i(),o.addEventListener("change",i),function(){return o.removeEventListener("change",i)}}},[n,e]),n},Q={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},U={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},hc=ce.div(Hr||(Hr=de([`
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
`]))),Hr,mc={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},gc=ce.aside(Vr||(Vr=de([`
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
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},Q.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},Q.rtl,Q.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},Q.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},Q.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},Q.rtl,function(e){var t=e.width;return t},Q.collapsed,function(e){var t=e.collapsedWidth;return t},Q.toggled,function(e){var t=e.rootStyles;return t}),bc=ce.div(zr||(zr=de([`
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
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),yc=ce.img(Ur||(Ur=de([`
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
`])),Q.image),pn=R.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),xc=R.forwardRef(function(e,t){var n,r=e.collapsed,o=e.toggled,i=e.onBackdropClick,a=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,d=e.defaultCollapsed,y=e.className,f=e.children,p=e.breakPoint,v=e.customBreakPoint,w=e.backgroundColor,C=w===void 0?"rgb(249, 249, 249, 0.7)":w,S=e.transitionDuration,g=S===void 0?300:S,h=e.image,x=e.rtl,m=e.rootStyles,E=ot(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),O=function(){if(v)return"(max-width: ".concat(v,")");if(p)return["xs","sm","md","lg","xl","xxl"].includes(p)?"(max-width: ".concat(mc[p],")"):p==="always"||p==="all"?(p==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(p,")")},L=R.useRef();L.current=function(W){a==null||a(W)};var I=vc(O()),B=R.useState(!1),A=B[0],V=B[1],k=pc(),j=r??(!A&&d?!0:k==null?void 0:k.collapsed),N=o??(k==null?void 0:k.toggled),P=function(){i==null||i(),k==null||k.updateSidebarState({toggled:!1})};return R.useEffect(function(){var W;(W=L.current)===null||W===void 0||W.call(L,I)},[I]),R.useEffect(function(){k==null||k.updateSidebarState({broken:I,rtl:x,transitionDuration:g})},[I,k==null?void 0:k.updateSidebarState,x,g]),R.useEffect(function(){A||(k==null||k.updateSidebarState({collapsed:d}),V(!0))},[d,A,k==null?void 0:k.updateSidebarState]),R.createElement(pn.Provider,{value:{collapsed:j,toggled:N,rtl:x,transitionDuration:g}},R.createElement(gc,ye({ref:t,"data-testid":"".concat(Q.root,"-test-id"),rtl:x,rootStyles:m,width:c,collapsedWidth:l,transitionDuration:g,className:ie(Q.root,(n={},n[Q.collapsed]=j,n[Q.toggled]=N,n[Q.broken]=I,n[Q.rtl]=x,n),y)},E),R.createElement(bc,{"data-testid":"".concat(Q.container,"-test-id"),className:Q.container,backgroundColor:C},f),h&&R.createElement(yc,{"data-testid":"".concat(Q.image,"-test-id"),src:h,alt:"sidebar background",className:Q.image}),I&&N&&R.createElement(hc,{"data-testid":"".concat(Q.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:P,onKeyPress:P,className:Q.backdrop})))}),Vr,zr,Ur,Xo=ce.ul(qr||(qr=de([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),qr,wc=ce.nav(Kr||(Kr=de([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),U.root,function(e){var t=e.rootStyles;return t}),Go=R.createContext(void 0),rn=R.createContext(0),Cc=function(e,t){var n=e.children,r=e.className,o=e.transitionDuration,i=o===void 0?300:o,a=e.closeOnClick,s=a===void 0?!1:a,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,d=ot(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),y=R.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return R.createElement(Go.Provider,{value:y},R.createElement(rn.Provider,{value:0},R.createElement(wc,ye({ref:t,className:ie(U.root,r),rootStyles:c},d),R.createElement(Xo,null,n))))},Sc=R.forwardRef(Cc),Kr,qn=function(){var e=R.useContext(Go);if(e===void 0)throw new Error("Menu Component is required!");return e},Ec=ce.div(_r||(_r=de([`
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
      `},function(e){var t=e.rootStyles;return t}),kc=function(e,t){var n=e.children,r=e.open,o=e.openWhenCollapsed,i=e.firstLevel,a=e.collapsed,s=e.defaultOpen,c=ot(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=qn().transitionDuration,l=R.useState(s)[0];return R.createElement(Ec,ye({"data-testid":"".concat(U.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:a,open:r,openWhenCollapsed:o,transitionDuration:u,defaultOpen:l},c),R.createElement(Xo,null,n))},Rc=R.forwardRef(kc),_r,Zo=ce.span(Yr||(Yr=de([`
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
`])),function(e){var t=e.rootStyles;return t}),Yr,Jo=ce.span(Xr||(Xr=de([`
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
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),Xr,Qo=ce.span(Gr||(Gr=de([`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 5px;":"margin-right: 5px;"},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Gr,ei=ce.span(Zr||(Zr=de([`
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
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Zr,Oc=ce.span(Jr||(Jr=de([`
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
    
    `)},function(e){var t=e.rootStyles;return t}),Tc=ce.span(Qr||(Qr=de([`
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
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),Pc=ce.span(eo||(eo=de([`
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
`]))),Jr,Qr,eo,he="top",Oe="bottom",Te="right",me="left",Kn="auto",It=[he,Oe,Te,me],vt="start",Ot="end",$c="clippingParents",ti="viewport",xt="popper",Ac="reference",to=It.reduce(function(e,t){return e.concat([t+"-"+vt,t+"-"+Ot])},[]),ni=[].concat(It,[Kn]).reduce(function(e,t){return e.concat([t,t+"-"+vt,t+"-"+Ot])},[]),Ic="beforeRead",Mc="read",Lc="afterRead",Dc="beforeMain",jc="main",Nc="afterMain",Fc="beforeWrite",Bc="write",Wc="afterWrite",Hc=[Ic,Mc,Lc,Dc,jc,Nc,Fc,Bc,Wc];function Ne(e){return e?(e.nodeName||"").toLowerCase():null}function Pe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function it(e){var t=Pe(e).Element;return e instanceof t||e instanceof Element}function ke(e){var t=Pe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _n(e){if(typeof ShadowRoot>"u")return!1;var t=Pe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Vc(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!ke(i)||!Ne(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function zc(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(c,u){return c[u]="",c},{});!ke(o)||!Ne(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}var Uc={name:"applyStyles",enabled:!0,phase:"write",fn:Vc,effect:zc,requires:["computeStyles"]};function je(e){return e.split("-")[0]}var nt=Math.max,on=Math.min,ht=Math.round;function In(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ri(){return!/^((?!chrome|android).)*safari/i.test(In())}function mt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&ke(e)&&(o=e.offsetWidth>0&&ht(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ht(r.height)/e.offsetHeight||1);var a=it(e)?Pe(e):window,s=a.visualViewport,c=!ri()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/o,l=(r.top+(c&&s?s.offsetTop:0))/i,d=r.width/o,y=r.height/i;return{width:d,height:y,top:l,right:u+d,bottom:l+y,left:u,x:u,y:l}}function Yn(e){var t=mt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function oi(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_n(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function He(e){return Pe(e).getComputedStyle(e)}function qc(e){return["table","td","th"].indexOf(Ne(e))>=0}function Xe(e){return((it(e)?e.ownerDocument:e.document)||window.document).documentElement}function vn(e){return Ne(e)==="html"?e:e.assignedSlot||e.parentNode||(_n(e)?e.host:null)||Xe(e)}function no(e){return!ke(e)||He(e).position==="fixed"?null:e.offsetParent}function Kc(e){var t=/firefox/i.test(In()),n=/Trident/i.test(In());if(n&&ke(e)){var r=He(e);if(r.position==="fixed")return null}var o=vn(e);for(_n(o)&&(o=o.host);ke(o)&&["html","body"].indexOf(Ne(o))<0;){var i=He(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Mt(e){for(var t=Pe(e),n=no(e);n&&qc(n)&&He(n).position==="static";)n=no(n);return n&&(Ne(n)==="html"||Ne(n)==="body"&&He(n).position==="static")?t:n||Kc(e)||t}function Xn(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ct(e,t,n){return nt(e,on(t,n))}function _c(e,t,n){var r=Ct(e,t,n);return r>n?n:r}function ii(){return{top:0,right:0,bottom:0,left:0}}function ai(e){return Object.assign({},ii(),e)}function si(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Yc=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ai(typeof t!="number"?t:si(t,It))};function Xc(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=je(n.placement),c=Xn(s),u=[me,Te].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var d=Yc(o.padding,n),y=Yn(i),f=c==="y"?he:me,p=c==="y"?Oe:Te,v=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],w=a[c]-n.rects.reference[c],C=Mt(i),S=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,g=v/2-w/2,h=d[f],x=S-y[l]-d[p],m=S/2-y[l]/2+g,E=Ct(h,m,x),O=c;n.modifiersData[r]=(t={},t[O]=E,t.centerOffset=E-m,t)}}function Gc(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||oi(t.elements.popper,o)&&(t.elements.arrow=o))}var Zc={name:"arrow",enabled:!0,phase:"main",fn:Xc,effect:Gc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function gt(e){return e.split("-")[1]}var Jc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Qc(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:ht(t*o)/o||0,y:ht(n*o)/o||0}}function ro(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,y=a.x,f=y===void 0?0:y,p=a.y,v=p===void 0?0:p,w=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=w.x,v=w.y;var C=a.hasOwnProperty("x"),S=a.hasOwnProperty("y"),g=me,h=he,x=window;if(u){var m=Mt(n),E="clientHeight",O="clientWidth";if(m===Pe(n)&&(m=Xe(n),He(m).position!=="static"&&s==="absolute"&&(E="scrollHeight",O="scrollWidth")),m=m,o===he||(o===me||o===Te)&&i===Ot){h=Oe;var L=d&&m===x&&x.visualViewport?x.visualViewport.height:m[E];v-=L-r.height,v*=c?1:-1}if(o===me||(o===he||o===Oe)&&i===Ot){g=Te;var I=d&&m===x&&x.visualViewport?x.visualViewport.width:m[O];f-=I-r.width,f*=c?1:-1}}var B=Object.assign({position:s},u&&Jc),A=l===!0?Qc({x:f,y:v}):{x:f,y:v};if(f=A.x,v=A.y,c){var V;return Object.assign({},B,(V={},V[h]=S?"0":"",V[g]=C?"0":"",V.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",V))}return Object.assign({},B,(t={},t[h]=S?v+"px":"",t[g]=C?f+"px":"",t.transform="",t))}function el(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:je(t.placement),variation:gt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ro(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ro(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var tl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:el,data:{}},Ft={passive:!0};function nl(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,c=Pe(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,Ft)}),s&&c.addEventListener("resize",n.update,Ft),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,Ft)}),s&&c.removeEventListener("resize",n.update,Ft)}}var rl={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:nl,data:{}},ol={left:"right",right:"left",bottom:"top",top:"bottom"};function qt(e){return e.replace(/left|right|bottom|top/g,function(t){return ol[t]})}var il={start:"end",end:"start"};function oo(e){return e.replace(/start|end/g,function(t){return il[t]})}function Gn(e){var t=Pe(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Zn(e){return mt(Xe(e)).left+Gn(e).scrollLeft}function al(e,t){var n=Pe(e),r=Xe(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=ri();(u||!u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+Zn(e),y:c}}function sl(e){var t,n=Xe(e),r=Gn(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=nt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=nt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Zn(e),c=-r.scrollTop;return He(o||n).direction==="rtl"&&(s+=nt(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function Jn(e){var t=He(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ci(e){return["html","body","#document"].indexOf(Ne(e))>=0?e.ownerDocument.body:ke(e)&&Jn(e)?e:ci(vn(e))}function St(e,t){var n;t===void 0&&(t=[]);var r=ci(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=Pe(r),a=o?[i].concat(i.visualViewport||[],Jn(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(St(vn(a)))}function Mn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function cl(e,t){var n=mt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function io(e,t,n){return t===ti?Mn(al(e,n)):it(t)?cl(t,n):Mn(sl(Xe(e)))}function ll(e){var t=St(vn(e)),n=["absolute","fixed"].indexOf(He(e).position)>=0,r=n&&ke(e)?Mt(e):e;return it(r)?t.filter(function(o){return it(o)&&oi(o,r)&&Ne(o)!=="body"}):[]}function ul(e,t,n,r){var o=t==="clippingParents"?ll(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(c,u){var l=io(e,u,r);return c.top=nt(l.top,c.top),c.right=on(l.right,c.right),c.bottom=on(l.bottom,c.bottom),c.left=nt(l.left,c.left),c},io(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function li(e){var t=e.reference,n=e.element,r=e.placement,o=r?je(r):null,i=r?gt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case he:c={x:a,y:t.y-n.height};break;case Oe:c={x:a,y:t.y+t.height};break;case Te:c={x:t.x+t.width,y:s};break;case me:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?Xn(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case vt:c[u]=c[u]-(t[l]/2-n[l]/2);break;case Ot:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function Tt(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?$c:s,u=n.rootBoundary,l=u===void 0?ti:u,d=n.elementContext,y=d===void 0?xt:d,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,w=v===void 0?0:v,C=ai(typeof w!="number"?w:si(w,It)),S=y===xt?Ac:xt,g=e.rects.popper,h=e.elements[p?S:y],x=ul(it(h)?h:h.contextElement||Xe(e.elements.popper),c,l,a),m=mt(e.elements.reference),E=li({reference:m,element:g,strategy:"absolute",placement:o}),O=Mn(Object.assign({},g,E)),L=y===xt?O:m,I={top:x.top-L.top+C.top,bottom:L.bottom-x.bottom+C.bottom,left:x.left-L.left+C.left,right:L.right-x.right+C.right},B=e.modifiersData.offset;if(y===xt&&B){var A=B[o];Object.keys(I).forEach(function(V){var k=[Te,Oe].indexOf(V)>=0?1:-1,j=[he,Oe].indexOf(V)>=0?"y":"x";I[V]+=A[j]*k})}return I}function fl(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?ni:c,l=gt(r),d=l?s?to:to.filter(function(p){return gt(p)===l}):It,y=d.filter(function(p){return u.indexOf(p)>=0});y.length===0&&(y=d);var f=y.reduce(function(p,v){return p[v]=Tt(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[je(v)],p},{});return Object.keys(f).sort(function(p,v){return f[p]-f[v]})}function dl(e){if(je(e)===Kn)return[];var t=qt(e);return[oo(e),t,oo(t)]}function pl(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,y=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,v=n.allowedAutoPlacements,w=t.options.placement,C=je(w),S=C===w,g=c||(S||!p?[qt(w)]:dl(w)),h=[w].concat(g).reduce(function(pe,$){return pe.concat(je($)===Kn?fl(t,{placement:$,boundary:l,rootBoundary:d,padding:u,flipVariations:p,allowedAutoPlacements:v}):$)},[]),x=t.rects.reference,m=t.rects.popper,E=new Map,O=!0,L=h[0],I=0;I<h.length;I++){var B=h[I],A=je(B),V=gt(B)===vt,k=[he,Oe].indexOf(A)>=0,j=k?"width":"height",N=Tt(t,{placement:B,boundary:l,rootBoundary:d,altBoundary:y,padding:u}),P=k?V?Te:me:V?Oe:he;x[j]>m[j]&&(P=qt(P));var W=qt(P),Y=[];if(i&&Y.push(N[A]<=0),s&&Y.push(N[P]<=0,N[W]<=0),Y.every(function(pe){return pe})){L=B,O=!1;break}E.set(B,Y)}if(O)for(var F=p?3:1,G=function($){var M=h.find(function(D){var H=E.get(D);if(H)return H.slice(0,$).every(function(_){return _})});if(M)return L=M,"break"},ae=F;ae>0;ae--){var Ce=G(ae);if(Ce==="break")break}t.placement!==L&&(t.modifiersData[r]._skip=!0,t.placement=L,t.reset=!0)}}var vl={name:"flip",enabled:!0,phase:"main",fn:pl,requiresIfExists:["offset"],data:{_skip:!1}};function ao(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function so(e){return[he,Te,Oe,me].some(function(t){return e[t]>=0})}function hl(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Tt(t,{elementContext:"reference"}),s=Tt(t,{altBoundary:!0}),c=ao(a,r),u=ao(s,o,i),l=so(c),d=so(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var ml={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hl};function gl(e,t,n){var r=je(e),o=[me,he].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[me,Te].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function bl(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=ni.reduce(function(l,d){return l[d]=gl(d,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var yl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:bl};function xl(e){var t=e.state,n=e.name;t.modifiersData[n]=li({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var wl={name:"popperOffsets",enabled:!0,phase:"read",fn:xl,data:{}};function Cl(e){return e==="x"?"y":"x"}function Sl(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,y=n.tether,f=y===void 0?!0:y,p=n.tetherOffset,v=p===void 0?0:p,w=Tt(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),C=je(t.placement),S=gt(t.placement),g=!S,h=Xn(C),x=Cl(h),m=t.modifiersData.popperOffsets,E=t.rects.reference,O=t.rects.popper,L=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,I=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(m){if(i){var V,k=h==="y"?he:me,j=h==="y"?Oe:Te,N=h==="y"?"height":"width",P=m[h],W=P+w[k],Y=P-w[j],F=f?-O[N]/2:0,G=S===vt?E[N]:O[N],ae=S===vt?-O[N]:-E[N],Ce=t.elements.arrow,pe=f&&Ce?Yn(Ce):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ii(),M=$[k],D=$[j],H=Ct(0,E[N],pe[N]),_=g?E[N]/2-F-H-M-I.mainAxis:G-H-M-I.mainAxis,te=g?-E[N]/2+F+H+D+I.mainAxis:ae+H+D+I.mainAxis,Z=t.elements.arrow&&Mt(t.elements.arrow),le=Z?h==="y"?Z.clientTop||0:Z.clientLeft||0:0,Fe=(V=B==null?void 0:B[h])!=null?V:0,oe=P+_-Fe-le,ve=P+te-Fe,J=Ct(f?on(W,oe):W,P,f?nt(Y,ve):Y);m[h]=J,A[h]=J-P}if(s){var z,Se=h==="x"?he:me,ze=h==="x"?Oe:Te,ee=m[x],Ee=x==="y"?"height":"width",Ae=ee+w[Se],Ie=ee-w[ze],Ge=[he,me].indexOf(C)!==-1,at=(z=B==null?void 0:B[x])!=null?z:0,Qn=Ge?Ae:ee-E[Ee]-O[Ee]-at+I.altAxis,er=Ge?ee+E[Ee]+O[Ee]-at-I.altAxis:Ie,tr=f&&Ge?_c(Qn,ee,er):Ct(f?Qn:Ae,ee,f?er:Ie);m[x]=tr,A[x]=tr-ee}t.modifiersData[r]=A}}var El={name:"preventOverflow",enabled:!0,phase:"main",fn:Sl,requiresIfExists:["offset"]};function kl(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Rl(e){return e===Pe(e)||!ke(e)?Gn(e):kl(e)}function Ol(e){var t=e.getBoundingClientRect(),n=ht(t.width)/e.offsetWidth||1,r=ht(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Tl(e,t,n){n===void 0&&(n=!1);var r=ke(t),o=ke(t)&&Ol(t),i=Xe(t),a=mt(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Ne(t)!=="body"||Jn(i))&&(s=Rl(t)),ke(t)?(c=mt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Zn(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Pl(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function $l(e){var t=Pl(e);return Hc.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Al(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Il(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var co={placement:"bottom",modifiers:[],strategy:"absolute"};function lo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Ml(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?co:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},co,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],y=!1,f={state:l,setOptions:function(C){var S=typeof C=="function"?C(l.options):C;v(),l.options=Object.assign({},i,l.options,S),l.scrollParents={reference:it(s)?St(s):s.contextElement?St(s.contextElement):[],popper:St(c)};var g=$l(Il([].concat(r,l.options.modifiers)));return l.orderedModifiers=g.filter(function(h){return h.enabled}),p(),f.update()},forceUpdate:function(){if(!y){var C=l.elements,S=C.reference,g=C.popper;if(lo(S,g)){l.rects={reference:Tl(S,Mt(g),l.options.strategy==="fixed"),popper:Yn(g)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(I){return l.modifiersData[I.name]=Object.assign({},I.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var x=l.orderedModifiers[h],m=x.fn,E=x.options,O=E===void 0?{}:E,L=x.name;typeof m=="function"&&(l=m({state:l,options:O,name:L,instance:f})||l)}}}},update:Al(function(){return new Promise(function(w){f.forceUpdate(),w(l)})}),destroy:function(){v(),y=!0}};if(!lo(s,c))return f;f.setOptions(u).then(function(w){!y&&u.onFirstUpdate&&u.onFirstUpdate(w)});function p(){l.orderedModifiers.forEach(function(w){var C=w.name,S=w.options,g=S===void 0?{}:S,h=w.effect;if(typeof h=="function"){var x=h({state:l,name:C,instance:f,options:g}),m=function(){};d.push(x||m)}})}function v(){d.forEach(function(w){return w()}),d=[]}return f}}var Ll=[rl,wl,tl,Uc,yl,vl,El,Zc,ml],Dl=Ml({defaultModifiers:Ll}),jl=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,o=R.useContext(pn),i=o.collapsed,a=o.toggled,s=o.transitionDuration,c=R.useRef();return R.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=Dl(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),R.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,a,r,n]),{popperInstance:c.current}},ui=function(e){var t=e.rtl,n=e.level,r=e.collapsed,o=e.disabled,i=e.active;return`
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
  
  `)},Nl=function(e,t){var n=e.className,r=e.component,o=e.children,i=ot(e,["className","component","children"]);if(r){if(typeof r=="string")return R.createElement(r,ye(ye({className:ie(n)},i),{ref:t}),o);var a=r.props,s=a.className,c=ot(a,["className"]);return R.cloneElement(r,ye(ye(ye({className:ie(n,s)},i),c),{ref:t}),o)}else return R.createElement("a",ye({ref:t,className:ie(n)},i),o)},fi=R.forwardRef(Nl),Fl=ce.li(uo||(uo=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},U.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return ui({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Bl=function(e,t){var n,r=e.children,o=e.className,i=e.label,a=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,d=e.defaultOpen,y=e.active,f=y===void 0?!1:y,p=e.disabled,v=p===void 0?!1:p,w=e.rootStyles,C=e.component,S=e.onOpenChange,g=e.onClick,h=e.onKeyUp,x=ot(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),m=R.useContext(rn),E=R.useContext(pn),O=E.collapsed,L=E.rtl,I=E.transitionDuration,B=qn(),A=B.renderExpandIcon,V=B.closeOnClick,k=B.menuItemStyles,j=B.transitionDuration,N=R.useState(!!d),P=N[0],W=N[1],Y=R.useState(!1),F=Y[0],G=Y[1],ae=R.useState(!1),Ce=ae[0],pe=ae[1],$=R.useRef(null),M=R.useRef(null),D=R.useRef(),H=jl({level:m,buttonRef:$,contentRef:M}).popperInstance,_=R.useCallback(function(){var J,z=M.current;if(z){var Se=(J=z==null?void 0:z.querySelector(".".concat(U.subMenuContent," > ul")))===null||J===void 0?void 0:J.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Se,"px"),D.current=setTimeout(function(){z.style.overflow="auto",z.style.height="auto"},j)}},[j]),te=function(){var J,z=M.current;if(z){var Se=(J=z==null?void 0:z.querySelector(".".concat(U.subMenuContent," > ul")))===null||J===void 0?void 0:J.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Se,"px"),z.offsetHeight,z.style.height="0px"}},Z=function(){m===0&&O||(typeof l>"u"?(clearTimeout(Number(D.current)),P?te():_(),S==null||S(!P),W(!P)):S==null||S(!l))};R.useEffect(function(){!(m===0&&O)&&typeof l<"u"&&Ce&&(clearTimeout(Number(D.current)),l?_():te())},[O,_,i,m,S,l]);var le=function(J){g==null||g(J),Z()},Fe=function(J){h==null||h(J),J.key==="Enter"&&Z()},oe=function(J){if(k){var z={level:m,disabled:v,active:f,isSubmenu:!0,open:l??P},Se=k.root,ze=k.button,ee=k.label,Ee=k.icon,Ae=k.prefix,Ie=k.suffix,Ge=k.subMenuContent,at=k.SubMenuExpandIcon;switch(J){case"root":return typeof Se=="function"?Se(z):Se;case"button":return typeof ze=="function"?ze(z):ze;case"label":return typeof ee=="function"?ee(z):ee;case"icon":return typeof Ee=="function"?Ee(z):Ee;case"prefix":return typeof Ae=="function"?Ae(z):Ae;case"suffix":return typeof Ie=="function"?Ie(z):Ie;case"SubMenuExpandIcon":return typeof at=="function"?at(z):at;case"subMenuContent":return typeof Ge=="function"?Ge(z):Ge;default:return}}};R.useEffect(function(){setTimeout(function(){return H==null?void 0:H.update()},I),O&&m===0&&G(!1)},[O,m,L,I,H]),R.useEffect(function(){var J=function(ee){var Ee,Ae,Ie;!F&&(!((Ee=$.current)===null||Ee===void 0)&&Ee.contains(ee))?G(!0):(V&&!(!((Ae=ee.closest(".".concat(U.menuItemRoot)))===null||Ae===void 0)&&Ae.classList.contains(U.subMenuRoot))||!(!((Ie=M.current)===null||Ie===void 0)&&Ie.contains(ee))&&F)&&G(!1)},z=function(ee){J(ee.target)},Se=function(ee){ee.key==="Enter"?J(ee.target):ee.key==="Escape"&&G(!1)},ze=function(){document.removeEventListener("click",z),document.removeEventListener("keyup",Se)};return ze(),O&&m===0&&(document.addEventListener("click",z,!1),document.addEventListener("keyup",Se,!1)),function(){ze()}},[O,m,V,F]),R.useEffect(function(){pe(!0)},[]);var ve=(n={},n[U.active]=f,n[U.disabled]=v,n[U.open]=l??P,n);return R.createElement(Fl,{ref:t,className:ie(U.menuItemRoot,U.subMenuRoot,ve,o),menuItemStyles:oe("root"),level:m,collapsed:O,rtl:L,disabled:v,active:f,buttonStyles:oe("button"),rootStyles:w},R.createElement(fi,ye({"data-testid":"".concat(U.button,"-test-id"),ref:$,title:s,className:ie(U.button,ve),onClick:le,onKeyUp:Fe,component:C,tabIndex:0},x),a&&R.createElement(Jo,{rtl:L,className:ie(U.icon,ve),rootStyles:oe("icon")},a),c&&R.createElement(Qo,{collapsed:O,transitionDuration:I,firstLevel:m===0,className:ie(U.prefix,ve),rtl:L,rootStyles:oe("prefix")},c),R.createElement(Zo,{className:ie(U.label,ve),rootStyles:oe("label")},i),u&&R.createElement(ei,{collapsed:O,transitionDuration:I,firstLevel:m===0,className:ie(U.suffix,ve),rootStyles:oe("suffix")},u),R.createElement(Oc,{rtl:L,className:ie(U.SubMenuExpandIcon,ve),collapsed:O,level:m,rootStyles:oe("SubMenuExpandIcon")},A?A({level:m,disabled:v,active:f,open:l??P}):O&&m===0?R.createElement(Pc,null):R.createElement(Tc,{rtl:L,open:l??P}))),R.createElement(Rc,{ref:M,openWhenCollapsed:F,open:l??P,firstLevel:m===0,collapsed:O,defaultOpen:l&&!Ce||d,className:ie(U.subMenuContent,ve),rootStyles:oe("subMenuContent")},R.createElement(rn.Provider,{value:m+1},r)))};R.forwardRef(Bl);var uo,Wl=ce.li(fo||(fo=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},U.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return ui({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Hl=function(e,t){var n,r=e.children,o=e.icon,i=e.className,a=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,d=l===void 0?!1:l,y=e.component,f=e.rootStyles,p=ot(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),v=R.useContext(rn),w=R.useContext(pn),C=w.collapsed,S=w.rtl,g=w.transitionDuration,h=qn().menuItemStyles,x=function(E){if(h){var O={level:v,disabled:d,active:u,isSubmenu:!1},L=h.root,I=h.button,B=h.label,A=h.icon,V=h.prefix,k=h.suffix;switch(E){case"root":return typeof L=="function"?L(O):L;case"button":return typeof I=="function"?I(O):I;case"label":return typeof B=="function"?B(O):B;case"icon":return typeof A=="function"?A(O):A;case"prefix":return typeof V=="function"?V(O):V;case"suffix":return typeof k=="function"?k(O):k;default:return}}},m=(n={},n[U.active]=u,n[U.disabled]=d,n);return R.createElement(Wl,{ref:t,className:ie(U.menuItemRoot,m,i),menuItemStyles:x("root"),level:v,collapsed:C,rtl:S,disabled:d,active:u,buttonStyles:x("button"),rootStyles:f},R.createElement(fi,ye({className:ie(U.button,m),"data-testid":"".concat(U.button,"-test-id"),component:y,tabIndex:0},p),o&&R.createElement(Jo,{rtl:S,className:ie(U.icon,m),rootStyles:x("icon")},o),a&&R.createElement(Qo,{collapsed:C,transitionDuration:g,firstLevel:v===0,className:ie(U.prefix,m),rtl:S,rootStyles:x("prefix")},a),R.createElement(Zo,{className:ie(U.label,m),rootStyles:x("label")},r),s&&R.createElement(ei,{collapsed:C,transitionDuration:g,firstLevel:v===0,className:ie(U.suffix,m),rootStyles:x("suffix")},s)))},Vl=R.forwardRef(Hl),fo;const zl=X(Sc)`
  /* flex-grow: 1;

  background-color: ${({theme:e})=>e.primaryBgColor}; */
`,Bt=X(Vl)`
  a.${U.button} {
    padding: ${({theme:e})=>e.global.spacing(3,0,3,3)};

    &:hover,
    &:focus,
    &:active,
    &.active {
      background-color: ${({theme:e})=>e.linkActiveBgColor};
      color: ${({theme:e})=>e.linkActiveColor};
    }
  }
`,Ul=({setMobileMenu:e})=>T.jsxs(zl,{children:[T.jsx(Bt,{component:T.jsx(lt,{to:"/",onClick:()=>e(!1)}),children:"Home"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/about",onClick:()=>e(!1)}),children:"About"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/services",onClick:()=>e(!1)}),children:"Services"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/contacts",onClick:()=>e(!1)}),children:"Contacts"})]}),ql=X.footer`
  ${vo}

  color: ${({theme:e})=>e.footerTextColor};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};

  background-color: ${({$isMainLayout:e,theme:t})=>e?t.primaryBgColor:t.footerBgColor};
`,Kl=X(Ci)`
  ${wi}
`,_l=X.div`
  ${an}

  text-align: ${({$isMainLayout:e})=>e&&"center"};
`,di=({$isMainLayout:e})=>T.jsx(ql,{$isMainLayout:e,children:T.jsxs(_l,{$isMainLayout:e,children:["Coded by"," ",T.jsx(Kl,{to:"https://github.com/iberezhnyi",children:"©iberezhnyi"})]})}),Yl=X(xc)`
  &&& {
    z-index: 1;
    border: none;
  }

  .${Q.container} {
    display: flex;
    flex-direction: column;
    z-index: 2;

    background-color: ${({theme:e})=>e.primaryBgColor};

    /* @media (max-width: 767px) {
      padding-top: ${({theme:e,$profile:t})=>t?0:e.global.spacing(12)};
    } */
  }

  .${Q.backdrop} {
    z-index: inherit;

    background-color: ${({theme:e})=>e.global.backdrop.backgroundColor};
    backdrop-filter: ${({theme:e})=>e.global.backdrop.backdropFilter};
  }
`,Xl=X.div`
  flex-grow: 1;
`,Gl=X.div`
  background-color: ${({theme:e})=>e.secondaryBgColor};
  height: ${({theme:e})=>e.global.spacing(14)};
`,Zl=({mobileMenu:e,setIsMobile:t,setMobileMenu:n})=>{const r=Pt(sn);return T.jsxs(Yl,{toggled:e,customBreakPoint:"767px",onBreakPoint:t,onBackdropClick:()=>n(!1),$profile:!!r,children:[!r&&T.jsx(Gl,{}),T.jsxs(Xl,{children:[r&&T.jsx(bs,{}),T.jsx(Ul,{setMobileMenu:n}),T.jsx(Ii,{})]}),r&&T.jsx(di,{})]})},Jl=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(window.matchMedia("(max-width: 767px)").matches),o=Pt(sn),i=()=>t(a=>!a);return b.useEffect(()=>{!n&&t(!1)},[n]),T.jsxs(T.Fragment,{children:[T.jsx(vs,{isMobile:n,handleClick:i,mobileMenu:e}),T.jsxs(Ti,{children:[T.jsx(Zl,{setMobileMenu:t,setIsMobile:r,mobileMenu:e}),T.jsx(Pi,{children:T.jsx(Si,{})})]}),!o&&T.jsx(di,{$isMainLayout:!0})]})},tu=Jl;export{tu as default};
//# sourceMappingURL=index-C4-69obD.js.map
