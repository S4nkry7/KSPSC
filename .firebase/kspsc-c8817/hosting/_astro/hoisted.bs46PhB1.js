import"./hoisted.BL_XZ0th.js";var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tt={exports:{}};tt.exports=function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=(n(o(1)),o(6)),a=n(r),c=n(o(7)),s=n(o(8)),l=n(o(9)),u=n(o(10)),d=n(o(11)),f=n(o(14)),p=[],m=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(m=!0),m)return p=(0,d.default)(p,b),(0,u.default)(p,b.once),p},y=function(){p=(0,f.default)(),v()},h=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},g=function(e){return!0===e||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){b=i(b,e),p=(0,f.default)();var t=document.all&&!window.atob;return g(b.disable)||t?h():(b.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,u.default)(p,b.once)}),b.throttleDelay)),b.disableMutationObserver||s.default.ready("[data-aos]",y),p)};e.exports={init:w,refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,S=t,h=e.apply(n,o)}function r(e){return S=e,g=setTimeout(u,t),E?n(e):h}function a(e){var o=t-(e-w);return j?k(o,y-(e-S)):o}function s(e){var o=e-w;return void 0===w||o>=t||o<0||j&&e-S>=y}function u(){var e=O();return s(e)?d(e):void(g=setTimeout(u,a(e)))}function d(e){return g=void 0,q&&b?n(e):(b=v=void 0,h)}function f(){void 0!==g&&clearTimeout(g),S=0,b=w=v=g=void 0}function p(){return void 0===g?h:d(O())}function m(){var e=O(),o=s(e);if(b=arguments,v=this,w=e,o){if(void 0===g)return r(w);if(j)return g=setTimeout(u,t),n(w)}return void 0===g&&(g=setTimeout(u,t)),h}var b,v,y,h,g,w,S=0,E=!1,j=!1,q=!0;if("function"!=typeof e)throw new TypeError(l);return t=c(t)||0,i(o)&&(E=!!o.leading,y=(j="maxWait"in o)?x(c(o.maxWait)||0,t):y,q="trailing"in o?!!o.trailing:q),m.cancel=f,m.flush=p,m}function n(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(l);return i(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),o(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t=typeof e>"u"?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(typeof e>"u"?"undefined":s(e))}function a(e){return"symbol"==(typeof e>"u"?"undefined":s(e))||r(e)&&w.call(e)==d}function c(e){if("number"==typeof e)return e;if(a(e))return u;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=m.test(e);return o||b.test(e)?v(e.slice(2),o?2:8):p.test(e)?u:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",u=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==(typeof t>"u"?"undefined":s(t))&&t&&t.Object===Object&&t,h="object"==(typeof self>"u"?"undefined":s(self))&&self&&self.Object===Object&&self,g=y||h||Function("return this")(),w=Object.prototype.toString,x=Math.max,k=Math.min,O=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){function o(e,t,o){function i(t){var o=b,n=v;return b=v=void 0,S=t,h=e.apply(n,o)}function r(e){return S=e,g=setTimeout(u,t),E?i(e):h}function c(e){var o=t-(e-O);return j?x(o,y-(e-S)):o}function l(e){var o=e-O;return void 0===O||o>=t||o<0||j&&e-S>=y}function u(){var e=k();return l(e)?d(e):void(g=setTimeout(u,c(e)))}function d(e){return g=void 0,q&&b?i(e):(b=v=void 0,h)}function f(){void 0!==g&&clearTimeout(g),S=0,b=O=v=g=void 0}function p(){return void 0===g?h:d(k())}function m(){var e=k(),o=l(e);if(b=arguments,v=this,O=e,o){if(void 0===g)return r(O);if(j)return g=setTimeout(u,t),i(O)}return void 0===g&&(g=setTimeout(u,t)),h}var b,v,y,h,g,O,S=0,E=!1,j=!1,q=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,n(o)&&(E=!!o.leading,y=(j="maxWait"in o)?w(a(o.maxWait)||0,t):y,q="trailing"in o?!!o.trailing:q),m.cancel=f,m.flush=p,m}function n(e){var t=typeof e>"u"?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(typeof e>"u"?"undefined":c(e))}function r(e){return"symbol"==(typeof e>"u"?"undefined":c(e))||i(e)&&g.call(e)==u}function a(e){if("number"==typeof e)return e;if(r(e))return l;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var o=p.test(e);return o||m.test(e)?b(e.slice(2),o?2:8):f.test(e)?l:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",l=NaN,u="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==(typeof t>"u"?"undefined":c(t))&&t&&t.Object===Object&&t,y="object"==(typeof self>"u"?"undefined":c(self))&&self&&self.Object===Object&&self,h=v||y||Function("return this")(),g=Object.prototype.toString,w=Math.max,x=Math.min,k=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1)if((n=e[t]).dataset&&n.dataset.aos||n.children&&o(n.children))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!n()}function r(e,t){var o=window.document,i=new(n())(a);c=t,i.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(o(t.concat(n)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:i,ready:r}},function(e,t){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){o(this,e)}return i(e,[{key:"phone",value:function(){var e=n();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!c.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):typeof n<"u"&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,r){o(e,i+n,t)}))};t.default=n},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(12)),r=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=r},function(e,t,o){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(13)),r=function(e,t){var o=0,n=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(n=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),o=(0,i.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=r/2;break;case"bottom-center":o+=r/2+e.offsetHeight;break;case"center-center":o+=r/2+e.offsetHeight/2;break;case"top-top":o+=r;break;case"bottom-top":o+=e.offsetHeight+r;break;case"center-top":o+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(n=t),o+n};t.default=r},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=o}]);var ot=tt.exports;const rt=nt(ot);rt.init({duration:1200}),function(){var e=document.querySelectorAll("[data-tabs]");e.forEach((function(e,t){var o=document.createElement("div"),n=e.querySelector("li:first-child [data-tab-target]").cloneNode();n.innerHTML="-",n.classList.remove("bg-inherit","text-slate-700"),n.classList.add("bg-white","text-white"),n.style.animation=".2s ease",o.classList.add("z-10","absolute","text-slate-700","rounded-lg","bg-inherit","flex-auto","text-center","bg-none","border-0","block","shadow"),o.setAttribute("moving-tab",""),o.setAttribute("data-tab-target",""),o.appendChild(n),e.appendChild(o),e.getElementsByTagName("li").length,o.style.padding="0px",o.style.width=e.querySelector("li:nth-child(1)").offsetWidth+"px",o.style.transform="translate3d(0px, 0px, 0px)",o.style.transition=".5s ease",e.onmouseover=function(t){var n=function(e){return(e=e||window.event).target||e.srcElement}(t),i=n.closest("li");if(i){var r=Array.from(i.closest("ul").children),a=r.indexOf(i)+1;e.querySelector("li:nth-child("+a+") [data-tab-target]").onclick=function(){e.querySelectorAll("li").forEach((function(e){e.firstElementChild.removeAttribute("active"),e.firstElementChild.setAttribute("aria-selected","false")})),i.firstElementChild.setAttribute("active",""),i.firstElementChild.setAttribute("aria-selected","true"),o=e.querySelector("[moving-tab]");var t=0;if(e.classList.contains("flex-col")){for(var n=1;n<=r.indexOf(i);n++)t+=e.querySelector("li:nth-child("+n+")").offsetHeight;o.style.transform="translate3d(0px,"+t+"px, 0px)",o.style.height=e.querySelector("li:nth-child("+n+")").offsetHeight}else{for(n=1;n<=r.indexOf(i);n++)t+=e.querySelector("li:nth-child("+n+")").offsetWidth;o.style.transform="translate3d("+t+"px, 0px, 0px)",o.style.width=e.querySelector("li:nth-child("+a+")").offsetWidth+"px"}}}}})),window.addEventListener("resize",(function(t){e.forEach((function(e,t){(e=e.parentElement.firstElementChild).querySelector("[moving-tab]").remove();var o=document.createElement("div"),n=e.querySelector("[data-tab-target][aria-selected='true']").cloneNode();n.innerHTML="-",n.classList.remove("bg-inherit"),n.classList.add("bg-white","text-white"),n.style.animation=".2s ease",o.classList.add("z-10","absolute","text-slate-700","rounded-lg","bg-inherit","flex-auto","text-center","bg-none","border-0","block","shadow"),o.setAttribute("moving-tab",""),o.setAttribute("data-tab-target",""),o.appendChild(n),e.appendChild(o),o.style.padding="0px",o.style.transition=".5s ease";var i=e.querySelector("[data-tab-target][aria-selected='true']").parentElement;if(i){var r=Array.from(i.closest("ul").children),a=r.indexOf(i)+1,c=0;if(e.classList.contains("flex-col")){for(var s=1;s<=r.indexOf(i);s++)c+=e.querySelector("li:nth-child("+s+")").offsetHeight;o.style.transform="translate3d(0px,"+c+"px, 0px)",o.style.width=e.querySelector("li:nth-child("+a+")").offsetWidth+"px",o.style.height=e.querySelector("li:nth-child("+s+")").offsetHeight}else{for(s=1;s<=r.indexOf(i);s++)c+=e.querySelector("li:nth-child("+s+")").offsetWidth;o.style.transform="translate3d("+c+"px, 0px, 0px)",o.style.width=e.querySelector("li:nth-child("+a+")").offsetWidth+"px"}}})),window.innerWidth<991?e.forEach((function(e,t){e.classList.contains("flex-col")||e.classList.add("flex-col","on-resize")})):e.forEach((function(e,t){e.classList.contains("on-resize")&&e.classList.remove("flex-col","on-resize")}))})),(e=document.querySelectorAll("[data-tab-content]"))[0]&&e.forEach((function(e){e.parentElement.querySelectorAll("li a[data-tab-target]").forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector("#"+e.getAttribute("aria-controls"));if(!t.classList.contains("block","opacity-100")){var o=t.closest("[data-tab-content]").parentElement.querySelector("li a[data-tab-target][aria-selected='true']"),n=document.querySelector("#"+o.getAttribute("aria-controls"));n.classList.remove("block","opacity-100"),n.classList.add("hidden","opacity-0"),t.classList.add("block","opacity-100"),t.classList.remove("hidden","opacity-0")}}))}))}))}();