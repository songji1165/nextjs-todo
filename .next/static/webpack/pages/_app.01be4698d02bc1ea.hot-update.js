"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": function() { return /* binding */ wrapper; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./store/todo.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n// combineReducers : 리듀서를 모듈별로 관리하여 combineReducers를 통해 하나로 모음\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\n    todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\nvar reducer = function(state, action) {\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n        var nextState = _objectSpread({}, state, action.payload);\n        return nextState;\n    }\n    return rootReducer(state, action);\n};\n// 미들웨어 적용을 위한 스토어 enhancer\nvar bindMiddleware = function(middleware) {\n    // 액션 -> 미들웨어 -> 디스패치\n    if (true) {\n        var composeWithDevTools = (__webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\").composeWithDevTools);\n        return composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware.apply(void 0, _toConsumableArray(middleware)));\n    }\n};\n// 스토어 생성\nvar initStore = function() {\n    return (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(reducer, bindMiddleware([]));\n};\n// App 컴포넌트에서 wrapper로 사용하기 위해, createWrapper를 임포트\nvar wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1FO0FBQzFDO0FBQ2dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsRUFBOEQ7QUFDdEIsR0FBbkMsQ0FBQ00sV0FBVyxHQUFHTCxzREFBZSxDQUFDLENBQUM7SUFDakNFLElBQUksRUFBSkEsNkNBQUk7QUFDUixDQUFDO0FBRUQsR0FBSyxDQUFDSSxPQUFPLEdBQUcsUUFBUSxDQUFQQyxLQUFVLEVBQUVDLE1BQVUsRUFBSyxDQUFDO0lBQ3pDLEVBQUUsRUFBQ0EsTUFBTSxDQUFDQyxJQUFJLEtBQUtMLHVEQUFPLEVBQUMsQ0FBQztRQUN4QixHQUFLLENBQUNNLFNBQVMscUJBQ1JILEtBQUssRUFDTEMsTUFBTSxDQUFDRyxPQUFPO1FBRXJCLE1BQU0sQ0FBQ0QsU0FBUztJQUNwQixDQUFDO0lBRUQsTUFBTSxDQUFDTCxXQUFXLENBQUNFLEtBQUssRUFBRUMsTUFBTTtBQUNwQyxDQUFDO0FBS0QsRUFBMkI7QUFDSCxHQUFuQixDQUFDSSxjQUFjLEdBQUcsUUFBUSxDQUFQQyxVQUFlLEVBQUssQ0FBQztJQUN6QyxFQUFxQjtJQUNELEVBQWxCLEVBM0JOLElBMkI0QyxFQUFDLENBQUM7UUFDdEMsR0FBSyxDQUFFQyxtQkFBbUIsR0FBSUMsNkhBQUo7UUFDMUIsTUFBTSxDQUFDRCxtQkFBbUIsQ0FBQ2Ysd0RBQThCLENBQTlCQSxJQUFJLENBQUpBLENBQWUscUJBQUljLFVBQVU7SUFDNUQsQ0FBQztBQUNMLENBQUM7QUFFRCxFQUFTO0FBQ0MsR0FBTCxDQUFDRyxTQUFTLEdBQUcsUUFDbEIsR0FEd0IsQ0FBQztJQUNyQixNQUFNLENBQUNmLGtEQUFXLENBQUNLLE9BQU8sRUFBRU0sY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsRUFBa0Q7QUFDM0MsR0FBSyxDQUFDSyxPQUFPLEdBQUdkLGlFQUFhLENBQUNhLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXgudHM/YjViMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCJcbmltcG9ydCB7Y3JlYXRlV3JhcHBlciwgSFlEUkFURX0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuXG4vLyBjb21iaW5lUmVkdWNlcnMgOiDrpqzrk4DshJzrpbwg66qo65OI67OE66GcIOq0gOumrO2VmOyXrCBjb21iaW5lUmVkdWNlcnPrpbwg7Ya17ZW0IO2VmOuCmOuhnCDrqqjsnYxcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0b2RvLFxufSlcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogYW55LCBhY3Rpb246YW55KSA9PiB7XG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpeyAvLyBoeWRyYXRlIDog7ISc67KE7JeQ7IScIOyDneyEseuQnCDrpqzrjZXsiqQg7Iqk7Yag7Ja066W8IO2BtOudvOydtOyWuO2KuOyXkOyEnCDsgqzsmqntlaAg7IiYIOyeiOuPhOuhnSDsoITri6ztlbTso7zripQg7Jet7ZWgXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgIH1cblxuICAgIHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxufVxuXG4vLyDsiqTthqDslrQg7YOA7J6FOiByb290UmVkdWNlciDroZwg7Ja77J2EIOyImCDsnojsnYxcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcblxuLy8g66+465Ok7Juo7Ja0IOyggeyaqeydhCDsnITtlZwg7Iqk7Yag7Ja0IGVuaGFuY2VyXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlOiBhbnkpID0+IHtcbiAgICAvLyDslaHshZggLT4g66+465Ok7Juo7Ja0IC0+IOuUlOyKpO2MqOy5mFxuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIil7XG4gICAgICAgIGNvbnN0IHtjb21wb3NlV2l0aERldlRvb2xzfSA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7XG4gICAgICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgICB9XG59XG5cbi8vIOyKpO2GoOyWtCDsg53shLFcbmNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW10pKTtcbn07XG5cbi8vIEFwcCDsu7Ttj6zrhIztirjsl5DshJwgd3JhcHBlcuuhnCDsgqzsmqntlZjquLAg7JyE7ZW0LCBjcmVhdGVXcmFwcGVy66W8IOyehO2PrO2KuFxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSlcblxuIl0sIm5hbWVzIjpbImFwcGx5TWlkZGxld2FyZSIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVN0b3JlIiwidG9kbyIsImNyZWF0ZVdyYXBwZXIiLCJIWURSQVRFIiwicm9vdFJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV4dFN0YXRlIiwicGF5bG9hZCIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiaW5pdFN0b3JlIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ })

});