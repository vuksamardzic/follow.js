(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("follow", [], factory);
	else if(typeof exports === 'object')
		exports["follow"] = factory();
	else
		root["follow"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var defaults = exports.defaults = {
    selector: '.follow-el',
    areas: 8,
    type: 'text',
    prop: '',
    feed: [],
    default: ''
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var followEl = exports.followEl = function followEl(selector) {
    return document.querySelectorAll(selector);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var followElArray = exports.followElArray = [];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleType = undefined;

var _defaults = __webpack_require__(0);

var handleType = exports.handleType = function handleType(el, val) {
    if (typeof val === 'boolean') {
        if (_defaults.defaults.type === 'text') {
            if (el.innerText !== _defaults.defaults.default) {
                el.innerText = _defaults.defaults.default;
            }
        } else if (_defaults.defaults.type === 'style') {
            if (el[_defaults.defaults.type][_defaults.defaults.prop] !== _defaults.defaults.default) {
                el[_defaults.defaults.type][_defaults.defaults.prop] = _defaults.defaults.default;
            }
        }
    } else {
        if (_defaults.defaults.type === 'text') {
            if (el.innerText !== val) {
                el.innerText = val;
            }
        } else if (_defaults.defaults.type === 'style') {
            if (el[_defaults.defaults.type][_defaults.defaults.prop] !== val) {
                el[_defaults.defaults.type][_defaults.defaults.prop] = val;
            }
        }
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.init = undefined;

var _defaults = __webpack_require__(0);

var _cacheDom = __webpack_require__(1);

var _mousemove = __webpack_require__(5);

var _mergeOptions = __webpack_require__(11);

var init = exports.init = function init(options) {
    (0, _mergeOptions.mergeOptions)(options);
    document.addEventListener('mousemove', _mousemove.mouseMoveHandler);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mouseMoveHandler = undefined;

var _followEl = __webpack_require__(2);

var _updateEl = __webpack_require__(6);

var mouseMoveHandler = exports.mouseMoveHandler = function mouseMoveHandler(ev) {
    _followEl.followElArray.map(function (el) {
        (0, _updateEl.updateEl)(el, ev);
    });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateEl = undefined;

var _elCenter = __webpack_require__(7);

var _defaults = __webpack_require__(0);

var _propertyUpdateCondition = __webpack_require__(8);

var _checkIfOverEl = __webpack_require__(10);

var _handleType = __webpack_require__(3);

var updateEl = exports.updateEl = function updateEl(el, ev) {

    var mousePoint = {
        x: ev.pageX,
        y: ev.pageY
    };

    var overEl = (0, _checkIfOverEl.checkIfOverElement)(el, mousePoint);

    if (overEl) {
        (0, _handleType.handleType)(el, overEl);
    } else if (!overEl) {
        var elCenterPoint = (0, _elCenter.getCenterPoint)(el, overEl);
        var mouseToElAngle = Math.atan2(ev.pageY - elCenterPoint.y, ev.pageX - elCenterPoint.x) * 180 / Math.PI;
        (0, _propertyUpdateCondition.propertyUpdateCondition)(el, mouseToElAngle);
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getCenterPoint = exports.getCenterPoint = function getCenterPoint(data) {
    var points = data.getBoundingClientRect();
    return {
        x: (points.left + points.right) / 2,
        y: (points.bottom + points.top) / 2
    };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.propertyUpdateCondition = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _defaults = __webpack_require__(0);

var _adjustWedgeAngles3 = __webpack_require__(9);

var _handleType = __webpack_require__(3);

var propertyUpdateCondition = exports.propertyUpdateCondition = function propertyUpdateCondition(el, mouseToElAngle) {
    var part180 = 180 / _defaults.defaults.areas;
    var part360 = 360 / _defaults.defaults.areas;
    var wedgeAngleStart = part180;
    var wedgeAngleEnd = -part180;

    for (var i = 0; i < _defaults.defaults.areas; i++) {
        if (wedgeAngleStart > mouseToElAngle && wedgeAngleEnd < mouseToElAngle) {
            (0, _handleType.handleType)(el, _defaults.defaults.feed[i]);
        } else if (wedgeAngleStart < 0 && wedgeAngleEnd > 0 && (mouseToElAngle > wedgeAngleEnd || mouseToElAngle < wedgeAngleStart)) {
            (0, _handleType.handleType)(el, _defaults.defaults.feed[i]);
        }

        var _adjustWedgeAngles = (0, _adjustWedgeAngles3.adjustWedgeAngles)(wedgeAngleStart, wedgeAngleEnd, part360);

        var _adjustWedgeAngles2 = _slicedToArray(_adjustWedgeAngles, 2);

        wedgeAngleStart = _adjustWedgeAngles2[0];
        wedgeAngleEnd = _adjustWedgeAngles2[1];
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var adjustWedgeAngles = exports.adjustWedgeAngles = function adjustWedgeAngles(start, end, part360) {
    start = end;
    end -= part360;

    if (end < -180) {
        end = -start;
    } else if (end === -180) {
        end = 180;
    }
    return [start, end];
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var checkIfOverElement = exports.checkIfOverElement = function checkIfOverElement(el, mouse) {
    var obj = el.getBoundingClientRect();

    if (obj.left <= mouse.x && obj.right >= mouse.x && obj.top <= mouse.y && obj.bottom >= mouse.y) {
        return true;
    }
    return false;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeOptions = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _defaults = __webpack_require__(0);

var _cacheDom = __webpack_require__(1);

var _followEl = __webpack_require__(2);

var mergeOptions = exports.mergeOptions = function mergeOptions(options) {
    if (typeof options === 'string') {
        _defaults.defaults.selector = options;
        Array.from((0, _cacheDom.followEl)(_defaults.defaults.selector)).map(function (i) {
            return _followEl.followElArray.push(i);
        });
    } else if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === 'object') {
        Object.assign(_defaults.defaults, options);
        Array.from((0, _cacheDom.followEl)(_defaults.defaults.selector)).map(function (i) {
            return _followEl.followElArray.push(i);
        });
    } else if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === undefined) {
        Array.from((0, _cacheDom.followEl)(_defaults.defaults.selector)).map(function (i) {
            return _followEl.followElArray.push(i);
        });
    }
};

/***/ })
/******/ ]);
});