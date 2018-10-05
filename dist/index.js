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

let str = "I'm TS!";
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

function initChoosing() {
    let numCurrentSlide = 0;
    const sliders = document.getElementsByClassName('slider');
    for (let index = 0; index < sliders.length; index++) {
        goToSlide(numCurrentSlide, index + 1, '');
    }
}
function getCurrentSlide(id) {
    const currentSlider = document.getElementById(`${id}` + '-slider');
    return currentSlider.querySelector('.active-dot').title - 1;
}
function goToSlide(numCurrentSlide, id, show) {
    const currentSlider = document.getElementById(`${id}` + '-slider');
    const slides = currentSlider.querySelectorAll('.information');
    const dots = currentSlider.querySelectorAll('.dot');
    console.log(numCurrentSlide);
    console.log(show.className);
    switch (show.className) {
        case 'choose previous': {
            dots[numCurrentSlide].classList.remove('active-dot');
            slides[numCurrentSlide].classList.remove('show-elem');
            dots[numCurrentSlide - 1].classList.add('active-dot');
            slides[numCurrentSlide - 1].classList.add('show-elem');
        }
        case 'choose next': {
            dots[numCurrentSlide].classList.remove('active-dot');
            slides[numCurrentSlide].classList.remove('show-elem');
            dots[numCurrentSlide + 1].classList.add('active-dot');
            slides[numCurrentSlide + 1].classList.add('show-elem');
        }
        default:
            dots[numCurrentSlide].classList.add('active-dot');
            slides[numCurrentSlide].classList.add('show-elem');
    }
}
function clickPreviousSlide() {
    const previousArrows = document.querySelectorAll('.previous');
    for (let index = 0; index < previousArrows.length; index++) {
        previousArrows[index].addEventListener('click', (event) => {
            const target = event.target;
            const sliderId = target.closest('.slider').id.split('-')[0];
            const numCurrentSlide = getCurrentSlide(sliderId);
            goToSlide(numCurrentSlide, sliderId, previousArrows[index]);
        });
    }
}
function clickNextSlide() {
    const previousArrows = document.querySelectorAll('.next');
    for (let index = 0; index < previousArrows.length; index++) {
        previousArrows[index].addEventListener('click', (event) => {
            const target = event.target;
            const sliderId = target.closest('.slider').id.split('-')[0];
            const numCurrentSlide = getCurrentSlide(sliderId);
            goToSlide(numCurrentSlide, sliderId, previousArrows[index]);
        });
    }
}
initChoosing();
clickPreviousSlide();
clickNextSlide();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3lhZGFtc2thL1BST0pFQ1QvcHJval91aS9zcmMvYnVuZGxlcy1jb250ZW50L2luZGV4LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL3Rlc3QxLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4vdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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Q0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLGVBQWUsR0FBVyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUQsU0FBUyxDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDO0tBQ0w7QUFDTCxDQUFDO0FBZ0JELFlBQVksRUFBRSxDQUFDO0FBQ2Ysa0JBQWtCLEVBQUUsQ0FBQztBQUNyQixjQUFjLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UvY29tcG9uZW50LW5ld3MvdHMvaW5kZXgudHMnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4vdHMvaW5kZXgudHMnO1xyXG4iLCJpbXBvcnQgZ3JlZXQgZnJvbSBcIi4vdGVzdDFcIjtcclxubGV0IHN0ciA6IHN0cmluZyA9IFwiSSdtIFRTIVwiO1xyXG5jb25zb2xlLmxvZyhzdHIpO1xyXG5ncmVldCgpOyIsImZ1bmN0aW9uIGdyZWV0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ0hhdmUgYSBncmVhdCBkYXkhISEnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ3JlZXQ7IiwiLy8gZnVuY3Rpb24gaGlkZUFsbE5ld3MoKSB7XHJcbi8vICAgICBsZXQgbmV3c0xpc3QgOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbGlzdC1uZXdzPmFydGljbGUnKTtcclxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3c0xpc3QubGVuZ3RoOyArK2kpIHtcclxuLy8gICAgICAgICBuZXdzTGlzdFtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHNob3dOZXdzMSgpIHtcclxuLy8gICAgIGhpZGVBbGxOZXdzKCk7XHJcbi8vICAgICBsZXQgbmV3czEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3cy0xJyk7XHJcbi8vICAgICBuZXdzMS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vL1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHNob3dOZXdzMigpIHtcclxuLy8gICAgIGhpZGVBbGxOZXdzKCk7XHJcbi8vICAgICBsZXQgbmV3czIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3cy0yJyk7XHJcbi8vICAgICBuZXdzMi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4vL1xyXG4vLyB9XHJcbi8vXHJcbi8vXHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2hvc2UtMycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd05ld3MzKTtcclxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jaG9zZS0yJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV3czIpO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNob3NlLTEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dOZXdzMSk7XHJcbi8vXHJcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdyBwcmV2JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV3czIpO1xyXG4vLyAoZnVuY3Rpb24gKCkge1xyXG5cclxuZnVuY3Rpb24gaW5pdENob29zaW5nKCkge1xyXG4gICAgbGV0IG51bUN1cnJlbnRTbGlkZTogbnVtYmVyID0gMDtcclxuICAgIGNvbnN0IHNsaWRlcnM6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlcicpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNsaWRlcnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgZ29Ub1NsaWRlKG51bUN1cnJlbnRTbGlkZSwgaW5kZXggKyAxLCAnJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnRTbGlkZShpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U2xpZGVyOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gICsgJy1zbGlkZXInKTtcclxuICAgIHJldHVybiBjdXJyZW50U2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtZG90JykudGl0bGUgLSAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb1RvU2xpZGUobnVtQ3VycmVudFNsaWRlOiBudW1iZXIsIGlkOiBudW1iZXIsIHNob3c6IGFueSkge1xyXG4gICAgY29uc3QgY3VycmVudFNsaWRlcjogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9YCArICctc2xpZGVyJyk7XHJcbiAgICBjb25zdCBzbGlkZXM6IGFueSA9IGN1cnJlbnRTbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLmluZm9ybWF0aW9uJyk7XHJcbiAgICBjb25zdCBkb3RzID0gY3VycmVudFNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XHJcbiAgICAvL2NvbnN0IHByZXZpb3VzQXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpb3VzJyk7XHJcbiAgICBjb25zb2xlLmxvZyhudW1DdXJyZW50U2xpZGUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNob3cuY2xhc3NOYW1lKTtcclxuICAgIHN3aXRjaCAoc2hvdy5jbGFzc05hbWUpIHtcclxuICAgICAgICBjYXNlICdjaG9vc2UgcHJldmlvdXMnOiB7XHJcbiAgICAgICAgICAgIGRvdHNbbnVtQ3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZG90Jyk7XHJcbiAgICAgICAgICAgIHNsaWRlc1tudW1DdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctZWxlbScpO1xyXG4gICAgICAgICAgICBkb3RzW251bUN1cnJlbnRTbGlkZSAtIDFdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1kb3QnKTtcclxuICAgICAgICAgICAgc2xpZGVzW251bUN1cnJlbnRTbGlkZSAtIDFdLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZWxlbScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdjaG9vc2UgbmV4dCc6IHtcclxuICAgICAgICAgICAgZG90c1tudW1DdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1kb3QnKTtcclxuICAgICAgICAgICAgc2xpZGVzW251bUN1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1lbGVtJyk7XHJcbiAgICAgICAgICAgIGRvdHNbbnVtQ3VycmVudFNsaWRlICsgMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWRvdCcpO1xyXG4gICAgICAgICAgICBzbGlkZXNbbnVtQ3VycmVudFNsaWRlICsgMV0uY2xhc3NMaXN0LmFkZCgnc2hvdy1lbGVtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGRvdHNbbnVtQ3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtZG90Jyk7XHJcbiAgICAgICAgICAgIHNsaWRlc1tudW1DdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZWxlbScpO1xyXG4gICAgICAgIC8vcHJldmlvdXNBcnJvd3NbaWRdLmNsYXNzTGlzdC5hZGQoJ25vdC1jaG9vc2UnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsaWNrUHJldmlvdXNTbGlkZSgpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzQXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpb3VzJyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJldmlvdXNBcnJvd3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgcHJldmlvdXNBcnJvd3NbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBjb25zdCBzbGlkZXJJZDogbnVtYmVyID0gdGFyZ2V0LmNsb3Nlc3QoJy5zbGlkZXInKS5pZC5zcGxpdCgnLScpWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBudW1DdXJyZW50U2xpZGU6IG51bWJlciA9IGdldEN1cnJlbnRTbGlkZShzbGlkZXJJZCk7Ly/QvdC+0LzQtdGAINGB0LvQsNC50LTQsFxyXG4gICAgICAgICAgICBnb1RvU2xpZGUobnVtQ3VycmVudFNsaWRlLCBzbGlkZXJJZCwgcHJldmlvdXNBcnJvd3NbaW5kZXhdKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGlja05leHRTbGlkZSgpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzQXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5leHQnKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcmV2aW91c0Fycm93cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBwcmV2aW91c0Fycm93c1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0OiBhbnkgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlcklkOiBudW1iZXIgPSB0YXJnZXQuY2xvc2VzdCgnLnNsaWRlcicpLmlkLnNwbGl0KCctJylbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IG51bUN1cnJlbnRTbGlkZTogbnVtYmVyID0gZ2V0Q3VycmVudFNsaWRlKHNsaWRlcklkKTsvL9C90L7QvNC10YAg0YHQu9Cw0LnQtNCwXHJcbiAgICAgICAgICAgIGdvVG9TbGlkZShudW1DdXJyZW50U2xpZGUsIHNsaWRlcklkLCBwcmV2aW91c0Fycm93c1tpbmRleF0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuLy9cclxuLy8gZnVuY3Rpb24gY2xpY2tEb3QoKSB7XHJcbi8vICAgICBjb25zdCBkb3RzQXJyYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkb3RzLXdyYXBwZXInKTtcclxuLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb3RzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbi8vICAgICAgICAgZG90c0FycmF5W2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zdCB0YXJnZXQ6YW55ID0gZXZlbnQudGFyZ2V0O1xyXG4vLyAgICAgICAgICAgICBpZih0YXJnZXQudGl0bGUpIHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNhcm91c2VsSWQgPSB0YXJnZXQuY2xvc2VzdCgnc2xpZGVyJykuaWQ7XHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBnZXRDdXJyZW50U2xpZGUoY2Fyb3VzZWxJZCk7XHJcbi8vICAgICAgICAgICAgICAgICBnb1RvU2xpZGUoY3VycmVudFNsaWRlLCBjYXJvdXNlbElkLCB0YXJnZXQudGl0bGUgLSAxKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vXHJcbmluaXRDaG9vc2luZygpO1xyXG5jbGlja1ByZXZpb3VzU2xpZGUoKTtcclxuY2xpY2tOZXh0U2xpZGUoKTtcclxuLy8gY2xpY2tEb3QoKTtcclxuLy8gfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9