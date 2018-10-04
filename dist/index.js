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
/*!**********************************************************************!*\
  !*** C:/Users/yadamska/PROJECT/proj_ui/src/bundles-content/index.ts ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_main_page_component_news_ts_index_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/main-page/component-news/ts/index.ts */ "../../../src/components/main-page/component-news/ts/index.ts");
/* harmony import */ var _components_main_page_main_ts_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main-page/main/ts/index.ts */ "../../../src/components/main-page/main/ts/index.ts");
/* harmony import */ var _components_main_page_main_ts_index_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_main_page_main_ts_index_ts__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),

/***/ "../../../src/components/main-page/component-news/ts/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/yadamska/PROJECT/proj_ui/src/components/main-page/component-news/ts/index.ts ***!
  \*********************************************************************************************/
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
/*!*********************************************************************************************!*\
  !*** C:/Users/yadamska/PROJECT/proj_ui/src/components/main-page/component-news/ts/test1.ts ***!
  \*********************************************************************************************/
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
/*!***********************************************************************************!*\
  !*** C:/Users/yadamska/PROJECT/proj_ui/src/components/main-page/main/ts/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getCurrentSlide(id) {
    var currentSlider = document.getElementById("" + id + '-slider');
    console.log(currentSlider.querySelector('.active-dot').title - 1);
    return currentSlider.querySelector('.active-dot').title - 1;
}
function goToSlide(currentSlide, id, nextSlide) {
}
function clickPreviousSlide() {
    var previousArrows = document.querySelectorAll('.previous');
    for (var index = 0; index < previousArrows.length; index++) {
        previousArrows[index].addEventListener('click', function (event) {
            var target = event.target;
            var sliderId = target.closest('.slider').id.split('-')[0];
            var currentSlide = getCurrentSlide(sliderId);
        });
    }
}
clickPreviousSlide();


/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi C:/Users/yadamska/PROJECT/proj_ui/src/bundles-content/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yadamska\PROJECT\proj_ui\src\bundles-content\index.ts */"../../../src/bundles-content/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3lhZGFtc2thL1BST0pFQ1QvcHJval91aS9zcmMvYnVuZGxlcy1jb250ZW50L2luZGV4LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL3Rlc3QxLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4vdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE0RDtBQUNWOzs7Ozs7Ozs7Ozs7O0FDRGxEO0FBQUE7QUFBNEI7QUFDNUIsSUFBSSxHQUFHLEdBQVksU0FBUyxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsc0RBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSFI7QUFBQSxTQUFTLEtBQUs7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVjLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7OztBQ2lDckIsU0FBUyxlQUFlLENBQUMsRUFBVTtJQUMvQixJQUFNLGFBQWEsR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUcsRUFBSSxHQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsT0FBTyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDaEUsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLFlBQW9CLEVBQUUsRUFBVSxFQUFFLFNBQWlCO0FBVXRFLENBQUM7QUFHRCxTQUFTLGtCQUFrQjtJQUN2QixJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDeEQsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUs7WUFDbEQsSUFBTSxNQUFNLEdBQVEsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNqQyxJQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5ELENBQUMsQ0FBQztLQUNMO0FBQ0wsQ0FBQztBQTZCRCxrQkFBa0IsRUFBRSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuLi9jb21wb25lbnRzL21haW4tcGFnZS9jb21wb25lbnQtbmV3cy90cy9pbmRleC50cyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi90cy9pbmRleC50cyc7XHJcbiIsImltcG9ydCBncmVldCBmcm9tIFwiLi90ZXN0MVwiO1xyXG5sZXQgc3RyIDogc3RyaW5nID0gXCJJJ20gVFMhXCI7XHJcbmNvbnNvbGUubG9nKHN0cik7XHJcbmdyZWV0KCk7IiwiZnVuY3Rpb24gZ3JlZXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSGF2ZSBhIGdyZWF0IGRheSEhIScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncmVldDsiLCIvLyBmdW5jdGlvbiBoaWRlQWxsTmV3cygpIHtcclxuLy8gICAgIGxldCBuZXdzTGlzdCA6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNsaXN0LW5ld3M+YXJ0aWNsZScpO1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdzTGlzdC5sZW5ndGg7ICsraSkge1xyXG4vLyAgICAgICAgIG5ld3NMaXN0W2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gc2hvd05ld3MxKCkge1xyXG4vLyAgICAgaGlkZUFsbE5ld3MoKTtcclxuLy8gICAgIGxldCBuZXdzMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdzLTEnKTtcclxuLy8gICAgIG5ld3MxLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vXHJcbi8vIH1cclxuLy9cclxuLy8gZnVuY3Rpb24gc2hvd05ld3MyKCkge1xyXG4vLyAgICAgaGlkZUFsbE5ld3MoKTtcclxuLy8gICAgIGxldCBuZXdzMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdzLTInKTtcclxuLy8gICAgIG5ld3MyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbi8vXHJcbi8vIH1cclxuLy9cclxuLy9cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jaG9zZS0zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV3czMpO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNob3NlLTInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dOZXdzMik7XHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2hvc2UtMScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd05ld3MxKTtcclxuLy9cclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93IHByZXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dOZXdzMik7XHJcbi8vIChmdW5jdGlvbiAoKSB7XHJcblxyXG4vKmZ1bmN0aW9uIGluaXRDYXJvdXNlbERvdHMoKSB7XHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGNvbnN0IGNhcm91c2VsczphbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXInKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYXJvdXNlbHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSwgY2Fyb3VzZWxzW2luZGV4XS5pZCwgY3VycmVudFNsaWRlKTtcclxuICAgIH1cclxufSovXHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50U2xpZGUoaWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgY3VycmVudFNsaWRlcjogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCsnLXNsaWRlcicpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlci5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWRvdCcpLnRpdGxlIC0gMSk7XHJcbiAgICByZXR1cm4gY3VycmVudFNsaWRlci5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWRvdCcpLnRpdGxlIC0gMTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZTogbnVtYmVyLCBpZDogbnVtYmVyLCBuZXh0U2xpZGU6IG51bWJlcikge1xyXG4gICAgLy8gY29uc3QgY3VycmVudENhcm91c2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCk7XHJcbiAgICAvLyBjb25zdCBzbGlkZXM6IGFueSA9IGN1cnJlbnRDYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWl0ZW1zJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzbGlkZXMpO1xyXG4gICAgLy8gY29uc3QgbmF2RG90cyA9IGN1cnJlbnRDYXJvdXNlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbC1kb3QnKTtcclxuICAgIC8vIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dpbmcnKTtcclxuICAgIC8vIG5hdkRvdHNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZG90Jyk7XHJcbiAgICAvLyBjdXJyZW50U2xpZGUgPSAobmV4dFNsaWRlICsgc2xpZGVzLmxlbmd0aCkgJSBzbGlkZXMubGVuZ3RoO1xyXG4gICAgLy8gc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZCgnc2hvd2luZycpO1xyXG4gICAgLy8gbmF2RG90c1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1kb3QnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsaWNrUHJldmlvdXNTbGlkZSgpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzQXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpb3VzJyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJldmlvdXNBcnJvd3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgcHJldmlvdXNBcnJvd3NbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBzbGlkZXJJZDogbnVtYmVyID0gdGFyZ2V0LmNsb3Nlc3QoJy5zbGlkZXInKS5pZC5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBnZXRDdXJyZW50U2xpZGUoc2xpZGVySWQpO1xyXG4gICAgICAgICAgICAvLyBnb1RvU2xpZGUoY3VycmVudFNsaWRlLCBjYXJvdXNlbElkLCBjdXJyZW50U2xpZGUgLSAxKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjbGlja05leHRTbGlkZSgpIHtcclxuLy8gICAgIGNvbnN0IG5leHRBcnJvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhcnJvdy1uZXh0LWJ0bicpO1xyXG4vLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5leHRBcnJvd3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbi8vICAgICAgICAgbmV4dEFycm93c1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuLy8gICAgICAgICAgICAgY29uc3QgdGFyZ2V0OmFueSA9IGV2ZW50LnRhcmdldDtcclxuLy8gICAgICAgICAgICAgY29uc3QgY2Fyb3VzZWxJZCA9IHRhcmdldC5jbG9zZXN0KCdzbGlkZXInKS5pZDtcclxuLy8gICAgICAgICAgICAgY29uc3QgY3VycmVudFNsaWRlID0gZ2V0Q3VycmVudFNsaWRlKGNhcm91c2VsSWQpO1xyXG4vLyAgICAgICAgICAgICBnb1RvU2xpZGUoY3VycmVudFNsaWRlLCBjYXJvdXNlbElkLCBjdXJyZW50U2xpZGUgKyAxKTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBjbGlja0RvdCgpIHtcclxuLy8gICAgIGNvbnN0IGRvdHNBcnJheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RvdHMtd3JhcHBlcicpO1xyXG4vLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvdHNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuLy8gICAgICAgICBkb3RzQXJyYXlbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IHRhcmdldDphbnkgPSBldmVudC50YXJnZXQ7XHJcbi8vICAgICAgICAgICAgIGlmKHRhcmdldC50aXRsZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY2Fyb3VzZWxJZCA9IHRhcmdldC5jbG9zZXN0KCdzbGlkZXInKS5pZDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IGdldEN1cnJlbnRTbGlkZShjYXJvdXNlbElkKTtcclxuLy8gICAgICAgICAgICAgICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUsIGNhcm91c2VsSWQsIHRhcmdldC50aXRsZSAtIDEpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy9cclxuLy8gaW5pdENhcm91c2VsRG90cygpO1xyXG5jbGlja1ByZXZpb3VzU2xpZGUoKTtcclxuLy8gY2xpY2tOZXh0U2xpZGUoKTtcclxuLy8gY2xpY2tEb3QoKTtcclxuLy8gfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9