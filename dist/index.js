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
/* harmony import */ var _components_main_page_list_news_ts_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main-page/list-news/ts/index.ts */ "../../../src/components/main-page/list-news/ts/index.ts");
/* harmony import */ var _components_main_page_list_news_ts_index_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_main_page_list_news_ts_index_ts__WEBPACK_IMPORTED_MODULE_1__);




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

/***/ "../../../src/components/main-page/list-news/ts/index.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/yadamska/PROJECT/proj_ui/src/components/main-page/list-news/ts/index.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getNumCurrentSlide(lengthSlidesList, activeDot) {
    return lengthSlidesList - activeDot;
}
function getNewCurrentSlide(showing, numCurrentSlide, lengthSlidesList, activeDot) {
    let nextSlide = 0;
    switch (showing) {
        case 'prev':
            nextSlide = numCurrentSlide + 1;
            break;
        case 'next':
            nextSlide = numCurrentSlide - 1;
            break;
        case 'dot':
            if (activeDot) {
                nextSlide = lengthSlidesList - activeDot;
            }
            break;
    }
    console.log((nextSlide + lengthSlidesList) % lengthSlidesList);
    return (nextSlide + lengthSlidesList) % lengthSlidesList;
}
function showNewCurrentSlide(currentSlide, slides, dots, lengthSlidesList) {
    slides[currentSlide].classList.add('show-slide');
    dots[lengthSlidesList - currentSlide - 1].classList.add('active');
}
function hideCurrentSlide(numCurrentSlide, slides, dots, activeDot) {
    slides[numCurrentSlide].classList.remove('show-slide');
    dots[activeDot - 1].classList.remove('active');
}
function getSlide(event, showing) {
    const slider = event.target.closest('.slider');
    const activeDot = slider.querySelector('.active');
    const slides = slider.querySelectorAll('.information');
    const dots = slider.querySelectorAll('.dot');
    let numCurrentSlide = getNumCurrentSlide(slides.length, +activeDot.title);
    hideCurrentSlide(numCurrentSlide, slides, dots, +activeDot.title);
    showNewCurrentSlide(getNewCurrentSlide(showing, numCurrentSlide, slides.length, event.target.title), slides, dots, slides.length);
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
/*!****************************************************************************!*\
  !*** multi C:/Users/yadamska/PROJECT/proj_ui/src/bundles-content/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yadamska\PROJECT\proj_ui\src\bundles-content\index.ts */"../../../src/bundles-content/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL3lhZGFtc2thL1BST0pFQ1QvcHJval91aS9zcmMvYnVuZGxlcy1jb250ZW50L2luZGV4LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL2luZGV4LnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL3Rlc3QxLnRzIiwid2VicGFjazovLy9DOi9Vc2Vycy95YWRhbXNrYS9QUk9KRUNUL3Byb2pfdWkvc3JjL2NvbXBvbmVudHMvbWFpbi1wYWdlL2xpc3QtbmV3cy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStE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QUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDdEQsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQztBQUVELGtCQUFrQixFQUFFLENBQUM7QUFDckIsY0FBYyxFQUFFLENBQUM7QUFDakIsUUFBUSxFQUFFLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4uL2NvbXBvbmVudHMvbWFpbi1wYWdlL2NvbXBvbmVudC1uZXdzL3RzL2luZGV4LnRzJztcclxuaW1wb3J0ICcuLi9jb21wb25lbnRzL21haW4tcGFnZS9saXN0LW5ld3MvdHMvaW5kZXgudHMnO1xyXG4iLCJpbXBvcnQgZ3JlZXQgZnJvbSBcIi4vdGVzdDFcIjtcclxubGV0IHN0ciA6IHN0cmluZyA9IFwiSSdtIFRTIVwiO1xyXG5jb25zb2xlLmxvZyhzdHIpO1xyXG5ncmVldCgpOyIsImZ1bmN0aW9uIGdyZWV0KCkge1xyXG4gICAgY29uc29sZS5sb2coJ0hhdmUgYSBncmVhdCBkYXkhISEnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ3JlZXQ7IiwiLy8gKGZ1bmN0aW9uICgpIHtcclxuZnVuY3Rpb24gZ2V0TnVtQ3VycmVudFNsaWRlKGxlbmd0aFNsaWRlc0xpc3Q6IG51bWJlciwgYWN0aXZlRG90OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGxlbmd0aFNsaWRlc0xpc3QtYWN0aXZlRG90O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXdDdXJyZW50U2xpZGUoc2hvd2luZzogc3RyaW5nLCBudW1DdXJyZW50U2xpZGU6IG51bWJlciwgbGVuZ3RoU2xpZGVzTGlzdDogbnVtYmVyLCBhY3RpdmVEb3Q6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgbmV4dFNsaWRlOiBudW1iZXIgPSAwO1xyXG4gICAgc3dpdGNoIChzaG93aW5nKSB7XHJcbiAgICAgICAgY2FzZSAncHJldic6XHJcbiAgICAgICAgICAgIG5leHRTbGlkZSA9IG51bUN1cnJlbnRTbGlkZSArIDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ25leHQnOlxyXG4gICAgICAgICAgICBuZXh0U2xpZGUgPSBudW1DdXJyZW50U2xpZGUgIC0gMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZG90JzpcclxuICAgICAgICAgICAgaWYoYWN0aXZlRG90KSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBsZW5ndGhTbGlkZXNMaXN0LWFjdGl2ZURvdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKChuZXh0U2xpZGUgKyBsZW5ndGhTbGlkZXNMaXN0KSAlIGxlbmd0aFNsaWRlc0xpc3QpO1xyXG4gICAgcmV0dXJuIChuZXh0U2xpZGUgKyBsZW5ndGhTbGlkZXNMaXN0KSAlIGxlbmd0aFNsaWRlc0xpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dOZXdDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlOiBudW1iZXIsIHNsaWRlczogTm9kZUxpc3RPZjxFbGVtZW50PiwgZG90czogTm9kZUxpc3RPZjxFbGVtZW50PiwgbGVuZ3RoU2xpZGVzTGlzdDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKCdzaG93LXNsaWRlJyk7XHJcbiAgICBkb3RzW2xlbmd0aFNsaWRlc0xpc3QgLSBjdXJyZW50U2xpZGUgLSAxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUN1cnJlbnRTbGlkZShudW1DdXJyZW50U2xpZGU6IG51bWJlciwgc2xpZGVzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+LCBkb3RzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+LCBhY3RpdmVEb3Q6IG51bWJlcik6IHZvaWQge1xyXG4gICAgc2xpZGVzW251bUN1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1zbGlkZScpO1xyXG4gICAgZG90c1thY3RpdmVEb3QgLSAxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2xpZGUoZXZlbnQ6IGFueSwgc2hvd2luZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBzbGlkZXI6IEhUTUxEaXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zbGlkZXInKTtcclxuICAgIGNvbnN0IGFjdGl2ZURvdDogSFRNTERpdkVsZW1lbnQgPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpO1xyXG4gICAgY29uc3Qgc2xpZGVzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+ID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvcm1hdGlvbicpO1xyXG4gICAgY29uc3QgZG90czogTm9kZUxpc3RPZjxFbGVtZW50PiA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZG90Jyk7XHJcbiAgICBsZXQgbnVtQ3VycmVudFNsaWRlOiBudW1iZXIgPSBnZXROdW1DdXJyZW50U2xpZGUoc2xpZGVzLmxlbmd0aCwgK2FjdGl2ZURvdC50aXRsZSk7XHJcbiAgICBoaWRlQ3VycmVudFNsaWRlKG51bUN1cnJlbnRTbGlkZSwgc2xpZGVzLCBkb3RzLCAgK2FjdGl2ZURvdC50aXRsZSk7XHJcbiAgICBzaG93TmV3Q3VycmVudFNsaWRlKGdldE5ld0N1cnJlbnRTbGlkZShzaG93aW5nLCBudW1DdXJyZW50U2xpZGUsIHNsaWRlcy5sZW5ndGgsIGV2ZW50LnRhcmdldC50aXRsZSksIHNsaWRlcywgZG90cywgc2xpZGVzLmxlbmd0aCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGlja1ByZXZpb3VzU2xpZGUoKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0Fycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmV2aW91cycpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHByZXZpb3VzQXJyb3dzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIHByZXZpb3VzQXJyb3dzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGdldFNsaWRlKGV2ZW50LCAncHJldicpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrTmV4dFNsaWRlKCkge1xyXG4gICAgY29uc3QgbmV4dEFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXh0Jyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbmV4dEFycm93cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBuZXh0QXJyb3dzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGdldFNsaWRlKGV2ZW50LCAnbmV4dCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWNrRG90KCkge1xyXG4gICAgY29uc3QgZG90c0FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdHMtd3JhcHBlcicpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvdHNBcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBkb3RzQXJyYXlbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZ2V0U2xpZGUoZXZlbnQsICdkb3QnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xpY2tQcmV2aW91c1NsaWRlKCk7XHJcbmNsaWNrTmV4dFNsaWRlKCk7XHJcbmNsaWNrRG90KCk7XHJcbi8vIH0oKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==