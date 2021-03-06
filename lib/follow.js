(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("follow", [], factory);
	else if(typeof exports === 'object')
		exports["follow"] = factory();
	else
		root["follow"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/events/mousemove.event.js":
/*!***************************************!*\
  !*** ./src/events/mousemove.event.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.mouseMoveHandler = undefined;\n\nvar _elCollection = __webpack_require__(/*! ../models/el-collection.model */ \"./src/models/el-collection.model.js\");\n\nvar _updateEl = __webpack_require__(/*! ../services/update-el.service */ \"./src/services/update-el.service.js\");\n\nvar mouseMoveHandler = exports.mouseMoveHandler = function mouseMoveHandler(ev) {\n    _elCollection.elCollection.map(function (el) {\n        (0, _updateEl.updateEl)(el, ev);\n    });\n};\n\n//# sourceURL=webpack://follow/./src/events/mousemove.event.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.init = undefined;\n\nvar _mousemove = __webpack_require__(/*! ./events/mousemove.event */ \"./src/events/mousemove.event.js\");\n\nvar _mergeOptions = __webpack_require__(/*! ./services/merge-options.service */ \"./src/services/merge-options.service.js\");\n\nvar init = exports.init = function init(options) {\n    (0, _mergeOptions.mergeOptions)(options);\n    document.addEventListener('mousemove', _mousemove.mouseMoveHandler);\n};\n\n//# sourceURL=webpack://follow/./src/index.js?");

/***/ }),

/***/ "./src/models/el-collection.model.js":
/*!*******************************************!*\
  !*** ./src/models/el-collection.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.collectionAssign = exports.collectionClean = exports.elCollection = undefined;\n\nvar _handleType = __webpack_require__(/*! ../services/handle-type.service */ \"./src/services/handle-type.service.js\");\n\nvar elCollection = exports.elCollection = [];\nvar collectionClean = exports.collectionClean = function collectionClean() {\n    elCollection.map(function (el) {\n        el.hasAttribute('style') ? el.removeAttribute('style') : '';\n        el.innerText = '';\n    });\n    exports.elCollection = elCollection = [];\n};\nvar collectionAssign = exports.collectionAssign = function collectionAssign(arr) {\n    exports.elCollection = elCollection = Array.from(arr);\n    elCollection.map(function (el) {\n        (0, _handleType.handleType)(el, true);\n    });\n};\n\n//# sourceURL=webpack://follow/./src/models/el-collection.model.js?");

/***/ }),

/***/ "./src/models/settings.model.js":
/*!**************************************!*\
  !*** ./src/models/settings.model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar settings = exports.settings = {\n    selector: '.follow-el',\n    areas: 4,\n    type: 'text',\n    prop: '',\n    feed: [],\n    default: ''\n};\n\n//# sourceURL=webpack://follow/./src/models/settings.model.js?");

/***/ }),

/***/ "./src/services/adjust-wedge-angles.service.js":
/*!*****************************************************!*\
  !*** ./src/services/adjust-wedge-angles.service.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar adjustWedgeAngles = exports.adjustWedgeAngles = function adjustWedgeAngles(start, end, part360) {\n    start = end;\n    end -= part360;\n\n    if (end < -180) {\n        end = -start;\n    } else if (end === -180) {\n        end = 180;\n    }\n    return [start, end];\n};\n\n//# sourceURL=webpack://follow/./src/services/adjust-wedge-angles.service.js?");

/***/ }),

/***/ "./src/services/cache-dom.service.js":
/*!*******************************************!*\
  !*** ./src/services/cache-dom.service.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar cacheDom = exports.cacheDom = function cacheDom(selector) {\n    return document.querySelectorAll(selector);\n};\n\n//# sourceURL=webpack://follow/./src/services/cache-dom.service.js?");

/***/ }),

/***/ "./src/services/check-if-over-el.service.js":
/*!**************************************************!*\
  !*** ./src/services/check-if-over-el.service.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar checkIfOverElement = exports.checkIfOverElement = function checkIfOverElement(el, mouse) {\n    var obj = el.getBoundingClientRect();\n\n    if (obj.left <= mouse.x && obj.right >= mouse.x && obj.top <= mouse.y && obj.bottom >= mouse.y) {\n        return true;\n    }\n    return false;\n};\n\n//# sourceURL=webpack://follow/./src/services/check-if-over-el.service.js?");

/***/ }),

/***/ "./src/services/el-center.service.js":
/*!*******************************************!*\
  !*** ./src/services/el-center.service.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar getCenterPoint = exports.getCenterPoint = function getCenterPoint(data) {\n    var points = data.getBoundingClientRect();\n    return {\n        x: (points.left + points.right) / 2,\n        y: (points.bottom + points.top) / 2\n    };\n};\n\n//# sourceURL=webpack://follow/./src/services/el-center.service.js?");

/***/ }),

/***/ "./src/services/handle-type.service.js":
/*!*********************************************!*\
  !*** ./src/services/handle-type.service.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.handleType = undefined;\n\nvar _settings = __webpack_require__(/*! ../models/settings.model */ \"./src/models/settings.model.js\");\n\nvar handleType = exports.handleType = function handleType(el, val) {\n    if (typeof val === 'boolean') {\n        if (_settings.settings.type === 'text') {\n            if (el.innerText !== _settings.settings.default) {\n                el.innerText = _settings.settings.default;\n            }\n        } else if (_settings.settings.type === 'style') {\n            if (el[_settings.settings.type][_settings.settings.prop] !== _settings.settings.default) {\n                el[_settings.settings.type][_settings.settings.prop] = _settings.settings.default;\n            }\n        }\n    } else {\n        if (_settings.settings.type === 'text') {\n            if (el.innerText !== val) {\n                el.innerText = val;\n            }\n        } else if (_settings.settings.type === 'style') {\n            if (el[_settings.settings.type][_settings.settings.prop] !== val) {\n                el[_settings.settings.type][_settings.settings.prop] = val;\n            }\n        }\n    }\n};\n\n//# sourceURL=webpack://follow/./src/services/handle-type.service.js?");

/***/ }),

/***/ "./src/services/merge-options.service.js":
/*!***********************************************!*\
  !*** ./src/services/merge-options.service.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.mergeOptions = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _settings = __webpack_require__(/*! ../models/settings.model */ \"./src/models/settings.model.js\");\n\nvar _cacheDom = __webpack_require__(/*! ./cache-dom.service */ \"./src/services/cache-dom.service.js\");\n\nvar _elCollection = __webpack_require__(/*! ../models/el-collection.model */ \"./src/models/el-collection.model.js\");\n\nvar mergeOptions = exports.mergeOptions = function mergeOptions(options) {\n    if (typeof options === 'string') {\n        _settings.settings.selector = options;\n        if (_elCollection.elCollection.length > 0) {\n            (0, _elCollection.collectionClean)();\n        }\n        (0, _elCollection.collectionAssign)((0, _cacheDom.cacheDom)(_settings.settings.selector));\n    } else if ((typeof options === \"undefined\" ? \"undefined\" : _typeof(options)) === 'object') {\n        Object.assign(_settings.settings, options);\n        if (_elCollection.elCollection.length > 0) {\n            (0, _elCollection.collectionClean)();\n        }\n        (0, _elCollection.collectionAssign)((0, _cacheDom.cacheDom)(_settings.settings.selector));\n    } else if ((typeof options === \"undefined\" ? \"undefined\" : _typeof(options)) === undefined) {\n        if (_elCollection.elCollection.length > 0) {\n            (0, _elCollection.collectionClean)();\n        }\n        (0, _elCollection.collectionAssign)((0, _cacheDom.cacheDom)(_settings.settings.selector));\n    }\n};\n\n//# sourceURL=webpack://follow/./src/services/merge-options.service.js?");

/***/ }),

/***/ "./src/services/property-update-condition.service.js":
/*!***********************************************************!*\
  !*** ./src/services/property-update-condition.service.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.propertyUpdateCondition = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _settings = __webpack_require__(/*! ../models/settings.model */ \"./src/models/settings.model.js\");\n\nvar _adjustWedgeAngles3 = __webpack_require__(/*! ./adjust-wedge-angles.service */ \"./src/services/adjust-wedge-angles.service.js\");\n\nvar _handleType = __webpack_require__(/*! ./handle-type.service */ \"./src/services/handle-type.service.js\");\n\nvar propertyUpdateCondition = exports.propertyUpdateCondition = function propertyUpdateCondition(el, mouseToElAngle) {\n    var part180 = 180 / _settings.settings.areas;\n    var part360 = 360 / _settings.settings.areas;\n    var wedgeAngleStart = part180;\n    var wedgeAngleEnd = -part180;\n\n    for (var i = 0; i < _settings.settings.areas; i++) {\n        if (wedgeAngleStart > mouseToElAngle && wedgeAngleEnd < mouseToElAngle) {\n            (0, _handleType.handleType)(el, _settings.settings.feed[i]);\n        } else if (wedgeAngleStart < 0 && wedgeAngleEnd > 0 && (mouseToElAngle > wedgeAngleEnd || mouseToElAngle < wedgeAngleStart)) {\n            (0, _handleType.handleType)(el, _settings.settings.feed[i]);\n        }\n\n        var _adjustWedgeAngles = (0, _adjustWedgeAngles3.adjustWedgeAngles)(wedgeAngleStart, wedgeAngleEnd, part360);\n\n        var _adjustWedgeAngles2 = _slicedToArray(_adjustWedgeAngles, 2);\n\n        wedgeAngleStart = _adjustWedgeAngles2[0];\n        wedgeAngleEnd = _adjustWedgeAngles2[1];\n    }\n};\n\n//# sourceURL=webpack://follow/./src/services/property-update-condition.service.js?");

/***/ }),

/***/ "./src/services/update-el.service.js":
/*!*******************************************!*\
  !*** ./src/services/update-el.service.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.updateEl = undefined;\n\nvar _elCenter = __webpack_require__(/*! ./el-center.service */ \"./src/services/el-center.service.js\");\n\nvar _propertyUpdateCondition = __webpack_require__(/*! ./property-update-condition.service */ \"./src/services/property-update-condition.service.js\");\n\nvar _checkIfOverEl = __webpack_require__(/*! ./check-if-over-el.service */ \"./src/services/check-if-over-el.service.js\");\n\nvar _handleType = __webpack_require__(/*! ./handle-type.service */ \"./src/services/handle-type.service.js\");\n\nvar updateEl = exports.updateEl = function updateEl(el, ev) {\n    var mouseCoordinates = {\n        x: ev.clientX,\n        y: ev.clientY\n    };\n    var overEl = (0, _checkIfOverEl.checkIfOverElement)(el, mouseCoordinates);\n\n    if (overEl) {\n        (0, _handleType.handleType)(el, overEl);\n    } else if (!overEl) {\n        var elCenterPoint = (0, _elCenter.getCenterPoint)(el, overEl);\n        var mouseToElAngle = Math.atan2(mouseCoordinates.y - elCenterPoint.y, mouseCoordinates.x - elCenterPoint.x) * 180 / Math.PI;\n        (0, _propertyUpdateCondition.propertyUpdateCondition)(el, mouseToElAngle);\n    }\n};\n\n//# sourceURL=webpack://follow/./src/services/update-el.service.js?");

/***/ })

/******/ });
});