"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n// @ts-ignore\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar index = function(param) {\n    var todos1 = param.todos;\n    var _this1 = _this;\n    var getColorsInfo = function getColorsInfo(todos) {\n        var colors = todos.reduce(function(acc, current) {\n            if (acc.findIndex(function(color) {\n                return color === current.color;\n            }) === -1) {\n                acc.push(current.color);\n            }\n            return acc;\n        }, []);\n        var colorsInfo = Object.fromEntries(colors.map(function(color) {\n            return [\n                color,\n                0\n            ];\n        }));\n        todos.forEach(function(todo) {\n            var color = todo.color;\n            var isColor = colors.find(function(item) {\n                return item === color;\n            });\n            isColor && colorsInfo[color]++;\n        });\n        return colorsInfo;\n    };\n    var deleteTodo = function deleteTodo(todoId) {\n        setTodoList(todoList.filter(function(todo, idx) {\n            return todo.id !== todoId;\n        }));\n    };\n    var checkedTodo = function checkedTodo(todoId) {\n        setTodoList(todoList.map(function(todo, idx) {\n            var checked = !todo.checked;\n            if (todo.id === todoId) {\n                return _objectSpread({}, todo, {\n                    checked: checked\n                });\n            }\n            return todo;\n        }));\n    };\n    _s();\n    console.log(todos1);\n    console.log(\"클라이언트 \", \"http://localhost:3000\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todos1), todoList = ref[0], setTodoList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getColorsInfo(todoList)), colorsInfo1 = ref1[0], setColorsInfo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColorsInfo(getColorsInfo(todoList));\n        console.log(colorsInfo1);\n    }, [\n        todoList\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"남은 TODO \",\n                            todoList.length,\n                            \"개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: Object.keys(colorsInfo1).map(function(color, idx) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    color,\n                                    \" \",\n                                    colorsInfo1[color],\n                                    \"개\"\n                                ]\n                            }, \"color\".concat(idx), true, {\n                                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: todoList.map(function(todo, idx) {\n                        var id = todo.id, checked = todo.checked;\n                        var successId = \"success\".concat(id);\n                        var successTodoStyle = checked ? {\n                            \"textDecoration\": \"line-through\"\n                        } : {\n                            \"textDecoration\": \"none\"\n                        };\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: successTodoStyle,\n                                    children: todo.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 33\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return deleteTodo(id);\n                                            },\n                                            children: \"삭제\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 37\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: successId,\n                                            children: \"완료\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 37\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            id: successId,\n                                            className: \"successTodo\",\n                                            checked: checked,\n                                            onChange: function() {\n                                                return checkedTodo(id);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 37\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 33\n                                }, _this1)\n                            ]\n                        }, \"todo\".concat(idx), true, {\n                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 29\n                        }, _this1));\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(index, \"hPo3HmOSBxcqtJTr92eJrh/NPB8=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRSxRQUFRO2dEQUFKNUIsTUFBTSxDQUFOQSxVQUFVLENBQUNNLEVBQUU7O3NEQUFHLENBQUU7Ozs7OztvSEFDbEN1QixDQUFDOzRDQUFDQyxPQUFPLEVBQUVSLFNBQVM7c0RBQUUsQ0FBRTs7Ozs7O29IQUN4QlMsQ0FBQzs0Q0FBQ0MsSUFBSSxFQUFDLENBQVU7NENBQUMxQixFQUFFLEVBQUVnQixTQUFTOzRDQUFFVyxTQUFTLEVBQUMsQ0FBYTs0Q0FBQ3pCLE9BQU8sRUFBRUEsT0FBTzs0Q0FDMUUwQixRQUFRLEVBQUUsUUFBUTtnREFBSjNCLE1BQU0sQ0FBTkEsV0FBVyxDQUFDRCxFQUFFOzs7Ozs7Ozs7Ozs7OzsyQkFOOUIsQ0FBSSxNQUFNLE9BQUpELEdBQUc7Ozs7O29CQVczQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBS3JCLENBQUM7R0EvRUt4QixLQUFLOztBQWdHWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7R2V0U2VydmVyU2lkZVByb3BzLCBOZXh0UGFnZX0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiLi4vbGliL2FwaVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICB0b2RvczogVG9kb1R5cGVbXTtcbn1cblxuY29uc3QgaW5kZXg6IE5leHRQYWdlPElQcm9wcz4gPSAoe3RvZG9zfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRvZG9zKTtcbiAgICBjb25zb2xlLmxvZyhcIu2BtOudvOydtOyWuO2KuCBcIiwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCk7XG5cbiAgICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKHRvZG9zKTtcbiAgICBjb25zdCBbY29sb3JzSW5mbywgc2V0Q29sb3JzSW5mb10gPSB1c2VTdGF0ZShnZXRDb2xvcnNJbmZvKHRvZG9MaXN0KSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDb2xvcnNJbmZvKGdldENvbG9yc0luZm8odG9kb0xpc3QpKTtcbiAgICAgICAgY29uc29sZS5sb2coY29sb3JzSW5mbyk7XG4gICAgfSwgW3RvZG9MaXN0XSlcblxuICAgIGZ1bmN0aW9uIGdldENvbG9yc0luZm8odG9kb3M6IGFueSkge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSB0b2Rvcy5yZWR1Y2UoKGFjYzogYW55LCBjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChhY2MuZmluZEluZGV4KChjb2xvcjogYW55KSA9PiBjb2xvciA9PT0gY3VycmVudC5jb2xvcikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2goY3VycmVudC5jb2xvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBjb25zdCBjb2xvcnNJbmZvID0gT2JqZWN0LmZyb21FbnRyaWVzKGNvbG9ycy5tYXAoY29sb3IgPT4gW2NvbG9yLCAwXSkpO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qge2NvbG9yfSA9IHRvZG87XG4gICAgICAgICAgICBjb25zdCBpc0NvbG9yID0gY29sb3JzLmZpbmQoaXRlbSA9PiBpdGVtID09PSBjb2xvcilcbiAgICAgICAgICAgIGlzQ29sb3IgJiYgY29sb3JzSW5mb1tjb2xvcl0rK1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29sb3JzSW5mb1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvSWQpe1xuICAgICAgICBzZXRUb2RvTGlzdCh0b2RvTGlzdC5maWx0ZXIoKHRvZG8sIGlkeCk9PiB0b2RvLmlkICE9PSB0b2RvSWQpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrZWRUb2RvKHRvZG9JZCl7XG4gICAgICAgIHNldFRvZG9MaXN0KHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gIXRvZG8uY2hlY2tlZFxuICAgICAgICAgICAgaWYodG9kby5pZCA9PT0gdG9kb0lkKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnRvZG8sIGNoZWNrZWR9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZXR1cm4gPD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+64Ko7J2AIFRPRE8ge3RvZG9MaXN0Lmxlbmd0aH3qsJw8L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29sb3JzSW5mbykubWFwKChjb2xvciwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2Bjb2xvciR7aWR4fWB9Pntjb2xvcn0ge2NvbG9yc0luZm9bY29sb3JdfeqwnDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5tYXAoKHRvZG8sIGlkeCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgY2hlY2tlZH0gPSB0b2RvO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc0lkID0gYHN1Y2Nlc3Mke2lkfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzVG9kb1N0eWxlID0gY2hlY2tlZCA/IHtcInRleHREZWNvcmF0aW9uXCIgOiBcImxpbmUtdGhyb3VnaFwifSA6IHtcInRleHREZWNvcmF0aW9uXCIgOiBcIm5vbmVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YHRvZG8ke2lkeH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N1Y2Nlc3NUb2RvU3R5bGV9Pnt0b2RvLnRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+ZGVsZXRlVG9kbyhpZCl9PuyCreygnDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3N1Y2Nlc3NJZH0+7JmE66OMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17c3VjY2Vzc0lkfSBjbGFzc05hbWU9XCJzdWNjZXNzVG9kb1wiIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpPT5jaGVja2VkVG9kbyhpZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCLshJzrsoQgXCIsIHByb2Nlc3MuZW52KTtcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQ8VG9kb1R5cGVbXT4oJ2FwaS90b2RvcycpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA9PT0gMjAwICYmIHJlcy5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4ge3Byb3BzOiB7dG9kb3M6IHJlcy5kYXRhfX1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICAgIHJldHVybiB7cHJvcHM6IHt0b2RvczogW119fVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW5kZXgiLCJ0b2RvcyIsImdldENvbG9yc0luZm8iLCJjb2xvcnMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50IiwiZmluZEluZGV4IiwiY29sb3IiLCJwdXNoIiwiY29sb3JzSW5mbyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwibWFwIiwiZm9yRWFjaCIsInRvZG8iLCJpc0NvbG9yIiwiZmluZCIsIml0ZW0iLCJkZWxldGVUb2RvIiwidG9kb0lkIiwic2V0VG9kb0xpc3QiLCJ0b2RvTGlzdCIsImZpbHRlciIsImlkeCIsImlkIiwiY2hlY2tlZFRvZG8iLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwic2V0Q29sb3JzSW5mbyIsImRpdiIsInAiLCJsZW5ndGgiLCJrZXlzIiwia2V5Iiwic3BhbiIsInVsIiwic3VjY2Vzc0lkIiwic3VjY2Vzc1RvZG9TdHlsZSIsImxpIiwic3R5bGUiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});