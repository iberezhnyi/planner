import{p as Q,j as T,u as fo,a as Pt,s as di,c as tr,b as po,d as In,r as b,e as pi,R as vi,f as Mn,N as lt,g as on,h as hi,l as mi,i as R,k as gi,L as bi,O as yi}from"./index-C0YDG8Qb.js";import{M as xi,a as wi,T as Si,b as Ci,s as ct}from"./Button.styled-aMA7CHV7.js";const Ei=Q.main`
  flex-grow: 1;
`,ki=({onClick:e,mobileMenu:t})=>T.jsx(xi,{children:T.jsx(wi,{$mobileMenu:t,onClick:e,children:T.jsx("span",{})})}),Ri=()=>{const e=fo();return[Pt(di),r=>e(r==="light"?tr("dark"):tr("light"))]},Oi=()=>{const[e,t]=Ri();return T.jsx(Si,{onClick:()=>t(e),children:T.jsx(Ci,{children:T.jsx("use",{href:`${ct}#${e==="light"?"moon-stars":"sun"}`})})})},Ti=Q.header`
  ${po}
  background-color: ${({theme:e})=>e.headerBgColor};
`,Pi=Q.div`
  ${In}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function Ye(e){return vo(e)?(e.nodeName||"").toLowerCase():"#document"}function xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ve(e){var t;return(t=(vo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vo(e){return e instanceof Node||e instanceof xe(e).Node}function ne(e){return e instanceof Element||e instanceof xe(e).Element}function se(e){return e instanceof HTMLElement||e instanceof xe(e).HTMLElement}function Sn(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof xe(e).ShadowRoot}function At(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Re(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Ai(e){return["table","td","th"].includes(Ye(e))}function an(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Dn(e){const t=Ln(),n=Re(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function $i(e){let t=We(e);for(;se(t)&&!_e(t);){if(an(t))return null;if(Dn(t))return t;t=We(t)}return null}function Ln(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _e(e){return["html","body","#document"].includes(Ye(e))}function Re(e){return xe(e).getComputedStyle(e)}function sn(e){return ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function We(e){if(Ye(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Sn(e)&&e.host||Ve(e);return Sn(t)?t.host:t}function ho(e){const t=We(e);return _e(t)?e.ownerDocument?e.ownerDocument.body:e.body:se(t)&&At(t)?t:ho(t)}function qe(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=ho(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=xe(o);return i?t.concat(a,a.visualViewport||[],At(o)?o:[],a.frameElement&&n?qe(a.frameElement):[]):t.concat(o,qe(o,[],n))}function Je(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function be(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Sn(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Ii(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function mo(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Mi(e){return e.mozInputSource===0&&e.isTrusted?!0:Cn()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Di(e){return Ni()?!1:!Cn()&&e.width===0&&e.height===0||Cn()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Li(){return/apple/i.test(navigator.vendor)}function Cn(){const e=/android/i;return e.test(Ii())||e.test(mo())}function Ni(){return mo().includes("jsdom/")}function nr(e,t){return["mouse","pen"].includes(e)}function ji(e){return"nativeEvent"in e}function Fi(e){return e.matches("html,body")}function Ae(e){return(e==null?void 0:e.ownerDocument)||document}function pn(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function et(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Bi="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function go(e){return se(e)&&e.matches(Bi)}function vn(e){e.preventDefault(),e.stopPropagation()}function Wi(e){return e?e.getAttribute("role")==="combobox"&&go(e):!1}const En=Math.min,ut=Math.max,_t=Math.round,Dt=Math.floor,Ke=e=>({x:e,y:e});function bo(e){return e.split("-")[0]}function Hi(e){return e.split("-")[1]}function Vi(e){return e==="x"?"y":"x"}function zi(e){return e==="y"?"height":"width"}function yo(e){return["top","bottom"].includes(bo(e))?"y":"x"}function Ui(e){return Vi(yo(e))}function xo(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var qi=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Kt=qi.join(","),wo=typeof Element>"u",dt=wo?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Yt=!wo&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Xt=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),i=o===""||o==="true",a=i||n&&t&&e(t.parentNode);return a},_i=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},Ki=function(t,n,r){if(Xt(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(Kt));return n&&dt.call(t,Kt)&&o.unshift(t),o=o.filter(r),o},Yi=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Xt(a,!1))if(a.tagName==="SLOT"){var s=a.assignedElements(),c=s.length?s:a.children,u=e(c,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:a,candidates:u})}else{var l=dt.call(a,Kt);l&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),y=!Xt(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(d&&y){var f=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:a,candidates:f})}else i.unshift.apply(i,a.children)}}return o},So=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},Co=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||_i(t))&&!So(t)?0:t.tabIndex},Xi=function(t,n){var r=Co(t);return r<0&&n&&!So(t)?0:r},Gi=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},Eo=function(t){return t.tagName==="INPUT"},Zi=function(t){return Eo(t)&&t.type==="hidden"},Ji=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},Qi=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},ea=function(t){if(!t.name)return!0;var n=t.form||Yt(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=Qi(o,t.form);return!i||i===t},ta=function(t){return Eo(t)&&t.type==="radio"},na=function(t){return ta(t)&&!ea(t)},ra=function(t){var n,r=t&&Yt(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,s,c;for(i=!!((a=o)!==null&&a!==void 0&&(s=a.ownerDocument)!==null&&s!==void 0&&s.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,l,d;r=Yt(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((l=o)!==null&&l!==void 0&&(d=l.ownerDocument)!==null&&d!==void 0&&d.contains(o))}}return i},rr=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},oa=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=dt.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(dt.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var s=t;t;){var c=t.parentElement,u=Yt(t);if(c&&!c.shadowRoot&&o(c)===!0)return rr(t);t.assignedSlot?t=t.assignedSlot:!c&&u!==t.ownerDocument?t=u.host:t=c}t=s}if(ra(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return rr(t);return!1},ia=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return dt.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},aa=function(t,n){return!(n.disabled||Xt(n)||Zi(n)||oa(n,t)||Ji(n)||ia(n))},kn=function(t,n){return!(na(n)||Co(n)<0||!aa(t,n))},sa=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},ca=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scopeParent,s=a?o.scopeParent:o,c=Xi(s,a),u=a?e(o.candidates):s;c===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:c,item:o,isScope:a,content:u})}),r.sort(Gi).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},Nn=function(t,n){n=n||{};var r;return n.getShadowRoot?r=Yi([t],n.includeContainer,{filter:kn.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:sa}):r=Ki(t,n.includeContainer,kn.bind(null,n)),ca(r)},la=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return dt.call(t,Kt)===!1?!1:kn(n,t)};function or(e,t,n){let{reference:r,floating:o}=e;const i=yo(t),a=Ui(t),s=zi(a),c=bo(t),u=i==="y",l=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,y=r[s]/2-o[s]/2;let f;switch(c){case"top":f={x:l,y:r.y-o.height};break;case"bottom":f={x:l,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Hi(t)){case"start":f[a]-=y*(n&&u?-1:1);break;case"end":f[a]+=y*(n&&u?-1:1);break}return f}const ua=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:l,y:d}=or(u,r,c),y=r,f={},p=0;for(let v=0;v<s.length;v++){const{name:S,fn:w}=s[v],{x:C,y:g,data:h,reset:x}=await w({x:l,y:d,initialPlacement:r,placement:y,strategy:o,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});l=C??l,d=g??d,f={...f,[S]:{...f[S],...h}},x&&p<=50&&(p++,typeof x=="object"&&(x.placement&&(y=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:l,y:d}=or(u,y,c)),v=-1)}return{x:l,y:d,placement:y,strategy:o,middlewareData:f}};function ko(e){const t=Re(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=se(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=_t(n)!==i||_t(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function jn(e){return ne(e)?e:e.contextElement}function ft(e){const t=jn(e);if(!se(t))return Ke(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=ko(t);let a=(i?_t(n.width):n.width)/r,s=(i?_t(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const fa=Ke(0);function Ro(e){const t=xe(e);return!Ln()||!t.visualViewport?fa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function da(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==xe(e)?!1:t}function rt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=jn(e);let a=Ke(1);t&&(r?ne(r)&&(a=ft(r)):a=ft(e));const s=da(i,n,r)?Ro(i):Ke(0);let c=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,l=o.width/a.x,d=o.height/a.y;if(i){const y=xe(i),f=r&&ne(r)?xe(r):r;let p=y,v=p.frameElement;for(;v&&r&&f!==p;){const S=ft(v),w=v.getBoundingClientRect(),C=Re(v),g=w.left+(v.clientLeft+parseFloat(C.paddingLeft))*S.x,h=w.top+(v.clientTop+parseFloat(C.paddingTop))*S.y;c*=S.x,u*=S.y,l*=S.x,d*=S.y,c+=g,u+=h,p=xe(v),v=p.frameElement}}return xo({width:l,height:d,x:c,y:u})}function pa(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=Ve(r),s=t?an(t.floating):!1;if(r===a||s&&i)return n;let c={scrollLeft:0,scrollTop:0},u=Ke(1);const l=Ke(0),d=se(r);if((d||!d&&!i)&&((Ye(r)!=="body"||At(a))&&(c=sn(r)),se(r))){const y=rt(r);u=ft(r),l.x=y.x+r.clientLeft,l.y=y.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+l.x,y:n.y*u.y-c.scrollTop*u.y+l.y}}function va(e){return Array.from(e.getClientRects())}function Oo(e){return rt(Ve(e)).left+sn(e).scrollLeft}function ha(e){const t=Ve(e),n=sn(e),r=e.ownerDocument.body,o=ut(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ut(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Oo(e);const s=-n.scrollTop;return Re(r).direction==="rtl"&&(a+=ut(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function ma(e,t){const n=xe(e),r=Ve(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;const u=Ln();(!u||u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}function ga(e,t){const n=rt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=se(e)?ft(e):Ke(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:a,height:s,x:c,y:u}}function ir(e,t,n){let r;if(t==="viewport")r=ma(e,n);else if(t==="document")r=ha(Ve(e));else if(ne(t))r=ga(t,n);else{const o=Ro(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return xo(r)}function To(e,t){const n=We(e);return n===t||!ne(n)||_e(n)?!1:Re(n).position==="fixed"||To(n,t)}function ba(e,t){const n=t.get(e);if(n)return n;let r=qe(e,[],!1).filter(s=>ne(s)&&Ye(s)!=="body"),o=null;const i=Re(e).position==="fixed";let a=i?We(e):e;for(;ne(a)&&!_e(a);){const s=Re(a),c=Dn(a);!c&&s.position==="fixed"&&(o=null),(i?!c&&!o:!c&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||At(a)&&!c&&To(e,a))?r=r.filter(l=>l!==a):o=s,a=We(a)}return t.set(e,r),r}function ya(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?an(t)?[]:ba(t,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,l)=>{const d=ir(t,l,o);return u.top=ut(d.top,u.top),u.right=En(d.right,u.right),u.bottom=En(d.bottom,u.bottom),u.left=ut(d.left,u.left),u},ir(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function xa(e){const{width:t,height:n}=ko(e);return{width:t,height:n}}function wa(e,t,n){const r=se(t),o=Ve(t),i=n==="fixed",a=rt(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const c=Ke(0);if(r||!r&&!i)if((Ye(t)!=="body"||At(o))&&(s=sn(t)),r){const d=rt(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=Oo(o));const u=a.left+s.scrollLeft-c.x,l=a.top+s.scrollTop-c.y;return{x:u,y:l,width:a.width,height:a.height}}function hn(e){return Re(e).position==="static"}function ar(e,t){return!se(e)||Re(e).position==="fixed"?null:t?t(e):e.offsetParent}function Po(e,t){const n=xe(e);if(an(e))return n;if(!se(e)){let o=We(e);for(;o&&!_e(o);){if(ne(o)&&!hn(o))return o;o=We(o)}return n}let r=ar(e,t);for(;r&&Ai(r)&&hn(r);)r=ar(r,t);return r&&_e(r)&&hn(r)&&!Dn(r)?n:r||$i(e)||n}const Sa=async function(e){const t=this.getOffsetParent||Po,n=this.getDimensions,r=await n(e.floating);return{reference:wa(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ca(e){return Re(e).direction==="rtl"}const Ea={convertOffsetParentRelativeRectToViewportRelativeRect:pa,getDocumentElement:Ve,getClippingRect:ya,getOffsetParent:Po,getElementRects:Sa,getClientRects:va,getDimensions:xa,getScale:ft,isElement:ne,isRTL:Ca};function ka(e,t){let n=null,r;const o=Ve(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();const{left:u,top:l,width:d,height:y}=e.getBoundingClientRect();if(s||t(),!d||!y)return;const f=Dt(l),p=Dt(o.clientWidth-(u+d)),v=Dt(o.clientHeight-(l+y)),S=Dt(u),C={rootMargin:-f+"px "+-p+"px "+-v+"px "+-S+"px",threshold:ut(0,En(1,c))||1};let g=!0;function h(x){const m=x[0].intersectionRatio;if(m!==c){if(!g)return a();m?a(!1,m):r=setTimeout(()=>{a(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(h,{...C,root:o.ownerDocument})}catch{n=new IntersectionObserver(h,C)}n.observe(e)}return a(!0),i}function Ra(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=jn(e),l=o||i?[...u?qe(u):[],...qe(t)]:[];l.forEach(w=>{o&&w.addEventListener("scroll",n,{passive:!0}),i&&w.addEventListener("resize",n)});const d=u&&s?ka(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(w=>{let[C]=w;C&&C.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var g;(g=f)==null||g.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let p,v=c?rt(e):null;c&&S();function S(){const w=rt(e);v&&(w.x!==v.x||w.y!==v.y||w.width!==v.width||w.height!==v.height)&&n(),v=w,p=requestAnimationFrame(S)}return n(),()=>{var w;l.forEach(C=>{o&&C.removeEventListener("scroll",n),i&&C.removeEventListener("resize",n)}),d==null||d(),(w=f)==null||w.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const Oa=(e,t,n)=>{const r=new Map,o={platform:Ea,...n},i={...o.platform,_c:r};return ua(e,t,{...o,platform:i})};var Wt=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Gt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Gt(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Gt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function Ao(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function sr(e,t){const n=Ao(e);return Math.round(t*n)/n}function cr(e){const t=b.useRef(e);return Wt(()=>{t.current=e}),t}function Ta(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[l,d]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[y,f]=b.useState(r);Gt(y,r)||f(r);const[p,v]=b.useState(null),[S,w]=b.useState(null),C=b.useCallback(P=>{P!==m.current&&(m.current=P,v(P))},[]),g=b.useCallback(P=>{P!==E.current&&(E.current=P,w(P))},[]),h=i||p,x=a||S,m=b.useRef(null),E=b.useRef(null),O=b.useRef(l),D=c!=null,I=cr(c),B=cr(o),$=b.useCallback(()=>{if(!m.current||!E.current)return;const P={placement:t,strategy:n,middleware:y};B.current&&(P.platform=B.current),Oa(m.current,E.current,P).then(W=>{const Y={...W,isPositioned:!0};V.current&&!Gt(O.current,Y)&&(O.current=Y,pi.flushSync(()=>{d(Y)}))})},[y,t,n,B]);Wt(()=>{u===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d(P=>({...P,isPositioned:!1})))},[u]);const V=b.useRef(!1);Wt(()=>(V.current=!0,()=>{V.current=!1}),[]),Wt(()=>{if(h&&(m.current=h),x&&(E.current=x),h&&x){if(I.current)return I.current(h,x,$);$()}},[h,x,$,I,D]);const k=b.useMemo(()=>({reference:m,floating:E,setReference:C,setFloating:g}),[C,g]),N=b.useMemo(()=>({reference:h,floating:x}),[h,x]),j=b.useMemo(()=>{const P={position:n,left:0,top:0};if(!N.floating)return P;const W=sr(N.floating,l.x),Y=sr(N.floating,l.y);return s?{...P,transform:"translate("+W+"px, "+Y+"px)",...Ao(N.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:Y}},[n,s,N.floating,l.x,l.y]);return b.useMemo(()=>({...l,update:$,refs:k,elements:N,floatingStyles:j}),[l,$,k,N,j])}const $o={...vi},Pa=$o.useInsertionEffect,Aa=Pa||(e=>e());function Ue(e){const t=b.useRef(()=>{});return Aa(()=>{t.current=e}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}let lr=0;function Ze(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(lr);const i=()=>e==null?void 0:e.focus({preventScroll:n});o?i():lr=requestAnimationFrame(i)}var Be=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Zt(){return Zt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zt.apply(this,arguments)}let ur=!1,$a=0;const fr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+$a++;function Ia(){const[e,t]=b.useState(()=>ur?fr():void 0);return Be(()=>{e==null&&t(fr())},[]),b.useEffect(()=>{ur=!0},[]),e}const Ma=$o.useId,Fn=Ma||Ia;function Da(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const La=b.createContext(null),Na=b.createContext(null),Io=()=>{var e;return((e=b.useContext(La))==null?void 0:e.id)||null},Bn=()=>b.useContext(Na);function Jt(e){return"data-floating-ui-"+e}function mn(e){const t=b.useRef(e);return Be(()=>{t.current=e}),t}function ja(e,t){var n;let r=[],o=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;o;){const i=e.find(a=>a.id===o);o=i==null?void 0:i.parentId,i&&(r=r.concat(i))}return r}function wt(e,t){let n=e.filter(o=>{var i;return o.parentId===t&&((i=o.context)==null?void 0:i.open)}),r=n;for(;r.length;)r=e.filter(o=>{var i;return(i=r)==null?void 0:i.some(a=>{var s;return o.parentId===a.id&&((s=o.context)==null?void 0:s.open)})}),n=n.concat(r);return n}let st=new WeakMap,Lt=new WeakSet,Nt={},gn=0;const Fa=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Mo=e=>e&&(e.host||Mo(e.parentNode)),Ba=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=Mo(n);return e.contains(r)?r:null}).filter(n=>n!=null);function Wa(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Ba(t,e),s=new Set,c=new Set(a),u=[];Nt[o]||(Nt[o]=new WeakMap);const l=Nt[o];a.forEach(d),y(t),s.clear();function d(f){!f||s.has(f)||(s.add(f),f.parentNode&&d(f.parentNode))}function y(f){!f||c.has(f)||[].forEach.call(f.children,p=>{if(Ye(p)!=="script")if(s.has(p))y(p);else{const v=i?p.getAttribute(i):null,S=v!==null&&v!=="false",w=(st.get(p)||0)+1,C=(l.get(p)||0)+1;st.set(p,w),l.set(p,C),u.push(p),w===1&&S&&Lt.add(p),C===1&&p.setAttribute(o,""),!S&&i&&p.setAttribute(i,"true")}})}return gn++,()=>{u.forEach(f=>{const p=(st.get(f)||0)-1,v=(l.get(f)||0)-1;st.set(f,p),l.set(f,v),p||(!Lt.has(f)&&i&&f.removeAttribute(i),Lt.delete(f)),v||f.removeAttribute(o)}),gn--,gn||(st=new WeakMap,st=new WeakMap,Lt=new WeakSet,Nt={})}}function dr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=Ae(e[0]).body;return Wa(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const Qt=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Do(e,t){const n=Nn(e,Qt());t==="prev"&&n.reverse();const r=n.indexOf(Je(Ae(e)));return n.slice(r+1)[0]}function Ha(){return Do(document.body,"next")}function Va(){return Do(document.body,"prev")}function pr(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!be(n,r)}const Lo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let za;function vr(e){e.key==="Tab"&&(e.target,clearTimeout(za))}const hr=b.forwardRef(function(t,n){const[r,o]=b.useState();Be(()=>(Li()&&o("button"),document.addEventListener("keydown",vr),()=>{document.removeEventListener("keydown",vr)}),[]);const i={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[Jt("focus-guard")]:"",style:Lo};return b.createElement("span",Zt({},t,i))}),Ua=b.createContext(null),qa=()=>b.useContext(Ua),mr=20;let Qe=[];function bn(e){Qe=Qe.filter(n=>n.isConnected);let t=e;if(!(!t||Ye(t)==="body")){if(!la(t,Qt())){const n=Nn(t,Qt())[0];n&&(t=n)}Qe.push(t),Qe.length>mr&&(Qe=Qe.slice(-mr))}}function gr(){return Qe.slice().reverse().find(e=>e.isConnected)}const _a=b.forwardRef(function(t,n){return b.createElement("button",Zt({},t,{type:"button",ref:n,tabIndex:-1,style:Lo}))});function Ka(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:a=0,returnFocus:s=!0,restoreFocus:c=!1,modal:u=!0,visuallyHiddenDismiss:l=!1,closeOnFocusOut:d=!0}=e,{open:y,refs:f,nodeId:p,onOpenChange:v,events:S,dataRef:w,floatingId:C,elements:{domReference:g,floating:h}}=t,x=typeof a=="number"&&a<0,m=Wi(g)&&x,E=Fa()?i:!0,O=mn(o),D=mn(a),I=mn(s),B=Bn(),$=qa(),V=b.useRef(null),k=b.useRef(null),N=b.useRef(!1),j=b.useRef(!1),P=b.useRef(-1),W=$!=null,Y=h==null?void 0:h.firstElementChild,F=(Y==null?void 0:Y.id)===C?Y:h,X=Ue(function(A){return A===void 0&&(A=F),A?Nn(A,Qt()):[]}),ae=Ue(A=>{const M=X(A);return O.current.map(L=>g&&L==="reference"?g:F&&L==="floating"?F:M).filter(Boolean).flat()});b.useEffect(()=>{if(r||!u)return;function A(L){if(L.key==="Tab"){be(F,Je(Ae(F)))&&X().length===0&&!m&&vn(L);const H=ae(),K=et(L);O.current[0]==="reference"&&K===g&&(vn(L),L.shiftKey?Ze(H[H.length-1]):Ze(H[1])),O.current[1]==="floating"&&K===F&&L.shiftKey&&(vn(L),Ze(H[0]))}}const M=Ae(F);return M.addEventListener("keydown",A),()=>{M.removeEventListener("keydown",A)}},[r,g,F,u,O,m,X,ae]),b.useEffect(()=>{if(r||!h)return;function A(M){const L=et(M),K=X().indexOf(L);K!==-1&&(P.current=K)}return h.addEventListener("focusin",A),()=>{h.removeEventListener("focusin",A)}},[r,h,X]),b.useEffect(()=>{if(r||!d)return;function A(){j.current=!0,setTimeout(()=>{j.current=!1})}function M(L){const H=L.relatedTarget;queueMicrotask(()=>{const K=!(be(g,H)||be(h,H)||be(H,h)||be($==null?void 0:$.portalNode,H)||H!=null&&H.hasAttribute(Jt("focus-guard"))||B&&(wt(B.nodesRef.current,p).find(te=>{var G,le;return be((G=te.context)==null?void 0:G.elements.floating,H)||be((le=te.context)==null?void 0:le.elements.domReference,H)})||ja(B.nodesRef.current,p).find(te=>{var G,le;return((G=te.context)==null?void 0:G.elements.floating)===H||((le=te.context)==null?void 0:le.elements.domReference)===H})));if(c&&K&&Je(Ae(F))===Ae(F).body){se(F)&&(F==null||F.focus());const te=P.current,G=X(),le=G[te]||G[G.length-1]||F;se(le)&&le.focus()}(m||!u)&&H&&K&&!j.current&&H!==gr()&&(N.current=!0,v(!1,L))})}if(h&&se(g))return g.addEventListener("focusout",M),g.addEventListener("pointerdown",A),h.addEventListener("focusout",M),()=>{g.removeEventListener("focusout",M),g.removeEventListener("pointerdown",A),h.removeEventListener("focusout",M)}},[r,g,h,F,u,p,B,$,v,d,c,X,m]),b.useEffect(()=>{var A;if(r)return;const M=Array.from(($==null||(A=$.portalNode)==null?void 0:A.querySelectorAll("["+Jt("portal")+"]"))||[]);if(h){const L=[h,...M,V.current,k.current,O.current.includes("reference")||m?g:null].filter(K=>K!=null),H=u||m?dr(L,E,!E):dr(L);return()=>{H()}}},[r,g,h,u,O,$,m,E]),Be(()=>{if(r||!se(F))return;const A=Ae(F),M=Je(A);queueMicrotask(()=>{const L=ae(F),H=D.current,K=(typeof H=="number"?L[H]:H.current)||F,te=be(F,M);!x&&!te&&y&&Ze(K,{preventScroll:K===F})})},[r,y,F,x,ae,D]),Be(()=>{if(r||!F)return;let A=!1;const M=Ae(F),L=Je(M);let K=w.current.openEvent;bn(L);function te(G){let{open:le,reason:Fe,event:oe,nested:ve}=G;le&&(K=oe),Fe==="escape-key"&&f.domReference.current&&bn(f.domReference.current),Fe==="hover"&&oe.type==="mouseleave"&&(N.current=!0),Fe==="outside-press"&&(ve?(N.current=!1,A=!0):N.current=!(Mi(oe)||Di(oe)))}return S.on("openchange",te),()=>{S.off("openchange",te);const G=Je(M),le=be(h,G)||B&&wt(B.nodesRef.current,p).some(ve=>{var Z;return be((Z=ve.context)==null?void 0:Z.elements.floating,G)});(le||K&&["click","mousedown"].includes(K.type))&&f.domReference.current&&bn(f.domReference.current);const oe=gr();I.current&&!N.current&&se(oe)&&(!(oe!==G&&G!==M.body)||le)&&Ze(oe,{cancelPrevious:!1,preventScroll:A})}},[r,h,F,I,w,f,S,B,p]),Be(()=>{if(!r&&$)return $.setFocusManagerState({modal:u,closeOnFocusOut:d,open:y,onOpenChange:v,refs:f}),()=>{$.setFocusManagerState(null)}},[r,$,u,y,v,f,d]),Be(()=>{if(r||!F||typeof MutationObserver!="function"||x)return;const A=()=>{const L=F.getAttribute("tabindex"),H=X(),K=Je(Ae(h)),te=H.indexOf(K);te!==-1&&(P.current=te),O.current.includes("floating")||K!==f.domReference.current&&H.length===0?L!=="0"&&F.setAttribute("tabindex","0"):L!=="-1"&&F.setAttribute("tabindex","-1")};A();const M=new MutationObserver(A);return M.observe(F,{childList:!0,subtree:!0,attributes:!0}),()=>{M.disconnect()}},[r,h,F,f,O,X,x]);function Se(A){return r||!l||!u?null:b.createElement(_a,{ref:A==="start"?V:k,onClick:M=>v(!1,M.nativeEvent)},typeof l=="string"?l:"Dismiss")}const pe=!r&&E&&(u?!m:!0)&&(W||u);return b.createElement(b.Fragment,null,pe&&b.createElement(hr,{"data-type":"inside",ref:$==null?void 0:$.beforeInsideRef,onFocus:A=>{if(u){const L=ae();Ze(o[0]==="reference"?L[0]:L[L.length-1])}else if($!=null&&$.preserveTabOrder&&$.portalNode)if(N.current=!1,pr(A,$.portalNode)){const L=Ha()||g;L==null||L.focus()}else{var M;(M=$.beforeOutsideRef.current)==null||M.focus()}}}),!m&&Se("start"),n,Se("end"),pe&&b.createElement(hr,{"data-type":"inside",ref:$==null?void 0:$.afterInsideRef,onFocus:A=>{if(u)Ze(ae()[0]);else if($!=null&&$.preserveTabOrder&&$.portalNode)if(d&&(N.current=!0),pr(A,$.portalNode)){const L=Va()||g;L==null||L.focus()}else{var M;(M=$.afterOutsideRef.current)==null||M.focus()}}}))}function br(e){return se(e.target)&&e.target.tagName==="BUTTON"}function yr(e){return go(e)}function Ya(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:l=!0}=t,d=b.useRef(),y=b.useRef(!1),f=b.useMemo(()=>({onPointerDown(p){d.current=p.pointerType},onMouseDown(p){const v=d.current;p.button===0&&s!=="click"&&(nr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?r(!1,p.nativeEvent,"click"):(p.preventDefault(),r(!0,p.nativeEvent,"click"))))},onClick(p){const v=d.current;if(s==="mousedown"&&d.current){d.current=void 0;return}nr(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="click")?r(!1,p.nativeEvent,"click"):r(!0,p.nativeEvent,"click"))},onKeyDown(p){d.current=void 0,!(p.defaultPrevented||!l||br(p))&&(p.key===" "&&!yr(i)&&(p.preventDefault(),y.current=!0),p.key==="Enter"&&r(!(n&&c),p.nativeEvent,"click"))},onKeyUp(p){p.defaultPrevented||!l||br(p)||yr(i)||p.key===" "&&y.current&&(y.current=!1,r(!(n&&c),p.nativeEvent,"click"))}}),[o,i,s,u,l,r,n,c]);return b.useMemo(()=>a?{reference:f}:{},[a,f])}const Xa={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Ga={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},xr=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function Za(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:i}=e,{enabled:a=!0,escapeKey:s=!0,outsidePress:c=!0,outsidePressEvent:u="pointerdown",referencePress:l=!1,referencePressEvent:d="pointerdown",ancestorScroll:y=!1,bubbles:f,capture:p}=t,v=Bn(),S=Ue(typeof c=="function"?c:()=>!1),w=typeof c=="function"?S:c,C=b.useRef(!1),g=b.useRef(!1),{escapeKey:h,outsidePress:x}=xr(f),{escapeKey:m,outsidePress:E}=xr(p),O=Ue(k=>{var N;if(!n||!a||!s||k.key!=="Escape")return;const j=(N=i.current.floatingContext)==null?void 0:N.nodeId,P=v?wt(v.nodesRef.current,j):[];if(!h&&(k.stopPropagation(),P.length>0)){let W=!0;if(P.forEach(Y=>{var F;if((F=Y.context)!=null&&F.open&&!Y.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}r(!1,ji(k)?k.nativeEvent:k,"escape-key")}),D=Ue(k=>{var N;const j=()=>{var P;O(k),(P=et(k))==null||P.removeEventListener("keydown",j)};(N=et(k))==null||N.addEventListener("keydown",j)}),I=Ue(k=>{var N;const j=C.current;C.current=!1;const P=g.current;if(g.current=!1,u==="click"&&P||j||typeof w=="function"&&!w(k))return;const W=et(k),Y="["+Jt("inert")+"]",F=Ae(o.floating).querySelectorAll(Y);let X=ne(W)?W:null;for(;X&&!_e(X);){const A=We(X);if(_e(A)||!ne(A))break;X=A}if(F.length&&ne(W)&&!Fi(W)&&!be(W,o.floating)&&Array.from(F).every(A=>!be(X,A)))return;if(se(W)&&V){const A=W.clientWidth>0&&W.scrollWidth>W.clientWidth,M=W.clientHeight>0&&W.scrollHeight>W.clientHeight;let L=M&&k.offsetX>W.clientWidth;if(M&&Re(W).direction==="rtl"&&(L=k.offsetX<=W.offsetWidth-W.clientWidth),L||A&&k.offsetY>W.clientHeight)return}const ae=(N=i.current.floatingContext)==null?void 0:N.nodeId,Se=v&&wt(v.nodesRef.current,ae).some(A=>{var M;return pn(k,(M=A.context)==null?void 0:M.elements.floating)});if(pn(k,o.floating)||pn(k,o.domReference)||Se)return;const pe=v?wt(v.nodesRef.current,ae):[];if(pe.length>0){let A=!0;if(pe.forEach(M=>{var L;if((L=M.context)!=null&&L.open&&!M.context.dataRef.current.__outsidePressBubbles){A=!1;return}}),!A)return}r(!1,k,"outside-press")}),B=Ue(k=>{var N;const j=()=>{var P;I(k),(P=et(k))==null||P.removeEventListener(u,j)};(N=et(k))==null||N.addEventListener(u,j)});b.useEffect(()=>{if(!n||!a)return;i.current.__escapeKeyBubbles=h,i.current.__outsidePressBubbles=x;function k(P){r(!1,P,"ancestor-scroll")}const N=Ae(o.floating);s&&N.addEventListener("keydown",m?D:O,m),w&&N.addEventListener(u,E?B:I,E);let j=[];return y&&(ne(o.domReference)&&(j=qe(o.domReference)),ne(o.floating)&&(j=j.concat(qe(o.floating))),!ne(o.reference)&&o.reference&&o.reference.contextElement&&(j=j.concat(qe(o.reference.contextElement)))),j=j.filter(P=>{var W;return P!==((W=N.defaultView)==null?void 0:W.visualViewport)}),j.forEach(P=>{P.addEventListener("scroll",k,{passive:!0})}),()=>{s&&N.removeEventListener("keydown",m?D:O,m),w&&N.removeEventListener(u,E?B:I,E),j.forEach(P=>{P.removeEventListener("scroll",k)})}},[i,o,s,w,u,n,r,y,a,h,x,O,m,D,I,E,B]),b.useEffect(()=>{C.current=!1},[w,u]);const $=b.useMemo(()=>({onKeyDown:O,[Xa[d]]:k=>{l&&r(!1,k.nativeEvent,"reference-press")}}),[O,r,l,d]),V=b.useMemo(()=>({onKeyDown:O,onMouseDown(){g.current=!0},onMouseUp(){g.current=!0},[Ga[u]]:()=>{C.current=!0}}),[O,u]);return b.useMemo(()=>a?{reference:$,floating:V}:{},[a,$,V])}function Ja(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Fn(),i=b.useRef({}),[a]=b.useState(()=>Da()),s=Io()!=null,[c,u]=b.useState(r.reference),l=Ue((f,p,v)=>{i.current.openEvent=f?p:void 0,a.emit("openchange",{open:f,event:p,reason:v,nested:s}),n==null||n(f,p,v)}),d=b.useMemo(()=>({setPositionReference:u}),[]),y=b.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return b.useMemo(()=>({dataRef:i,open:t,onOpenChange:l,elements:y,events:a,floatingId:o,refs:d}),[t,l,y,a,o,d])}function Qa(e){e===void 0&&(e={});const{nodeId:t}=e,n=Ja({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[i,a]=b.useState(null),[s,c]=b.useState(null),l=(o==null?void 0:o.reference)||i,d=b.useRef(null),y=Bn();Be(()=>{l&&(d.current=l)},[l]);const f=Ta({...e,elements:{...o,...s&&{reference:s}}}),p=b.useCallback(g=>{const h=ne(g)?{getBoundingClientRect:()=>g.getBoundingClientRect(),contextElement:g}:g;c(h),f.refs.setReference(h)},[f.refs]),v=b.useCallback(g=>{(ne(g)||g===null)&&(d.current=g,a(g)),(ne(f.refs.reference.current)||f.refs.reference.current===null||g!==null&&!ne(g))&&f.refs.setReference(g)},[f.refs]),S=b.useMemo(()=>({...f.refs,setReference:v,setPositionReference:p,domReference:d}),[f.refs,v,p]),w=b.useMemo(()=>({...f.elements,domReference:l}),[f.elements,l]),C=b.useMemo(()=>({...f,...r,refs:S,elements:w,nodeId:t}),[f,S,w,t,r]);return Be(()=>{r.dataRef.current.floatingContext=C;const g=y==null?void 0:y.nodesRef.current.find(h=>h.id===t);g&&(g.context=C)}),b.useMemo(()=>({...f,context:C,refs:S,elements:w}),[f,S,w,C])}const wr="active",Sr="selected";function yn(e,t,n){const r=new Map,o=n==="item";let i=e;if(o&&e){const{[wr]:a,[Sr]:s,...c}=e;i=c}return{...n==="floating"&&{tabIndex:-1},...i,...t.map(a=>{const s=a?a[n]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(c=>{let[u,l]=c;if(!(o&&[wr,Sr].includes(u)))if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof l=="function"){var d;(d=r.get(u))==null||d.push(l),a[u]=function(){for(var y,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(y=r.get(u))==null?void 0:y.map(S=>S(...p)).find(S=>S!==void 0)}}}else a[u]=l}),a),{})}}function es(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),n=e.map(s=>s==null?void 0:s.floating),r=e.map(s=>s==null?void 0:s.item),o=b.useCallback(s=>yn(s,e,"reference"),t),i=b.useCallback(s=>yn(s,e,"floating"),n),a=b.useCallback(s=>yn(s,e,"item"),r);return b.useMemo(()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:a}),[o,i,a])}const ts=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function ns(e,t){var n;t===void 0&&(t={});const{open:r,floatingId:o}=e,{enabled:i=!0,role:a="dialog"}=t,s=(n=ts.get(a))!=null?n:a,c=Fn(),l=Io()!=null,d=b.useMemo(()=>s==="tooltip"||a==="label"?{["aria-"+(a==="label"?"labelledby":"describedby")]:r?o:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":r?o:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:c},...s==="menu"&&l&&{role:"menuitem"},...a==="select"&&{"aria-autocomplete":"none"},...a==="combobox"&&{"aria-autocomplete":"list"}},[s,o,l,r,c,a]),y=b.useMemo(()=>{const p={id:o,...s&&{role:s}};return s==="tooltip"||a==="label"?p:{...p,...s==="menu"&&{"aria-labelledby":c}}},[s,o,c,a]),f=b.useCallback(p=>{let{active:v,selected:S}=p;const w={role:"option",...v&&{id:o+"-option"}};switch(a){case"select":return{...w,"aria-selected":v&&S};case"combobox":return{...w,...v&&{"aria-selected":!0}}}return{}},[o,a]);return b.useMemo(()=>i?{reference:d,floating:y,item:f}:{},[i,d,y,f])}const Cr=Q.button`
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
`,rs=Q(lt)`
  ${Mn}

  color: ${({theme:e})=>e.global.text.color.white};

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,os=Q.p`
  margin-bottom: 0;
`,Er=Q.svg`
  width: 1.75rem;
  height: 1.75rem;

  fill: transparent;
  stroke: currentColor;
`,is=Q.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);
  }
`,as=Q.ul`
  padding: ${({theme:e})=>e.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({theme:e})=>e.pageBackground};
`,kr=Q.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(3)};
  }
`,ss=Q(lt)`
  ${Mn}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,Rr=Q.svg`
  width: 1rem;
  height: 1rem;

  fill: transparent;
  stroke: currentColor;
`,cs=()=>{const e=Pt(on),t=fo(),n=hi(),r=()=>{t(mi()),n("/login"),i(!1)},[o,i]=b.useState(!1),{refs:a,floatingStyles:s,context:c}=Qa({open:o,onOpenChange:i,whileElementsMounted:Ra}),u=Ya(c),l=Za(c),d=ns(c,{role:"menu"}),{getReferenceProps:y,getFloatingProps:f}=es([u,l,d]),p=Fn();return T.jsxs(T.Fragment,{children:[e?T.jsxs(Cr,{ref:a.setReference,...y(),children:[T.jsx(os,{children:e.firstName}),T.jsx(Er,{children:T.jsx("use",{href:`${ct}#user`})}),T.jsx(is,{className:o?"open":"",children:T.jsx("use",{href:`${ct}#arrow-down`})})]}):T.jsxs(rs,{to:"/login",children:["Log in",T.jsx(Er,{children:T.jsx("use",{href:`${ct}#user`})})]}),o&&T.jsx(Ka,{context:c,modal:!1,initialFocus:-1,children:T.jsx("div",{className:"Popover",ref:a.setFloating,style:s,"aria-labelledby":p,...f(),children:T.jsxs(as,{children:[T.jsx(kr,{role:"menuitem",children:T.jsxs(Cr,{onClick:r,className:"logout",children:[T.jsx(Rr,{children:T.jsx("use",{href:`${ct}#logout`})}),"Log out"]})}),T.jsx(kr,{role:"menuitem",children:T.jsxs(ss,{to:"/settings",children:[T.jsx(Rr,{children:T.jsx("use",{href:`${ct}#settings`})}),"Settings"]})})]})})})]})},ls=({isMobile:e,handleClick:t,mobileMenu:n})=>(console.log("isMobile :>> ",e),T.jsx(Ti,{children:T.jsxs(Pi,{children:[e&&T.jsx(ki,{onClick:()=>t(),mobileMenu:n}),T.jsx(cs,{})]})}));/*! *****************************************************************************
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
***************************************************************************** */var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ye.apply(this,arguments)};function ot(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function de(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rn.apply(this,arguments)}function Wn(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var us=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,fs=Wn(function(e){return us.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function ds(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function ps(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var vs=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ps(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=ds(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),fe="-ms-",en="-moz-",q="-webkit-",No="comm",Hn="rule",Vn="decl",hs="@import",jo="@keyframes",ms=Math.abs,cn=String.fromCharCode,gs=Object.assign;function bs(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Fo(e){return e.trim()}function ys(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,n){return e.replace(t,n)}function On(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Et(e,t,n){return e.slice(t,n)}function Me(e){return e.length}function zn(e){return e.length}function jt(e,t){return t.push(e),e}function xs(e,t){return e.map(t).join("")}var ln=1,pt=1,Bo=0,ge=0,re=0,bt="";function un(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ln,column:pt,length:a,return:""}}function yt(e,t){return gs(un("",null,null,"",null,null,0),e,{length:-e.length},t)}function ws(){return re}function Ss(){return re=ge>0?ue(bt,--ge):0,pt--,re===10&&(pt=1,ln--),re}function we(){return re=ge<Bo?ue(bt,ge++):0,pt++,re===10&&(pt=1,ln++),re}function Le(){return ue(bt,ge)}function Ht(){return ge}function $t(e,t){return Et(bt,e,t)}function kt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wo(e){return ln=pt=1,Bo=Me(bt=e),ge=0,[]}function Ho(e){return bt="",e}function Vt(e){return Fo($t(ge-1,Tn(e===91?e+2:e===40?e+1:e)))}function Cs(e){for(;(re=Le())&&re<33;)we();return kt(e)>2||kt(re)>3?"":" "}function Es(e,t){for(;--t&&we()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return $t(e,Ht()+(t<6&&Le()==32&&we()==32))}function Tn(e){for(;we();)switch(re){case e:return ge;case 34:case 39:e!==34&&e!==39&&Tn(re);break;case 40:e===41&&Tn(e);break;case 92:we();break}return ge}function ks(e,t){for(;we()&&e+re!==57;)if(e+re===84&&Le()===47)break;return"/*"+$t(t,ge-1)+"*"+cn(e===47?e:we())}function Rs(e){for(;!kt(Le());)we();return $t(e,ge)}function Or(e){return Ho(zt("",null,null,null,[""],e=Wo(e),0,[0],e))}function zt(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,d=a,y=0,f=0,p=0,v=1,S=1,w=1,C=0,g="",h=o,x=i,m=r,E=g;S;)switch(p=C,C=we()){case 40:if(p!=108&&ue(E,d-1)==58){On(E+=_(Vt(C),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:E+=Vt(C);break;case 9:case 10:case 13:case 32:E+=Cs(p);break;case 92:E+=Es(Ht()-1,7);continue;case 47:switch(Le()){case 42:case 47:jt(Os(ks(we(),Ht()),t,n),c);break;default:E+="/"}break;case 123*v:s[u++]=Me(E)*w;case 125*v:case 59:case 0:switch(C){case 0:case 125:S=0;case 59+l:f>0&&Me(E)-d&&jt(f>32?Pr(E+";",r,n,d-1):Pr(_(E," ","")+";",r,n,d-2),c);break;case 59:E+=";";default:if(jt(m=Tr(E,t,n,u,l,o,s,g,h=[],x=[],d),i),C===123)if(l===0)zt(E,t,m,m,h,i,d,s,x);else switch(y===99&&ue(E,3)===110?100:y){case 100:case 109:case 115:zt(e,m,m,r&&jt(Tr(e,m,m,0,0,o,s,g,o,h=[],d),x),o,x,d,s,r?h:x);break;default:zt(E,m,m,m,[""],x,0,s,x)}}u=l=f=0,v=w=1,g=E="",d=a;break;case 58:d=1+Me(E),f=p;default:if(v<1){if(C==123)--v;else if(C==125&&v++==0&&Ss()==125)continue}switch(E+=cn(C),C*v){case 38:w=l>0?1:(E+="\f",-1);break;case 44:s[u++]=(Me(E)-1)*w,w=1;break;case 64:Le()===45&&(E+=Vt(we())),y=Le(),l=d=Me(g=E+=Rs(Ht())),C++;break;case 45:p===45&&Me(E)==2&&(v=0)}}return i}function Tr(e,t,n,r,o,i,a,s,c,u,l){for(var d=o-1,y=o===0?i:[""],f=zn(y),p=0,v=0,S=0;p<r;++p)for(var w=0,C=Et(e,d+1,d=ms(v=a[p])),g=e;w<f;++w)(g=Fo(v>0?y[w]+" "+C:_(C,/&\f/g,y[w])))&&(c[S++]=g);return un(e,t,n,o===0?Hn:s,c,u,l)}function Os(e,t,n){return un(e,t,n,No,cn(ws()),Et(e,2,-2),0)}function Pr(e,t,n,r){return un(e,t,n,Vn,Et(e,0,r),Et(e,r+1,-1),r)}function tt(e,t){for(var n="",r=zn(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Ar(e,t,n,r){switch(e.type){case hs:case Vn:return e.return=e.return||e.value;case No:return"";case jo:return e.return=e.value+"{"+tt(e.children,r)+"}";case Hn:e.value=e.props.join(",")}return Me(n=tt(e.children,r))?e.return=e.value+"{"+n+"}":""}function $r(e){var t=zn(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function Ts(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ps=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}},As=function(t,n,r){for(var o=0,i=0;o=i,i=Le(),o===38&&i===12&&(n[r]=1),!kt(i);)we();return $t(t,ge)},$s=function(t,n){var r=-1,o=44;do switch(kt(o)){case 0:o===38&&Le()===12&&(n[r]=1),t[r]+=As(ge-1,n,r);break;case 2:t[r]+=Vt(o);break;case 4:if(o===44){t[++r]=Le()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=cn(o)}while(o=we());return t},Is=function(t,n){return Ho($s(Wo(t),n))},Ir=new WeakMap,Ms=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ir.get(r))&&!o){Ir.set(t,!0);for(var i=[],a=Is(n,i),s=r.props,c=0,u=0;c<a.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},Ds=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Vo(e,t){switch(bs(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+en+e+fe+e+e;case 6828:case 4268:return q+e+fe+e+e;case 6165:return q+e+fe+"flex-"+e+e;case 5187:return q+e+_(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return q+e+fe+"flex-item-"+_(e,/flex-|-self/,"")+e;case 4675:return q+e+fe+"flex-line-pack"+_(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+fe+_(e,"shrink","negative")+e;case 5292:return q+e+fe+_(e,"basis","preferred-size")+e;case 6060:return q+"box-"+_(e,"-grow","")+q+e+fe+_(e,"grow","positive")+e;case 4554:return q+_(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Me(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+en+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~On(e,"stretch")?Vo(_(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,Me(e)-3-(~On(e,"!important")&&10))){case 107:return _(e,":",":"+q)+e;case 101:return _(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(ue(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+fe+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return q+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+fe+e+e}return e}var Ls=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Vn:t.return=Vo(t.value,t.length);break;case jo:return tt([yt(t,{value:_(t.value,"@","@"+q)})],o);case Hn:if(t.length)return xs(t.props,function(i){switch(ys(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return tt([yt(t,{props:[_(i,/:(read-\w+)/,":"+en+"$1")]})],o);case"::placeholder":return tt([yt(t,{props:[_(i,/:(plac\w+)/,":"+q+"input-$1")]}),yt(t,{props:[_(i,/:(plac\w+)/,":"+en+"$1")]}),yt(t,{props:[_(i,/:(plac\w+)/,fe+"input-$1")]})],o)}return""})}},Ut=typeof document<"u",Ns=Ut?void 0:Ps(function(){return Wn(function(){var e={};return function(t){return e[t]}})}),js=[Ls],zo=function(t){var n=t.key;if(Ut&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var x=h.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||js,i={},a,s=[];Ut&&(a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var x=h.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)i[x[m]]=!0;s.push(h)}));var c,u=[Ms,Ds];if(Ut){var l,d=[Ar,Ts(function(h){l.insert(h)})],y=$r(u.concat(o,d)),f=function(x){return tt(Or(x),y)};c=function(x,m,E,O){l=E,f(x?x+"{"+m.styles+"}":m.styles),O&&(g.inserted[m.name]=!0)}}else{var p=[Ar],v=$r(u.concat(o,p)),S=function(x){return tt(Or(x),v)},w=Ns(o)(n),C=function(x,m){var E=m.name;return w[E]===void 0&&(w[E]=S(x?x+"{"+m.styles+"}":m.styles)),w[E]};c=function(x,m,E,O){var D=m.name,I=C(x,m);if(g.compat===void 0)return O&&(g.inserted[D]=!0),I;if(O)g.inserted[D]=I;else return I}}var g={key:n,sheet:new vs({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(s),g},Fs=typeof document<"u",Mr=function(t){return t()},Bs=b.useInsertionEffect?b.useInsertionEffect:!1,Ws=Fs&&Bs||Mr,Hs=typeof document<"u",tn=b.createContext(typeof HTMLElement<"u"?zo({key:"css"}):null);tn.Provider;var Uo=function(t){return b.forwardRef(function(n,r){var o=b.useContext(tn);return t(n,o,r)})};Hs||(Uo=function(t){return function(n){var r=b.useContext(tn);return r===null?(r=zo({key:"css"}),b.createElement(tn.Provider,{value:r},t(n,r))):t(n,r)}});var Vs=b.createContext({}),Pn=typeof document<"u";function zs(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var qo=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Pn===!1&&t.compat!==void 0)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Us=function(t,n,r){qo(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",a=n;do{var s=t.insert(n===a?"."+o:"",a,t.sheet,!0);!Pn&&s!==void 0&&(i+=s),a=a.next}while(a!==void 0);if(!Pn&&i.length!==0)return i}};function qs(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var _s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ks=/[A-Z]|^ms/g,Ys=/_EMO_([^_]+?)_([^]*?)_EMO_/g,_o=function(t){return t.charCodeAt(1)===45},Dr=function(t){return t!=null&&typeof t!="boolean"},xn=Wn(function(e){return _o(e)?e:e.replace(Ks,"-$&").toLowerCase()}),Lr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Ys,function(r,o,i){return De={name:o,styles:i,next:De},o})}return _s[t]!==1&&!_o(t)&&typeof n=="number"&&n!==0?n+"px":n};function Rt(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return De={name:n.name,styles:n.styles,next:De},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)De={name:r.name,styles:r.styles,next:De},r=r.next;var o=n.styles+";";return o}return Xs(e,t,n)}case"function":{if(e!==void 0){var i=De,a=n(e);return De=i,Rt(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Xs(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Rt(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":Dr(a)&&(r+=xn(i)+":"+Lr(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)Dr(a[s])&&(r+=xn(i)+":"+Lr(i,a[s])+";");else{var c=Rt(e,t,a);switch(i){case"animation":case"animationName":{r+=xn(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Nr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,De,Gs=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";De=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Rt(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Rt(r,n,t[s]),o&&(i+=a[s]);Nr.lastIndex=0;for(var c="",u;(u=Nr.exec(i))!==null;)c+="-"+u[1];var l=qs(i)+c;return{name:l,styles:i,next:De}},Zs=fs,Js=function(t){return t!=="theme"},jr=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Zs:Js},Fr=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},Qs=typeof document<"u",ec=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;qo(n,r,o);var i=Ws(function(){return Us(n,r,o)});if(!Qs&&i!==void 0){for(var a,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return b.createElement("style",(a={},a["data-emotion"]=n.key+" "+s,a.dangerouslySetInnerHTML={__html:i},a.nonce=n.sheet.nonce,a))}return null},tc=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Fr(t,n,r),c=s||jr(o),u=!c("as");return function(){var l=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)d.push.apply(d,l);else{d.push(l[0][0]);for(var y=l.length,f=1;f<y;f++)d.push(l[f],l[0][f])}var p=Uo(function(v,S,w){var C=u&&v.as||o,g="",h=[],x=v;if(v.theme==null){x={};for(var m in v)x[m]=v[m];x.theme=b.useContext(Vs)}typeof v.className=="string"?g=zs(S.registered,h,v.className):v.className!=null&&(g=v.className+" ");var E=Gs(d.concat(h),S.registered,x);g+=S.key+"-"+E.name,a!==void 0&&(g+=" "+a);var O=u&&s===void 0?jr(C):c,D={};for(var I in v)u&&I==="as"||O(I)&&(D[I]=v[I]);return D.className=g,D.ref=w,b.createElement(b.Fragment,null,b.createElement(ec,{cache:S,serialized:E,isStringTag:typeof C=="string"}),b.createElement(C,D))});return p.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(v,S){return e(v,Rn({},n,S,{shouldForwardProp:Fr(p,S,!0)})).apply(void 0,d)},p}},nc=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ce=tc.bind();nc.forEach(function(e){ce[e]=ce(e)});var Ko={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ko);var ie=Ko.exports,rc=R.createContext(void 0),oc=function(){var e=R.useContext(rc);return e},ic=function(e){var t=R.useState(!!e&&typeof window<"u"&&window.matchMedia(e).matches),n=t[0],r=t[1];return R.useEffect(function(){if(e){var o=window.matchMedia(e),i=function(){o.matches!==n&&r(o.matches)};return i(),o.addEventListener("change",i),function(){return o.removeEventListener("change",i)}}},[n,e]),n},J={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},U={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},ac=ce.div(Br||(Br=de([`
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
`]))),Br,sc={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},cc=ce.aside(Wr||(Wr=de([`
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
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},J.rtl,J.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},J.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},J.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},J.rtl,function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},J.toggled,function(e){var t=e.rootStyles;return t}),lc=ce.div(Hr||(Hr=de([`
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
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),uc=ce.img(Vr||(Vr=de([`
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
`])),J.image),fn=R.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),fc=R.forwardRef(function(e,t){var n,r=e.collapsed,o=e.toggled,i=e.onBackdropClick,a=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,d=e.defaultCollapsed,y=e.className,f=e.children,p=e.breakPoint,v=e.customBreakPoint,S=e.backgroundColor,w=S===void 0?"rgb(249, 249, 249, 0.7)":S,C=e.transitionDuration,g=C===void 0?300:C,h=e.image,x=e.rtl,m=e.rootStyles,E=ot(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),O=function(){if(v)return"(max-width: ".concat(v,")");if(p)return["xs","sm","md","lg","xl","xxl"].includes(p)?"(max-width: ".concat(sc[p],")"):p==="always"||p==="all"?(p==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(p,")")},D=R.useRef();D.current=function(W){a==null||a(W)};var I=ic(O()),B=R.useState(!1),$=B[0],V=B[1],k=oc(),N=r??(!$&&d?!0:k==null?void 0:k.collapsed),j=o??(k==null?void 0:k.toggled),P=function(){i==null||i(),k==null||k.updateSidebarState({toggled:!1})};return R.useEffect(function(){var W;(W=D.current)===null||W===void 0||W.call(D,I)},[I]),R.useEffect(function(){k==null||k.updateSidebarState({broken:I,rtl:x,transitionDuration:g})},[I,k==null?void 0:k.updateSidebarState,x,g]),R.useEffect(function(){$||(k==null||k.updateSidebarState({collapsed:d}),V(!0))},[d,$,k==null?void 0:k.updateSidebarState]),R.createElement(fn.Provider,{value:{collapsed:N,toggled:j,rtl:x,transitionDuration:g}},R.createElement(cc,ye({ref:t,"data-testid":"".concat(J.root,"-test-id"),rtl:x,rootStyles:m,width:c,collapsedWidth:l,transitionDuration:g,className:ie(J.root,(n={},n[J.collapsed]=N,n[J.toggled]=j,n[J.broken]=I,n[J.rtl]=x,n),y)},E),R.createElement(lc,{"data-testid":"".concat(J.container,"-test-id"),className:J.container,backgroundColor:w},f),h&&R.createElement(uc,{"data-testid":"".concat(J.image,"-test-id"),src:h,alt:"sidebar background",className:J.image}),I&&j&&R.createElement(ac,{"data-testid":"".concat(J.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:P,onKeyPress:P,className:J.backdrop})))}),Wr,Hr,Vr,Yo=ce.ul(zr||(zr=de([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),zr,dc=ce.nav(Ur||(Ur=de([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),U.root,function(e){var t=e.rootStyles;return t}),Xo=R.createContext(void 0),nn=R.createContext(0),pc=function(e,t){var n=e.children,r=e.className,o=e.transitionDuration,i=o===void 0?300:o,a=e.closeOnClick,s=a===void 0?!1:a,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,d=ot(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),y=R.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return R.createElement(Xo.Provider,{value:y},R.createElement(nn.Provider,{value:0},R.createElement(dc,ye({ref:t,className:ie(U.root,r),rootStyles:c},d),R.createElement(Yo,null,n))))},vc=R.forwardRef(pc),Ur,Un=function(){var e=R.useContext(Xo);if(e===void 0)throw new Error("Menu Component is required!");return e},hc=ce.div(qr||(qr=de([`
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
      `},function(e){var t=e.rootStyles;return t}),mc=function(e,t){var n=e.children,r=e.open,o=e.openWhenCollapsed,i=e.firstLevel,a=e.collapsed,s=e.defaultOpen,c=ot(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=Un().transitionDuration,l=R.useState(s)[0];return R.createElement(hc,ye({"data-testid":"".concat(U.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:a,open:r,openWhenCollapsed:o,transitionDuration:u,defaultOpen:l},c),R.createElement(Yo,null,n))},gc=R.forwardRef(mc),qr,Go=ce.span(_r||(_r=de([`
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
`])),function(e){var t=e.rootStyles;return t}),_r,Zo=ce.span(Kr||(Kr=de([`
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
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),Kr,Jo=ce.span(Yr||(Yr=de([`
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
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Xr,bc=ce.span(Gr||(Gr=de([`
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
    
    `)},function(e){var t=e.rootStyles;return t}),yc=ce.span(Zr||(Zr=de([`
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
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),xc=ce.span(Jr||(Jr=de([`
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
`]))),Gr,Zr,Jr,he="top",Oe="bottom",Te="right",me="left",qn="auto",It=[he,Oe,Te,me],vt="start",Ot="end",wc="clippingParents",ei="viewport",xt="popper",Sc="reference",Qr=It.reduce(function(e,t){return e.concat([t+"-"+vt,t+"-"+Ot])},[]),ti=[].concat(It,[qn]).reduce(function(e,t){return e.concat([t,t+"-"+vt,t+"-"+Ot])},[]),Cc="beforeRead",Ec="read",kc="afterRead",Rc="beforeMain",Oc="main",Tc="afterMain",Pc="beforeWrite",Ac="write",$c="afterWrite",Ic=[Cc,Ec,kc,Rc,Oc,Tc,Pc,Ac,$c];function je(e){return e?(e.nodeName||"").toLowerCase():null}function Pe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function it(e){var t=Pe(e).Element;return e instanceof t||e instanceof Element}function ke(e){var t=Pe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function _n(e){if(typeof ShadowRoot>"u")return!1;var t=Pe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Mc(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!ke(i)||!je(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function Dc(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(c,u){return c[u]="",c},{});!ke(o)||!je(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}var Lc={name:"applyStyles",enabled:!0,phase:"write",fn:Mc,effect:Dc,requires:["computeStyles"]};function Ne(e){return e.split("-")[0]}var nt=Math.max,rn=Math.min,ht=Math.round;function An(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ni(){return!/^((?!chrome|android).)*safari/i.test(An())}function mt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&ke(e)&&(o=e.offsetWidth>0&&ht(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ht(r.height)/e.offsetHeight||1);var a=it(e)?Pe(e):window,s=a.visualViewport,c=!ni()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/o,l=(r.top+(c&&s?s.offsetTop:0))/i,d=r.width/o,y=r.height/i;return{width:d,height:y,top:l,right:u+d,bottom:l+y,left:u,x:u,y:l}}function Kn(e){var t=mt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function ri(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&_n(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function He(e){return Pe(e).getComputedStyle(e)}function Nc(e){return["table","td","th"].indexOf(je(e))>=0}function Xe(e){return((it(e)?e.ownerDocument:e.document)||window.document).documentElement}function dn(e){return je(e)==="html"?e:e.assignedSlot||e.parentNode||(_n(e)?e.host:null)||Xe(e)}function eo(e){return!ke(e)||He(e).position==="fixed"?null:e.offsetParent}function jc(e){var t=/firefox/i.test(An()),n=/Trident/i.test(An());if(n&&ke(e)){var r=He(e);if(r.position==="fixed")return null}var o=dn(e);for(_n(o)&&(o=o.host);ke(o)&&["html","body"].indexOf(je(o))<0;){var i=He(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function Mt(e){for(var t=Pe(e),n=eo(e);n&&Nc(n)&&He(n).position==="static";)n=eo(n);return n&&(je(n)==="html"||je(n)==="body"&&He(n).position==="static")?t:n||jc(e)||t}function Yn(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function St(e,t,n){return nt(e,rn(t,n))}function Fc(e,t,n){var r=St(e,t,n);return r>n?n:r}function oi(){return{top:0,right:0,bottom:0,left:0}}function ii(e){return Object.assign({},oi(),e)}function ai(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var Bc=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ii(typeof t!="number"?t:ai(t,It))};function Wc(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Ne(n.placement),c=Yn(s),u=[me,Te].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var d=Bc(o.padding,n),y=Kn(i),f=c==="y"?he:me,p=c==="y"?Oe:Te,v=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],S=a[c]-n.rects.reference[c],w=Mt(i),C=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0,g=v/2-S/2,h=d[f],x=C-y[l]-d[p],m=C/2-y[l]/2+g,E=St(h,m,x),O=c;n.modifiersData[r]=(t={},t[O]=E,t.centerOffset=E-m,t)}}function Hc(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||ri(t.elements.popper,o)&&(t.elements.arrow=o))}var Vc={name:"arrow",enabled:!0,phase:"main",fn:Wc,effect:Hc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function gt(e){return e.split("-")[1]}var zc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Uc(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:ht(t*o)/o||0,y:ht(n*o)/o||0}}function to(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,y=a.x,f=y===void 0?0:y,p=a.y,v=p===void 0?0:p,S=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=S.x,v=S.y;var w=a.hasOwnProperty("x"),C=a.hasOwnProperty("y"),g=me,h=he,x=window;if(u){var m=Mt(n),E="clientHeight",O="clientWidth";if(m===Pe(n)&&(m=Xe(n),He(m).position!=="static"&&s==="absolute"&&(E="scrollHeight",O="scrollWidth")),m=m,o===he||(o===me||o===Te)&&i===Ot){h=Oe;var D=d&&m===x&&x.visualViewport?x.visualViewport.height:m[E];v-=D-r.height,v*=c?1:-1}if(o===me||(o===he||o===Oe)&&i===Ot){g=Te;var I=d&&m===x&&x.visualViewport?x.visualViewport.width:m[O];f-=I-r.width,f*=c?1:-1}}var B=Object.assign({position:s},u&&zc),$=l===!0?Uc({x:f,y:v}):{x:f,y:v};if(f=$.x,v=$.y,c){var V;return Object.assign({},B,(V={},V[h]=C?"0":"",V[g]=w?"0":"",V.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",V))}return Object.assign({},B,(t={},t[h]=C?v+"px":"",t[g]=w?f+"px":"",t.transform="",t))}function qc(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:Ne(t.placement),variation:gt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,to(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,to(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var _c={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:qc,data:{}},Ft={passive:!0};function Kc(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,c=Pe(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,Ft)}),s&&c.addEventListener("resize",n.update,Ft),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,Ft)}),s&&c.removeEventListener("resize",n.update,Ft)}}var Yc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Kc,data:{}},Xc={left:"right",right:"left",bottom:"top",top:"bottom"};function qt(e){return e.replace(/left|right|bottom|top/g,function(t){return Xc[t]})}var Gc={start:"end",end:"start"};function no(e){return e.replace(/start|end/g,function(t){return Gc[t]})}function Xn(e){var t=Pe(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Gn(e){return mt(Xe(e)).left+Xn(e).scrollLeft}function Zc(e,t){var n=Pe(e),r=Xe(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=ni();(u||!u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+Gn(e),y:c}}function Jc(e){var t,n=Xe(e),r=Xn(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=nt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=nt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Gn(e),c=-r.scrollTop;return He(o||n).direction==="rtl"&&(s+=nt(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function Zn(e){var t=He(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function si(e){return["html","body","#document"].indexOf(je(e))>=0?e.ownerDocument.body:ke(e)&&Zn(e)?e:si(dn(e))}function Ct(e,t){var n;t===void 0&&(t=[]);var r=si(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=Pe(r),a=o?[i].concat(i.visualViewport||[],Zn(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Ct(dn(a)))}function $n(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Qc(e,t){var n=mt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ro(e,t,n){return t===ei?$n(Zc(e,n)):it(t)?Qc(t,n):$n(Jc(Xe(e)))}function el(e){var t=Ct(dn(e)),n=["absolute","fixed"].indexOf(He(e).position)>=0,r=n&&ke(e)?Mt(e):e;return it(r)?t.filter(function(o){return it(o)&&ri(o,r)&&je(o)!=="body"}):[]}function tl(e,t,n,r){var o=t==="clippingParents"?el(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(c,u){var l=ro(e,u,r);return c.top=nt(l.top,c.top),c.right=rn(l.right,c.right),c.bottom=rn(l.bottom,c.bottom),c.left=nt(l.left,c.left),c},ro(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ci(e){var t=e.reference,n=e.element,r=e.placement,o=r?Ne(r):null,i=r?gt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case he:c={x:a,y:t.y-n.height};break;case Oe:c={x:a,y:t.y+t.height};break;case Te:c={x:t.x+t.width,y:s};break;case me:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?Yn(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case vt:c[u]=c[u]-(t[l]/2-n[l]/2);break;case Ot:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function Tt(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?wc:s,u=n.rootBoundary,l=u===void 0?ei:u,d=n.elementContext,y=d===void 0?xt:d,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,S=v===void 0?0:v,w=ii(typeof S!="number"?S:ai(S,It)),C=y===xt?Sc:xt,g=e.rects.popper,h=e.elements[p?C:y],x=tl(it(h)?h:h.contextElement||Xe(e.elements.popper),c,l,a),m=mt(e.elements.reference),E=ci({reference:m,element:g,strategy:"absolute",placement:o}),O=$n(Object.assign({},g,E)),D=y===xt?O:m,I={top:x.top-D.top+w.top,bottom:D.bottom-x.bottom+w.bottom,left:x.left-D.left+w.left,right:D.right-x.right+w.right},B=e.modifiersData.offset;if(y===xt&&B){var $=B[o];Object.keys(I).forEach(function(V){var k=[Te,Oe].indexOf(V)>=0?1:-1,N=[he,Oe].indexOf(V)>=0?"y":"x";I[V]+=$[N]*k})}return I}function nl(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?ti:c,l=gt(r),d=l?s?Qr:Qr.filter(function(p){return gt(p)===l}):It,y=d.filter(function(p){return u.indexOf(p)>=0});y.length===0&&(y=d);var f=y.reduce(function(p,v){return p[v]=Tt(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[Ne(v)],p},{});return Object.keys(f).sort(function(p,v){return f[p]-f[v]})}function rl(e){if(Ne(e)===qn)return[];var t=qt(e);return[no(e),t,no(t)]}function ol(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,y=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,v=n.allowedAutoPlacements,S=t.options.placement,w=Ne(S),C=w===S,g=c||(C||!p?[qt(S)]:rl(S)),h=[S].concat(g).reduce(function(pe,A){return pe.concat(Ne(A)===qn?nl(t,{placement:A,boundary:l,rootBoundary:d,padding:u,flipVariations:p,allowedAutoPlacements:v}):A)},[]),x=t.rects.reference,m=t.rects.popper,E=new Map,O=!0,D=h[0],I=0;I<h.length;I++){var B=h[I],$=Ne(B),V=gt(B)===vt,k=[he,Oe].indexOf($)>=0,N=k?"width":"height",j=Tt(t,{placement:B,boundary:l,rootBoundary:d,altBoundary:y,padding:u}),P=k?V?Te:me:V?Oe:he;x[N]>m[N]&&(P=qt(P));var W=qt(P),Y=[];if(i&&Y.push(j[$]<=0),s&&Y.push(j[P]<=0,j[W]<=0),Y.every(function(pe){return pe})){D=B,O=!1;break}E.set(B,Y)}if(O)for(var F=p?3:1,X=function(A){var M=h.find(function(L){var H=E.get(L);if(H)return H.slice(0,A).every(function(K){return K})});if(M)return D=M,"break"},ae=F;ae>0;ae--){var Se=X(ae);if(Se==="break")break}t.placement!==D&&(t.modifiersData[r]._skip=!0,t.placement=D,t.reset=!0)}}var il={name:"flip",enabled:!0,phase:"main",fn:ol,requiresIfExists:["offset"],data:{_skip:!1}};function oo(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function io(e){return[he,Te,Oe,me].some(function(t){return e[t]>=0})}function al(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Tt(t,{elementContext:"reference"}),s=Tt(t,{altBoundary:!0}),c=oo(a,r),u=oo(s,o,i),l=io(c),d=io(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var sl={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:al};function cl(e,t,n){var r=Ne(e),o=[me,he].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[me,Te].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function ll(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=ti.reduce(function(l,d){return l[d]=cl(d,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var ul={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ll};function fl(e){var t=e.state,n=e.name;t.modifiersData[n]=ci({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var dl={name:"popperOffsets",enabled:!0,phase:"read",fn:fl,data:{}};function pl(e){return e==="x"?"y":"x"}function vl(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,y=n.tether,f=y===void 0?!0:y,p=n.tetherOffset,v=p===void 0?0:p,S=Tt(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),w=Ne(t.placement),C=gt(t.placement),g=!C,h=Yn(w),x=pl(h),m=t.modifiersData.popperOffsets,E=t.rects.reference,O=t.rects.popper,D=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,I=typeof D=="number"?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(m){if(i){var V,k=h==="y"?he:me,N=h==="y"?Oe:Te,j=h==="y"?"height":"width",P=m[h],W=P+S[k],Y=P-S[N],F=f?-O[j]/2:0,X=C===vt?E[j]:O[j],ae=C===vt?-O[j]:-E[j],Se=t.elements.arrow,pe=f&&Se?Kn(Se):{width:0,height:0},A=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:oi(),M=A[k],L=A[N],H=St(0,E[j],pe[j]),K=g?E[j]/2-F-H-M-I.mainAxis:X-H-M-I.mainAxis,te=g?-E[j]/2+F+H+L+I.mainAxis:ae+H+L+I.mainAxis,G=t.elements.arrow&&Mt(t.elements.arrow),le=G?h==="y"?G.clientTop||0:G.clientLeft||0:0,Fe=(V=B==null?void 0:B[h])!=null?V:0,oe=P+K-Fe-le,ve=P+te-Fe,Z=St(f?rn(W,oe):W,P,f?nt(Y,ve):Y);m[h]=Z,$[h]=Z-P}if(s){var z,Ce=h==="x"?he:me,ze=h==="x"?Oe:Te,ee=m[x],Ee=x==="y"?"height":"width",$e=ee+S[Ce],Ie=ee-S[ze],Ge=[he,me].indexOf(w)!==-1,at=(z=B==null?void 0:B[x])!=null?z:0,Jn=Ge?$e:ee-E[Ee]-O[Ee]-at+I.altAxis,Qn=Ge?ee+E[Ee]+O[Ee]-at-I.altAxis:Ie,er=f&&Ge?Fc(Jn,ee,Qn):St(f?Jn:$e,ee,f?Qn:Ie);m[x]=er,$[x]=er-ee}t.modifiersData[r]=$}}var hl={name:"preventOverflow",enabled:!0,phase:"main",fn:vl,requiresIfExists:["offset"]};function ml(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function gl(e){return e===Pe(e)||!ke(e)?Xn(e):ml(e)}function bl(e){var t=e.getBoundingClientRect(),n=ht(t.width)/e.offsetWidth||1,r=ht(t.height)/e.offsetHeight||1;return n!==1||r!==1}function yl(e,t,n){n===void 0&&(n=!1);var r=ke(t),o=ke(t)&&bl(t),i=Xe(t),a=mt(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((je(t)!=="body"||Zn(i))&&(s=gl(t)),ke(t)?(c=mt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Gn(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function xl(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function wl(e){var t=xl(e);return Ic.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function Sl(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Cl(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var ao={placement:"bottom",modifiers:[],strategy:"absolute"};function so(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function El(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?ao:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ao,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],y=!1,f={state:l,setOptions:function(w){var C=typeof w=="function"?w(l.options):w;v(),l.options=Object.assign({},i,l.options,C),l.scrollParents={reference:it(s)?Ct(s):s.contextElement?Ct(s.contextElement):[],popper:Ct(c)};var g=wl(Cl([].concat(r,l.options.modifiers)));return l.orderedModifiers=g.filter(function(h){return h.enabled}),p(),f.update()},forceUpdate:function(){if(!y){var w=l.elements,C=w.reference,g=w.popper;if(so(C,g)){l.rects={reference:yl(C,Mt(g),l.options.strategy==="fixed"),popper:Kn(g)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(I){return l.modifiersData[I.name]=Object.assign({},I.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var x=l.orderedModifiers[h],m=x.fn,E=x.options,O=E===void 0?{}:E,D=x.name;typeof m=="function"&&(l=m({state:l,options:O,name:D,instance:f})||l)}}}},update:Sl(function(){return new Promise(function(S){f.forceUpdate(),S(l)})}),destroy:function(){v(),y=!0}};if(!so(s,c))return f;f.setOptions(u).then(function(S){!y&&u.onFirstUpdate&&u.onFirstUpdate(S)});function p(){l.orderedModifiers.forEach(function(S){var w=S.name,C=S.options,g=C===void 0?{}:C,h=S.effect;if(typeof h=="function"){var x=h({state:l,name:w,instance:f,options:g}),m=function(){};d.push(x||m)}})}function v(){d.forEach(function(S){return S()}),d=[]}return f}}var kl=[Yc,dl,_c,Lc,ul,il,hl,Vc,sl],Rl=El({defaultModifiers:kl}),Ol=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,o=R.useContext(fn),i=o.collapsed,a=o.toggled,s=o.transitionDuration,c=R.useRef();return R.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=Rl(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),R.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,a,r,n]),{popperInstance:c.current}},li=function(e){var t=e.rtl,n=e.level,r=e.collapsed,o=e.disabled,i=e.active;return`
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
  
  `)},Tl=function(e,t){var n=e.className,r=e.component,o=e.children,i=ot(e,["className","component","children"]);if(r){if(typeof r=="string")return R.createElement(r,ye(ye({className:ie(n)},i),{ref:t}),o);var a=r.props,s=a.className,c=ot(a,["className"]);return R.cloneElement(r,ye(ye(ye({className:ie(n,s)},i),c),{ref:t}),o)}else return R.createElement("a",ye({ref:t,className:ie(n)},i),o)},ui=R.forwardRef(Tl),Pl=ce.li(co||(co=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},U.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return li({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Al=function(e,t){var n,r=e.children,o=e.className,i=e.label,a=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,d=e.defaultOpen,y=e.active,f=y===void 0?!1:y,p=e.disabled,v=p===void 0?!1:p,S=e.rootStyles,w=e.component,C=e.onOpenChange,g=e.onClick,h=e.onKeyUp,x=ot(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),m=R.useContext(nn),E=R.useContext(fn),O=E.collapsed,D=E.rtl,I=E.transitionDuration,B=Un(),$=B.renderExpandIcon,V=B.closeOnClick,k=B.menuItemStyles,N=B.transitionDuration,j=R.useState(!!d),P=j[0],W=j[1],Y=R.useState(!1),F=Y[0],X=Y[1],ae=R.useState(!1),Se=ae[0],pe=ae[1],A=R.useRef(null),M=R.useRef(null),L=R.useRef(),H=Ol({level:m,buttonRef:A,contentRef:M}).popperInstance,K=R.useCallback(function(){var Z,z=M.current;if(z){var Ce=(Z=z==null?void 0:z.querySelector(".".concat(U.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Ce,"px"),L.current=setTimeout(function(){z.style.overflow="auto",z.style.height="auto"},N)}},[N]),te=function(){var Z,z=M.current;if(z){var Ce=(Z=z==null?void 0:z.querySelector(".".concat(U.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Ce,"px"),z.offsetHeight,z.style.height="0px"}},G=function(){m===0&&O||(typeof l>"u"?(clearTimeout(Number(L.current)),P?te():K(),C==null||C(!P),W(!P)):C==null||C(!l))};R.useEffect(function(){!(m===0&&O)&&typeof l<"u"&&Se&&(clearTimeout(Number(L.current)),l?K():te())},[O,K,i,m,C,l]);var le=function(Z){g==null||g(Z),G()},Fe=function(Z){h==null||h(Z),Z.key==="Enter"&&G()},oe=function(Z){if(k){var z={level:m,disabled:v,active:f,isSubmenu:!0,open:l??P},Ce=k.root,ze=k.button,ee=k.label,Ee=k.icon,$e=k.prefix,Ie=k.suffix,Ge=k.subMenuContent,at=k.SubMenuExpandIcon;switch(Z){case"root":return typeof Ce=="function"?Ce(z):Ce;case"button":return typeof ze=="function"?ze(z):ze;case"label":return typeof ee=="function"?ee(z):ee;case"icon":return typeof Ee=="function"?Ee(z):Ee;case"prefix":return typeof $e=="function"?$e(z):$e;case"suffix":return typeof Ie=="function"?Ie(z):Ie;case"SubMenuExpandIcon":return typeof at=="function"?at(z):at;case"subMenuContent":return typeof Ge=="function"?Ge(z):Ge;default:return}}};R.useEffect(function(){setTimeout(function(){return H==null?void 0:H.update()},I),O&&m===0&&X(!1)},[O,m,D,I,H]),R.useEffect(function(){var Z=function(ee){var Ee,$e,Ie;!F&&(!((Ee=A.current)===null||Ee===void 0)&&Ee.contains(ee))?X(!0):(V&&!(!(($e=ee.closest(".".concat(U.menuItemRoot)))===null||$e===void 0)&&$e.classList.contains(U.subMenuRoot))||!(!((Ie=M.current)===null||Ie===void 0)&&Ie.contains(ee))&&F)&&X(!1)},z=function(ee){Z(ee.target)},Ce=function(ee){ee.key==="Enter"?Z(ee.target):ee.key==="Escape"&&X(!1)},ze=function(){document.removeEventListener("click",z),document.removeEventListener("keyup",Ce)};return ze(),O&&m===0&&(document.addEventListener("click",z,!1),document.addEventListener("keyup",Ce,!1)),function(){ze()}},[O,m,V,F]),R.useEffect(function(){pe(!0)},[]);var ve=(n={},n[U.active]=f,n[U.disabled]=v,n[U.open]=l??P,n);return R.createElement(Pl,{ref:t,className:ie(U.menuItemRoot,U.subMenuRoot,ve,o),menuItemStyles:oe("root"),level:m,collapsed:O,rtl:D,disabled:v,active:f,buttonStyles:oe("button"),rootStyles:S},R.createElement(ui,ye({"data-testid":"".concat(U.button,"-test-id"),ref:A,title:s,className:ie(U.button,ve),onClick:le,onKeyUp:Fe,component:w,tabIndex:0},x),a&&R.createElement(Zo,{rtl:D,className:ie(U.icon,ve),rootStyles:oe("icon")},a),c&&R.createElement(Jo,{collapsed:O,transitionDuration:I,firstLevel:m===0,className:ie(U.prefix,ve),rtl:D,rootStyles:oe("prefix")},c),R.createElement(Go,{className:ie(U.label,ve),rootStyles:oe("label")},i),u&&R.createElement(Qo,{collapsed:O,transitionDuration:I,firstLevel:m===0,className:ie(U.suffix,ve),rootStyles:oe("suffix")},u),R.createElement(bc,{rtl:D,className:ie(U.SubMenuExpandIcon,ve),collapsed:O,level:m,rootStyles:oe("SubMenuExpandIcon")},$?$({level:m,disabled:v,active:f,open:l??P}):O&&m===0?R.createElement(xc,null):R.createElement(yc,{rtl:D,open:l??P}))),R.createElement(gc,{ref:M,openWhenCollapsed:F,open:l??P,firstLevel:m===0,collapsed:O,defaultOpen:l&&!Se||d,className:ie(U.subMenuContent,ve),rootStyles:oe("subMenuContent")},R.createElement(nn.Provider,{value:m+1},r)))};R.forwardRef(Al);var co,$l=ce.li(lo||(lo=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},U.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return li({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Il=function(e,t){var n,r=e.children,o=e.icon,i=e.className,a=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,d=l===void 0?!1:l,y=e.component,f=e.rootStyles,p=ot(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),v=R.useContext(nn),S=R.useContext(fn),w=S.collapsed,C=S.rtl,g=S.transitionDuration,h=Un().menuItemStyles,x=function(E){if(h){var O={level:v,disabled:d,active:u,isSubmenu:!1},D=h.root,I=h.button,B=h.label,$=h.icon,V=h.prefix,k=h.suffix;switch(E){case"root":return typeof D=="function"?D(O):D;case"button":return typeof I=="function"?I(O):I;case"label":return typeof B=="function"?B(O):B;case"icon":return typeof $=="function"?$(O):$;case"prefix":return typeof V=="function"?V(O):V;case"suffix":return typeof k=="function"?k(O):k;default:return}}},m=(n={},n[U.active]=u,n[U.disabled]=d,n);return R.createElement($l,{ref:t,className:ie(U.menuItemRoot,m,i),menuItemStyles:x("root"),level:v,collapsed:w,rtl:C,disabled:d,active:u,buttonStyles:x("button"),rootStyles:f},R.createElement(ui,ye({className:ie(U.button,m),"data-testid":"".concat(U.button,"-test-id"),component:y,tabIndex:0},p),o&&R.createElement(Zo,{rtl:C,className:ie(U.icon,m),rootStyles:x("icon")},o),a&&R.createElement(Jo,{collapsed:w,transitionDuration:g,firstLevel:v===0,className:ie(U.prefix,m),rtl:C,rootStyles:x("prefix")},a),R.createElement(Go,{className:ie(U.label,m),rootStyles:x("label")},r),s&&R.createElement(Qo,{collapsed:w,transitionDuration:g,firstLevel:v===0,className:ie(U.suffix,m),rootStyles:x("suffix")},s)))},Ml=R.forwardRef(Il),lo;const Dl=Q(fc)`
  &&& {
    z-index: 1;
    border: none;
  }

  .${J.container} {
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  .${J.backdrop} {
    z-index: inherit;
  }
`,Ll=Q(vc)`
  flex-grow: 1;

  background-color: ${({theme:e})=>e.primaryBgColor};
`,Bt=Q(Ml)`
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
`,Nl=({setMobileMenu:e})=>T.jsxs(Ll,{children:[T.jsx(Bt,{component:T.jsx(lt,{to:"/",onClick:()=>e(!1)}),children:"Home"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/about",onClick:()=>e(!1)}),children:"About"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/services",onClick:()=>e(!1)}),children:"Services"}),T.jsx(Bt,{component:T.jsx(lt,{to:"/contacts",onClick:()=>e(!1)}),children:"Contacts"})]}),jl=Q.div`
  padding-top: ${({theme:e})=>e.global.spacing(12)};
  padding-bottom: ${({theme:e})=>e.global.spacing(2)};

  background-color: ${({theme:e})=>e.secondaryBgColor};
`,Fl=Q.ul`
  ${In}
`,wn=Q.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(2)};
  }
`,Bl=Q.img`
  border-radius: 50%;
`,uo=Q.p`
  color: ${({theme:e})=>e.textColorSecondary};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};
  font-weight: ${({theme:e})=>e.global.text.fontWeight.m};
`,Wl=()=>{const e=Pt(on);return T.jsx(jl,{children:e&&T.jsx(T.Fragment,{children:T.jsxs(Fl,{children:[T.jsx(wn,{children:T.jsx(Bl,{src:e.image,alt:"User photo",width:"60"})}),T.jsx(wn,{children:T.jsx(uo,{children:e.firstName})}),T.jsx(wn,{children:T.jsx(uo,{children:e.email})})]})})})},Hl=Q.footer`
  ${po}

  color: ${({theme:e})=>e.footerTextColor};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};

  background-color: ${({theme:e})=>e.footerBgColor};

  ${({isMainLayout:e})=>e&&{textAlign:"center"}}
`,Vl=Q(bi)`
  ${gi}
`,zl=Q.div`
  ${In}

  ${({isMainLayout:e})=>e&&{textAlign:"center"}}
`,fi=({isMainLayout:e})=>T.jsx(Hl,{isMainLayout:e,children:T.jsxs(zl,{isMainLayout:e,children:["Coded by"," ",T.jsx(Vl,{to:"https://github.com/iberezhnyi",children:"©iberezhnyi"})]})}),Ul=({mobileMenu:e,setIsMobile:t,setMobileMenu:n})=>{const r=Pt(on);return T.jsxs(Dl,{toggled:e,customBreakPoint:"767px",onBreakPoint:t,onBackdropClick:()=>n(!1),children:[T.jsx(Oi,{}),T.jsx(Wl,{}),T.jsx(Nl,{setMobileMenu:n}),r&&T.jsx(fi,{})]})},ql=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(window.matchMedia("(max-width: 767px)").matches),o=Pt(on),i=()=>t(a=>!a);return b.useEffect(()=>{!n&&t(!1)},[n]),T.jsxs(T.Fragment,{children:[T.jsx(ls,{isMobile:n,handleClick:i,mobileMenu:e}),T.jsx(Ul,{setMobileMenu:t,setIsMobile:r,mobileMenu:e}),T.jsx(Ei,{children:T.jsx(yi,{})}),!o&&T.jsx(fi,{isMainLayout:!0})]})},Yl=ql;export{Yl as default};
//# sourceMappingURL=index-D4x98vVL.js.map
