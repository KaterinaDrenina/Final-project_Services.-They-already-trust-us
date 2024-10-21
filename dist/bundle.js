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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nconst scrollLinks = document.querySelectorAll('.scroll-link');\nscrollLinks.forEach(link => {\n    link.addEventListener('click', function (e) {\n        e.preventDefault();\n        const href = this.getAttribute('href');\n        const targetElement = document.querySelector(href);\n        if (targetElement) {\n            const offsetTop = targetElement.offsetTop;\n            window.scrollTo({\n                top: offsetTop,\n                behavior: 'smooth'\n            });\n        }\n    });\n});\nconst scrollToTopBtn = document.getElementById('scrollToTopBtn');\nif (scrollToTopBtn) {\n    window.addEventListener('scroll', () => {\n        if (window.scrollY > 300) {\n            scrollToTopBtn.style.display = 'block';\n        }\n        else {\n            scrollToTopBtn.style.display = 'none';\n        }\n    });\n    scrollToTopBtn.addEventListener('click', () => {\n        window.scrollTo({\n            top: 0,\n            behavior: 'smooth'\n        });\n    });\n}\nconst openModalBtn = document.getElementById('openModalBtn');\nconst modal = document.getElementById('modal');\nconst closeModalBtn = document.getElementById('closeModalBtn');\nif (openModalBtn && modal && closeModalBtn) {\n    openModalBtn.addEventListener('click', () => {\n        modal.style.display = 'block';\n    });\n    closeModalBtn.addEventListener('click', () => {\n        modal.style.display = 'none';\n    });\n    window.addEventListener('click', (e) => {\n        if (e.target === modal) {\n            modal.style.display = 'none';\n        }\n    });\n}\nfunction reveal() {\n    const reveals = document.querySelectorAll('.reveal');\n    reveals.forEach(reveal => {\n        const windowHeight = window.innerHeight;\n        const revealTop = reveal.getBoundingClientRect().top;\n        const revealPoint = 150;\n        if (revealTop < windowHeight - revealPoint) {\n            reveal.classList.add('active');\n        }\n        else {\n            reveal.classList.remove('active');\n        }\n    });\n}\nwindow.addEventListener('scroll', reveal);\nconst burgerBtn = document.getElementById('burgerBtn');\nconst closeMenuBtn = document.getElementById('closeMenuBtn');\nconst mobileMenu = document.getElementById('mobileMenu');\nif (burgerBtn && closeMenuBtn && mobileMenu) {\n    console.log('Elements found!'); // Для отладки\n    // Открытие меню при клике на бургер-кнопку\n    burgerBtn.addEventListener('click', () => {\n        mobileMenu.style.display = 'block'; // Делаем меню видимым\n        console.log('Menu opened'); // Для отладки\n    });\n    // Закрытие меню при клике на кнопку закрытия\n    closeMenuBtn.addEventListener('click', () => {\n        mobileMenu.style.display = 'none'; // Скрываем меню\n        console.log('Menu closed'); // Для отладки\n    });\n}\nelse {\n    console.error('Не удалось найти необходимые элементы!');\n}\n\n\n//# sourceURL=webpack://finalproject/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;