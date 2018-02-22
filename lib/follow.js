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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    areas: 8
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
exports.init = undefined;

var _defaults = __webpack_require__(0);

var _cacheDom = __webpack_require__(1);

var _mousemove = __webpack_require__(4);

var _mergeOptions = __webpack_require__(8);

var init = exports.init = function init(options) {
    (0, _mergeOptions.mergeOptions)(options);
    document.addEventListener('mousemove', _mousemove.mouseMoveHandler);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mouseMoveHandler = undefined;

var _followEl = __webpack_require__(2);

var _updateEl = __webpack_require__(5);

var mouseMoveHandler = exports.mouseMoveHandler = function mouseMoveHandler(ev) {
    _followEl.followElArray.map(function (el) {
        (0, _updateEl.updateEl)(el, ev);
    });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateEl = undefined;

var _elCenter = __webpack_require__(6);

var _defaults = __webpack_require__(0);

var _propertyUpdateCondition = __webpack_require__(7);

var updateEl = exports.updateEl = function updateEl(el, ev) {
    var elCenterPoint = (0, _elCenter.getCenterPoint)(el);
    var elAngle = Math.atan2(ev.pageY - elCenterPoint.y, ev.pageX - elCenterPoint.x) * 180 / Math.PI;
    var elAngleSegment = 180 / _defaults.defaults.areas;

    (0, _propertyUpdateCondition.propertyUpdateCondition)(el, elAngle, elAngleSegment);
};

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.propertyUpdateCondition = undefined;

var _defaults = __webpack_require__(0);

var array = ['right', 'top-right', 'top', 'top-left', 'left', 'bottom-left', 'bottom', 'bottom-right'];

var propertyUpdateCondition = exports.propertyUpdateCondition = function propertyUpdateCondition(el, evAngle, elAngle) {
    var intervalI = elAngle;
    var intervalII = elAngle - elAngle * 2;

    for (var i = 0; i < _defaults.defaults.areas; i++) {

        if (!(intervalI < 0 && intervalII > 0)) {
            if (evAngle < intervalI && evAngle > intervalII) {
                el.innerHTML = array[i];
            }
        } else {
            if (evAngle > intervalII || evAngle < intervalI) {
                el.innerHTML = array[i];
            }
        }

        intervalI = intervalII;
        intervalII -= elAngle * 2;

        if (intervalII < -180) {
            intervalII = -intervalI;
        }
    }
};

/***/ }),
/* 8 */
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