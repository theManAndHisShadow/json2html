(()=>{"use strict";var e={523:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.emulateEvent=o.addMultipleEventHandlers=o.isObject=o.isArray=o.isLink=void 0,o.isLink=function(e){return/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(e)},o.isArray=function(e){return null!==e&&"Array"===e.constructor.name},o.isObject=function(e){return null!==e&&"Object"===e.constructor.name},o.addMultipleEventHandlers=function(e,o,l){e.forEach((function(e){e.addEventListener(o,(function(e){l(e)}))}))},o.emulateEvent=function(e,o){var l=document.createEvent("Events");l.initEvent(o,!0,!1),e.dispatchEvent(l)}},298:function(e,o){var l=this&&this.__spreadArray||function(e,o,l){if(l||2===arguments.length)for(var t,r=0,s=o.length;r<s;r++)!t&&r in o||(t||(t=Array.prototype.slice.call(o,0,r)),t[r]=o[r]);return e.concat(t||Array.prototype.slice.call(o))};Object.defineProperty(o,"__esModule",{value:!0}),o.updateThemeCSS=void 0,o.updateThemeCSS=function(e){var o=document.head.querySelector('[data-style-origin="json2html"]'),t=function(e){var o="\n/* generated by src/ts/lib/themes.ts generateCSSCode() function */\n    ",t=function(e){return{andromeda:{container:{selector:".json2html-container",properties:{background:"#23262E"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#9c967a"}},key:{selector:".json2html-key",properties:{color:"#00e8c6"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"#ee5d43"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#ee5d43"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#f39c12"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#96E072"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#3B79C7"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#4e4f54"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#f92672"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#646b7c"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"#8490a8"}}},daylight:{container:{selector:".json2html-container",properties:{background:"white"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#585858"}},key:{selector:".json2html-key",properties:{color:"blue"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"blueviolet"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#b44343"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#1e7fcc"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#4caf50"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#4caf50"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#9b9b9b"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#795548"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#646b7c"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"#000000"}}},dracula:{container:{selector:".json2html-container",properties:{background:"#282a36"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#ffffff"}},key:{selector:".json2html-key",properties:{color:"#8be9fd"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"#bd93f9"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#ff79c6"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#bd93f9"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#f1fa8c"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#ff79c6"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#6272a4"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#ffb86c"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#f8f8f2"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"white"}}},"github-dark":{container:{selector:".json2html-container",properties:{background:"#0d1117"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#afafaf"}},key:{selector:".json2html-key",properties:{color:"#c9d1d9"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"#b392f0"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#ff79c6"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#9ecbff"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#9ecbff"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#9ecbff"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#6a737d"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#9ecbff"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#9ecbff"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"#6a737d"}}},"github-light":{container:{selector:".json2html-container",properties:{background:"#ffffff"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#afafaf"}},key:{selector:".json2html-key",properties:{color:"#25292f"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"#6f42c1"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#25292f"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#005cc5"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#0a3069"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#0a3069"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#6a737d"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#005cc5"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#005cc5"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"#6a737d"}}},"gruvbox-dark":{container:{selector:".json2html-container",properties:{background:"#282828"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#585858"}},key:{selector:".json2html-key",properties:{color:"#98971A"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"#B16286"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#8ec07c"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#B16286"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#458588"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#689D6A"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#504945"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#CC241D"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#A89984"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"#6a737d"}}},"gruvbox-light":{container:{selector:".json2html-container",properties:{background:"#FBF1C7"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#9c967a"}},key:{selector:".json2html-key",properties:{color:"#98971A"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"#B16286"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#CC241D"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#B16286"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#458588"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#689D6A"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#BDAE93"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#CC241D"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#7C6F64"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"#7C6F64"}}},horizon:{container:{selector:".json2html-container",properties:{background:"#fffbf7"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#585858"}},key:{selector:".json2html-key",properties:{color:"#da103f"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"#8a31b9"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#b44343"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#1766a5"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#f6661e"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#c14e15"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#9b9b9b"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#3f51b5"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#846e64"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"#black"}}},monokai:{container:{selector:".json2html-container",properties:{background:"#272822"}},spoilerToggle:{selector:".json2html-spoiler-toggle--collapsed, .json2html-spoiler-toggle--uncollapsed",properties:{color:"#585858"}},key:{selector:".json2html-key",properties:{color:"#F92672"}},valueTypeBoolean:{selector:".json2html-type__boolean",properties:{color:"#AE81FF"}},valueMinusSign:{selector:".json2html-value__minus-sign",properties:{color:"#f92672"}},valueTypeNumber:{selector:".json2html-type__number",properties:{color:"#AE81FF"}},valueTypeString:{selector:".json2html-type__string",properties:{color:"#E6DB74"}},valueTypeStringLink:{selector:".json2html-type__string a, .json2html-type__string a:visited",properties:{color:"#F8F8F2"}},valueTypeNull:{selector:".json2html-type__null",properties:{color:"#75715E"}},valueTypeUndefined:{selector:".json2html-type__undefined",properties:{color:"#FD971F"}},valueComplexItemSignature:{selector:".json2html-type__array, .json2html-type__object",properties:{color:"#66D9EF"}},collapseAllToggle:{selector:".json2html-collapse-all-toggle",properties:{color:"#black"}}}}[e]}(e);return Object.keys(t).forEach((function(e){var r=t[e].selector,s=l([],Object.keys(t[e].properties),!0).map((function(o){return"".concat(o,": ").concat(t[e].properties[o],";\n")})).join("");o+="\n".concat(r," {\n    ").concat(s,"}\n")})),o}(e);if(o)o.innerHTML=t;else{var r=document.createElement("style");r.type="text/css",r.setAttribute("data-style-origin","json2html"),r.innerHTML=t,document.head.appendChild(r)}}}},o={};function l(t){var r=o[t];if(void 0!==r)return r.exports;var s=o[t]={exports:{}};return e[t].call(s.exports,s,s.exports,l),s.exports}l(523),l(298)})();