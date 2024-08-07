import"./hoisted.BL_XZ0th.js";var At=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function St(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nt={exports:{}};(function(t,e){(function(n,o){t.exports=o()})(At,function(){return function(n){function o(i){if(r[i])return r[i].exports;var s=r[i]={exports:{},id:i,loaded:!1};return n[i].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var r={};return o.m=n,o.c=r,o.p="dist/",o(0)}([function(n,o,r){function i(g){return g&&g.__esModule?g:{default:g}}var s=Object.assign||function(g){for(var x=1;x<arguments.length;x++){var H=arguments[x];for(var K in H)Object.prototype.hasOwnProperty.call(H,K)&&(g[K]=H[K])}return g},a=r(1),l=(i(a),r(6)),c=i(l),f=r(7),u=i(f),p=r(8),h=i(p),b=r(9),k=i(b),w=r(10),U=i(w),ee=r(11),M=i(ee),S=r(14),$=i(S),O=[],V=!1,y={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var g=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(g&&(V=!0),V)return O=(0,M.default)(O,y),(0,U.default)(O,y.once),O},G=function(){O=(0,$.default)(),j()},m=function(){O.forEach(function(g,x){g.node.removeAttribute("data-aos"),g.node.removeAttribute("data-aos-easing"),g.node.removeAttribute("data-aos-duration"),g.node.removeAttribute("data-aos-delay")})},d=function(g){return g===!0||g==="mobile"&&k.default.mobile()||g==="phone"&&k.default.phone()||g==="tablet"&&k.default.tablet()||typeof g=="function"&&g()===!0},_=function(g){y=s(y,g),O=(0,$.default)();var x=document.all&&!window.atob;return d(y.disable)||x?m():(y.disableMutationObserver||h.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),y.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",y.easing),document.querySelector("body").setAttribute("data-aos-duration",y.duration),document.querySelector("body").setAttribute("data-aos-delay",y.delay),y.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):y.startEvent==="load"?window.addEventListener(y.startEvent,function(){j(!0)}):document.addEventListener(y.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,u.default)(j,y.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(j,y.debounceDelay,!0)),window.addEventListener("scroll",(0,c.default)(function(){(0,U.default)(O,y.once)},y.throttleDelay)),y.disableMutationObserver||h.default.ready("[data-aos]",G),O)};n.exports={init:_,refresh:j,refreshHard:G}},function(n,o){},,,,,function(n,o){(function(r){function i(d,_,g){function x(v){var P=B,J=z;return B=z=void 0,X=v,R=d.apply(J,P)}function H(v){return X=v,T=setTimeout(ne,_),Y?x(v):R}function K(v){var P=v-L,J=v-X,$e=_-P;return W?G($e,q-J):$e}function te(v){var P=v-L,J=v-X;return L===void 0||P>=_||P<0||W&&J>=q}function ne(){var v=m();return te(v)?he(v):void(T=setTimeout(ne,K(v)))}function he(v){return T=void 0,I&&B?x(v):(B=z=void 0,R)}function we(){T!==void 0&&clearTimeout(T),X=0,B=L=z=T=void 0}function le(){return T===void 0?R:he(m())}function F(){var v=m(),P=te(v);if(B=arguments,z=this,L=v,P){if(T===void 0)return H(L);if(W)return T=setTimeout(ne,_),x(L)}return T===void 0&&(T=setTimeout(ne,_)),R}var B,z,q,R,T,L,X=0,Y=!1,W=!1,I=!0;if(typeof d!="function")throw new TypeError(p);return _=f(_)||0,a(g)&&(Y=!!g.leading,W="maxWait"in g,q=W?j(f(g.maxWait)||0,_):q,I="trailing"in g?!!g.trailing:I),F.cancel=we,F.flush=le,F}function s(d,_,g){var x=!0,H=!0;if(typeof d!="function")throw new TypeError(p);return a(g)&&(x="leading"in g?!!g.leading:x,H="trailing"in g?!!g.trailing:H),i(d,_,{leading:x,maxWait:_,trailing:H})}function a(d){var _=typeof d>"u"?"undefined":u(d);return!!d&&(_=="object"||_=="function")}function l(d){return!!d&&(typeof d>"u"?"undefined":u(d))=="object"}function c(d){return(typeof d>"u"?"undefined":u(d))=="symbol"||l(d)&&y.call(d)==b}function f(d){if(typeof d=="number")return d;if(c(d))return h;if(a(d)){var _=typeof d.valueOf=="function"?d.valueOf():d;d=a(_)?_+"":_}if(typeof d!="string")return d===0?d:+d;d=d.replace(k,"");var g=U.test(d);return g||ee.test(d)?M(d.slice(2),g?2:8):w.test(d)?h:+d}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},p="Expected a function",h=NaN,b="[object Symbol]",k=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,ee=/^0o[0-7]+$/i,M=parseInt,S=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,$=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,O=S||$||Function("return this")(),V=Object.prototype,y=V.toString,j=Math.max,G=Math.min,m=function(){return O.Date.now()};n.exports=s}).call(o,function(){return this}())},function(n,o){(function(r){function i(m,d,_){function g(I){var v=F,P=B;return F=B=void 0,L=I,q=m.apply(P,v)}function x(I){return L=I,R=setTimeout(te,d),X?g(I):q}function H(I){var v=I-T,P=I-L,J=d-v;return Y?j(J,z-P):J}function K(I){var v=I-T,P=I-L;return T===void 0||v>=d||v<0||Y&&P>=z}function te(){var I=G();return K(I)?ne(I):void(R=setTimeout(te,H(I)))}function ne(I){return R=void 0,W&&F?g(I):(F=B=void 0,q)}function he(){R!==void 0&&clearTimeout(R),L=0,F=T=B=R=void 0}function we(){return R===void 0?q:ne(G())}function le(){var I=G(),v=K(I);if(F=arguments,B=this,T=I,v){if(R===void 0)return x(T);if(Y)return R=setTimeout(te,d),g(T)}return R===void 0&&(R=setTimeout(te,d)),q}var F,B,z,q,R,T,L=0,X=!1,Y=!1,W=!0;if(typeof m!="function")throw new TypeError(u);return d=c(d)||0,s(_)&&(X=!!_.leading,Y="maxWait"in _,z=Y?y(c(_.maxWait)||0,d):z,W="trailing"in _?!!_.trailing:W),le.cancel=he,le.flush=we,le}function s(m){var d=typeof m>"u"?"undefined":f(m);return!!m&&(d=="object"||d=="function")}function a(m){return!!m&&(typeof m>"u"?"undefined":f(m))=="object"}function l(m){return(typeof m>"u"?"undefined":f(m))=="symbol"||a(m)&&V.call(m)==h}function c(m){if(typeof m=="number")return m;if(l(m))return p;if(s(m)){var d=typeof m.valueOf=="function"?m.valueOf():m;m=s(d)?d+"":d}if(typeof m!="string")return m===0?m:+m;m=m.replace(b,"");var _=w.test(m);return _||U.test(m)?ee(m.slice(2),_?2:8):k.test(m)?p:+m}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},u="Expected a function",p=NaN,h="[object Symbol]",b=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,U=/^0o[0-7]+$/i,ee=parseInt,M=(typeof r>"u"?"undefined":f(r))=="object"&&r&&r.Object===Object&&r,S=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,$=M||S||Function("return this")(),O=Object.prototype,V=O.toString,y=Math.max,j=Math.min,G=function(){return $.Date.now()};n.exports=i}).call(o,function(){return this}())},function(n,o){function r(f){var u=void 0,p=void 0;for(u=0;u<f.length;u+=1)if(p=f[u],p.dataset&&p.dataset.aos||p.children&&r(p.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!i()}function a(f,u){var p=window.document,h=i(),b=new h(l);c=u,b.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(f){f&&f.forEach(function(u){var p=Array.prototype.slice.call(u.addedNodes),h=Array.prototype.slice.call(u.removedNodes),b=p.concat(h);if(r(b))return c()})}Object.defineProperty(o,"__esModule",{value:!0});var c=function(){};o.default={isSupported:s,ready:a}},function(n,o){function r(p,h){if(!(p instanceof h))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(o,"__esModule",{value:!0});var s=function(){function p(h,b){for(var k=0;k<b.length;k++){var w=b[k];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(h,w.key,w)}}return function(h,b,k){return b&&p(h.prototype,b),k&&p(h,k),h}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function p(){r(this,p)}return s(p,[{key:"phone",value:function(){var h=i();return!(!a.test(h)&&!l.test(h.substr(0,4)))}},{key:"mobile",value:function(){var h=i();return!(!c.test(h)&&!f.test(h.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();o.default=new u},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(s,a,l){var c=s.node.getAttribute("data-aos-once");a>s.position?s.node.classList.add("aos-animate"):typeof c<"u"&&(c==="false"||!l&&c!=="true")&&s.node.classList.remove("aos-animate")},i=function(s,a){var l=window.pageYOffset,c=window.innerHeight;s.forEach(function(f,u){r(f,c+l,a)})};o.default=i},function(n,o,r){function i(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(o,"__esModule",{value:!0});var s=r(12),a=i(s),l=function(c,f){return c.forEach(function(u,p){u.node.classList.add("aos-init"),u.position=(0,a.default)(u.node,f.offset)}),c};o.default=l},function(n,o,r){function i(c){return c&&c.__esModule?c:{default:c}}Object.defineProperty(o,"__esModule",{value:!0});var s=r(13),a=i(s),l=function(c,f){var u=0,p=0,h=window.innerHeight,b={offset:c.getAttribute("data-aos-offset"),anchor:c.getAttribute("data-aos-anchor"),anchorPlacement:c.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(p=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(c=document.querySelectorAll(b.anchor)[0]),u=(0,a.default)(c).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=c.offsetHeight/2;break;case"bottom-bottom":u+=c.offsetHeight;break;case"top-center":u+=h/2;break;case"bottom-center":u+=h/2+c.offsetHeight;break;case"center-center":u+=h/2+c.offsetHeight/2;break;case"top-top":u+=h;break;case"bottom-top":u+=c.offsetHeight+h;break;case"center-top":u+=c.offsetHeight/2+h}return b.anchorPlacement||b.offset||isNaN(f)||(p=f),u+p};o.default=l},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(i){for(var s=0,a=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)s+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),a+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:a,left:s}};o.default=r},function(n,o){Object.defineProperty(o,"__esModule",{value:!0});var r=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(s){return{node:s}})};o.default=r}])})})(nt);var Ot=nt.exports;const Rt=St(Ot);Rt.init({duration:1200});var je={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=function(t){const e=[];let n=0;for(let o=0;o<t.length;o++){let r=t.charCodeAt(o);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&o+1<t.length&&(t.charCodeAt(o+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++o)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},xt=function(t){const e=[];let n=0,o=0;for(;n<t.length;){const r=t[n++];if(r<128)e[o++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[o++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],s=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(s&63)<<6|a&63)-65536;e[o++]=String.fromCharCode(55296+(l>>10)),e[o++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],s=t[n++];e[o++]=String.fromCharCode((r&15)<<12|(i&63)<<6|s&63)}}return e.join("")},ot={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let r=0;r<t.length;r+=3){const i=t[r],s=r+1<t.length,a=s?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,f=i>>2,u=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,h=c&63;l||(h=64,s||(p=64)),o.push(n[f],n[u],n[p],n[h])}return o.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||u==null)throw new Ct;const p=i<<2|a>>4;if(o.push(p),c!==64){const h=a<<4&240|c>>2;if(o.push(h),u!==64){const b=c<<6&192|u;o.push(b)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ct extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nt=function(t){const e=rt(t);return ot.encodeByteArray(e,!0)},ge=function(t){return Nt(t).replace(/\./g,"")},Pt=function(t){try{return ot.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=()=>Lt().__FIREBASE_DEFAULTS__,Bt=()=>{if(typeof process>"u"||typeof je>"u")return;const t=je.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ut=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pt(t[1]);return e&&JSON.parse(e)},it=()=>{try{return Mt()||Bt()||Ut()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$t=t=>{var e,n;return(n=(e=it())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jt=t=>{const e=$t(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),o]:[e.substring(0,n),o]},st=()=>{var t;return(t=it())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,o)=>{n?this.reject(n):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,o))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},o=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ge(JSON.stringify(n)),ge(JSON.stringify(s)),""].join(".")}function zt(){try{return typeof indexedDB=="object"}catch{return!1}}function qt(){return new Promise((t,e)=>{try{let n=!0;const o="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(o);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(o),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="FirebaseError";class ce extends Error{constructor(e,n,o){super(n),this.code=e,this.customData=o,this.name=Wt,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,at.prototype.create)}}class at{constructor(e,n,o){this.service=e,this.serviceName=n,this.errors=o}create(e,...n){const o=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?Vt(i,o):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new ce(r,a,o)}}function Vt(t,e){return t.replace(Gt,(n,o)=>{const r=e[o];return r!=null?String(r):`<${o}?>`})}const Gt=/\{\$([^}]+)}/g;function Ae(t,e){if(t===e)return!0;const n=Object.keys(t),o=Object.keys(e);for(const r of n){if(!o.includes(r))return!1;const i=t[r],s=e[r];if(He(i)&&He(s)){if(!Ae(i,s))return!1}else if(i!==s)return!1}for(const r of o)if(!n.includes(r))return!1;return!0}function He(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class de{constructor(e,n,o){this.name=e,this.instanceFactory=n,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const o=new Ht;if(this.instancesDeferred.set(n,o),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&o.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const o=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yt(e))try{this.getOrInitializeService({instanceIdentifier:re})}catch{}for(const[n,o]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});o.resolve(i)}catch{}}}}clearInstance(e=re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=re){return this.instances.has(e)}getOptions(e=re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:o,options:n});for(const[i,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);o===a&&s.resolve(r)}return r}onInit(e,n){var o;const r=this.normalizeInstanceIdentifier(n),i=(o=this.onInitCallbacks.get(r))!==null&&o!==void 0?o:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const o=this.onInitCallbacks.get(n);if(o)for(const r of o)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Xt(e),options:n}),this.instances.set(e,o),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=re){return this.component?this.component.multipleInstances?e:re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xt(t){return t===re?void 0:t}function Yt(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(E||(E={}));const Zt={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},Qt=E.INFO,en={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},tn=(t,e,...n)=>{if(e<t.logLevel)return;const o=new Date().toISOString(),r=en[e];if(r)console[r](`[${o}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nn{constructor(e){this.name=e,this._logLevel=Qt,this._logHandler=tn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}const rn=(t,e)=>e.some(n=>t instanceof n);let Fe,ze;function on(){return Fe||(Fe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sn(){return ze||(ze=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ct=new WeakMap,Se=new WeakMap,lt=new WeakMap,Ee=new WeakMap,Le=new WeakMap;function an(t){const e=new Promise((n,o)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(Z(t.result)),r()},s=()=>{o(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&ct.set(n,t)}).catch(()=>{}),Le.set(e,t),e}function cn(t){if(Se.has(t))return;const e=new Promise((n,o)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),r()},s=()=>{o(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});Se.set(t,e)}let Oe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Se.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Z(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ln(t){Oe=t(Oe)}function un(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const o=t.call(Ie(this),e,...n);return lt.set(o,e.sort?e.sort():[e]),Z(o)}:sn().includes(t)?function(...e){return t.apply(Ie(this),e),Z(ct.get(this))}:function(...e){return Z(t.apply(Ie(this),e))}}function dn(t){return typeof t=="function"?un(t):(t instanceof IDBTransaction&&cn(t),rn(t,on())?new Proxy(t,Oe):t)}function Z(t){if(t instanceof IDBRequest)return an(t);if(Ee.has(t))return Ee.get(t);const e=dn(t);return e!==t&&(Ee.set(t,e),Le.set(e,t)),e}const Ie=t=>Le.get(t);function fn(t,e,{blocked:n,upgrade:o,blocking:r,terminated:i}={}){const s=indexedDB.open(t,e),a=Z(s);return o&&s.addEventListener("upgradeneeded",l=>{o(Z(s.result),l.oldVersion,l.newVersion,Z(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const hn=["get","getKey","getAll","getAllKeys","count"],pn=["put","add","delete","clear"],ke=new Map;function qe(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ke.get(e))return ke.get(e);const n=e.replace(/FromIndex$/,""),o=e!==n,r=pn.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(r||hn.includes(n)))return;const i=async function(s,...a){const l=this.transaction(s,r?"readwrite":"readonly");let c=l.store;return o&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ke.set(e,i),i}ln(t=>({...t,get:(e,n,o)=>qe(e,n)||t.get(e,n,o),has:(e,n)=>!!qe(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gn(n)){const o=n.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(n=>n).join(" ")}}function gn(t){const e=t.getComponent();return e?.type==="VERSION"}const Re="@firebase/app",We="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new nn("@firebase/app"),bn="@firebase/app-compat",_n="@firebase/analytics-compat",vn="@firebase/analytics",yn="@firebase/app-check-compat",wn="@firebase/app-check",En="@firebase/auth",In="@firebase/auth-compat",kn="@firebase/database",Tn="@firebase/database-compat",Dn="@firebase/functions",An="@firebase/functions-compat",Sn="@firebase/installations",On="@firebase/installations-compat",Rn="@firebase/messaging",xn="@firebase/messaging-compat",Cn="@firebase/performance",Nn="@firebase/performance-compat",Pn="@firebase/remote-config",Ln="@firebase/remote-config-compat",Mn="@firebase/storage",Bn="@firebase/storage-compat",Un="@firebase/firestore",$n="@firebase/vertexai-preview",jn="@firebase/firestore-compat",Hn="firebase",Fn="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="[DEFAULT]",zn={[Re]:"fire-core",[bn]:"fire-core-compat",[vn]:"fire-analytics",[_n]:"fire-analytics-compat",[wn]:"fire-app-check",[yn]:"fire-app-check-compat",[En]:"fire-auth",[In]:"fire-auth-compat",[kn]:"fire-rtdb",[Tn]:"fire-rtdb-compat",[Dn]:"fire-fn",[An]:"fire-fn-compat",[Sn]:"fire-iid",[On]:"fire-iid-compat",[Rn]:"fire-fcm",[xn]:"fire-fcm-compat",[Cn]:"fire-perf",[Nn]:"fire-perf-compat",[Pn]:"fire-rc",[Ln]:"fire-rc-compat",[Mn]:"fire-gcs",[Bn]:"fire-gcs-compat",[Un]:"fire-fst",[jn]:"fire-fst-compat",[$n]:"fire-vertex","fire-js":"fire-js",[Hn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new Map,qn=new Map,Ce=new Map;function Ve(t,e){try{t.container.addComponent(e)}catch(n){ie.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _e(t){const e=t.name;if(Ce.has(e))return ie.debug(`There were multiple attempts to register component ${e}.`),!1;Ce.set(e,t);for(const n of be.values())Ve(n,t);for(const n of qn.values())Ve(n,t);return!0}function Wn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Q=new at("app","Firebase",Vn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Q.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=Fn;function ut(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const o=Object.assign({name:xe,automaticDataCollectionEnabled:!1},e),r=o.name;if(typeof r!="string"||!r)throw Q.create("bad-app-name",{appName:String(r)});if(n||(n=st()),!n)throw Q.create("no-options");const i=be.get(r);if(i){if(Ae(n,i.options)&&Ae(o,i.config))return i;throw Q.create("duplicate-app",{appName:r})}const s=new Jt(r);for(const l of Ce.values())s.addComponent(l);const a=new Gn(n,o,s);return be.set(r,a),a}function Xn(t=xe){const e=be.get(t);if(!e&&t===xe&&st())return ut();if(!e)throw Q.create("no-app",{appName:t});return e}function ae(t,e,n){var o;let r=(o=zn[t])!==null&&o!==void 0?o:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ie.warn(a.join(" "));return}_e(new de(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="firebase-heartbeat-database",Jn=1,fe="firebase-heartbeat-store";let Te=null;function dt(){return Te||(Te=fn(Yn,Jn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fe)}catch(n){console.warn(n)}}}}).catch(t=>{throw Q.create("idb-open",{originalErrorMessage:t.message})})),Te}async function Zn(t){try{const n=(await dt()).transaction(fe),o=await n.objectStore(fe).get(ft(t));return await n.done,o}catch(e){if(e instanceof ce)ie.warn(e.message);else{const n=Q.create("idb-get",{originalErrorMessage:e?.message});ie.warn(n.message)}}}async function Ge(t,e){try{const o=(await dt()).transaction(fe,"readwrite");await o.objectStore(fe).put(e,ft(t)),await o.done}catch(n){if(n instanceof ce)ie.warn(n.message);else{const o=Q.create("idb-set",{originalErrorMessage:n?.message});ie.warn(o.message)}}}function ft(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=1024,er=30*24*60*60*1e3;class tr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rr(n),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ke();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=er}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ke(),{heartbeatsToSend:o,unsentEntries:r}=nr(this._heartbeatsCache.heartbeats),i=ge(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ke(){return new Date().toISOString().substring(0,10)}function nr(t,e=Qn){const n=[];let o=t.slice();for(const r of t){const i=n.find(s=>s.agent===r.agent);if(i){if(i.dates.push(r.date),Xe(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xe(n)>e){n.pop();break}o=o.slice(1)}return{heartbeatsToSend:n,unsentEntries:o}}class rr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zt()?qt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ge(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ge(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xe(t){return ge(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){_e(new de("platform-logger",e=>new mn(e),"PRIVATE")),_e(new de("heartbeat",e=>new tr(e),"PRIVATE")),ae(Re,We,t),ae(Re,We,"esm2017"),ae("fire-js","")}or("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="firebasestorage.googleapis.com",pt="storageBucket",ir=2*60*1e3,sr=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A extends ce{constructor(e,n,o=0){super(De(e),`Firebase Storage: ${n} (${De(e)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,A.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return De(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var D;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(D||(D={}));function De(t){return"storage/"+t}function mt(){const t="An unknown error occurred, please check the error payload for server response.";return new A(D.UNKNOWN,t)}function ar(t){return new A(D.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function cr(t){return new A(D.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lr(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new A(D.UNAUTHENTICATED,t)}function ur(){return new A(D.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dr(t){return new A(D.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function fr(){return new A(D.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hr(){return new A(D.CANCELED,"User canceled the upload/download.")}function pr(t){return new A(D.INVALID_URL,"Invalid URL '"+t+"'.")}function mr(t){return new A(D.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gr(){return new A(D.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pt+"' property when initializing the app?")}function br(){return new A(D.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ne(t){return new A(D.INVALID_ARGUMENT,t)}function gt(){return new A(D.APP_DELETED,"The Firebase app was deleted.")}function _r(t){return new A(D.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ue(t){throw new A(D.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let o;try{o=N.makeFromUrl(e,n)}catch{return new N(e,"")}if(o.path==="")return o;throw mr(e)}static makeFromUrl(e,n){let o=null;const r="([A-Za-z0-9.\\-_]+)";function i(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),l={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const f="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",h=new RegExp(`^https?://${u}/${f}/b/${r}/o${p}`,"i"),b={bucket:1,path:3},k=n===ht?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",U=new RegExp(`^https?://${k}/${r}/${w}`,"i"),M=[{regex:a,indices:l,postModify:i},{regex:h,indices:b,postModify:c},{regex:U,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<M.length;S++){const $=M[S],O=$.regex.exec(e);if(O){const V=O[$.indices.bucket];let y=O[$.indices.path];y||(y=""),o=new N(V,y),$.postModify(o);break}}if(o==null)throw pr(e);return o}}class vr{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e,n){let o=1,r=null,i=null,s=!1,a=0;function l(){return a===2}let c=!1;function f(...w){c||(c=!0,e.apply(null,w))}function u(w){r=setTimeout(()=>{r=null,t(h,l())},w)}function p(){i&&clearTimeout(i)}function h(w,...U){if(c){p();return}if(w){p(),f.call(null,w,...U);return}if(l()||s){p(),f.call(null,w,...U);return}o<64&&(o*=2);let M;a===1?(a=2,M=0):M=(o+Math.random())*1e3,u(M)}let b=!1;function k(w){b||(b=!0,p(),!c&&(r!==null?(w||(a=2),clearTimeout(r),u(0)):w||(a=1)))}return u(0),i=setTimeout(()=>{s=!0,k(!0)},n),k}function wr(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){return t!==void 0}function Ir(t){return typeof t=="object"&&!Array.isArray(t)}function bt(t){return typeof t=="string"||t instanceof String}function Pe(t,e,n,o){if(o<e)throw Ne(`Invalid value for '${t}'. Expected ${e} or greater.`);if(o>n)throw Ne(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,e,n){let o=e;return n==null&&(o=`https://${e}`),`${n}://${o}/v0${t}`}function _t(t){const e=encodeURIComponent;let n="?";for(const o in t)if(t.hasOwnProperty(o)){const r=e(o)+"="+e(t[o]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oe||(oe={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,o,r,i,s,a,l,c,f,u,p=!0){this.url_=e,this.method_=n,this.headers_=o,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=u,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,b)=>{this.resolve_=h,this.reject_=b,this.start_()})}start_(){const e=(o,r)=>{if(r){o(!1,new pe(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const s=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(s),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(s),this.pendingConnection_=null;const a=i.getErrorCode()===oe.NO_ERROR,l=i.getStatus();if(!a||kr(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===oe.ABORT;o(!1,new pe(!1,null,f));return}const c=this.successCodes_.indexOf(l)!==-1;o(!0,new pe(c,i))})},n=(o,r)=>{const i=this.resolve_,s=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Er(l)?i(l):i()}catch(l){s(l)}else if(a!==null){const l=mt();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(r.canceled){const l=this.appDelete_?gt():hr();s(l)}else{const l=fr();s(l)}};this.canceled_?n(!1,new pe(!1,null,!0)):this.backoffId_=yr(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wr(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pe{constructor(e,n,o){this.wasSuccessCode=e,this.connection=n,this.canceled=!!o}}function Dr(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ar(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Sr(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Or(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Rr(t,e,n,o,r,i,s=!0){const a=_t(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return Sr(c,e),Dr(c,n),Ar(c,i),Or(c,o),new Tr(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){let e;try{e=JSON.parse(t)}catch{return null}return Ir(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Cr(t,e){const n=e.split("/").filter(o=>o.length>0).join("/");return t.length===0?n:t+"/"+n}function vt(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t,e){return e}class C{constructor(e,n,o,r){this.server=e,this.local=n||e,this.writable=!!o,this.xform=r||Nr}}let me=null;function Pr(t){return!bt(t)||t.length<2?t:vt(t)}function Lr(){if(me)return me;const t=[];t.push(new C("bucket")),t.push(new C("generation")),t.push(new C("metageneration")),t.push(new C("name","fullPath",!0));function e(i,s){return Pr(s)}const n=new C("name");n.xform=e,t.push(n);function o(i,s){return s!==void 0?Number(s):s}const r=new C("size");return r.xform=o,t.push(r),t.push(new C("timeCreated")),t.push(new C("updated")),t.push(new C("md5Hash",null,!0)),t.push(new C("cacheControl",null,!0)),t.push(new C("contentDisposition",null,!0)),t.push(new C("contentEncoding",null,!0)),t.push(new C("contentLanguage",null,!0)),t.push(new C("contentType",null,!0)),t.push(new C("metadata","customMetadata",!0)),me=t,me}function Mr(t,e){function n(){const o=t.bucket,r=t.fullPath,i=new N(o,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Br(t,e,n){const o={};o.type="file";const r=n.length;for(let i=0;i<r;i++){const s=n[i];o[s.local]=s.xform(o,e[s.server])}return Mr(o,t),o}function Ur(t,e,n){const o=Be(e);return o===null?null:Br(t,o,n)}function $r(t,e,n,o){const r=Be(e);if(r===null||!bt(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const s=encodeURIComponent;return i.split(",").map(c=>{const f=t.bucket,u=t.fullPath,p="/b/"+s(f)+"/o/"+s(u),h=Me(p,n,o),b=_t({alt:"media",token:c});return h+b})[0]}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="prefixes",Je="items";function jr(t,e,n){const o={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Ye])for(const r of n[Ye]){const i=r.replace(/\/$/,""),s=t._makeStorageReference(new N(e,i));o.prefixes.push(s)}if(n[Je])for(const r of n[Je]){const i=t._makeStorageReference(new N(e,r.name));o.items.push(i)}return o}function Hr(t,e,n){const o=Be(n);return o===null?null:jr(t,e,o)}class yt{constructor(e,n,o,r){this.url=e,this.method=n,this.handler=o,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t){if(!t)throw mt()}function Fr(t,e){function n(o,r){const i=Hr(t,e,r);return wt(i!==null),i}return n}function zr(t,e){function n(o,r){const i=Ur(t,r,e);return wt(i!==null),$r(i,r,t.host,t._protocol)}return n}function Et(t){function e(n,o){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ur():r=lr():n.getStatus()===402?r=cr(t.bucket):n.getStatus()===403?r=dr(t.path):r=o,r.status=n.getStatus(),r.serverResponse=o.serverResponse,r}return e}function qr(t){const e=Et(t);function n(o,r){let i=e(o,r);return o.getStatus()===404&&(i=ar(t.path)),i.serverResponse=r.serverResponse,i}return n}function Wr(t,e,n,o,r){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),o&&(i.pageToken=o),r&&(i.maxResults=r);const s=e.bucketOnlyServerUrl(),a=Me(s,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,f=new yt(a,l,Fr(t,e.bucket),c);return f.urlParams=i,f.errorHandler=Et(e),f}function Vr(t,e,n){const o=e.fullServerUrl(),r=Me(o,t.host,t._protocol),i="GET",s=t.maxOperationRetryTime,a=new yt(r,i,zr(t,n),s);return a.errorHandler=qr(e),a}class Gr{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oe.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oe.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oe.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,o,r){if(this.sent_)throw ue("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ue("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ue("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ue("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ue("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Kr extends Gr{initXhr(){this.xhr_.responseType="text"}}function It(){return new Kr}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this._service=e,n instanceof N?this._location=n:this._location=N.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new se(e,n)}get root(){const e=new N(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vt(this._location.path)}get storage(){return this._service}get parent(){const e=xr(this._location.path);if(e===null)return null;const n=new N(this._location.bucket,e);return new se(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _r(e)}}function Xr(t){const e={prefixes:[],items:[]};return kt(t,e).then(()=>e)}async function kt(t,e,n){const r=await Yr(t,{pageToken:n});e.prefixes.push(...r.prefixes),e.items.push(...r.items),r.nextPageToken!=null&&await kt(t,e,r.nextPageToken)}function Yr(t,e){e!=null&&typeof e.maxResults=="number"&&Pe("options.maxResults",1,1e3,e.maxResults);const n=e||{},o=Wr(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(o,It)}function Jr(t){t._throwIfRoot("getDownloadURL");const e=Vr(t.storage,t._location,Lr());return t.storage.makeRequestWithTokens(e,It).then(n=>{if(n===null)throw br();return n})}function Zr(t,e){const n=Cr(t._location.path,e),o=new N(t._location.bucket,n);return new se(t.storage,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){return/^[A-Za-z]+:\/\//.test(t)}function eo(t,e){return new se(t,e)}function Tt(t,e){if(t instanceof Ue){const n=t;if(n._bucket==null)throw gr();const o=new se(n,n._bucket);return e!=null?Tt(o,e):o}else return e!==void 0?Zr(t,e):t}function to(t,e){if(e&&Qr(e)){if(t instanceof Ue)return eo(t,e);throw Ne("To use ref(service, url), the first argument must be a Storage instance.")}else return Tt(t,e)}function Ze(t,e){const n=e?.[pt];return n==null?null:N.makeFromBucketSpec(n,t)}function no(t,e,n,o={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=o;r&&(t._overrideAuthToken=typeof r=="string"?r:Ft(r,t.app.options.projectId))}class Ue{constructor(e,n,o,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=o,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=ht,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ir,this._maxUploadRetryTime=sr,this._requests=new Set,r!=null?this._bucket=N.makeFromBucketSpec(r,this._host):this._bucket=Ze(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=N.makeFromBucketSpec(this._url,e):this._bucket=Ze(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pe("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pe("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new se(this,e)}_makeRequest(e,n,o,r,i=!0){if(this._deleted)return new vr(gt());{const s=Rr(e,this._appId,o,r,n,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[o,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,o,r).getPromise()}}const Qe="@firebase/storage",et="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="storage";function tt(t){return t=ve(t),Xr(t)}function ro(t){return t=ve(t),Jr(t)}function oo(t,e){return t=ve(t),to(t,e)}function io(t=Xn(),e){t=ve(t);const o=Wn(t,Dt).getImmediate({identifier:e}),r=jt("storage");return r&&so(o,...r),o}function so(t,e,n,o={}){no(t,e,n,o)}function ao(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ue(n,o,r,e,Kn)}function co(){_e(new de(Dt,ao,"PUBLIC").setMultipleInstances(!0)),ae(Qe,et,""),ae(Qe,et,"esm2017")}co();var lo="firebase",uo="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ae(lo,uo,"app");const fo={apiKey:"AIzaSyDTvvksWQ5mRxv1Pf0QsAWiewEk5rWTWXo",authDomain:"kspsc-c8817.firebaseapp.com",projectId:"kspsc-c8817",storageBucket:"kspsc-c8817.appspot.com",messagingSenderId:"634979509331",appId:"1:634979509331:web:66c4245f68a925471212a6",measurementId:"G-M2MHP32KQP"},ho=ut(fo),po=io(ho);async function mo(){const t=oo(po,"Comunicados"),n=(await tt(t)).prefixes.map(async r=>{const i=r.name,a=(await tt(r)).items.map(async c=>{const u=`${await ro(c)}?t=${Date.now()}`;return{nombre:c.name,url:u}}),l=await Promise.all(a);return{titulo:i,descripcion:l}});return await Promise.all(n)}var ye=[];function go(t){ye=t}const bo=await mo();go(bo);console.log(ye);alert(ye);console.log(ye);(function(){var e=document.querySelectorAll("[data-tabs]"),t=function(o){return o=o||window.event,o.target||o.srcElement};e.forEach(function(n,o){var r=document.createElement("div"),i=n.querySelector("li:first-child [data-tab-target]"),s=i.cloneNode();s.innerHTML="-",s.classList.remove("bg-inherit","text-slate-700"),s.classList.add("bg-blue-300","text-white"),s.style.animation=".2s ease",r.classList.add("z-10","absolute","text-slate-700","rounded-lg","bg-inherit","flex-auto","text-center","bg-none","border-0","block","shadow"),r.setAttribute("moving-tab",""),r.setAttribute("data-tab-target",""),r.appendChild(s),n.appendChild(r),n.getElementsByTagName("li").length,r.style.padding="0px",r.style.width=n.querySelector("li:nth-child(1)").offsetWidth+"px",r.style.transform="translate3d(0px, 0px, 0px)",r.style.transition=".5s ease",n.onmouseover=function(a){var l=t(a),c=l.closest("li");if(c){var f=Array.from(c.closest("ul").children),u=f.indexOf(c)+1;n.querySelector("li:nth-child("+u+") [data-tab-target]").onclick=function(){n.querySelectorAll("li").forEach(function(b){b.firstElementChild.removeAttribute("active"),b.firstElementChild.setAttribute("aria-selected","false")}),c.firstElementChild.setAttribute("active",""),c.firstElementChild.setAttribute("aria-selected","true"),r=n.querySelector("[moving-tab]");var p=0;if(n.classList.contains("flex-col")){for(var h=1;h<=f.indexOf(c);h++)p+=n.querySelector("li:nth-child("+h+")").offsetHeight;r.style.transform="translate3d(0px,"+p+"px, 0px)",r.style.height=n.querySelector("li:nth-child("+h+")").offsetHeight}else{for(var h=1;h<=f.indexOf(c);h++)p+=n.querySelector("li:nth-child("+h+")").offsetWidth;r.style.transform="translate3d("+p+"px, 0px, 0px)",r.style.width=n.querySelector("li:nth-child("+u+")").offsetWidth+"px"}}}}}),window.addEventListener("resize",function(n){e.forEach(function(o,r){o=o.parentElement.firstElementChild,o.querySelector("[moving-tab]").remove();var i=document.createElement("div"),s=o.querySelector("[data-tab-target][aria-selected='true']").cloneNode();s.innerHTML="-",s.classList.remove("bg-inherit"),s.classList.add("bg-white","text-white"),s.style.animation=".2s ease",i.classList.add("z-10","absolute","text-slate-700","rounded-lg","bg-inherit","flex-auto","text-center","bg-none","border-0","block","shadow"),i.setAttribute("moving-tab",""),i.setAttribute("data-tab-target",""),i.appendChild(s),o.appendChild(i),i.style.padding="0px",i.style.transition=".5s ease";var a=o.querySelector("[data-tab-target][aria-selected='true']").parentElement;if(a){var l=Array.from(a.closest("ul").children),c=l.indexOf(a)+1,f=0;if(o.classList.contains("flex-col")){for(var u=1;u<=l.indexOf(a);u++)f+=o.querySelector("li:nth-child("+u+")").offsetHeight;i.style.transform="translate3d(0px,"+f+"px, 0px)",i.style.width=o.querySelector("li:nth-child("+c+")").offsetWidth+"px",i.style.height=o.querySelector("li:nth-child("+u+")").offsetHeight}else{for(var u=1;u<=l.indexOf(a);u++)f+=o.querySelector("li:nth-child("+u+")").offsetWidth;i.style.transform="translate3d("+f+"px, 0px, 0px)",i.style.width=o.querySelector("li:nth-child("+c+")").offsetWidth+"px"}}}),window.innerWidth<991?e.forEach(function(o,r){o.classList.contains("flex-col")||o.classList.add("flex-col","on-resize")}):e.forEach(function(o,r){o.classList.contains("on-resize")&&o.classList.remove("flex-col","on-resize")})});var e=document.querySelectorAll("[data-tab-content]");e[0]&&e.forEach(function(n){var o=n.parentElement.querySelectorAll("li a[data-tab-target]");o.forEach(function(r){r.addEventListener("click",function(){var i=document.querySelector("#"+r.getAttribute("aria-controls"));if(!i.classList.contains("block","opacity-100")){var s=i.closest("[data-tab-content]").parentElement.querySelector("li a[data-tab-target][aria-selected='true']"),a=document.querySelector("#"+s.getAttribute("aria-controls"));a.classList.remove("block","opacity-100"),a.classList.add("hidden","opacity-0"),i.classList.add("block","opacity-100"),i.classList.remove("hidden","opacity-0")}})})})})();
