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
/* harmony import */ var _components_main_page_list_news_ts_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main-page/list-news/ts/index.ts */ "../../../src/components/main-page/list-news/ts/index.ts");
/* harmony import */ var _components_main_page_list_news_ts_index_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_main_page_list_news_ts_index_ts__WEBPACK_IMPORTED_MODULE_1__);




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

let str = "I'm TS!";
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

/***/ "../../../src/components/main-page/list-news/ts/index.ts":
/*!***********************************************************************************!*\
  !*** E:/AEM/frontend-gulp-webpack/src/components/main-page/list-news/ts/index.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getNumCurrentSlide(slider) {
    const activeDot = slider.querySelector('.active');
    return +activeDot.title - 1;
}
function getNewCurrentSlide(showing, numCurrentSlide, lengthSlidesList, nextDot) {
    let nextSlide = 0;
    switch (showing) {
        case 'prev':
            nextSlide = numCurrentSlide - 1;
            break;
        case 'next':
            nextSlide = numCurrentSlide + 1;
            break;
        case 'dot':
            if (nextDot) {
                nextSlide = +nextDot - 1;
            }
            break;
    }
    return (nextSlide + lengthSlidesList) % lengthSlidesList;
}
function showNewCurrentSlide(currentSlide, slides, dots) {
    slides[currentSlide].classList.add('show-slide');
    dots[currentSlide].classList.add('active');
}
function hideCurrentSlide(numCurrentSlide, slides, dots) {
    slides[numCurrentSlide].classList.remove('show-slide');
    dots[numCurrentSlide].classList.remove('active');
}
function getSlide(event, showing) {
    const slider = event.target.closest('.slider');
    let numCurrentSlide = getNumCurrentSlide(slider);
    const slides = slider.querySelectorAll('.information');
    const dots = slider.querySelectorAll('.dot');
    hideCurrentSlide(numCurrentSlide, slides, dots);
    showNewCurrentSlide(getNewCurrentSlide(showing, numCurrentSlide, slides.length, event.target.title), slides, dots);
}
function clickPreviousSlide() {
    const previousArrows = document.querySelectorAll('.previous');
    for (let index = 0; index < previousArrows.length; index++) {
        previousArrows[index].addEventListener('click', (event) => {
            getSlide(event, 'prev');
        });
    }
}
function clickNextSlide() {
    const nextArrows = document.querySelectorAll('.next');
    for (let index = 0; index < nextArrows.length; index++) {
        nextArrows[index].addEventListener('click', (event) => {
            getSlide(event, 'next');
        });
    }
}
function clickDot() {
    const dotsArray = document.querySelectorAll('.dots-wrapper');
    for (let index = 0; index < dotsArray.length; index++) {
        dotsArray[index].addEventListener('click', (event) => {
            getSlide(event, 'dot');
        });
    }
}
clickPreviousSlide();
clickNextSlide();
clickDot();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0U6L0FFTS9mcm9udGVuZC1ndWxwLXdlYnBhY2svc3JjL2J1bmRsZXMtY29udGVudC9pbmRleC50cyIsIndlYnBhY2s6Ly8vRTovQUVNL2Zyb250ZW5kLWd1bHAtd2VicGFjay9zcmMvY29tcG9uZW50cy9tYWluLXBhZ2UvY29tcG9uZW50LW5ld3MvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL0U6L0FFTS9mcm9udGVuZC1ndWxwLXdlYnBhY2svc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL3Rlc3QxLnRzIiwid2VicGFjazovLy9FOi9BRU0vZnJvbnRlbmQtZ3VscC13ZWJwYWNrL3NyYy9jb21wb25lbnRzL21haW4tcGFnZS9saXN0LW5ld3MvdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7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IFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuLi9jb21wb25lbnRzL21haW4tcGFnZS9jb21wb25lbnQtbmV3cy90cy9pbmRleC50cyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9tYWluLXBhZ2UvbGlzdC1uZXdzL3RzL2luZGV4LnRzJztcclxuIiwiaW1wb3J0IGdyZWV0IGZyb20gXCIuL3Rlc3QxXCI7XHJcbmxldCBzdHIgOiBzdHJpbmcgPSBcIkknbSBUUyFcIjtcclxuY29uc29sZS5sb2coc3RyKTtcclxuZ3JlZXQoKTsiLCJmdW5jdGlvbiBncmVldCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIYXZlIGEgZ3JlYXQgZGF5ISEhJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyZWV0OyIsIi8vIChmdW5jdGlvbiAoKSB7XHJcbmZ1bmN0aW9uIGdldE51bUN1cnJlbnRTbGlkZShzbGlkZXI6IEhUTUxEaXZFbGVtZW50KTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGFjdGl2ZURvdDogSFRNTERpdkVsZW1lbnQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgcmV0dXJuICthY3RpdmVEb3QudGl0bGUgLSAxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXdDdXJyZW50U2xpZGUoc2hvd2luZzogc3RyaW5nLCBudW1DdXJyZW50U2xpZGU6IG51bWJlciwgbGVuZ3RoU2xpZGVzTGlzdDogbnVtYmVyLCBuZXh0RG90OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IG5leHRTbGlkZTogbnVtYmVyID0gMDtcclxuICAgIHN3aXRjaCAoc2hvd2luZykge1xyXG4gICAgICAgIGNhc2UgJ3ByZXYnOlxyXG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBudW1DdXJyZW50U2xpZGUgLSAxO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICduZXh0JzpcclxuICAgICAgICAgICAgbmV4dFNsaWRlID0gbnVtQ3VycmVudFNsaWRlICsgMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZG90JzpcclxuICAgICAgICAgICAgaWYobmV4dERvdCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gK25leHREb3QgLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChuZXh0U2xpZGUgKyBsZW5ndGhTbGlkZXNMaXN0KSAlIGxlbmd0aFNsaWRlc0xpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dOZXdDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlOiBudW1iZXIsIHNsaWRlczogTm9kZUxpc3RPZjxFbGVtZW50PiwgZG90czogTm9kZUxpc3RPZjxFbGVtZW50Pik6IHZvaWQge1xyXG4gICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZCgnc2hvdy1zbGlkZScpO1xyXG4gICAgZG90c1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlQ3VycmVudFNsaWRlKG51bUN1cnJlbnRTbGlkZTogbnVtYmVyLCBzbGlkZXM6IE5vZGVMaXN0T2Y8RWxlbWVudD4sIGRvdHM6IE5vZGVMaXN0T2Y8RWxlbWVudD4pOiB2b2lkIHtcclxuICAgIHNsaWRlc1tudW1DdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctc2xpZGUnKTtcclxuICAgIGRvdHNbbnVtQ3VycmVudFNsaWRlXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2xpZGUoZXZlbnQ6IGFueSwgc2hvd2luZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBzbGlkZXI6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zbGlkZXInKTtcclxuICAgIGxldCBudW1DdXJyZW50U2xpZGU6IG51bWJlciA9IGdldE51bUN1cnJlbnRTbGlkZShzbGlkZXIpO1xyXG4gICAgY29uc3Qgc2xpZGVzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvcm1hdGlvbicpO1xyXG4gICAgY29uc3QgZG90czogTm9kZUxpc3RPZjxFbGVtZW50PiA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XHJcbiAgICBoaWRlQ3VycmVudFNsaWRlKG51bUN1cnJlbnRTbGlkZSwgc2xpZGVzLCBkb3RzKTtcclxuICAgIHNob3dOZXdDdXJyZW50U2xpZGUoZ2V0TmV3Q3VycmVudFNsaWRlKHNob3dpbmcsIG51bUN1cnJlbnRTbGlkZSwgc2xpZGVzLmxlbmd0aCwgZXZlbnQudGFyZ2V0LnRpdGxlKSwgc2xpZGVzLCBkb3RzKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsaWNrUHJldmlvdXNTbGlkZSgpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzQXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByZXZpb3VzJyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJldmlvdXNBcnJvd3MubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgcHJldmlvdXNBcnJvd3NbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZ2V0U2xpZGUoZXZlbnQsICdwcmV2Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xpY2tOZXh0U2xpZGUoKSB7XHJcbiAgICBjb25zdCBuZXh0QXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5leHQnKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuZXh0QXJyb3dzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIG5leHRBcnJvd3NbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZ2V0U2xpZGUoZXZlbnQsICduZXh0Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xpY2tEb3QoKSB7XHJcbiAgICBjb25zdCBkb3RzQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG90cy13cmFwcGVyJyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG90c0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGRvdHNBcnJheVtpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBnZXRTbGlkZShldmVudCwgJ2RvdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGlja1ByZXZpb3VzU2xpZGUoKTtcclxuY2xpY2tOZXh0U2xpZGUoKTtcclxuY2xpY2tEb3QoKTtcclxuLy8gfSgpKTsiXSwic291cmNlUm9vdCI6IiJ9