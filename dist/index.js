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
/*!****************************************************************************!*\
  !*** multi C:/Users/yadamska/PROJECT/proj_ui/src/bundles-content/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yadamska\PROJECT\proj_ui\src\bundles-content\index.ts */"../../../src/bundles-content/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3lhZGFtc2thL1BST0pFQ1QvcHJval91aS9zcmMvYnVuZGxlcy1jb250ZW50L2luZGV4LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL3Rlc3QxLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4vdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE0RDtBQUNWOzs7Ozs7Ozs7Ozs7O0FDRGxEO0FBQUE7QUFBNEI7QUFDNUIsSUFBSSxHQUFHLEdBQVksU0FBUyxDQUFDO0FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsc0RBQUssRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSFI7QUFBQSxTQUFTLEtBQUs7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVjLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7OztBQzZCckIsQ0FBQztJQUNHLElBQU0sSUFBSSxHQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVyQixJQUFJLENBQUMsT0FBTyxHQUFHO1FBQ1gsU0FBUyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixJQUFJLE1BQU0sR0FBTyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUU3RSxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDckIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWIsU0FBUyxTQUFTLENBQUMsQ0FBUTtRQUN2QixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNqRCxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbkQsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBTSxRQUFRLEdBQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBRXJFLFFBQVEsQ0FBQyxPQUFPLEdBQUc7UUFDZixTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztBQUNOLENBQUMsRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4uL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL2luZGV4LnRzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL21haW4tcGFnZS9tYWluL3RzL2luZGV4LnRzJztcclxuIiwiaW1wb3J0IGdyZWV0IGZyb20gXCIuL3Rlc3QxXCI7XHJcbmxldCBzdHIgOiBzdHJpbmcgPSBcIkknbSBUUyFcIjtcclxuY29uc29sZS5sb2coc3RyKTtcclxuZ3JlZXQoKTsiLCJmdW5jdGlvbiBncmVldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIYXZlIGEgZ3JlYXQgZGF5ISEhJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyZWV0OyIsIi8vIGZ1bmN0aW9uIGhpZGVBbGxOZXdzKCkge1xyXG4vLyAgICAgbGV0IG5ld3NMaXN0IDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpc3QtbmV3cz5hcnRpY2xlJyk7XHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld3NMaXN0Lmxlbmd0aDsgKytpKSB7XHJcbi8vICAgICAgICAgbmV3c0xpc3RbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBzaG93TmV3czEoKSB7XHJcbi8vICAgICBoaWRlQWxsTmV3cygpO1xyXG4vLyAgICAgbGV0IG5ld3MxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3MtMScpO1xyXG4vLyAgICAgbmV3czEuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy9cclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBzaG93TmV3czIoKSB7XHJcbi8vICAgICBoaWRlQWxsTmV3cygpO1xyXG4vLyAgICAgbGV0IG5ld3MyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3MtMicpO1xyXG4vLyAgICAgbmV3czIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy9cclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBzaG93TmV3czMoKSB7XHJcbi8vICAgICBoaWRlQWxsTmV3cygpO1xyXG4vLyAgICAgbGV0IG5ld3MzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3MtMycpO1xyXG4vLyAgICAgbmV3czMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuLy9cclxuLy8gfVxyXG4vL1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNob3NlLTMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dOZXdzMyk7XHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2hvc2UtMicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd05ld3MyKTtcclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jaG9zZS0xJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV3czEpO1xyXG4vL1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cgcHJldicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd05ld3MyKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5leHQ6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LW5leHQtc2xpZGUnKTtcclxuICAgIGNvbnNvbGUubG9nKG5leHQsIDMpO1xyXG5cclxuICAgIG5leHQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBnb1RvU2xpZGUoY3VycmVudFNsaWRlICsgMSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzbGlkZXM6YW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWl0ZW1zIC5jYXJvdXNlbC1pdGVtJyk7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICBnb1RvU2xpZGUoMSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ29Ub1NsaWRlKG46bnVtYmVyKSB7XHJcbiAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NOYW1lID0gJ2Nhcm91c2VsLWl0ZW0nO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IChuICsgc2xpZGVzLmxlbmd0aCkgJSBzbGlkZXMubGVuZ3RoO1xyXG4gICAgICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTmFtZSA9ICdjYXJvdXNlbC1pdGVtIHNob3dpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1wcmV2aW91cy1zbGlkZScpO1xyXG5cclxuICAgIHByZXZpb3VzLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSAtIDEpO1xyXG4gICAgfTtcclxufSgpKTsiXSwic291cmNlUm9vdCI6IiJ9