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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n// @ts-ignore\n\n\nconst index = ({ todos  })=>{\n    console.log(todos);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 12\n    }, undefined));\n};\nconst getServerSideProps = async ()=>{\n    try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('http://localhost:4000/api/todos');\n        console.log(res);\n        if (res && res.status === 200 && res.data) {\n            return {\n                props: {\n                    todos: res.data\n                }\n            };\n        }\n    } catch (e) {\n        console.log(e);\n    }\n    return {\n        props: {}\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsRUFBYTtBQUNZO0FBRUE7QUFFekIsS0FBSyxDQUFDRSxLQUFLLElBQWMsQ0FBQ0MsQ0FBQUEsS0FBSyxFQUFTLENBQUMsR0FBSyxDQUFDO0lBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztJQUNqQixNQUFNLDZFQUFFRyxDQUFHO2tCQUFDLENBQUs7Ozs7OztBQUNyQixDQUFDO0FBRU0sS0FBSyxDQUFDQyxrQkFBa0IsYUFBbUMsQ0FBQztJQUMvRCxHQUFHLEVBQUM7UUFDQSxLQUFLLENBQUNDLEdBQUcsR0FBRyxLQUFLLENBQUNQLGdEQUFTLENBQWEsQ0FBaUM7UUFDekVHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxHQUFHO1FBQ2YsRUFBRSxFQUFDQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsSUFBSUYsR0FBRyxDQUFDRyxJQUFJLEVBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsQ0FBQ0M7Z0JBQUFBLEtBQUssRUFBRSxDQUFDVDtvQkFBQUEsS0FBSyxFQUFFSyxHQUFHLENBQUNHLElBQUk7Z0JBQUEsQ0FBQztZQUFBLENBQUM7UUFDckMsQ0FBQztJQUNMLENBQUMsTUFBSyxFQUFFRSxDQUFDLEVBQUMsQ0FBQztRQUNQVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsQ0FBQztJQUNqQixDQUFDO0lBQ0QsTUFBTSxDQUFFLENBQUNEO1FBQUFBLEtBQUssRUFBRSxDQUFDLENBQUM7SUFBQSxDQUFDO0FBQ3ZCLENBQUM7QUFFRCxpRUFBZVYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7R2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgaW5kZXg6IE5leHRQYWdlID0gKHt0b2Rvc306VG9kb1R5cGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0b2Rvcyk7XG4gICAgcmV0dXJuIDxkaXY+aGVsbG88L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0PFRvZG9UeXBlW10+KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL3RvZG9zJylcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgaWYocmVzICYmIHJlcy5zdGF0dXMgPT09IDIwMCAmJiByZXMuZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4ge3Byb3BzOiB7dG9kb3M6IHJlcy5kYXRhfX1cbiAgICAgICAgfVxuICAgIH1jYXRjaCAoZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgICByZXR1cm4gIHtwcm9wczoge319XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJpbmRleCIsInRvZG9zIiwiY29uc29sZSIsImxvZyIsImRpdiIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImdldCIsInN0YXR1cyIsImRhdGEiLCJwcm9wcyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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