(()=>{"use strict";var e={200:(e,t)=>{function n(e){var t=Object.keys(e),a=[],o=document.createElement("div");return t.forEach((function(t){if("Object"===e[t].constructor.name){var o=n(e[t]),d=document.createElement("div"),s=document.createElement("span"),l=document.createElement("span");d.classList.add("json2html-nestedObject"),s.textContent=t+": ",s.classList.add("json2html-key"),l.textContent=e[t].constructor.name,l.classList.add("json2html-type__object"),d.appendChild(s),d.appendChild(l),d.appendChild(o),a.push(d)}else{var r=document.createElement("div"),c=document.createElement("span"),i=document.createElement("span");r.classList.add("json2html-pair"),c.textContent=t+": ",c.classList.add("json2html-key");var p=void 0;"null"==e[t]?(p="json2html-type__null",i.textContent=e[t]):"undefined"==e[t]?(p="json2html-type__undefined",i.textContent=e[t]):(p="json2html-type__"+typeof e[t],i.textContent="string"==typeof e[t]?'"'.concat(e[t],'"'):e[t]),i.classList.add("json2html-value"),i.classList.add(p),r.appendChild(c),r.appendChild(i),a.push(r)}})),a.forEach((function(e){o.appendChild(e)})),o}Object.defineProperty(t,"__esModule",{value:!0}),t.json2html=void 0,t.json2html=function(e,t){var a=document.createElement("div"),o=n(JSON.parse(e));return a.appendChild(o),console.log(o,a),a}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var d=t[a]={exports:{}};return e[a](d,d.exports,n),d.exports}(()=>{var e,t,a=n(200);function o(e){var t=document.querySelector("#app__output");0==t.children.length?t.appendChild(e):t.replaceChild(e,t.firstElementChild)}e='{ "userName": "Alex", "age": 32, "bornDate": "5-10-1985", "banned": false, "registrationData": {"date": "2-11-2011",  "IP": "8.8.8.8"}, "deletionDate": "null", "userTag": "undefined", "groups": [{"type": "public", "name": "managers"}, {"type":"private", "name": "admins"}] }',(t=document.querySelector("#app #app__input textarea")).textContent=e,o((0,a.json2html)(e)),t.addEventListener("keyup",(function(e){o((0,a.json2html)(t.value))}))})()})();