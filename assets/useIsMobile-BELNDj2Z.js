import{I as g,w as C,r as O,g as F}from"./index-Qi9TZNPr.js";var N="Expected a function",S=NaN,R="[object Symbol]",z=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,_=/^0o[0-7]+$/i,D=parseInt,G=typeof g=="object"&&g&&g.Object===Object&&g,P=typeof self=="object"&&self&&self.Object===Object&&self,W=G||P||Function("return this")(),H=Object.prototype,U=H.toString,X=Math.max,q=Math.min,v=function(){return W.Date.now()};function J(e,n,r){var o,c,l,f,i,s,u=0,h=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(N);n=M(n)||0,T(r)&&(h=!!r.leading,d="maxWait"in r,l=d?X(M(r.maxWait)||0,n):l,p="trailing"in r?!!r.trailing:p);function y(t){var a=o,m=c;return o=c=void 0,u=t,f=e.apply(m,a),f}function k(t){return u=t,i=setTimeout(b,n),h?y(t):f}function w(t){var a=t-s,m=t-u,E=n-a;return d?q(E,l-m):E}function x(t){var a=t-s,m=t-u;return s===void 0||a>=n||a<0||d&&m>=l}function b(){var t=v();if(x(t))return I(t);i=setTimeout(b,w(t))}function I(t){return i=void 0,p&&o?y(t):(o=c=void 0,f)}function L(){i!==void 0&&clearTimeout(i),u=0,o=s=c=i=void 0}function $(){return i===void 0?f:I(v())}function j(){var t=v(),a=x(t);if(o=arguments,c=this,s=t,a){if(i===void 0)return k(s);if(d)return i=setTimeout(b,n),y(s)}return i===void 0&&(i=setTimeout(b,n)),f}return j.cancel=L,j.flush=$,j}function T(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function K(e){return!!e&&typeof e=="object"}function Q(e){return typeof e=="symbol"||K(e)&&U.call(e)==R}function M(e){if(typeof e=="number")return e;if(Q(e))return S;if(T(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=T(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(z,"");var r=B.test(e);return r||_.test(e)?D(e.slice(2),r?2:8):A.test(e)?S:+e}var V=J;const Y=C(V),ee=(e=F.breakpoint.maxTablet)=>{const[n,r]=O.useState(window.matchMedia(`(max-width: ${e})`).matches);return O.useEffect(()=>{const o=Y(()=>{r(window.matchMedia(`(max-width: ${e})`).matches)},400);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]),n};export{ee as u};
//# sourceMappingURL=useIsMobile-BELNDj2Z.js.map
