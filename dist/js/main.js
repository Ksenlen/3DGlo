/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('01 july 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n    const textCalcBlock = document.querySelectorAll('.calc-block input');\r\n    const formName = document.querySelectorAll('input[name=\"user_name\"]');\r\n    const formPhone = document.querySelectorAll('input[name=\"user_phone\"]');\r\n    const formEmail = document.querySelectorAll('input[name=\"user_email\"]');\r\n    const userMessage = document.querySelector('#form2-message');\r\n\r\n\r\n    const blur = (e) => {\r\n        e.target.value = e.target.value.replace(/^[\\s\\-]+/g, '');\r\n        e.target.value = e.target.value.replace(/[\\s\\-]+$/g, '');\r\n        e.target.value = e.target.value.replace(/\\s{2,}/g, ' ');\r\n        e.target.value = e.target.value.replace(/\\-{2,}/g, '-');\r\n        e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();\r\n    };\r\n    textCalcBlock.forEach(textBlock => {\r\n        textBlock.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/gi, '');\r\n        });\r\n\r\n    });\r\n\r\n\r\n    formName.forEach(formName => {\r\n        formName.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яА-Я\\-\\s]+/, '');\r\n        });\r\n        formName.addEventListener('blur', blur);\r\n    });\r\n\r\n    userMessage.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я\\-\\s]+/, '');\r\n    });\r\n    userMessage.addEventListener('blur', blur);\r\n\r\n    formEmail.forEach(email => {\r\n        email.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^\\w\\@\\-\\_\\.\\!\\~\\*\\']+/, '');\r\n        });\r\n        email.addEventListener('blur', blur);\r\n    });\r\n\r\n    formPhone.forEach(phone => {\r\n        phone.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-]+/, '');\r\n        });\r\n        phone.addEventListener('blur', blur);\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n\r\n    const menu = document.querySelector('menu');\r\n    const mainBlock = document.querySelector('main');\r\n\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n\r\n    document.addEventListener('click', (e) => {\r\n        console.log(e.target);\r\n        if (e.target.closest('.menu') ||\r\n            e.target.classList.contains(\"close-btn\")) {\r\n            e.preventDefault();\r\n            handleMenu();\r\n        } else if ((e.target.closest('menu') && e.target.closest('a[href*=\"#\"]'))) {\r\n            handleMenu();\r\n            e.preventDefault();\r\n            const blockId1 = e.target.closest('a[href*=\"#\"]').getAttribute('href');\r\n            document.querySelector(blockId1).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n\r\n        } else if (e.target.closest('a[href*=\"#\"]') && mainBlock.contains(e.target)) {\r\n            e.preventDefault();\r\n            const blockId = e.target.closest('a[href*=\"#\"]').getAttribute('href');\r\n            document.querySelector(blockId).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n\r\n        } else if (menu.classList.contains('active-menu')) {\r\n            menu.classList.remove('active-menu');\r\n        }\r\n    });\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const modalForm = modal.querySelector(\".popup-content\");\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n\r\n\r\n    let width = document.documentElement.clientWidth;\r\n\r\n    window.addEventListener(\"resize\", () => {\r\n        width = document.documentElement.clientWidth;\r\n    });\r\n\r\n    buttons.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            if (width >= 768) {\r\n                modalForm.style.opacity = 0;\r\n                modalForm.style.top = \"\";\r\n                modal.style.display = \"block\";\r\n                (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 800,\r\n                    timing(timeFraction) {\r\n                        return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        modalForm.style.top = 15 * progress + \"%\";\r\n                        modalForm.style.opacity = progress;\r\n                    }\r\n                });\r\n            } else {\r\n                modal.style.display = \"block\";\r\n            }\r\n        });\r\n    });\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            modal.style.display = 'none';\r\n        }\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector(\".portfolio-content\");\r\n    const slides = document.querySelectorAll(\".portfolio-item\");\r\n    const dotsBlock = document.querySelector(\".portfolio-dots\");\r\n    const timeInterval = 2000;\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    for (let i = 0; i <= slides.length - 1; i++) {\r\n        let dot = document.createElement(\"li\");\r\n        dot.className = \"dot\";\r\n        dotsBlock.append(dot);\r\n    }\r\n    const dots = document.querySelectorAll(\".dot\");\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    };\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    };\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        prevSlide(dots, currentSlide, \"dot-active\");\r\n        currentSlide++;\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        nextSlide(dots, currentSlide, \"dot-active\");\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener(\"click\", (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n            return;\r\n        }\r\n\r\n        prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n        if (e.target.matches(\"#arrow-right\")) {\r\n            currentSlide++;\r\n        } else if (e.target.matches(\"#arrow-left\")) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains(\"dot\")) {\r\n            dots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = index;\r\n                }\r\n            });\r\n        }\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0;\r\n        }\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        nextSlide(dots, currentSlide, \"dot-active\");\r\n    });\r\n\r\n    sliderBlock.addEventListener(\"mouseenter\", (e) => {\r\n        if (e.target.matches(\".portfolio-dots, .portfolio-btn\")) {\r\n            stopSlide();\r\n        }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener(\"mouseleave\", (e) => {\r\n        if (e.target.matches(\".portfolio-dots, .portfolio-btn\")) {\r\n            startSlide(timeInterval);\r\n        }\r\n    }, true);\r\n\r\n    startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n    const tabContent = document.querySelectorAll('.service-tab');\r\n\r\n    tabPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab')\r\n            tabs.forEach((tab, index) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabContent[index].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabContent[index].classList.add('d-none');\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet timeRemaining;\r\nlet getTime;\r\n\r\nconst timer = (deadline) => {\r\n\r\n    const timerHours = document.getElementById(\"timer-hours\");\r\n    const timerMinutes = document.getElementById(\"timer-minutes\");\r\n    const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        let hours = Math.floor((timeRemaining / 60 / 60));\r\n        if (hours >= 0 && hours < 10) {\r\n            hours = \"0\" + hours;\r\n        }\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        if (minutes >= 0 && minutes < 10) {\r\n            minutes = \"0\" + minutes;\r\n        }\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n        if (seconds >= 0 && seconds < 10) {\r\n            seconds = \"0\" + seconds;\r\n        }\r\n\r\n        return { timeRemaining, hours, minutes, seconds };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        getTime = getTimeRemaining();\r\n\r\n\r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;\r\n    };\r\n\r\n    updateClock();\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n        setInterval(updateClock, 1000);\r\n    } else if (getTime.timeRemaining <= 0) {\r\n\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;