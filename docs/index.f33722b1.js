var e=globalThis;function t(e){return e&&e.__esModule?e.default:e}var n={},r={},o=e.parcelRequire336f;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire336f=o);var a=o.register;a("dBs8J",function(e,t){function n(e,t,n,r,o,a){return{tag:e,key:t,attrs:n,children:r,text:o,dom:a,domSize:void 0,state:void 0,events:void 0,instance:void 0}}n.normalize=function(e){return Array.isArray(e)?n("[",void 0,void 0,n.normalizeChildren(e),void 0,void 0):null==e||"boolean"==typeof e?null:"object"==typeof e?e:n("#",void 0,void 0,String(e),void 0,void 0)},n.normalizeChildren=function(e){var t=[];if(e.length){for(var r=null!=e[0]&&null!=e[0].key,o=1;o<e.length;o++)if((null!=e[o]&&null!=e[o].key)!==r)throw TypeError(r&&(null!=e[o]||"boolean"==typeof e[o])?"In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.":"In fragments, vnodes must either all have keys or none have keys.");for(var o=0;o<e.length;o++)t[o]=n.normalize(e[o])}return t},e.exports=n}),a("e2F9W",function(e,t){var n=o("dBs8J");e.exports=function(e){return null==e&&(e=""),n("<",void 0,void 0,e,void 0,void 0)}}),a("7PZrX",function(e,t){var n=o("dBs8J"),r=o("5sRXF");e.exports=function(){var e=r.apply(0,arguments);return e.tag="[",e.children=n.normalizeChildren(e.children),e}}),a("5sRXF",function(e,t){var n=o("dBs8J");e.exports=function(){var e,t=arguments[this],r=this+1;if(null==t?t={}:("object"!=typeof t||null!=t.tag||Array.isArray(t))&&(t={},r=this),arguments.length===r+1)e=arguments[r],Array.isArray(e)||(e=[e]);else for(e=[];r<arguments.length;)e.push(arguments[r++]);return n("",t.key,t,e)}}),a("k7iQv",function(e,t){var n=function(e){if(!(this instanceof n))throw Error("Promise must be called with 'new'.");if("function"!=typeof e)throw TypeError("executor must be a function.");var t=this,r=[],o=[],a=u(r,!0),i=u(o,!1),l=t._instance={resolvers:r,rejectors:o},s="function"==typeof setImmediate?setImmediate:setTimeout;function u(e,n){return function a(u){var f;try{if(n&&null!=u&&("object"==typeof u||"function"==typeof u)&&"function"==typeof(f=u.then)){if(u===t)throw TypeError("Promise can't be resolved with itself.");c(f.bind(u))}else s(function(){n||0!==e.length||console.error("Possible unhandled promise rejection:",u);for(var t=0;t<e.length;t++)e[t](u);r.length=0,o.length=0,l.state=n,l.retry=function(){a(u)}})}catch(e){i(e)}}}function c(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(i);try{e(n(a),r)}catch(e){r(e)}}c(e)};n.prototype.then=function(e,t){var r,o,a=this._instance;function i(e,t,n,i){t.push(function(t){if("function"!=typeof e)n(t);else try{r(e(t))}catch(e){o&&o(e)}}),"function"==typeof a.retry&&i===a.state&&a.retry()}var l=new n(function(e,t){r=e,o=t});return i(e,a.resolvers,r,!0),i(t,a.rejectors,o,!1),l},n.prototype.catch=function(e){return this.then(null,e)},n.prototype.finally=function(e){return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})},n.resolve=function(e){return e instanceof n?e:new n(function(t){t(e)})},n.reject=function(e){return new n(function(t,n){n(e)})},n.all=function(e){return new n(function(t,n){var r=e.length,o=0,a=[];if(0===e.length)t([]);else for(var i=0;i<e.length;i++)!function(i){function l(e){o++,a[i]=e,o===r&&t(a)}null!=e[i]&&("object"==typeof e[i]||"function"==typeof e[i])&&"function"==typeof e[i].then?e[i].then(l,n):l(e[i])}(i)})},n.race=function(e){return new n(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},e.exports=n}),a("j25vk",function(e,t){e.exports=o("6JDlc")("undefined"!=typeof window?window:null)}),a("6JDlc",function(e,t){var n=o("dBs8J");e.exports=function(e){var t,r,o=e&&e.document,a={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(e){return e.attrs&&e.attrs.xmlns||a[e.tag]}function l(e,t){if(e.state!==t)throw Error("'vnode.state' must not be modified.")}function s(e){var t=e.state;try{return this.apply(t,arguments)}finally{l(e,t)}}function u(){try{return o.activeElement}catch(e){return null}}function c(e,t,n,r,o,a,i){for(var l=n;l<r;l++){var s=t[l];null!=s&&f(e,s,o,i,a)}}function f(e,t,r,a,l){var u=t.tag;if("string"==typeof u)switch(t.state={},null!=t.attrs&&_(t.attrs,t,r),u){case"#":t.dom=o.createTextNode(t.children),w(e,t.dom,l);break;case"<":p(e,t,a,l);break;case"[":(function(e,t,n,r,a){var i=o.createDocumentFragment();if(null!=t.children){var l=t.children;c(i,l,0,l.length,n,null,r)}t.dom=i.firstChild,t.domSize=i.childNodes.length,w(e,i,a)})(e,t,r,a,l);break;default:(function(e,t,n,r,a){var l=t.tag,s=t.attrs,u=s&&s.is,f=(r=i(t)||r)?u?o.createElementNS(r,l,{is:u}):o.createElementNS(r,l):u?o.createElement(l,{is:u}):o.createElement(l);if(t.dom=f,null!=s&&function(e,t,n){"input"===e.tag&&null!=t.type&&e.dom.setAttribute("type",t.type);var r=null!=t&&"input"===e.tag&&"file"===t.type;for(var o in t)O(e,o,null,t[o],n,r)}(t,s,r),w(e,f,a),!b(t)&&null!=t.children){var d=t.children;c(f,d,0,d.length,n,null,r),"select"===t.tag&&null!=s&&function(e,t){if("value"in t){if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;(e.dom.value!==n||-1===e.dom.selectedIndex)&&(e.dom.value=n)}}"selectedIndex"in t&&O(e,"selectedIndex",null,t.selectedIndex,void 0)}(t,s)}})(e,t,r,a,l)}else(function(e,t){var r;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(r=e.state.view).$$reentrantLock$$)return;r.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(r=e.tag).$$reentrantLock$$)return;r.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(_(e.state,e,t),null!=e.attrs&&_(e.attrs,e,t),e.instance=n.normalize(s.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null})(t,r),null!=t.instance?(f(e,t.instance,r,a,l),t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0):t.domSize=0}var d={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function p(e,t,n,r){var a,i=t.children.match(/^\s*?<(\w+)/im)||[],l=o.createElement(d[i[1]]||"div");"http://www.w3.org/2000/svg"===n?(l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",l=l.firstChild):l.innerHTML=t.children,t.dom=l.firstChild,t.domSize=l.childNodes.length,t.instance=[];for(var s=o.createDocumentFragment();a=l.firstChild;)t.instance.push(a),s.appendChild(a);w(e,s,r)}function h(e,t,n,r,o,a){if(t!==n&&(null!=t||null!=n)){if(null==t||0===t.length)c(e,n,0,n.length,r,o,a);else if(null==n||0===n.length)x(e,t,0,t.length);else{var i=null!=t[0]&&null!=t[0].key,l=null!=n[0]&&null!=n[0].key,s=0,u=0;if(!i)for(;u<t.length&&null==t[u];)u++;if(!l)for(;s<n.length&&null==n[s];)s++;if(i!==l)x(e,t,u,t.length),c(e,n,s,n.length,r,o,a);else if(l){for(var d,p,h,w,b,S,j=t.length-1,E=n.length-1;j>=u&&E>=s&&(w=t[j],b=n[E],w.key===b.key);)w!==b&&v(e,w,b,r,o,a),null!=b.dom&&(o=b.dom),j--,E--;for(;j>=u&&E>=s&&(p=t[u],h=n[s],p.key===h.key);)u++,s++,p!==h&&v(e,p,h,r,g(t,u,o),a);for(;j>=u&&E>=s&&s!==E&&p.key===b.key&&w.key===h.key;)y(e,w,S=g(t,u,o)),w!==h&&v(e,w,h,r,S,a),++s<=--E&&y(e,p,o),p!==b&&v(e,p,b,r,o,a),null!=b.dom&&(o=b.dom),u++,w=t[--j],b=n[E],p=t[u],h=n[s];for(;j>=u&&E>=s&&w.key===b.key;)w!==b&&v(e,w,b,r,o,a),null!=b.dom&&(o=b.dom),j--,E--,w=t[j],b=n[E];if(s>E)x(e,t,u,j+1);else if(u>j)c(e,n,s,E+1,r,o,a);else{var d,O,z=o,N=E-s+1,C=Array(N),P=0,A=0,I=2147483647,T=0;for(A=0;A<N;A++)C[A]=-1;for(A=E;A>=s;A--){null==d&&(d=function(e,t,n){for(var r=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var a=o.key;null!=a&&(r[a]=t)}}return r}(t,u,j+1));var R=d[(b=n[A]).key];null!=R&&(I=R<I?R:-1,C[A-s]=R,w=t[R],t[R]=null,w!==b&&v(e,w,b,r,o,a),null!=b.dom&&(o=b.dom),T++)}if(o=z,T!==j-u+1&&x(e,t,u,j+1),0===T)c(e,n,s,E+1,r,o,a);else if(-1===I)for(P=(O=function(e){for(var t=[0],n=0,r=0,o=0,a=m.length=e.length,o=0;o<a;o++)m[o]=e[o];for(var o=0;o<a;++o)if(-1!==e[o]){var i=t[t.length-1];if(e[i]<e[o]){m[o]=i,t.push(o);continue}for(n=0,r=t.length-1;n<r;){var l=(n>>>1)+(r>>>1)+(n&r&1);e[t[l]]<e[o]?n=l+1:r=l}e[o]<e[t[n]]&&(n>0&&(m[o]=t[n-1]),t[n]=o)}for(n=t.length,r=t[n-1];n-- >0;)t[n]=r,r=m[r];return m.length=0,t}(C)).length-1,A=E;A>=s;A--)h=n[A],-1===C[A-s]?f(e,h,r,a,o):O[P]===A-s?P--:y(e,h,o),null!=h.dom&&(o=n[A].dom);else for(A=E;A>=s;A--)h=n[A],-1===C[A-s]&&f(e,h,r,a,o),null!=h.dom&&(o=n[A].dom)}}else{var _=t.length<n.length?t.length:n.length;for(s=s<u?s:u;s<_;s++)(p=t[s])!==(h=n[s])&&(null!=p||null!=h)&&(null==p?f(e,h,r,a,g(t,s+1,o)):null==h?k(e,p):v(e,p,h,r,g(t,s+1,o),a));t.length>_&&x(e,t,s,t.length),n.length>_&&c(e,n,s,n.length,r,o,a)}}}}function v(e,t,r,o,a,l){var c,d,m=t.tag;if(m===r.tag){if(r.state=t.state,r.events=t.events,function(e,t){do{if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate){var n=s.call(e.attrs.onbeforeupdate,e,t);if(void 0!==n&&!n)break}if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate){var n=s.call(e.state.onbeforeupdate,e,t);if(void 0!==n&&!n)break}return!1}while(!1)return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,e.attrs=t.attrs,e.children=t.children,e.text=t.text,!0}(r,t))return;if("string"==typeof m)switch(null!=r.attrs&&L(r.attrs,r,o),m){case"#":t.children.toString()!==r.children.toString()&&(t.dom.nodeValue=r.children),r.dom=t.dom;break;case"<":t.children!==r.children?(S(e,t),p(e,r,l,a)):(r.dom=t.dom,r.domSize=t.domSize,r.instance=t.instance);break;case"[":(function(e,t,n,r,o,a){h(e,t.children,n.children,r,o,a);var i=0,l=n.children;if(n.dom=null,null!=l){for(var s=0;s<l.length;s++){var u=l[s];null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),i+=u.domSize||1)}1!==i&&(n.domSize=i)}})(e,t,r,o,a,l);break;default:c=l,d=r.dom=t.dom,c=i(r)||c,"textarea"===r.tag&&null==r.attrs&&(r.attrs={}),function(e,t,n,r){if(t&&t===n&&console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),null!=n){"input"===e.tag&&null!=n.type&&e.dom.setAttribute("type",n.type);var o,a="input"===e.tag&&"file"===n.type;for(var i in n)O(e,i,t&&t[i],n[i],r,a)}if(null!=t)for(var i in t)null!=(o=t[i])&&(null==n||null==n[i])&&function(e,t,n,r){if(!("key"===t||"is"===t||null==n||z(t))){if("o"===t[0]&&"n"===t[1])R(e,t,void 0);else if("style"===t)I(e.dom,n,null);else if(N(e,t,r)&&"className"!==t&&"title"!==t&&("value"!==t||"option"!==e.tag&&("select"!==e.tag||-1!==e.dom.selectedIndex||e.dom!==u()))&&("input"!==e.tag||"type"!==t))e.dom[t]=null;else{var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}}}(e,i,o,r)}(r,t.attrs,r.attrs,c),b(r)||h(d,t.children,r.children,o,null,c)}else(function(e,t,r,o,a,i){if(r.instance=n.normalize(s.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");L(r.state,r,o),null!=r.attrs&&L(r.attrs,r,o),null!=r.instance?(null==t.instance?f(e,r.instance,o,i,a):v(e,t.instance,r.instance,o,a,i),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=t.instance?(k(e,t.instance),r.dom=void 0,r.domSize=0):(r.dom=t.dom,r.domSize=t.domSize)})(e,t,r,o,a,l)}else k(e,t),f(e,r,o,l,a)}var m=[];function g(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function y(e,t,n){var r=o.createDocumentFragment();(function e(t,n,r){for(;null!=r.dom&&r.dom.parentNode===t;){if("string"!=typeof r.tag){if(null!=(r=r.instance))continue}else if("<"===r.tag)for(var o=0;o<r.instance.length;o++)n.appendChild(r.instance[o]);else if("["!==r.tag)n.appendChild(r.dom);else if(1===r.children.length){if(null!=(r=r.children[0]))continue}else for(var o=0;o<r.children.length;o++){var a=r.children[o];null!=a&&e(t,n,a)}break}})(e,r,t),w(e,r,n)}function w(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function b(e){if(null==e.attrs||null==e.attrs.contenteditable&&null==e.attrs.contentEditable)return!1;var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=t&&0!==t.length)throw Error("Child node of a contenteditable must be trusted.");return!0}function x(e,t,n,r){for(var o=n;o<r;o++){var a=t[o];null!=a&&k(e,a)}}function k(e,t){var n,r,o=0,a=t.state;if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeremove){var i=s.call(t.state.onbeforeremove,t);null!=i&&"function"==typeof i.then&&(o=1,n=i)}if(t.attrs&&"function"==typeof t.attrs.onbeforeremove){var i=s.call(t.attrs.onbeforeremove,t);null!=i&&"function"==typeof i.then&&(o|=2,r=i)}if(l(t,a),o){if(null!=n){var u=function(){!(1&o)||(o&=2)||c()};n.then(u,u)}if(null!=r){var u=function(){!(2&o)||(o&=1)||c()};r.then(u,u)}}else E(t),j(e,t);function c(){l(t,a),E(t),j(e,t)}}function S(e,t){for(var n=0;n<t.instance.length;n++)e.removeChild(t.instance[n])}function j(e,t){for(;null!=t.dom&&t.dom.parentNode===e;){if("string"!=typeof t.tag){if(null!=(t=t.instance))continue}else if("<"===t.tag)S(e,t);else{if("["!==t.tag&&(e.removeChild(t.dom),!Array.isArray(t.children)))break;if(1===t.children.length){if(null!=(t=t.children[0]))continue}else for(var n=0;n<t.children.length;n++){var r=t.children[n];null!=r&&j(e,r)}}break}}function E(e){if("string"!=typeof e.tag&&"function"==typeof e.state.onremove&&s.call(e.state.onremove,e),e.attrs&&"function"==typeof e.attrs.onremove&&s.call(e.attrs.onremove,e),"string"!=typeof e.tag)null!=e.instance&&E(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];null!=r&&E(r)}}}function O(e,t,n,r,a,i){if(!("key"===t||"is"===t||null==r||z(t))&&(n!==r||"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===u()||"option"===e.tag&&e.dom.parentNode===o.activeElement||"object"==typeof r)&&("type"!==t||"input"!==e.tag)){if("o"===t[0]&&"n"===t[1])return R(e,t,r);if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),r);else if("style"===t)I(e.dom,n,r);else if(N(e,t,a)){if("value"===t){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+r&&(i||e.dom===u())||"select"===e.tag&&null!==n&&e.dom.value===""+r||"option"===e.tag&&null!==n&&e.dom.value===""+r)return;if(i&&""+r!=""){console.error("`value` is read-only on file inputs!");return}}e.dom[t]=r}else"boolean"==typeof r?r?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,r)}}function z(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function N(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}var C=/[A-Z]/g;function P(e){return"-"+e.toLowerCase()}function A(e){return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(C,P)}function I(e,t,n){if(t===n);else if(null==n)e.style.cssText="";else if("object"!=typeof n)e.style.cssText=n;else if(null==t||"object"!=typeof t)for(var r in e.style.cssText="",n){var o=n[r];null!=o&&e.style.setProperty(A(r),String(o))}else{for(var r in n){var o=n[r];null!=o&&(o=String(o))!==String(t[r])&&e.style.setProperty(A(r),o)}for(var r in t)null!=t[r]&&null==n[r]&&e.style.removeProperty(A(r))}}function T(){this._=t}function R(e,n,r){null!=e.events?(e.events._=t,e.events[n]!==r&&(null!=r&&("function"==typeof r||"object"==typeof r)?(null==e.events[n]&&e.dom.addEventListener(n.slice(2),e.events,!1),e.events[n]=r):(null!=e.events[n]&&e.dom.removeEventListener(n.slice(2),e.events,!1),e.events[n]=void 0))):null!=r&&("function"==typeof r||"object"==typeof r)&&(e.events=new T,e.dom.addEventListener(n.slice(2),e.events,!1),e.events[n]=r)}function _(e,t,n){"function"==typeof e.oninit&&s.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(s.bind(e.oncreate,t))}function L(e,t,n){"function"==typeof e.onupdate&&n.push(s.bind(e.onupdate,t))}return T.prototype=Object.create(null),T.prototype.handleEvent=function(e){var t,n=this["on"+e.type];"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),this._&&!1!==e.redraw&&(0,this._)(),!1===t&&(e.preventDefault(),e.stopPropagation())},function(e,o,a){if(!e)throw TypeError("DOM element being rendered to does not exist.");if(null!=r&&e.contains(r))throw TypeError("Node is currently being rendered to and thus is locked.");var i=t,l=r,s=[],c=u(),f=e.namespaceURI;r=e,t="function"==typeof a?a:void 0;try{null==e.vnodes&&(e.textContent=""),o=n.normalizeChildren(Array.isArray(o)?o:[o]),h(e,e.vnodes,o,s,null,"http://www.w3.org/1999/xhtml"===f?void 0:f),e.vnodes=o,null!=c&&u()!==c&&"function"==typeof c.focus&&c.focus();for(var d=0;d<s.length;d++)s[d]()}finally{t=i,r=l}}}}),a("iZais",function(e,t){var n=o("dBs8J");e.exports=function(e,t,r){var o=[],a=!1,i=-1;function l(){for(i=0;i<o.length;i+=2)try{e(o[i],n(o[i+1]),s)}catch(e){r.error(e)}i=-1}function s(){a||(a=!0,t(function(){a=!1,l()}))}return s.sync=l,{mount:function(t,r){if(null!=r&&null==r.view&&"function"!=typeof r)throw TypeError("m.mount expects a component, not a vnode.");var a=o.indexOf(t);a>=0&&(o.splice(a,2),a<=i&&(i-=2),e(t,[])),null!=r&&(o.push(t,r),e(t,n(r),s))},redraw:s}}}),a("5y2KI",function(e,t){var n=o("cITMw"),r=o("9eOch");e.exports=function(e,t,o){var a=0;function i(e){return new t(e)}function l(e){return function(r,a){"string"!=typeof r?(a=r,r=r.url):null==a&&(a={});var l=new t(function(t,o){e(n(r,a.params),a,function(e){if("function"==typeof a.type){if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=new a.type(e[n]);else e=new a.type(e)}t(e)},o)});if(!0===a.background)return l;var s=0;function u(){0==--s&&"function"==typeof o&&o()}return function e(t){var n=t.then;return t.constructor=i,t.then=function(){s++;var r=n.apply(t,arguments);return r.then(u,function(e){if(u(),0===s)throw e}),e(r)},t}(l)}}function s(e,t){for(var n in e.headers)if(r.call(e.headers,n)&&n.toLowerCase()===t)return!0;return!1}return i.prototype=t.prototype,i.__proto__=t,{request:l(function(t,n,o,a){var i,l=null!=n.method?n.method.toUpperCase():"GET",u=n.body,c=(null==n.serialize||n.serialize===JSON.serialize)&&!(u instanceof e.FormData||u instanceof e.URLSearchParams),f=n.responseType||("function"==typeof n.extract?"":"json"),d=new e.XMLHttpRequest,p=!1,h=!1,v=d,m=d.abort;for(var g in d.abort=function(){p=!0,m.call(this)},d.open(l,t,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),c&&null!=u&&!s(n,"content-type")&&d.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||s(n,"accept")||d.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(d.withCredentials=n.withCredentials),n.timeout&&(d.timeout=n.timeout),d.responseType=f,n.headers)r.call(n.headers,g)&&d.setRequestHeader(g,n.headers[g]);d.onreadystatechange=function(e){if(!p&&4===e.target.readyState)try{var r,i=e.target.status>=200&&e.target.status<300||304===e.target.status||/^file:\/\//i.test(t),l=e.target.response;if("json"===f){if(!e.target.responseType&&"function"!=typeof n.extract)try{l=JSON.parse(e.target.responseText)}catch(e){l=null}}else f&&"text"!==f||null!=l||(l=e.target.responseText);if("function"==typeof n.extract?(l=n.extract(e.target,n),i=!0):"function"==typeof n.deserialize&&(l=n.deserialize(l)),i)o(l);else{var s=function(){try{r=e.target.responseText}catch(e){r=l}var t=Error(r);t.code=e.target.status,t.response=l,a(t)};0===d.status?setTimeout(function(){h||s()}):s()}}catch(e){a(e)}},d.ontimeout=function(e){h=!0;var t=Error("Request timed out");t.code=e.target.status,a(t)},"function"==typeof n.config&&(d=n.config(d,n,t)||d)!==v&&(i=d.abort,d.abort=function(){p=!0,i.call(this)}),null==u?d.send():"function"==typeof n.serialize?d.send(n.serialize(u)):u instanceof e.FormData||u instanceof e.URLSearchParams?d.send(u):d.send(JSON.stringify(u))}),jsonp:l(function(t,n,r,o){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+a++,l=e.document.createElement("script");e[i]=function(t){delete e[i],l.parentNode.removeChild(l),r(t)},l.onerror=function(){delete e[i],l.parentNode.removeChild(l),o(Error("JSONP request failed"))},l.src=t+(0>t.indexOf("?")?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(i),e.document.documentElement.appendChild(l)})}}}),a("cITMw",function(e,t){var n=o("iRA82"),r=o("enXzN");e.exports=function(e,t){if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");if(null==t)return e;var o=e.indexOf("?"),a=e.indexOf("#"),i=a<0?e.length:a,l=e.slice(0,o<0?i:o),s={};r(s,t);var u=l.replace(/:([^\/\.-]+)(\.{3})?/g,function(e,n,r){return(delete s[n],null==t[n])?e:r?t[n]:encodeURIComponent(String(t[n]))}),c=u.indexOf("?"),f=u.indexOf("#"),d=f<0?u.length:f,p=u.slice(0,c<0?d:c);o>=0&&(p+=e.slice(o,i)),c>=0&&(p+=(o<0?"?":"&")+u.slice(c,d));var h=n(s);return h&&(p+=(o<0&&c<0?"?":"&")+h),a>=0&&(p+=e.slice(a)),f>=0&&(p+=(a<0?"":"&")+u.slice(f)),p}}),a("iRA82",function(e,t){e.exports=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)(function e(n,r){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(n+"["+o+"]",r[o]);else if("[object Object]"===Object.prototype.toString.call(r))for(var o in r)e(n+"["+o+"]",r[o]);else t.push(encodeURIComponent(n)+(null!=r&&""!==r?"="+encodeURIComponent(r):""))})(n,e[n]);return t.join("&")}}),a("enXzN",function(e,t){var n=o("9eOch");e.exports=Object.assign||function(e,t){for(var r in t)n.call(t,r)&&(e[r]=t[r])}}),a("9eOch",function(e,t){e.exports=({}).hasOwnProperty}),a("4Ppi2",function(e,t){var n=o("7EF0O");e.exports=o("eFHZ8")("undefined"!=typeof window?window:null,n)}),a("7EF0O",function(e,t){var n=o("j25vk");e.exports=o("iZais")(n,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:null,"undefined"!=typeof console?console:null)}),a("eFHZ8",function(e,t){var n=o("dBs8J"),r=o("iVcuU"),a=o("2uPnQ"),i=o("cITMw"),l=o("7lWrV"),s=o("8KlxE"),u=o("enXzN"),c=o("e9o88"),f={};function d(e){try{return decodeURIComponent(e)}catch(t){return e}}e.exports=function(e,t){var o,p,h,v,m,g,y=null==e?null:"function"==typeof e.setImmediate?e.setImmediate:e.setTimeout,w=a.resolve(),b=!1,x=!1,k=0,S=f,j={onbeforeupdate:function(){return!(!(k=k?2:1)||f===S)},onremove:function(){e.removeEventListener("popstate",z,!1),e.removeEventListener("hashchange",O,!1)},view:function(){if(k&&f!==S){var e=[n(h,v.key,v)];return S&&(e=S.render(e[0])),e}}},E=C.SKIP={};function O(){b=!1;var n=e.location.hash;"#"!==C.prefix[0]&&(n=e.location.search+n,"?"!==C.prefix[0]&&"/"!==(n=e.location.pathname+n)[0]&&(n="/"+n));var r=n.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,d).slice(C.prefix.length),a=l(r);function i(e){console.error(e),N(p,null,{replace:!0})}u(a.params,e.history.state),function e(n){for(;n<o.length;n++)if(o[n].check(a)){var l=o[n].component,s=o[n].route,u=l,c=g=function(o){if(c===g){if(o===E)return e(n+1);h=null!=o&&("function"==typeof o.view||"function"==typeof o)?o:"div",v=a.params,m=r,g=null,S=l.render?l:null,2===k?t.redraw():(k=2,t.redraw.sync())}};l.view||"function"==typeof l?(l={},c(u)):l.onmatch?w.then(function(){return l.onmatch(a.params,r,s)}).then(c,r===p?null:i):c("div");return}if(r===p)throw Error("Could not resolve default route "+p+".");N(p,null,{replace:!0})}(0)}function z(){b||(b=!0,y(O))}function N(t,n,r){if(t=i(t,n),x){z();var o=r?r.state:null,a=r?r.title:null;r&&r.replace?e.history.replaceState(o,a,C.prefix+t):e.history.pushState(o,a,C.prefix+t)}else e.location.href=C.prefix+t}function C(n,r,a){if(!n)throw TypeError("DOM element being rendered to does not exist.");if(o=Object.keys(a).map(function(e){if("/"!==e[0])throw SyntaxError("Routes must start with a '/'.");if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");return{route:e,component:a[e],check:s(e)}}),p=r,null!=r){var i=l(r);if(!o.some(function(e){return e.check(i)}))throw ReferenceError("Default route doesn't match any known routes.")}"function"==typeof e.history.pushState?e.addEventListener("popstate",z,!1):"#"===C.prefix[0]&&e.addEventListener("hashchange",O,!1),x=!0,t.mount(n,j),O()}return C.set=function(e,t,n){null!=g&&((n=n||{}).replace=!0),g=null,N(e,t,n)},C.get=function(){return m},C.prefix="#!",C.Link={view:function(e){var t,n,o,a=r(e.attrs.selector||"a",c(e.attrs,["options","params","selector","onclick"]),e.children);return(a.attrs.disabled=!!a.attrs.disabled)?(a.attrs.href=null,a.attrs["aria-disabled"]="true"):(t=e.attrs.options,n=e.attrs.onclick,o=i(a.attrs.href,e.attrs.params),a.attrs.href=C.prefix+o,a.attrs.onclick=function(e){var r;"function"==typeof n?r=n.call(e.currentTarget,e):null==n||"object"!=typeof n||"function"==typeof n.handleEvent&&n.handleEvent(e),!1===r||e.defaultPrevented||0!==e.button&&0!==e.which&&1!==e.which||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),e.redraw=!1,C.set(o,null,t))}),a}},C.param=function(e){return v&&null!=e?v[e]:v},C}}),a("iVcuU",function(e,t){var n=o("dBs8J"),r=o("5sRXF"),a=o("9eOch"),i=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,l={};function s(e){for(var t in e)if(a.call(e,t))return!1;return!0}e.exports=function(e){if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");var t=r.apply(1,arguments);return"string"==typeof e&&(t.children=n.normalizeChildren(t.children),"["!==e)?function(e,t){var n=t.attrs,r=a.call(n,"class"),o=r?n.class:n.className;if(t.tag=e.tag,t.attrs={},!s(e.attrs)&&!s(n)){var i={};for(var l in n)a.call(n,l)&&(i[l]=n[l]);n=i}for(var l in e.attrs)a.call(e.attrs,l)&&"className"!==l&&!a.call(n,l)&&(n[l]=e.attrs[l]);for(var l in(null!=o||null!=e.attrs.className)&&(n.className=null!=o?null!=e.attrs.className?String(e.attrs.className)+" "+String(o):o:null!=e.attrs.className?e.attrs.className:null),r&&(n.class=null),n)if(a.call(n,l)&&"key"!==l){t.attrs=n;break}return t}(l[e]||function(e){for(var t,n="div",r=[],o={};t=i.exec(e);){var a=t[1],s=t[2];if(""===a&&""!==s)n=s;else if("#"===a)o.id=s;else if("."===a)r.push(s);else if("["===t[3][0]){var u=t[6];u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(u):o[t[4]]=""===u?u:u||!0}}return r.length>0&&(o.className=r.join(" ")),l[e]={tag:n,attrs:o}}(e),t):(t.tag=e,t)}}),a("2uPnQ",function(t,n){var r=o("k7iQv");"undefined"!=typeof window?(void 0===window.Promise?window.Promise=r:window.Promise.prototype.finally||(window.Promise.prototype.finally=r.prototype.finally),t.exports=window.Promise):void 0!==e?(void 0===e.Promise?e.Promise=r:e.Promise.prototype.finally||(e.Promise.prototype.finally=r.prototype.finally),t.exports=e.Promise):t.exports=r}),a("7lWrV",function(e,t){var n=o("gZZfO");e.exports=function(e){var t=e.indexOf("?"),r=e.indexOf("#"),o=r<0?e.length:r,a=e.slice(0,t<0?o:t).replace(/\/{2,}/g,"/");return a?("/"!==a[0]&&(a="/"+a),a.length>1&&"/"===a[a.length-1]&&(a=a.slice(0,-1))):a="/",{path:a,params:t<0?{}:n(e.slice(t+1,o))}}}),a("gZZfO",function(e,t){function n(e){try{return decodeURIComponent(e)}catch(t){return e}}e.exports=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),r={},o={},a=0;a<t.length;a++){var i=t[a].split("="),l=n(i[0]),s=2===i.length?n(i[1]):"";"true"===s?s=!0:"false"===s&&(s=!1);var u=l.split(/\]\[?|\[/),c=o;l.indexOf("[")>-1&&u.pop();for(var f=0;f<u.length;f++){var d=u[f],p=u[f+1],h=""==p||!isNaN(parseInt(p,10));if(""===d){var l=u.slice(0,f).join();null==r[l]&&(r[l]=Array.isArray(c)?c.length:0),d=r[l]++}else if("__proto__"===d)break;if(f===u.length-1)c[d]=s;else{var v=Object.getOwnPropertyDescriptor(c,d);null!=v&&(v=v.value),null==v&&(c[d]=v=h?[]:{}),c=v}}}return o}}),a("8KlxE",function(e,t){var n=o("7lWrV");e.exports=function(e){var t=n(e),r=Object.keys(t.params),o=[],a=RegExp("^"+t.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(e,t,n){return null==t?"\\"+e:(o.push({k:t,r:"..."===n}),"..."===n)?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||"")})+"$");return function(e){for(var n=0;n<r.length;n++)if(t.params[r[n]]!==e.params[r[n]])return!1;if(!o.length)return a.test(e.path);var i=a.exec(e.path);if(null==i)return!1;for(var n=0;n<o.length;n++)e.params[o[n].k]=o[n].r?i[n+1]:decodeURIComponent(i[n+1]);return!0}}}),a("e9o88",function(e,t){var n=o("9eOch"),r=RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");e.exports=function(e,t){var o={};if(null!=t)for(var a in e)n.call(e,a)&&!r.test(a)&&0>t.indexOf(a)&&(o[a]=e[a]);else for(var a in e)n.call(e,a)&&!r.test(a)&&(o[a]=e[a]);return o}});var i={},l={},s=o("iVcuU");s.trust=o("e2F9W"),s.fragment=o("7PZrX"),l=s;var u={},c=o("2uPnQ"),f=o("7EF0O");u=o("5y2KI")("undefined"!=typeof window?window:null,c,f.redraw);var f=o("7EF0O"),d=function(){return l.apply(this,arguments)};d.m=l,d.trust=l.trust,d.fragment=l.fragment,d.Fragment="[",d.mount=f.mount,d.route=o("4Ppi2"),d.render=o("j25vk"),d.redraw=f.redraw,d.request=u.request,d.jsonp=u.jsonp,d.parseQueryString=o("gZZfO"),d.buildQueryString=o("iRA82"),d.parsePathname=o("7lWrV"),d.buildPathname=o("cITMw"),d.vnode=o("dBs8J"),d.PromisePolyfill=o("k7iQv"),d.censor=o("e9o88");var p=y(i=d),h={};function v(){}Object.defineProperty(h,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(h,"default",{get:()=>m,set:void 0,enumerable:!0,configurable:!0});var m=function(e){function t(t){return new Proxy(v,{apply:(n,r,o)=>e(t,[],...o),get:(n,r)=>{let o=[r],a=new Proxy(v,{get:(e,t)=>(o.push(t),a),apply:(n,r,a)=>e(t,o,...a)});return a}})}return new Proxy(e=>t(e),{get:(e,n)=>t(e[n]||n)})},g=y(h);function y(e){return e&&e.__esModule?e:{default:e}}var w=function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e[0].toLowerCase()})};const{keys:b}=Object,{span:x,br:k,hr:S,button:j,link:E,body:O,html:z,head:N,div:C,h1:P,p:A,table:I,tr:T,td:R,th:_,input:L,option:$,select:M}=t(function(){return(0,g.default)(function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var a=t.map(w).join("."),i=a.length?[e,a].join(".").replace(".$","#"):e;return p.default.apply(void 0,[i].concat(r))})})(t(i)),F=["wo","tut","wer","wen","mit"],J={count:0,frags:[{wo:"am Bahnhof",tut:"kontrolliert",wer:"der Schaffner",wen:"meinen Vater"}],pattern:"Wo tut Wer wen?",sentences:[]};localStorage.getItem("satzwerft")&&(J.frags=JSON.parse(localStorage.getItem("satzwerft"))),localStorage.getItem("satzwerft_")&&(J.sentences=JSON.parse(localStorage.getItem("satzwerft_")));const U=[{name:"water",homepage:"https://watercss.kognise.dev/",url:"https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"},{name:"pico",homepage:"https://picocss.com/",url:"https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"},{name:"milligram",homepage:"https://milligram.io/",url:"https://cdn.jsdelivr.net/npm/milligram@1/dist/milligram.min.css"},{name:"sakura",homepage:"https://oxal.org/projects/sakura/",url:"https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css"},{name:"sakura-dark",homepage:"https://oxal.org/projects/sakura/",url:"https://cdn.jsdelivr.net/npm/sakura.css/css/sakura-dark.css"},{name:"bolt",homepage:"https://boltcss.com/",url:"https://unpkg.com/boltcss/bolt.min.css"}];let D=localStorage.getItem("theme")||0;t(i).mount(document.head,{view:e=>[E({rel:"stylesheet",href:`${U[D].url}`})]});const Z=e=>e[Math.floor(Math.random()*e.length)],q=()=>{let{pattern:e,frags:n}=J;J.sentences.push(F.reduce((e,t)=>(e[t]=Z(n)[t],e),{})),t(i).redraw()},B=e=>{let{pattern:t,frags:n}=J,r=t.toLowerCase().replace(/[^a-z ]/,"").split(" ").map(t=>F.includes(t)?e[t]:t).join(" ");return r[0]=r[0].toUpperCase(),r+"."};t(i).mount(document.body,{view:e=>C.container([P("Satzwerft"),I(T(_(),F.map(e=>_(e))),J.frags.map(e=>T([R(j({onclick:()=>{J.frags=J.frags.filter(t=>t!==e)}},"×")),F.map(t=>R(L({value:e[t],oninput:n=>e[t]=n.target.value})))]))),j({onclick:()=>J.frags.push({})},"Neue Zeile"),j({onclick:()=>{localStorage.setItem("satzwerft",JSON.stringify(J.frags)),localStorage.setItem("satzwerft_",JSON.stringify(J.sentences))}},"Speichern"),S(),"Satzbau: ",L({value:J.pattern,oninput:e=>J.pattern=e.target.value}),j({onclick:()=>q()},"Schütteln"),S(),I(J.sentences.map(e=>T(R(j({onclick:()=>{J.sentences=J.sentences.filter(t=>t!==e)}},"×")),R(x(B(e)))))),S(),M({onchange:e=>{D=e.target.value,localStorage.setItem("theme",D),t(i).redraw()}},U.map((e,t)=>$({value:t,selected:t==D},e.name)))])});
//# sourceMappingURL=index.f33722b1.js.map