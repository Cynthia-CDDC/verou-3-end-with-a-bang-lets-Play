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

/***/ "./src/feedback.js":
/*!*************************!*\
  !*** ./src/feedback.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"success\": () => (/* binding */ success),\n/* harmony export */   \"fail\": () => (/* binding */ fail)\n/* harmony export */ });\nfunction success(){\n  \n   const sound1 = document.getElementById(\"sound1\")\n    console.log(\"success\")\n    sound1.play()\n}\nfunction fail(){\n    const sound3 = document.getElementById(\"sound3\")\n    console.log(\"fail\")\n    sound3.play()\n  }\n\n//# sourceURL=webpack://quiz-game/./src/feedback.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"score\": () => (/* binding */ score),\n/* harmony export */   \"url\": () => (/* binding */ url),\n/* harmony export */   \"fetchQuestions\": () => (/* binding */ fetchQuestions)\n/* harmony export */ });\n/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score.js */ \"./src/score.js\");\n/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.js */ \"./src/feedback.js\");\nconst score = []\nconst holder = document.getElementById(\"holder\")\nconst feedbackHolder = document.getElementById(\"resultHolder\");\nvar lineBreak = '</br>'; \n\n\n\nlet url;\n\nlet answerInput = document.createElement(\"input\")\nanswerInput.id = \"answerInput\"\nanswerInput.placeholder = \"Put Your Answer Here ...\"\nlet inputHolder = document.createElement(\"P\")\ninputHolder.appendChild(answerInput)\n\nconst feedbackDiv = document.createElement(\"P\")\nfeedbackDiv.id = \"feedbackDiv\"\n\nlet button = document.createElement(\"button\")\nbutton.innerHTML = \"Submit\"\nbutton.id = \"submitButton\"\ninputHolder.appendChild(button)\n\nlet questionLine = document.createElement(\"P\")\nquestionLine.id = \"questionLine\"\nholder.appendChild(inputHolder)\nholder.appendChild(questionLine)\nfeedbackHolder.appendChild(feedbackDiv)\n\nlet i = 0\nlet questions = {}\n\n// put the question in box\nfunction attachToElement() {\n    questionLine.innerHTML = questions[i].question\n}\n\n\n\n// fetch data using API\nlet fetchQuestions = async (url) => {\n   try {\n        const res = await fetch(url);\n        if (!res.ok) {\n            throw new Error(res.status);\n        }\n        const data = await res.json();\n        console.log(data);\n        questions = data.results\n        attachToElement()\n    } catch (error) {\n        console.log(error);\n    }\n}\n\n// Choice of Question\ndocument.addEventListener(\"DOMContentLoaded\", function(e) {\n\n    // Put the button into a variable\n    var e = document.getElementById(\"myForm\");\n    \n    // Wait for user to click the button\n    e.addEventListener( \"change\", function() {\n    \n      // Put the selected value into a variable\n      var myChoice = this.choice.value;\n      \n      // The \"Switch\" statement.\n      switch ( myChoice ) {\n      \n      case \"film\":\n        url = \"https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple\"\n        fetchQuestions(url)\n        break;\n  \n      case \"music\":\n        url = \"https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple\"\n        fetchQuestions(url)\n  \n      case \"video\":\n        url = \"https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple\"\n        fetchQuestions(url)\n        break;\n\n      case \"board\":\n            url = \"https://opentdb.com/api.php?amount=5&category=16&difficulty=easy&type=multiple\"\n            fetchQuestions(url)\n            break;\n    case \"general\":\n        url = \"https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple\"\n        fetchQuestions(url)\n        break;\n        }\n    }, false);\n  });\n\n// feedback success or fail message\nfunction responseMsg(is_success, correct_answer) {\n    \n    if (is_success) {\n        const successMsg = document.createElement(\"P\");\n        successMsg.id = \"successMsg\"\n        successMsg.id = \"successDiv\"\n        feedbackDiv.appendChild(successMsg)\n        successMsg.innerHTML = `<img src=\"https://img.icons8.com/emoji/48/000000/nikita-clapping-hands-emoji.png\"/>${lineBreak}<span>Good Job! </span>`\n    } else {\n        const failMsg = document.createElement(\"P\");\n        failMsg.id = \"failMsg\"\n        failMsg.id = \"failDiv\"\n        feedbackDiv.appendChild(failMsg)\n       failMsg.innerHTML = `<img id=\"img\" src=\"https://img.icons8.com/emoji/48/000000/thinking-face.png\"/>${lineBreak}<span>NOT CORRECT!</span> The correct answer is <span>${correct_answer}</span>`\n    }\n}\n// check the Answer\nfunction checkAndNext() {\n    const userInputValue = answerInput.value\n    const userInputValueLowerCase = userInputValue.toLowerCase()\n    console.log(userInputValueLowerCase)\n    const correct_answer = questions[i].correct_answer.toLowerCase()\n    console.log(correct_answer)\n    if( userInputValueLowerCase == correct_answer){\n        score.push(5)\n        ;(0,_score_js__WEBPACK_IMPORTED_MODULE_0__.getSum)()\n        ;(0,_feedback_js__WEBPACK_IMPORTED_MODULE_1__.success)()\n        responseMsg(true, correct_answer)\n    }else{\n        score.push(0)\n        ;(0,_score_js__WEBPACK_IMPORTED_MODULE_0__.getSum)()\n        ;(0,_feedback_js__WEBPACK_IMPORTED_MODULE_1__.fail)()\n        responseMsg(false, correct_answer)   \n    }\n    questionLine.innerHTML = ''\n    answerInput.value = ''\n}\nbutton.addEventListener('click', function() {\n    checkAndNext()\n    i++\n    attachToElement()\n})\n\n\n//# sourceURL=webpack://quiz-game/./src/index.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSum\": () => (/* binding */ getSum)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nfunction getSum(){\n    const scoreHolder = document.getElementById(\"scoreHolder\")\n    scoreHolder.id = \"scoreHolder\"\n    const sum = _index_js__WEBPACK_IMPORTED_MODULE_0__.score.reduce((a, b) => a + b, 0);\n    scoreHolder.innerHTML = sum\n}\n\n\n\n\n//# sourceURL=webpack://quiz-game/./src/score.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;