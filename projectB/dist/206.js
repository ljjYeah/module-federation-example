/*! For license information please see 206.js.LICENSE.txt */
(self.webpackChunkprojectB=self.webpackChunkprojectB||[]).push([[206],{122:(t,e,n)=>{"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:()=>r})},552:(t,e,n)=>{"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}n.d(e,{Z:()=>o})},756:(t,e,n)=>{"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:()=>r})},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},531:(t,e,n)=>{"use strict";n.d(e,{lX:()=>w,q_:()=>O,ob:()=>p,PP:()=>T,Ep:()=>l});var r=n(122);function o(t){return"/"===t.charAt(0)}function i(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var a=n(177);function c(t){return"/"===t.charAt(0)?t:"/"+t}function s(t){return"/"===t.charAt(0)?t.substr(1):t}function u(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function f(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function l(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function p(t,e,n,a){var c;"string"==typeof t?(c=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(c=(0,r.Z)({},t)).pathname&&(c.pathname=""),c.search?"?"!==c.search.charAt(0)&&(c.search="?"+c.search):c.search="",c.hash?"#"!==c.hash.charAt(0)&&(c.hash="#"+c.hash):c.hash="",void 0!==e&&void 0===c.state&&(c.state=e));try{c.pathname=decodeURI(c.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+c.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(c.key=n),a?c.pathname?"/"!==c.pathname.charAt(0)&&(c.pathname=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],a=e&&e.split("/")||[],c=t&&o(t),s=e&&o(e),u=c||s;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var f=a[a.length-1];n="."===f||".."===f||""===f}else n=!1;for(var l=0,p=a.length;p>=0;p--){var h=a[p];"."===h?i(a,p):".."===h?(i(a,p),l++):l&&(i(a,p),l--)}if(!u)for(;l--;l)a.unshift("..");!u||""===a[0]||a[0]&&o(a[0])||a.unshift("");var d=a.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d}(c.pathname,a.pathname)):c.pathname=a.pathname:c.pathname||(c.pathname="/"),c}function h(){var t=null,e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var d=!("undefined"==typeof window||!window.document||!window.document.createElement);function v(t,e){e(window.confirm(t))}var m="popstate",y="hashchange";function g(){try{return window.history.state||{}}catch(t){return{}}}function w(t){void 0===t&&(t={}),d||(0,a.Z)(!1);var e,n=window.history,o=(-1===(e=window.navigator.userAgent).indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),s=t,w=s.forceRefresh,b=void 0!==w&&w,x=s.getUserConfirmation,P=void 0===x?v:x,C=s.keyLength,E=void 0===C?6:C,O=t.basename?f(c(t.basename)):"";function S(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return O&&(i=u(i,O)),p(i,r,n)}function T(){return Math.random().toString(36).substr(2,E)}var A=h();function k(t){(0,r.Z)(B,t),B.length=n.length,A.notifyListeners(B.location,B.action)}function R(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||L(S(t.state))}function $(){L(S(g()))}var _=!1;function L(t){_?(_=!1,k()):A.confirmTransitionTo(t,"POP",P,(function(e){e?k({action:"POP",location:t}):function(t){var e=B.location,n=M.indexOf(e.key);-1===n&&(n=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(_=!0,U(o))}(t)}))}var j=S(g()),M=[j.key];function Z(t){return O+l(t)}function U(t){n.go(t)}var N=0;function I(t){1===(N+=t)&&1===t?(window.addEventListener(m,R),i&&window.addEventListener(y,$)):0===N&&(window.removeEventListener(m,R),i&&window.removeEventListener(y,$))}var F=!1,B={length:n.length,action:"POP",location:j,createHref:Z,push:function(t,e){var r="PUSH",i=p(t,e,T(),B.location);A.confirmTransitionTo(i,r,P,(function(t){if(t){var e=Z(i),a=i.key,c=i.state;if(o)if(n.pushState({key:a,state:c},null,e),b)window.location.href=e;else{var s=M.indexOf(B.location.key),u=M.slice(0,s+1);u.push(i.key),M=u,k({action:r,location:i})}else window.location.href=e}}))},replace:function(t,e){var r="REPLACE",i=p(t,e,T(),B.location);A.confirmTransitionTo(i,r,P,(function(t){if(t){var e=Z(i),a=i.key,c=i.state;if(o)if(n.replaceState({key:a,state:c},null,e),b)window.location.replace(e);else{var s=M.indexOf(B.location.key);-1!==s&&(M[s]=i.key),k({action:r,location:i})}else window.location.replace(e)}}))},go:U,goBack:function(){U(-1)},goForward:function(){U(1)},block:function(t){void 0===t&&(t=!1);var e=A.setPrompt(t);return F||(I(1),F=!0),function(){return F&&(F=!1,I(-1)),e()}},listen:function(t){var e=A.appendListener(t);return I(1),function(){I(-1),e()}}};return B}var b="hashchange",x={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+s(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:s,decodePath:c},slash:{encodePath:c,decodePath:c}};function P(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function C(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function E(t){window.location.replace(P(window.location.href)+"#"+t)}function O(t){void 0===t&&(t={}),d||(0,a.Z)(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),o=n.getUserConfirmation,i=void 0===o?v:o,s=n.hashType,m=void 0===s?"slash":s,y=t.basename?f(c(t.basename)):"",g=x[m],w=g.encodePath,O=g.decodePath;function S(){var t=O(C());return y&&(t=u(t,y)),p(t)}var T=h();function A(t){(0,r.Z)(F,t),F.length=e.length,T.notifyListeners(F.location,F.action)}var k=!1,R=null;function $(){var t,e,n=C(),r=w(n);if(n!==r)E(r);else{var o=S(),a=F.location;if(!k&&(e=o,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(R===l(o))return;R=null,function(t){if(k)k=!1,A();else{T.confirmTransitionTo(t,"POP",i,(function(e){e?A({action:"POP",location:t}):function(t){var e=F.location,n=M.lastIndexOf(l(e));-1===n&&(n=0);var r=M.lastIndexOf(l(t));-1===r&&(r=0);var o=n-r;o&&(k=!0,Z(o))}(t)}))}}(o)}}var _=C(),L=w(_);_!==L&&E(L);var j=S(),M=[l(j)];function Z(t){e.go(t)}var U=0;function N(t){1===(U+=t)&&1===t?window.addEventListener(b,$):0===U&&window.removeEventListener(b,$)}var I=!1,F={length:e.length,action:"POP",location:j,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=P(window.location.href)),n+"#"+w(y+l(t))},push:function(t,e){var n="PUSH",r=p(t,void 0,void 0,F.location);T.confirmTransitionTo(r,n,i,(function(t){if(t){var e=l(r),o=w(y+e);if(C()!==o){R=e,function(t){window.location.hash=t}(o);var i=M.lastIndexOf(l(F.location)),a=M.slice(0,i+1);a.push(e),M=a,A({action:n,location:r})}else A()}}))},replace:function(t,e){var n="REPLACE",r=p(t,void 0,void 0,F.location);T.confirmTransitionTo(r,n,i,(function(t){if(t){var e=l(r),o=w(y+e);C()!==o&&(R=e,E(o));var i=M.indexOf(l(F.location));-1!==i&&(M[i]=e),A({action:n,location:r})}}))},go:Z,goBack:function(){Z(-1)},goForward:function(){Z(1)},block:function(t){void 0===t&&(t=!1);var e=T.setPrompt(t);return I||(N(1),I=!0),function(){return I&&(I=!1,N(-1)),e()}},listen:function(t){var e=T.appendListener(t);return N(1),function(){N(-1),e()}}};return F}function S(t,e,n){return Math.min(Math.max(t,e),n)}function T(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,o=e.initialEntries,i=void 0===o?["/"]:o,a=e.initialIndex,c=void 0===a?0:a,s=e.keyLength,u=void 0===s?6:s,f=h();function d(t){(0,r.Z)(b,t),b.length=b.entries.length,f.notifyListeners(b.location,b.action)}function v(){return Math.random().toString(36).substr(2,u)}var m=S(c,0,i.length-1),y=i.map((function(t){return p(t,void 0,"string"==typeof t?v():t.key||v())})),g=l;function w(t){var e=S(b.index+t,0,b.entries.length-1),r=b.entries[e];f.confirmTransitionTo(r,"POP",n,(function(t){t?d({action:"POP",location:r,index:e}):d()}))}var b={length:y.length,action:"POP",location:y[m],index:m,entries:y,createHref:g,push:function(t,e){var r="PUSH",o=p(t,e,v(),b.location);f.confirmTransitionTo(o,r,n,(function(t){if(t){var e=b.index+1,n=b.entries.slice(0);n.length>e?n.splice(e,n.length-e,o):n.push(o),d({action:r,location:o,index:e,entries:n})}}))},replace:function(t,e){var r="REPLACE",o=p(t,e,v(),b.location);f.confirmTransitionTo(o,r,n,(function(t){t&&(b.entries[b.index]=o,d({action:r,location:o}))}))},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},canGo:function(t){var e=b.index+t;return e>=0&&e<b.entries.length},block:function(t){return void 0===t&&(t=!1),f.setPrompt(t)},listen:function(t){return f.appendListener(t)}};return b}},679:(t,e,n)=>{"use strict";var r=n(864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var u=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,n,r){if("string"!=typeof n){if(d){var o=h(n);o&&o!==d&&t(e,o,r)}var a=f(n);l&&(a=a.concat(l(n)));for(var c=s(e),v=s(n),m=0;m<a.length;++m){var y=a[m];if(!(i[y]||r&&r[y]||v&&v[y]||c&&c[y])){var g=p(n,y);try{u(e,y,g)}catch(t){}}}}return e}},703:(t,e,n)=>{"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},697:(t,e,n)=>{t.exports=n(703)()},414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},921:(t,e)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,b=n?Symbol.for("react.scope"):60119;function x(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case f:case l:case i:case c:case a:case h:return t;default:switch(t=t&&t.$$typeof){case u:case p:case m:case v:case s:return t;default:return e}}case o:return e}}}function P(t){return x(t)===l}e.AsyncMode=f,e.ConcurrentMode=l,e.ContextConsumer=u,e.ContextProvider=s,e.Element=r,e.ForwardRef=p,e.Fragment=i,e.Lazy=m,e.Memo=v,e.Portal=o,e.Profiler=c,e.StrictMode=a,e.Suspense=h,e.isAsyncMode=function(t){return P(t)||x(t)===f},e.isConcurrentMode=P,e.isContextConsumer=function(t){return x(t)===u},e.isContextProvider=function(t){return x(t)===s},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return x(t)===p},e.isFragment=function(t){return x(t)===i},e.isLazy=function(t){return x(t)===m},e.isMemo=function(t){return x(t)===v},e.isPortal=function(t){return x(t)===o},e.isProfiler=function(t){return x(t)===c},e.isStrictMode=function(t){return x(t)===a},e.isSuspense=function(t){return x(t)===h},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===i||t===l||t===c||t===a||t===h||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===v||t.$$typeof===s||t.$$typeof===u||t.$$typeof===p||t.$$typeof===g||t.$$typeof===w||t.$$typeof===b||t.$$typeof===y)},e.typeOf=x},864:(t,e,n)=>{"use strict";t.exports=n(921)},727:(t,e,n)=>{"use strict";n.d(e,{VK:()=>l});var r=n(977),o=n(552),i=n(410),a=n.n(i),c=n(531),s=(n(697),n(122)),u=n(756),f=n(177),l=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=(0,c.lX)(e.props),e}return(0,o.Z)(e,t),e.prototype.render=function(){return a().createElement(r.F0,{history:this.history,children:this.props.children})},e}(a().Component);a().Component;var p=function(t,e){return"function"==typeof t?t(e):t},h=function(t,e){return"string"==typeof t?(0,c.ob)(t,null,null,e):t},d=function(t){return t},v=a().forwardRef;void 0===v&&(v=d);var m=v((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,i=(0,u.Z)(t,["innerRef","navigate","onClick"]),c=i.target,f=(0,s.Z)({},i,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return f.ref=d!==v&&e||n,a().createElement("a",f)})),y=v((function(t,e){var n=t.component,o=void 0===n?m:n,i=t.replace,c=t.to,l=t.innerRef,y=(0,u.Z)(t,["component","replace","to","innerRef"]);return a().createElement(r.s6.Consumer,null,(function(t){t||(0,f.Z)(!1);var n=t.history,r=h(p(c,t.location),t.location),u=r?n.createHref(r):"",m=(0,s.Z)({},y,{href:u,navigate:function(){var e=p(c,t.location);(i?n.replace:n.push)(e)}});return d!==v?m.ref=e||l:m.innerRef=l,a().createElement(o,m)}))})),g=function(t){return t},w=a().forwardRef;void 0===w&&(w=g),w((function(t,e){var n=t["aria-current"],o=void 0===n?"page":n,i=t.activeClassName,c=void 0===i?"active":i,l=t.activeStyle,d=t.className,v=t.exact,m=t.isActive,b=t.location,x=t.sensitive,P=t.strict,C=t.style,E=t.to,O=t.innerRef,S=(0,u.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(r.s6.Consumer,null,(function(t){t||(0,f.Z)(!1);var n=b||t.location,i=h(p(E,n),n),u=i.pathname,T=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=T?(0,r.LX)(n.pathname,{path:T,exact:v,sensitive:x,strict:P}):null,k=!!(m?m(A,n):A),R=k?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(d,c):d,$=k?(0,s.Z)({},C,{},l):C,_=(0,s.Z)({"aria-current":k&&o||null,className:R,style:$,to:i},S);return g!==w?_.ref=e||O:_.innerRef=O,a().createElement(y,_)}))}))},977:(t,e,n)=>{"use strict";n.d(e,{AW:()=>E,F0:()=>b,rs:()=>O,s6:()=>w,LX:()=>C});var r=n(552),o=n(410),i=n.n(o),a=n(697),c=n.n(a),s=(n(531),n(878)),u=n.n(s),f=1073741823,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:{};function p(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}const h=u().createContext||function(t,e){var n,o,i,a="__create-react-context-"+((l[i="__global_unique_id__"]=(l[i]||0)+1)+"__"),u=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=p(e.props.value),e}(0,r.Z)(n,t);var o=n.prototype;return o.getChildContext=function(){var t;return(t={})[a]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?n=0:(n="function"==typeof e?e(r,o):f,0!=(n|=0)&&this.emitter.set(t.value,n))}var i,a},o.render=function(){return this.props.children},n}(s.Component);u.childContextTypes=((n={})[a]=c().object.isRequired,n);var h=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}(0,r.Z)(n,e);var o=n.prototype;return o.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?f:e},o.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?f:t},o.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},o.getValue=function(){return this.context[a]?this.context[a].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(s.Component);return h.contextTypes=((o={})[a]=c().object,o),{Provider:u,Consumer:h}};var d=n(177),v=n(122),m=n(658),y=n.n(m),g=(n(864),n(756),n(679),function(t){var e=h();return e.displayName="Router-History",e}()),w=function(t){var e=h();return e.displayName="Router",e}(),b=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}(0,r.Z)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i().createElement(w.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i().createElement(g.Provider,{children:this.props.children||null,value:this.props.history}))},e}(i().Component);i().Component,i().Component;var x={},P=0;function C(t,e){void 0===e&&(e={}),("string"==typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,s=n.sensitive,u=void 0!==s&&s;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=x[n]||(x[n]={});if(r[t])return r[t];var o=[],i={regexp:y()(t,o,e),keys:o};return P<1e4&&(r[t]=i,P++),i}(n,{end:i,strict:c,sensitive:u}),o=r.regexp,a=r.keys,s=o.exec(t);if(!s)return null;var f=s[0],l=s.slice(1),p=t===f;return i&&!p?null:{path:n,url:"/"===n&&""===f?"/":f,isExact:p,params:a.reduce((function(t,e,n){return t[e.name]=l[n],t}),{})}}),null)}var E=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return i().createElement(w.Consumer,null,(function(e){e||(0,d.Z)(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?C(n.pathname,t.props):e.match,o=(0,v.Z)({},e,{location:n,match:r}),a=t.props,c=a.children,s=a.component,u=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i().createElement(w.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:s?i().createElement(s,o):u?u(o):null:"function"==typeof c?c(o):null)}))},e}(i().Component);i().Component;var O=function(t){function e(){return t.apply(this,arguments)||this}return(0,r.Z)(e,t),e.prototype.render=function(){var t=this;return i().createElement(w.Consumer,null,(function(e){e||(0,d.Z)(!1);var n,r,o=t.props.location||e.location;return i().Children.forEach(t.props.children,(function(t){if(null==r&&i().isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?C(o.pathname,(0,v.Z)({},t.props,{path:a})):e.match}})),r?i().cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i().Component);i().useContext},585:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},658:(t,e,n)=>{var r=n(585);t.exports=function t(e,n,o){return r(n)||(o=n||o,n=[]),o=o||{},e instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,e)}(e,n):r(e)?function(e,n,r){for(var o=[],i=0;i<e.length;i++)o.push(t(e[i],n,r).source);return f(new RegExp("(?:"+o.join("|")+")",l(r)),n)}(e,n,o):function(t,e,n){return p(i(t,n),e,n)}(e,n,o)},t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",f=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],p=n[1],h=n.index;if(c+=t.slice(a,h),a=h+l.length,p)c+=p[1];else{var d=t[a],v=n[2],m=n[3],y=n[4],g=n[5],w=n[6],b=n[7];c&&(r.push(c),c="");var x=null!=v&&null!=d&&d!==v,P="+"===w||"*"===w,C="?"===w||"*"===w,E=n[2]||f,O=y||g;r.push({name:m||i++,prefix:v||"",delimiter:E,optional:C,repeat:P,partial:x,asterisk:!!b,pattern:O?u(O):b?".*":"[^"+s(E)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",l(e)));return function(e,o){for(var i="",c=e||{},s=(o||{}).pretty?a:encodeURIComponent,u=0;u<t.length;u++){var f=t[u];if("string"!=typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(l=s(p[h]),!n[u].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):s(p),!n[u].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function s(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,e){return t.keys=e,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var u=t[c];if("string"==typeof u)a+=s(u);else{var p=s(u.prefix),h="(?:"+u.pattern+")";e.push(u),u.repeat&&(h+="(?:"+p+h+")*"),a+=h=u.optional?u.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=s(n.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",f(new RegExp("^"+a,l(n)),e)}},379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],s=e.base?c[0]+e.base:c[0],u=n[s]||0,f="".concat(s," ").concat(u);n[s]=u+1;var l=a(f),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:v(p,e),references:1}),r.push(f)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function l(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,d=0;function v(t,e){var n,r,o;if(e.singleton){var i=d++;n=h||(h=s(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=s(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(t,e),u=0;u<n.length;u++){var f=a(n[u]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=s}}}},177:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r=function(t,e){if(!t)throw new Error("Invariant failed")}}}]);