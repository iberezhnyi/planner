import{p as G,j as T,u as fo,a as Pt,s as di,c as tr,b as po,d as In,r as b,e as pi,R as vi,f as Mn,N as lt,L as hi,g as on,h as mi,i as gi,k as bi,l as yi,m as R,n as xi,o as wi,O as Ci}from"./index-tc6h0H9J.js";import{M as Si,a as Ei,T as ki,b as Ri,s as ct}from"./Button.styled-DiYiRia3.js";const Oi=G.main`
  flex-grow: 1;
`,Ti=({onClick:e,mobileMenu:t})=>T.jsx(Si,{children:T.jsx(Ei,{$mobileMenu:t,onClick:e,children:T.jsx("span",{})})}),Pi=()=>{const e=fo();return[Pt(di),r=>e(r==="light"?tr("dark"):tr("light"))]},Ai=()=>{const[e,t]=Pi();return T.jsx(ki,{onClick:()=>t(e),children:T.jsx(Ri,{children:T.jsx("use",{href:`${ct}#${e==="light"?"moon-stars":"sun"}`})})})},$i=G.header`
  ${po}
  background-color: ${({theme:e})=>e.headerBgColor};
`,Ii=G.div`
  ${In}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function Ye(e){return vo(e)?(e.nodeName||"").toLowerCase():"#document"}function xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ve(e){var t;return(t=(vo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vo(e){return e instanceof Node||e instanceof xe(e).Node}function ne(e){return e instanceof Element||e instanceof xe(e).Element}function se(e){return e instanceof HTMLElement||e instanceof xe(e).HTMLElement}function Cn(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof xe(e).ShadowRoot}function At(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Re(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Mi(e){return["table","td","th"].includes(Ye(e))}function an(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ln(e){const t=Dn(),n=Re(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Li(e){let t=We(e);for(;se(t)&&!Ke(t);){if(an(t))return null;if(Ln(t))return t;t=We(t)}return null}function Dn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ke(e){return["html","body","#document"].includes(Ye(e))}function Re(e){return xe(e).getComputedStyle(e)}function sn(e){return ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function We(e){if(Ye(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Cn(e)&&e.host||Ve(e);return Cn(t)?t.host:t}function ho(e){const t=We(e);return Ke(t)?e.ownerDocument?e.ownerDocument.body:e.body:se(t)&&At(t)?t:ho(t)}function qe(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=ho(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=xe(o);return i?t.concat(a,a.visualViewport||[],At(o)?o:[],a.frameElement&&n?qe(a.frameElement):[]):t.concat(o,qe(o,[],n))}function Je(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function be(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Cn(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Di(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function mo(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Ni(e){return e.mozInputSource===0&&e.isTrusted?!0:Sn()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function ji(e){return Bi()?!1:!Sn()&&e.width===0&&e.height===0||Sn()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Fi(){return/apple/i.test(navigator.vendor)}function Sn(){const e=/android/i;return e.test(Di())||e.test(mo())}function Bi(){return mo().includes("jsdom/")}function nr(e,t){return["mouse","pen"].includes(e)}function Wi(e){return"nativeEvent"in e}function Hi(e){return e.matches("html,body")}function Ae(e){return(e==null?void 0:e.ownerDocument)||document}function pn(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function et(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Vi="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function go(e){return se(e)&&e.matches(Vi)}function vn(e){e.preventDefault(),e.stopPropagation()}function zi(e){return e?e.getAttribute("role")==="combobox"&&go(e):!1}const En=Math.min,ut=Math.max,Kt=Math.round,Lt=Math.floor,_e=e=>({x:e,y:e});function bo(e){return e.split("-")[0]}function Ui(e){return e.split("-")[1]}function qi(e){return e==="x"?"y":"x"}function Ki(e){return e==="y"?"height":"width"}function yo(e){return["top","bottom"].includes(bo(e))?"y":"x"}function _i(e){return qi(yo(e))}function xo(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Yi=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],_t=Yi.join(","),wo=typeof Element>"u",dt=wo?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Yt=!wo&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Xt=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),i=o===""||o==="true",a=i||n&&t&&e(t.parentNode);return a},Xi=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},Gi=function(t,n,r){if(Xt(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(_t));return n&&dt.call(t,_t)&&o.unshift(t),o=o.filter(r),o},Zi=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Xt(a,!1))if(a.tagName==="SLOT"){var s=a.assignedElements(),c=s.length?s:a.children,u=e(c,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:a,candidates:u})}else{var l=dt.call(a,_t);l&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),y=!Xt(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(d&&y){var f=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:a,candidates:f})}else i.unshift.apply(i,a.children)}}return o},Co=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},So=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Xi(t))&&!Co(t)?0:t.tabIndex},Ji=function(t,n){var r=So(t);return r<0&&n&&!Co(t)?0:r},Qi=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},Eo=function(t){return t.tagName==="INPUT"},ea=function(t){return Eo(t)&&t.type==="hidden"},ta=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},na=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},ra=function(t){if(!t.name)return!0;var n=t.form||Yt(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=na(o,t.form);return!i||i===t},oa=function(t){return Eo(t)&&t.type==="radio"},ia=function(t){return oa(t)&&!ra(t)},aa=function(t){var n,r=t&&Yt(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,s,c;for(i=!!((a=o)!==null&&a!==void 0&&(s=a.ownerDocument)!==null&&s!==void 0&&s.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,l,d;r=Yt(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((l=o)!==null&&l!==void 0&&(d=l.ownerDocument)!==null&&d!==void 0&&d.contains(o))}}return i},rr=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},sa=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=dt.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(dt.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var s=t;t;){var c=t.parentElement,u=Yt(t);if(c&&!c.shadowRoot&&o(c)===!0)return rr(t);t.assignedSlot?t=t.assignedSlot:!c&&u!==t.ownerDocument?t=u.host:t=c}t=s}if(aa(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return rr(t);return!1},ca=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return dt.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},la=function(t,n){return!(n.disabled||Xt(n)||ea(n)||sa(n,t)||ta(n)||ca(n))},kn=function(t,n){return!(ia(n)||So(n)<0||!la(t,n))},ua=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},fa=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scopeParent,s=a?o.scopeParent:o,c=Ji(s,a),u=a?e(o.candidates):s;c===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:c,item:o,isScope:a,content:u})}),r.sort(Qi).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},Nn=function(t,n){n=n||{};var r;return n.getShadowRoot?r=Zi([t],n.includeContainer,{filter:kn.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:ua}):r=Gi(t,n.includeContainer,kn.bind(null,n)),fa(r)},da=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return dt.call(t,_t)===!1?!1:kn(n,t)};function or(e,t,n){let{reference:r,floating:o}=e;const i=yo(t),a=_i(t),s=Ki(a),c=bo(t),u=i==="y",l=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,y=r[s]/2-o[s]/2;let f;switch(c){case"top":f={x:l,y:r.y-o.height};break;case"bottom":f={x:l,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Ui(t)){case"start":f[a]-=y*(n&&u?-1:1);break;case"end":f[a]+=y*(n&&u?-1:1);break}return f}const pa=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:l,y:d}=or(u,r,c),y=r,f={},p=0;for(let v=0;v<s.length;v++){const{name:w,fn:C}=s[v],{x:S,y:g,data:h,reset:x}=await C({x:l,y:d,initialPlacement:r,placement:y,strategy:o,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});l=S??l,d=g??d,f={...f,[w]:{...f[w],...h}},x&&p<=50&&(p++,typeof x=="object"&&(x.placement&&(y=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:l,y:d}=or(u,y,c)),v=-1)}return{x:l,y:d,placement:y,strategy:o,middlewareData:f}};function ko(e){const t=Re(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=se(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=Kt(n)!==i||Kt(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function jn(e){return ne(e)?e:e.contextElement}function ft(e){const t=jn(e);if(!se(t))return _e(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=ko(t);let a=(i?Kt(n.width):n.width)/r,s=(i?Kt(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const va=_e(0);function Ro(e){const t=xe(e);return!Dn()||!t.visualViewport?va:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ha(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==xe(e)?!1:t}function rt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=jn(e);let a=_e(1);t&&(r?ne(r)&&(a=ft(r)):a=ft(e));const s=ha(i,n,r)?Ro(i):_e(0);let c=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,l=o.width/a.x,d=o.height/a.y;if(i){const y=xe(i),f=r&&ne(r)?xe(r):r;let p=y,v=p.frameElement;for(;v&&r&&f!==p;){const w=ft(v),C=v.getBoundingClientRect(),S=Re(v),g=C.left+(v.clientLeft+parseFloat(S.paddingLeft))*w.x,h=C.top+(v.clientTop+parseFloat(S.paddingTop))*w.y;c*=w.x,u*=w.y,l*=w.x,d*=w.y,c+=g,u+=h,p=xe(v),v=p.frameElement}}return xo({width:l,height:d,x:c,y:u})}function ma(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=Ve(r),s=t?an(t.floating):!1;if(r===a||s&&i)return n;let c={scrollLeft:0,scrollTop:0},u=_e(1);const l=_e(0),d=se(r);if((d||!d&&!i)&&((Ye(r)!=="body"||At(a))&&(c=sn(r)),se(r))){const y=rt(r);u=ft(r),l.x=y.x+r.clientLeft,l.y=y.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+l.x,y:n.y*u.y-c.scrollTop*u.y+l.y}}function ga(e){return Array.from(e.getClientRects())}function Oo(e){return rt(Ve(e)).left+sn(e).scrollLeft}function ba(e){const t=Ve(e),n=sn(e),r=e.ownerDocument.body,o=ut(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ut(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Oo(e);const s=-n.scrollTop;return Re(r).direction==="rtl"&&(a+=ut(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function ya(e,t){const n=xe(e),r=Ve(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;const u=Dn();(!u||u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}function xa(e,t){const n=rt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=se(e)?ft(e):_e(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:a,height:s,x:c,y:u}}function ir(e,t,n){let r;if(t==="viewport")r=ya(e,n);else if(t==="document")r=ba(Ve(e));else if(ne(t))r=xa(t,n);else{const o=Ro(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return xo(r)}function To(e,t){const n=We(e);return n===t||!ne(n)||Ke(n)?!1:Re(n).position==="fixed"||To(n,t)}function wa(e,t){const n=t.get(e);if(n)return n;let r=qe(e,[],!1).filter(s=>ne(s)&&Ye(s)!=="body"),o=null;const i=Re(e).position==="fixed";let a=i?We(e):e;for(;ne(a)&&!Ke(a);){const s=Re(a),c=Ln(a);!c&&s.position==="fixed"&&(o=null),(i?!c&&!o:!c&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||At(a)&&!c&&To(e,a))?r=r.filter(l=>l!==a):o=s,a=We(a)}return t.set(e,r),r}function Ca(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?an(t)?[]:wa(t,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,l)=>{const d=ir(t,l,o);return u.top=ut(d.top,u.top),u.right=En(d.right,u.right),u.bottom=En(d.bottom,u.bottom),u.left=ut(d.left,u.left),u},ir(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Sa(e){const{width:t,height:n}=ko(e);return{width:t,height:n}}function Ea(e,t,n){const r=se(t),o=Ve(t),i=n==="fixed",a=rt(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const c=_e(0);if(r||!r&&!i)if((Ye(t)!=="body"||At(o))&&(s=sn(t)),r){const d=rt(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=Oo(o));const u=a.left+s.scrollLeft-c.x,l=a.top+s.scrollTop-c.y;return{x:u,y:l,width:a.width,height:a.height}}function hn(e){return Re(e).position==="static"}function ar(e,t){return!se(e)||Re(e).position==="fixed"?null:t?t(e):e.offsetParent}function Po(e,t){const n=xe(e);if(an(e))return n;if(!se(e)){let o=We(e);for(;o&&!Ke(o);){if(ne(o)&&!hn(o))return o;o=We(o)}return n}let r=ar(e,t);for(;r&&Mi(r)&&hn(r);)r=ar(r,t);return r&&Ke(r)&&hn(r)&&!Ln(r)?n:r||Li(e)||n}const ka=async function(e){const t=this.getOffsetParent||Po,n=this.getDimensions,r=await n(e.floating);return{reference:Ea(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ra(e){return Re(e).direction==="rtl"}const Oa={convertOffsetParentRelativeRectToViewportRelativeRect:ma,getDocumentElement:Ve,getClippingRect:Ca,getOffsetParent:Po,getElementRects:ka,getClientRects:ga,getDimensions:Sa,getScale:ft,isElement:ne,isRTL:Ra};function Ta(e,t){let n=null,r;const o=Ve(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();const{left:u,top:l,width:d,height:y}=e.getBoundingClientRect();if(s||t(),!d||!y)return;const f=Lt(l),p=Lt(o.clientWidth-(u+d)),v=Lt(o.clientHeight-(l+y)),w=Lt(u),S={rootMargin:-f+"px "+-p+"px "+-v+"px "+-w+"px",threshold:ut(0,En(1,c))||1};let g=!0;function h(x){const m=x[0].intersectionRatio;if(m!==c){if(!g)return a();m?a(!1,m):r=setTimeout(()=>{a(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(h,{...S,root:o.ownerDocument})}catch{n=new IntersectionObserver(h,S)}n.observe(e)}return a(!0),i}function Pa(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=jn(e),l=o||i?[...u?qe(u):[],...qe(t)]:[];l.forEach(C=>{o&&C.addEventListener("scroll",n,{passive:!0}),i&&C.addEventListener("resize",n)});const d=u&&s?Ta(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(C=>{let[S]=C;S&&S.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var g;(g=f)==null||g.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let p,v=c?rt(e):null;c&&w();function w(){const C=rt(e);v&&(C.x!==v.x||C.y!==v.y||C.width!==v.width||C.height!==v.height)&&n(),v=C,p=requestAnimationFrame(w)}return n(),()=>{var C;l.forEach(S=>{o&&S.removeEventListener("scroll",n),i&&S.removeEventListener("resize",n)}),d==null||d(),(C=f)==null||C.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Aa=(e,t,n)=>{const r=new Map,o={platform:Oa,...n},i={...o.platform,_c:r};return pa(e,t,{...o,platform:i})};var Wt=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Gt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Gt(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Gt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Ao(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function sr(e,t){const n=Ao(e);return Math.round(t*n)/n}function cr(e){const t=b.useRef(e);return Wt(()=>{t.current=e}),t}function $a(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[l,d]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[y,f]=b.useState(r);Gt(y,r)||f(r);const[p,v]=b.useState(null),[w,C]=b.useState(null),S=b.useCallback(P=>{P!==m.current&&(m.current=P,v(P))},[]),g=b.useCallback(P=>{P!==E.current&&(E.current=P,C(P))},[]),h=i||p,x=a||w,m=b.useRef(null),E=b.useRef(null),O=b.useRef(l),L=c!=null,I=cr(c),B=cr(o),$=b.useCallback(()=>{if(!m.current||!E.current)return;const P={placement:t,strategy:n,middleware:y};B.current&&(P.platform=B.current),Aa(m.current,E.current,P).then(W=>{const Y={...W,isPositioned:!0};V.current&&!Gt(O.current,Y)&&(O.current=Y,pi.flushSync(()=>{d(Y)}))})},[y,t,n,B]);Wt(()=>{u===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d(P=>({...P,isPositioned:!1})))},[u]);const V=b.useRef(!1);Wt(()=>(V.current=!0,()=>{V.current=!1}),[]),Wt(()=>{if(h&&(m.current=h),x&&(E.current=x),h&&x){if(I.current)return I.current(h,x,$);$()}},[h,x,$,I,L]);const k=b.useMemo(()=>({reference:m,floating:E,setReference:S,setFloating:g}),[S,g]),N=b.useMemo(()=>({reference:h,floating:x}),[h,x]),j=b.useMemo(()=>{const P={position:n,left:0,top:0};if(!N.floating)return P;const W=sr(N.floating,l.x),Y=sr(N.floating,l.y);return s?{...P,transform:"translate("+W+"px, "+Y+"px)",...Ao(N.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:Y}},[n,s,N.floating,l.x,l.y]);return b.useMemo(()=>({...l,update:$,refs:k,elements:N,floatingStyles:j}),[l,$,k,N,j])}const $o={...vi},Ia=$o.useInsertionEffect,Ma=Ia||(e=>e());function Ue(e){const t=b.useRef(()=>{});return Ma(()=>{t.current=e}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}let lr=0;function Ze(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(lr);const i=()=>e==null?void 0:e.focus({preventScroll:n});o?i():lr=requestAnimationFrame(i)}var Be=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Zt(){return Zt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zt.apply(this,arguments)}let ur=!1,La=0;const fr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+La++;function Da(){const[e,t]=b.useState(()=>ur?fr():void 0);return Be(()=>{e==null&&t(fr())},[]),b.useEffect(()=>{ur=!0},[]),e}const Na=$o.useId,Fn=Na||Da;function ja(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const Fa=b.createContext(null),Ba=b.createContext(null),Io=()=>{var e;return((e=b.useContext(Fa))==null?void 0:e.id)||null},Bn=()=>b.useContext(Ba);function Jt(e){return"data-floating-ui-"+e}function mn(e){const t=b.useRef(e);return Be(()=>{t.current=e}),t}function Wa(e,t){var n;let r=[],o=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;o;){const i=e.find(a=>a.id===o);o=i==null?void 0:i.parentId,i&&(r=r.concat(i))}return r}function wt(e,t){let n=e.filter(o=>{var i;return o.parentId===t&&((i=o.context)==null?void 0:i.open)}),r=n;for(;r.length;)r=e.filter(o=>{var i;return(i=r)==null?void 0:i.some(a=>{var s;return o.parentId===a.id&&((s=o.context)==null?void 0:s.open)})}),n=n.concat(r);return n}let st=new WeakMap,Dt=new WeakSet,Nt={},gn=0;const Ha=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Mo=e=>e&&(e.host||Mo(e.parentNode)),Va=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=Mo(n);return e.contains(r)?r:null}).filter(n=>n!=null);function za(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Va(t,e),s=new Set,c=new Set(a),u=[];Nt[o]||(Nt[o]=new WeakMap);const l=Nt[o];a.forEach(d),y(t),s.clear();function d(f){!f||s.has(f)||(s.add(f),f.parentNode&&d(f.parentNode))}function y(f){!f||c.has(f)||[].forEach.call(f.children,p=>{if(Ye(p)!=="script")if(s.has(p))y(p);else{const v=i?p.getAttribute(i):null,w=v!==null&&v!=="false",C=(st.get(p)||0)+1,S=(l.get(p)||0)+1;st.set(p,C),l.set(p,S),u.push(p),C===1&&w&&Dt.add(p),S===1&&p.setAttribute(o,""),!w&&i&&p.setAttribute(i,"true")}})}return gn++,()=>{u.forEach(f=>{const p=(st.get(f)||0)-1,v=(l.get(f)||0)-1;st.set(f,p),l.set(f,v),p||(!Dt.has(f)&&i&&f.removeAttribute(i),Dt.delete(f)),v||f.removeAttribute(o)}),gn--,gn||(st=new WeakMap,st=new WeakMap,Dt=new WeakSet,Nt={})}}function dr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=Ae(e[0]).body;return za(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const Qt=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Lo(e,t){const n=Nn(e,Qt());t==="prev"&&n.reverse();const r=n.indexOf(Je(Ae(e)));return n.slice(r+1)[0]}function Ua(){return Lo(document.body,"next")}function qa(){return Lo(document.body,"prev")}function pr(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!be(n,r)}const Do={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Ka;function vr(e){e.key==="Tab"&&(e.target,clearTimeout(Ka))}const hr=b.forwardRef(function(t,n){const[r,o]=b.useState();Be(()=>(Fi()&&o("button"),document.addEventListener("keydown",vr),()=>{document.removeEventListener("keydown",vr)}),[]);const i={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[Jt("focus-guard")]:"",style:Do};return b.createElement("span",Zt({},t,i))}),_a=b.createContext(null),Ya=()=>b.useContext(_a),mr=20;let Qe=[];function bn(e){Qe=Qe.filter(n=>n.isConnected);let t=e;if(!(!t||Ye(t)==="body")){if(!da(t,Qt())){const n=Nn(t,Qt())[0];n&&(t=n)}Qe.push(t),Qe.length>mr&&(Qe=Qe.slice(-mr))}}function gr(){return Qe.slice().reverse().find(e=>e.isConnected)}const Xa=b.forwardRef(function(t,n){return b.createElement("button",Zt({},t,{type:"button",ref:n,tabIndex:-1,style:Do}))});function Ga(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:a=0,returnFocus:s=!0,restoreFocus:c=!1,modal:u=!0,visuallyHiddenDismiss:l=!1,closeOnFocusOut:d=!0}=e,{open:y,refs:f,nodeId:p,onOpenChange:v,events:w,dataRef:C,floatingId:S,elements:{domReference:g,floating:h}}=t,x=typeof a=="number"&&a<0,m=zi(g)&&x,E=Ha()?i:!0,O=mn(o),L=mn(a),I=mn(s),B=Bn(),$=Ya(),V=b.useRef(null),k=b.useRef(null),N=b.useRef(!1),j=b.useRef(!1),P=b.useRef(-1),W=$!=null,Y=h==null?void 0:h.firstElementChild,F=(Y==null?void 0:Y.id)===S?Y:h,X=Ue(function(A){return A===void 0&&(A=F),A?Nn(A,Qt()):[]}),ae=Ue(A=>{const M=X(A);return O.current.map(D=>g&&D==="reference"?g:F&&D==="floating"?F:M).filter(Boolean).flat()});b.useEffect(()=>{if(r||!u)return;function A(D){if(D.key==="Tab"){be(F,Je(Ae(F)))&&X().length===0&&!m&&vn(D);const H=ae(),_=et(D);O.current[0]==="reference"&&_===g&&(vn(D),D.shiftKey?Ze(H[H.length-1]):Ze(H[1])),O.current[1]==="floating"&&_===F&&D.shiftKey&&(vn(D),Ze(H[0]))}}const M=Ae(F);return M.addEventListener("keydown",A),()=>{M.removeEventListener("keydown",A)}},[r,g,F,u,O,m,X,ae]),b.useEffect(()=>{if(r||!h)return;function A(M){const D=et(M),_=X().indexOf(D);_!==-1&&(P.current=_)}return h.addEventListener("focusin",A),()=>{h.removeEventListener("focusin",A)}},[r,h,X]),b.useEffect(()=>{if(r||!d)return;function A(){j.current=!0,setTimeout(()=>{j.current=!1})}function M(D){const H=D.relatedTarget;queueMicrotask(()=>{const _=!(be(g,H)||be(h,H)||be(H,h)||be($==null?void 0:$.portalNode,H)||H!=null&&H.hasAttribute(Jt("focus-guard"))||B&&(wt(B.nodesRef.current,p).find(te=>{var Z,le;return be((Z=te.context)==null?void 0:Z.elements.floating,H)||be((le=te.context)==null?void 0:le.elements.domReference,H)})||Wa(B.nodesRef.current,p).find(te=>{var Z,le;return((Z=te.context)==null?void 0:Z.elements.floating)===H||((le=te.context)==null?void 0:le.elements.domReference)===H})));if(c&&_&&Je(Ae(F))===Ae(F).body){se(F)&&(F==null||F.focus());const te=P.current,Z=X(),le=Z[te]||Z[Z.length-1]||F;se(le)&&le.focus()}(m||!u)&&H&&_&&!j.current&&H!==gr()&&(N.current=!0,v(!1,D))})}if(h&&se(g))return g.addEventListener("focusout",M),g.addEventListener("pointerdown",A),h.addEventListener("focusout",M),()=>{g.removeEventListener("focusout",M),g.removeEventListener("pointerdown",A),h.removeEventListener("focusout",M)}},[r,g,h,F,u,p,B,$,v,d,c,X,m]),b.useEffect(()=>{var A;if(r)return;const M=Array.from(($==null||(A=$.portalNode)==null?void 0:A.querySelectorAll("["+Jt("portal")+"]"))||[]);if(h){const D=[h,...M,V.current,k.current,O.current.includes("reference")||m?g:null].filter(_=>_!=null),H=u||m?dr(D,E,!E):dr(D);return()=>{H()}}},[r,g,h,u,O,$,m,E]),Be(()=>{if(r||!se(F))return;const A=Ae(F),M=Je(A);queueMicrotask(()=>{const D=ae(F),H=L.current,_=(typeof H=="number"?D[H]:H.current)||F,te=be(F,M);!x&&!te&&y&&Ze(_,{preventScroll:_===F})})},[r,y,F,x,ae,L]),Be(()=>{if(r||!F)return;let A=!1;const M=Ae(F),D=Je(M);let _=C.current.openEvent;bn(D);function te(Z){let{open:le,reason:Fe,event:oe,nested:ve}=Z;le&&(_=oe),Fe==="escape-key"&&f.domReference.current&&bn(f.domReference.current),Fe==="hover"&&oe.type==="mouseleave"&&(N.current=!0),Fe==="outside-press"&&(ve?(N.current=!1,A=!0):N.current=!(Ni(oe)||ji(oe)))}return w.on("openchange",te),()=>{w.off("openchange",te);const Z=Je(M),le=be(h,Z)||B&&wt(B.nodesRef.current,p).some(ve=>{var J;return be((J=ve.context)==null?void 0:J.elements.floating,Z)});(le||_&&["click","mousedown"].includes(_.type))&&f.domReference.current&&bn(f.domReference.current);const oe=gr();I.current&&!N.current&&se(oe)&&(!(oe!==Z&&Z!==M.body)||le)&&Ze(oe,{cancelPrevious:!1,preventScroll:A})}},[r,h,F,I,C,f,w,B,p]),Be(()=>{if(!r&&$)return $.setFocusManagerState({modal:u,closeOnFocusOut:d,open:y,onOpenChange:v,refs:f}),()=>{$.setFocusManagerState(null)}},[r,$,u,y,v,f,d]),Be(()=>{if(r||!F||typeof MutationObserver!="function"||x)return;const A=()=>{const D=F.getAttribute("tabindex"),H=X(),_=Je(Ae(h)),te=H.indexOf(_);te!==-1&&(P.current=te),O.current.includes("floating")||_!==f.domReference.current&&H.length===0?D!=="0"&&F.setAttribute("tabindex","0"):D!=="-1"&&F.setAttribute("tabindex","-1")};A();const M=new MutationObserver(A);return M.observe(F,{childList:!0,subtree:!0,attributes:!0}),()=>{M.disconnect()}},[r,h,F,f,O,X,x]);function Ce(A){return r||!l||!u?null:b.createElement(Xa,{ref:A==="start"?V:k,onClick:M=>v(!1,M.nativeEvent)},typeof l=="string"?l:"Dismiss")}const pe=!r&&E&&(u?!m:!0)&&(W||u);return b.createElement(b.Fragment,null,pe&&b.createElement(hr,{"data-type":"inside",ref:$==null?void 0:$.beforeInsideRef,onFocus:A=>{if(u){const D=ae();Ze(o[0]==="reference"?D[0]:D[D.length-1])}else if($!=null&&$.preserveTabOrder&&$.portalNode)if(N.current=!1,pr(A,$.portalNode)){const D=Ua()||g;D==null||D.focus()}else{var M;(M=$.beforeOutsideRef.current)==null||M.focus()}}}),!m&&Ce("start"),n,Ce("end"),pe&&b.createElement(hr,{"data-type":"inside",ref:$==null?void 0:$.afterInsideRef,onFocus:A=>{if(u)Ze(ae()[0]);else if($!=null&&$.preserveTabOrder&&$.portalNode)if(d&&(N.current=!0),pr(A,$.portalNode)){const D=qa()||g;D==null||D.focus()}else{var M;(M=$.afterOutsideRef.current)==null||M.focus()}}}))}function br(e){return se(e.target)&&e.target.tagName==="BUTTON"}function yr(e){return go(e)}function Za(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:l=!0}=t,d=b.useRef(),y=b.useRef(!1),f=b.useMemo(()=>({onPointerDown(p){d.current=p.pointerType},onMouseDown(p){const v=d.current;p.button===0&&s!=="click"&&(nr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?r(!1,p.nativeEvent,"click"):(p.preventDefault(),r(!0,p.nativeEvent,"click"))))},onClick(p){const v=d.current;if(s==="mousedown"&&d.current){d.current=void 0;return}nr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="click")?r(!1,p.nativeEvent,"click"):r(!0,p.nativeEvent,"click"))},onKeyDown(p){d.current=void 0,!(p.defaultPrevented||!l||br(p))&&(p.key===" "&&!yr(i)&&(p.preventDefault(),y.current=!0),p.key==="Enter"&&r(!(n&&c),p.nativeEvent,"click"))},onKeyUp(p){p.defaultPrevented||!l||br(p)||yr(i)||p.key===" "&&y.current&&(y.current=!1,r(!(n&&c),p.nativeEvent,"click"))}}),[o,i,s,u,l,r,n,c]);return b.useMemo(()=>a?{reference:f}:{},[a,f])}const Ja={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Qa={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},xr=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function es(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:i}=e,{enabled:a=!0,escapeKey:s=!0,outsidePress:c=!0,outsidePressEvent:u="pointerdown",referencePress:l=!1,referencePressEvent:d="pointerdown",ancestorScroll:y=!1,bubbles:f,capture:p}=t,v=Bn(),w=Ue(typeof c=="function"?c:()=>!1),C=typeof c=="function"?w:c,S=b.useRef(!1),g=b.useRef(!1),{escapeKey:h,outsidePress:x}=xr(f),{escapeKey:m,outsidePress:E}=xr(p),O=Ue(k=>{var N;if(!n||!a||!s||k.key!=="Escape")return;const j=(N=i.current.floatingContext)==null?void 0:N.nodeId,P=v?wt(v.nodesRef.current,j):[];if(!h&&(k.stopPropagation(),P.length>0)){let W=!0;if(P.forEach(Y=>{var F;if((F=Y.context)!=null&&F.open&&!Y.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}r(!1,Wi(k)?k.nativeEvent:k,"escape-key")}),L=Ue(k=>{var N;const j=()=>{var P;O(k),(P=et(k))==null||P.removeEventListener("keydown",j)};(N=et(k))==null||N.addEventListener("keydown",j)}),I=Ue(k=>{var N;const j=S.current;S.current=!1;const P=g.current;if(g.current=!1,u==="click"&&P||j||typeof C=="function"&&!C(k))return;const W=et(k),Y="["+Jt("inert")+"]",F=Ae(o.floating).querySelectorAll(Y);let X=ne(W)?W:null;for(;X&&!Ke(X);){const A=We(X);if(Ke(A)||!ne(A))break;X=A}if(F.length&&ne(W)&&!Hi(W)&&!be(W,o.floating)&&Array.from(F).every(A=>!be(X,A)))return;if(se(W)&&V){const A=W.clientWidth>0&&W.scrollWidth>W.clientWidth,M=W.clientHeight>0&&W.scrollHeight>W.clientHeight;let D=M&&k.offsetX>W.clientWidth;if(M&&Re(W).direction==="rtl"&&(D=k.offsetX<=W.offsetWidth-W.clientWidth),D||A&&k.offsetY>W.clientHeight)return}const ae=(N=i.current.floatingContext)==null?void 0:N.nodeId,Ce=v&&wt(v.nodesRef.current,ae).some(A=>{var M;return pn(k,(M=A.context)==null?void 0:M.elements.floating)});if(pn(k,o.floating)||pn(k,o.domReference)||Ce)return;const pe=v?wt(v.nodesRef.current,ae):[];if(pe.length>0){let A=!0;if(pe.forEach(M=>{var D;if((D=M.context)!=null&&D.open&&!M.context.dataRef.current.__outsidePressBubbles){A=!1;return}}),!A)return}r(!1,k,"outside-press")}),B=Ue(k=>{var N;const j=()=>{var P;I(k),(P=et(k))==null||P.removeEventListener(u,j)};(N=et(k))==null||N.addEventListener(u,j)});b.useEffect(()=>{if(!n||!a)return;i.current.__escapeKeyBubbles=h,i.current.__outsidePressBubbles=x;function k(P){r(!1,P,"ancestor-scroll")}const N=Ae(o.floating);s&&N.addEventListener("keydown",m?L:O,m),C&&N.addEventListener(u,E?B:I,E);let j=[];return y&&(ne(o.domReference)&&(j=qe(o.domReference)),ne(o.floating)&&(j=j.concat(qe(o.floating))),!ne(o.reference)&&o.reference&&o.reference.contextElement&&(j=j.concat(qe(o.reference.contextElement)))),j=j.filter(P=>{var W;return P!==((W=N.defaultView)==null?void 0:W.visualViewport)}),j.forEach(P=>{P.addEventListener("scroll",k,{passive:!0})}),()=>{s&&N.removeEventListener("keydown",m?L:O,m),C&&N.removeEventListener(u,E?B:I,E),j.forEach(P=>{P.removeEventListener("scroll",k)})}},[i,o,s,C,u,n,r,y,a,h,x,O,m,L,I,E,B]),b.useEffect(()=>{S.current=!1},[C,u]);const $=b.useMemo(()=>({onKeyDown:O,[Ja[d]]:k=>{l&&r(!1,k.nativeEvent,"reference-press")}}),[O,r,l,d]),V=b.useMemo(()=>({onKeyDown:O,onMouseDown(){g.current=!0},onMouseUp(){g.current=!0},[Qa[u]]:()=>{S.current=!0}}),[O,u]);return b.useMemo(()=>a?{reference:$,floating:V}:{},[a,$,V])}function ts(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Fn(),i=b.useRef({}),[a]=b.useState(()=>ja()),s=Io()!=null,[c,u]=b.useState(r.reference),l=Ue((f,p,v)=>{i.current.openEvent=f?p:void 0,a.emit("openchange",{open:f,event:p,reason:v,nested:s}),n==null||n(f,p,v)}),d=b.useMemo(()=>({setPositionReference:u}),[]),y=b.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return b.useMemo(()=>({dataRef:i,open:t,onOpenChange:l,elements:y,events:a,floatingId:o,refs:d}),[t,l,y,a,o,d])}function ns(e){e===void 0&&(e={});const{nodeId:t}=e,n=ts({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[i,a]=b.useState(null),[s,c]=b.useState(null),l=(o==null?void 0:o.reference)||i,d=b.useRef(null),y=Bn();Be(()=>{l&&(d.current=l)},[l]);const f=$a({...e,elements:{...o,...s&&{reference:s}}}),p=b.useCallback(g=>{const h=ne(g)?{getBoundingClientRect:()=>g.getBoundingClientRect(),contextElement:g}:g;c(h),f.refs.setReference(h)},[f.refs]),v=b.useCallback(g=>{(ne(g)||g===null)&&(d.current=g,a(g)),(ne(f.refs.reference.current)||f.refs.reference.current===null||g!==null&&!ne(g))&&f.refs.setReference(g)},[f.refs]),w=b.useMemo(()=>({...f.refs,setReference:v,setPositionReference:p,domReference:d}),[f.refs,v,p]),C=b.useMemo(()=>({...f.elements,domReference:l}),[f.elements,l]),S=b.useMemo(()=>({...f,...r,refs:w,elements:C,nodeId:t}),[f,w,C,t,r]);return Be(()=>{r.dataRef.current.floatingContext=S;const g=y==null?void 0:y.nodesRef.current.find(h=>h.id===t);g&&(g.context=S)}),b.useMemo(()=>({...f,context:S,refs:w,elements:C}),[f,w,C,S])}const wr="active",Cr="selected";function yn(e,t,n){const r=new Map,o=n==="item";let i=e;if(o&&e){const{[wr]:a,[Cr]:s,...c}=e;i=c}return{...n==="floating"&&{tabIndex:-1},...i,...t.map(a=>{const s=a?a[n]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(c=>{let[u,l]=c;if(!(o&&[wr,Cr].includes(u)))if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof l=="function"){var d;(d=r.get(u))==null||d.push(l),a[u]=function(){for(var y,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(y=r.get(u))==null?void 0:y.map(w=>w(...p)).find(w=>w!==void 0)}}}else a[u]=l}),a),{})}}function rs(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),n=e.map(s=>s==null?void 0:s.floating),r=e.map(s=>s==null?void 0:s.item),o=b.useCallback(s=>yn(s,e,"reference"),t),i=b.useCallback(s=>yn(s,e,"floating"),n),a=b.useCallback(s=>yn(s,e,"item"),r);return b.useMemo(()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:a}),[o,i,a])}const os=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function is(e,t){var n;t===void 0&&(t={});const{open:r,floatingId:o}=e,{enabled:i=!0,role:a="dialog"}=t,s=(n=os.get(a))!=null?n:a,c=Fn(),l=Io()!=null,d=b.useMemo(()=>s==="tooltip"||a==="label"?{["aria-"+(a==="label"?"labelledby":"describedby")]:r?o:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":r?o:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:c},...s==="menu"&&l&&{role:"menuitem"},...a==="select"&&{"aria-autocomplete":"none"},...a==="combobox"&&{"aria-autocomplete":"list"}},[s,o,l,r,c,a]),y=b.useMemo(()=>{const p={id:o,...s&&{role:s}};return s==="tooltip"||a==="label"?p:{...p,...s==="menu"&&{"aria-labelledby":c}}},[s,o,c,a]),f=b.useCallback(p=>{let{active:v,selected:w}=p;const C={role:"option",...v&&{id:o+"-option"}};switch(a){case"select":return{...C,"aria-selected":v&&w};case"combobox":return{...C,...v&&{"aria-selected":!0}}}return{}},[o,a]);return b.useMemo(()=>i?{reference:d,floating:y,item:f}:{},[i,d,y,f])}const Sr=G.button`
  ${Mn}

  color: ${({theme:e})=>e.global.text.color.white};

  &.logout {
    color: ${({theme:e})=>e.textColor};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,as=G(lt)`
  ${Mn}

  color: ${({theme:e})=>e.global.text.color.white};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,ss=G.p`
  margin-bottom: 0;
`,Er=G.svg`
  width: 1.75rem;
  height: 1.75rem;

  fill: transparent;
  stroke: currentColor;
`,cs=G.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);
  }
`,ls=G.ul`
  padding: ${({theme:e})=>e.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({theme:e})=>e.pageBackground};
`,kr=G.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(3)};
  }
`,us=G(lt)`
  ${Mn}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,Rr=G.svg`
  width: 1rem;
  height: 1rem;

  fill: transparent;
  stroke: currentColor;
`,fs=G(hi)`
  height: 1.75rem;
  width: 1.75rem;
`,ds=()=>{const e=Pt(on),t=fo(),n=mi(),[,{isLoading:r}]=gi({fixedCacheKey:"login-user"}),[,{isLoading:o}]=bi({fixedCacheKey:"register-user"});console.log("isLoginLoading :>> ",r),console.log("isLoginLoading :>> ",o);const i=()=>{t(yi()),n("/login"),s(!1)},[a,s]=b.useState(!1),{refs:c,floatingStyles:u,context:l}=ns({open:a,onOpenChange:s,whileElementsMounted:Pa}),d=Za(l),y=es(l),f=is(l,{role:"menu"}),{getReferenceProps:p,getFloatingProps:v}=rs([d,y,f]),w=Fn();return T.jsxs(T.Fragment,{children:[e&&T.jsxs(Sr,{ref:c.setReference,...p(),children:[T.jsx(ss,{children:e.firstName}),T.jsx(Er,{children:T.jsx("use",{href:`${ct}#user`})}),T.jsx(cs,{className:a?"open":"",children:T.jsx("use",{href:`${ct}#arrow-down`})})]}),!e&&T.jsxs(as,{to:"/login",children:[r||o?T.jsx(fs,{}):T.jsx("p",{children:"Log in"}),T.jsx(Er,{children:T.jsx("use",{href:`${ct}#user`})})]}),a&&T.jsx(Ga,{context:l,modal:!1,initialFocus:-1,children:T.jsx("div",{className:"Popover",ref:c.setFloating,style:u,"aria-labelledby":w,...v(),children:T.jsxs(ls,{children:[T.jsx(kr,{role:"menuitem",children:T.jsxs(Sr,{onClick:i,className:"logout",children:[T.jsx(Rr,{children:T.jsx("use",{href:`${ct}#logout`})}),"Log out"]})}),T.jsx(kr,{role:"menuitem",children:T.jsxs(us,{to:"/settings",children:[T.jsx(Rr,{children:T.jsx("use",{href:`${ct}#settings`})}),"Settings"]})})]})})})]})},ps=({isMobile:e,handleClick:t,mobileMenu:n})=>T.jsx($i,{children:T.jsxs(Ii,{children:[e&&T.jsx(Ti,{onClick:()=>t(),mobileMenu:n}),T.jsx(ds,{})]})});/*! *****************************************************************************
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
***************************************************************************** */var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ye.apply(this,arguments)};function ot(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function de(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rn.apply(this,arguments)}function Wn(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var vs=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hs=Wn(function(e){return vs.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function ms(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function gs(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var bs=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(gs(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ms(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),fe="-ms-",en="-moz-",q="-webkit-",No="comm",Hn="rule",Vn="decl",ys="@import",jo="@keyframes",xs=Math.abs,cn=String.fromCharCode,ws=Object.assign;function Cs(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Fo(e){return e.trim()}function Ss(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function On(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Et(e,t,n){return e.slice(t,n)}function Me(e){return e.length}function zn(e){return e.length}function jt(e,t){return t.push(e),e}function Es(e,t){return e.map(t).join("")}var ln=1,pt=1,Bo=0,ge=0,re=0,bt="";function un(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ln,column:pt,length:a,return:""}}function yt(e,t){return ws(un("",null,null,"",null,null,0),e,{length:-e.length},t)}function ks(){return re}function Rs(){return re=ge>0?ue(bt,--ge):0,pt--,re===10&&(pt=1,ln--),re}function we(){return re=ge<Bo?ue(bt,ge++):0,pt++,re===10&&(pt=1,ln++),re}function De(){return ue(bt,ge)}function Ht(){return ge}function $t(e,t){return Et(bt,e,t)}function kt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wo(e){return ln=pt=1,Bo=Me(bt=e),ge=0,[]}function Ho(e){return bt="",e}function Vt(e){return Fo($t(ge-1,Tn(e===91?e+2:e===40?e+1:e)))}function Os(e){for(;(re=De())&&re<33;)we();return kt(e)>2||kt(re)>3?"":" "}function Ts(e,t){for(;--t&&we()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return $t(e,Ht()+(t<6&&De()==32&&we()==32))}function Tn(e){for(;we();)switch(re){case e:return ge;case 34:case 39:e!==34&&e!==39&&Tn(re);break;case 40:e===41&&Tn(e);break;case 92:we();break}return ge}function Ps(e,t){for(;we()&&e+re!==57;)if(e+re===84&&De()===47)break;return"/*"+$t(t,ge-1)+"*"+cn(e===47?e:we())}function As(e){for(;!kt(De());)we();return $t(e,ge)}function Or(e){return Ho(zt("",null,null,null,[""],e=Wo(e),0,[0],e))}function zt(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,d=a,y=0,f=0,p=0,v=1,w=1,C=1,S=0,g="",h=o,x=i,m=r,E=g;w;)switch(p=S,S=we()){case 40:if(p!=108&&ue(E,d-1)==58){On(E+=K(Vt(S),"&","&\f"),"&\f")!=-1&&(C=-1);break}case 34:case 39:case 91:E+=Vt(S);break;case 9:case 10:case 13:case 32:E+=Os(p);break;case 92:E+=Ts(Ht()-1,7);continue;case 47:switch(De()){case 42:case 47:jt($s(Ps(we(),Ht()),t,n),c);break;default:E+="/"}break;case 123*v:s[u++]=Me(E)*C;case 125*v:case 59:case 0:switch(S){case 0:case 125:w=0;case 59+l:f>0&&Me(E)-d&&jt(f>32?Pr(E+";",r,n,d-1):Pr(K(E," ","")+";",r,n,d-2),c);break;case 59:E+=";";default:if(jt(m=Tr(E,t,n,u,l,o,s,g,h=[],x=[],d),i),S===123)if(l===0)zt(E,t,m,m,h,i,d,s,x);else switch(y===99&&ue(E,3)===110?100:y){case 100:case 109:case 115:zt(e,m,m,r&&jt(Tr(e,m,m,0,0,o,s,g,o,h=[],d),x),o,x,d,s,r?h:x);break;default:zt(E,m,m,m,[""],x,0,s,x)}}u=l=f=0,v=C=1,g=E="",d=a;break;case 58:d=1+Me(E),f=p;default:if(v<1){if(S==123)--v;else if(S==125&&v++==0&&Rs()==125)continue}switch(E+=cn(S),S*v){case 38:C=l>0?1:(E+="\f",-1);break;case 44:s[u++]=(Me(E)-1)*C,C=1;break;case 64:De()===45&&(E+=Vt(we())),y=De(),l=d=Me(g=E+=As(Ht())),S++;break;case 45:p===45&&Me(E)==2&&(v=0)}}return i}function Tr(e,t,n,r,o,i,a,s,c,u,l){for(var d=o-1,y=o===0?i:[""],f=zn(y),p=0,v=0,w=0;p<r;++p)for(var C=0,S=Et(e,d+1,d=xs(v=a[p])),g=e;C<f;++C)(g=Fo(v>0?y[C]+" "+S:K(S,/&\f/g,y[C])))&&(c[w++]=g);return un(e,t,n,o===0?Hn:s,c,u,l)}function $s(e,t,n){return un(e,t,n,No,cn(ks()),Et(e,2,-2),0)}function Pr(e,t,n,r){return un(e,t,n,Vn,Et(e,0,r),Et(e,r+1,-1),r)}function tt(e,t){for(var n="",r=zn(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Ar(e,t,n,r){switch(e.type){case ys:case Vn:return e.return=e.return||e.value;case No:return"";case jo:return e.return=e.value+"{"+tt(e.children,r)+"}";case Hn:e.value=e.props.join(",")}return Me(n=tt(e.children,r))?e.return=e.value+"{"+n+"}":""}function $r(e){var t=zn(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function Is(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ms=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}},Ls=function(t,n,r){for(var o=0,i=0;o=i,i=De(),o===38&&i===12&&(n[r]=1),!kt(i);)we();return $t(t,ge)},Ds=function(t,n){var r=-1,o=44;do switch(kt(o)){case 0:o===38&&De()===12&&(n[r]=1),t[r]+=Ls(ge-1,n,r);break;case 2:t[r]+=Vt(o);break;case 4:if(o===44){t[++r]=De()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=cn(o)}while(o=we());return t},Ns=function(t,n){return Ho(Ds(Wo(t),n))},Ir=new WeakMap,js=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ir.get(r))&&!o){Ir.set(t,!0);for(var i=[],a=Ns(n,i),s=r.props,c=0,u=0;c<a.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},Fs=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Vo(e,t){switch(Cs(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+en+e+fe+e+e;case 6828:case 4268:return q+e+fe+e+e;case 6165:return q+e+fe+"flex-"+e+e;case 5187:return q+e+K(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return q+e+fe+"flex-item-"+K(e,/flex-|-self/,"")+e;case 4675:return q+e+fe+"flex-line-pack"+K(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+fe+K(e,"shrink","negative")+e;case 5292:return q+e+fe+K(e,"basis","preferred-size")+e;case 6060:return q+"box-"+K(e,"-grow","")+q+e+fe+K(e,"grow","positive")+e;case 4554:return q+K(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Me(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+en+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~On(e,"stretch")?Vo(K(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,Me(e)-3-(~On(e,"!important")&&10))){case 107:return K(e,":",":"+q)+e;case 101:return K(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(ue(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+fe+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+fe+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+fe+e+e}return e}var Bs=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Vn:t.return=Vo(t.value,t.length);break;case jo:return tt([yt(t,{value:K(t.value,"@","@"+q)})],o);case Hn:if(t.length)return Es(t.props,function(i){switch(Ss(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return tt([yt(t,{props:[K(i,/:(read-\w+)/,":"+en+"$1")]})],o);case"::placeholder":return tt([yt(t,{props:[K(i,/:(plac\w+)/,":"+q+"input-$1")]}),yt(t,{props:[K(i,/:(plac\w+)/,":"+en+"$1")]}),yt(t,{props:[K(i,/:(plac\w+)/,fe+"input-$1")]})],o)}return""})}},Ut=typeof document<"u",Ws=Ut?void 0:Ms(function(){return Wn(function(){var e={};return function(t){return e[t]}})}),Hs=[Bs],zo=function(t){var n=t.key;if(Ut&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var x=h.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||Hs,i={},a,s=[];Ut&&(a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var x=h.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)i[x[m]]=!0;s.push(h)}));var c,u=[js,Fs];if(Ut){var l,d=[Ar,Is(function(h){l.insert(h)})],y=$r(u.concat(o,d)),f=function(x){return tt(Or(x),y)};c=function(x,m,E,O){l=E,f(x?x+"{"+m.styles+"}":m.styles),O&&(g.inserted[m.name]=!0)}}else{var p=[Ar],v=$r(u.concat(o,p)),w=function(x){return tt(Or(x),v)},C=Ws(o)(n),S=function(x,m){var E=m.name;return C[E]===void 0&&(C[E]=w(x?x+"{"+m.styles+"}":m.styles)),C[E]};c=function(x,m,E,O){var L=m.name,I=S(x,m);if(g.compat===void 0)return O&&(g.inserted[L]=!0),I;if(O)g.inserted[L]=I;else return I}}var g={key:n,sheet:new bs({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(s),g},Vs=typeof document<"u",Mr=function(t){return t()},zs=b.useInsertionEffect?b.useInsertionEffect:!1,Us=Vs&&zs||Mr,qs=typeof document<"u",tn=b.createContext(typeof HTMLElement<"u"?zo({key:"css"}):null);tn.Provider;var Uo=function(t){return b.forwardRef(function(n,r){var o=b.useContext(tn);return t(n,o,r)})};qs||(Uo=function(t){return function(n){var r=b.useContext(tn);return r===null?(r=zo({key:"css"}),b.createElement(tn.Provider,{value:r},t(n,r))):t(n,r)}});var Ks=b.createContext({}),Pn=typeof document<"u";function _s(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var qo=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Pn===!1&&t.compat!==void 0)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Ys=function(t,n,r){qo(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",a=n;do{var s=t.insert(n===a?"."+o:"",a,t.sheet,!0);!Pn&&s!==void 0&&(i+=s),a=a.next}while(a!==void 0);if(!Pn&&i.length!==0)return i}};function Xs(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Gs={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zs=/[A-Z]|^ms/g,Js=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ko=function(t){return t.charCodeAt(1)===45},Lr=function(t){return t!=null&&typeof t!="boolean"},xn=Wn(function(e){return Ko(e)?e:e.replace(Zs,"-$&").toLowerCase()}),Dr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Js,function(r,o,i){return Le={name:o,styles:i,next:Le},o})}return Gs[t]!==1&&!Ko(t)&&typeof n=="number"&&n!==0?n+"px":n};function Rt(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Le={name:n.name,styles:n.styles,next:Le},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Le={name:r.name,styles:r.styles,next:Le},r=r.next;var o=n.styles+";";return o}return Qs(e,t,n)}case"function":{if(e!==void 0){var i=Le,a=n(e);return Le=i,Rt(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Qs(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Rt(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":Lr(a)&&(r+=xn(i)+":"+Dr(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Lr(a[s])&&(r+=xn(i)+":"+Dr(i,a[s])+";");else{var c=Rt(e,t,a);switch(i){case"animation":case"animationName":{r+=xn(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Nr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Le,ec=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";Le=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Rt(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Rt(r,n,t[s]),o&&(i+=a[s]);Nr.lastIndex=0;for(var c="",u;(u=Nr.exec(i))!==null;)c+="-"+u[1];var l=Xs(i)+c;return{name:l,styles:i,next:Le}},tc=hs,nc=function(t){return t!=="theme"},jr=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?tc:nc},Fr=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},rc=typeof document<"u",oc=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;qo(n,r,o);var i=Us(function(){return Ys(n,r,o)});if(!rc&&i!==void 0){for(var a,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return b.createElement("style",(a={},a["data-emotion"]=n.key+" "+s,a.dangerouslySetInnerHTML={__html:i},a.nonce=n.sheet.nonce,a))}return null},ic=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Fr(t,n,r),c=s||jr(o),u=!c("as");return function(){var l=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)d.push.apply(d,l);else{d.push(l[0][0]);for(var y=l.length,f=1;f<y;f++)d.push(l[f],l[0][f])}var p=Uo(function(v,w,C){var S=u&&v.as||o,g="",h=[],x=v;if(v.theme==null){x={};for(var m in v)x[m]=v[m];x.theme=b.useContext(Ks)}typeof v.className=="string"?g=_s(w.registered,h,v.className):v.className!=null&&(g=v.className+" ");var E=ec(d.concat(h),w.registered,x);g+=w.key+"-"+E.name,a!==void 0&&(g+=" "+a);var O=u&&s===void 0?jr(S):c,L={};for(var I in v)u&&I==="as"||O(I)&&(L[I]=v[I]);return L.className=g,L.ref=C,b.createElement(b.Fragment,null,b.createElement(oc,{cache:w,serialized:E,isStringTag:typeof S=="string"}),b.createElement(S,L))});return p.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(v,w){return e(v,Rn({},n,w,{shouldForwardProp:Fr(p,w,!0)})).apply(void 0,d)},p}},ac=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ce=ic.bind();ac.forEach(function(e){ce[e]=ce(e)});var _o={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(_o);var ie=_o.exports,sc=R.createContext(void 0),cc=function(){var e=R.useContext(sc);return e},lc=function(e){var t=R.useState(!!e&&typeof window<"u"&&window.matchMedia(e).matches),n=t[0],r=t[1];return R.useEffect(function(){if(e){var o=window.matchMedia(e),i=function(){o.matches!==n&&r(o.matches)};return i(),o.addEventListener("change",i),function(){return o.removeEventListener("change",i)}}},[n,e]),n},Q={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},U={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},uc=ce.div(Br||(Br=de([`
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
`]))),Br,fc={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},dc=ce.aside(Wr||(Wr=de([`
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
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},Q.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},Q.rtl,Q.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},Q.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},Q.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},Q.rtl,function(e){var t=e.width;return t},Q.collapsed,function(e){var t=e.collapsedWidth;return t},Q.toggled,function(e){var t=e.rootStyles;return t}),pc=ce.div(Hr||(Hr=de([`
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
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),vc=ce.img(Vr||(Vr=de([`
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
`])),Q.image),fn=R.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),hc=R.forwardRef(function(e,t){var n,r=e.collapsed,o=e.toggled,i=e.onBackdropClick,a=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,d=e.defaultCollapsed,y=e.className,f=e.children,p=e.breakPoint,v=e.customBreakPoint,w=e.backgroundColor,C=w===void 0?"rgb(249, 249, 249, 0.7)":w,S=e.transitionDuration,g=S===void 0?300:S,h=e.image,x=e.rtl,m=e.rootStyles,E=ot(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),O=function(){if(v)return"(max-width: ".concat(v,")");if(p)return["xs","sm","md","lg","xl","xxl"].includes(p)?"(max-width: ".concat(fc[p],")"):p==="always"||p==="all"?(p==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(p,")")},L=R.useRef();L.current=function(W){a==null||a(W)};var I=lc(O()),B=R.useState(!1),$=B[0],V=B[1],k=cc(),N=r??(!$&&d?!0:k==null?void 0:k.collapsed),j=o??(k==null?void 0:k.toggled),P=function(){i==null||i(),k==null||k.updateSidebarState({toggled:!1})};return R.useEffect(function(){var W;(W=L.current)===null||W===void 0||W.call(L,I)},[I]),R.useEffect(function(){k==null||k.updateSidebarState({broken:I,rtl:x,transitionDuration:g})},[I,k==null?void 0:k.updateSidebarState,x,g]),R.useEffect(function(){$||(k==null||k.updateSidebarState({collapsed:d}),V(!0))},[d,$,k==null?void 0:k.updateSidebarState]),R.createElement(fn.Provider,{value:{collapsed:N,toggled:j,rtl:x,transitionDuration:g}},R.createElement(dc,ye({ref:t,"data-testid":"".concat(Q.root,"-test-id"),rtl:x,rootStyles:m,width:c,collapsedWidth:l,transitionDuration:g,className:ie(Q.root,(n={},n[Q.collapsed]=N,n[Q.toggled]=j,n[Q.broken]=I,n[Q.rtl]=x,n),y)},E),R.createElement(pc,{"data-testid":"".concat(Q.container,"-test-id"),className:Q.container,backgroundColor:C},f),h&&R.createElement(vc,{"data-testid":"".concat(Q.image,"-test-id"),src:h,alt:"sidebar background",className:Q.image}),I&&j&&R.createElement(uc,{"data-testid":"".concat(Q.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:P,onKeyPress:P,className:Q.backdrop})))}),Wr,Hr,Vr,Yo=ce.ul(zr||(zr=de([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),zr,mc=ce.nav(Ur||(Ur=de([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),U.root,function(e){var t=e.rootStyles;return t}),Xo=R.createContext(void 0),nn=R.createContext(0),gc=function(e,t){var n=e.children,r=e.className,o=e.transitionDuration,i=o===void 0?300:o,a=e.closeOnClick,s=a===void 0?!1:a,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,d=ot(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),y=R.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return R.createElement(Xo.Provider,{value:y},R.createElement(nn.Provider,{value:0},R.createElement(mc,ye({ref:t,className:ie(U.root,r),rootStyles:c},d),R.createElement(Yo,null,n))))},bc=R.forwardRef(gc),Ur,Un=function(){var e=R.useContext(Xo);if(e===void 0)throw new Error("Menu Component is required!");return e},yc=ce.div(qr||(qr=de([`
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
      `},function(e){var t=e.rootStyles;return t}),xc=function(e,t){var n=e.children,r=e.open,o=e.openWhenCollapsed,i=e.firstLevel,a=e.collapsed,s=e.defaultOpen,c=ot(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=Un().transitionDuration,l=R.useState(s)[0];return R.createElement(yc,ye({"data-testid":"".concat(U.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:a,open:r,openWhenCollapsed:o,transitionDuration:u,defaultOpen:l},c),R.createElement(Yo,null,n))},wc=R.forwardRef(xc),qr,Go=ce.span(Kr||(Kr=de([`
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
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),_r,Jo=ce.span(Yr||(Yr=de([`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 5px;":"margin-right: 5px;"},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Yr,Qo=ce.span(Xr||(Xr=de([`
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
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Xr,Cc=ce.span(Gr||(Gr=de([`
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
    
    `)},function(e){var t=e.rootStyles;return t}),Sc=ce.span(Zr||(Zr=de([`
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
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),Ec=ce.span(Jr||(Jr=de([`
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
`]))),Gr,Zr,Jr,he="top",Oe="bottom",Te="right",me="left",qn="auto",It=[he,Oe,Te,me],vt="start",Ot="end",kc="clippingParents",ei="viewport",xt="popper",Rc="reference",Qr=It.reduce(function(e,t){return e.concat([t+"-"+vt,t+"-"+Ot])},[]),ti=[].concat(It,[qn]).reduce(function(e,t){return e.concat([t,t+"-"+vt,t+"-"+Ot])},[]),Oc="beforeRead",Tc="read",Pc="afterRead",Ac="beforeMain",$c="main",Ic="afterMain",Mc="beforeWrite",Lc="write",Dc="afterWrite",Nc=[Oc,Tc,Pc,Ac,$c,Ic,Mc,Lc,Dc];function je(e){return e?(e.nodeName||"").toLowerCase():null}function Pe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function it(e){var t=Pe(e).Element;return e instanceof t||e instanceof Element}function ke(e){var t=Pe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Kn(e){if(typeof ShadowRoot>"u")return!1;var t=Pe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function jc(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!ke(i)||!je(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function Fc(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(c,u){return c[u]="",c},{});!ke(o)||!je(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}var Bc={name:"applyStyles",enabled:!0,phase:"write",fn:jc,effect:Fc,requires:["computeStyles"]};function Ne(e){return e.split("-")[0]}var nt=Math.max,rn=Math.min,ht=Math.round;function An(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ni(){return!/^((?!chrome|android).)*safari/i.test(An())}function mt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&ke(e)&&(o=e.offsetWidth>0&&ht(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ht(r.height)/e.offsetHeight||1);var a=it(e)?Pe(e):window,s=a.visualViewport,c=!ni()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/o,l=(r.top+(c&&s?s.offsetTop:0))/i,d=r.width/o,y=r.height/i;return{width:d,height:y,top:l,right:u+d,bottom:l+y,left:u,x:u,y:l}}function _n(e){var t=mt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function ri(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Kn(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function He(e){return Pe(e).getComputedStyle(e)}function Wc(e){return["table","td","th"].indexOf(je(e))>=0}function Xe(e){return((it(e)?e.ownerDocument:e.document)||window.document).documentElement}function dn(e){return je(e)==="html"?e:e.assignedSlot||e.parentNode||(Kn(e)?e.host:null)||Xe(e)}function eo(e){return!ke(e)||He(e).position==="fixed"?null:e.offsetParent}function Hc(e){var t=/firefox/i.test(An()),n=/Trident/i.test(An());if(n&&ke(e)){var r=He(e);if(r.position==="fixed")return null}var o=dn(e);for(Kn(o)&&(o=o.host);ke(o)&&["html","body"].indexOf(je(o))<0;){var i=He(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Mt(e){for(var t=Pe(e),n=eo(e);n&&Wc(n)&&He(n).position==="static";)n=eo(n);return n&&(je(n)==="html"||je(n)==="body"&&He(n).position==="static")?t:n||Hc(e)||t}function Yn(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ct(e,t,n){return nt(e,rn(t,n))}function Vc(e,t,n){var r=Ct(e,t,n);return r>n?n:r}function oi(){return{top:0,right:0,bottom:0,left:0}}function ii(e){return Object.assign({},oi(),e)}function ai(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var zc=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ii(typeof t!="number"?t:ai(t,It))};function Uc(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Ne(n.placement),c=Yn(s),u=[me,Te].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var d=zc(o.padding,n),y=_n(i),f=c==="y"?he:me,p=c==="y"?Oe:Te,v=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],w=a[c]-n.rects.reference[c],C=Mt(i),S=C?c==="y"?C.clientHeight||0:C.clientWidth||0:0,g=v/2-w/2,h=d[f],x=S-y[l]-d[p],m=S/2-y[l]/2+g,E=Ct(h,m,x),O=c;n.modifiersData[r]=(t={},t[O]=E,t.centerOffset=E-m,t)}}function qc(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||ri(t.elements.popper,o)&&(t.elements.arrow=o))}var Kc={name:"arrow",enabled:!0,phase:"main",fn:Uc,effect:qc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function gt(e){return e.split("-")[1]}var _c={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Yc(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:ht(t*o)/o||0,y:ht(n*o)/o||0}}function to(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,y=a.x,f=y===void 0?0:y,p=a.y,v=p===void 0?0:p,w=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=w.x,v=w.y;var C=a.hasOwnProperty("x"),S=a.hasOwnProperty("y"),g=me,h=he,x=window;if(u){var m=Mt(n),E="clientHeight",O="clientWidth";if(m===Pe(n)&&(m=Xe(n),He(m).position!=="static"&&s==="absolute"&&(E="scrollHeight",O="scrollWidth")),m=m,o===he||(o===me||o===Te)&&i===Ot){h=Oe;var L=d&&m===x&&x.visualViewport?x.visualViewport.height:m[E];v-=L-r.height,v*=c?1:-1}if(o===me||(o===he||o===Oe)&&i===Ot){g=Te;var I=d&&m===x&&x.visualViewport?x.visualViewport.width:m[O];f-=I-r.width,f*=c?1:-1}}var B=Object.assign({position:s},u&&_c),$=l===!0?Yc({x:f,y:v}):{x:f,y:v};if(f=$.x,v=$.y,c){var V;return Object.assign({},B,(V={},V[h]=S?"0":"",V[g]=C?"0":"",V.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",V))}return Object.assign({},B,(t={},t[h]=S?v+"px":"",t[g]=C?f+"px":"",t.transform="",t))}function Xc(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:Ne(t.placement),variation:gt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,to(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,to(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Gc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Xc,data:{}},Ft={passive:!0};function Zc(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,c=Pe(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,Ft)}),s&&c.addEventListener("resize",n.update,Ft),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,Ft)}),s&&c.removeEventListener("resize",n.update,Ft)}}var Jc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Zc,data:{}},Qc={left:"right",right:"left",bottom:"top",top:"bottom"};function qt(e){return e.replace(/left|right|bottom|top/g,function(t){return Qc[t]})}var el={start:"end",end:"start"};function no(e){return e.replace(/start|end/g,function(t){return el[t]})}function Xn(e){var t=Pe(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Gn(e){return mt(Xe(e)).left+Xn(e).scrollLeft}function tl(e,t){var n=Pe(e),r=Xe(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=ni();(u||!u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+Gn(e),y:c}}function nl(e){var t,n=Xe(e),r=Xn(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=nt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=nt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Gn(e),c=-r.scrollTop;return He(o||n).direction==="rtl"&&(s+=nt(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function Zn(e){var t=He(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function si(e){return["html","body","#document"].indexOf(je(e))>=0?e.ownerDocument.body:ke(e)&&Zn(e)?e:si(dn(e))}function St(e,t){var n;t===void 0&&(t=[]);var r=si(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=Pe(r),a=o?[i].concat(i.visualViewport||[],Zn(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(St(dn(a)))}function $n(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function rl(e,t){var n=mt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ro(e,t,n){return t===ei?$n(tl(e,n)):it(t)?rl(t,n):$n(nl(Xe(e)))}function ol(e){var t=St(dn(e)),n=["absolute","fixed"].indexOf(He(e).position)>=0,r=n&&ke(e)?Mt(e):e;return it(r)?t.filter(function(o){return it(o)&&ri(o,r)&&je(o)!=="body"}):[]}function il(e,t,n,r){var o=t==="clippingParents"?ol(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(c,u){var l=ro(e,u,r);return c.top=nt(l.top,c.top),c.right=rn(l.right,c.right),c.bottom=rn(l.bottom,c.bottom),c.left=nt(l.left,c.left),c},ro(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ci(e){var t=e.reference,n=e.element,r=e.placement,o=r?Ne(r):null,i=r?gt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case he:c={x:a,y:t.y-n.height};break;case Oe:c={x:a,y:t.y+t.height};break;case Te:c={x:t.x+t.width,y:s};break;case me:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?Yn(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case vt:c[u]=c[u]-(t[l]/2-n[l]/2);break;case Ot:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function Tt(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?kc:s,u=n.rootBoundary,l=u===void 0?ei:u,d=n.elementContext,y=d===void 0?xt:d,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,w=v===void 0?0:v,C=ii(typeof w!="number"?w:ai(w,It)),S=y===xt?Rc:xt,g=e.rects.popper,h=e.elements[p?S:y],x=il(it(h)?h:h.contextElement||Xe(e.elements.popper),c,l,a),m=mt(e.elements.reference),E=ci({reference:m,element:g,strategy:"absolute",placement:o}),O=$n(Object.assign({},g,E)),L=y===xt?O:m,I={top:x.top-L.top+C.top,bottom:L.bottom-x.bottom+C.bottom,left:x.left-L.left+C.left,right:L.right-x.right+C.right},B=e.modifiersData.offset;if(y===xt&&B){var $=B[o];Object.keys(I).forEach(function(V){var k=[Te,Oe].indexOf(V)>=0?1:-1,N=[he,Oe].indexOf(V)>=0?"y":"x";I[V]+=$[N]*k})}return I}function al(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?ti:c,l=gt(r),d=l?s?Qr:Qr.filter(function(p){return gt(p)===l}):It,y=d.filter(function(p){return u.indexOf(p)>=0});y.length===0&&(y=d);var f=y.reduce(function(p,v){return p[v]=Tt(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[Ne(v)],p},{});return Object.keys(f).sort(function(p,v){return f[p]-f[v]})}function sl(e){if(Ne(e)===qn)return[];var t=qt(e);return[no(e),t,no(t)]}function cl(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,y=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,v=n.allowedAutoPlacements,w=t.options.placement,C=Ne(w),S=C===w,g=c||(S||!p?[qt(w)]:sl(w)),h=[w].concat(g).reduce(function(pe,A){return pe.concat(Ne(A)===qn?al(t,{placement:A,boundary:l,rootBoundary:d,padding:u,flipVariations:p,allowedAutoPlacements:v}):A)},[]),x=t.rects.reference,m=t.rects.popper,E=new Map,O=!0,L=h[0],I=0;I<h.length;I++){var B=h[I],$=Ne(B),V=gt(B)===vt,k=[he,Oe].indexOf($)>=0,N=k?"width":"height",j=Tt(t,{placement:B,boundary:l,rootBoundary:d,altBoundary:y,padding:u}),P=k?V?Te:me:V?Oe:he;x[N]>m[N]&&(P=qt(P));var W=qt(P),Y=[];if(i&&Y.push(j[$]<=0),s&&Y.push(j[P]<=0,j[W]<=0),Y.every(function(pe){return pe})){L=B,O=!1;break}E.set(B,Y)}if(O)for(var F=p?3:1,X=function(A){var M=h.find(function(D){var H=E.get(D);if(H)return H.slice(0,A).every(function(_){return _})});if(M)return L=M,"break"},ae=F;ae>0;ae--){var Ce=X(ae);if(Ce==="break")break}t.placement!==L&&(t.modifiersData[r]._skip=!0,t.placement=L,t.reset=!0)}}var ll={name:"flip",enabled:!0,phase:"main",fn:cl,requiresIfExists:["offset"],data:{_skip:!1}};function oo(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function io(e){return[he,Te,Oe,me].some(function(t){return e[t]>=0})}function ul(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Tt(t,{elementContext:"reference"}),s=Tt(t,{altBoundary:!0}),c=oo(a,r),u=oo(s,o,i),l=io(c),d=io(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var fl={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ul};function dl(e,t,n){var r=Ne(e),o=[me,he].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[me,Te].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function pl(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=ti.reduce(function(l,d){return l[d]=dl(d,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var vl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:pl};function hl(e){var t=e.state,n=e.name;t.modifiersData[n]=ci({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ml={name:"popperOffsets",enabled:!0,phase:"read",fn:hl,data:{}};function gl(e){return e==="x"?"y":"x"}function bl(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,y=n.tether,f=y===void 0?!0:y,p=n.tetherOffset,v=p===void 0?0:p,w=Tt(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),C=Ne(t.placement),S=gt(t.placement),g=!S,h=Yn(C),x=gl(h),m=t.modifiersData.popperOffsets,E=t.rects.reference,O=t.rects.popper,L=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,I=typeof L=="number"?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(m){if(i){var V,k=h==="y"?he:me,N=h==="y"?Oe:Te,j=h==="y"?"height":"width",P=m[h],W=P+w[k],Y=P-w[N],F=f?-O[j]/2:0,X=S===vt?E[j]:O[j],ae=S===vt?-O[j]:-E[j],Ce=t.elements.arrow,pe=f&&Ce?_n(Ce):{width:0,height:0},A=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:oi(),M=A[k],D=A[N],H=Ct(0,E[j],pe[j]),_=g?E[j]/2-F-H-M-I.mainAxis:X-H-M-I.mainAxis,te=g?-E[j]/2+F+H+D+I.mainAxis:ae+H+D+I.mainAxis,Z=t.elements.arrow&&Mt(t.elements.arrow),le=Z?h==="y"?Z.clientTop||0:Z.clientLeft||0:0,Fe=(V=B==null?void 0:B[h])!=null?V:0,oe=P+_-Fe-le,ve=P+te-Fe,J=Ct(f?rn(W,oe):W,P,f?nt(Y,ve):Y);m[h]=J,$[h]=J-P}if(s){var z,Se=h==="x"?he:me,ze=h==="x"?Oe:Te,ee=m[x],Ee=x==="y"?"height":"width",$e=ee+w[Se],Ie=ee-w[ze],Ge=[he,me].indexOf(C)!==-1,at=(z=B==null?void 0:B[x])!=null?z:0,Jn=Ge?$e:ee-E[Ee]-O[Ee]-at+I.altAxis,Qn=Ge?ee+E[Ee]+O[Ee]-at-I.altAxis:Ie,er=f&&Ge?Vc(Jn,ee,Qn):Ct(f?Jn:$e,ee,f?Qn:Ie);m[x]=er,$[x]=er-ee}t.modifiersData[r]=$}}var yl={name:"preventOverflow",enabled:!0,phase:"main",fn:bl,requiresIfExists:["offset"]};function xl(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function wl(e){return e===Pe(e)||!ke(e)?Xn(e):xl(e)}function Cl(e){var t=e.getBoundingClientRect(),n=ht(t.width)/e.offsetWidth||1,r=ht(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Sl(e,t,n){n===void 0&&(n=!1);var r=ke(t),o=ke(t)&&Cl(t),i=Xe(t),a=mt(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((je(t)!=="body"||Zn(i))&&(s=wl(t)),ke(t)?(c=mt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Gn(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function El(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function kl(e){var t=El(e);return Nc.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Rl(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ol(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var ao={placement:"bottom",modifiers:[],strategy:"absolute"};function so(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Tl(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?ao:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ao,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],y=!1,f={state:l,setOptions:function(C){var S=typeof C=="function"?C(l.options):C;v(),l.options=Object.assign({},i,l.options,S),l.scrollParents={reference:it(s)?St(s):s.contextElement?St(s.contextElement):[],popper:St(c)};var g=kl(Ol([].concat(r,l.options.modifiers)));return l.orderedModifiers=g.filter(function(h){return h.enabled}),p(),f.update()},forceUpdate:function(){if(!y){var C=l.elements,S=C.reference,g=C.popper;if(so(S,g)){l.rects={reference:Sl(S,Mt(g),l.options.strategy==="fixed"),popper:_n(g)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(I){return l.modifiersData[I.name]=Object.assign({},I.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var x=l.orderedModifiers[h],m=x.fn,E=x.options,O=E===void 0?{}:E,L=x.name;typeof m=="function"&&(l=m({state:l,options:O,name:L,instance:f})||l)}}}},update:Rl(function(){return new Promise(function(w){f.forceUpdate(),w(l)})}),destroy:function(){v(),y=!0}};if(!so(s,c))return f;f.setOptions(u).then(function(w){!y&&u.onFirstUpdate&&u.onFirstUpdate(w)});function p(){l.orderedModifiers.forEach(function(w){var C=w.name,S=w.options,g=S===void 0?{}:S,h=w.effect;if(typeof h=="function"){var x=h({state:l,name:C,instance:f,options:g}),m=function(){};d.push(x||m)}})}function v(){d.forEach(function(w){return w()}),d=[]}return f}}var Pl=[Jc,ml,Gc,Bc,vl,ll,yl,Kc,fl],Al=Tl({defaultModifiers:Pl}),$l=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,o=R.useContext(fn),i=o.collapsed,a=o.toggled,s=o.transitionDuration,c=R.useRef();return R.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=Al(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),R.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,a,r,n]),{popperInstance:c.current}},li=function(e){var t=e.rtl,n=e.level,r=e.collapsed,o=e.disabled,i=e.active;return`
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
  
  `)},Il=function(e,t){var n=e.className,r=e.component,o=e.children,i=ot(e,["className","component","children"]);if(r){if(typeof r=="string")return R.createElement(r,ye(ye({className:ie(n)},i),{ref:t}),o);var a=r.props,s=a.className,c=ot(a,["className"]);return R.cloneElement(r,ye(ye(ye({className:ie(n,s)},i),c),{ref:t}),o)}else return R.createElement("a",ye({ref:t,className:ie(n)},i),o)},ui=R.forwardRef(Il),Ml=ce.li(co||(co=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},U.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return li({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Ll=function(e,t){var n,r=e.children,o=e.className,i=e.label,a=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,d=e.defaultOpen,y=e.active,f=y===void 0?!1:y,p=e.disabled,v=p===void 0?!1:p,w=e.rootStyles,C=e.component,S=e.onOpenChange,g=e.onClick,h=e.onKeyUp,x=ot(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),m=R.useContext(nn),E=R.useContext(fn),O=E.collapsed,L=E.rtl,I=E.transitionDuration,B=Un(),$=B.renderExpandIcon,V=B.closeOnClick,k=B.menuItemStyles,N=B.transitionDuration,j=R.useState(!!d),P=j[0],W=j[1],Y=R.useState(!1),F=Y[0],X=Y[1],ae=R.useState(!1),Ce=ae[0],pe=ae[1],A=R.useRef(null),M=R.useRef(null),D=R.useRef(),H=$l({level:m,buttonRef:A,contentRef:M}).popperInstance,_=R.useCallback(function(){var J,z=M.current;if(z){var Se=(J=z==null?void 0:z.querySelector(".".concat(U.subMenuContent," > ul")))===null||J===void 0?void 0:J.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Se,"px"),D.current=setTimeout(function(){z.style.overflow="auto",z.style.height="auto"},N)}},[N]),te=function(){var J,z=M.current;if(z){var Se=(J=z==null?void 0:z.querySelector(".".concat(U.subMenuContent," > ul")))===null||J===void 0?void 0:J.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Se,"px"),z.offsetHeight,z.style.height="0px"}},Z=function(){m===0&&O||(typeof l>"u"?(clearTimeout(Number(D.current)),P?te():_(),S==null||S(!P),W(!P)):S==null||S(!l))};R.useEffect(function(){!(m===0&&O)&&typeof l<"u"&&Ce&&(clearTimeout(Number(D.current)),l?_():te())},[O,_,i,m,S,l]);var le=function(J){g==null||g(J),Z()},Fe=function(J){h==null||h(J),J.key==="Enter"&&Z()},oe=function(J){if(k){var z={level:m,disabled:v,active:f,isSubmenu:!0,open:l??P},Se=k.root,ze=k.button,ee=k.label,Ee=k.icon,$e=k.prefix,Ie=k.suffix,Ge=k.subMenuContent,at=k.SubMenuExpandIcon;switch(J){case"root":return typeof Se=="function"?Se(z):Se;case"button":return typeof ze=="function"?ze(z):ze;case"label":return typeof ee=="function"?ee(z):ee;case"icon":return typeof Ee=="function"?Ee(z):Ee;case"prefix":return typeof $e=="function"?$e(z):$e;case"suffix":return typeof Ie=="function"?Ie(z):Ie;case"SubMenuExpandIcon":return typeof at=="function"?at(z):at;case"subMenuContent":return typeof Ge=="function"?Ge(z):Ge;default:return}}};R.useEffect(function(){setTimeout(function(){return H==null?void 0:H.update()},I),O&&m===0&&X(!1)},[O,m,L,I,H]),R.useEffect(function(){var J=function(ee){var Ee,$e,Ie;!F&&(!((Ee=A.current)===null||Ee===void 0)&&Ee.contains(ee))?X(!0):(V&&!(!(($e=ee.closest(".".concat(U.menuItemRoot)))===null||$e===void 0)&&$e.classList.contains(U.subMenuRoot))||!(!((Ie=M.current)===null||Ie===void 0)&&Ie.contains(ee))&&F)&&X(!1)},z=function(ee){J(ee.target)},Se=function(ee){ee.key==="Enter"?J(ee.target):ee.key==="Escape"&&X(!1)},ze=function(){document.removeEventListener("click",z),document.removeEventListener("keyup",Se)};return ze(),O&&m===0&&(document.addEventListener("click",z,!1),document.addEventListener("keyup",Se,!1)),function(){ze()}},[O,m,V,F]),R.useEffect(function(){pe(!0)},[]);var ve=(n={},n[U.active]=f,n[U.disabled]=v,n[U.open]=l??P,n);return R.createElement(Ml,{ref:t,className:ie(U.menuItemRoot,U.subMenuRoot,ve,o),menuItemStyles:oe("root"),level:m,collapsed:O,rtl:L,disabled:v,active:f,buttonStyles:oe("button"),rootStyles:w},R.createElement(ui,ye({"data-testid":"".concat(U.button,"-test-id"),ref:A,title:s,className:ie(U.button,ve),onClick:le,onKeyUp:Fe,component:C,tabIndex:0},x),a&&R.createElement(Zo,{rtl:L,className:ie(U.icon,ve),rootStyles:oe("icon")},a),c&&R.createElement(Jo,{collapsed:O,transitionDuration:I,firstLevel:m===0,className:ie(U.prefix,ve),rtl:L,rootStyles:oe("prefix")},c),R.createElement(Go,{className:ie(U.label,ve),rootStyles:oe("label")},i),u&&R.createElement(Qo,{collapsed:O,transitionDuration:I,firstLevel:m===0,className:ie(U.suffix,ve),rootStyles:oe("suffix")},u),R.createElement(Cc,{rtl:L,className:ie(U.SubMenuExpandIcon,ve),collapsed:O,level:m,rootStyles:oe("SubMenuExpandIcon")},$?$({level:m,disabled:v,active:f,open:l??P}):O&&m===0?R.createElement(Ec,null):R.createElement(Sc,{rtl:L,open:l??P}))),R.createElement(wc,{ref:M,openWhenCollapsed:F,open:l??P,firstLevel:m===0,collapsed:O,defaultOpen:l&&!Ce||d,className:ie(U.subMenuContent,ve),rootStyles:oe("subMenuContent")},R.createElement(nn.Provider,{value:m+1},r)))};R.forwardRef(Ll);var co,Dl=ce.li(lo||(lo=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},U.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return li({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Nl=function(e,t){var n,r=e.children,o=e.icon,i=e.className,a=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,d=l===void 0?!1:l,y=e.component,f=e.rootStyles,p=ot(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),v=R.useContext(nn),w=R.useContext(fn),C=w.collapsed,S=w.rtl,g=w.transitionDuration,h=Un().menuItemStyles,x=function(E){if(h){var O={level:v,disabled:d,active:u,isSubmenu:!1},L=h.root,I=h.button,B=h.label,$=h.icon,V=h.prefix,k=h.suffix;switch(E){case"root":return typeof L=="function"?L(O):L;case"button":return typeof I=="function"?I(O):I;case"label":return typeof B=="function"?B(O):B;case"icon":return typeof $=="function"?$(O):$;case"prefix":return typeof V=="function"?V(O):V;case"suffix":return typeof k=="function"?k(O):k;default:return}}},m=(n={},n[U.active]=u,n[U.disabled]=d,n);return R.createElement(Dl,{ref:t,className:ie(U.menuItemRoot,m,i),menuItemStyles:x("root"),level:v,collapsed:C,rtl:S,disabled:d,active:u,buttonStyles:x("button"),rootStyles:f},R.createElement(ui,ye({className:ie(U.button,m),"data-testid":"".concat(U.button,"-test-id"),component:y,tabIndex:0},p),o&&R.createElement(Zo,{rtl:S,className:ie(U.icon,m),rootStyles:x("icon")},o),a&&R.createElement(Jo,{collapsed:C,transitionDuration:g,firstLevel:v===0,className:ie(U.prefix,m),rtl:S,rootStyles:x("prefix")},a),R.createElement(Go,{className:ie(U.label,m),rootStyles:x("label")},r),s&&R.createElement(Qo,{collapsed:C,transitionDuration:g,firstLevel:v===0,className:ie(U.suffix,m),rootStyles:x("suffix")},s)))},jl=R.forwardRef(Nl),lo;const Fl=G(hc)`
  &&& {
    z-index: 1;
    border: none;
  }

  .${Q.container} {
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  .${Q.backdrop} {
    z-index: inherit;
  }
`,Bl=G(bc)`
  flex-grow: 1;

  background-color: ${({theme:e})=>e.primaryBgColor};
`,Bt=G(jl)`
  a.${U.button} {
    padding: ${({theme:e})=>e.global.spacing(3,0,3,3)};

    &:hover,
    &:focus,
    &:active,
    &.active {
      background-color: ${({theme:e})=>e.pageBackground};
      color: ${({theme:e})=>e.linkActiveColor};
    }
  }
`,Wl=({setMobileMenu:e})=>T.jsxs(Bl,{children:[T.jsx(Bt,{component:T.jsx(lt,{to:"/",onClick:()=>e(!1)}),children:"Home"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/about",onClick:()=>e(!1)}),children:"About"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/services",onClick:()=>e(!1)}),children:"Services"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/contacts",onClick:()=>e(!1)}),children:"Contacts"})]}),Hl=G.div`
  padding-top: ${({theme:e})=>e.global.spacing(12)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  background-color: ${({theme:e})=>e.secondaryBgColor};
`,Vl=G.ul`
  ${In}
`,wn=G.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(2)};
  }
`,zl=G.img`
  border-radius: 50%;
`,uo=G.p`
  color: ${({theme:e})=>e.textColorSecondary};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};
  font-weight: ${({theme:e})=>e.global.text.fontWeight.m};
`,Ul=()=>{const e=Pt(on);return T.jsx(Hl,{children:e&&T.jsx(T.Fragment,{children:T.jsxs(Vl,{children:[T.jsx(wn,{children:T.jsx(zl,{src:e.image,alt:"User photo",width:"60"})}),T.jsx(wn,{children:T.jsx(uo,{children:e.firstName})}),T.jsx(wn,{children:T.jsx(uo,{children:e.email})})]})})})},ql=G.footer`
  ${po}

  color: ${({theme:e})=>e.footerTextColor};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};

  background-color: ${({$isMainLayout:e,theme:t})=>e?t.primaryBgColor:t.footerBgColor};
`,Kl=G(wi)`
  ${xi}
`,_l=G.div`
  ${In}

  text-align: ${({$isMainLayout:e})=>e&&"center"};
`,fi=({$isMainLayout:e})=>T.jsx(ql,{$isMainLayout:e,children:T.jsxs(_l,{$isMainLayout:e,children:["Coded by"," ",T.jsx(Kl,{to:"https://github.com/iberezhnyi",children:"©iberezhnyi"})]})}),Yl=({mobileMenu:e,setIsMobile:t,setMobileMenu:n})=>{const r=Pt(on);return T.jsxs(Fl,{toggled:e,customBreakPoint:"767px",onBreakPoint:t,onBackdropClick:()=>n(!1),children:[T.jsx(Ai,{}),T.jsx(Ul,{}),T.jsx(Wl,{setMobileMenu:n}),r&&T.jsx(fi,{})]})},Xl=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(window.matchMedia("(max-width: 767px)").matches),o=Pt(on),i=()=>t(a=>!a);return b.useEffect(()=>{!n&&t(!1)},[n]),T.jsxs(T.Fragment,{children:[T.jsx(ps,{isMobile:n,handleClick:i,mobileMenu:e}),T.jsx(Yl,{setMobileMenu:t,setIsMobile:r,mobileMenu:e}),T.jsx(Oi,{children:T.jsx(Ci,{})}),!o&&T.jsx(fi,{$isMainLayout:!0})]})},Jl=Xl;export{Jl as default};
//# sourceMappingURL=index-DeRiumyQ.js.map
