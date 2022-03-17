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

/***/ "./store/todo.ts":
/*!***********************!*\
  !*** ./store/todo.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_TODO_LIST\": function() { return /* binding */ SET_TODO_LIST; },\n/* harmony export */   \"setTodo\": function() { return /* binding */ setTodo; },\n/* harmony export */   \"todoActions\": function() { return /* binding */ todoActions; },\n/* harmony export */   \"default\": function() { return /* binding */ reducer; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n// ** 액션타입\nvar SET_TODO_LIST = \"todo/SET_TODO_LIST\";\n// ** 액션의 생성자들은 함수현태로 export 해야 함\nvar setTodo = function(payload) {\n    return {\n        type: SET_TODO_LIST,\n        payload: payload\n    };\n};\nvar todoActions = {\n    setTodo: setTodo\n};\nvar initialState = {\n    todos: []\n};\n// ** reducer\nfunction reducer() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case SET_TODO_LIST:\n            var newState = _objectSpread({}, state, {\n                todos: action.payload\n            });\n            return newState;\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsRUFBVTtBQUNILEdBQUssQ0FBQ0EsYUFBYSxHQUFHLENBQW9CO0FBRWpELEVBQWlDO0FBQzFCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLFFBQVEsQ0FBUEMsT0FBbUIsRUFBSyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxDQUFDO1FBQ0pDLElBQUksRUFBRUgsYUFBYTtRQUNuQkUsT0FBTyxFQUFQQSxPQUFPO0lBQ1gsQ0FBQztBQUNMLENBQUM7QUFFTSxHQUFLLENBQUNFLFdBQVcsR0FBRyxDQUFDSDtJQUFBQSxPQUFPLEVBQVBBLE9BQU87QUFBQSxDQUFDO0FBT3BDLEdBQUssQ0FBQ0ksWUFBWSxHQUFtQixDQUFDO0lBQ2xDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELEVBQWE7QUFDRSxRQUFRLENBQUNDLE9BQU8sR0FBbUMsQ0FBQztRQUFuQ0MsS0FBSyxvRUFBR0gsWUFBWSxFQUFFSSxNQUFXO0lBQzdELE1BQU0sQ0FBRUEsTUFBTSxDQUFDTixJQUFJO1FBQ2YsSUFBSSxDQUFDSCxhQUFhO1lBQ2QsR0FBSyxDQUFDVSxRQUFRLHFCQUFPRixLQUFLO2dCQUFFRixLQUFLLEVBQUVHLE1BQU0sQ0FBQ1AsT0FBTzs7WUFDakQsTUFBTSxDQUFDUSxRQUFROztZQUVmLE1BQU0sQ0FBQ0YsS0FBSzs7QUFFeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS90b2RvLnRzPzE5ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vICoqIOyVoeyFmO2DgOyehVxuZXhwb3J0IGNvbnN0IFNFVF9UT0RPX0xJU1QgPSBcInRvZG8vU0VUX1RPRE9fTElTVFwiO1xuXG4vLyAqKiDslaHshZjsnZgg7IOd7ISx7J6Q65Ok7J2AIO2VqOyImO2YhO2DnOuhnCBleHBvcnQg7ZW07JW8IO2VqFxuZXhwb3J0IGNvbnN0IHNldFRvZG8gPSAocGF5bG9hZDogVG9kb1R5cGVbXSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNFVF9UT0RPX0xJU1QsXG4gICAgICAgIHBheWxvYWRcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2RvQWN0aW9ucyA9IHtzZXRUb2RvfTtcblxuLy8gKiog66as642V7IqkIOyymOydjCDsg4Htg5xcbmludGVyZmFjZSBUb2RvUmVkdXhTdGF0ZSB7XG4gICAgdG9kb3M6IFRvZG9UeXBlW11cbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBUb2RvUmVkdXhTdGF0ZSA9IHtcbiAgICB0b2RvczogW11cbn1cblxuLy8gKiogcmVkdWNlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBhbnkpe1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFNFVF9UT0RPX0xJU1QgOlxuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB7Li4uc3RhdGUsIHRvZG9zOiBhY3Rpb24ucGF5bG9hZH1cbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlNFVF9UT0RPX0xJU1QiLCJzZXRUb2RvIiwicGF5bG9hZCIsInR5cGUiLCJ0b2RvQWN0aW9ucyIsImluaXRpYWxTdGF0ZSIsInRvZG9zIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmV3U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/todo.ts\n");

/***/ })

});