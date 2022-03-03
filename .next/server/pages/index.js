"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/api/index.ts":
/*!**************************!*\
  !*** ./lib/api/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3000\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixLQUFLLENBQUNDLEtBQUssR0FBR0QsbURBQVksQ0FBQyxDQUFDO0lBQ3hCRyxPQUFPLEVBQUUsQ0FBdUI7QUFDcEMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vbGliL2FwaS9pbmRleC50cz8wYjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXhpb3MgPSBBeGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zIl0sIm5hbWVzIjpbIkF4aW9zIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api/index.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./lib/api/index.ts\");\n\n// @ts-ignore\n\n\nconst index = ({ todos  })=>{\n    console.log(todos);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 12\n    }, undefined));\n};\nconst getServerSideProps = async ()=>{\n    try {\n        const res = await _lib_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('api/todos');\n        console.log(res);\n        if (res && res.status === 200 && res.data) {\n            return {\n                props: {\n                    todos: res.data\n                }\n            };\n        }\n    } catch (e) {\n        console.log(e);\n    }\n    return {\n        props: {}\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxFQUFhO0FBQ1k7QUFFSztBQUU5QixLQUFLLENBQUNFLEtBQUssSUFBYyxDQUFDQyxDQUFBQSxLQUFLLEVBQVMsQ0FBQyxHQUFLLENBQUM7SUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBQ2pCLE1BQU0sNkVBQUVHLENBQUc7a0JBQUMsQ0FBSzs7Ozs7O0FBQ3JCLENBQUM7QUFFTSxLQUFLLENBQUNDLGtCQUFrQixhQUFtQyxDQUFDO0lBQy9ELEdBQUcsRUFBQztRQUNBLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ1Asb0RBQVMsQ0FBYSxDQUFXO1FBQ25ERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csR0FBRztRQUNmLEVBQUUsRUFBQ0EsR0FBRyxJQUFJQSxHQUFHLENBQUNFLE1BQU0sS0FBSyxHQUFHLElBQUlGLEdBQUcsQ0FBQ0csSUFBSSxFQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLENBQUNDO2dCQUFBQSxLQUFLLEVBQUUsQ0FBQ1Q7b0JBQUFBLEtBQUssRUFBRUssR0FBRyxDQUFDRyxJQUFJO2dCQUFBLENBQUM7WUFBQSxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDLE1BQUssRUFBRUUsQ0FBQyxFQUFDLENBQUM7UUFDUFQsT0FBTyxDQUFDQyxHQUFHLENBQUNRLENBQUM7SUFDakIsQ0FBQztJQUNELE1BQU0sQ0FBRSxDQUFDRDtRQUFBQSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQUEsQ0FBQztBQUN2QixDQUFDO0FBRUQsaUVBQWVWLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0dldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2V9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uL2xpYi9hcGlcIjtcblxuY29uc3QgaW5kZXg6IE5leHRQYWdlID0gKHt0b2Rvc306VG9kb1R5cGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b2Rvcyk7XG4gICAgcmV0dXJuIDxkaXY+aGVsbG88L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0PFRvZG9UeXBlW10+KCdhcGkvdG9kb3MnKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBpZihyZXMgJiYgcmVzLnN0YXR1cyA9PT0gMjAwICYmIHJlcy5kYXRhKXtcbiAgICAgICAgICAgIHJldHVybiB7cHJvcHM6IHt0b2RvczogcmVzLmRhdGF9fVxuICAgICAgICB9XG4gICAgfWNhdGNoIChlKXtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICAgIHJldHVybiAge3Byb3BzOiB7fX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsImluZGV4IiwidG9kb3MiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZ2V0Iiwic3RhdHVzIiwiZGF0YSIsInByb3BzIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();