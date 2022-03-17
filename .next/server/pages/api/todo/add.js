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
exports.id = "pages/api/todo/add";
exports.ids = ["pages/api/todo/add"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/todo/add.ts":
/*!*******************************!*\
  !*** ./pages/api/todo/add.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        if (req.method === 'POST') {\n            console.log(\"BODY\", req.body);\n            await new Promise((resolve, reject)=>{\n                fs__WEBPACK_IMPORTED_MODULE_0__.readFile(\"data/todos.json\", (err, data)=>{\n                    if (err) {\n                        return reject(err.message);\n                    }\n                    const todosData = data.toString();\n                    if (!todosData) {\n                        return resolve([]);\n                    }\n                    const todos = JSON.parse(data.toString());\n                    console.log(\"기존 투두스 \", todos);\n                    const newId = todos[todos.length - 1].id + 1;\n                    const newTodos = [\n                        ...todos,\n                        {\n                            ...req.body.todo,\n                            id: newId,\n                            checked: false\n                        }\n                    ];\n                    console.log(\"NEW !! \", newTodos);\n                    // return resolve(todos)\n                    fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync('data/todos.json', JSON.stringify(newTodos));\n                    return resolve(newTodos);\n                });\n            });\n            res.statusCode = 200;\n            return res.send('성공했습니다.');\n        }\n    } catch (e) {\n        console.log(e);\n        return res.status(500).send(e);\n    }\n    return res.status(405).end();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kby9hZGQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dCO0FBRXhCLGlFQUFNLE9BQWdCQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDakUsR0FBRyxDQUFDLENBQUM7UUFDRCxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1lBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFNLE9BQUNKLEdBQUcsQ0FBQ0ssSUFBSTtZQUMzQixLQUFLLENBQUMsR0FBRyxDQUFDQyxPQUFPLEVBQWNDLE9BQU8sRUFBRUMsTUFBTSxHQUFLLENBQUM7Z0JBQ2hEVCx3Q0FBVyxDQUFDLENBQWlCLG1CQUFHVyxHQUFHLEVBQUVDLElBQUksR0FBSyxDQUFDO29CQUMzQyxFQUFFLEVBQUVELEdBQUcsRUFBRSxDQUFDO3dCQUNOLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDRSxHQUFHLENBQUNFLE9BQU87b0JBQzdCLENBQUM7b0JBQ0QsS0FBSyxDQUFDQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csUUFBUTtvQkFDL0IsRUFBRSxHQUFHRCxTQUFTLEVBQUUsQ0FBQzt3QkFDYixNQUFNLENBQUNOLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLENBQUM7b0JBQ0QsS0FBSyxDQUFDUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixJQUFJLENBQUNHLFFBQVE7b0JBQ3RDWCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTO29CQUNYLEtBQUwsQ0FBQ2MsS0FBSyxHQUFHSCxLQUFLLENBQUNBLEtBQUssQ0FBQ0ksTUFBTSxHQUFDLENBQUMsRUFBRUMsRUFBRSxHQUFFLENBQUM7b0JBQ3pDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUM7MkJBQUdOLEtBQUs7d0JBQUUsQ0FBQzsrQkFBR2YsR0FBRyxDQUFDSyxJQUFJLENBQUNpQixJQUFJOzRCQUFFRixFQUFFLEVBQUNGLEtBQUs7NEJBQUVLLE9BQU8sRUFBRSxLQUFLO3dCQUFBLENBQUM7b0JBQUEsQ0FBQztvQkFDN0ZwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTLFVBQUVpQixRQUFRO29CQUVYLEVBQXdCO29CQUN4QnRCLDZDQUFnQixDQUFDLENBQWlCLGtCQUFFaUIsSUFBSSxDQUFDUyxTQUFTLENBQUNKLFFBQVE7b0JBQzNELE1BQU0sQ0FBQ2QsT0FBTyxDQUFDYyxRQUFRO2dCQUMzQixDQUFDO1lBQ0wsQ0FBQztZQUNEcEIsR0FBRyxDQUFDeUIsVUFBVSxHQUFHLEdBQUc7WUFDcEIsTUFBTSxDQUFDekIsR0FBRyxDQUFDMEIsSUFBSSxDQUFDLENBQVM7UUFDN0IsQ0FBQztJQUNMLENBQUMsQ0FBQyxLQUFLLEVBQUVDLENBQUMsRUFBRSxDQUFDO1FBQ1R6QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3dCLENBQUM7UUFDYixNQUFNLENBQUMzQixHQUFHLENBQUM0QixNQUFNLENBQUMsR0FBRyxFQUFFRixJQUFJLENBQUNDLENBQUM7SUFDakMsQ0FBQztJQUVELE1BQU0sQ0FBQzNCLEdBQUcsQ0FBQzRCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLEdBQUc7QUFDOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3BhZ2VzL2FwaS90b2RvL2FkZC50cz9hMzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJPRFlcIixyZXEuYm9keSk7XG4gICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZTxUb2RvVHlwZVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgZnMucmVhZEZpbGUoXCJkYXRhL3RvZG9zLmpzb25cIiwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVyci5tZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZG9zRGF0YSA9IGRhdGEudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRvZG9zRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoW10pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6riw7KG0IO2IrOuRkOyKpCBcIiwgdG9kb3MpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJZCA9IHRvZG9zW3RvZG9zLmxlbmd0aC0xXS5pZCArMVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUb2RvcyA9IFsuLi50b2Rvcywgey4uLnJlcS5ib2R5LnRvZG8sIGlkOm5ld0lkLCBjaGVja2VkOiBmYWxzZX1dXG5jb25zb2xlLmxvZyhcIk5FVyAhISBcIiwgbmV3VG9kb3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiByZXNvbHZlKHRvZG9zKVxuICAgICAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKCdkYXRhL3RvZG9zLmpzb24nLCBKU09OLnN0cmluZ2lmeShuZXdUb2RvcykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShuZXdUb2RvcylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwXG4gICAgICAgICAgICByZXR1cm4gcmVzLnNlbmQoJ+yEseqzte2WiOyKteuLiOuLpC4nKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKVxufSJdLCJuYW1lcyI6WyJmcyIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkRmlsZSIsImVyciIsImRhdGEiLCJtZXNzYWdlIiwidG9kb3NEYXRhIiwidG9TdHJpbmciLCJ0b2RvcyIsIkpTT04iLCJwYXJzZSIsIm5ld0lkIiwibGVuZ3RoIiwiaWQiLCJuZXdUb2RvcyIsInRvZG8iLCJjaGVja2VkIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSIsInN0YXR1c0NvZGUiLCJzZW5kIiwiZSIsInN0YXR1cyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todo/add.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todo/add.ts"));
module.exports = __webpack_exports__;

})();