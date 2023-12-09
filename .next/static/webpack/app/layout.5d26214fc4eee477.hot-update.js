"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _features_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/api/apiSlice */ \"(app-pages-browser)/./redux/features/api/apiSlice.ts\");\n/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/auth/authSlice */ \"(app-pages-browser)/./redux/features/auth/authSlice.ts\");\n\"use client \";\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({\n    reducer: {\n        [_features_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.reducerPath]: _features_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.reducer,\n        auth: _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    // devTools: false,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_features_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.middleware)\n});\nconst initializeApp = async ()=>{\n    await store.dispatch(_features_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.endpoints.refreshToken.initiate({}, {\n        forceRefetch: true\n    }));\n    await store.dispatch(_features_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.endpoints.loadUser.initiate({}, {\n        forceRefetch: true\n    }));\n};\ninitializeApp();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L3N0b3JlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVrRDtBQUNDO0FBQ0Q7QUFFM0MsTUFBTUcsUUFBUUgsZ0VBQWNBLENBQUM7SUFDaENJLFNBQVM7UUFDTCxDQUFDSCw0REFBUUEsQ0FBQ0ksV0FBVyxDQUFDLEVBQUVKLDREQUFRQSxDQUFDRyxPQUFPO1FBQ3hDRSxNQUFNSixnRUFBU0E7SUFDbkI7SUFDQSxtQkFBbUI7SUFDbkJLLFlBQVksQ0FBQ0MsdUJBQXlCQSx1QkFBdUJDLE1BQU0sQ0FBQ1IsNERBQVFBLENBQUNNLFVBQVU7QUFDM0YsR0FBRTtBQUdGLE1BQU1HLGdCQUFnQjtJQUNsQixNQUFNUCxNQUFNUSxRQUFRLENBQ2hCViw0REFBUUEsQ0FBQ1csU0FBUyxDQUFDQyxZQUFZLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7UUFBRUMsY0FBYztJQUFLO0lBRXRFLE1BQU1aLE1BQU1RLFFBQVEsQ0FDaEJWLDREQUFRQSxDQUFDVyxTQUFTLENBQUNJLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsR0FBRztRQUFFQyxjQUFjO0lBQUs7QUFFdEU7QUFDQUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUudHM/OTNhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCAnO1xuXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgYXBpU2xpY2UgfSBmcm9tICcuL2ZlYXR1cmVzL2FwaS9hcGlTbGljZSc7XG5pbXBvcnQgYXV0aFNsaWNlIGZyb20gJy4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjoge1xuICAgICAgICBbYXBpU2xpY2UucmVkdWNlclBhdGhdOiBhcGlTbGljZS5yZWR1Y2VyLFxuICAgICAgICBhdXRoOiBhdXRoU2xpY2UsXG4gICAgfSxcbiAgICAvLyBkZXZUb29sczogZmFsc2UsXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBnZXREZWZhdWx0TWlkZGxld2FyZSgpLmNvbmNhdChhcGlTbGljZS5taWRkbGV3YXJlKVxufSlcblxuXG5jb25zdCBpbml0aWFsaXplQXBwID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBhcGlTbGljZS5lbmRwb2ludHMucmVmcmVzaFRva2VuLmluaXRpYXRlKHt9LCB7IGZvcmNlUmVmZXRjaDogdHJ1ZSB9KVxuICAgICk7XG4gICAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIGFwaVNsaWNlLmVuZHBvaW50cy5sb2FkVXNlci5pbml0aWF0ZSh7fSwgeyBmb3JjZVJlZmV0Y2g6IHRydWUgfSlcbiAgICApO1xufTtcbmluaXRpYWxpemVBcHAoKSJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImFwaVNsaWNlIiwiYXV0aFNsaWNlIiwic3RvcmUiLCJyZWR1Y2VyIiwicmVkdWNlclBhdGgiLCJhdXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0IiwiaW5pdGlhbGl6ZUFwcCIsImRpc3BhdGNoIiwiZW5kcG9pbnRzIiwicmVmcmVzaFRva2VuIiwiaW5pdGlhdGUiLCJmb3JjZVJlZmV0Y2giLCJsb2FkVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/store.ts\n"));

/***/ })

});