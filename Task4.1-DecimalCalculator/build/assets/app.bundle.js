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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calc.js":
/*!*********************!*\
  !*** ./src/calc.js ***!
  \*********************/
/*! exports provided: insert, clean, del, equal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insert\", function() { return insert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clean\", function() { return clean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del\", function() { return del; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"equal\", function() { return equal; });\nlet memoryField = document.getElementById(\"memoryField\");\nlet currentInput = document.getElementById(\"currentInput\");\nlet resetCurrentInputFlag = false; //let initialInput = (currentInput.value === '0' && memoryField.value === '');\n\nconst insert = input => {\n  let operatorRegEx = /(\\+|-|\\*|\\/)$/; // String ends with +, -, x or /.\n\n  let check = operatorRegEx.test(memoryField.value); // If the string ends with an operator\n\n  if (input === '.') {\n    // The input is a decimal point.\n    let decimalRegEx = /\\./;\n    let decimalCheck = decimalRegEx.test(currentInput.value);\n\n    if (!decimalCheck) {\n      if (resetCurrentInputFlag) {\n        currentInput.value = input;\n      } else {\n        currentInput.value += input;\n      }\n    }\n  } else if (input !== '+' && input !== '-' && input !== '*' && input !== '/') {\n    // The input is a number.\n    if (currentInput.value === '0' || resetCurrentInputFlag) {\n      // If it is the initial input,\n      currentInput.value = input; // set the value to be the input.\n    } else {\n      currentInput.value += input;\n    }\n\n    if (resetCurrentInputFlag) {\n      resetCurrentInputFlag = false;\n    }\n  } else {\n    // The input is an operator.\n    if (memoryField.value === '') {\n      if (currentInput.value === '0') {\n        memoryField.value = '0' + input; // Works.\n      } else {\n        memoryField.value = currentInput.value + input; // Works.\n      }\n    } else if (!resetCurrentInputFlag) {\n      memoryField.value += currentInput.value + input;\n    } else if (check) {\n      // May be useless check. Works without it, too.\n      let limit = memoryField.value.length - 1;\n      memoryField.value = memoryField.value.slice(0, limit) + input;\n    }\n\n    resetCurrentInputFlag = true; // Works as intended.\n  }\n};\nconst clean = () => {\n  currentInput.value = '0';\n  memoryField.value = '';\n};\nconst del = () => {\n  let limit = currentInput.value.length - 1;\n\n  if (!resetCurrentInputFlag) {\n    // If the last pressed button is not an operator - check further.\n    if (currentInput.value.length === 1) {\n      // If it is the last or the only digit - set currentInput to 0.\n      currentInput.value = '0';\n    } else {\n      currentInput.value = currentInput.value.slice(0, limit); // If there is currentInput and it it more than 1 digits - remove the last digit.\n    }\n  }\n};\nconst equal = () => {\n  if (resetCurrentInputFlag) {\n    let limit = memoryField.value.length - 1; // If the last pressed butto was an operator\n\n    memoryField.value = memoryField.value.slice(0, limit);\n    currentInput.value = eval(memoryField.value); // we don't calculate the currentInput as it has\n\n    memoryField.value = ''; // already been added the memoryField.\n  } else {\n    currentInput.value = eval(memoryField.value + currentInput.value); //If the last pressed button was a number\n\n    memoryField.value = ''; // Works.                                  we calculate both the memoryField and currentInput.\n  }\n};\n\n//# sourceURL=webpack:///./src/calc.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _calc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc.js */ \"./src/calc.js\");\n\n\nconst button1 = document.getElementById('button_1');\nconst button2 = document.getElementById('button_2');\nconst button3 = document.getElementById('button_3');\nconst button4 = document.getElementById('button_4');\nconst button5 = document.getElementById('button_5');\nconst button6 = document.getElementById('button_6');\nconst button7 = document.getElementById('button_7');\nconst button8 = document.getElementById('button_8');\nconst button9 = document.getElementById('button_9');\nconst button0 = document.getElementById('button_0');\nconst buttonC = document.getElementById('button_C');\nconst buttonDel = document.getElementById('delete_button');\nconst buttonPlus = document.getElementById('addition_button');\nconst buttonMinus = document.getElementById('substraction_button');\nconst buttonMultiplication = document.getElementById('multiplication_button');\nconst buttonDivision = document.getElementById('division_button');\nconst buttonDecimal = document.getElementById('decimal_button');\nconst buttonEqual = document.getElementById('equals_button');\nbutton1.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('1');\n});\nbutton2.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('2');\n});\nbutton3.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('3');\n});\nbutton4.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('4');\n});\nbutton5.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('5');\n});\nbutton6.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('6');\n});\nbutton7.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('7');\n});\nbutton8.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('8');\n});\nbutton9.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('9');\n});\nbuttonC.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"clean\"])();\n});\nbuttonDel.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"del\"])();\n});\nbuttonPlus.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('+');\n});\nbuttonMinus.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('-');\n});\nbuttonMultiplication.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('*');\n});\nbuttonDivision.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('/');\n});\nbuttonDecimal.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('.');\n});\nbuttonEqual.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"equal\"])();\n});\nbutton0.addEventListener('click', function () {\n  Object(_calc_js__WEBPACK_IMPORTED_MODULE_1__[\"insert\"])('0');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ })

/******/ });