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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// @ts-ignore\nvar index = function(param) {\n    var todos1 = param.todos;\n    var _this1 = _this;\n    var getColorsInfo = function getColorsInfo(todos) {\n        var colors = todos.reduce(function(acc, current) {\n            if (acc.findIndex(function(color) {\n                return color === current.color;\n            }) === -1) {\n                acc.push(current.color);\n            }\n            return acc;\n        }, []);\n        var colorsInfo = Object.fromEntries(colors.map(function(color) {\n            return [\n                color,\n                0\n            ];\n        }));\n        todos.forEach(function(todo) {\n            var color = todo.color;\n            var isColor = colors.find(function(item) {\n                return item === color;\n            });\n            isColor && colorsInfo[color]++;\n        });\n        return colorsInfo;\n    };\n    var deleteTodo = function deleteTodo(todoId) {\n        setTodoList(todoList.filter(function(todo, idx) {\n            return todo.id !== todoId;\n        }));\n    };\n    var checkedTodo = function checkedTodo(todoId) {\n        setTodoList(todoList.map(function(todo, idx) {\n            var checked = !todo.checked;\n            if (todo.id === todoId) {\n                return _objectSpread({}, todo, {\n                    checked: checked\n                });\n            }\n            return todo;\n        }));\n    };\n    _s();\n    console.log(todos1);\n    console.log(\"클라이언트 \", \"http://localhost:3000\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(todos1), todoList = ref[0], setTodoList = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getColorsInfo(todoList)), colorsInfo1 = ref1[0], setColorsInfo = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColorsInfo(getColorsInfo(todoList));\n        console.log(colorsInfo1);\n    }, [\n        todoList\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"남은 TODO \",\n                            todoList.length,\n                            \"개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: Object.keys(colorsInfo1).map(function(color, idx) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    color,\n                                    \" \",\n                                    colorsInfo1[color],\n                                    \"개\"\n                                ]\n                            }, \"color\".concat(idx), true, {\n                                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: todoList.map(function(todo, idx) {\n                        var id = todo.id, checked = todo.checked;\n                        var successId = \"success\".concat(id);\n                        var successTodoStyle = checked ? {\n                            \"textDecoration\": \"line-through\"\n                        } : {\n                            \"textDecoration\": \"none\"\n                        };\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: successTodoStyle,\n                                    children: todo.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 33\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return deleteTodo(id);\n                                            },\n                                            children: \"삭제\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 37\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: successId,\n                                            children: \"완료\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 37\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            id: successId,\n                                            className: \"successTodo\",\n                                            checked: checked,\n                                            onChange: function() {\n                                                return checkedTodo(id);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 37\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 33\n                                }, _this1)\n                            ]\n                        }, \"todo\".concat(idx), true, {\n                            fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 29\n                        }, _this1));\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/eunji/Desktop/study/next-todolist/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(index, \"hPo3HmOSBxcqtJTr92eJrh/NPB8=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2hELEVBQWE7QUFDYixHQUFLLENBQUNHLEtBQUssR0FBRyxRQUFRLFFBQUssQ0FBQztRQUFaQyxNQUFLLFNBQUxBLEtBQUs7O1FBWVJDLGFBQWEsR0FBdEIsUUFBUSxDQUFDQSxhQUFhLENBQUNELEtBQVUsRUFBRSxDQUFDO1FBQ2hDLEdBQUssQ0FBQ0UsTUFBTSxHQUFHRixLQUFLLENBQUNHLE1BQU0sQ0FBQyxRQUFRLENBQVBDLEdBQVEsRUFBRUMsT0FBWSxFQUFLLENBQUM7WUFDckQsRUFBRSxFQUFFRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxRQUFRLENBQVBDLEtBQVU7Z0JBQUtBLE1BQU0sQ0FBTkEsS0FBSyxLQUFLRixPQUFPLENBQUNFLEtBQUs7b0JBQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ2hFSCxHQUFHLENBQUNJLElBQUksQ0FBQ0gsT0FBTyxDQUFDRSxLQUFLO1lBQzFCLENBQUM7WUFDRCxNQUFNLENBQUNILEdBQUc7UUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ0wsR0FBSyxDQUFDSyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDVCxNQUFNLENBQUNVLEdBQUcsQ0FBQ0wsUUFBUSxDQUFSQSxLQUFLO1lBQUksTUFBTSxDQUFOLENBQUNBO2dCQUFBQSxLQUFLO0FBQUUsaUJBQUM7WUFBQSxDQUFDOztRQUNwRVAsS0FBSyxDQUFDYSxPQUFPLENBQUNDLFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7WUFDbkIsR0FBSyxDQUFFUCxLQUFLLEdBQUlPLElBQUksQ0FBYlAsS0FBSztZQUNaLEdBQUssQ0FBQ1EsT0FBTyxHQUFHYixNQUFNLENBQUNjLElBQUksQ0FBQ0MsUUFBUUEsQ0FBUkEsSUFBSTtnQkFBSUEsTUFBTSxDQUFOQSxJQUFJLEtBQUtWLEtBQUs7O1lBQ2xEUSxPQUFPLElBQUlOLFVBQVUsQ0FBQ0YsS0FBSztRQUMvQixDQUFDO1FBQ0QsTUFBTSxDQUFDRSxVQUFVO0lBQ3JCLENBQUM7UUFHUVMsVUFBVSxHQUFuQixRQUFRLENBQUNBLFVBQVUsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7UUFDekJDLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFQUixJQUFJLEVBQUVTLEdBQUc7WUFBS1QsTUFBTSxDQUFOQSxJQUFJLENBQUNVLEVBQUUsS0FBS0wsTUFBTTs7SUFDakUsQ0FBQztRQUVRTSxXQUFXLEdBQXBCLFFBQVEsQ0FBQ0EsV0FBVyxDQUFDTixNQUFNLEVBQUUsQ0FBQztRQUMxQkMsV0FBVyxDQUFDQyxRQUFRLENBQUNULEdBQUcsQ0FBQyxRQUFRLENBQVBFLElBQUksRUFBRVMsR0FBRyxFQUFLLENBQUM7WUFDckMsR0FBSyxDQUFDRyxPQUFPLElBQUlaLElBQUksQ0FBQ1ksT0FBTztZQUM3QixFQUFFLEVBQUVaLElBQUksQ0FBQ1UsRUFBRSxLQUFLTCxNQUFNLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxtQkFBS0wsSUFBSTtvQkFBRVksT0FBTyxFQUFQQSxPQUFPOztZQUM1QixDQUFDO1lBQ0QsTUFBTSxDQUFDWixJQUFJO1FBQ2YsQ0FBQztJQUNMLENBQUM7O0lBeENEYSxPQUFPLENBQUNDLEdBQUcsQ0FBQzVCLE1BQUs7SUFDakIyQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFrQixnQ0FBdUJHO0lBRXJELEdBQUssQ0FBMkJqQyxHQUFlLEdBQWZBLCtDQUFRLENBQUNFLE1BQUssR0FBdkNxQixRQUFRLEdBQWlCdkIsR0FBZSxLQUE5QnNCLFdBQVcsR0FBSXRCLEdBQWU7SUFDL0MsR0FBSyxDQUErQkEsSUFBaUMsR0FBakNBLCtDQUFRLENBQUNHLGFBQWEsQ0FBQ29CLFFBQVEsSUFBNURaLFdBQVUsR0FBbUJYLElBQWlDLEtBQWxEa0MsYUFBYSxHQUFJbEMsSUFBaUM7SUFFckVELGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JtQyxhQUFhLENBQUMvQixhQUFhLENBQUNvQixRQUFRO1FBQ3BDTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLFdBQVU7SUFDMUIsQ0FBQyxFQUFFLENBQUNZO1FBQUFBLFFBQVE7SUFBQSxDQUFDO0lBaUNiLE1BQU07O3dGQUVEWSxDQUFHOztnR0FDQ0MsQ0FBQzs7NEJBQUMsQ0FBUTs0QkFBS2IsUUFBUSxDQUFDYyxNQUFNOzRCQUFDLENBQUM7Ozs7Ozs7Z0dBQzFCRixDQUFIO2tDQUVJdkIsTUFBTSxDQUFDMEIsSUFBSSxDQUFDM0IsV0FBVSxFQUFFRyxHQUFHLENBQUMsUUFBUVcsQ0FBUGhCLEtBQUssRUFBRWdCLEdBQUc7MENBQ25DLE1BQU1jLENBQUFBLDZEQUFBQSxDQUFMQyxDQUFJOztvQ0FBc0IvQixLQUFLO29DQUFDLENBQUM7b0NBQUNFLFdBQVUsQ0FBQ0YsS0FBSztvQ0FBRSxDQUFDOzsrQkFBMUMsQ0FBSyxPQUFNLE9BQUpnQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLbkNVLENBQUM7c0dBQ0NNLENBQUU7OEJBRUtsQixRQUFRLENBQUNULEdBQUcsQ0FBQyxRQUFRLENBQVBFLElBQUksRUFBRVMsR0FBRyxFQUFLLENBQUM7d0JBQ3pCLEdBQUssQ0FBRUMsRUFBRSxHQUFhVixJQUFJLENBQW5CVSxFQUFFLEVBQUVFLE9BQU8sR0FBSVosSUFBSSxDQUFmWSxPQUFPO3dCQUNsQixHQUFLLENBQUNjLFNBQVMsR0FBSSxDQUFPLFNBQUssT0FBSGhCLEVBQUU7d0JBQzlCLEdBQUssQ0FBQ2lCLGdCQUFnQixHQUFHZixPQUFPLEdBQUcsQ0FBQzs0QkFBQSxDQUFnQixpQkFBRSxDQUFjO3dCQUFBLENBQUMsR0FBRyxDQUFDOzRCQUFBLENBQWdCLGlCQUFFLENBQU07d0JBQUEsQ0FBQzt3QkFDbEcsTUFBTSw2RUFDRGdCLENBQUU7OzRHQUNFSixDQUFJO29DQUFDSyxLQUFLLEVBQUVGLGdCQUFnQjs4Q0FBRzNCLElBQUksQ0FBQzhCLElBQUk7Ozs7Ozs0R0FDeENYLENBQUc7O29IQUNDWSxDQUFNOzRDQUFDQyxPQUFPLEVBQUUsUUFBUTtnREFBRjVCLE1BQU0sQ0FBTkEsVUFBVSxDQUFDTSxFQUFFOztzREFBRyxDQUFFOzs7Ozs7b0hBQ3BDdUIsQ0FBQzs0Q0FBQ0MsT0FBTyxFQUFFUixTQUFTO3NEQUFFLENBQUU7Ozs7OztvSEFDeEJTLENBQUM7NENBQUNDLElBQUksRUFBQyxDQUFVOzRDQUFDMUIsRUFBRSxFQUFFZ0IsU0FBUzs0Q0FBRVcsU0FBUyxFQUFDLENBQWE7NENBQUN6QixPQUFPLEVBQUVBLE9BQU87NENBQ3ZFMEIsUUFBUSxFQUFFLFFBQVE7Z0RBQUYzQixNQUFNLENBQU5BLFdBQVcsQ0FBQ0QsRUFBRTs7Ozs7Ozs7Ozs7Ozs7MkJBTm5DLENBQUksTUFBTSxPQUFKRCxHQUFHOzs7OztvQkFXM0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUtyQixDQUFDO0dBL0VLeEIsS0FBSzs7QUFvR1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0dldFNlcnZlclNpZGVQcm9wcywgTmV4dFBhZ2V9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCB7d3JhcHBlcn0gZnJvbSBcIi4uL3N0b3JlXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHRvZG9zOiBUb2RvVHlwZVtdO1xufVxuXG4vLyBAdHMtaWdub3JlXG5jb25zdCBpbmRleCA9ICh7dG9kb3N9KSA9PiB7XG4gICAgY29uc29sZS5sb2codG9kb3MpO1xuICAgIGNvbnNvbGUubG9nKFwi7YG065287J207Ja47Yq4IFwiLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMKTtcblxuICAgIGNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlU3RhdGUodG9kb3MpO1xuICAgIGNvbnN0IFtjb2xvcnNJbmZvLCBzZXRDb2xvcnNJbmZvXSA9IHVzZVN0YXRlKGdldENvbG9yc0luZm8odG9kb0xpc3QpKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENvbG9yc0luZm8oZ2V0Q29sb3JzSW5mbyh0b2RvTGlzdCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb2xvcnNJbmZvKTtcbiAgICB9LCBbdG9kb0xpc3RdKVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JzSW5mbyh0b2RvczogYW55KSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IHRvZG9zLnJlZHVjZSgoYWNjOiBhbnksIGN1cnJlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjYy5maW5kSW5kZXgoKGNvbG9yOiBhbnkpID0+IGNvbG9yID09PSBjdXJyZW50LmNvbG9yKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBhY2MucHVzaChjdXJyZW50LmNvbG9yKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIGNvbnN0IGNvbG9yc0luZm8gPSBPYmplY3QuZnJvbUVudHJpZXMoY29sb3JzLm1hcChjb2xvciA9PiBbY29sb3IsIDBdKSk7XG4gICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB7Y29sb3J9ID0gdG9kbztcbiAgICAgICAgICAgIGNvbnN0IGlzQ29sb3IgPSBjb2xvcnMuZmluZChpdGVtID0+IGl0ZW0gPT09IGNvbG9yKVxuICAgICAgICAgICAgaXNDb2xvciAmJiBjb2xvcnNJbmZvW2NvbG9yXSsrXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBjb2xvcnNJbmZvXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG9JZCkge1xuICAgICAgICBzZXRUb2RvTGlzdCh0b2RvTGlzdC5maWx0ZXIoKHRvZG8sIGlkeCkgPT4gdG9kby5pZCAhPT0gdG9kb0lkKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja2VkVG9kbyh0b2RvSWQpIHtcbiAgICAgICAgc2V0VG9kb0xpc3QodG9kb0xpc3QubWFwKCh0b2RvLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSAhdG9kby5jaGVja2VkXG4gICAgICAgICAgICBpZiAodG9kby5pZCA9PT0gdG9kb0lkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi50b2RvLCBjaGVja2VkfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvZG9cbiAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIDw+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPuuCqOydgCBUT0RPIHt0b2RvTGlzdC5sZW5ndGh96rCcPC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbG9yc0luZm8pLm1hcCgoY29sb3IsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtgY29sb3Ike2lkeH1gfT57Y29sb3J9IHtjb2xvcnNJbmZvW2NvbG9yXX3qsJw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3QubWFwKCh0b2RvLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtpZCwgY2hlY2tlZH0gPSB0b2RvO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc0lkID0gYHN1Y2Nlc3Mke2lkfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzVG9kb1N0eWxlID0gY2hlY2tlZCA/IHtcInRleHREZWNvcmF0aW9uXCI6IFwibGluZS10aHJvdWdoXCJ9IDoge1widGV4dERlY29yYXRpb25cIjogXCJub25lXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2B0b2RvJHtpZHh9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdWNjZXNzVG9kb1N0eWxlfT57dG9kby50ZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlVG9kbyhpZCl9PuyCreygnDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3N1Y2Nlc3NJZH0+7JmE66OMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17c3VjY2Vzc0lkfSBjbGFzc05hbWU9XCJzdWNjZXNzVG9kb1wiIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGNoZWNrZWRUb2RvKGlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcbmFzeW5jICh7c3RvcmV9KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuyEnOuyhCBcIiwgcHJvY2Vzcy5lbnYpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLsiqTthqDslrQgIFwiLCBzdG9yZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldDxUb2RvVHlwZVtdPignYXBpL3RvZG9zJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXMgPT09IDIwMCAmJiByZXMuZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7cHJvcHM6IHt0b2RvczogcmVzLmRhdGF9fVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3Byb3BzOiB7dG9kb3M6IFtdfX1cbiAgICB9XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbmRleCIsInRvZG9zIiwiZ2V0Q29sb3JzSW5mbyIsImNvbG9ycyIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiLCJmaW5kSW5kZXgiLCJjb2xvciIsInB1c2giLCJjb2xvcnNJbmZvIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJtYXAiLCJmb3JFYWNoIiwidG9kbyIsImlzQ29sb3IiLCJmaW5kIiwiaXRlbSIsImRlbGV0ZVRvZG8iLCJ0b2RvSWQiLCJzZXRUb2RvTGlzdCIsInRvZG9MaXN0IiwiZmlsdGVyIiwiaWR4IiwiaWQiLCJjaGVja2VkVG9kbyIsImNoZWNrZWQiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJzZXRDb2xvcnNJbmZvIiwiZGl2IiwicCIsImxlbmd0aCIsImtleXMiLCJrZXkiLCJzcGFuIiwidWwiLCJzdWNjZXNzSWQiLCJzdWNjZXNzVG9kb1N0eWxlIiwibGkiLCJzdHlsZSIsInRleHQiLCJidXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});