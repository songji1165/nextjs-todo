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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        if (req.method === 'GET') {\n            const todos1 = await new Promise((resolve, reject)=>{\n                fs__WEBPACK_IMPORTED_MODULE_0__.readFile(\"data/todos.json\", (err, data)=>{\n                    if (err) {\n                        return reject(err.message);\n                    }\n                    const todosData = data.toString();\n                    if (!todosData) {\n                        return resolve([]);\n                    }\n                    const todos = JSON.parse(data.toString());\n                    return resolve(todos);\n                });\n            });\n            res.statusCode = 200;\n            return res.send(todos1);\n        }\n    } catch (e) {\n        console.log(e);\n        return res.status(500).send(e);\n    }\n    return res.status(405).end();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dCO0FBRXhCLGlFQUFNLE9BQWdCQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDakUsR0FBRyxDQUFDLENBQUM7UUFDRCxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1lBRXZCLEtBQUssQ0FBQ0MsTUFBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUNDLE9BQU8sRUFBY0MsT0FBTyxFQUFFQyxNQUFNLEdBQUssQ0FBQztnQkFDOURQLHdDQUFXLENBQUMsQ0FBaUIsbUJBQUdTLEdBQUcsRUFBRUMsSUFBSSxHQUFLLENBQUM7b0JBQzNDLEVBQUUsRUFBRUQsR0FBRyxFQUFFLENBQUM7d0JBQ04sTUFBTSxDQUFDRixNQUFNLENBQUNFLEdBQUcsQ0FBQ0UsT0FBTztvQkFDN0IsQ0FBQztvQkFDRCxLQUFLLENBQUNDLFNBQVMsR0FBR0YsSUFBSSxDQUFDRyxRQUFRO29CQUMvQixFQUFFLEdBQUdELFNBQVMsRUFBRSxDQUFDO3dCQUNiLE1BQU0sQ0FBQ04sT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxLQUFLLENBQUNGLEtBQUssR0FBR1UsSUFBSSxDQUFDQyxLQUFLLENBQUNMLElBQUksQ0FBQ0csUUFBUTtvQkFDdEMsTUFBTSxDQUFDUCxPQUFPLENBQUNGLEtBQUs7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDO1lBQ0RGLEdBQUcsQ0FBQ2MsVUFBVSxHQUFHLEdBQUc7WUFDcEIsTUFBTSxDQUFDZCxHQUFHLENBQUNlLElBQUksQ0FBQ2IsTUFBSztRQUN6QixDQUFDO0lBQ0wsQ0FBQyxDQUFDLEtBQUssRUFBRWMsQ0FBQyxFQUFFLENBQUM7UUFDVEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUM7UUFDYixNQUFNLENBQUNoQixHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxFQUFFSixJQUFJLENBQUNDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQ21CLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLEdBQUc7QUFDOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2FwaS90b2Rvcy50cz9kYjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBhd2FpdCBuZXcgUHJvbWlzZTxUb2RvVHlwZVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZnMucmVhZEZpbGUoXCJkYXRhL3RvZG9zLmpzb25cIiwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVyci5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9zRGF0YSA9IGRhdGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRvZG9zRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoW10pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodG9kb3MpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zZW5kKHRvZG9zKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKVxufSJdLCJuYW1lcyI6WyJmcyIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkRmlsZSIsImVyciIsImRhdGEiLCJtZXNzYWdlIiwidG9kb3NEYXRhIiwidG9TdHJpbmciLCJKU09OIiwicGFyc2UiLCJzdGF0dXNDb2RlIiwic2VuZCIsImUiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.ts\n");

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