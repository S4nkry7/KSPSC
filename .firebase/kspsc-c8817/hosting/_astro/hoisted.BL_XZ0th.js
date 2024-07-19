const b="data-astro-transition-persist";function Z(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ee(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function te(e){for(const t of Array.from(document.head.children)){const n=re(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ne(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=e.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ie(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const oe=()=>{const e=document.activeElement;if(e?.closest(`[${b}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>P({activeElement:e,start:t,end:n})}return()=>P({activeElement:e})}else return()=>P({activeElement:null})},P=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},re=(e,t)=>{const n=e.getAttribute(b),o=n&&t.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ie=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},se=e=>{Z(e),ee(e),te(e);const t=oe();ne(e.body,document.body),t()},ae="astro:before-preparation",ce="astro:after-preparation",le="astro:before-swap",ue="astro:after-swap",de=e=>document.dispatchEvent(new Event(e));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,a,l,i,c,d,u){super(t,n),this.from=o,this.to=r,this.direction=a,this.navigationType=l,this.sourceElement=i,this.info=c,this.newDocument=d,this.signal=u,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class fe extends U{formData;loader;constructor(t,n,o,r,a,l,i,c,d,u){super(ae,{cancelable:!0},t,n,o,r,a,l,i,c),this.formData=d,this.loader=u.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class me extends U{direction;viewTransition;swap;constructor(t,n){super(le,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>se(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function he(e,t,n,o,r,a,l,i,c){const d=new fe(e,t,n,o,r,a,window.document,l,i,c);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(de(ce),d.navigationType!=="traverse"&&x({scrollX,scrollY}))),d}function we(e,t){const n=new me(e,t);return document.dispatchEvent(n),n.swap(),n}const ye=history.pushState.bind(history),A=history.replaceState.bind(history),x=e=>{history.state&&(history.scrollRestoration="manual",A({...history.state,...e},""))},N=!!document.startViewTransition,O=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),W=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,y,S;const B=e=>document.dispatchEvent(new Event(e)),V=()=>B("astro:page-load"),pe=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},M="data-astro-transition-persist",$="data-astro-transition",k="data-astro-transition-fallback",T="data-vite-dev-id";let C,g=0;history.state?(g=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):O()&&(A({index:g,scrollX,scrollY},""),history.scrollRestoration="manual");async function be(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function j(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ge(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const a=new Promise(l=>{o.onload=o.onerror=l});e=e.then(()=>a)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const K=(e,t,n,o,r)=>{const a=W(t,e),l=document.title;document.title=o;let i=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const c=history.state;A({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",e.href)}else ye({...n.state,index:++g,scrollX:0,scrollY:0},"",e.href);if(document.title=l,S=e,a||(scrollTo({left:0,top:0,behavior:"instant"}),i=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const c=history.state;location.href=e.href,history.state||(A(c,""),a&&window.dispatchEvent(new PopStateEvent("popstate")))}else i||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ve(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${M}="${n.getAttribute(M)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(a=>o.addEventListener(a,r)),document.head.append(o)}))}return t}async function F(e,t,n,o,r){async function a(c){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const u=document.getAnimations();document.documentElement.setAttribute(k,c);const w=document.getAnimations().filter(h=>!u.includes(h)&&!d(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await a("old")}catch{}const l=document.title,i=we(e,n.viewTransition);K(i.to,i.from,t,l,o),B(ue),r==="animate"&&(!n.transitionSkipped&&!i.signal.aborted?a("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Te(){return f?.controller.abort(),f={controller:new AbortController}}async function z(e,t,n,o,r){const a=Te();if(!O()||location.origin!==n.origin){a===f&&(f=void 0),location.href=n.href;return}const l=r?"traverse":o.history==="replace"?"replace":"push";if(l!=="traverse"&&x({scrollX,scrollY}),W(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){K(n,t,o,document.title,r),a===f&&(f=void 0);return}const i=await he(t,n,e,l,o.sourceElement,o.info,a.controller.signal,o.formData,c);if(i.defaultPrevented||i.signal.aborted){a===f&&(f=void 0),i.signal.aborted||(location.href=n.href);return}async function c(s){const w=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const p=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=p?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await be(w,h);if(m===null){s.preventDefault();return}if(m.redirected){const p=new URL(m.redirected);if(p.origin!==s.to.origin){s.preventDefault();return}s.to=p}if(C??=new DOMParser,s.newDocument=C.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(p=>p.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const R=ve(s.newDocument);R.length&&!s.signal.aborted&&await Promise.all(R),s.signal.aborted||await Ee(s.newDocument,s.to,s.signal)}async function d(){if(y&&y.viewTransition){try{y.viewTransition.skipTransition()}catch{}try{await y.viewTransition.updateCallbackDone}catch{}}return y={transitionSkipped:!1}}const u=await d();if(i.signal.aborted){a===f&&(f=void 0);return}if(document.documentElement.setAttribute($,i.direction),N)u.viewTransition=document.startViewTransition(async()=>await F(i,o,u,r));else{const s=(async()=>{await Promise.resolve(),await F(i,o,u,r,j())})();u.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(w=>u.viewTransitionFinished=w),skipTransition:()=>{u.transitionSkipped=!0,document.documentElement.removeAttribute(k)}}}u.viewTransition.updateCallbackDone.finally(async()=>{await ge(),V(),pe()}),u.viewTransition.finished.finally(()=>{u.viewTransition=void 0,u===y&&(y=void 0),a===f&&(f=void 0),document.documentElement.removeAttribute($),document.documentElement.removeAttribute(k)});try{await u.viewTransition.updateCallbackDone}catch(s){const w=s;console.log("[astro]",w.name,w.message,w.stack)}}async function q(e,t){await z("forward",S,new URL(e,location.href),t??{})}function Ae(e){if(!O()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>g?"forward":"back";g=n,z(o,S,new URL(location.href),{},t)}const X=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&x({scrollX,scrollY})};{if(N||j()!=="none")if(S=new URL(location.href),addEventListener("popstate",Ae),addEventListener("load",V),"onscrollend"in window)addEventListener("scrollend",X);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,X();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}async function Ee(e,t,n){if(e.body.querySelector("astro-island[client='only']")){const o=document.createElement("iframe");o.src=t.href,o.style.display="none",document.body.append(o),o.contentWindow.console=Object.keys(console).reduce((l,i)=>(l[i]=()=>{},l),{}),await a(o);const r=o.contentDocument?.head;r&&[...r.querySelectorAll(`style[${T}]`)].map(i=>i.getAttribute(T)).forEach(i=>{const c=r.querySelector(`style[${T}="${i}"]`);c&&!e.head.querySelector(`style[${T}="${i}"]`)&&e.head.appendChild(c.cloneNode(!0))});async function a(l){return n.aborted||await new Promise(i=>l.contentWindow?.addEventListener("load",i,{once:!0})),new Promise(async i=>{for(let c=0;c<=20&&!(n.aborted||!l.contentDocument.body.querySelector("astro-island[ssr]"));++c)await new Promise(d=>setTimeout(d,50));i()})}}}const D=console.debug,G=new Set,E=new WeakSet;let I,J,Y=!1;function Se(e){Y||(Y=!0,D?.("[astro] Initializing prefetch script"),I??=e?.prefetchAll??!1,J??=e?.defaultStrategy??"hover",Le(),Re(),Pe(),De())}function Le(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{v(t.target,"tap")&&L(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Re(){let e;document.body.addEventListener("focusin",o=>{v(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),H(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||v(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{L(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Pe(){let e;H(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||v(t,"viewport")&&(E.add(t),e??=ke(),e.observe(t))})}function ke(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),L(r.href)},300))):a&&(clearTimeout(a),e.delete(r))}})}function De(){H(()=>{for(const e of document.getElementsByTagName("a"))v(e,"load")&&L(e.href)})}function L(e,t){const n=t?.ignoreSlowConnection??!1;if(Ie(e,n))if(G.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){D?.(`[astro] Prefetching ${e} with <link rel="prefetch">`);const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else D?.(`[astro] Prefetching ${e} with fetch`),fetch(e,{priority:"low"})}function Ie(e,t){if(!navigator.onLine||!t&&Q())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!G.has(e)}catch{}return!1}function v(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||I)&&Q()?!0:n==null&&I||n===""?t===J:n===t}function Q(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function H(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function xe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function _(e){return e.dataset.astroReload!==void 0}(N||xe()!=="none")&&(window.matchMedia("(prefers-reduced-motion)").matches&&console.warn("[transitions]: all view transition animations, including fallback animation, are disabled as this device has the prefer-reduced-motion setting enabled."),document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;_(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),q(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||_(t))return;const n=t,o=e.submitter,r=new FormData(n,o),a=typeof n.action=="string"?n.action:n.getAttribute("action"),l=typeof n.method=="string"?n.method:n.getAttribute("method");let i=o?.getAttribute("formaction")??a??location.pathname;const c=o?.getAttribute("formmethod")??l??"get";if(c==="dialog"||location.origin!==new URL(i,location.href).origin)return;const d={sourceElement:o??n};if(c==="get"){const u=new URLSearchParams(r),s=new URL(i);s.search=u.toString(),i=s.toString()}else d.formData=r;e.preventDefault(),q(i,d)}),Se({prefetchAll:!0}));
