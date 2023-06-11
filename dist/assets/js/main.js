/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/blocks/banner.js":
/*!****************************************!*\
  !*** ./src/assets/js/blocks/banner.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_breakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/breakpoint */ "./src/assets/js/modules/breakpoint.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var banner = document.querySelector('.--block--banner.--boyic--custom--blocks');
  var clipmask = banner.querySelector('.--clip--mask');
  var bg_image_container = banner.querySelector('.background-image');
  var bg_image = bg_image_container.querySelector('img');
  var content_container = banner.querySelector('.content > .container');
  var device = (0,_modules_breakpoint__WEBPACK_IMPORTED_MODULE_0__.breakpoint)();
  var resize_banner = function resize_banner() {
    addEventListener('resize', function () {
      console.log('resize triggered');
      device = (0,_modules_breakpoint__WEBPACK_IMPORTED_MODULE_0__.breakpoint)();
      if (bg_image_container.dataset.backgroundMobile != '') {
        if (device == 'mobile' || device == 'tablet') {
          bg_image_container.style.backgroundImage = "url(".concat(bg_image_container.dataset.backgroundMobile, ")");
          bg_image_container.style.height = content_container.offsetHeight + 120 + 'px';
          console.log(content_container.offsetHeight);
        } else {
          bg_image_container.style.backgroundImage = "";
          bg_image_container.style.height = '100%';
        }
      }
    });
  };
  resize_banner();
  if (bg_image_container.dataset.backgroundMobile != '') {
    if (device == 'mobile' || device == 'tablet') {
      bg_image_container.style.backgroundImage = "url(".concat(bg_image_container.dataset.backgroundMobile, ")");
      bg_image_container.style.height = content_container.offsetHeight + 120 + 'px';
      console.log(content_container.offsetHeight);
    } else {
      bg_image_container.style.backgroundImage = "";
    }
  }
  //@TODO: Please refactor - clipping mask effect
  if (clipmask) clipmask.style.setProperty('--swapping--mask--background', "url(".concat(clipmask.dataset.clipMaskBackground, ")"));
});

/***/ }),

/***/ "./src/assets/js/modules/breakpoint.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/breakpoint.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   breakpoint: () => (/* binding */ breakpoint)
/* harmony export */ });
var breakpoint = function breakpoint() {
  return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '');
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/banner */ "./src/assets/js/blocks/banner.js");

(0,_blocks_banner__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQztBQUVwQ3pCLDBEQUFNLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVuYW1lLW1lLy4vc3JjL2Fzc2V0cy9qcy9ibG9ja3MvYmFubmVyLmpzIiwid2VicGFjazovL3JlbmFtZS1tZS8uL3NyYy9hc3NldHMvanMvbW9kdWxlcy9icmVha3BvaW50LmpzIiwid2VicGFjazovL3JlbmFtZS1tZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZW5hbWUtbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlbmFtZS1tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlbmFtZS1tZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlbmFtZS1tZS8uL3NyYy9hc3NldHMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBicmVha3BvaW50IH0gZnJvbSBcIi4uL21vZHVsZXMvYnJlYWtwb2ludFwiXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1ibG9jay0tYmFubmVyLi0tYm95aWMtLWN1c3RvbS0tYmxvY2tzJylcbiAgICBjb25zdCBjbGlwbWFzayA9IGJhbm5lci5xdWVyeVNlbGVjdG9yKCcuLS1jbGlwLS1tYXNrJylcbiAgICBjb25zdCBiZ19pbWFnZV9jb250YWluZXIgPSBiYW5uZXIucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtaW1hZ2UnKVxuICAgIGNvbnN0IGJnX2ltYWdlID0gYmdfaW1hZ2VfY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG4gICAgY29uc3QgY29udGVudF9jb250YWluZXIgPSBiYW5uZXIucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgPiAuY29udGFpbmVyJylcbiAgICBsZXQgZGV2aWNlID0gYnJlYWtwb2ludCgpXG4gICAgY29uc3QgcmVzaXplX2Jhbm5lciA9ICgpID0+IHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc2l6ZSB0cmlnZ2VyZWQnKVxuICAgICAgICAgICAgZGV2aWNlID0gYnJlYWtwb2ludCgpXG4gICAgICAgICAgICBpZihiZ19pbWFnZV9jb250YWluZXIuZGF0YXNldC5iYWNrZ3JvdW5kTW9iaWxlICE9ICcnKSB7XG4gICAgICAgICAgICAgIGlmICggZGV2aWNlID09ICdtb2JpbGUnIHx8IGRldmljZSA9PSAndGFibGV0JyApIHtcbiAgICAgICAgICAgICAgICAgIGJnX2ltYWdlX2NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmdfaW1hZ2VfY29udGFpbmVyLmRhdGFzZXQuYmFja2dyb3VuZE1vYmlsZX0pYFxuICAgICAgICAgICAgICAgICAgYmdfaW1hZ2VfY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRfY29udGFpbmVyLm9mZnNldEhlaWdodCArIDEyMCArJ3B4J1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudF9jb250YWluZXIub2Zmc2V0SGVpZ2h0KVxuICAgICAgICAgIFxuICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBiZ19pbWFnZV9jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICBiZ19pbWFnZV9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXNpemVfYmFubmVyKClcbiAgICBpZihiZ19pbWFnZV9jb250YWluZXIuZGF0YXNldC5iYWNrZ3JvdW5kTW9iaWxlICE9ICcnKSB7XG4gICAgICBpZiAoIGRldmljZSA9PSAnbW9iaWxlJyB8fCBkZXZpY2UgPT0gJ3RhYmxldCcgKSB7XG4gICAgICAgIGJnX2ltYWdlX2NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmdfaW1hZ2VfY29udGFpbmVyLmRhdGFzZXQuYmFja2dyb3VuZE1vYmlsZX0pYFxuICAgICAgICBiZ19pbWFnZV9jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gY29udGVudF9jb250YWluZXIub2Zmc2V0SGVpZ2h0ICsgMTIwICsncHgnXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnRfY29udGFpbmVyLm9mZnNldEhlaWdodClcblxuICAgIH0gICBcbiAgICBlbHNlIHtcbiAgICAgICAgICBiZ19pbWFnZV9jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIlxuICAgICAgfVxuICAgIH1cbiAgICAvL0BUT0RPOiBQbGVhc2UgcmVmYWN0b3IgLSBjbGlwcGluZyBtYXNrIGVmZmVjdFxuICAgIGlmKGNsaXBtYXNrKSBjbGlwbWFzay5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zd2FwcGluZy0tbWFzay0tYmFja2dyb3VuZCcsIGB1cmwoJHtjbGlwbWFzay5kYXRhc2V0LmNsaXBNYXNrQmFja2dyb3VuZH0pYClcblxuICAgXG59IiwiZXhwb3J0IGNvbnN0IGJyZWFrcG9pbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHksICc6YmVmb3JlJykuY29udGVudC5yZXBsYWNlKC9cXFwiL2csICcnKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJhbm5lciBmcm9tICcuL2Jsb2Nrcy9iYW5uZXInXG5cbmJhbm5lcigpOyJdLCJuYW1lcyI6WyJicmVha3BvaW50IiwiYmFubmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xpcG1hc2siLCJiZ19pbWFnZV9jb250YWluZXIiLCJiZ19pbWFnZSIsImNvbnRlbnRfY29udGFpbmVyIiwiZGV2aWNlIiwicmVzaXplX2Jhbm5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiZGF0YXNldCIsImJhY2tncm91bmRNb2JpbGUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImNvbmNhdCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInNldFByb3BlcnR5IiwiY2xpcE1hc2tCYWNrZ3JvdW5kIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvZHkiLCJjb250ZW50IiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=