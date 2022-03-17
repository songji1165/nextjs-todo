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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// @ts-ignore\nvar index = function() {\n    var _this1 = _this;\n    var getColorsInfo = function getColorsInfo(todos) {\n        var colors = todos.reduce(function(acc, current) {\n            if (acc.findIndex(function(color) {\n                return color === current.color;\n            }) === -1) {\n                acc.push(current.color);\n            }\n            return acc;\n        }, []);\n        var colorsInfo = Object.fromEntries(colors.map(function(color) {\n            return [\n                color,\n                0\n            ];\n        }));\n        todos.forEach(function(todo) {\n            var color = todo.color;\n            var isColor = colors.find(function(item) {\n                return item === color;\n            });\n            isColor && colorsInfo[color]++;\n        });\n        return colorsInfo;\n    };\n    var deleteTodo = function deleteTodo(todoId) {\n        setTodoList(todoList.filter(function(todo, idx) {\n            return todo.id !== todoId;\n        }));\n    };\n    var checkedTodo = function checkedTodo(todoId) {\n        setTodoList(todoList.map(function(todo, idx) {\n            var checked = !todo.checked;\n            if (todo.id === todoId) {\n                return _objectSpread({}, todo, {\n                    checked: checked\n                });\n            }\n            return todo;\n        }));\n    };\n    _s();\n    console.log(\"클라이언트 \", \"http://localhost:3000\");\n    // 스토어에 저장된 정보를 props로 전달받는 대신, store 사용\n    var todos1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.todo.todos;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todos1), todoList = ref[0], setTodoList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getColorsInfo(todoList)), colorsInfo1 = ref1[0], setColorsInfo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColorsInfo(getColorsInfo(todoList));\n        console.log(colorsInfo1);\n    }, [\n        todoList\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"남은 TODO \",\n                            todoList.length,\n                            \"개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: Object.keys(colorsInfo1).map(function(color, idx) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    color,\n                                    \" \",\n                                    colorsInfo1[color],\n                                    \"개\"\n                                ]\n                            }, \"color\".concat(idx), true, {\n                                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: todoList.map(function(todo, idx) {\n                        var id = todo.id, checked = todo.checked;\n                        var successId = \"success\".concat(id);\n                        var successTodoStyle = checked ? {\n                            \"textDecoration\": \"line-through\"\n                        } : {\n                            \"textDecoration\": \"none\"\n                        };\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: successTodoStyle,\n                                    children: todo.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 33\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return deleteTodo(id);\n                                            },\n                                            children: \"삭제\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 37\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: successId,\n                                            children: \"완료\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 37\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            id: successId,\n                                            className: \"successTodo\",\n                                            checked: checked,\n                                            onChange: function() {\n                                                return checkedTodo(id);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 37\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 33\n                                }, _this1)\n                            ]\n                        }, \"todo\".concat(idx), true, {\n                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 29\n                        }, _this1));\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(index, \"YK+atXVguaDslYgkW61l++MiLtQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzhDQUFHNUIsSUFBSSxDQUFDK0IsSUFBSTs7Ozs7OzRHQUN4Q1gsQ0FBRzs7b0hBQ0NZLENBQU07NENBQUNDLE9BQU8sRUFBRSxRQUFRO2dEQUFGN0IsTUFBTSxDQUFOQSxVQUFVLENBQUNNLEVBQUU7O3NEQUFHLENBQUU7Ozs7OztvSEFDcEN3QixDQUFDOzRDQUFDQyxPQUFPLEVBQUVSLFNBQVM7c0RBQUUsQ0FBRTs7Ozs7O29IQUN4QlMsQ0FBQzs0Q0FBQ0MsSUFBSSxFQUFDLENBQVU7NENBQUMzQixFQUFFLEVBQUVpQixTQUFTOzRDQUFFVyxTQUFTLEVBQUMsQ0FBYTs0Q0FBQzFCLE9BQU8sRUFBRUEsT0FBTzs0Q0FDdkUyQixRQUFRLEVBQUUsUUFBUTtnREFBRjVCLE1BQU0sQ0FBTkEsV0FBVyxDQUFDRCxFQUFFOzs7Ozs7Ozs7Ozs7OzsyQkFObkMsQ0FBSSxNQUFNLE9BQUpELEdBQUc7Ozs7O29CQVczQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBS3JCLENBQUM7R0FsRkt4QixLQUFLOztRQUlPRCxvREFBVzs7OztBQW9HN0IsK0RBQWVDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0dldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2V9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7Um9vdFN0YXRlLCB3cmFwcGVyfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCB7dG9kb0FjdGlvbnN9IGZyb20gXCIuLi9zdG9yZS90b2RvXCI7XG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgdG9kb3M6IFRvZG9UeXBlW107XG59XG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi7YG065287J207Ja47Yq4IFwiLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMKTtcblxuICAgIC8vIOyKpO2GoOyWtOyXkCDsoIDsnqXrkJwg7KCV67O066W8IHByb3Bz66GcIOyghOuLrOuwm+uKlCDrjIDsi6AsIHN0b3JlIOyCrOyaqVxuICAgIGNvbnN0IHRvZG9zID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRvZG8udG9kb3MpO1xuXG5cbiAgICBjb25zdCBbdG9kb0xpc3QsIHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKHRvZG9zKTtcbiAgICBjb25zdCBbY29sb3JzSW5mbywgc2V0Q29sb3JzSW5mb10gPSB1c2VTdGF0ZShnZXRDb2xvcnNJbmZvKHRvZG9MaXN0KSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDb2xvcnNJbmZvKGdldENvbG9yc0luZm8odG9kb0xpc3QpKTtcbiAgICAgICAgY29uc29sZS5sb2coY29sb3JzSW5mbyk7XG4gICAgfSwgW3RvZG9MaXN0XSlcblxuICAgIGZ1bmN0aW9uIGdldENvbG9yc0luZm8odG9kb3M6IGFueSkge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSB0b2Rvcy5yZWR1Y2UoKGFjYzogYW55LCBjdXJyZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChhY2MuZmluZEluZGV4KChjb2xvcjogYW55KSA9PiBjb2xvciA9PT0gY3VycmVudC5jb2xvcikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYWNjLnB1c2goY3VycmVudC5jb2xvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBjb25zdCBjb2xvcnNJbmZvID0gT2JqZWN0LmZyb21FbnRyaWVzKGNvbG9ycy5tYXAoY29sb3IgPT4gW2NvbG9yLCAwXSkpO1xuICAgICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3Qge2NvbG9yfSA9IHRvZG87XG4gICAgICAgICAgICBjb25zdCBpc0NvbG9yID0gY29sb3JzLmZpbmQoaXRlbSA9PiBpdGVtID09PSBjb2xvcilcbiAgICAgICAgICAgIGlzQ29sb3IgJiYgY29sb3JzSW5mb1tjb2xvcl0rK1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29sb3JzSW5mb1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvSWQpIHtcbiAgICAgICAgc2V0VG9kb0xpc3QodG9kb0xpc3QuZmlsdGVyKCh0b2RvLCBpZHgpID0+IHRvZG8uaWQgIT09IHRvZG9JZCkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tlZFRvZG8odG9kb0lkKSB7XG4gICAgICAgIHNldFRvZG9MaXN0KHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gIXRvZG8uY2hlY2tlZFxuICAgICAgICAgICAgaWYgKHRvZG8uaWQgPT09IHRvZG9JZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7Li4udG9kbywgY2hlY2tlZH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2RvXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJldHVybiA8PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD7rgqjsnYAgVE9ETyB7dG9kb0xpc3QubGVuZ3RofeqwnDwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb2xvcnNJbmZvKS5tYXAoKGNvbG9yLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YGNvbG9yJHtpZHh9YH0+e2NvbG9yfSB7Y29sb3JzSW5mb1tjb2xvcl196rCcPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0Lm1hcCgodG9kbywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7aWQsIGNoZWNrZWR9ID0gdG9kbztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NJZCA9IGBzdWNjZXNzJHtpZH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc1RvZG9TdHlsZSA9IGNoZWNrZWQgPyB7XCJ0ZXh0RGVjb3JhdGlvblwiOiBcImxpbmUtdGhyb3VnaFwifSA6IHtcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgdG9kbyR7aWR4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3VjY2Vzc1RvZG9TdHlsZX0+e3RvZG8udGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8oaWQpfT7sgq3soJw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtzdWNjZXNzSWR9PuyZhOujjDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e3N1Y2Nlc3NJZH0gY2xhc3NOYW1lPVwic3VjY2Vzc1RvZG9cIiBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBjaGVja2VkVG9kbyhpZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gICAgKHN0b3JlKSA9PlxuICAgIGFzeW5jICh7cmVxLCByZXMsIC4uLmV0Y30pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLshJzrsoQgXCIsIHByb2Nlc3MuZW52KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuyKpO2GoOyWtCAgXCIsIHN0b3JlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldDxUb2RvVHlwZVtdPignYXBpL3RvZG9zJylcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA9PT0gMjAwICYmIHJlcy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHRvZG9BY3Rpb25zLnNldFRvZG8ocmVzLmRhdGEpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3Byb3BzOiB7dG9kb3M6IHJlcy5kYXRhfX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge3Byb3BzOiB7dG9kb3M6IFtdfX1cbiAgICAgICAgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJpbmRleCIsImdldENvbG9yc0luZm8iLCJ0b2RvcyIsImNvbG9ycyIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiLCJmaW5kSW5kZXgiLCJjb2xvciIsInB1c2giLCJjb2xvcnNJbmZvIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJtYXAiLCJmb3JFYWNoIiwidG9kbyIsImlzQ29sb3IiLCJmaW5kIiwiaXRlbSIsImRlbGV0ZVRvZG8iLCJ0b2RvSWQiLCJzZXRUb2RvTGlzdCIsInRvZG9MaXN0IiwiZmlsdGVyIiwiaWR4IiwiaWQiLCJjaGVja2VkVG9kbyIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJzdGF0ZSIsInNldENvbG9yc0luZm8iLCJkaXYiLCJwIiwibGVuZ3RoIiwia2V5cyIsImtleSIsInNwYW4iLCJ1bCIsInN1Y2Nlc3NJZCIsInN1Y2Nlc3NUb2RvU3R5bGUiLCJsaSIsInN0eWxlIiwidGV4dCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});