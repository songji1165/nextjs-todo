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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        if (req.method === 'GET') {\n            const todos1 = await new Promise((resolve, reject)=>{\n                fs__WEBPACK_IMPORTED_MODULE_0__.readFile(\"data/todos.json\", (err, data)=>{\n                    if (err) {\n                        return reject(err.message);\n                    }\n                    const todosData = data.toString();\n                    console.log(\"todosData?\", todosData);\n                    if (!todosData) {\n                        return resolve([]);\n                    }\n                    const todos = JSON.parse(data.toString());\n                    return resolve(todos);\n                });\n            });\n            res.statusCode = 200;\n            return res.send(todos1);\n        }\n    } catch (e) {\n        console.log(e);\n        return res.status(500).send(e);\n    }\n    // res.statusCode = 405\n    // return res.end()\n    return res.status(405).end();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dCO0FBSXhCLGlFQUFNLE9BQWdCQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDakUsR0FBRyxDQUFDLENBQUM7UUFDRCxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1lBRXZCLEtBQUssQ0FBQ0MsTUFBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUNDLE9BQU8sRUFBY0MsT0FBTyxFQUFFQyxNQUFNLEdBQUssQ0FBQztnQkFDOURQLHdDQUFXLENBQUMsQ0FBaUIsbUJBQUdTLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7b0JBQzNDLEVBQUUsRUFBRUQsR0FBRyxFQUFFLENBQUM7d0JBQ04sTUFBTSxDQUFDRixNQUFNLENBQUNFLEdBQUcsQ0FBQ0UsT0FBTztvQkFDN0IsQ0FBQztvQkFDRCxLQUFLLENBQUNDLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxRQUFRO29CQUMvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFSCxTQUFTO29CQUNuQyxFQUFFLEdBQUdBLFNBQVMsRUFBRSxDQUFDO3dCQUNiLE1BQU0sQ0FBQ04sT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxLQUFLLENBQUNGLEtBQUssR0FBR1ksSUFBSSxDQUFDQyxLQUFLLENBQUNQLElBQUksQ0FBQ0csUUFBUTtvQkFDdEMsTUFBTSxDQUFDUCxPQUFPLENBQUNGLEtBQUs7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDO1lBQ0RGLEdBQUcsQ0FBQ2dCLFVBQVUsR0FBRyxHQUFHO1lBQ3BCLE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ2YsTUFBSztRQUN6QixDQUFDO0lBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRWdCLENBQUMsRUFBRSxDQUFDO1FBQ1ROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxDQUFDO1FBQ2IsTUFBTSxDQUFDbEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsRUFBRUYsSUFBSSxDQUFDQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxFQUF1QjtJQUN2QixFQUFtQjtJQUNuQixNQUFNLENBQUNsQixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9hcGkvdG9kb3MudHM/ZGI4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2V9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcblxudHlwZSBUb2RvVHlwZSA9IHsgaWQ6IG51bWJlciwgdGV4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuIH1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgbmV3IFByb21pc2U8VG9kb1R5cGVbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGZzLnJlYWRGaWxlKFwiZGF0YS90b2Rvcy5qc29uXCIsIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2Rvc0RhdGEgPSBkYXRhLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2Rvc0RhdGE/XCIsIHRvZG9zRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdG9kb3NEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShbXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0b2RvcylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQodG9kb3MpXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZSlcbiAgICB9XG5cbiAgICAvLyByZXMuc3RhdHVzQ29kZSA9IDQwNVxuICAgIC8vIHJldHVybiByZXMuZW5kKClcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpXG59Il0sIm5hbWVzIjpbImZzIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb3MiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRGaWxlIiwiZXJyIiwiZGF0YSIsIm1lc3NhZ2UiLCJ0b2Rvc0RhdGEiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJzdGF0dXNDb2RlIiwic2VuZCIsImUiLCJzdGF0dXMiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();