!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=32)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t){this._element=t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NEWS_LANGUAGE=e.BAD_NEWS_API_RESULT=e.REQUIRED_VALIDATE_INPUT_TEXT=e.PUBLISHED_AT=e.DAYS_AGO_COUNT=e.PAGE_SIZE=e.NEWS_API_KEY=e.NEWS_API_URL=void 0,e.NEWS_API_URL="https://nomoreparties.co/news/v2/everything",e.NEWS_API_KEY="36d016b9c22e4779bda6ca662fc87eea",e.PAGE_SIZE=100,e.DAYS_AGO_COUNT=6,e.PUBLISHED_AT="publishedAt",e.REQUIRED_VALIDATE_INPUT_TEXT="Нужно ввести ключевое слово",e.BAD_NEWS_API_RESULT="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.",e.NEWS_LANGUAGE="ru"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sortByDateDesc=e.getFirstNewsMonth=e.getDateWithStringMonth=e.getDaysAgoString=void 0;const o=n(1),r=n(3);e.getDaysAgoString=()=>{const t=new Date;return t.setDate(t.getDate()-o.DAYS_AGO_COUNT),t.toISOString()},e.getDateWithStringMonth=t=>{const e=new Date(t);return`${e.getDate()} ${r.QUESTION_RUSSIAN_MONTH_NAMES[e.getMonth()]}, ${e.getFullYear()}`},e.getFirstNewsMonth=t=>{const e=t[t.length-1],n=new Date(e.publishedAt).getMonth();return r.RUSSIAN_MONTH_NAMES[n]};const s=(t,e)=>{const n=t.publishedAt,o=e.publishedAt;return n>o?1:n<o?-1:0};e.sortByDateDesc=t=>t.sort(s)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RUSSIAN_DAY_OF_WEEK_NAMES=e.RUSSIAN_MONTH_NAMES=e.QUESTION_RUSSIAN_MONTH_NAMES=void 0,e.QUESTION_RUSSIAN_MONTH_NAMES=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],e.RUSSIAN_MONTH_NAMES=["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],e.RUSSIAN_DAY_OF_WEEK_NAMES=["пн","вт","ср","чт","пт","сб","вс"]},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=o(n(0));class s extends r.default{constructor(t,e){super(e),this._container=t}render(t){t.forEach(t=>this._container.appendChild(t))}clear(){this._container.innerHTML=""}}e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SHOWED_NEWS_PACK_SIZE=void 0,e.SHOWED_NEWS_PACK_SIZE=3},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.save=(t,e)=>{localStorage.setItem(t,JSON.stringify(e))},this.load=t=>JSON.parse(localStorage.getItem(t))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DISPLAYED_COUNT=e.ARTICLES=e.TOTAL_RESULTS=e.QUESTION=void 0,e.QUESTION="question",e.TOTAL_RESULTS="totalResults",e.ARTICLES="articles",e.DISPLAYED_COUNT="displayedCount"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDisplayedCount=e.getMatchesInArticle=e.getCountInTitle=void 0;const o=n(5);e.getCountInTitle=(t,e)=>{e=e.toLowerCase();const n=new RegExp(""+e,"is");return t.reduce((t,e)=>t+e.title.toLowerCase().split(n).length-1,0)},e.getMatchesInArticle=(t,e)=>{e=e.toLowerCase();const n=new RegExp(""+e,"is");let o=t.title?t.title.toLowerCase().split(n).length-1:0;return o+=t.description?t.description.toLowerCase().split(n).length-1:0,o},e.getDisplayedCount=(t,e)=>t-o.SHOWED_NEWS_PACK_SIZE>=e?e+o.SHOWED_NEWS_PACK_SIZE:t},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),n(33);const r=o(n(34)),s=o(n(7)),u=n(8),i=n(9),c=o(n(35)),l=o(n(36)),_=o(n(4)),a=n(3),d=n(1),S=document.querySelector(".digits"),f=document.querySelector(".daily"),A=document.querySelector(".table"),E=document.querySelector("#table-row-template").content.querySelector(".table-row"),h=A.querySelector(".table__container"),N=new r.default(S),p=new s.default,g=new c.default(f),O=new _.default(h,A);!function(){const t=p.load(u.QUESTION),e=p.load(u.ARTICLES),n=i.getCountInTitle(e,t);N.setData(t,e.length,n),g.setMonth(e);const o=function(){const t=new Array;for(let e=d.DAYS_AGO_COUNT;e>=0;e--){const n=new Date;n.setDate(n.getDate()-e);const o=n.getDate(),r=`${o}, ${a.RUSSIAN_DAY_OF_WEEK_NAMES[n.getDay()]}`;t.push({dayNumber:o,day:r,count:0,percent:0})}return t}();!function(t,e,n){for(let o=0,r=e.length-1;o<t.length;){const s=t[o];new Date(s.publishedAt).getDate()===e[r].dayNumber?(e[r].count+=i.getMatchesInArticle(s,n),o++):r--}}(e,o,t),function(t){const e=t.reduce((t,e)=>t+e.count,0);t.forEach(t=>t.percent=100-100/e*t.count)}(o),O.render(o.map((t,e)=>{const n=new l.default(E);return e===d.DAYS_AGO_COUNT&&n.setLastRowModificator(),n.create(t)}))}()},function(t,e,n){},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=o(n(0));class s extends r.default{constructor(t){super(t),this._titleNode=this._element.querySelector(".title"),this._countNode=this._element.querySelector(".digits__count"),this._countInTitleNode=this._element.querySelector(".digits__title-count")}setData(t,e,n){this._titleNode.textContent=`Вы спросили: «${t}»`,this._countNode.textContent=e.toString(),this._countInTitleNode.textContent=n.toString()}}e.default=s},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=o(n(0)),s=n(2);class u extends r.default{constructor(t){super(t),this.monthNode=this._element.querySelector("#month")}setMonth(t){this.monthNode.textContent=`Дата (${s.getFirstNewsMonth(t)})`}}e.default=u},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=o(n(0));class s extends r.default{constructor(t){super(t)}create({day:t,count:e,percent:n}){const o=this._element.cloneNode(!0);o.querySelector(".table-row__first-column").textContent=t;o.querySelector(".table-row__shifter").setAttribute("style",`width: ${n}%`);return o.querySelector("#count").textContent=e.toString(),this._element=o,o}setLastRowModificator(){this._element.classList.add("table-row_margin-bottom_last"),this._element.classList.remove("table-row_margin-bottom")}}e.default=s}]);
//# sourceMappingURL=analytics.74caddc793ae9430a8f0.js.map