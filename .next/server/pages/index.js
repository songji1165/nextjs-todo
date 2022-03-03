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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3000\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixLQUFLLENBQUNDLEtBQUssR0FBR0QsbURBQVksQ0FBQyxDQUFDO0lBQ3hCRyxPQUFPLEVBQUVDLHVCQUErQjtBQUM1QyxDQUFDO0FBRUQsaUVBQWVILEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9saWIvYXBpL2luZGV4LnRzPzBiM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBheGlvcyA9IEF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTFxufSlcblxuZXhwb3J0IGRlZmF1bHQgYXhpb3MiXSwibmFtZXMiOlsiQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/api/index.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ \"./lib/api/index.ts\");\n\n// @ts-ignore\n\n\nconst index = ({ todos  })=>{\n    console.log(todos);\n    console.log(\"클라이언트 \", \"http://localhost:3000\");\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 12\n    }, undefined));\n};\nconst getServerSideProps = async ()=>{\n    try {\n        console.log(\"서버 \", process.env);\n        const res = await _lib_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('api/todos');\n        console.log(res);\n        if (res && res.status === 200 && res.data) {\n            return {\n                props: {\n                    todos: res.data\n                }\n            };\n        }\n    } catch (e) {\n        console.log(e);\n    }\n    return {\n        props: {\n            todos: []\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxFQUFhO0FBQ1k7QUFFSztBQU05QixLQUFLLENBQUNFLEtBQUssSUFBc0IsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFDLEdBQUssQ0FBQztJQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7SUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVEsZ0NBQWlDRztJQUMzQyxNQUFKLDZFQUFFQyxDQUFHO2tCQUFDLENBQUs7Ozs7OztBQUNyQixDQUFDO0FBRU0sS0FBSyxDQUFDQyxrQkFBa0IsYUFBbUMsQ0FBQztJQUMvRCxHQUFHLEVBQUM7UUFDQU4sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBSyxVQUFFQyxPQUFPLENBQUNDO1FBRTNCLEtBQUssQ0FBQ0ksR0FBRyxHQUFHLEtBQUssQ0FBQ1Ysb0RBQVMsQ0FBYSxDQUFXO1FBQ25ERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sR0FBRztRQUNmLEVBQUUsRUFBQ0EsR0FBRyxJQUFJQSxHQUFHLENBQUNFLE1BQU0sS0FBSyxHQUFHLElBQUlGLEdBQUcsQ0FBQ0csSUFBSSxFQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLENBQUNDO2dCQUFBQSxLQUFLLEVBQUUsQ0FBQ1o7b0JBQUFBLEtBQUssRUFBRVEsR0FBRyxDQUFDRyxJQUFJO2dCQUFBLENBQUM7WUFBQSxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDLE1BQUssRUFBRUUsQ0FBQyxFQUFDLENBQUM7UUFDUFosT0FBTyxDQUFDQyxHQUFHLENBQUNXLENBQUM7SUFDakIsQ0FBQztJQUNELE1BQU0sQ0FBRSxDQUFDRDtRQUFBQSxLQUFLLEVBQUUsQ0FBQ1o7WUFBQUEsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUFBLENBQUM7SUFBQSxDQUFDO0FBQ2hDLENBQUM7QUFFRCxpRUFBZUQsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7R2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICB0b2RvczogVG9kb1R5cGVbXTtcbn1cblxuY29uc3QgaW5kZXg6IE5leHRQYWdlPElQcm9wcz4gPSAoe3RvZG9zfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcbiAgICBjb25zb2xlLmxvZyhcIu2BtOudvOydtOyWuO2KuCBcIiwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCk7XG4gICAgcmV0dXJuIDxkaXY+aGVsbG88L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgICAgY29uc29sZS5sb2coXCLshJzrsoQgXCIsIHByb2Nlc3MuZW52KTtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQ8VG9kb1R5cGVbXT4oJ2FwaS90b2RvcycpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGlmKHJlcyAmJiByZXMuc3RhdHVzID09PSAyMDAgJiYgcmVzLmRhdGEpe1xuICAgICAgICAgICAgcmV0dXJuIHtwcm9wczoge3RvZG9zOiByZXMuZGF0YX19XG4gICAgICAgIH1cbiAgICB9Y2F0Y2ggKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gICAgcmV0dXJuICB7cHJvcHM6IHt0b2RvczogW119fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiaW5kZXgiLCJ0b2RvcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImdldCIsInN0YXR1cyIsImRhdGEiLCJwcm9wcyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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