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

                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('26 june 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

                /***/
}),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n    const anchors = menu.querySelectorAll('ul>li>a[href*=\"#\"]');\r\n    const scrollBtn = document.querySelector('main>a[href*=\"#\"]');\r\n\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n\r\n    scrollBtn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        const blockID = scrollBtn.getAttribute('href').substr(1);\r\n\r\n        document.getElementById(blockID).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n\r\n\r\n    anchors.forEach(anchor => {\r\n        anchor.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            const blockID = anchor.getAttribute('href').substr(1);\r\n\r\n            document.getElementById(blockID).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        });\r\n    });\r\n\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n\r\n    closeBtn.addEventListener('click', handleMenu);\r\n\r\n    menuItems.forEach(menuItem => {\r\n        menuItem.addEventListener('click', handleMenu);\r\n    });\r\n};\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

                /***/
}),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.popup');\r\n    const modalForm = modal.querySelector(\".popup-content\");\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n\r\n    let width = document.documentElement.clientWidth;\r\n\r\n    window.addEventListener(\"resize\", () => {\r\n        width = document.documentElement.clientWidth;\r\n    });\r\n\r\n    buttons.forEach((btn) => {\r\n        btn.addEventListener(\"click\", () => {\r\n            if (width >= 768) {\r\n                modalForm.style.opacity = 0;\r\n                modalForm.style.top = \"\";\r\n                modal.style.display = \"block\";\r\n                animationModal(true);\r\n            } else {\r\n                modal.style.display = \"block\";\r\n            }\r\n        });\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none';\r\n    });\r\n\r\n    let animationModal = (showType) => {\r\n        let start = Date.now();\r\n        let timer = setInterval(function () {\r\n            let timePassed = Date.now() - start;\r\n\r\n            if (timePassed >= 500) {\r\n                clearInterval(timer);\r\n                return;\r\n            }\r\n            if (showType) {\r\n                showAnimation(timePassed);\r\n                showModal(timePassed);\r\n            } else {\r\n                hideModal(timePassed);\r\n            }\r\n        }, 20);\r\n\r\n        function showAnimation(timePassed) {\r\n            modalForm.style.top = timePassed / 50 + \"%\";\r\n        }\r\n        function showModal(timePassed) {\r\n            modalForm.style.opacity = timePassed / 500;\r\n        }\r\n        function hideModal(timePassed) {\r\n            modalForm.style.opacity = 1 - timePassed / 500;\r\n            if (modalForm.style.opacity < 0.1) {\r\n                modal.style.display = \"none\";\r\n            }\r\n        }\r\n    };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

                /***/
}),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet timeRemaining;\r\nlet getTime;\r\n\r\nconst timer = (deadline) => {\r\n\r\n    const timerHours = document.getElementById(\"timer-hours\");\r\n    const timerMinutes = document.getElementById(\"timer-minutes\");\r\n    const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        let hours = Math.floor((timeRemaining / 60 / 60));\r\n        if (hours >= 0 && hours < 10) {\r\n            hours = \"0\" + hours;\r\n        }\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        if (minutes >= 0 && minutes < 10) {\r\n            minutes = \"0\" + minutes;\r\n        }\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n        if (seconds >= 0 && seconds < 10) {\r\n            seconds = \"0\" + seconds;\r\n        }\r\n\r\n        return { timeRemaining, hours, minutes, seconds };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        getTime = getTimeRemaining();\r\n\r\n\r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;\r\n    };\r\n\r\n    updateClock();\r\n\r\n    if (getTime.timeRemaining > 0) {\r\n        setInterval(updateClock, 1000);\r\n    } else if (getTime.timeRemaining <= 0) {\r\n\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

                /***/
})

        /******/
});
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
            /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
            /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
}
                /******/
}
            /******/
};
        /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/
};
        /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
    /******/
    /******/
})()
    ;