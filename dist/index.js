/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../src/bundles-content/index.ts":
/*!*****************************************************************!*\
  !*** E:/AEM/frontend-gulp-webpack/src/bundles-content/index.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_main_page_component_news_ts_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main-page/component-news/ts/index.ts */ "../../../src/components/main-page/component-news/ts/index.ts");
/* harmony import */ var _components_main_page_main_ts_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main-page/main/ts/index.ts */ "../../../src/components/main-page/main/ts/index.ts");
/* harmony import */ var _components_main_page_main_ts_index_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_main_page_main_ts_index_ts__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "../../../src/components/main-page/component-news/ts/index.ts":
/*!****************************************************************************************!*\
  !*** E:/AEM/frontend-gulp-webpack/src/components/main-page/component-news/ts/index.ts ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test1 */ "../../../src/components/main-page/component-news/ts/test1.ts");

var str = "I'm TS!";
console.log(str);
Object(_test1__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "../../../src/components/main-page/component-news/ts/test1.ts":
/*!****************************************************************************************!*\
  !*** E:/AEM/frontend-gulp-webpack/src/components/main-page/component-news/ts/test1.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function greet() {
    console.log('Have a great day!!!');
}
/* harmony default export */ __webpack_exports__["default"] = (greet);


/***/ }),

/***/ "../../../src/components/main-page/main/ts/index.ts":
/*!******************************************************************************!*\
  !*** E:/AEM/frontend-gulp-webpack/src/components/main-page/main/ts/index.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
    var next = document.querySelector('.arrow-next-slide');
    console.log(next, 3);
    next.onclick = function () {
        goToSlide(currentSlide + 1);
    };
    var slides = document.querySelectorAll('.carousel-items .carousel-item');
    var currentSlide = 0;
    goToSlide(1);
    function goToSlide(n) {
        slides[currentSlide].className = 'carousel-item';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].className = 'carousel-item showing';
    }
    var previous = document.querySelector('.arrow-previous-slide');
    previous.onclick = function () {
        goToSlide(currentSlide - 1);
    };
}());


/***/ }),

/***/ 0:
/*!***********************************************************************!*\
  !*** multi E:/AEM/frontend-gulp-webpack/src/bundles-content/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\AEM\frontend-gulp-webpack\src\bundles-content\index.ts */"../../../src/bundles-content/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0U6L0FFTS9mcm9udGVuZC1ndWxwLXdlYnBhY2svc3JjL2J1bmRsZXMtY29udGVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vRTovQUVNL2Zyb250ZW5kLWd1bHAtd2VicGFjay9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvY29tcG9uZW50LW5ld3MvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL0U6L0FFTS9mcm9udGVuZC1ndWxwLXdlYnBhY2svc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL3Rlc3QxLnRzIiwid2VicGFjazovLy9FOi9BRU0vZnJvbnRlbmQtZ3VscC13ZWJwYWNrL3NyYy9jb21wb25lbnRzL21haW4tcGFnZS9tYWluL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBNEQ7QUFDVjs7Ozs7Ozs7Ozs7OztBQ0RsRDtBQUFBO0FBQTRCO0FBQzVCLElBQUksR0FBRyxHQUFZLFNBQVMsQ0FBQztBQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLHNEQUFLLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0hSO0FBQUEsU0FBUyxLQUFLO0lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFFYyxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7QUM2QnJCLENBQUM7SUFDRyxJQUFNLElBQUksR0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckIsSUFBSSxDQUFDLE9BQU8sR0FBRztRQUNYLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxNQUFNLEdBQU8sUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFFN0UsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUViLFNBQVMsU0FBUyxDQUFDLENBQVE7UUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDakQsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQU0sUUFBUSxHQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUVyRSxRQUFRLENBQUMsT0FBTyxHQUFHO1FBQ2YsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuLi9jb21wb25lbnRzL21haW4tcGFnZS9jb21wb25lbnQtbmV3cy90cy9pbmRleC50cyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi90cy9pbmRleC50cyc7XHJcbiIsImltcG9ydCBncmVldCBmcm9tIFwiLi90ZXN0MVwiO1xyXG5sZXQgc3RyIDogc3RyaW5nID0gXCJJJ20gVFMhXCI7XHJcbmNvbnNvbGUubG9nKHN0cik7XHJcbmdyZWV0KCk7IiwiZnVuY3Rpb24gZ3JlZXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSGF2ZSBhIGdyZWF0IGRheSEhIScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncmVldDsiLCIvLyBmdW5jdGlvbiBoaWRlQWxsTmV3cygpIHtcclxuLy8gICAgIGxldCBuZXdzTGlzdCA6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaXN0LW5ld3M+YXJ0aWNsZScpO1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzTGlzdC5sZW5ndGg7ICsraSkge1xyXG4vLyAgICAgICAgIG5ld3NMaXN0W2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gc2hvd05ld3MxKCkge1xyXG4vLyAgICAgaGlkZUFsbE5ld3MoKTtcclxuLy8gICAgIGxldCBuZXdzMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdzLTEnKTtcclxuLy8gICAgIG5ld3MxLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vXHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gc2hvd05ld3MyKCkge1xyXG4vLyAgICAgaGlkZUFsbE5ld3MoKTtcclxuLy8gICAgIGxldCBuZXdzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdzLTInKTtcclxuLy8gICAgIG5ld3MyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vXHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gc2hvd05ld3MzKCkge1xyXG4vLyAgICAgaGlkZUFsbE5ld3MoKTtcclxuLy8gICAgIGxldCBuZXdzMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdzLTMnKTtcclxuLy8gICAgIG5ld3MzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vXHJcbi8vIH1cclxuLy9cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jaG9zZS0zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV3czMpO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNob3NlLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dOZXdzMik7XHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2hvc2UtMScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd05ld3MxKTtcclxuLy9cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93IHByZXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dOZXdzMik7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBuZXh0OmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1uZXh0LXNsaWRlJyk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXh0LCAzKTtcclxuXHJcbiAgICBuZXh0Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2xpZGVzOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1pdGVtcyAuY2Fyb3VzZWwtaXRlbScpO1xyXG5cclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgZ29Ub1NsaWRlKDEpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdvVG9TbGlkZShuOm51bWJlcikge1xyXG4gICAgICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTmFtZSA9ICdjYXJvdXNlbC1pdGVtJztcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSAobiArIHNsaWRlcy5sZW5ndGgpICUgc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc05hbWUgPSAnY2Fyb3VzZWwtaXRlbSBzaG93aW5nJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2aW91czphbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctcHJldmlvdXMtc2xpZGUnKTtcclxuXHJcbiAgICBwcmV2aW91cy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcclxuICAgIH07XHJcbn0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==