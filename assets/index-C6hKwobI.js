import{p as ee,j as T,u as lo,a as An,s as li,c as Qn,r as b,b as ui,R as fi,N as lt,d as uo,e as di,l as pi,f as R,O as vi}from"./index-vyLfiJMO.js";import{M as hi,a as mi,T as gi,b as bi,s as ct,C as yi,c as In,S as xi}from"./Button.styled-CdqG8feB.js";const wi=ee.div`
  /* display: flex;
  flex-grow: 1; */
`,Si=ee.main`
  /* display: flex;
  flex-grow: 1; */
`,Ci=({onClick:e,mobileMenu:t})=>T.jsx(hi,{children:T.jsx(mi,{$mobileMenu:t,onClick:e,children:T.jsx("span",{})})}),Ei=()=>{const e=lo();return[An(li),r=>e(r==="light"?Qn("dark"):Qn("light"))]},ki=()=>{const[e,t]=Ei();return T.jsx(gi,{onClick:()=>t(e),children:T.jsx(bi,{children:T.jsx("use",{href:`${ct}#${e==="light"?"moon-stars":"sun"}`})})})},Ri=ee.header`
  background-color: ${({theme:e})=>e.headerBgColor};
`,Oi=ee(yi)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function Ye(e){return fo(e)?(e.nodeName||"").toLowerCase():"#document"}function xe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ve(e){var t;return(t=(fo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function fo(e){return e instanceof Node||e instanceof xe(e).Node}function ne(e){return e instanceof Element||e instanceof xe(e).Element}function se(e){return e instanceof HTMLElement||e instanceof xe(e).HTMLElement}function xn(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof xe(e).ShadowRoot}function Pt(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Re(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Ti(e){return["table","td","th"].includes(Ye(e))}function rn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function $n(e){const t=Mn(),n=Re(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Pi(e){let t=We(e);for(;se(t)&&!_e(t);){if(rn(t))return null;if($n(t))return t;t=We(t)}return null}function Mn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function _e(e){return["html","body","#document"].includes(Ye(e))}function Re(e){return xe(e).getComputedStyle(e)}function on(e){return ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function We(e){if(Ye(e)==="html")return e;const t=e.assignedSlot||e.parentNode||xn(e)&&e.host||Ve(e);return xn(t)?t.host:t}function po(e){const t=We(e);return _e(t)?e.ownerDocument?e.ownerDocument.body:e.body:se(t)&&Pt(t)?t:po(t)}function qe(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=po(e),i=o===((r=e.ownerDocument)==null?void 0:r.body),a=xe(o);return i?t.concat(a,a.visualViewport||[],Pt(o)?o:[],a.frameElement&&n?qe(a.frameElement):[]):t.concat(o,qe(o,[],n))}function Je(e){let t=e.activeElement;for(;((n=t)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;t=t.shadowRoot.activeElement}return t}function be(e,t){if(!e||!t)return!1;const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&xn(n)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Ai(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function vo(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}function Ii(e){return e.mozInputSource===0&&e.isTrusted?!0:wn()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function $i(e){return Di()?!1:!wn()&&e.width===0&&e.height===0||wn()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Mi(){return/apple/i.test(navigator.vendor)}function wn(){const e=/android/i;return e.test(Ai())||e.test(vo())}function Di(){return vo().includes("jsdom/")}function er(e,t){return["mouse","pen"].includes(e)}function Ni(e){return"nativeEvent"in e}function Li(e){return e.matches("html,body")}function Ae(e){return(e==null?void 0:e.ownerDocument)||document}function fn(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}function et(e){return"composedPath"in e?e.composedPath()[0]:e.target}const ji="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function ho(e){return se(e)&&e.matches(ji)}function dn(e){e.preventDefault(),e.stopPropagation()}function Fi(e){return e?e.getAttribute("role")==="combobox"&&ho(e):!1}const Sn=Math.min,ut=Math.max,qt=Math.round,Mt=Math.floor,Ke=e=>({x:e,y:e});function mo(e){return e.split("-")[0]}function Bi(e){return e.split("-")[1]}function Wi(e){return e==="x"?"y":"x"}function Hi(e){return e==="y"?"height":"width"}function go(e){return["top","bottom"].includes(mo(e))?"y":"x"}function Vi(e){return Wi(go(e))}function bo(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var zi=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],_t=zi.join(","),yo=typeof Element>"u",dt=yo?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Kt=!yo&&Element.prototype.getRootNode?function(e){var t;return e==null||(t=e.getRootNode)===null||t===void 0?void 0:t.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Yt=function e(t,n){var r;n===void 0&&(n=!0);var o=t==null||(r=t.getAttribute)===null||r===void 0?void 0:r.call(t,"inert"),i=o===""||o==="true",a=i||n&&t&&e(t.parentNode);return a},Ui=function(t){var n,r=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return r===""||r==="true"},qi=function(t,n,r){if(Yt(t))return[];var o=Array.prototype.slice.apply(t.querySelectorAll(_t));return n&&dt.call(t,_t)&&o.unshift(t),o=o.filter(r),o},_i=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!Yt(a,!1))if(a.tagName==="SLOT"){var s=a.assignedElements(),c=s.length?s:a.children,u=e(c,!0,r);r.flatten?o.push.apply(o,u):o.push({scopeParent:a,candidates:u})}else{var l=dt.call(a,_t);l&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var d=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),y=!Yt(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(d&&y){var f=e(d===!0?a.children:d.children,!0,r);r.flatten?o.push.apply(o,f):o.push({scopeParent:a,candidates:f})}else i.unshift.apply(i,a.children)}}return o},xo=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},wo=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||Ui(t))&&!xo(t)?0:t.tabIndex},Ki=function(t,n){var r=wo(t);return r<0&&n&&!xo(t)?0:r},Yi=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},So=function(t){return t.tagName==="INPUT"},Xi=function(t){return So(t)&&t.type==="hidden"},Gi=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(r){return r.tagName==="SUMMARY"});return n},Zi=function(t,n){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===n)return t[r]},Ji=function(t){if(!t.name)return!0;var n=t.form||Kt(t),r=function(s){return n.querySelectorAll('input[type="radio"][name="'+s+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=r(window.CSS.escape(t.name));else try{o=r(t.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var i=Zi(o,t.form);return!i||i===t},Qi=function(t){return So(t)&&t.type==="radio"},ea=function(t){return Qi(t)&&!Ji(t)},ta=function(t){var n,r=t&&Kt(t),o=(n=r)===null||n===void 0?void 0:n.host,i=!1;if(r&&r!==t){var a,s,c;for(i=!!((a=o)!==null&&a!==void 0&&(s=a.ownerDocument)!==null&&s!==void 0&&s.contains(o)||t!=null&&(c=t.ownerDocument)!==null&&c!==void 0&&c.contains(t));!i&&o;){var u,l,d;r=Kt(o),o=(u=r)===null||u===void 0?void 0:u.host,i=!!((l=o)!==null&&l!==void 0&&(d=l.ownerDocument)!==null&&d!==void 0&&d.contains(o))}}return i},tr=function(t){var n=t.getBoundingClientRect(),r=n.width,o=n.height;return r===0&&o===0},na=function(t,n){var r=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=dt.call(t,"details>summary:first-of-type"),a=i?t.parentElement:t;if(dt.call(a,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof o=="function"){for(var s=t;t;){var c=t.parentElement,u=Kt(t);if(c&&!c.shadowRoot&&o(c)===!0)return tr(t);t.assignedSlot?t=t.assignedSlot:!c&&u!==t.ownerDocument?t=u.host:t=c}t=s}if(ta(t))return!t.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return tr(t);return!1},ra=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var o=n.children.item(r);if(o.tagName==="LEGEND")return dt.call(n,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}n=n.parentElement}return!1},oa=function(t,n){return!(n.disabled||Yt(n)||Xi(n)||na(n,t)||Gi(n)||ra(n))},Cn=function(t,n){return!(ea(n)||wo(n)<0||!oa(t,n))},ia=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},aa=function e(t){var n=[],r=[];return t.forEach(function(o,i){var a=!!o.scopeParent,s=a?o.scopeParent:o,c=Ki(s,a),u=a?e(o.candidates):s;c===0?a?n.push.apply(n,u):n.push(s):r.push({documentOrder:i,tabIndex:c,item:o,isScope:a,content:u})}),r.sort(Yi).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(n)},Dn=function(t,n){n=n||{};var r;return n.getShadowRoot?r=_i([t],n.includeContainer,{filter:Cn.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:ia}):r=qi(t,n.includeContainer,Cn.bind(null,n)),aa(r)},sa=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return dt.call(t,_t)===!1?!1:Cn(n,t)};function nr(e,t,n){let{reference:r,floating:o}=e;const i=go(t),a=Vi(t),s=Hi(a),c=mo(t),u=i==="y",l=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,y=r[s]/2-o[s]/2;let f;switch(c){case"top":f={x:l,y:r.y-o.height};break;case"bottom":f={x:l,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Bi(t)){case"start":f[a]-=y*(n&&u?-1:1);break;case"end":f[a]+=y*(n&&u?-1:1);break}return f}const ca=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:l,y:d}=nr(u,r,c),y=r,f={},p=0;for(let v=0;v<s.length;v++){const{name:S,fn:w}=s[v],{x:C,y:g,data:h,reset:x}=await w({x:l,y:d,initialPlacement:r,placement:y,strategy:o,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});l=C??l,d=g??d,f={...f,[S]:{...f[S],...h}},x&&p<=50&&(p++,typeof x=="object"&&(x.placement&&(y=x.placement),x.rects&&(u=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:l,y:d}=nr(u,y,c)),v=-1)}return{x:l,y:d,placement:y,strategy:o,middlewareData:f}};function Co(e){const t=Re(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=se(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=qt(n)!==i||qt(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function Nn(e){return ne(e)?e:e.contextElement}function ft(e){const t=Nn(e);if(!se(t))return Ke(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Co(t);let a=(i?qt(n.width):n.width)/r,s=(i?qt(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const la=Ke(0);function Eo(e){const t=xe(e);return!Mn()||!t.visualViewport?la:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ua(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==xe(e)?!1:t}function rt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),i=Nn(e);let a=Ke(1);t&&(r?ne(r)&&(a=ft(r)):a=ft(e));const s=ua(i,n,r)?Eo(i):Ke(0);let c=(o.left+s.x)/a.x,u=(o.top+s.y)/a.y,l=o.width/a.x,d=o.height/a.y;if(i){const y=xe(i),f=r&&ne(r)?xe(r):r;let p=y,v=p.frameElement;for(;v&&r&&f!==p;){const S=ft(v),w=v.getBoundingClientRect(),C=Re(v),g=w.left+(v.clientLeft+parseFloat(C.paddingLeft))*S.x,h=w.top+(v.clientTop+parseFloat(C.paddingTop))*S.y;c*=S.x,u*=S.y,l*=S.x,d*=S.y,c+=g,u+=h,p=xe(v),v=p.frameElement}}return bo({width:l,height:d,x:c,y:u})}function fa(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i=o==="fixed",a=Ve(r),s=t?rn(t.floating):!1;if(r===a||s&&i)return n;let c={scrollLeft:0,scrollTop:0},u=Ke(1);const l=Ke(0),d=se(r);if((d||!d&&!i)&&((Ye(r)!=="body"||Pt(a))&&(c=on(r)),se(r))){const y=rt(r);u=ft(r),l.x=y.x+r.clientLeft,l.y=y.y+r.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+l.x,y:n.y*u.y-c.scrollTop*u.y+l.y}}function da(e){return Array.from(e.getClientRects())}function ko(e){return rt(Ve(e)).left+on(e).scrollLeft}function pa(e){const t=Ve(e),n=on(e),r=e.ownerDocument.body,o=ut(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=ut(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+ko(e);const s=-n.scrollTop;return Re(r).direction==="rtl"&&(a+=ut(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}function va(e,t){const n=xe(e),r=Ve(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;const u=Mn();(!u||u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}function ha(e,t){const n=rt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=se(e)?ft(e):Ke(1),a=e.clientWidth*i.x,s=e.clientHeight*i.y,c=o*i.x,u=r*i.y;return{width:a,height:s,x:c,y:u}}function rr(e,t,n){let r;if(t==="viewport")r=va(e,n);else if(t==="document")r=pa(Ve(e));else if(ne(t))r=ha(t,n);else{const o=Eo(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return bo(r)}function Ro(e,t){const n=We(e);return n===t||!ne(n)||_e(n)?!1:Re(n).position==="fixed"||Ro(n,t)}function ma(e,t){const n=t.get(e);if(n)return n;let r=qe(e,[],!1).filter(s=>ne(s)&&Ye(s)!=="body"),o=null;const i=Re(e).position==="fixed";let a=i?We(e):e;for(;ne(a)&&!_e(a);){const s=Re(a),c=$n(a);!c&&s.position==="fixed"&&(o=null),(i?!c&&!o:!c&&s.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Pt(a)&&!c&&Ro(e,a))?r=r.filter(l=>l!==a):o=s,a=We(a)}return t.set(e,r),r}function ga(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?rn(t)?[]:ma(t,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,l)=>{const d=rr(t,l,o);return u.top=ut(d.top,u.top),u.right=Sn(d.right,u.right),u.bottom=Sn(d.bottom,u.bottom),u.left=ut(d.left,u.left),u},rr(t,s,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ba(e){const{width:t,height:n}=Co(e);return{width:t,height:n}}function ya(e,t,n){const r=se(t),o=Ve(t),i=n==="fixed",a=rt(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const c=Ke(0);if(r||!r&&!i)if((Ye(t)!=="body"||Pt(o))&&(s=on(t)),r){const d=rt(t,!0,i,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=ko(o));const u=a.left+s.scrollLeft-c.x,l=a.top+s.scrollTop-c.y;return{x:u,y:l,width:a.width,height:a.height}}function pn(e){return Re(e).position==="static"}function or(e,t){return!se(e)||Re(e).position==="fixed"?null:t?t(e):e.offsetParent}function Oo(e,t){const n=xe(e);if(rn(e))return n;if(!se(e)){let o=We(e);for(;o&&!_e(o);){if(ne(o)&&!pn(o))return o;o=We(o)}return n}let r=or(e,t);for(;r&&Ti(r)&&pn(r);)r=or(r,t);return r&&_e(r)&&pn(r)&&!$n(r)?n:r||Pi(e)||n}const xa=async function(e){const t=this.getOffsetParent||Oo,n=this.getDimensions,r=await n(e.floating);return{reference:ya(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function wa(e){return Re(e).direction==="rtl"}const Sa={convertOffsetParentRelativeRectToViewportRelativeRect:fa,getDocumentElement:Ve,getClippingRect:ga,getOffsetParent:Oo,getElementRects:xa,getClientRects:da,getDimensions:ba,getScale:ft,isElement:ne,isRTL:wa};function Ca(e,t){let n=null,r;const o=Ve(e);function i(){var s;clearTimeout(r),(s=n)==null||s.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();const{left:u,top:l,width:d,height:y}=e.getBoundingClientRect();if(s||t(),!d||!y)return;const f=Mt(l),p=Mt(o.clientWidth-(u+d)),v=Mt(o.clientHeight-(l+y)),S=Mt(u),C={rootMargin:-f+"px "+-p+"px "+-v+"px "+-S+"px",threshold:ut(0,Sn(1,c))||1};let g=!0;function h(x){const m=x[0].intersectionRatio;if(m!==c){if(!g)return a();m?a(!1,m):r=setTimeout(()=>{a(!1,1e-7)},1e3)}g=!1}try{n=new IntersectionObserver(h,{...C,root:o.ownerDocument})}catch{n=new IntersectionObserver(h,C)}n.observe(e)}return a(!0),i}function Ea(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Nn(e),l=o||i?[...u?qe(u):[],...qe(t)]:[];l.forEach(w=>{o&&w.addEventListener("scroll",n,{passive:!0}),i&&w.addEventListener("resize",n)});const d=u&&s?Ca(u,n):null;let y=-1,f=null;a&&(f=new ResizeObserver(w=>{let[C]=w;C&&C.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var g;(g=f)==null||g.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let p,v=c?rt(e):null;c&&S();function S(){const w=rt(e);v&&(w.x!==v.x||w.y!==v.y||w.width!==v.width||w.height!==v.height)&&n(),v=w,p=requestAnimationFrame(S)}return n(),()=>{var w;l.forEach(C=>{o&&C.removeEventListener("scroll",n),i&&C.removeEventListener("resize",n)}),d==null||d(),(w=f)==null||w.disconnect(),f=null,c&&cancelAnimationFrame(p)}}const ka=(e,t,n)=>{const r=new Map,o={platform:Sa,...n},i={...o.platform,_c:r};return ca(e,t,{...o,platform:i})};var Bt=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Xt(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Xt(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const i=o[r];if(!(i==="_owner"&&e.$$typeof)&&!Xt(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function To(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ir(e,t){const n=To(e);return Math.round(t*n)/n}function ar(e){const t=b.useRef(e);return Bt(()=>{t.current=e}),t}function Ra(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[l,d]=b.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[y,f]=b.useState(r);Xt(y,r)||f(r);const[p,v]=b.useState(null),[S,w]=b.useState(null),C=b.useCallback(P=>{P!==m.current&&(m.current=P,v(P))},[]),g=b.useCallback(P=>{P!==E.current&&(E.current=P,w(P))},[]),h=i||p,x=a||S,m=b.useRef(null),E=b.useRef(null),O=b.useRef(l),D=c!=null,$=ar(c),B=ar(o),I=b.useCallback(()=>{if(!m.current||!E.current)return;const P={placement:t,strategy:n,middleware:y};B.current&&(P.platform=B.current),ka(m.current,E.current,P).then(W=>{const Y={...W,isPositioned:!0};V.current&&!Xt(O.current,Y)&&(O.current=Y,ui.flushSync(()=>{d(Y)}))})},[y,t,n,B]);Bt(()=>{u===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d(P=>({...P,isPositioned:!1})))},[u]);const V=b.useRef(!1);Bt(()=>(V.current=!0,()=>{V.current=!1}),[]),Bt(()=>{if(h&&(m.current=h),x&&(E.current=x),h&&x){if($.current)return $.current(h,x,I);I()}},[h,x,I,$,D]);const k=b.useMemo(()=>({reference:m,floating:E,setReference:C,setFloating:g}),[C,g]),L=b.useMemo(()=>({reference:h,floating:x}),[h,x]),j=b.useMemo(()=>{const P={position:n,left:0,top:0};if(!L.floating)return P;const W=ir(L.floating,l.x),Y=ir(L.floating,l.y);return s?{...P,transform:"translate("+W+"px, "+Y+"px)",...To(L.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:W,top:Y}},[n,s,L.floating,l.x,l.y]);return b.useMemo(()=>({...l,update:I,refs:k,elements:L,floatingStyles:j}),[l,I,k,L,j])}const Po={...fi},Oa=Po.useInsertionEffect,Ta=Oa||(e=>e());function Ue(e){const t=b.useRef(()=>{});return Ta(()=>{t.current=e}),b.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}let sr=0;function Ze(e,t){t===void 0&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(sr);const i=()=>e==null?void 0:e.focus({preventScroll:n});o?i():sr=requestAnimationFrame(i)}var Be=typeof document<"u"?b.useLayoutEffect:b.useEffect;function Gt(){return Gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gt.apply(this,arguments)}let cr=!1,Pa=0;const lr=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Pa++;function Aa(){const[e,t]=b.useState(()=>cr?lr():void 0);return Be(()=>{e==null&&t(lr())},[]),b.useEffect(()=>{cr=!0},[]),e}const Ia=Po.useId,Ln=Ia||Aa;function $a(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const Ma=b.createContext(null),Da=b.createContext(null),Ao=()=>{var e;return((e=b.useContext(Ma))==null?void 0:e.id)||null},jn=()=>b.useContext(Da);function Zt(e){return"data-floating-ui-"+e}function vn(e){const t=b.useRef(e);return Be(()=>{t.current=e}),t}function Na(e,t){var n;let r=[],o=(n=e.find(i=>i.id===t))==null?void 0:n.parentId;for(;o;){const i=e.find(a=>a.id===o);o=i==null?void 0:i.parentId,i&&(r=r.concat(i))}return r}function wt(e,t){let n=e.filter(o=>{var i;return o.parentId===t&&((i=o.context)==null?void 0:i.open)}),r=n;for(;r.length;)r=e.filter(o=>{var i;return(i=r)==null?void 0:i.some(a=>{var s;return o.parentId===a.id&&((s=o.context)==null?void 0:s.open)})}),n=n.concat(r);return n}let st=new WeakMap,Dt=new WeakSet,Nt={},hn=0;const La=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Io=e=>e&&(e.host||Io(e.parentNode)),ja=(e,t)=>t.map(n=>{if(e.contains(n))return n;const r=Io(n);return e.contains(r)?r:null}).filter(n=>n!=null);function Fa(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=ja(t,e),s=new Set,c=new Set(a),u=[];Nt[o]||(Nt[o]=new WeakMap);const l=Nt[o];a.forEach(d),y(t),s.clear();function d(f){!f||s.has(f)||(s.add(f),f.parentNode&&d(f.parentNode))}function y(f){!f||c.has(f)||[].forEach.call(f.children,p=>{if(Ye(p)!=="script")if(s.has(p))y(p);else{const v=i?p.getAttribute(i):null,S=v!==null&&v!=="false",w=(st.get(p)||0)+1,C=(l.get(p)||0)+1;st.set(p,w),l.set(p,C),u.push(p),w===1&&S&&Dt.add(p),C===1&&p.setAttribute(o,""),!S&&i&&p.setAttribute(i,"true")}})}return hn++,()=>{u.forEach(f=>{const p=(st.get(f)||0)-1,v=(l.get(f)||0)-1;st.set(f,p),l.set(f,v),p||(!Dt.has(f)&&i&&f.removeAttribute(i),Dt.delete(f)),v||f.removeAttribute(o)}),hn--,hn||(st=new WeakMap,st=new WeakMap,Dt=new WeakSet,Nt={})}}function ur(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=Ae(e[0]).body;return Fa(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const Jt=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function $o(e,t){const n=Dn(e,Jt());t==="prev"&&n.reverse();const r=n.indexOf(Je(Ae(e)));return n.slice(r+1)[0]}function Ba(){return $o(document.body,"next")}function Wa(){return $o(document.body,"prev")}function fr(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!be(n,r)}const Mo={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let Ha;function dr(e){e.key==="Tab"&&(e.target,clearTimeout(Ha))}const pr=b.forwardRef(function(t,n){const[r,o]=b.useState();Be(()=>(Mi()&&o("button"),document.addEventListener("keydown",dr),()=>{document.removeEventListener("keydown",dr)}),[]);const i={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[Zt("focus-guard")]:"",style:Mo};return b.createElement("span",Gt({},t,i))}),Va=b.createContext(null),za=()=>b.useContext(Va),vr=20;let Qe=[];function mn(e){Qe=Qe.filter(n=>n.isConnected);let t=e;if(!(!t||Ye(t)==="body")){if(!sa(t,Jt())){const n=Dn(t,Jt())[0];n&&(t=n)}Qe.push(t),Qe.length>vr&&(Qe=Qe.slice(-vr))}}function hr(){return Qe.slice().reverse().find(e=>e.isConnected)}const Ua=b.forwardRef(function(t,n){return b.createElement("button",Gt({},t,{type:"button",ref:n,tabIndex:-1,style:Mo}))});function qa(e){const{context:t,children:n,disabled:r=!1,order:o=["content"],guards:i=!0,initialFocus:a=0,returnFocus:s=!0,restoreFocus:c=!1,modal:u=!0,visuallyHiddenDismiss:l=!1,closeOnFocusOut:d=!0}=e,{open:y,refs:f,nodeId:p,onOpenChange:v,events:S,dataRef:w,floatingId:C,elements:{domReference:g,floating:h}}=t,x=typeof a=="number"&&a<0,m=Fi(g)&&x,E=La()?i:!0,O=vn(o),D=vn(a),$=vn(s),B=jn(),I=za(),V=b.useRef(null),k=b.useRef(null),L=b.useRef(!1),j=b.useRef(!1),P=b.useRef(-1),W=I!=null,Y=h==null?void 0:h.firstElementChild,F=(Y==null?void 0:Y.id)===C?Y:h,X=Ue(function(A){return A===void 0&&(A=F),A?Dn(A,Jt()):[]}),ae=Ue(A=>{const M=X(A);return O.current.map(N=>g&&N==="reference"?g:F&&N==="floating"?F:M).filter(Boolean).flat()});b.useEffect(()=>{if(r||!u)return;function A(N){if(N.key==="Tab"){be(F,Je(Ae(F)))&&X().length===0&&!m&&dn(N);const H=ae(),K=et(N);O.current[0]==="reference"&&K===g&&(dn(N),N.shiftKey?Ze(H[H.length-1]):Ze(H[1])),O.current[1]==="floating"&&K===F&&N.shiftKey&&(dn(N),Ze(H[0]))}}const M=Ae(F);return M.addEventListener("keydown",A),()=>{M.removeEventListener("keydown",A)}},[r,g,F,u,O,m,X,ae]),b.useEffect(()=>{if(r||!h)return;function A(M){const N=et(M),K=X().indexOf(N);K!==-1&&(P.current=K)}return h.addEventListener("focusin",A),()=>{h.removeEventListener("focusin",A)}},[r,h,X]),b.useEffect(()=>{if(r||!d)return;function A(){j.current=!0,setTimeout(()=>{j.current=!1})}function M(N){const H=N.relatedTarget;queueMicrotask(()=>{const K=!(be(g,H)||be(h,H)||be(H,h)||be(I==null?void 0:I.portalNode,H)||H!=null&&H.hasAttribute(Zt("focus-guard"))||B&&(wt(B.nodesRef.current,p).find(te=>{var G,le;return be((G=te.context)==null?void 0:G.elements.floating,H)||be((le=te.context)==null?void 0:le.elements.domReference,H)})||Na(B.nodesRef.current,p).find(te=>{var G,le;return((G=te.context)==null?void 0:G.elements.floating)===H||((le=te.context)==null?void 0:le.elements.domReference)===H})));if(c&&K&&Je(Ae(F))===Ae(F).body){se(F)&&(F==null||F.focus());const te=P.current,G=X(),le=G[te]||G[G.length-1]||F;se(le)&&le.focus()}(m||!u)&&H&&K&&!j.current&&H!==hr()&&(L.current=!0,v(!1,N))})}if(h&&se(g))return g.addEventListener("focusout",M),g.addEventListener("pointerdown",A),h.addEventListener("focusout",M),()=>{g.removeEventListener("focusout",M),g.removeEventListener("pointerdown",A),h.removeEventListener("focusout",M)}},[r,g,h,F,u,p,B,I,v,d,c,X,m]),b.useEffect(()=>{var A;if(r)return;const M=Array.from((I==null||(A=I.portalNode)==null?void 0:A.querySelectorAll("["+Zt("portal")+"]"))||[]);if(h){const N=[h,...M,V.current,k.current,O.current.includes("reference")||m?g:null].filter(K=>K!=null),H=u||m?ur(N,E,!E):ur(N);return()=>{H()}}},[r,g,h,u,O,I,m,E]),Be(()=>{if(r||!se(F))return;const A=Ae(F),M=Je(A);queueMicrotask(()=>{const N=ae(F),H=D.current,K=(typeof H=="number"?N[H]:H.current)||F,te=be(F,M);!x&&!te&&y&&Ze(K,{preventScroll:K===F})})},[r,y,F,x,ae,D]),Be(()=>{if(r||!F)return;let A=!1;const M=Ae(F),N=Je(M);let K=w.current.openEvent;mn(N);function te(G){let{open:le,reason:Fe,event:oe,nested:ve}=G;le&&(K=oe),Fe==="escape-key"&&f.domReference.current&&mn(f.domReference.current),Fe==="hover"&&oe.type==="mouseleave"&&(L.current=!0),Fe==="outside-press"&&(ve?(L.current=!1,A=!0):L.current=!(Ii(oe)||$i(oe)))}return S.on("openchange",te),()=>{S.off("openchange",te);const G=Je(M),le=be(h,G)||B&&wt(B.nodesRef.current,p).some(ve=>{var Z;return be((Z=ve.context)==null?void 0:Z.elements.floating,G)});(le||K&&["click","mousedown"].includes(K.type))&&f.domReference.current&&mn(f.domReference.current);const oe=hr();$.current&&!L.current&&se(oe)&&(!(oe!==G&&G!==M.body)||le)&&Ze(oe,{cancelPrevious:!1,preventScroll:A})}},[r,h,F,$,w,f,S,B,p]),Be(()=>{if(!r&&I)return I.setFocusManagerState({modal:u,closeOnFocusOut:d,open:y,onOpenChange:v,refs:f}),()=>{I.setFocusManagerState(null)}},[r,I,u,y,v,f,d]),Be(()=>{if(r||!F||typeof MutationObserver!="function"||x)return;const A=()=>{const N=F.getAttribute("tabindex"),H=X(),K=Je(Ae(h)),te=H.indexOf(K);te!==-1&&(P.current=te),O.current.includes("floating")||K!==f.domReference.current&&H.length===0?N!=="0"&&F.setAttribute("tabindex","0"):N!=="-1"&&F.setAttribute("tabindex","-1")};A();const M=new MutationObserver(A);return M.observe(F,{childList:!0,subtree:!0,attributes:!0}),()=>{M.disconnect()}},[r,h,F,f,O,X,x]);function Se(A){return r||!l||!u?null:b.createElement(Ua,{ref:A==="start"?V:k,onClick:M=>v(!1,M.nativeEvent)},typeof l=="string"?l:"Dismiss")}const pe=!r&&E&&(u?!m:!0)&&(W||u);return b.createElement(b.Fragment,null,pe&&b.createElement(pr,{"data-type":"inside",ref:I==null?void 0:I.beforeInsideRef,onFocus:A=>{if(u){const N=ae();Ze(o[0]==="reference"?N[0]:N[N.length-1])}else if(I!=null&&I.preserveTabOrder&&I.portalNode)if(L.current=!1,fr(A,I.portalNode)){const N=Ba()||g;N==null||N.focus()}else{var M;(M=I.beforeOutsideRef.current)==null||M.focus()}}}),!m&&Se("start"),n,Se("end"),pe&&b.createElement(pr,{"data-type":"inside",ref:I==null?void 0:I.afterInsideRef,onFocus:A=>{if(u)Ze(ae()[0]);else if(I!=null&&I.preserveTabOrder&&I.portalNode)if(d&&(L.current=!0),fr(A,I.portalNode)){const N=Wa()||g;N==null||N.focus()}else{var M;(M=I.afterOutsideRef.current)==null||M.focus()}}}))}function mr(e){return se(e.target)&&e.target.tagName==="BUTTON"}function gr(e){return ho(e)}function _a(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,dataRef:o,elements:{domReference:i}}=e,{enabled:a=!0,event:s="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:l=!0}=t,d=b.useRef(),y=b.useRef(!1),f=b.useMemo(()=>({onPointerDown(p){d.current=p.pointerType},onMouseDown(p){const v=d.current;p.button===0&&s!=="click"&&(er(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="mousedown")?r(!1,p.nativeEvent,"click"):(p.preventDefault(),r(!0,p.nativeEvent,"click"))))},onClick(p){const v=d.current;if(s==="mousedown"&&d.current){d.current=void 0;return}er(v)&&u||(n&&c&&(!o.current.openEvent||o.current.openEvent.type==="click")?r(!1,p.nativeEvent,"click"):r(!0,p.nativeEvent,"click"))},onKeyDown(p){d.current=void 0,!(p.defaultPrevented||!l||mr(p))&&(p.key===" "&&!gr(i)&&(p.preventDefault(),y.current=!0),p.key==="Enter"&&r(!(n&&c),p.nativeEvent,"click"))},onKeyUp(p){p.defaultPrevented||!l||mr(p)||gr(i)||p.key===" "&&y.current&&(y.current=!1,r(!(n&&c),p.nativeEvent,"click"))}}),[o,i,s,u,l,r,n,c]);return b.useMemo(()=>a?{reference:f}:{},[a,f])}const Ka={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Ya={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},br=e=>{var t,n;return{escapeKey:typeof e=="boolean"?e:(t=e==null?void 0:e.escapeKey)!=null?t:!1,outsidePress:typeof e=="boolean"?e:(n=e==null?void 0:e.outsidePress)!=null?n:!0}};function Xa(e,t){t===void 0&&(t={});const{open:n,onOpenChange:r,elements:o,dataRef:i}=e,{enabled:a=!0,escapeKey:s=!0,outsidePress:c=!0,outsidePressEvent:u="pointerdown",referencePress:l=!1,referencePressEvent:d="pointerdown",ancestorScroll:y=!1,bubbles:f,capture:p}=t,v=jn(),S=Ue(typeof c=="function"?c:()=>!1),w=typeof c=="function"?S:c,C=b.useRef(!1),g=b.useRef(!1),{escapeKey:h,outsidePress:x}=br(f),{escapeKey:m,outsidePress:E}=br(p),O=Ue(k=>{var L;if(!n||!a||!s||k.key!=="Escape")return;const j=(L=i.current.floatingContext)==null?void 0:L.nodeId,P=v?wt(v.nodesRef.current,j):[];if(!h&&(k.stopPropagation(),P.length>0)){let W=!0;if(P.forEach(Y=>{var F;if((F=Y.context)!=null&&F.open&&!Y.context.dataRef.current.__escapeKeyBubbles){W=!1;return}}),!W)return}r(!1,Ni(k)?k.nativeEvent:k,"escape-key")}),D=Ue(k=>{var L;const j=()=>{var P;O(k),(P=et(k))==null||P.removeEventListener("keydown",j)};(L=et(k))==null||L.addEventListener("keydown",j)}),$=Ue(k=>{var L;const j=C.current;C.current=!1;const P=g.current;if(g.current=!1,u==="click"&&P||j||typeof w=="function"&&!w(k))return;const W=et(k),Y="["+Zt("inert")+"]",F=Ae(o.floating).querySelectorAll(Y);let X=ne(W)?W:null;for(;X&&!_e(X);){const A=We(X);if(_e(A)||!ne(A))break;X=A}if(F.length&&ne(W)&&!Li(W)&&!be(W,o.floating)&&Array.from(F).every(A=>!be(X,A)))return;if(se(W)&&V){const A=W.clientWidth>0&&W.scrollWidth>W.clientWidth,M=W.clientHeight>0&&W.scrollHeight>W.clientHeight;let N=M&&k.offsetX>W.clientWidth;if(M&&Re(W).direction==="rtl"&&(N=k.offsetX<=W.offsetWidth-W.clientWidth),N||A&&k.offsetY>W.clientHeight)return}const ae=(L=i.current.floatingContext)==null?void 0:L.nodeId,Se=v&&wt(v.nodesRef.current,ae).some(A=>{var M;return fn(k,(M=A.context)==null?void 0:M.elements.floating)});if(fn(k,o.floating)||fn(k,o.domReference)||Se)return;const pe=v?wt(v.nodesRef.current,ae):[];if(pe.length>0){let A=!0;if(pe.forEach(M=>{var N;if((N=M.context)!=null&&N.open&&!M.context.dataRef.current.__outsidePressBubbles){A=!1;return}}),!A)return}r(!1,k,"outside-press")}),B=Ue(k=>{var L;const j=()=>{var P;$(k),(P=et(k))==null||P.removeEventListener(u,j)};(L=et(k))==null||L.addEventListener(u,j)});b.useEffect(()=>{if(!n||!a)return;i.current.__escapeKeyBubbles=h,i.current.__outsidePressBubbles=x;function k(P){r(!1,P,"ancestor-scroll")}const L=Ae(o.floating);s&&L.addEventListener("keydown",m?D:O,m),w&&L.addEventListener(u,E?B:$,E);let j=[];return y&&(ne(o.domReference)&&(j=qe(o.domReference)),ne(o.floating)&&(j=j.concat(qe(o.floating))),!ne(o.reference)&&o.reference&&o.reference.contextElement&&(j=j.concat(qe(o.reference.contextElement)))),j=j.filter(P=>{var W;return P!==((W=L.defaultView)==null?void 0:W.visualViewport)}),j.forEach(P=>{P.addEventListener("scroll",k,{passive:!0})}),()=>{s&&L.removeEventListener("keydown",m?D:O,m),w&&L.removeEventListener(u,E?B:$,E),j.forEach(P=>{P.removeEventListener("scroll",k)})}},[i,o,s,w,u,n,r,y,a,h,x,O,m,D,$,E,B]),b.useEffect(()=>{C.current=!1},[w,u]);const I=b.useMemo(()=>({onKeyDown:O,[Ka[d]]:k=>{l&&r(!1,k.nativeEvent,"reference-press")}}),[O,r,l,d]),V=b.useMemo(()=>({onKeyDown:O,onMouseDown(){g.current=!0},onMouseUp(){g.current=!0},[Ya[u]]:()=>{C.current=!0}}),[O,u]);return b.useMemo(()=>a?{reference:I,floating:V}:{},[a,I,V])}function Ga(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=Ln(),i=b.useRef({}),[a]=b.useState(()=>$a()),s=Ao()!=null,[c,u]=b.useState(r.reference),l=Ue((f,p,v)=>{i.current.openEvent=f?p:void 0,a.emit("openchange",{open:f,event:p,reason:v,nested:s}),n==null||n(f,p,v)}),d=b.useMemo(()=>({setPositionReference:u}),[]),y=b.useMemo(()=>({reference:c||r.reference||null,floating:r.floating||null,domReference:r.reference}),[c,r.reference,r.floating]);return b.useMemo(()=>({dataRef:i,open:t,onOpenChange:l,elements:y,events:a,floatingId:o,refs:d}),[t,l,y,a,o,d])}function Za(e){e===void 0&&(e={});const{nodeId:t}=e,n=Ga({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[i,a]=b.useState(null),[s,c]=b.useState(null),l=(o==null?void 0:o.reference)||i,d=b.useRef(null),y=jn();Be(()=>{l&&(d.current=l)},[l]);const f=Ra({...e,elements:{...o,...s&&{reference:s}}}),p=b.useCallback(g=>{const h=ne(g)?{getBoundingClientRect:()=>g.getBoundingClientRect(),contextElement:g}:g;c(h),f.refs.setReference(h)},[f.refs]),v=b.useCallback(g=>{(ne(g)||g===null)&&(d.current=g,a(g)),(ne(f.refs.reference.current)||f.refs.reference.current===null||g!==null&&!ne(g))&&f.refs.setReference(g)},[f.refs]),S=b.useMemo(()=>({...f.refs,setReference:v,setPositionReference:p,domReference:d}),[f.refs,v,p]),w=b.useMemo(()=>({...f.elements,domReference:l}),[f.elements,l]),C=b.useMemo(()=>({...f,...r,refs:S,elements:w,nodeId:t}),[f,S,w,t,r]);return Be(()=>{r.dataRef.current.floatingContext=C;const g=y==null?void 0:y.nodesRef.current.find(h=>h.id===t);g&&(g.context=C)}),b.useMemo(()=>({...f,context:C,refs:S,elements:w}),[f,S,w,C])}const yr="active",xr="selected";function gn(e,t,n){const r=new Map,o=n==="item";let i=e;if(o&&e){const{[yr]:a,[xr]:s,...c}=e;i=c}return{...n==="floating"&&{tabIndex:-1},...i,...t.map(a=>{const s=a?a[n]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((a,s)=>(s&&Object.entries(s).forEach(c=>{let[u,l]=c;if(!(o&&[yr,xr].includes(u)))if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof l=="function"){var d;(d=r.get(u))==null||d.push(l),a[u]=function(){for(var y,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(y=r.get(u))==null?void 0:y.map(S=>S(...p)).find(S=>S!==void 0)}}}else a[u]=l}),a),{})}}function Ja(e){e===void 0&&(e=[]);const t=e.map(s=>s==null?void 0:s.reference),n=e.map(s=>s==null?void 0:s.floating),r=e.map(s=>s==null?void 0:s.item),o=b.useCallback(s=>gn(s,e,"reference"),t),i=b.useCallback(s=>gn(s,e,"floating"),n),a=b.useCallback(s=>gn(s,e,"item"),r);return b.useMemo(()=>({getReferenceProps:o,getFloatingProps:i,getItemProps:a}),[o,i,a])}const Qa=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function es(e,t){var n;t===void 0&&(t={});const{open:r,floatingId:o}=e,{enabled:i=!0,role:a="dialog"}=t,s=(n=Qa.get(a))!=null?n:a,c=Ln(),l=Ao()!=null,d=b.useMemo(()=>s==="tooltip"||a==="label"?{["aria-"+(a==="label"?"labelledby":"describedby")]:r?o:void 0}:{"aria-expanded":r?"true":"false","aria-haspopup":s==="alertdialog"?"dialog":s,"aria-controls":r?o:void 0,...s==="listbox"&&{role:"combobox"},...s==="menu"&&{id:c},...s==="menu"&&l&&{role:"menuitem"},...a==="select"&&{"aria-autocomplete":"none"},...a==="combobox"&&{"aria-autocomplete":"list"}},[s,o,l,r,c,a]),y=b.useMemo(()=>{const p={id:o,...s&&{role:s}};return s==="tooltip"||a==="label"?p:{...p,...s==="menu"&&{"aria-labelledby":c}}},[s,o,c,a]),f=b.useCallback(p=>{let{active:v,selected:S}=p;const w={role:"option",...v&&{id:o+"-option"}};switch(a){case"select":return{...w,"aria-selected":v&&S};case"combobox":return{...w,...v&&{"aria-selected":!0}}}return{}},[o,a]);return b.useMemo(()=>i?{reference:d,floating:y,item:f}:{},[i,d,y,f])}const wr=ee.button`
  ${In}

  color: ${({theme:e})=>e.global.text.color.white};

  &.logout {
    color: ${({theme:e})=>e.textColor};
  }

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,ts=ee(lt)`
  ${In}

  color: ${({theme:e})=>e.global.text.color.white};

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,ns=ee.p`
  margin-bottom: 0;
`,Sr=ee.svg`
  width: 1.75rem;
  height: 1.75rem;

  fill: transparent;
  stroke: currentColor;
`,rs=ee.svg`
  width: 1rem;
  height: 1rem;

  fill: currentColor;
  stroke: currentColor;

  &.open {
    transform: rotate(180deg);
  }
`,os=ee.ul`
  padding: ${({theme:e})=>e.global.spacing(4)};

  border-radius: 0.75rem;
  box-shadow: rgba(64, 123, 255, 0.34) 0px 4px 0.75rem;
  background-color: ${({theme:e})=>e.pageBackground};
`,Cr=ee.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(3)};
  }
`,is=ee(lt)`
  ${In}

  color: ${({theme:e})=>e.textColor};

  &:hover,
  &:focus,
  &:active {
    color: ${({theme:e})=>e.linkActiveColor};
  }
`,Er=ee.svg`
  width: 1rem;
  height: 1rem;

  fill: transparent;
  stroke: currentColor;
`,as=()=>{const e=An(uo),t=lo(),n=di(),r=()=>{t(pi()),n("/login"),i(!1)},[o,i]=b.useState(!1),{refs:a,floatingStyles:s,context:c}=Za({open:o,onOpenChange:i,whileElementsMounted:Ea}),u=_a(c),l=Xa(c),d=es(c,{role:"menu"}),{getReferenceProps:y,getFloatingProps:f}=Ja([u,l,d]),p=Ln();return T.jsxs(T.Fragment,{children:[e?T.jsxs(wr,{ref:a.setReference,...y(),children:[T.jsx(ns,{children:e.firstName}),T.jsx(Sr,{children:T.jsx("use",{href:`${ct}#user`})}),T.jsx(rs,{className:o?"open":"",children:T.jsx("use",{href:`${ct}#arrow-down`})})]}):T.jsxs(ts,{to:"/login",children:["Log in",T.jsx(Sr,{children:T.jsx("use",{href:`${ct}#user`})})]}),o&&T.jsx(qa,{context:c,modal:!1,initialFocus:-1,children:T.jsx("div",{className:"Popover",ref:a.setFloating,style:s,"aria-labelledby":p,...f(),children:T.jsxs(os,{children:[T.jsx(Cr,{role:"menuitem",children:T.jsxs(wr,{onClick:r,className:"logout",children:[T.jsx(Er,{children:T.jsx("use",{href:`${ct}#logout`})}),"Log out"]})}),T.jsx(Cr,{role:"menuitem",children:T.jsxs(is,{to:"/settings",children:[T.jsx(Er,{children:T.jsx("use",{href:`${ct}#settings`})}),"Settings"]})})]})})})]})},ss=({isMobile:e,handleClick:t,mobileMenu:n})=>(console.log("isMobile :>> ",e),T.jsx(Ri,{children:T.jsx(xi,{children:T.jsxs(Oi,{children:[e&&T.jsx(Ci,{onClick:()=>t(),mobileMenu:n}),T.jsx(as,{})]})})}));/*! *****************************************************************************
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
***************************************************************************** */var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ye.apply(this,arguments)};function ot(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function de(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function En(){return En=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},En.apply(this,arguments)}function Fn(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var cs=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ls=Fn(function(e){return cs.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function us(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function fs(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var ds=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(fs(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=us(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),fe="-ms-",Qt="-moz-",U="-webkit-",Do="comm",Bn="rule",Wn="decl",ps="@import",No="@keyframes",vs=Math.abs,an=String.fromCharCode,hs=Object.assign;function ms(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Lo(e){return e.trim()}function gs(e,t){return(e=t.exec(e))?e[0]:e}function _(e,t,n){return e.replace(t,n)}function kn(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function Et(e,t,n){return e.slice(t,n)}function Me(e){return e.length}function Hn(e){return e.length}function Lt(e,t){return t.push(e),e}function bs(e,t){return e.map(t).join("")}var sn=1,pt=1,jo=0,ge=0,re=0,bt="";function cn(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:sn,column:pt,length:a,return:""}}function yt(e,t){return hs(cn("",null,null,"",null,null,0),e,{length:-e.length},t)}function ys(){return re}function xs(){return re=ge>0?ue(bt,--ge):0,pt--,re===10&&(pt=1,sn--),re}function we(){return re=ge<jo?ue(bt,ge++):0,pt++,re===10&&(pt=1,sn++),re}function Ne(){return ue(bt,ge)}function Wt(){return ge}function At(e,t){return Et(bt,e,t)}function kt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fo(e){return sn=pt=1,jo=Me(bt=e),ge=0,[]}function Bo(e){return bt="",e}function Ht(e){return Lo(At(ge-1,Rn(e===91?e+2:e===40?e+1:e)))}function ws(e){for(;(re=Ne())&&re<33;)we();return kt(e)>2||kt(re)>3?"":" "}function Ss(e,t){for(;--t&&we()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return At(e,Wt()+(t<6&&Ne()==32&&we()==32))}function Rn(e){for(;we();)switch(re){case e:return ge;case 34:case 39:e!==34&&e!==39&&Rn(re);break;case 40:e===41&&Rn(e);break;case 92:we();break}return ge}function Cs(e,t){for(;we()&&e+re!==57;)if(e+re===84&&Ne()===47)break;return"/*"+At(t,ge-1)+"*"+an(e===47?e:we())}function Es(e){for(;!kt(Ne());)we();return At(e,ge)}function kr(e){return Bo(Vt("",null,null,null,[""],e=Fo(e),0,[0],e))}function Vt(e,t,n,r,o,i,a,s,c){for(var u=0,l=0,d=a,y=0,f=0,p=0,v=1,S=1,w=1,C=0,g="",h=o,x=i,m=r,E=g;S;)switch(p=C,C=we()){case 40:if(p!=108&&ue(E,d-1)==58){kn(E+=_(Ht(C),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:E+=Ht(C);break;case 9:case 10:case 13:case 32:E+=ws(p);break;case 92:E+=Ss(Wt()-1,7);continue;case 47:switch(Ne()){case 42:case 47:Lt(ks(Cs(we(),Wt()),t,n),c);break;default:E+="/"}break;case 123*v:s[u++]=Me(E)*w;case 125*v:case 59:case 0:switch(C){case 0:case 125:S=0;case 59+l:f>0&&Me(E)-d&&Lt(f>32?Or(E+";",r,n,d-1):Or(_(E," ","")+";",r,n,d-2),c);break;case 59:E+=";";default:if(Lt(m=Rr(E,t,n,u,l,o,s,g,h=[],x=[],d),i),C===123)if(l===0)Vt(E,t,m,m,h,i,d,s,x);else switch(y===99&&ue(E,3)===110?100:y){case 100:case 109:case 115:Vt(e,m,m,r&&Lt(Rr(e,m,m,0,0,o,s,g,o,h=[],d),x),o,x,d,s,r?h:x);break;default:Vt(E,m,m,m,[""],x,0,s,x)}}u=l=f=0,v=w=1,g=E="",d=a;break;case 58:d=1+Me(E),f=p;default:if(v<1){if(C==123)--v;else if(C==125&&v++==0&&xs()==125)continue}switch(E+=an(C),C*v){case 38:w=l>0?1:(E+="\f",-1);break;case 44:s[u++]=(Me(E)-1)*w,w=1;break;case 64:Ne()===45&&(E+=Ht(we())),y=Ne(),l=d=Me(g=E+=Es(Wt())),C++;break;case 45:p===45&&Me(E)==2&&(v=0)}}return i}function Rr(e,t,n,r,o,i,a,s,c,u,l){for(var d=o-1,y=o===0?i:[""],f=Hn(y),p=0,v=0,S=0;p<r;++p)for(var w=0,C=Et(e,d+1,d=vs(v=a[p])),g=e;w<f;++w)(g=Lo(v>0?y[w]+" "+C:_(C,/&\f/g,y[w])))&&(c[S++]=g);return cn(e,t,n,o===0?Bn:s,c,u,l)}function ks(e,t,n){return cn(e,t,n,Do,an(ys()),Et(e,2,-2),0)}function Or(e,t,n,r){return cn(e,t,n,Wn,Et(e,0,r),Et(e,r+1,-1),r)}function tt(e,t){for(var n="",r=Hn(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Tr(e,t,n,r){switch(e.type){case ps:case Wn:return e.return=e.return||e.value;case Do:return"";case No:return e.return=e.value+"{"+tt(e.children,r)+"}";case Bn:e.value=e.props.join(",")}return Me(n=tt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Pr(e){var t=Hn(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function Rs(e){return function(t){t.root||(t=t.return)&&e(t)}}var Os=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}},Ts=function(t,n,r){for(var o=0,i=0;o=i,i=Ne(),o===38&&i===12&&(n[r]=1),!kt(i);)we();return At(t,ge)},Ps=function(t,n){var r=-1,o=44;do switch(kt(o)){case 0:o===38&&Ne()===12&&(n[r]=1),t[r]+=Ts(ge-1,n,r);break;case 2:t[r]+=Ht(o);break;case 4:if(o===44){t[++r]=Ne()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=an(o)}while(o=we());return t},As=function(t,n){return Bo(Ps(Fo(t),n))},Ar=new WeakMap,Is=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Ar.get(r))&&!o){Ar.set(t,!0);for(var i=[],a=As(n,i),s=r.props,c=0,u=0;c<a.length;c++)for(var l=0;l<s.length;l++,u++)t.props[u]=i[c]?a[c].replace(/&\f/g,s[l]):s[l]+" "+a[c]}}},$s=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Wo(e,t){switch(ms(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Qt+e+fe+e+e;case 6828:case 4268:return U+e+fe+e+e;case 6165:return U+e+fe+"flex-"+e+e;case 5187:return U+e+_(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return U+e+fe+"flex-item-"+_(e,/flex-|-self/,"")+e;case 4675:return U+e+fe+"flex-line-pack"+_(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+fe+_(e,"shrink","negative")+e;case 5292:return U+e+fe+_(e,"basis","preferred-size")+e;case 6060:return U+"box-"+_(e,"-grow","")+U+e+fe+_(e,"grow","positive")+e;case 4554:return U+_(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return _(_(_(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return _(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return _(_(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return _(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Me(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return _(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Qt+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~kn(e,"stretch")?Wo(_(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,Me(e)-3-(~kn(e,"!important")&&10))){case 107:return _(e,":",":"+U)+e;case 101:return _(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(ue(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+fe+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return U+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+fe+_(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+fe+e+e}return e}var Ms=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Wn:t.return=Wo(t.value,t.length);break;case No:return tt([yt(t,{value:_(t.value,"@","@"+U)})],o);case Bn:if(t.length)return bs(t.props,function(i){switch(gs(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return tt([yt(t,{props:[_(i,/:(read-\w+)/,":"+Qt+"$1")]})],o);case"::placeholder":return tt([yt(t,{props:[_(i,/:(plac\w+)/,":"+U+"input-$1")]}),yt(t,{props:[_(i,/:(plac\w+)/,":"+Qt+"$1")]}),yt(t,{props:[_(i,/:(plac\w+)/,fe+"input-$1")]})],o)}return""})}},zt=typeof document<"u",Ds=zt?void 0:Os(function(){return Fn(function(){var e={};return function(t){return e[t]}})}),Ns=[Ms],Ho=function(t){var n=t.key;if(zt&&n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(h){var x=h.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var o=t.stylisPlugins||Ns,i={},a,s=[];zt&&(a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(h){for(var x=h.getAttribute("data-emotion").split(" "),m=1;m<x.length;m++)i[x[m]]=!0;s.push(h)}));var c,u=[Is,$s];if(zt){var l,d=[Tr,Rs(function(h){l.insert(h)})],y=Pr(u.concat(o,d)),f=function(x){return tt(kr(x),y)};c=function(x,m,E,O){l=E,f(x?x+"{"+m.styles+"}":m.styles),O&&(g.inserted[m.name]=!0)}}else{var p=[Tr],v=Pr(u.concat(o,p)),S=function(x){return tt(kr(x),v)},w=Ds(o)(n),C=function(x,m){var E=m.name;return w[E]===void 0&&(w[E]=S(x?x+"{"+m.styles+"}":m.styles)),w[E]};c=function(x,m,E,O){var D=m.name,$=C(x,m);if(g.compat===void 0)return O&&(g.inserted[D]=!0),$;if(O)g.inserted[D]=$;else return $}}var g={key:n,sheet:new ds({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return g.sheet.hydrate(s),g},Ls=typeof document<"u",Ir=function(t){return t()},js=b.useInsertionEffect?b.useInsertionEffect:!1,Fs=Ls&&js||Ir,Bs=typeof document<"u",en=b.createContext(typeof HTMLElement<"u"?Ho({key:"css"}):null);en.Provider;var Vo=function(t){return b.forwardRef(function(n,r){var o=b.useContext(en);return t(n,o,r)})};Bs||(Vo=function(t){return function(n){var r=b.useContext(en);return r===null?(r=Ho({key:"css"}),b.createElement(en.Provider,{value:r},t(n,r))):t(n,r)}});var Ws=b.createContext({}),On=typeof document<"u";function Hs(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var zo=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||On===!1&&t.compat!==void 0)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Vs=function(t,n,r){zo(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i="",a=n;do{var s=t.insert(n===a?"."+o:"",a,t.sheet,!0);!On&&s!==void 0&&(i+=s),a=a.next}while(a!==void 0);if(!On&&i.length!==0)return i}};function zs(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Us={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qs=/[A-Z]|^ms/g,_s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Uo=function(t){return t.charCodeAt(1)===45},$r=function(t){return t!=null&&typeof t!="boolean"},bn=Fn(function(e){return Uo(e)?e:e.replace(qs,"-$&").toLowerCase()}),Mr=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(_s,function(r,o,i){return De={name:o,styles:i,next:De},o})}return Us[t]!==1&&!Uo(t)&&typeof n=="number"&&n!==0?n+"px":n};function Rt(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return De={name:n.name,styles:n.styles,next:De},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)De={name:r.name,styles:r.styles,next:De},r=r.next;var o=n.styles+";";return o}return Ks(e,t,n)}case"function":{if(e!==void 0){var i=De,a=n(e);return De=i,Rt(e,t,a)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function Ks(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Rt(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object")t!=null&&t[a]!==void 0?r+=i+"{"+t[a]+"}":$r(a)&&(r+=bn(i)+":"+Mr(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var s=0;s<a.length;s++)$r(a[s])&&(r+=bn(i)+":"+Mr(i,a[s])+";");else{var c=Rt(e,t,a);switch(i){case"animation":case"animationName":{r+=bn(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Dr=/label:\s*([^\s;\n{]+)\s*(;|$)/g,De,Ys=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";De=void 0;var a=t[0];a==null||a.raw===void 0?(o=!1,i+=Rt(r,n,a)):i+=a[0];for(var s=1;s<t.length;s++)i+=Rt(r,n,t[s]),o&&(i+=a[s]);Dr.lastIndex=0;for(var c="",u;(u=Dr.exec(i))!==null;)c+="-"+u[1];var l=zs(i)+c;return{name:l,styles:i,next:De}},Xs=ls,Gs=function(t){return t!=="theme"},Nr=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Xs:Gs},Lr=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},Zs=typeof document<"u",Js=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;zo(n,r,o);var i=Fs(function(){return Vs(n,r,o)});if(!Zs&&i!==void 0){for(var a,s=r.name,c=r.next;c!==void 0;)s+=" "+c.name,c=c.next;return b.createElement("style",(a={},a["data-emotion"]=n.key+" "+s,a.dangerouslySetInnerHTML={__html:i},a.nonce=n.sheet.nonce,a))}return null},Qs=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=Lr(t,n,r),c=s||Nr(o),u=!c("as");return function(){var l=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),l[0]==null||l[0].raw===void 0)d.push.apply(d,l);else{d.push(l[0][0]);for(var y=l.length,f=1;f<y;f++)d.push(l[f],l[0][f])}var p=Vo(function(v,S,w){var C=u&&v.as||o,g="",h=[],x=v;if(v.theme==null){x={};for(var m in v)x[m]=v[m];x.theme=b.useContext(Ws)}typeof v.className=="string"?g=Hs(S.registered,h,v.className):v.className!=null&&(g=v.className+" ");var E=Ys(d.concat(h),S.registered,x);g+=S.key+"-"+E.name,a!==void 0&&(g+=" "+a);var O=u&&s===void 0?Nr(C):c,D={};for(var $ in v)u&&$==="as"||O($)&&(D[$]=v[$]);return D.className=g,D.ref=w,b.createElement(b.Fragment,null,b.createElement(Js,{cache:S,serialized:E,isStringTag:typeof C=="string"}),b.createElement(C,D))});return p.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=s,Object.defineProperty(p,"toString",{value:function(){return"."+a}}),p.withComponent=function(v,S){return e(v,En({},n,S,{shouldForwardProp:Lr(p,S,!0)})).apply(void 0,d)},p}},ec=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ce=Qs.bind();ec.forEach(function(e){ce[e]=ce(e)});var qo={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=typeof i;if(a==="string"||a==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&r.push(s)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var c in i)t.call(i,c)&&i[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(qo);var ie=qo.exports,tc=R.createContext(void 0),nc=function(){var e=R.useContext(tc);return e},rc=function(e){var t=R.useState(!!e&&typeof window<"u"&&window.matchMedia(e).matches),n=t[0],r=t[1];return R.useEffect(function(){if(e){var o=window.matchMedia(e),i=function(){o.matches!==n&&r(o.matches)};return i(),o.addEventListener("change",i),function(){return o.removeEventListener("change",i)}}},[n,e]),n},J={root:"ps-sidebar-root",container:"ps-sidebar-container",image:"ps-sidebar-image",backdrop:"ps-sidebar-backdrop",collapsed:"ps-collapsed",toggled:"ps-toggled",rtl:"ps-rtl",broken:"ps-broken"},q={root:"ps-menu-root",menuItemRoot:"ps-menuitem-root",subMenuRoot:"ps-submenu-root",button:"ps-menu-button",prefix:"ps-menu-prefix",suffix:"ps-menu-suffix",label:"ps-menu-label",icon:"ps-menu-icon",subMenuContent:"ps-submenu-content",SubMenuExpandIcon:"ps-submenu-expand-icon",disabled:"ps-disabled",active:"ps-active",open:"ps-open"},oc=ce.div(jr||(jr=de([`
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
`]))),jr,ic={xs:"480px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1600px",always:"always",all:"all"},ac=ce.aside(Fr||(Fr=de([`
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
`])),function(e){var t=e.transitionDuration;return"width, left, right, ".concat(t,"ms")},function(e){var t=e.width;return t},function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},function(e){var t=e.collapsedWidth;return t},J.rtl,J.broken,function(e){var t=e.rtl,n=e.width;return t?"":"left: -".concat(n,";")},J.collapsed,function(e){var t=e.rtl,n=e.collapsedWidth;return t?"":"left: -".concat(n,"; ")},J.toggled,function(e){var t=e.rtl;return t?"":"left: 0;"},J.rtl,function(e){var t=e.width;return t},J.collapsed,function(e){var t=e.collapsedWidth;return t},J.toggled,function(e){var t=e.rootStyles;return t}),sc=ce.div(Br||(Br=de([`
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
`])),function(e){var t=e.backgroundColor;return t?"background-color:".concat(t,";"):""}),cc=ce.img(Wr||(Wr=de([`
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
`])),J.image),ln=R.createContext({collapsed:!1,toggled:!1,rtl:!1,transitionDuration:300}),lc=R.forwardRef(function(e,t){var n,r=e.collapsed,o=e.toggled,i=e.onBackdropClick,a=e.onBreakPoint,s=e.width,c=s===void 0?"250px":s,u=e.collapsedWidth,l=u===void 0?"80px":u,d=e.defaultCollapsed,y=e.className,f=e.children,p=e.breakPoint,v=e.customBreakPoint,S=e.backgroundColor,w=S===void 0?"rgb(249, 249, 249, 0.7)":S,C=e.transitionDuration,g=C===void 0?300:C,h=e.image,x=e.rtl,m=e.rootStyles,E=ot(e,["collapsed","toggled","onBackdropClick","onBreakPoint","width","collapsedWidth","defaultCollapsed","className","children","breakPoint","customBreakPoint","backgroundColor","transitionDuration","image","rtl","rootStyles"]),O=function(){if(v)return"(max-width: ".concat(v,")");if(p)return["xs","sm","md","lg","xl","xxl"].includes(p)?"(max-width: ".concat(ic[p],")"):p==="always"||p==="all"?(p==="always"&&console.warn('The "always" breakPoint is deprecated and will be removed in future release. Please use the "all" breakPoint instead.'),"screen"):"(max-width: ".concat(p,")")},D=R.useRef();D.current=function(W){a==null||a(W)};var $=rc(O()),B=R.useState(!1),I=B[0],V=B[1],k=nc(),L=r??(!I&&d?!0:k==null?void 0:k.collapsed),j=o??(k==null?void 0:k.toggled),P=function(){i==null||i(),k==null||k.updateSidebarState({toggled:!1})};return R.useEffect(function(){var W;(W=D.current)===null||W===void 0||W.call(D,$)},[$]),R.useEffect(function(){k==null||k.updateSidebarState({broken:$,rtl:x,transitionDuration:g})},[$,k==null?void 0:k.updateSidebarState,x,g]),R.useEffect(function(){I||(k==null||k.updateSidebarState({collapsed:d}),V(!0))},[d,I,k==null?void 0:k.updateSidebarState]),R.createElement(ln.Provider,{value:{collapsed:L,toggled:j,rtl:x,transitionDuration:g}},R.createElement(ac,ye({ref:t,"data-testid":"".concat(J.root,"-test-id"),rtl:x,rootStyles:m,width:c,collapsedWidth:l,transitionDuration:g,className:ie(J.root,(n={},n[J.collapsed]=L,n[J.toggled]=j,n[J.broken]=$,n[J.rtl]=x,n),y)},E),R.createElement(sc,{"data-testid":"".concat(J.container,"-test-id"),className:J.container,backgroundColor:w},f),h&&R.createElement(cc,{"data-testid":"".concat(J.image,"-test-id"),src:h,alt:"sidebar background",className:J.image}),$&&j&&R.createElement(oc,{"data-testid":"".concat(J.backdrop,"-test-id"),role:"button",tabIndex:0,"aria-label":"backdrop",onClick:P,onKeyPress:P,className:J.backdrop})))}),Fr,Br,Wr,_o=ce.ul(Hr||(Hr=de([`
  list-style-type: none;
  padding: 0;
  margin: 0;
`],[`
  list-style-type: none;
  padding: 0;
  margin: 0;
`]))),Hr,uc=ce.nav(Vr||(Vr=de([`
  &.`,` {
    `,`
  }
`],[`
  &.`,` {
    `,`
  }
`])),q.root,function(e){var t=e.rootStyles;return t}),Ko=R.createContext(void 0),tn=R.createContext(0),fc=function(e,t){var n=e.children,r=e.className,o=e.transitionDuration,i=o===void 0?300:o,a=e.closeOnClick,s=a===void 0?!1:a,c=e.rootStyles,u=e.menuItemStyles,l=e.renderExpandIcon,d=ot(e,["children","className","transitionDuration","closeOnClick","rootStyles","menuItemStyles","renderExpandIcon"]),y=R.useMemo(function(){return{transitionDuration:i,closeOnClick:s,menuItemStyles:u,renderExpandIcon:l}},[i,s,u,l]);return R.createElement(Ko.Provider,{value:y},R.createElement(tn.Provider,{value:0},R.createElement(uc,ye({ref:t,className:ie(q.root,r),rootStyles:c},d),R.createElement(_o,null,n))))},dc=R.forwardRef(fc),Vr,Vn=function(){var e=R.useContext(Ko);if(e===void 0)throw new Error("Menu Component is required!");return e},pc=ce.div(zr||(zr=de([`
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
      `},function(e){var t=e.rootStyles;return t}),vc=function(e,t){var n=e.children,r=e.open,o=e.openWhenCollapsed,i=e.firstLevel,a=e.collapsed,s=e.defaultOpen,c=ot(e,["children","open","openWhenCollapsed","firstLevel","collapsed","defaultOpen"]),u=Vn().transitionDuration,l=R.useState(s)[0];return R.createElement(pc,ye({"data-testid":"".concat(q.subMenuContent,"-test-id"),ref:t,firstLevel:i,collapsed:a,open:r,openWhenCollapsed:o,transitionDuration:u,defaultOpen:l},c),R.createElement(_o,null,n))},hc=R.forwardRef(vc),zr,Yo=ce.span(Ur||(Ur=de([`
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
`])),function(e){var t=e.rootStyles;return t}),Ur,Xo=ce.span(qr||(qr=de([`
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
`])),function(e){var t=e.rtl;return t?"margin-left: 10px;":"margin-right: 10px;"},function(e){var t=e.rootStyles;return t}),qr,Go=ce.span(_r||(_r=de([`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`],[`
  `,`
  opacity: `,`;
  transition: opacity `,`ms;

  `,`;
`])),function(e){var t=e.rtl;return t?"margin-left: 5px;":"margin-right: 5px;"},function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),_r,Zo=ce.span(Kr||(Kr=de([`
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
`])),function(e){var t=e.firstLevel,n=e.collapsed;return t&&n?"0":"1"},function(e){var t=e.transitionDuration;return t},function(e){var t=e.rootStyles;return t}),Kr,mc=ce.span(Yr||(Yr=de([`
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
    
    `)},function(e){var t=e.rootStyles;return t}),gc=ce.span(Xr||(Xr=de([`
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
        `},function(e){var t=e.open,n=e.rtl;return t?n?"-135deg":"45deg":"-45deg"}),bc=ce.span(Gr||(Gr=de([`
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
`]))),Yr,Xr,Gr,he="top",Oe="bottom",Te="right",me="left",zn="auto",It=[he,Oe,Te,me],vt="start",Ot="end",yc="clippingParents",Jo="viewport",xt="popper",xc="reference",Zr=It.reduce(function(e,t){return e.concat([t+"-"+vt,t+"-"+Ot])},[]),Qo=[].concat(It,[zn]).reduce(function(e,t){return e.concat([t,t+"-"+vt,t+"-"+Ot])},[]),wc="beforeRead",Sc="read",Cc="afterRead",Ec="beforeMain",kc="main",Rc="afterMain",Oc="beforeWrite",Tc="write",Pc="afterWrite",Ac=[wc,Sc,Cc,Ec,kc,Rc,Oc,Tc,Pc];function je(e){return e?(e.nodeName||"").toLowerCase():null}function Pe(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function it(e){var t=Pe(e).Element;return e instanceof t||e instanceof Element}function ke(e){var t=Pe(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Un(e){if(typeof ShadowRoot>"u")return!1;var t=Pe(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Ic(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},o=t.attributes[n]||{},i=t.elements[n];!ke(i)||!je(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function $c(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var o=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=a.reduce(function(c,u){return c[u]="",c},{});!ke(o)||!je(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}var Mc={name:"applyStyles",enabled:!0,phase:"write",fn:Ic,effect:$c,requires:["computeStyles"]};function Le(e){return e.split("-")[0]}var nt=Math.max,nn=Math.min,ht=Math.round;function Tn(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ei(){return!/^((?!chrome|android).)*safari/i.test(Tn())}function mt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&ke(e)&&(o=e.offsetWidth>0&&ht(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ht(r.height)/e.offsetHeight||1);var a=it(e)?Pe(e):window,s=a.visualViewport,c=!ei()&&n,u=(r.left+(c&&s?s.offsetLeft:0))/o,l=(r.top+(c&&s?s.offsetTop:0))/i,d=r.width/o,y=r.height/i;return{width:d,height:y,top:l,right:u+d,bottom:l+y,left:u,x:u,y:l}}function qn(e){var t=mt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function ti(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Un(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function He(e){return Pe(e).getComputedStyle(e)}function Dc(e){return["table","td","th"].indexOf(je(e))>=0}function Xe(e){return((it(e)?e.ownerDocument:e.document)||window.document).documentElement}function un(e){return je(e)==="html"?e:e.assignedSlot||e.parentNode||(Un(e)?e.host:null)||Xe(e)}function Jr(e){return!ke(e)||He(e).position==="fixed"?null:e.offsetParent}function Nc(e){var t=/firefox/i.test(Tn()),n=/Trident/i.test(Tn());if(n&&ke(e)){var r=He(e);if(r.position==="fixed")return null}var o=un(e);for(Un(o)&&(o=o.host);ke(o)&&["html","body"].indexOf(je(o))<0;){var i=He(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function $t(e){for(var t=Pe(e),n=Jr(e);n&&Dc(n)&&He(n).position==="static";)n=Jr(n);return n&&(je(n)==="html"||je(n)==="body"&&He(n).position==="static")?t:n||Nc(e)||t}function _n(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function St(e,t,n){return nt(e,nn(t,n))}function Lc(e,t,n){var r=St(e,t,n);return r>n?n:r}function ni(){return{top:0,right:0,bottom:0,left:0}}function ri(e){return Object.assign({},ni(),e)}function oi(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var jc=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,ri(typeof t!="number"?t:oi(t,It))};function Fc(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Le(n.placement),c=_n(s),u=[me,Te].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var d=jc(o.padding,n),y=qn(i),f=c==="y"?he:me,p=c==="y"?Oe:Te,v=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],S=a[c]-n.rects.reference[c],w=$t(i),C=w?c==="y"?w.clientHeight||0:w.clientWidth||0:0,g=v/2-S/2,h=d[f],x=C-y[l]-d[p],m=C/2-y[l]/2+g,E=St(h,m,x),O=c;n.modifiersData[r]=(t={},t[O]=E,t.centerOffset=E-m,t)}}function Bc(e){var t=e.state,n=e.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||ti(t.elements.popper,o)&&(t.elements.arrow=o))}var Wc={name:"arrow",enabled:!0,phase:"main",fn:Fc,effect:Bc,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function gt(e){return e.split("-")[1]}var Hc={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Vc(e){var t=e.x,n=e.y,r=window,o=r.devicePixelRatio||1;return{x:ht(t*o)/o||0,y:ht(n*o)/o||0}}function Qr(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,y=a.x,f=y===void 0?0:y,p=a.y,v=p===void 0?0:p,S=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=S.x,v=S.y;var w=a.hasOwnProperty("x"),C=a.hasOwnProperty("y"),g=me,h=he,x=window;if(u){var m=$t(n),E="clientHeight",O="clientWidth";if(m===Pe(n)&&(m=Xe(n),He(m).position!=="static"&&s==="absolute"&&(E="scrollHeight",O="scrollWidth")),m=m,o===he||(o===me||o===Te)&&i===Ot){h=Oe;var D=d&&m===x&&x.visualViewport?x.visualViewport.height:m[E];v-=D-r.height,v*=c?1:-1}if(o===me||(o===he||o===Oe)&&i===Ot){g=Te;var $=d&&m===x&&x.visualViewport?x.visualViewport.width:m[O];f-=$-r.width,f*=c?1:-1}}var B=Object.assign({position:s},u&&Hc),I=l===!0?Vc({x:f,y:v}):{x:f,y:v};if(f=I.x,v=I.y,c){var V;return Object.assign({},B,(V={},V[h]=C?"0":"",V[g]=w?"0":"",V.transform=(x.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",V))}return Object.assign({},B,(t={},t[h]=C?v+"px":"",t[g]=w?f+"px":"",t.transform="",t))}function zc(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,c=s===void 0?!0:s,u={placement:Le(t.placement),variation:gt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Qr(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qr(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Uc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:zc,data:{}},jt={passive:!0};function qc(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,c=Pe(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",n.update,jt)}),s&&c.addEventListener("resize",n.update,jt),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",n.update,jt)}),s&&c.removeEventListener("resize",n.update,jt)}}var _c={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:qc,data:{}},Kc={left:"right",right:"left",bottom:"top",top:"bottom"};function Ut(e){return e.replace(/left|right|bottom|top/g,function(t){return Kc[t]})}var Yc={start:"end",end:"start"};function eo(e){return e.replace(/start|end/g,function(t){return Yc[t]})}function Kn(e){var t=Pe(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Yn(e){return mt(Xe(e)).left+Kn(e).scrollLeft}function Xc(e,t){var n=Pe(e),r=Xe(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=ei();(u||!u&&t==="fixed")&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+Yn(e),y:c}}function Gc(e){var t,n=Xe(e),r=Kn(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=nt(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=nt(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Yn(e),c=-r.scrollTop;return He(o||n).direction==="rtl"&&(s+=nt(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function Xn(e){var t=He(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ii(e){return["html","body","#document"].indexOf(je(e))>=0?e.ownerDocument.body:ke(e)&&Xn(e)?e:ii(un(e))}function Ct(e,t){var n;t===void 0&&(t=[]);var r=ii(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),i=Pe(r),a=o?[i].concat(i.visualViewport||[],Xn(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Ct(un(a)))}function Pn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Zc(e,t){var n=mt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function to(e,t,n){return t===Jo?Pn(Xc(e,n)):it(t)?Zc(t,n):Pn(Gc(Xe(e)))}function Jc(e){var t=Ct(un(e)),n=["absolute","fixed"].indexOf(He(e).position)>=0,r=n&&ke(e)?$t(e):e;return it(r)?t.filter(function(o){return it(o)&&ti(o,r)&&je(o)!=="body"}):[]}function Qc(e,t,n,r){var o=t==="clippingParents"?Jc(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce(function(c,u){var l=to(e,u,r);return c.top=nt(l.top,c.top),c.right=nn(l.right,c.right),c.bottom=nn(l.bottom,c.bottom),c.left=nt(l.left,c.left),c},to(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ai(e){var t=e.reference,n=e.element,r=e.placement,o=r?Le(r):null,i=r?gt(r):null,a=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(o){case he:c={x:a,y:t.y-n.height};break;case Oe:c={x:a,y:t.y+t.height};break;case Te:c={x:t.x+t.width,y:s};break;case me:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?_n(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case vt:c[u]=c[u]-(t[l]/2-n[l]/2);break;case Ot:c[u]=c[u]+(t[l]/2-n[l]/2);break}}return c}function Tt(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=r===void 0?e.placement:r,i=n.strategy,a=i===void 0?e.strategy:i,s=n.boundary,c=s===void 0?yc:s,u=n.rootBoundary,l=u===void 0?Jo:u,d=n.elementContext,y=d===void 0?xt:d,f=n.altBoundary,p=f===void 0?!1:f,v=n.padding,S=v===void 0?0:v,w=ri(typeof S!="number"?S:oi(S,It)),C=y===xt?xc:xt,g=e.rects.popper,h=e.elements[p?C:y],x=Qc(it(h)?h:h.contextElement||Xe(e.elements.popper),c,l,a),m=mt(e.elements.reference),E=ai({reference:m,element:g,strategy:"absolute",placement:o}),O=Pn(Object.assign({},g,E)),D=y===xt?O:m,$={top:x.top-D.top+w.top,bottom:D.bottom-x.bottom+w.bottom,left:x.left-D.left+w.left,right:D.right-x.right+w.right},B=e.modifiersData.offset;if(y===xt&&B){var I=B[o];Object.keys($).forEach(function(V){var k=[Te,Oe].indexOf(V)>=0?1:-1,L=[he,Oe].indexOf(V)>=0?"y":"x";$[V]+=I[L]*k})}return $}function el(e,t){t===void 0&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=c===void 0?Qo:c,l=gt(r),d=l?s?Zr:Zr.filter(function(p){return gt(p)===l}):It,y=d.filter(function(p){return u.indexOf(p)>=0});y.length===0&&(y=d);var f=y.reduce(function(p,v){return p[v]=Tt(e,{placement:v,boundary:o,rootBoundary:i,padding:a})[Le(v)],p},{});return Object.keys(f).sort(function(p,v){return f[p]-f[v]})}function tl(e){if(Le(e)===zn)return[];var t=Ut(e);return[eo(e),t,eo(t)]}function nl(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,y=n.altBoundary,f=n.flipVariations,p=f===void 0?!0:f,v=n.allowedAutoPlacements,S=t.options.placement,w=Le(S),C=w===S,g=c||(C||!p?[Ut(S)]:tl(S)),h=[S].concat(g).reduce(function(pe,A){return pe.concat(Le(A)===zn?el(t,{placement:A,boundary:l,rootBoundary:d,padding:u,flipVariations:p,allowedAutoPlacements:v}):A)},[]),x=t.rects.reference,m=t.rects.popper,E=new Map,O=!0,D=h[0],$=0;$<h.length;$++){var B=h[$],I=Le(B),V=gt(B)===vt,k=[he,Oe].indexOf(I)>=0,L=k?"width":"height",j=Tt(t,{placement:B,boundary:l,rootBoundary:d,altBoundary:y,padding:u}),P=k?V?Te:me:V?Oe:he;x[L]>m[L]&&(P=Ut(P));var W=Ut(P),Y=[];if(i&&Y.push(j[I]<=0),s&&Y.push(j[P]<=0,j[W]<=0),Y.every(function(pe){return pe})){D=B,O=!1;break}E.set(B,Y)}if(O)for(var F=p?3:1,X=function(A){var M=h.find(function(N){var H=E.get(N);if(H)return H.slice(0,A).every(function(K){return K})});if(M)return D=M,"break"},ae=F;ae>0;ae--){var Se=X(ae);if(Se==="break")break}t.placement!==D&&(t.modifiersData[r]._skip=!0,t.placement=D,t.reset=!0)}}var rl={name:"flip",enabled:!0,phase:"main",fn:nl,requiresIfExists:["offset"],data:{_skip:!1}};function no(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ro(e){return[he,Te,Oe,me].some(function(t){return e[t]>=0})}function ol(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Tt(t,{elementContext:"reference"}),s=Tt(t,{altBoundary:!0}),c=no(a,r),u=no(s,o,i),l=ro(c),d=ro(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var il={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ol};function al(e,t,n){var r=Le(e),o=[me,he].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[me,Te].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function sl(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=o===void 0?[0,0]:o,a=Qo.reduce(function(l,d){return l[d]=al(d,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}var cl={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:sl};function ll(e){var t=e.state,n=e.name;t.modifiersData[n]=ai({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ul={name:"popperOffsets",enabled:!0,phase:"read",fn:ll,data:{}};function fl(e){return e==="x"?"y":"x"}function dl(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,y=n.tether,f=y===void 0?!0:y,p=n.tetherOffset,v=p===void 0?0:p,S=Tt(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),w=Le(t.placement),C=gt(t.placement),g=!C,h=_n(w),x=fl(h),m=t.modifiersData.popperOffsets,E=t.rects.reference,O=t.rects.popper,D=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,$=typeof D=="number"?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(m){if(i){var V,k=h==="y"?he:me,L=h==="y"?Oe:Te,j=h==="y"?"height":"width",P=m[h],W=P+S[k],Y=P-S[L],F=f?-O[j]/2:0,X=C===vt?E[j]:O[j],ae=C===vt?-O[j]:-E[j],Se=t.elements.arrow,pe=f&&Se?qn(Se):{width:0,height:0},A=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ni(),M=A[k],N=A[L],H=St(0,E[j],pe[j]),K=g?E[j]/2-F-H-M-$.mainAxis:X-H-M-$.mainAxis,te=g?-E[j]/2+F+H+N+$.mainAxis:ae+H+N+$.mainAxis,G=t.elements.arrow&&$t(t.elements.arrow),le=G?h==="y"?G.clientTop||0:G.clientLeft||0:0,Fe=(V=B==null?void 0:B[h])!=null?V:0,oe=P+K-Fe-le,ve=P+te-Fe,Z=St(f?nn(W,oe):W,P,f?nt(Y,ve):Y);m[h]=Z,I[h]=Z-P}if(s){var z,Ce=h==="x"?he:me,ze=h==="x"?Oe:Te,Q=m[x],Ee=x==="y"?"height":"width",Ie=Q+S[Ce],$e=Q-S[ze],Ge=[he,me].indexOf(w)!==-1,at=(z=B==null?void 0:B[x])!=null?z:0,Gn=Ge?Ie:Q-E[Ee]-O[Ee]-at+$.altAxis,Zn=Ge?Q+E[Ee]+O[Ee]-at-$.altAxis:$e,Jn=f&&Ge?Lc(Gn,Q,Zn):St(f?Gn:Ie,Q,f?Zn:$e);m[x]=Jn,I[x]=Jn-Q}t.modifiersData[r]=I}}var pl={name:"preventOverflow",enabled:!0,phase:"main",fn:dl,requiresIfExists:["offset"]};function vl(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function hl(e){return e===Pe(e)||!ke(e)?Kn(e):vl(e)}function ml(e){var t=e.getBoundingClientRect(),n=ht(t.width)/e.offsetWidth||1,r=ht(t.height)/e.offsetHeight||1;return n!==1||r!==1}function gl(e,t,n){n===void 0&&(n=!1);var r=ke(t),o=ke(t)&&ml(t),i=Xe(t),a=mt(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((je(t)!=="body"||Xn(i))&&(s=hl(t)),ke(t)?(c=mt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=Yn(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function bl(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var c=t.get(s);c&&o(c)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||o(i)}),r}function yl(e){var t=bl(e);return Ac.reduce(function(n,r){return n.concat(t.filter(function(o){return o.phase===r}))},[])}function xl(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function wl(e){var t=e.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var oo={placement:"bottom",modifiers:[],strategy:"absolute"};function io(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Sl(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,o=t.defaultOptions,i=o===void 0?oo:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},oo,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],y=!1,f={state:l,setOptions:function(w){var C=typeof w=="function"?w(l.options):w;v(),l.options=Object.assign({},i,l.options,C),l.scrollParents={reference:it(s)?Ct(s):s.contextElement?Ct(s.contextElement):[],popper:Ct(c)};var g=yl(wl([].concat(r,l.options.modifiers)));return l.orderedModifiers=g.filter(function(h){return h.enabled}),p(),f.update()},forceUpdate:function(){if(!y){var w=l.elements,C=w.reference,g=w.popper;if(io(C,g)){l.rects={reference:gl(C,$t(g),l.options.strategy==="fixed"),popper:qn(g)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function($){return l.modifiersData[$.name]=Object.assign({},$.data)});for(var h=0;h<l.orderedModifiers.length;h++){if(l.reset===!0){l.reset=!1,h=-1;continue}var x=l.orderedModifiers[h],m=x.fn,E=x.options,O=E===void 0?{}:E,D=x.name;typeof m=="function"&&(l=m({state:l,options:O,name:D,instance:f})||l)}}}},update:xl(function(){return new Promise(function(S){f.forceUpdate(),S(l)})}),destroy:function(){v(),y=!0}};if(!io(s,c))return f;f.setOptions(u).then(function(S){!y&&u.onFirstUpdate&&u.onFirstUpdate(S)});function p(){l.orderedModifiers.forEach(function(S){var w=S.name,C=S.options,g=C===void 0?{}:C,h=S.effect;if(typeof h=="function"){var x=h({state:l,name:w,instance:f,options:g}),m=function(){};d.push(x||m)}})}function v(){d.forEach(function(S){return S()}),d=[]}return f}}var Cl=[_c,ul,Uc,Mc,cl,rl,pl,Wc,il],El=Sl({defaultModifiers:Cl}),kl=function(e){var t=e.level,n=e.buttonRef,r=e.contentRef,o=R.useContext(ln),i=o.collapsed,a=o.toggled,s=o.transitionDuration,c=R.useRef();return R.useEffect(function(){return t===0&&i&&r.current&&n.current&&(c.current=El(n.current,r.current,{placement:"right",strategy:"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})),function(){var u;return(u=c.current)===null||u===void 0?void 0:u.destroy()}},[t,i,r,n]),R.useEffect(function(){if(r.current&&n.current){var u=new ResizeObserver(function(){var l;(l=c.current)===null||l===void 0||l.update()});u.observe(r.current),u.observe(n.current)}setTimeout(function(){var l;(l=c.current)===null||l===void 0||l.update()},s)},[s,a,r,n]),{popperInstance:c.current}},si=function(e){var t=e.rtl,n=e.level,r=e.collapsed,o=e.disabled,i=e.active;return`
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
  
  `)},Rl=function(e,t){var n=e.className,r=e.component,o=e.children,i=ot(e,["className","component","children"]);if(r){if(typeof r=="string")return R.createElement(r,ye(ye({className:ie(n)},i),{ref:t}),o);var a=r.props,s=a.className,c=ot(a,["className"]);return R.cloneElement(r,ye(ye(ye({className:ie(n,s)},i),c),{ref:t}),o)}else return R.createElement("a",ye({ref:t,className:ie(n)},i),o)},ci=R.forwardRef(Rl),Ol=ce.li(ao||(ao=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},q.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return si({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Tl=function(e,t){var n,r=e.children,o=e.className,i=e.label,a=e.icon,s=e.title,c=e.prefix,u=e.suffix,l=e.open,d=e.defaultOpen,y=e.active,f=y===void 0?!1:y,p=e.disabled,v=p===void 0?!1:p,S=e.rootStyles,w=e.component,C=e.onOpenChange,g=e.onClick,h=e.onKeyUp,x=ot(e,["children","className","label","icon","title","prefix","suffix","open","defaultOpen","active","disabled","rootStyles","component","onOpenChange","onClick","onKeyUp"]),m=R.useContext(tn),E=R.useContext(ln),O=E.collapsed,D=E.rtl,$=E.transitionDuration,B=Vn(),I=B.renderExpandIcon,V=B.closeOnClick,k=B.menuItemStyles,L=B.transitionDuration,j=R.useState(!!d),P=j[0],W=j[1],Y=R.useState(!1),F=Y[0],X=Y[1],ae=R.useState(!1),Se=ae[0],pe=ae[1],A=R.useRef(null),M=R.useRef(null),N=R.useRef(),H=kl({level:m,buttonRef:A,contentRef:M}).popperInstance,K=R.useCallback(function(){var Z,z=M.current;if(z){var Ce=(Z=z==null?void 0:z.querySelector(".".concat(q.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Ce,"px"),N.current=setTimeout(function(){z.style.overflow="auto",z.style.height="auto"},L)}},[L]),te=function(){var Z,z=M.current;if(z){var Ce=(Z=z==null?void 0:z.querySelector(".".concat(q.subMenuContent," > ul")))===null||Z===void 0?void 0:Z.clientHeight;z.style.overflow="hidden",z.style.height="".concat(Ce,"px"),z.offsetHeight,z.style.height="0px"}},G=function(){m===0&&O||(typeof l>"u"?(clearTimeout(Number(N.current)),P?te():K(),C==null||C(!P),W(!P)):C==null||C(!l))};R.useEffect(function(){!(m===0&&O)&&typeof l<"u"&&Se&&(clearTimeout(Number(N.current)),l?K():te())},[O,K,i,m,C,l]);var le=function(Z){g==null||g(Z),G()},Fe=function(Z){h==null||h(Z),Z.key==="Enter"&&G()},oe=function(Z){if(k){var z={level:m,disabled:v,active:f,isSubmenu:!0,open:l??P},Ce=k.root,ze=k.button,Q=k.label,Ee=k.icon,Ie=k.prefix,$e=k.suffix,Ge=k.subMenuContent,at=k.SubMenuExpandIcon;switch(Z){case"root":return typeof Ce=="function"?Ce(z):Ce;case"button":return typeof ze=="function"?ze(z):ze;case"label":return typeof Q=="function"?Q(z):Q;case"icon":return typeof Ee=="function"?Ee(z):Ee;case"prefix":return typeof Ie=="function"?Ie(z):Ie;case"suffix":return typeof $e=="function"?$e(z):$e;case"SubMenuExpandIcon":return typeof at=="function"?at(z):at;case"subMenuContent":return typeof Ge=="function"?Ge(z):Ge;default:return}}};R.useEffect(function(){setTimeout(function(){return H==null?void 0:H.update()},$),O&&m===0&&X(!1)},[O,m,D,$,H]),R.useEffect(function(){var Z=function(Q){var Ee,Ie,$e;!F&&(!((Ee=A.current)===null||Ee===void 0)&&Ee.contains(Q))?X(!0):(V&&!(!((Ie=Q.closest(".".concat(q.menuItemRoot)))===null||Ie===void 0)&&Ie.classList.contains(q.subMenuRoot))||!(!(($e=M.current)===null||$e===void 0)&&$e.contains(Q))&&F)&&X(!1)},z=function(Q){Z(Q.target)},Ce=function(Q){Q.key==="Enter"?Z(Q.target):Q.key==="Escape"&&X(!1)},ze=function(){document.removeEventListener("click",z),document.removeEventListener("keyup",Ce)};return ze(),O&&m===0&&(document.addEventListener("click",z,!1),document.addEventListener("keyup",Ce,!1)),function(){ze()}},[O,m,V,F]),R.useEffect(function(){pe(!0)},[]);var ve=(n={},n[q.active]=f,n[q.disabled]=v,n[q.open]=l??P,n);return R.createElement(Ol,{ref:t,className:ie(q.menuItemRoot,q.subMenuRoot,ve,o),menuItemStyles:oe("root"),level:m,collapsed:O,rtl:D,disabled:v,active:f,buttonStyles:oe("button"),rootStyles:S},R.createElement(ci,ye({"data-testid":"".concat(q.button,"-test-id"),ref:A,title:s,className:ie(q.button,ve),onClick:le,onKeyUp:Fe,component:w,tabIndex:0},x),a&&R.createElement(Xo,{rtl:D,className:ie(q.icon,ve),rootStyles:oe("icon")},a),c&&R.createElement(Go,{collapsed:O,transitionDuration:$,firstLevel:m===0,className:ie(q.prefix,ve),rtl:D,rootStyles:oe("prefix")},c),R.createElement(Yo,{className:ie(q.label,ve),rootStyles:oe("label")},i),u&&R.createElement(Zo,{collapsed:O,transitionDuration:$,firstLevel:m===0,className:ie(q.suffix,ve),rootStyles:oe("suffix")},u),R.createElement(mc,{rtl:D,className:ie(q.SubMenuExpandIcon,ve),collapsed:O,level:m,rootStyles:oe("SubMenuExpandIcon")},I?I({level:m,disabled:v,active:f,open:l??P}):O&&m===0?R.createElement(bc,null):R.createElement(gc,{rtl:D,open:l??P}))),R.createElement(hc,{ref:M,openWhenCollapsed:F,open:l??P,firstLevel:m===0,collapsed:O,defaultOpen:l&&!Se||d,className:ie(q.subMenuContent,ve),rootStyles:oe("subMenuContent")},R.createElement(tn.Provider,{value:m+1},r)))};R.forwardRef(Tl);var ao,Pl=ce.li(so||(so=de([`
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
`])),function(e){var t=e.menuItemStyles;return t},function(e){var t=e.rootStyles;return t},q.button,function(e){var t=e.level,n=e.disabled,r=e.active,o=e.collapsed,i=e.rtl;return si({level:t,disabled:n,active:r,collapsed:o,rtl:i})},function(e){var t=e.buttonStyles;return t}),Al=function(e,t){var n,r=e.children,o=e.icon,i=e.className,a=e.prefix,s=e.suffix,c=e.active,u=c===void 0?!1:c,l=e.disabled,d=l===void 0?!1:l,y=e.component,f=e.rootStyles,p=ot(e,["children","icon","className","prefix","suffix","active","disabled","component","rootStyles"]),v=R.useContext(tn),S=R.useContext(ln),w=S.collapsed,C=S.rtl,g=S.transitionDuration,h=Vn().menuItemStyles,x=function(E){if(h){var O={level:v,disabled:d,active:u,isSubmenu:!1},D=h.root,$=h.button,B=h.label,I=h.icon,V=h.prefix,k=h.suffix;switch(E){case"root":return typeof D=="function"?D(O):D;case"button":return typeof $=="function"?$(O):$;case"label":return typeof B=="function"?B(O):B;case"icon":return typeof I=="function"?I(O):I;case"prefix":return typeof V=="function"?V(O):V;case"suffix":return typeof k=="function"?k(O):k;default:return}}},m=(n={},n[q.active]=u,n[q.disabled]=d,n);return R.createElement(Pl,{ref:t,className:ie(q.menuItemRoot,m,i),menuItemStyles:x("root"),level:v,collapsed:w,rtl:C,disabled:d,active:u,buttonStyles:x("button"),rootStyles:f},R.createElement(ci,ye({className:ie(q.button,m),"data-testid":"".concat(q.button,"-test-id"),component:y,tabIndex:0},p),o&&R.createElement(Xo,{rtl:C,className:ie(q.icon,m),rootStyles:x("icon")},o),a&&R.createElement(Go,{collapsed:w,transitionDuration:g,firstLevel:v===0,className:ie(q.prefix,m),rtl:C,rootStyles:x("prefix")},a),R.createElement(Yo,{className:ie(q.label,m),rootStyles:x("label")},r),s&&R.createElement(Zo,{collapsed:w,transitionDuration:g,firstLevel:v===0,className:ie(q.suffix,m),rootStyles:x("suffix")},s)))},Il=R.forwardRef(Al),so;const $l=ee.div`
  /* display: flex;
  height: 100%;
  min-height: 400px; */
  /* z-index: 2; */

  height: qwerty;

  & aside.ps-broken {
    border: none;
    z-index: 1;
  }

  .ps-sidebar-backdrop {
    /* z-index: 0; */
  }
`,Ml=ee(lc)`
  .${J.container} {
    position: relative;
    background-color: ${({theme:e})=>e.primaryBgColor};

    /* padding: 60px 10px 10px 10px; */

    z-index: 2;

    /* box-shadow: -20px 0px 10px -20px rgba(0, 0, 0, 0.45) inset; */

    /* @media (min-width: 768px) {
      top: 0;
    } */
  }
`,Dl=ee(dc)`
  background-color: ${e=>e.theme.primaryBgColor};
`,Ft=ee(Il)`
  a.active {
    color: ${({theme:e})=>e.linkActiveColor};
  }

  .ps-menu-button:hover {
    color: ${({theme:e})=>e.linkActiveColor};
    background-color: inherit !important;
  }
`,Nl=({setMobileMenu:e})=>T.jsxs(Dl,{children:[T.jsx(Ft,{component:T.jsx(lt,{to:"/",onClick:()=>e(!1)}),children:"Home"}),T.jsx(Ft,{component:T.jsx(lt,{to:"/about",onClick:()=>e(!1)}),children:"About"}),T.jsx(Ft,{component:T.jsx(lt,{to:"/services",onClick:()=>e(!1)}),children:"Services"}),T.jsx(Ft,{component:T.jsx(lt,{to:"/contacts",onClick:()=>e(!1)}),children:"Contacts"})]}),Ll=ee.div`
  background-color: ${({theme:e})=>e.secondaryBgColor};
  padding: ${({theme:e})=>e.global.spacing(14,4,2,4)};
`,yn=ee.li`
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.global.spacing(2)};
  }
`,jl=ee.img`
  border-radius: 50%;
`,co=ee.p`
  color: ${({theme:e})=>e.textColorSecondary};
  font-size: ${({theme:e})=>e.global.text.fontSize.xs};
  font-weight: ${({theme:e})=>e.global.text.fontWeight.m};
`,Fl=()=>{const e=An(uo);return T.jsx(Ll,{children:e&&T.jsx(T.Fragment,{children:T.jsxs("ul",{children:[T.jsx(yn,{children:T.jsx(jl,{src:e.image,alt:"User photo",width:"60"})}),T.jsx(yn,{children:T.jsx(co,{children:e.firstName})}),T.jsx(yn,{children:T.jsx(co,{children:e.email})})]})})})},Bl=({mobileMenu:e,setIsMobile:t,setMobileMenu:n})=>T.jsx($l,{children:T.jsxs(Ml,{toggled:e,customBreakPoint:"767px",onBreakPoint:t,onBackdropClick:()=>n(!1),children:[T.jsx(ki,{}),T.jsx(Fl,{}),T.jsx(Nl,{setMobileMenu:n})]})}),Wl=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(window.matchMedia("(max-width: 767px)").matches),o=()=>t(i=>!i);return b.useEffect(()=>{!n&&t(!1)},[n]),T.jsxs(T.Fragment,{children:[T.jsx(ss,{isMobile:n,handleClick:o,mobileMenu:e}),T.jsxs(wi,{children:[T.jsx(Bl,{setMobileMenu:t,setIsMobile:r,mobileMenu:e}),T.jsx(Si,{children:T.jsx(vi,{})})]})]})},zl=Wl;export{zl as default};
//# sourceMappingURL=index-C6hKwobI.js.map
