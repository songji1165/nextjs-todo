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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSelector\": function() { return /* binding */ useSelector; },\n/* harmony export */   \"wrapper\": function() { return /* binding */ wrapper; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./store/todo.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n// 타입 지원되는 커스텀 useSelector 만들기\nvar useSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector;\n// combineReducers : 리듀서를 모듈별로 관리하여 combineReducers를 통해 하나로 모음\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({\n    todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reducer\n});\nvar reducer = function(state, action) {\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {\n        var nextState = _objectSpread({}, state, action.payload);\n        if (state.count) nextState.count = state.count;\n        return nextState;\n    }\n    return rootReducer(state, action);\n};\n// 스토어 생성\nvar initStore = function() {\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({\n        reducer: reducer,\n        devTools: true\n    });\n};\n// App 컴포넌트에서 wrapper로 사용하기 위해, createWrapper를 임포트\nvar wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBQzFDO0FBQ2dDO0FBQ1Y7QUFDa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLEVBQThCO0FBQ3ZCLEdBQUssQ0FBQ0ssV0FBVyxHQUFvQ0Msb0RBQWdCO0FBRzVFLEVBQThEO0FBQ3RCLEdBQW5DLENBQUNDLFdBQVcsR0FBR1Asc0RBQWUsQ0FBQyxDQUFDO0lBQ2pDQyxJQUFJLEVBQUVBLHFEQUFZO0FBQ3RCLENBQUM7QUFFRCxHQUFLLENBQUNPLE9BQU8sR0FBRyxRQUFRLENBQVBDLEtBQVUsRUFBRUMsTUFBVSxFQUFLLENBQUM7SUFDekMsRUFBRSxFQUFDQSxNQUFNLENBQUNDLElBQUksS0FBS1IsdURBQU8sRUFBQyxDQUFDO1FBQ3hCLEdBQUssQ0FBQ1MsU0FBUyxxQkFDUkgsS0FBSyxFQUNMQyxNQUFNLENBQUNHLE9BQU87UUFFckIsRUFBRSxFQUFDSixLQUFLLENBQUNLLEtBQUssRUFBRUYsU0FBUyxDQUFDRSxLQUFLLEdBQUdMLEtBQUssQ0FBQ0ssS0FBSztRQUM3QyxNQUFNLENBQUNGLFNBQVM7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQ0wsV0FBVyxDQUFDRSxLQUFLLEVBQUVDLE1BQU07QUFDcEMsQ0FBQztBQUtELEVBQVM7QUFDQyxHQUFMLENBQUNLLFNBQVMsR0FBRyxRQUNsQixHQUR3QixDQUFDO0lBQ3JCLE1BQU0sQ0FBQ1gsZ0VBQWMsQ0FBQyxDQUFDO1FBQ25CSSxPQUFPLEVBQVBBLE9BQU87UUFDUFEsUUFBUSxFQUFFLElBQUk7SUFDbEIsQ0FBQztBQUNMLENBQUM7QUFFRCxFQUFrRDtBQUMzQyxHQUFLLENBQUNDLE9BQU8sR0FBR2YsaUVBQWEsQ0FBQ2EsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9pbmRleC50cz9iNWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIlxuaW1wb3J0IHtjcmVhdGVXcmFwcGVyLCBIWURSQVRFfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQge2NvbmZpZ3VyZVN0b3JlfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHtUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlU2VsZWN0b3IgYXMgdXNlUmVkdXhTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbi8vIO2DgOyehSDsp4Dsm5DrkJjripQg7Luk7Iqk7YWAIHVzZVNlbGVjdG9yIOunjOuTpOq4sFxuZXhwb3J0IGNvbnN0IHVzZVNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlUmVkdXhTZWxlY3RvcjtcblxuXG4vLyBjb21iaW5lUmVkdWNlcnMgOiDrpqzrk4DshJzrpbwg66qo65OI67OE66GcIOq0gOumrO2VmOyXrCBjb21iaW5lUmVkdWNlcnPrpbwg7Ya17ZW0IO2VmOuCmOuhnCDrqqjsnYxcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0b2RvOiB0b2RvLnJlZHVjZXIsXG59KVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBhbnksIGFjdGlvbjphbnkpID0+IHtcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gSFlEUkFURSl7IC8vIGh5ZHJhdGUgOiDshJzrsoTsl5DshJwg7IOd7ISx65CcIOumrOuNleyKpCDsiqTthqDslrTrpbwg7YG065287J207Ja47Yq47JeQ7IScIOyCrOyaqe2VoCDsiJgg7J6I64+E66GdIOyghOuLrO2VtOyjvOuKlCDsl63tlaBcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgICB9XG4gICAgICAgIGlmKHN0YXRlLmNvdW50KSBuZXh0U3RhdGUuY291bnQgPSBzdGF0ZS5jb3VudDtcbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbilcbn1cblxuLy8g7Iqk7Yag7Ja0IO2DgOyehTogcm9vdFJlZHVjZXIg66GcIOyWu+ydhCDsiJgg7J6I7J2MXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XG5cbi8vIOyKpO2GoOyWtCDsg53shLFcbmNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xuICAgICAgICByZWR1Y2VyLFxuICAgICAgICBkZXZUb29sczogdHJ1ZVxuICAgIH0pXG59O1xuXG4vLyBBcHAg7Lu07Y+s64SM7Yq47JeQ7IScIHdyYXBwZXLroZwg7IKs7Jqp7ZWY6riwIOychO2VtCwgY3JlYXRlV3JhcHBlcuulvCDsnoTtj6ztirhcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpXG5cbiJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJ0b2RvIiwiY3JlYXRlV3JhcHBlciIsIkhZRFJBVEUiLCJjb25maWd1cmVTdG9yZSIsInVzZVNlbGVjdG9yIiwidXNlUmVkdXhTZWxlY3RvciIsInJvb3RSZWR1Y2VyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5leHRTdGF0ZSIsInBheWxvYWQiLCJjb3VudCIsImluaXRTdG9yZSIsImRldlRvb2xzIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ })

});