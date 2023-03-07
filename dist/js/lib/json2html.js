/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/lib/json2html.ts":
/*!*********************************!*\
  !*** ./src/ts/lib/json2html.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.json2html = void 0;\n/**\n * Checks given value type and returns CSS class name for it.\n * @param value\n * @returns CSS class name, for example: \"json2html-type__boolean\"\n */\nfunction getValueTypeClassName(value) {\n    var classNameSample = 'json2html-type__';\n    var type = value == \"null\" || value == \"undefined\" ? value : typeof value;\n    return classNameSample + type;\n}\n/**\n * Checks given value type and if is type \"string\" wraps value to double quotes.\n * @param value\n * @returns prepared value\n */\nfunction wrapValue(value) {\n    var isString = typeof value == 'string';\n    var isNull = value == 'null';\n    var isUndefined = value == 'undefined';\n    var wrapped = !isNull && !isUndefined && isString ? \"\\\"\".concat(value, \"\\\"\") : value;\n    return wrapped;\n}\n/**\n * Renders pair, where key:value - value is primitive type value.\n * @param keyName\n * @param itemValue\n * @returns ready for other manipulations HTML Node.\n */\nfunction renderPrimitiveItem(keyName, itemValue) {\n    var element = document.createElement('div');\n    var propertyName = document.createElement('span');\n    var value = document.createElement('span');\n    element.classList.add('json2html-pair');\n    propertyName.textContent = keyName + \": \";\n    propertyName.classList.add('json2html-key');\n    value.textContent = wrapValue(itemValue);\n    value.classList.add('json2html-value');\n    value.classList.add(getValueTypeClassName(itemValue));\n    element.appendChild(propertyName);\n    element.appendChild(value);\n    return element;\n}\n/**\n * Renders complex pair, where key:value - value is Object or Array.\n * @param keyName\n * @param itemValue\n * @returns ready for other manipulations HTML Node.\n */\nfunction renderComplexItem(params) {\n    var nestedObject = params.itemValue;\n    var renderedNested = render({\n        parsedJSON: nestedObject,\n        renderArrayLength: params.renderArrayLength,\n    });\n    var nestedElement = document.createElement('div');\n    var parentPropertyName = document.createElement('span');\n    var typeSignature = document.createElement('span');\n    nestedElement.classList.add('json2html-nestedObject');\n    parentPropertyName.textContent = params.keyName + \": \";\n    parentPropertyName.classList.add('json2html-key');\n    typeSignature.textContent = params.itemValue.constructor.name;\n    var constructorName = params.itemValue.constructor.name;\n    constructorName = constructorName[0].toLowerCase() + constructorName.slice(1);\n    // only for Array items\n    var isArray = params.itemValue.constructor.name === \"Array\";\n    if (isArray && params.renderArrayLength === true) {\n        var length_1 = params.itemValue.length == 0 ? 'empty' : params.itemValue.length;\n        var word = length_1 == \"empty\"\n            ? \"\" : length_1 == 1\n            ? ' item' : \" items\";\n        typeSignature.textContent += \" (\".concat(length_1).concat(word, \")\");\n    }\n    typeSignature.classList.add('json2html-type__' + constructorName);\n    nestedElement.appendChild(parentPropertyName);\n    nestedElement.appendChild(typeSignature);\n    nestedElement.appendChild(renderedNested);\n    return nestedElement;\n}\n/**\n *\n * @param parsedJSON\n * @returns\n */\nfunction render(params) {\n    var keys = Object.keys(params.parsedJSON);\n    var siblings = [];\n    var rendered = document.createElement('div');\n    keys.forEach(function (key) {\n        var isObject = params.parsedJSON[key].constructor.name === \"Object\";\n        var isArray = params.parsedJSON[key].constructor.name === \"Array\";\n        if (isObject || isArray) {\n            var nestedElement = renderComplexItem({\n                keyName: key,\n                itemValue: params.parsedJSON[key],\n                renderArrayLength: params.renderArrayLength,\n            });\n            siblings.push(nestedElement);\n        }\n        else {\n            var element = renderPrimitiveItem(key, params.parsedJSON[key]);\n            siblings.push(element);\n        }\n    });\n    siblings.forEach(function (node) {\n        rendered.appendChild(node);\n    });\n    return rendered;\n}\nfunction json2html(params) {\n    // if renderArrayLength param not given - pass true\n    params.renderArrayLength = params.renderArrayLength == false ? false : true;\n    var parent = document.createElement('div');\n    var parsed = JSON.parse(params.json);\n    var rendered = render({\n        parsedJSON: parsed,\n        renderArrayLength: params.renderArrayLength,\n    });\n    parent.appendChild(rendered);\n    console.log(params);\n    return parent;\n}\nexports.json2html = json2html;\n\n\n//# sourceURL=webpack:///./src/ts/lib/json2html.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/lib/json2html.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;