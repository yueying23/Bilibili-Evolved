!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["feeds/disable-details"]=e():t["feeds/disable-details"]=e()}(self,(function(){return function(){var t,e,n={840:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,"[data-module=desc],\n.card[data-did] .content {\n  cursor: text;\n}\n[data-module=desc] .details,\n.card[data-did] .content .details {\n  color: #222;\n  font-size: 12px;\n  opacity: 0.6;\n  cursor: pointer;\n  display: block;\n  line-height: 22px;\n}\nbody.dark [data-module=desc] .details,\nbody.dark .card[data-did] .content .details {\n  color: #eee;\n}",""]),t.exports=o},274:function(t,e,n){var o=n(645)((function(t){return t[1]}));o.push([t.id,".card[data-did] .content .details {\n  display: none;\n}",""]),t.exports=o},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var d=this[i][0];null!=d&&(r[d]=!0)}for(var a=0;a<t.length;a++){var s=[].concat(t[a]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},94:function(t,e,n){var o=n(840);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},377:function(t,e,n){var o=n(274);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},23:function(t){"use strict";t.exports=coreApis.componentApis.feeds.api},163:function(t){"use strict";t.exports=coreApis.style}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var d={};t=t||[null,e({}),e([]),e(e)];for(var a=2&o&&n;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((function(t){d[t]=function(){return n[t]}}));return d.default=function(){return n},r.d(i,d),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return a}});var t=r(23),e=coreApis.utils.urls;let n=!0;const o="disable-feeds-details-style",d=async()=>{const{addImportantStyle:t}=await Promise.resolve().then(r.t.bind(r,163,23)),{default:e}=await Promise.resolve().then(r.t.bind(r,94,23));t(e,o)},a={name:"disableFeedsDetails",displayName:"禁止跳转动态详情",tags:[componentsTags.feeds],urlInclude:e.feedsUrls,description:{"zh-CN":"禁止动态点击后跳转详情页, 方便选择其中的文字."},entry:async()=>{const{addImportantStyle:e}=await Promise.resolve().then(r.t.bind(r,163,23)),{forEachFeedsCard:o}=await Promise.resolve().then(r.t.bind(r,23,23)),{default:i}=await Promise.resolve().then(r.t.bind(r,377,23));e(i,"disable-feeds-details-init-style"),d();o({added:e=>{const{element:o}=e;o.addEventListener("click",(t=>{if(t.ctrlKey||!n)return;const e=dqa(o,'.content, .bili-dyn-content [data-module="desc"] .bili-rich-text'),r=t.target;if(r.hasAttribute("click-title"))return;dqa(o,".im-popup").some((t=>t.contains(r)))||e.some((t=>t===r||t.contains(r)))&&t.stopImmediatePropagation()}),{capture:!0});const r=dq(o,".post-content, .bili-dyn-content");if(!r)return;if(![".video-container",".bangumi-container",".media-list",".article-container"].some((t=>dq(r,t)))&&!dq(r,".details")&&(r.classList.contains("repost")||e.type===t.feedsCardTypes.repost)){const t=dq(r,".content, .bili-dyn-content__orig__desc");if(!t)return;const e=document.createElement("div");e.classList.add("details"),e.setAttribute("click-title","详情"),e.innerHTML='\n        详情<i class="mdi mdi-chevron-right" click-title></i>\n      ',t.insertAdjacentElement("beforeend",e)}}})},unload:()=>{document.getElementById(o)?.remove(),n=!1},reload:()=>{d(),n=!0},commitHash:"93c726617d81fdd938d1ebf383cf26301b45cb3d",coreVersion:"2.1.7"}}(),i=i.component}()}));