(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function _(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=_(n);fetch(n.href,r)}})();var J,y,ge,H,re,be,G,Z,K,Q,L={},ke=[],xe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function C(t,e){for(var _ in e)t[_]=e[_];return t}function Ne(t){var e=t.parentNode;e&&e.removeChild(t)}function Ae(t,e,_){var o,n,r,i={};for(r in e)r=="key"?o=e[r]:r=="ref"?n=e[r]:i[r]=e[r];if(arguments.length>2&&(i.children=arguments.length>3?J.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)i[r]===void 0&&(i[r]=t.defaultProps[r]);return I(t,i,o,n,null)}function I(t,e,_,o,n){var r={type:t,props:e,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++ge,__i:-1,__u:0};return n==null&&y.vnode!=null&&y.vnode(r),r}function x(t){return t.children}function R(t,e){this.props=t,this.context=e}function A(t,e){if(e==null)return t.__?A(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?A(t):null}function we(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return we(t)}}function le(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!q.__r++||re!==y.debounceRendering)&&((re=y.debounceRendering)||be)(q)}function q(){var t,e,_,o,n,r,i,c;for(H.sort(G);t=H.shift();)t.__d&&(e=H.length,o=void 0,r=(n=(_=t).__v).__e,i=[],c=[],_.__P&&((o=C({},n)).__v=n.__v+1,y.vnode&&y.vnode(o),te(_.__P,o,n,_.__n,_.__P.namespaceURI,32&n.__u?[r]:null,i,r??A(n),!!(32&n.__u),c),o.__v=n.__v,o.__.__k[o.__i]=o,Pe(i,o,c),o.__e!=r&&we(o)),H.length>e&&H.sort(G));q.__r=0}function $e(t,e,_,o,n,r,i,c,a,s,h){var l,v,u,g,$,b=o&&o.__k||ke,f=e.length;for(_.__d=a,Fe(_,e,b),a=_.__d,l=0;l<f;l++)(u=_.__k[l])!=null&&typeof u!="boolean"&&typeof u!="function"&&(v=u.__i===-1?L:b[u.__i]||L,u.__i=l,te(t,u,v,n,r,i,c,a,s,h),g=u.__e,u.ref&&v.ref!=u.ref&&(v.ref&&_e(v.ref,null,u),h.push(u.ref,u.__c||g,u)),$==null&&g!=null&&($=g),65536&u.__u||v.__k===u.__k?a=Se(u,a,t):typeof u.type=="function"&&u.__d!==void 0?a=u.__d:g&&(a=g.nextSibling),u.__d=void 0,u.__u&=-196609);_.__d=a,_.__e=$}function Fe(t,e,_){var o,n,r,i,c,a=e.length,s=_.length,h=s,l=0;for(t.__k=[],o=0;o<a;o++)i=o+l,(n=t.__k[o]=(n=e[o])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?I(null,n,null,null,null):ee(n)?I(x,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?I(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=t,n.__b=t.__b+1,c=Ee(n,_,i,h),n.__i=c,r=null,c!==-1&&(h--,(r=_[c])&&(r.__u|=131072)),r==null||r.__v===null?(c==-1&&l--,typeof n.type!="function"&&(n.__u|=65536)):c!==i&&(c==i-1?l--:c==i+1?l++:c>i?h>a-i?l+=c-i:l--:c<i&&(c==i-l?l-=c-i:l++),c!==o+l&&(n.__u|=65536))):(r=_[i])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=A(r)),X(r,r,!1),_[i]=null,h--);if(h)for(o=0;o<s;o++)(r=_[o])!=null&&!(131072&r.__u)&&(r.__e==t.__d&&(t.__d=A(r)),X(r,r))}function Se(t,e,_){var o,n;if(typeof t.type=="function"){for(o=t.__k,n=0;o&&n<o.length;n++)o[n]&&(o[n].__=t,e=Se(o[n],e,_));return e}t.__e!=e&&(e&&t.type&&!_.contains(e)&&(e=A(t)),_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Ee(t,e,_,o){var n=t.key,r=t.type,i=_-1,c=_+1,a=e[_];if(a===null||a&&n==a.key&&r===a.type&&!(131072&a.__u))return _;if(o>(a!=null&&!(131072&a.__u)?1:0))for(;i>=0||c<e.length;){if(i>=0){if((a=e[i])&&!(131072&a.__u)&&n==a.key&&r===a.type)return i;i--}if(c<e.length){if((a=e[c])&&!(131072&a.__u)&&n==a.key&&r===a.type)return c;c++}}return-1}function ie(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||xe.test(e)?_:_+"px"}function D(t,e,_,o,n){var r;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof o=="string"&&(t.style.cssText=o=""),o)for(e in o)_&&e in _||ie(t.style,e,"");if(_)for(e in _)o&&_[e]===o[e]||ie(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=_,_?o?_.u=o.u:(_.u=Z,t.addEventListener(e,r?Q:K,r)):t.removeEventListener(e,r?Q:K,r);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&_==1?"":_))}}function ce(t){return function(e){if(this.l){var _=this.l[e.type+t];if(e.t==null)e.t=Z++;else if(e.t<_.u)return;return _(y.event?y.event(e):e)}}}function te(t,e,_,o,n,r,i,c,a,s){var h,l,v,u,g,$,b,f,d,w,m,S,F,oe,U,z,P=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(a=!!(32&_.__u),r=[c=e.__e=_.__e]),(h=y.__b)&&h(e);e:if(typeof P=="function")try{if(f=e.props,d="prototype"in P&&P.prototype.render,w=(h=P.contextType)&&o[h.__c],m=h?w?w.props.value:h.__:o,_.__c?b=(l=e.__c=_.__c).__=l.__E:(d?e.__c=l=new P(f,m):(e.__c=l=new R(f,m),l.constructor=P,l.render=Me),w&&w.sub(l),l.props=f,l.state||(l.state={}),l.context=m,l.__n=o,v=l.__d=!0,l.__h=[],l._sb=[]),d&&l.__s==null&&(l.__s=l.state),d&&P.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=C({},l.__s)),C(l.__s,P.getDerivedStateFromProps(f,l.__s))),u=l.props,g=l.state,l.__v=e,v)d&&P.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),d&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(d&&P.getDerivedStateFromProps==null&&f!==u&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(f,m),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(f,l.__s,m)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(l.props=f,l.state=l.__s,l.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(O){O&&(O.__=e)}),S=0;S<l._sb.length;S++)l.__h.push(l._sb[S]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(f,l.__s,m),d&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(u,g,$)})}if(l.context=m,l.props=f,l.__P=t,l.__e=!1,F=y.__r,oe=0,d){for(l.state=l.__s,l.__d=!1,F&&F(e),h=l.render(l.props,l.state,l.context),U=0;U<l._sb.length;U++)l.__h.push(l._sb[U]);l._sb=[]}else do l.__d=!1,F&&F(e),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++oe<25);l.state=l.__s,l.getChildContext!=null&&(o=C(C({},o),l.getChildContext())),d&&!v&&l.getSnapshotBeforeUpdate!=null&&($=l.getSnapshotBeforeUpdate(u,g)),$e(t,ee(z=h!=null&&h.type===x&&h.key==null?h.props.children:h)?z:[z],e,_,o,n,r,i,c,a,s),l.base=e.__e,e.__u&=-161,l.__h.length&&i.push(l),b&&(l.__E=l.__=null)}catch(O){if(e.__v=null,a||r!=null){for(e.__u|=a?160:32;c&&c.nodeType===8&&c.nextSibling;)c=c.nextSibling;r[r.indexOf(c)]=null,e.__e=c}else e.__e=_.__e,e.__k=_.__k;y.__e(O,e,_)}else r==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=Le(_.__e,e,_,o,n,r,i,a,s);(h=y.diffed)&&h(e)}function Pe(t,e,_){e.__d=void 0;for(var o=0;o<_.length;o++)_e(_[o],_[++o],_[++o]);y.__c&&y.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){y.__e(r,n.__v)}})}function Le(t,e,_,o,n,r,i,c,a){var s,h,l,v,u,g,$,b=_.props,f=e.props,d=e.type;if(d==="svg"?n="http://www.w3.org/2000/svg":d==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),r!=null){for(s=0;s<r.length;s++)if((u=r[s])&&"setAttribute"in u==!!d&&(d?u.localName===d:u.nodeType===3)){t=u,r[s]=null;break}}if(t==null){if(d===null)return document.createTextNode(f);t=document.createElementNS(n,d,f.is&&f),r=null,c=!1}if(d===null)b===f||c&&t.data===f||(t.data=f);else{if(r=r&&J.call(t.childNodes),b=_.props||L,!c&&r!=null)for(b={},s=0;s<t.attributes.length;s++)b[(u=t.attributes[s]).name]=u.value;for(s in b)if(u=b[s],s!="children"){if(s=="dangerouslySetInnerHTML")l=u;else if(s!=="key"&&!(s in f)){if(s=="value"&&"defaultValue"in f||s=="checked"&&"defaultChecked"in f)continue;D(t,s,null,u,n)}}for(s in f)u=f[s],s=="children"?v=u:s=="dangerouslySetInnerHTML"?h=u:s=="value"?g=u:s=="checked"?$=u:s==="key"||c&&typeof u!="function"||b[s]===u||D(t,s,u,b[s],n);if(h)c||l&&(h.__html===l.__html||h.__html===t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(l&&(t.innerHTML=""),$e(t,ee(v)?v:[v],e,_,o,d==="foreignObject"?"http://www.w3.org/1999/xhtml":n,r,i,r?r[0]:_.__k&&A(_,0),c,a),r!=null)for(s=r.length;s--;)r[s]!=null&&Ne(r[s]);c||(s="value",g!==void 0&&(g!==t[s]||d==="progress"&&!g||d==="option"&&g!==b[s])&&D(t,s,g,b[s],n),s="checked",$!==void 0&&$!==t[s]&&D(t,s,$,b[s],n))}return t}function _e(t,e,_){try{if(typeof t=="function"){var o=typeof t.__u=="function";o&&t.__u(),o&&e==null||(t.__u=t(e))}else t.current=e}catch(n){y.__e(n,_)}}function X(t,e,_){var o,n;if(y.unmount&&y.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||_e(o,null,e)),(o=t.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){y.__e(r,e)}o.base=o.__P=null}if(o=t.__k)for(n=0;n<o.length;n++)o[n]&&X(o[n],e,_||typeof t.type!="function");_||t.__e==null||Ne(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function Me(t,e,_){return this.constructor(t,_)}function Ue(t,e,_){var o,n,r,i;y.__&&y.__(t,e),n=(o=typeof _=="function")?null:e.__k,r=[],i=[],te(e,t=(!o&&_||e).__k=Ae(x,null,[t]),n||L,L,e.namespaceURI,!o&&_?[_]:n?null:e.firstChild?J.call(e.childNodes):null,r,!o&&_?_:n?n.__e:e.firstChild,o,i),Pe(r,t,i)}J=ke.slice,y={__e:function(t,e,_,o){for(var n,r,i;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(t)),i=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t,o||{}),i=n.__d),i)return n.__E=n}catch(c){t=c}throw t}},ge=0,R.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof t=="function"&&(t=t(C({},_),this.props)),t&&C(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),le(this))},R.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),le(this))},R.prototype.render=x,H=[],be=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,G=function(t,e){return t.__v.__b-e.__v.__b},q.__r=0,Z=0,K=ce(!1),Q=ce(!0);var Oe=0;function p(t,e,_,o,n,r){e||(e={});var i,c,a=e;if("ref"in a)for(c in a={},e)c=="ref"?i=e[c]:a[c]=e[c];var s={type:t,props:a,key:_,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Oe,__i:-1,__u:0,__source:n,__self:r};if(typeof t=="function"&&(i=t.defaultProps))for(c in i)a[c]===void 0&&(a[c]=i[c]);return y.vnode&&y.vnode(s),s}var M,k,V,se,W=0,Ce=[],N=y,ae=N.__b,ue=N.__r,fe=N.diffed,de=N.__c,pe=N.unmount,he=N.__;function ne(t,e){N.__h&&N.__h(k,t,W||e),W=0;var _=k.__H||(k.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function T(t){return W=1,De(He,t)}function De(t,e,_){var o=ne(M++,2);if(o.t=t,!o.__c&&(o.__=[He(void 0,e),function(c){var a=o.__N?o.__N[0]:o.__[0],s=o.t(a,c);a!==s&&(o.__N=[s,o.__[1]],o.__c.setState({}))}],o.__c=k,!k.u)){var n=function(c,a,s){if(!o.__c.__H)return!0;var h=o.__c.__H.__.filter(function(v){return!!v.__c});if(h.every(function(v){return!v.__N}))return!r||r.call(this,c,a,s);var l=!1;return h.forEach(function(v){if(v.__N){var u=v.__[0];v.__=v.__N,v.__N=void 0,u!==v.__[0]&&(l=!0)}}),!(!l&&o.__c.props===c)&&(!r||r.call(this,c,a,s))};k.u=!0;var r=k.shouldComponentUpdate,i=k.componentWillUpdate;k.componentWillUpdate=function(c,a,s){if(this.__e){var h=r;r=void 0,n(c,a,s),r=h}i&&i.call(this,c,a,s)},k.shouldComponentUpdate=n}return o.__N||o.__}function E(t,e){var _=ne(M++,3);!N.__s&&Te(_.__H,e)&&(_.__=t,_.i=e,k.__H.__h.push(_))}function Ie(t){return W=5,Re(function(){return{current:t}},[])}function Re(t,e){var _=ne(M++,7);return Te(_.__H,e)&&(_.__=t(),_.__H=e,_.__h=t),_.__}function je(){for(var t;t=Ce.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(j),t.__H.__h.forEach(Y),t.__H.__h=[]}catch(e){t.__H.__h=[],N.__e(e,t.__v)}}N.__b=function(t){k=null,ae&&ae(t)},N.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),he&&he(t,e)},N.__r=function(t){ue&&ue(t),M=0;var e=(k=t.__c).__H;e&&(V===k?(e.__h=[],k.__h=[],e.__.forEach(function(_){_.__N&&(_.__=_.__N),_.i=_.__N=void 0})):(e.__h.forEach(j),e.__h.forEach(Y),e.__h=[],M=0)),V=k},N.diffed=function(t){fe&&fe(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ce.push(e)!==1&&se===N.requestAnimationFrame||((se=N.requestAnimationFrame)||qe)(je)),e.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.i=void 0})),V=k=null},N.__c=function(t,e){e.some(function(_){try{_.__h.forEach(j),_.__h=_.__h.filter(function(o){return!o.__||Y(o)})}catch(o){e.some(function(n){n.__h&&(n.__h=[])}),e=[],N.__e(o,_.__v)}}),de&&de(t,e)},N.unmount=function(t){pe&&pe(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(o){try{j(o)}catch(n){e=n}}),_.__H=void 0,e&&N.__e(e,_.__v))};var ve=typeof requestAnimationFrame=="function";function qe(t){var e,_=function(){clearTimeout(o),ve&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(_,100);ve&&(e=requestAnimationFrame(_))}function j(t){var e=k,_=t.__c;typeof _=="function"&&(t.__c=void 0,_()),k=e}function Y(t){var e=k;t.__c=t.__(),k=e}function Te(t,e){return!t||t.length!==e.length||e.some(function(_,o){return _!==t[o]})}function He(t,e){return typeof e=="function"?e(t):e}const B=({label:t,state:e,onToggle:_,className:o,color:n,outline:r})=>p("button",{onClick:_,className:`btn btn${r?"-outline":""}-${n??(e?"primary":"secondary")} ${e?"active":""} ${o}`,children:t}),We=()=>p("div",{className:"spinner-border",role:"status",children:p("span",{className:"visually-hidden",children:"Loading..."})}),Be=({pins:t,setError:e,fetchPins:_,armed:o,setLoading:n,state:r,setState:i,reloadArmed:c})=>{const[a,s]=T(r??t.map((f,d)=>({delay:100,relay:d}))),h=Ie(p("input",{})),l=(f,d,w)=>{const m=a;m[f][d]=w,s(m)},v=()=>{i(a);const f=new FormData;a.forEach(({delay:d,relay:w},m)=>{f.append(`delay[${m}]`,d),f.append(`relay[${m}]`,w)}),n(!0),fetch("/sequencer",{method:"POST",body:f}).then(d=>d.json()).then(({ok:d,message:w})=>{c(),n(!1),d||e(w)})},u=f=>f.target.href=`data:application/json,${JSON.stringify(a)}`,g=()=>h.current.click(),$=()=>{n(!0);const f=w=>w.every(({delay:m,relay:S})=>typeof m=="number"&&(typeof S=="number"||S==="skip")),d=new FileReader;d.addEventListener("loadend",w=>{if(w.type==="error")e("Could not load file");else try{const m=JSON.parse(d.result);f(m)?m.length!==a.length?e("File uses different amount of relays!"):i(m):e("Invalid data")}catch{e("File contains invalid JSON")}n(!1)}),d.readAsText(h.current.files[0])},b=()=>a==null?void 0:a.map(({delay:f,relay:d},w)=>p(x,{children:[p("div",{className:"row mb-1",children:p("select",{className:"form-select",onSelect:console.log,onChange:m=>{const S=m.target.value==="skip"?m.target.value:parseInt(m.target.value);l(w,"relay",S)},value:d,children:[p("option",{value:"skip",children:"Skip"}),t.map((m,S)=>p("option",{value:S,children:["Relay ",S+1]}))]})}),p("div",{className:"row mb-1",children:p("div",{className:"input-group",children:[p("input",{className:"form-control",type:"number",value:f,onChange:m=>l(w,"delay",parseInt(m.target.value))}),p("span",{className:"d-block badge bg-black",children:"ms"})]})})]},w));return E(()=>{t.some(f=>f.state)&&fetch("/toggle/all",{method:"PATCH"}).then(()=>_()).catch(e)},[t]),p(x,{children:[p("div",{className:"row",children:p("button",{className:`btn btn-${o?"danger":"secondary"}`,onClick:v,children:"Fire!"})}),p("br",{}),b(),p("br",{}),p("div",{className:"row",children:p("div",{className:"btn-group w-100",children:[p("a",{onClick:u,className:"btn btn-primary",download:"sequencer.json",children:"Save to file"}),p("button",{className:"btn btn-primary",onClick:g,children:["Load from file",p("input",{ref:h,type:"file",onChange:$,hidden:!0})]})]})})]})},Je=({pins:t,setError:e,fetchPins:_,armed:o})=>{const n=r=>{e(null),fetch(`/toggle/${r}`,{method:"PATCH"}).then(i=>i.json()).then(({ok:i,message:c})=>{i?_():e(c)}).catch(i=>e(i))};return p(x,{children:[p("div",{className:"row",children:p(B,{outline:!0,className:"w-100",label:"Toggle all",color:o?"danger":"secondary",state:t==null?void 0:t.every(r=>r.state),onToggle:()=>n("all")})}),p("br",{}),p("div",{className:"row",children:p("div",{className:"btn-group-vertical",children:t.map((r,i)=>p(B,{outline:!0,label:`Relay ${i+1}`,color:o?"danger":"secondary",state:r.state,onToggle:()=>n(i)},r.id))})})]})},me="stepper",ye="manual",ze=()=>{const[t,e]=T(!1),[_,o]=T(ye),[n,r]=T(null),[i,c]=T(null),[a,s]=T(null),[h,l]=T(null),v=_===me,u=v?Be:Je,g=()=>{s(null),fetch("/pins").then(f=>f.json()).then(c).catch(f=>s(f))},$=f=>{s(null),fetch("/arm",{method:f?"PATCH":"GET"}).then(d=>d.json()).then(({armed:d})=>{d||g(),e(d)}).catch(d=>s(d))},b=()=>{fetch("/sequencer").then(f=>f.json()).then(({sequencing:f})=>r(f)).catch(s)};return E(()=>{t&&$(!0)},[_]),E(g,[]),E($,[]),E(b,[]),p("div",{className:"container",children:[!n&&p("div",{className:"row w-100",children:p("div",{className:"btn-group",children:[p(B,{color:"primary",label:`Switch to ${v?"manual":"stepper"} mode`,state:v,onToggle:()=>o(v?ye:me)}),p(B,{color:t?"danger":"secondary",label:"Arm",state:t,onToggle:()=>$(!0)})]})}),p("br",{}),!n&&i?p(u,{pins:i,setError:s,fetchPins:g,armed:t,reloadArmed:()=>$(),setLoading:r,setState:l,state:h}):p(We,{}),a&&p("div",{className:"fixed-bottom alert alert-danger",children:[p("button",{className:"btn btn-close",onClick:()=>s(null)}),p("span",{className:"ms-1",children:typeof a=="string"?a:JSON.stringify(a)})]})]})};Ue(p(ze,{}),document.getElementById("app"));